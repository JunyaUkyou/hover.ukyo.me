import Logo from "@/assets/GitHub_Invertocat_Black.svg?react";

export const Home = () => {
  return (
    <section className="h-[400px] bg-[#f2f0eb] flex justify-center items-center">
      <div>
        <h1 className="text-[#006241] text-5xl font-semibold tracking-tight text-center">
          Hover Button Styles
        </h1>
        <p className="text-black text-lg text-center mt-[30px]">
          This website showcases a collection of hover button styles.
        </p>
        <Logo className="cursor-pointer" />
      </div>
    </section>
  );
};
