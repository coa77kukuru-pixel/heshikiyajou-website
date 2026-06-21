import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '創作舞踊集団 結華（ゆいばな）',
  description: '創作舞踊集団「結華」は、平敷屋門勇也が会長を務める創作舞踊集団です。伝統の所作を礎に、結婚式・イベント・観光ステージなど、おもてなしのプロとしての舞台出演を承っています。',
  openGraph: {
    title: '創作舞踊集団 結華（ゆいばな）',
    description: '創作舞踊集団「結華」は、平敷屋門勇也が会長を務める創作舞踊集団です。伝統の所作を礎に、結婚式・イベント・観光ステージなど、おもてなしのプロとしての舞台出演を承っています。',
    url: 'https://ryubu.jp/sousaku',
  },
  alternates: {
    canonical: 'https://ryubu.jp/sousaku',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
