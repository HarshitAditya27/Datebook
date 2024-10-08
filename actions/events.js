"use server";
import { db } from "@/lib/prisma";
import { eventSchema } from "@/lib/validators";
import { auth } from "@clerk/nextjs/server";
import { addDays, format, startOfDay } from "date-fns";

export async function createEvent(data) {
  const { userId } = auth();
  if (!userId) {
    throw new Error("unauthorized");
  }

  const validateData = eventSchema.parse(data);

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const event = await db.event.create({
    data: {
      ...validateData,
      userId: user.id,
    },
  });
  return event;
}

export async function getUserEvents() {
  const { userId } = auth();
  if (!userId) {
    throw new Error("unauthorized");
  }
  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const events = await db.event.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
    include: {
      _count: {
        select: { bookings: true },
      },
    },
  });
  return { events, username: user.username };
}

export async function deleteEvent(eventId) {
  const { userId } = auth();
  if (!userId) {
    throw new Error("unauthorized");
  }
  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const event = await db.event.findUnique({
    where: { id: eventId },
  });

  if (!event || event.userId !== user.id) {
    throw new Error("Event not found or unauthorized");
  }
  await db.event.delete({
    where: { id: eventId },
  });
  return { success: true };
}

export async function getEventDetails(username, eventId) {
  const event = await db.event.findFirst({
    where: {
      id: eventId,
      user: {
        username: username,
      },
    },
    include: {
      user: {
        select: {
          name: true,
          email: true,
          username: true,
          imageUrl: true,
        },
      },
    },
  });
  return event;
}

export async function getEventAvailability(eventId) {
  const event = await db.event.findUnique({
    where: {
      id: eventId,
    },
    include: {
      user: {
        include: {
          availability: {
            select: {
              days: true,
              timeGap: true,
            },
          },
          bookings: {
            select: {
              startTime: true,
              endTime: true,
            },
          },
        },
      },
    },
  });
  if (!event || !event.user.availability) {
    return [];
  }
  const { availability, bookings } = event.user;

  const startDate = startOfDay(new Date());
  const endDate = addDays(startDate, 30);

  const availableDates = [];

  for (let date = startDate; date <= endDate; date = addDays(date, 1)) {
    const dayOfWeek = format(date, "EEEE").toUpperCase();
    const dayAvailability = availability.days.find((d) => d.day === dayOfWeek);

    if (dayAvailability) {
      const dateStr = format(date, "yyyy-MM-dd");
      const slots = generateAvailableSlots(
        dayAvailability.startTime,
        dayAvailability.endTime,
        event.duration,
        bookings,
        dateStr,
        availability.timeGap
      );
      availableDates.push({
        date: dateStr,
        slots,
      });
    }
  }
  return availableDates;
}
