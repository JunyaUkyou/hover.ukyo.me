import { Card } from "@/components/Card";
import { hoverStyles } from "@/components/hoverCollection";

export const ButtonList = () => {
  return (
    <section
      id="buttons"
      className=" bg-neutral-warm px-4 md:px-6 lg:px-10 mt-12 md:mt-12"
    >
      {/* Section header */}
      <div className="max-w-7xl mx-auto mb-12 md:mb-16">
        <div className="flex items-center">
          <div className="h-px flex-1 bg-green-light" />
          <span className="text-xs font-semibold tracking-wide text-green-accent uppercase">
            Collection
          </span>
          <div className="h-px flex-1 bg-green-light" />
        </div>
      </div>

      {/* Card grid */}
      <div className="max-w-7xl mx-auto grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {hoverStyles.map((style, index) => (
          <Card key={index} style={style} />
        ))}
      </div>
    </section>
  );
};
