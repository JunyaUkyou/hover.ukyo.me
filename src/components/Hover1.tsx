export const Hover1 = () => {
  return (
    <div className="flex justify-center items-center py-5 rounded-lg bg-neutral-warm/60 border border-ceramic mb-5">
      <div className="group">
        <a
          href="#"
          className="no-underline text-lime-900 border-solid border-4 py-2 px-5 relative block group-hover:before:rotate-0
        z-0
        rounded-full
        overflow-hidden
        before:content-['']
        before:absolute
        before:left-0
        before:top-0
        before:bg-red-100
        before:w-full
        before:h-full
        before:-z-10
        before:origin-bottom-left
        before:-rotate-90
        before:transition-[rotate]
        before:duration-300
        "
        >
          Hover Me
        </a>
      </div>
    </div>
  );
};
