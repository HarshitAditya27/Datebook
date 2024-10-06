"use client";
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const testimonials = [
  {
    name: "Ichigo Kurosaki",
    role: "Frontend Developer",
    content:
      "Datebook has revolutionized the way I organize my team's meetings. Its intuitive design saves us hours each week!",
    image:
      "https://i.pinimg.com/736x/72/43/a8/7243a820937c0510004fa2fc0059c8c0.jpg",
  },
  {
    name: "Byakuya Kuchiki",
    role: "Senior Software Engineer",
    content:
      "As a Senior Software Engineer, Datebook enables me to remain organized and professional. My clients appreciate the ease with which they can schedule time with me.",
    image:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/addb6929-b464-4083-8672-a4cc7c520a45/d1oqjeu-3fb70c06-03a4-40ff-8c0a-c105f852a50c.jpg/v1/fill/w_900,h_675,q_75,strp/kuchiki_byakuya_by_animefreek4lyfe_d1oqjeu-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Njc1IiwicGF0aCI6IlwvZlwvYWRkYjY5MjktYjQ2NC00MDgzLTg2NzItYTRjYzdjNTIwYTQ1XC9kMW9xamV1LTNmYjcwYzA2LTAzYTQtNDBmZi04YzBhLWMxMDVmODUyYTUwYy5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.g7YPRBzJVgbzw5CFzRk4sIdbBS5kZ3xVZgAJYGGbxHk",
  },
  {
    name: "Aizen Sosuke",
    role: "Startup Founder",
    content:
      "Datebook has streamlined our hiring process, making it easier than ever to schedule interviews!",
    image:
      "https://i.pinimg.com/736x/f5/0a/33/f50a336fef8bf6514d18ae7c90318efd.jpg",
  },
  {
    name: "Urahara Kisuke",
    role: "Senior Staff engineer",
    content:
      "I've seen a 30% increase in my meeting bookings since using Datebook. It's a game-changer for sales professionals.",
    image:
      "https://upload.wikimedia.org/wikipedia/tr/6/64/Kisuke_Urahara_Anime.jpg",
  },
];

function TestimonialCarousel() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="w-full mx-auto"
    >
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className=" md:basic-1/2 lg:basis-1/3">
            <Card className="h-full">
              <CardContent className="flex flex-col justify-between h-full p-6">
                <p className="text-gray-600 mb-4">
                  &quot;{testimonial.content}&quot;
                </p>
                <div className="flex items-center mt-4">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default TestimonialCarousel;
