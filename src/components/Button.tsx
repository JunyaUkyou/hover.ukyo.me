import { type HoverStyles } from "@/components/hoverCollection";

type Props = {
  style: HoverStyles;
};

export const Button = ({ style }: Props) => {
  return (
    <article
      key={style.id}
      className="bg-white rounded-card shadow-card overflow-hidden cursor-pointer"
      role="link"
      tabIndex={0}
    >
      {/* Gradient accent bar */}
      <div
        className={`h-1.5 bg-linear-to-r ${style.gradient} transition-all duration-300`}
      />

      {/* Card content */}
      <div className="p-6 md:p-7">
        {/* Top row: number + icon */}
        <div className="flex items-center justify-between mb-5">
          <div className="card-number">{String(style.id).padStart(2, "0")}</div>
        </div>

        {/* Title */}
        <h3 className="text-text-black text-lg font-semibold tracking-tight mb-2 ">
          {style.title}
        </h3>

        {/* Description */}
        <p className="text-text-black-soft text-sm leading-relaxed mb-6">
          {style.description}
        </p>

        {/* Preview area */}
        {style.preview}

        {/* Footer link */}
        <div className="flex items-center justify-between text-green-accent text-sm font-medium">
          <span className="underline-offset-4">Details</span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            className="transform transition-transform duration-300"
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
