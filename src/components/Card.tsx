import { BaseButton } from "@/components/BaseButton";
import { type HoverStyle } from "@/components/hoverCollection";

type Props = {
  style: HoverStyle;
};

export const Card = ({ style }: Props) => {
  return (
    <article
      key={style.id}
      className="bg-white rounded-card shadow-card overflow-hidden"
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
        <div className="flex justify-center items-center py-5 rounded-lg bg-neutral-warm/60 border border-ceramic mb-5">
          <BaseButton hoverClass={style.hoverClass} />
        </div>
      </div>
    </article>
  );
};
