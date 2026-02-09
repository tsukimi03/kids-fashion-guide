import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'パンツ | 子供のパンツが合わない！はもう終わり',
  description: '子供のパンツ選びに関する記事一覧。サイズ選び、体型別おすすめ、ブランド比較など、パンツ選びの悩みを解決します。',
};

const articles = [
  {
    title: '2歳のズボン選び方｜サイズ・体型別おすすめ',
    description: '2歳児の平均サイズ、体型別のポイント、おすすめブランド5選を徹底解説。「大きすぎる」「小さすぎる」を防ぐコツも紹介。',
    link: '/articles/2-years-pants-guide',
    icon: '👶',
    date: '2026-02-09',
  },
  {
    title: 'ユニクロ vs GAP vs 西松屋｜キッズパンツ徹底比較',
    description: '人気ブランド3社のサイズ感、価格、品質を実際に購入して比較。各ブランドの特徴とおすすめポイントを詳しく解説します。',
    link: '/articles/brand-comparison',
    icon: '🏪',
    date: '2026-02-09',
  },
  {
    title: 'むっちり脚の子におすすめ！ゆったりズボン5選',
    description: '太めの脚でもゆったり履けるズボンを厳選。実際に購入したママたちの口コミも紹介。体型に合ったパンツ選びのコツも解説。',
    link: '/articles/chubby-pants-recommendation',
    icon: '👖',
    date: '2026-02-09',
  },
];

export default function PantsCategory() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50/30 to-white">
      <div className="container mx-auto px-4 py-12">
        {/* ヘッダー */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-5xl">👖</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              パンツ
            </h1>
          </div>
          <p className="text-xl text-gray-600 leading-relaxed">
            子供のパンツ選びに関する記事一覧です。<br />
            サイズ選び、体型別おすすめ、ブランド比較など、パンツ選びの悩みを解決します。
          </p>
        </div>

        {/* 診断ツールCTA */}
        <div className="bg-gradient-to-r from-[#e17e96] to-[#F0BAB8] rounded-2xl p-8 text-white mb-12 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                🎯 あなたのお子さんにぴったりなパンツを診断！
              </h2>
              <p className="text-lg opacity-90">
                10問の簡単な質問に答えるだけで、体型に合ったおすすめブランドがわかります
              </p>
            </div>
            <Link
              href="/diagnosis-redirect"
              className="bg-white text-[#e17e96] px-8 py-4 rounded-full text-lg font-bold hover:shadow-2xl transition-all whitespace-nowrap"
            >
              無料で診断する →
            </Link>
          </div>
        </div>

        {/* 記事一覧 */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 border-l-4 border-[#e17e96] pl-4">
            パンツに関する記事
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <Link
                key={index}
                href={article.link}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden border border-gray-100"
              >
                <div className="p-6">
                  <div className="text-5xl mb-4">{article.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-base">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">{article.date}</span>
                    <span className="text-[#e17e96] font-bold">続きを読む →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* 他カテゴリへのリンク */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            他のカテゴリも見てみる
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/categories/baby-food"
              className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border-2 border-orange-200"
            >
              <div className="text-4xl mb-2">🍼</div>
              <p className="text-lg font-bold text-gray-900">離乳食</p>
            </Link>
            <Link
              href="/categories/education"
              className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border-2 border-blue-200"
            >
              <div className="text-4xl mb-2">📚</div>
              <p className="text-lg font-bold text-gray-900">教育</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
