import React from "react";
import EthusiastCard from "../cards/EthusiastCard";

function EthusiastSection() {
  const data = [
    {
      name: "Melissa P.",
      avatarUrl: "/images/melissa.png",
      imageUrl: "/images/melissa_p.png",
      description: "Nov 27th, 2023 / UX Research",
      content:
        "I was recommended products that fit me 100% and, more importantly,  didn't cost like a spaceship. Thank  you!",
    },

    {
      name: "Ryan",
      avatarUrl: "/images/melissa.png",
      description: "Nov 27th, 2023 / UX Research",
      content:
        "I was recommended products that fit me 100% and, more importantly,  didn't cost like a spaceship. Thank  you!",
    },
    {
      name: "Melissa P.",
      avatarUrl: "/images/melissa.png",
      imageUrl: "/images/melissa_p.png",
      description: "Nov 27th, 2023 / UX Research",
      content:
        "I was recommended products that fit me 100% and, more importantly,  didn't cost like a spaceship. Thank  you!",
    },

    {
      name: "Ryan",
      avatarUrl: "/images/melissa.png",
      description: "Nov 27th, 2023 / UX Research",
      content:
        "I was recommended products that fit me 100% and, more importantly,  didn't cost like a spaceship. Thank  you!",
    },
    {
      name: "Melissa P.",
      avatarUrl: "/images/melissa.png",
      imageUrl: "/images/melissa_p.png",
      description: "Nov 27th, 2023 / UX Research",
      content:
        "I was recommended products that fit me 100% and, more importantly,  didn't cost like a spaceship. Thank  you!",
    },

    {
      name: "Ryan",
      avatarUrl: "/images/melissa.png",
      description: "Nov 27th, 2023 / UX Research",
      content:
        "I was recommended products that fit me 100% and, more importantly,  didn't cost like a spaceship. Thank  you!",
    },
    {
      name: "Melissa P.",
      avatarUrl: "/images/melissa.png",
      imageUrl: "/images/melissa_p.png",
      description: "Nov 27th, 2023 / UX Research",
      content:
        "I was recommended products that fit me 100% and, more importantly,  didn't cost like a spaceship. Thank  you!",
    },

    {
      name: "Ryan",
      avatarUrl: "/images/melissa.png",
      description: "Nov 27th, 2023 / UX Research",
      content:
        "I was recommended products that fit me 100% and, more importantly,  didn't cost like a spaceship. Thank  you!",
    },
    {
      name: "Melissa P.",
      avatarUrl: "/images/melissa.png",
      imageUrl: "/images/melissa_p.png",
      description: "Nov 27th, 2023 / UX Research",
      content:
        "I was recommended products that fit me 100% and, more importantly,  didn't cost like a spaceship. Thank  you!",
    },

    {
      name: "Ryan",
      avatarUrl: "/images/melissa.png",
      description: "Nov 27th, 2023 / UX Research",
      content:
        "I was recommended products that fit me 100% and, more importantly,  didn't cost like a spaceship. Thank  you!",
    },
  ];
  return (
    <section>
      <p className="text-headerMobile font-bold md:font-normal md:text-header text-primary">
        Loved by both beginners & enthusiasts
      </p>

      <div className="flex w-full overflow-x-scroll gap-[8px] mt-[40px]">
        {data.map((item, index) => (
          <EthusiastCard {...item} key={index} />
        ))}
      </div>
    </section>
  );
}

export default EthusiastSection;
