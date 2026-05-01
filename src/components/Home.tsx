import Logo from "@/assets/GitHub_Invertocat_Black.svg?react";
import { ScrollBadge } from "@/components/ScrollBadge";

export const Home = () => {
  return (
    <section className="relative overflow-hidden bg-neutral-warm">
      {/* Decorative background shapes */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-green-light opacity-40" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-ceramic opacity-60" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150] h-[150] rounded-full bg-green-light opacity-15" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-[105] px-6 py-16 md:py-24">
        {/* Heading */}
        <h1 className="text-starbucks-green text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-center leading-tight max-w-3xl">
          Hover Button Styles
        </h1>

        {/* Subhead */}
        <p className="text-text-black-soft text-base md:text-lg text-center mt-5 max-w-xl leading-relaxed">
          ボタンにカーソルを合わせたときのスタイルを集めたコレクションです。
          <br className="hidden md:block" />
          カードをクリックして、それぞれのホバーエフェクトを確認してください。
        </p>

        {/* CTA row */}
        <div className="flex items-center gap-4 mt-8">
          <a href="#buttons" className="btn-pill btn-pill-primary">
            コレクションを見る
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill btn-pill-outlined inline-flex items-center gap-2"
          >
            <Logo className="w-4 h-4" />
            GitHub
          </a>
        </div>

        {/* Scroll hint */}
        <ScrollBadge />
      </div>
    </section>
  );
};
