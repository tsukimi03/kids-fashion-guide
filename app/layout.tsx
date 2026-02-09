import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: '子供のパンツが合わない！はもう終わり | 子育て応援サイト',
  description: 'パンツ選び、離乳食、教育など、子育て中のママ・パパを応援する情報サイト。パンツ診断ツールで体型に合ったおすすめブランドがわかります。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">
        <Header />
        <main className="min-h-screen pt-[60px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
