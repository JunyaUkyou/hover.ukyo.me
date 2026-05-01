import { type HoverStyles } from "@/hoverCollection";

type Props = {
  style: HoverStyles;
};

export const Button = ({ style }: Props) => {
  return (
    <article
      key={style.id}
      className="card-hover group bg-white rounded-card shadow-card overflow-hidden cursor-pointer"
      role="link"
      tabIndex={0}
    >
      {/* Gradient accent bar */}
      <div
        className={`h-1.5 bg-linear-to-r ${style.gradient} transition-all duration-300 group-hover:h-2`}
      />

      {/* Card content */}
      <div className="p-6 md:p-7">
        {/* Top row: number + icon */}
        <div className="flex items-center justify-between mb-5">
          <div className="card-number">{String(style.id).padStart(2, "0")}</div>
        </div>

        {/* Title */}
        <h3 className="text-text-black text-lg font-semibold tracking-tight mb-2 group-hover:text-starbucks-green transition-colors duration-300">
          {style.title}
        </h3>

        {/* Description */}
        <p className="text-text-black-soft text-sm leading-relaxed mb-6">
          {style.description}
        </p>

        {/* Preview area */}
        <div className="flex items-center justify-center py-5 rounded-lg bg-neutral-warm/60 border border-ceramic mb-5">
          <div
            className={`px-5 py-2 rounded-pill text-xs font-semibold text-white bg-linear-to-r ${style.gradient} shadow-sm transition-transform duration-200 group-hover:scale-105`}
          >
            Hover me
          </div>
        </div>

        {/* Footer link */}
        <div className="flex items-center justify-between text-green-accent text-sm font-medium">
          <span className="group-hover:underline underline-offset-4">
            詳細を見る
          </span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            className="transform transition-transform duration-300 group-hover:translate-x-1"
          >
            <path
              d="M6.75 4.5L11.25 9L6.75 13.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </article>
  );
};
