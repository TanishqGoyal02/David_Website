"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel"; // Adjust the import path as needed

const cardData = [
  {
    src: "/image1.jpg",
    title: "Project One",
    category: "Web Development",
    content: (
      <p>
        This project is a web application built using React and Node.js. It
        features a responsive design and a user-friendly interface.
      </p>
    ),
  },
  {
    src: "/image2.jpg",
    title: "Project Two",
    category: "Graphic Design",
    content: (
      <p>
        A collection of graphic design projects including branding, poster
        design, and digital illustrations created using Adobe Creative Suite.
      </p>
    ),
  },
  {
    src: "/image3.jpg",
    title: "Project Three",
    category: "Mobile Development",
    content: (
      <p>
        A cross-platform mobile app developed using Flutter. It includes
        features such as real-time data syncing, push notifications, and more.
      </p>
    ),
  },
  {
    src: "/image3.jpg",
    title: "Project four",
    category: "Mobile Development",
    content: (
      <p>
        A cross-platform mobile app developed using Flutter. It includes
        features such as real-time data syncing, push notifications, and more.
      </p>
    ),
  },
];

const PortfolioCarousel = () => {
  return (
    <div className="w-full max-w-7xl mx-auto py-10">
      <Carousel
        items={cardData.map((card, index) => (
          <Card key={index} card={card} index={index} layout />
        ))}
      />
    </div>
  );
};

export default PortfolioCarousel;
