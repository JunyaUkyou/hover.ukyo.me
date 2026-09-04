export type HoverStyle = {
  id: number;
  title: string;
  description: string;
  gradient: string;
  hoverClass: string;
};

export const hoverStyles: HoverStyle[] = [
  {
    id: 1,
    title: "Radial Sweep",
    description: "Rotates right from the bottom-left corner",
    gradient: "from-green-accent to-starbucks-green",
    hoverClass: `
      overflow-hidden
      group-hover:before:rotate-0
      before:content-[''] before:absolute before:left-0 before:top-0
      before:bg-starbucks-green before:w-full before:h-full before:-z-10
      before:origin-bottom-left before:-rotate-90
      before:transition-[rotate] before:duration-300
    `,
  },
  {
    id: 2,
    title: "Lateral Sweep",
    description: "Sweep from left to right",
    gradient: "from-house-green to-green-uplift",
    hoverClass: `
      overflow-hidden
      group-hover:before:translate-x-0
      before:content-[''] before:absolute before:left-0 before:top-0
      before:bg-starbucks-green before:w-full before:h-full before:-z-10
      before:-translate-x-full
      before:transition-[translate] before:duration-300
    `,
  },
  {
    id: 3,
    title: "Spread Sweep",
    description: "Spreads out from the center in all directions",
    gradient: "from-green-accent to-green-light",
    hoverClass: `
      overflow-hidden
      group-hover:before:rotate-x-0 group-hover:after:rotate-y-0
      before:content-[''] before:absolute before:left-0 before:top-0
      before:bg-starbucks-green before:w-full before:h-full before:-z-10
      before:rotate-x-90 before:transition-all before:duration-700
      after:content-[''] after:absolute after:left-0 after:top-0
      after:bg-starbucks-green after:w-full after:h-full after:-z-10
      after:rotate-y-90 after:transition-all after:duration-700
    `,
  },
  {
    id: 4,
    title: "Vertical Spread Sweep",
    description: "Spreads out vertically from the center.",
    gradient: "from-gold to-gold-light",
    hoverClass: `
      overflow-hidden
      group-hover:before:rotate-x-0
      before:content-[''] before:absolute before:left-0 before:top-0
      before:bg-starbucks-green before:w-full before:h-full before:-z-10
      before:rotate-x-90 before:transition-all before:duration-700
    `,
  },
  {
    id: 5,
    title: "Lateral Pass Fill",
    description: "Passes a diagonal line across, then sweep",
    gradient: "from-starbucks-green to-house-green",
    hoverClass: `
      overflow-hidden
      group-hover:before:translate-x-full
      before:content-[''] before:absolute before:left-0 before:top-0
      before:bg-starbucks-green before:w-full before:h-full before:-z-10
      before:-translate-x-full before:rotate-45
      before:transition-all before:duration-500
      transition-colors duration-300
      group-hover:bg-starbucks-green group-hover:delay-500
    `,
  },
  {
    id: 6,
    title: "Vertical Text Slide",
    description: "Slides down from the top",
    gradient: "from-green-uplift to-green-accent",
    hoverClass: `
      overflow-hidden
      group-hover:before:translate-y-0
      before:content-['Hovered'] before::text-starbucks-green
      before:absolute before:left-0 before:top-0
      before:bg-starbucks-green before:text-white
      before:w-full before:h-full
      before:-translate-y-full before:transition-all before:duration-300
      before:flex before:justify-center before:items-center
    `,
  },
  {
    id: 7,
    title: "3D Vertical Text Flip",
    description: "Rotates down from the top twice with a delay",
    gradient: "from-house-green to-starbucks-green",
    hoverClass: `
      group-hover:before:rotate-x-0 group-hover:after:rotate-x-0
      before:content-['Hovered'] before::text-starbucks-green
      before:absolute before:left-0 before:top-0
      before:bg-starbucks-green before:text-white
      before:w-full before:h-full
      before:rotate-x-270 before:transition-all before:duration-500
      before:flex before:justify-center before:items-center
      before:origin-top before:rounded-full
      after:content-['Hovered']
      after:absolute after:left-0 after:top-0
      after:bg-house-green after:text-white
      after:w-full after:h-full
      after:rotate-x-270 after:transition-all after:duration-500
      after:flex after:justify-center after:items-center
      after:origin-top after:rounded-full after:delay-300
    `,
  },
];
