export const Hover7 = () => {
  return (
    <div className="group cursor-pointer">
      <a
        className="no-underline  py-2 px-5 relative block group-hover:before:rotate-x-0
        group-hover:after:rotate-x-0
          text-white
          text-sm
          bg-gold
        z-0
        rounded-full
        before:content-['Hovered']
        before::text-starbucks-green
        before:absolute
        before:left-0
        before:top-0
        before:bg-starbucks-green
        before:text-white
        before:w-full
        before:h-full
        before:rotate-x-270
        before:transition-all
        before:duration-500
        before:flex
        before:justify-center
        before:items-center
        before:origin-top
        before:rounded-full
        after:content-['Hovered']
        after:absolute
        after:left-0
        after:top-0
        after:bg-house-green
        after:text-white
        after:w-full
        after:h-full
        after:rotate-x-270
        after:transition-all
        after:duration-500
        after:flex
        after:justify-center
        after:items-center
        after:origin-top
        after:rounded-full
        after:delay-300




        "
      >
        Hover Me
      </a>
    </div>
  );
};
