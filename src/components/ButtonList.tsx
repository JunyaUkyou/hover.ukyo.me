const hoverStyles = [
  {
    id: 1,
    title: "Fill Slide",
    description: "背景色が横方向にスライドして塗りつぶされるエフェクト",
    gradient: "from-green-accent to-starbucks-green",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="10" width="24" height="12" rx="6" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 16h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Scale Up",
    description: "ホバー時にボタンがスケールアップして浮き上がるエフェクト",
    gradient: "from-house-green to-green-uplift",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="6" y="12" width="20" height="8" rx="4" stroke="currentColor" strokeWidth="1.5" />
        <rect x="3" y="9" width="26" height="14" rx="5" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" opacity="0.4" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Border Draw",
    description: "ボーダーがアニメーションしながら描画されるエフェクト",
    gradient: "from-green-accent to-green-light",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="10" width="24" height="12" rx="6" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Glow Pulse",
    description: "ホバー時にボタンの周囲がやわらかく光るエフェクト",
    gradient: "from-gold to-gold-light",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="6" y="12" width="20" height="8" rx="4" stroke="currentColor" strokeWidth="1.5" />
        <rect x="3" y="9" width="26" height="14" rx="5" stroke="currentColor" strokeWidth="1" opacity="0.25" />
        <rect x="1" y="7" width="30" height="18" rx="6" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Ripple",
    description: "クリック位置から波紋が広がるマテリアルデザイン風エフェクト",
    gradient: "from-starbucks-green to-house-green",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="10" width="24" height="12" rx="6" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="16" r="3" stroke="currentColor" strokeWidth="1" opacity="0.6" />
        <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Underline Reveal",
    description: "テキスト下にアンダーラインがスライドインするエフェクト",
    gradient: "from-green-uplift to-green-accent",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M8 14h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 20h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      </svg>
    ),
  },
  {
    id: 7,
    title: "3D Press",
    description: "ホバーで浮き上がり、クリックで押し込まれる立体的なエフェクト",
    gradient: "from-house-green to-starbucks-green",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="5" y="9" width="22" height="10" rx="5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5 19l3 4h16l3-4" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      </svg>
    ),
  },
  {
    id: 8,
    title: "Gradient Shift",
    description: "ホバー時にグラデーションの色が滑らかに変化するエフェクト",
    gradient: "from-green-accent via-gold to-starbucks-green",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <defs>
          <linearGradient id="gs" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="1" />
          </linearGradient>
        </defs>
        <rect x="4" y="10" width="24" height="12" rx="6" stroke="url(#gs)" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: 9,
    title: "Icon Slide",
    description: "ホバー時にアイコンがスライドインして表示されるエフェクト",
    gradient: "from-green-light to-green-accent",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="10" width="24" height="12" rx="6" stroke="currentColor" strokeWidth="1.5" />
        <path d="M18 16h6m0 0l-3-3m3 3l-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
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
        {hoverStyles.map((style) => (
          <article
            key={style.id}
            className="card-hover group relative bg-white rounded-card shadow-card overflow-hidden cursor-pointer"
            role="link"
            tabIndex={0}
          >
            {/* Gradient accent bar */}
            <div
              className={`h-1.5 bg-gradient-to-r ${style.gradient} transition-all duration-300 group-hover:h-2`}
            />

            {/* Card content */}
            <div className="p-6 md:p-7">
              {/* Top row: number + icon */}
              <div className="flex items-center justify-between mb-5">
                <div className="card-number">
                  {String(style.id).padStart(2, "0")}
                </div>
                <div className="text-green-accent opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                  {style.icon}
                </div>
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
                  className={`px-5 py-2 rounded-pill text-xs font-semibold text-white bg-gradient-to-r ${style.gradient} shadow-sm transition-transform duration-200 group-hover:scale-105`}
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
        ))}
      </div>
    </section>
  );
};
