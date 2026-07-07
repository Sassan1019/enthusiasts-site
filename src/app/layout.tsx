import type { Metadata } from "next";
import { Archivo, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ENTHUSIASTS — 人生の主人公を増やすプロデュース・ハブ",
  description:
    "才能を孤独にしないためのプロデュース共同体。ENTHUSIASTSは、きっかけの格差によって埋もれてしまう才能を、仲間・戦略・ブランド・資本・コミュニティの力で社会に実装するプロデュース・ハブです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${archivo.variable} ${notoSansJP.variable}`}>
      <body>{children}</body>
    </html>
  );
}
