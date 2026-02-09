import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '教育 | 子供のパンツが合わない！はもう終わり',
  description: '教育に関する記事一覧。知育、習い事、子育てのコツなど、お子さんの成長を応援する情報をお届けします。',
};

export default function EducationCategory() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/30 to-white">
      <div className="container mx-auto px-4 py-12">
        {/* ヘッダー */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-5xl">📚</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              教育
            </h1>
          </div>
          <p className="text-xl text-gray-600 leading-relaxed">
            教育に関する記事一覧です。<br />
            知育、習い事、子育てのコツなど、お子さんの成長を応援する情報をお届けします。
          </p>
        </div>

        {/* 準備中メッセージ */}
        <div className="bg-white rounded-2xl shadow-lg p-12 text-center mb-12">
          <div className="text-6xl mb-6">🚧</div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ただいま準備中です
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            教育に関する記事を準備中です。<br />
            近日公開予定ですので、もうしばらくお待ちください。
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg text-left max-w-2xl mx-auto">
            <h3 className="text-lg font-bold text-gray-900 mb-3">📝 今後掲載予定のコンテンツ</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">●</span>
                <span>年齢別の知育玩具・絵本紹介</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">●</span>
                <span>習い事の選び方とおすすめ時期</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">●</span>
                <span>子育ての悩みと解決法</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">●</span>
                <span>生活習慣の身につけ方</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 他カテゴリへのリンク */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            他のカテゴリも見てみる
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/categories/pants"
              className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border-2 border-pink-200"
            >
              <div className="text-4xl mb-2">👖</div>
              <p className="text-lg font-bold text-gray-900">パンツ</p>
              <p className="text-sm text-gray-600 mt-2">記事公開中！</p>
            </Link>
            <Link
              href="/categories/baby-food"
              className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border-2 border-orange-200"
            >
              <div className="text-4xl mb-2">🍼</div>
              <p className="text-lg font-bold text-gray-900">離乳食</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
