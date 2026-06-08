import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '玉城流光乃会 平敷屋門勇也琉舞道場',
  description: '玉城流光乃会 平敷屋門勇也琉舞道場は、沖縄県沖縄市泡瀬を拠点とする琉球舞踊の道場です。2歳から大人まで幅広くお稽古を行っており、見学・体験は無料です。うるま市・那覇市にも子どもクラスがあります。',
  openGraph: {
    title: '玉城流光乃会 平敷屋門勇也琉舞道場',
    description: '玉城流光乃会 平敷屋門勇也琉舞道場は、沖縄県沖縄市泡瀬を拠点とする琉球舞踊の道場です。2歳から大人まで幅広くお稽古を行っており、見学・体験は無料です。うるま市・那覇市にも子どもクラスがあります。',
    url: 'https://next-app-cyan-eight.vercel.app/yuibana',
  },
  alternates: {
    canonical: 'https://next-app-cyan-eight.vercel.app/yuibana',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
