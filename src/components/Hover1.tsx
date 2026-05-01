export const Hover1 = () => {
  return (
    <div className="flex justify-center items-center py-5 rounded-lg bg-neutral-warm/60 border border-ceramic mb-5 group">
      <a
        href="#"
        className="no-underline text-lime-900 border-solid border-4 py-10 px-20 relative 
        before:content-['']
        before:absolute
        before:left-0
        before:top-0
        before:bg-red-100
        before:w-full
        before:h-full
        before:-z-1
        group-hover:bg-black
        "
      >
        aaaa
      </a>
    </div>
  );
};
