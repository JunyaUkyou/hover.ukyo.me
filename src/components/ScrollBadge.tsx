export const ScrollBadge = () => {
  return (
    <div className="mt-12 flex flex-col items-center gap-1 text-text-black-soft/50 animate-bounce">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className="text-green-accent"
      >
        <path
          d="M10 3v14m0 0l-5-5m5 5l5-5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-[11px] tracking-wide font-medium">SCROLL</span>
    </div>
  );
};
