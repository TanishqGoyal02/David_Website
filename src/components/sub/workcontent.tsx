"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel"; // Adjust the import path as needed

const cardData = [
  {
    src: "/image1.jpg",
    title: "The Dawning of the Age of Aquarius: Cosmic Ages and Cycles I",
    content: (
      <div>
        <p>
          By observing nature, we witness endless cycles, which is the natural
          rhythm and expression of the universe. Along with these cycles comes
          divine precedence, granting law and order for all to oblige and
          conform to. The magnificent sun is born at dawn in the east, journeys
          through the sky, culminating to maturity, and then begins its descent.
          At dusk, it finally reaches the end of its journey, dying, only to be
          reborn again in the east the following morning, continuing its eternal
          diurnal cycle.
        </p>

        <p>
          Each of us also mirrors this diurnal cycle in our lives. Awakening at
          dawn in synchrony with the sun&apos;s rhythm, we work and labor
          through the day, retiring and resting at dusk. Sleep serves as a
          symbolic death, only to resurrect at sunrise once again in the
          timeless pattern.
        </p>

        <p>
          Spring, Summer, Autumn, and Winter come and go in an eternal cosmic
          dance, a testament to the rhythmic cycles of the seasons. Spring
          triggers a resurgence of life and vitality: plants bloom, seeds
          sprout, and perennial vegetation awakens from winter&apos;s dormancy.
          The landscape is replenished and rejuvenated, forging a fertile,
          incubating environment.
        </p>

        <p>
          Summer arrives with the longest days and the sun at its zenith,
          maximizing light and energy to support all life forms in their
          survival. A richly resourced environment prevails across the land for
          all to enjoy the peak of abundance. The summer solstice, marking the
          longest day and shortest night, symbolizes Earth&apos;s vitality,
          fertility, but more importantly, the pinnacle of consciousness. This
          solstice symbolically corresponds to the attainment of enlightenment
          and divine consciousness. Witnessing the light triumph over the
          darkness, clarity and wisdom illuminate one&apos;s path of
          development, culminating unity with the divine.
        </p>

        <p>
          As sunlight wanes, Autumn gently ushers in change. Nature begins its
          preparation for the harsher conditions ahead in winter. Trees shed
          their leaves as one of the most visible signs of transformation and
          energy conservation. All life forms begin to undergo adaptive changes
          and secure resources for the impending extreme weather. The days grow
          shorter, temperatures begin to drop, and the landscape transitions
          into a state of dormancy.
        </p>

        <p>
          Sunlight significantly diminishes, resulting in short days and longer
          nights, causing a substantial drop in temperature. Winter has finally
          come. The cold temperature dominates the landscape causing ice,
          freezing, and snow creating inhospitable conditions for most forms of
          life. Plants wither away, and all animal species are forced to adapt
          their behavior to survive. The land appears barren and desolate,
          bestowing a sense of death upon the earth. The winter solstice
          symbolizes the death of the sun, followed by its rebirth, bringing
          aspiration and hope of a new beginning as the days begin to lengthen.
          In our development of consciousness, the winter solstice calls to our
          depths, inviting us to embark on the journey from ignorance to wisdom,
          and ultimately, divine consciousness. As light is significantly
          diminished and the sun reaches its lowest point in the sky, its
          endeavor is to journey toward awareness as the days grow brighter.
        </p>

        <p>
          These daily and seasonal cycles correspond to the cosmological journey
          of our consciousness: birth, growth, maturity, death, and rebirth. By
          understanding the natural precedence of these cycles over both mundane
          and spiritual affairs, we gain wisdom and insight into our own fate
          and destiny. Through this awareness, we can harmonize with the rhythms
          of existence and navigate the flow of life with greater clarity.
        </p>
      </div>
    ),
  },
  // ... (You can paste the rest of the cards here similarly escaped)
];

const PortfolioCarousel = () => {
  return (
    <div className="z-50 -translate-y-10 px-4">
      <div className="rounded-xl bg-slate-900/60 shadow-[0_0_60px_10px_rgba(168,85,247,0.25)] ring-1 ring-purple-400/30 backdrop-blur-md p-6 transition-all hover:scale-[1.01]">
        <Carousel
          items={cardData.map((card, index) => (
            <Card key={index} card={card} index={index} layout />
          ))}
        />
      </div>
    </div>
  );
};

export default PortfolioCarousel;
