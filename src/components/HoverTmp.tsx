type Props = {
  gradient: string;
};

export const HoverTmp = ({ gradient }: Props) => {
  return (
    <div className="flex items-center justify-center py-5 rounded-lg bg-neutral-warm/60 border border-ceramic mb-5">
      <div
        className={`px-5 py-2 rounded-pill text-xs font-semibold text-white bg-linear-to-r ${gradient} shadow-sm transition-transform duration-200 group-hover:scale-105`}
      >
        Hover me
      </div>
    </div>
  );
};
