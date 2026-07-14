import type { Metadata, Viewport } from "next";
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

const SITE_DESCRIPTION =
  "才能を孤独にしないためのプロデュース共同体。ENTHUSIASTSは、きっかけの格差によって埋もれてしまう才能を、仲間・戦略・ブランド・資本・コミュニティの力で社会に実装するプロデュース・ハブです。";

export const metadata: Metadata = {
  metadataBase: new URL("https://enthusiasts.jp"),
  title: {
    default: "ENTHUSIASTS — 人生の主人公を増やすプロデュース・ハブ",
    template: "%s — ENTHUSIASTS",
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://enthusiasts.jp",
    siteName: "ENTHUSIASTS",
    title: "ENTHUSIASTS — 人生の主人公を増やすプロデュース・ハブ",
    description: SITE_DESCRIPTION,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "ENTHUSIASTS — HUMAN POTENTIAL PRODUCE PROJECT" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ENTHUSIASTS — 人生の主人公を増やすプロデュース・ハブ",
    description: SITE_DESCRIPTION,
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#08090D",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${archivo.variable} ${notoSansJP.variable}`}>
      <body>
        <noscript>
          {/* JSなしでもコンテンツは全て見える状態を保証する */}
          <style>{`.rv { opacity: 1 !important; transform: none !important; filter: none !important; }`}</style>
        </noscript>
        <a href="#main" className="skip-link">
          本文へスキップ
        </a>
        {children}
      </body>
    </html>
  );
}
