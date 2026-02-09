import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'キッズファッションガイド | 子ども服選びの完全ガイド',
  description: '0〜6歳の子ども服選びをサポート。ブランド比較、体型別おすすめ、サイズ選びのコツなど、ママ・パパに役立つ情報が満載。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">
        <header className="bg-white border-b shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <h1 className="text-2xl font-bold text-blue-600">
              👶 キッズファッションガイド
            </h1>
            <p className="text-sm text-gray-600">子ども服選びの完全ガイド</p>
          </div>
        </header>
        <main className="min-h-screen">{children}</main>
        <footer className="bg-gray-900 text-white py-8 mt-16">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2026 キッズファッションガイド</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
