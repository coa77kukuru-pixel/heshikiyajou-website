import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'チャンプ流ぅ芸能団',
  description: 'チャンプ流ぅ芸能団は、琉球舞踊家の平敷屋門勇也、民謡歌手の仲宗根創、古典音楽の知念勝三からなる若手芸能家ユニットです。沖縄伝統芸能をベースに、唄・三線・踊り・コントを融合した唯一無二のステージを展開しています。',
  openGraph: {
    title: 'チャンプ流ぅ芸能団',
    description: 'チャンプ流ぅ芸能団は、琉球舞踊家の平敷屋門勇也、民謡歌手の仲宗根創、古典音楽の知念勝三からなる若手芸能家ユニットです。沖縄伝統芸能をベースに、唄・三線・踊り・コントを融合した唯一無二のステージを展開しています。',
    url: 'https://next-app-cyan-eight.vercel.app/champuryu',
  },
  alternates: {
    canonical: 'https://next-app-cyan-eight.vercel.app/champuryu',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
