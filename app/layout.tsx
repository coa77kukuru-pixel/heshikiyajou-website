import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  title: "平敷屋門 勇也 ｜ 琉球舞踊家・沖縄芝居役者",
  description:
    "琉球舞踊家・沖縄芝居役者 平敷屋門 勇也（へしきやじょう ゆうや）公式サイト。玉城流光乃会 赤嶺啓子琉舞道場。チャンプ流ぅ芸能団リーダー、創作舞踊集団「結華」会長。",
  openGraph: {
    title: "平敷屋門 勇也 ｜ 琉球舞踊家",
    description:
      "4歳で稽古場の戸を叩いてから30有余年。琉球舞踊と沖縄の伝統とともに歩む舞踊家。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;500;600;700;800&family=Noto+Sans+JP:wght@300;400;500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Loader />
        <Header />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
