import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '琉球舞踊とは',
  description: '琉球舞踊（りゅうきゅうぶよう）は、琉球王国時代に宮廷で発展した沖縄の伝統舞踊です。古典舞踊・雑踊り・創作舞踊の分類や歴史を、琉球舞踊家の平敷屋門勇也が解説します。',
  openGraph: {
    title: '琉球舞踊とは',
    description: '琉球舞踊（りゅうきゅうぶよう）は、琉球王国時代に宮廷で発展した沖縄の伝統舞踊です。古典舞踊・雑踊り・創作舞踊の分類や歴史を、琉球舞踊家の平敷屋門勇也が解説します。',
    url: 'https://ryubu.jp/ryukyu-buyou',
  },
  alternates: {
    canonical: 'https://ryubu.jp/ryukyu-buyou',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
