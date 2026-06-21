import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'お問合せ・出演依頼',
  description: '平敷屋門勇也への出演依頼、創作公演のご相談、取材・メディア出演、琉舞道場の見学・体験のお問合せはこちらのフォームよりお気軽にどうぞ。',
  openGraph: {
    title: 'お問合せ・出演依頼',
    description: '平敷屋門勇也への出演依頼、創作公演のご相談、取材・メディア出演、琉舞道場の見学・体験のお問合せはこちらのフォームよりお気軽にどうぞ。',
    url: 'https://ryubu.jp/contact',
  },
  alternates: {
    canonical: 'https://ryubu.jp/contact',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
