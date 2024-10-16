import { getUserAvailability } from "@/actions/availability";
import React from "react";
import AvailabilityLayout from "./layout";
import { defaultAvailability } from "./data";
import AvailabilityForm from "./_components/availability-form";

async function AvailabilityPage() {
  const availability = await getUserAvailability();
  //console.log(availability);
  return <AvailabilityForm initialData={availability || defaultAvailability} />;
}

export default AvailabilityPage;
