export const Hover6 = () => {
  return (
    <div className="group cursor-pointer">
      <a
        className="no-underline  py-2 px-5 relative block group-hover:before:translate-y-0
          text-white
          text-sm
          bg-gold
        overflow-hidden
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
        before:-translate-y-full
        before:transition-all
        before:duration-300
        before:flex
        before:justify-center
        before:items-center
        "
      >
        Hover Me
      </a>
    </div>
  );
};
