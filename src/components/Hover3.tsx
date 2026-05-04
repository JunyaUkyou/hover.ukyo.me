export const Hover3 = () => {
  return (
    <div className="group cursor-pointer">
      <a
        className="no-underline  py-2 px-5 relative block group-hover:before:rotate-x-0
          group-hover:after:rotate-y-0
          text-white
          text-sm
          bg-gold
        overflow-hidden
        z-0
        rounded-full
        before:content-['']
        before:absolute
        before:left-0
        before:top-0
        before:bg-starbucks-green
        before:w-full
        before:h-full
        before:-z-10
        before:rotate-x-90
        before:transition-all
        before:duration-700
        after:content-['']
        after:absolute
        after:left-0
        after:top-0
        after:bg-starbucks-green
        after:w-full
        after:h-full
        after:-z-10
        after:rotate-y-90
        after:transition-all
        after:duration-700
        "
      >
        Hover Me
      </a>
    </div>
  );
};
