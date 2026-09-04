type Props = {
  hoverClass: string;
};

const BASE_WRAPPER = "group cursor-pointer";
const BASE_ANCHOR =
  "no-underline py-2 px-5 relative block text-white text-sm bg-gold z-0 rounded-full";

export const BaseButton = ({ hoverClass }: Props) => {
  return (
    <div className={BASE_WRAPPER}>
      <a className={`${BASE_ANCHOR} ${hoverClass}`}>Hover Me</a>
    </div>
  );
};
