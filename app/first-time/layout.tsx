import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'はじめての方へ — 琉球舞踊入門ガイド',
  description: '琉球舞踊をはじめて知る方に向けた入門ガイドです。琉球舞踊の歴史、種類（古典舞踊・雑踊り・創作舞踊）、鑑賞のポイント、小道具の解説など、琉球舞踊の世界をわかりやすくご紹介しています。',
  openGraph: {
    title: 'はじめての方へ — 琉球舞踊入門ガイド',
    description: '琉球舞踊をはじめて知る方に向けた入門ガイドです。琉球舞踊の歴史、種類（古典舞踊・雑踊り・創作舞踊）、鑑賞のポイント、小道具の解説など、琉球舞踊の世界をわかりやすくご紹介しています。',
    url: 'https://ryubu.jp/first-time',
  },
  alternates: {
    canonical: 'https://ryubu.jp/first-time',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
