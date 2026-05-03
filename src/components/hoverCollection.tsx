import { type JSX } from "react";

import { HoverTmp } from "@/components/HoverTmp";
import { Hover1 } from "@/components/Hover1";
import { Hover2 } from "@/components/Hover2";
import { Hover3 } from "@/components/Hover3";
import { Hover4 } from "@/components/Hover4";
import { Hover5 } from "@/components/Hover5";

export type HoverStyles = {
  id: number;
  title: string;
  description: string;
  gradient: string;
  preview: JSX.Element;
};

export const hoverStyles: HoverStyles[] = [
  {
    id: 1,
    title: "Fill Slide",
    description: "Fills the background on hover",
    gradient: "from-green-accent to-starbucks-green",
    preview: <Hover1 />,
  },
  {
    id: 2,
    title: "Scale Up",
    description: "Fills the background on hover",
    gradient: "from-house-green to-green-uplift",
    preview: <Hover2 />,
  },
  {
    id: 3,
    title: "Border Draw",
    description: "ボーダーがアニメーションしながら描画されるエフェクト",
    gradient: "from-green-accent to-green-light",
    preview: <Hover3 />,
  },
  {
    id: 4,
    title: "Glow Pulse",
    description: "ホバー時にボタンの周囲がやわらかく光るエフェクト",
    gradient: "from-gold to-gold-light",
    preview: <Hover4 />,
  },
  {
    id: 5,
    title: "Ripple",
    description: "クリック位置から波紋が広がるマテリアルデザイン風エフェクト",
    gradient: "from-starbucks-green to-house-green",
    preview: <Hover5 />,
  },
  {
    id: 6,
    title: "Underline Reveal",
    description: "テキスト下にアンダーラインがスライドインするエフェクト",
    gradient: "from-green-uplift to-green-accent",
    preview: <HoverTmp gradient="from-house-green to-green-uplift" />,
  },
  {
    id: 7,
    title: "3D Press",
    description: "ホバーで浮き上がり、クリックで押し込まれる立体的なエフェクト",
    gradient: "from-house-green to-starbucks-green",
    preview: <HoverTmp gradient="from-house-green to-green-uplift" />,
  },
  {
    id: 8,
    title: "Gradient Shift",
    description: "ホバー時にグラデーションの色が滑らかに変化するエフェクト",
    gradient: "from-green-accent via-gold to-starbucks-green",
    preview: <HoverTmp gradient="from-house-green to-green-uplift" />,
  },
  {
    id: 9,
    title: "Icon Slide",
    description: "ホバー時にアイコンがスライドインして表示されるエフェクト",
    gradient: "from-green-light to-green-accent",
    preview: <HoverTmp gradient="from-house-green to-green-uplift" />,
  },
];
