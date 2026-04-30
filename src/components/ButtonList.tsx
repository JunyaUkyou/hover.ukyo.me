import { Button } from "@/components/Button";

const hoverStyles = [
  {
    id: 1,
    title: "Fill Slide",
    description: "背景色が横方向にスライドして塗りつぶされるエフェクト",
    gradient: "from-green-accent to-starbucks-green",
  },
  {
    id: 2,
    title: "Scale Up",
    description: "ホバー時にボタンがスケールアップして浮き上がるエフェクト",
    gradient: "from-house-green to-green-uplift",
  },
  {
    id: 3,
    title: "Border Draw",
    description: "ボーダーがアニメーションしながら描画されるエフェクト",
    gradient: "from-green-accent to-green-light",
  },
  {
    id: 4,
    title: "Glow Pulse",
    description: "ホバー時にボタンの周囲がやわらかく光るエフェクト",
    gradient: "from-gold to-gold-light",
  },
  {
    id: 5,
    title: "Ripple",
    description: "クリック位置から波紋が広がるマテリアルデザイン風エフェクト",
    gradient: "from-starbucks-green to-house-green",
  },
  {
    id: 6,
    title: "Underline Reveal",
    description: "テキスト下にアンダーラインがスライドインするエフェクト",
    gradient: "from-green-uplift to-green-accent",
  },
  {
    id: 7,
    title: "3D Press",
    description: "ホバーで浮き上がり、クリックで押し込まれる立体的なエフェクト",
    gradient: "from-house-green to-starbucks-green",
  },
  {
    id: 8,
    title: "Gradient Shift",
    description: "ホバー時にグラデーションの色が滑らかに変化するエフェクト",
    gradient: "from-green-accent via-gold to-starbucks-green",
  },
  {
    id: 9,
    title: "Icon Slide",
    description: "ホバー時にアイコンがスライドインして表示されるエフェクト",
    gradient: "from-green-light to-green-accent",
  },
];

export const ButtonList = () => {
  return (
    <section
      id="buttons"
      className="relative bg-neutral-warm py-16 md:py-24 px-4 md:px-6 lg:px-10"
    >
      {/* Section header */}
      <div className="max-w-7xl mx-auto mb-12 md:mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px flex-1 bg-green-light" />
          <span className="text-xs font-semibold tracking-wide text-green-accent uppercase">
            Collection
          </span>
          <div className="h-px flex-1 bg-green-light" />
        </div>
        <h2 className="text-starbucks-green text-2xl md:text-3xl font-semibold tracking-tight text-center">
          ホバーエフェクト一覧
        </h2>
        <p className="text-text-black-soft text-sm md:text-base text-center mt-3 max-w-lg mx-auto leading-relaxed">
          カードをクリックすると、各ホバーエフェクトの詳細ページに移動します
        </p>
      </div>

      {/* Card grid */}
      <div className="max-w-7xl mx-auto grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {hoverStyles.map((style, index) => (
          <Button key={index} style={style} />
        ))}
      </div>
    </section>
  );
};
