export const Hover5 = () => {
  return (
    <div className="group cursor-pointer">
      <a
        className="no-underline  py-2 px-5 relative block group-hover:before:translate-x-full
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
        before:-translate-x-full
        before:rotate-45
        before:transition-all
        before:duration-500
        transition-colors duration-300
    group-hover:bg-starbucks-green
    group-hover:delay-500
        "
      >
        Hover Me
      </a>
    </div>
  );
};
