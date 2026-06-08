import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import BackToTop from "@/components/BackToTop";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  metadataBase: new URL('https://next-app-cyan-eight.vercel.app'),
  title: {
    default: '琉球舞踊家・沖縄芝居役者 平敷屋門勇也 オフィシャルサイト',
    template: '%s | 平敷屋門勇也 公式サイト',
  },
  description:
    '琉球舞踊家、および沖縄芝居役者として活動する平敷屋門勇也（平敷勇也）の公式ウェブサイト。最新の出演情報、公演依頼、主宰する琉舞道場の案内などを発信しています。',
  openGraph: {
    title: '琉球舞踊家・沖縄芝居役者 平敷屋門勇也 オフィシャルサイト',
    description:
      '琉球舞踊家、および沖縄芝居役者として活動する平敷屋門勇也（平敷勇也）の公式ウェブサイト。最新の出演情報、公演依頼、主宰する琉舞道場の案内などを発信しています。',
    url: 'https://next-app-cyan-eight.vercel.app',
    siteName: '平敷屋門勇也 オフィシャルサイト',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '琉球舞踊家・沖縄芝居役者 平敷屋門勇也 オフィシャルサイト',
    description:
      '琉球舞踊家、および沖縄芝居役者として活動する平敷屋門勇也の公式サイト。出演依頼・琉舞道場の案内。',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://next-app-cyan-eight.vercel.app',
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
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;500;600;700&family=Shippori+Mincho:wght@400;500;600;700;800&family=Noto+Sans+JP:wght@300;400;500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Loader />
        <Header />
        <main>{children}</main>
        <Footer />
        <BackToTop />
        <ScrollReveal />
      </body>
    </html>
  );
}
