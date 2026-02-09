import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16 py-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          子供のパンツが合わない！<br className="md:hidden" />はもう終わり
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          パンツ選び、離乳食、教育まで。<br />
          子育て中のママ・パパを応援する情報サイト
        </p>
        <Link
          href="/diagnosis-redirect"
          className="inline-block bg-[#e17e96] text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-[#c96d82] transition-colors shadow-lg"
        >
          🎯 2分で診断！体型に合ったパンツを探す
        </Link>
      </section>

      {/* 人気記事 */}
      <section className="mb-16">
        <h3 className="text-3xl font-bold text-gray-900 mb-8">人気記事</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {/* 記事カード1 */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
            <h4 className="text-xl font-bold text-gray-900 mb-3">
              2歳のズボン選び方｜サイズ・体型別おすすめ
            </h4>
            <p className="text-gray-600 mb-4">
              2歳児の平均サイズ、体型別のポイント、おすすめブランド5選を徹底解説。
            </p>
            <Link href="/articles/2-years-pants-guide" className="text-blue-600 font-bold">
              続きを読む →
            </Link>
          </div>

          {/* 記事カード2 */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
            <h4 className="text-xl font-bold text-gray-900 mb-3">
              ユニクロ vs GAP vs 西松屋｜キッズパンツ徹底比較
            </h4>
            <p className="text-gray-600 mb-4">
              人気ブランド3社のサイズ感、価格、品質を実際に購入して比較しました。
            </p>
            <Link href="/articles/brand-comparison" className="text-blue-600 font-bold">
              続きを読む →
            </Link>
          </div>

          {/* 記事カード3 */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
            <h4 className="text-xl font-bold text-gray-900 mb-3">
              むっちり脚の子におすすめ！ゆったりズボン5選
            </h4>
            <p className="text-gray-600 mb-4">
              太めの脚でもゆったり履けるズボンを厳選。ママたちの口コミも紹介。
            </p>
            <Link href="/articles/thick-legs-pants" className="text-blue-600 font-bold">
              続きを読む →
            </Link>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-12 text-white text-center">
        <h3 className="text-3xl font-bold mb-4">
          🎯 あなたのお子さんにぴったりなズボン、2分で診断！
        </h3>
        <p className="text-xl mb-8">
          10問の簡単な質問に答えるだけで、体型に合ったおすすめブランドがわかります。
        </p>
        <Link
          href="/diagnosis-redirect"
          className="inline-block bg-white text-blue-600 px-12 py-4 rounded-full text-lg font-bold hover:shadow-2xl transition-all"
        >
          無料で診断を始める →
        </Link>
        <p className="text-sm mt-4 opacity-90">
          ※ 2万人以上のママが利用中！
        </p>
      </section>

      {/* カテゴリー */}
      <section className="mt-16">
        <h3 className="text-3xl font-bold text-gray-900 mb-8 border-l-4 border-[#e17e96] pl-4">
          カテゴリーから探す
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <Link
            href="/categories/pants"
            className="bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-lg text-center hover:shadow-lg transition-shadow border-2 border-pink-200"
          >
            <div className="text-5xl mb-3">👖</div>
            <p className="text-xl font-bold text-gray-900">パンツ</p>
            <p className="text-sm text-gray-600 mt-2">サイズ選び・体型別おすすめ</p>
          </Link>
          <Link
            href="/categories/baby-food"
            className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-lg text-center hover:shadow-lg transition-shadow border-2 border-orange-200"
          >
            <div className="text-5xl mb-3">🍼</div>
            <p className="text-xl font-bold text-gray-900">離乳食</p>
            <p className="text-sm text-gray-600 mt-2">月齢別・レシピ・進め方</p>
          </Link>
          <Link
            href="/categories/education"
            className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg text-center hover:shadow-lg transition-shadow border-2 border-blue-200"
          >
            <div className="text-5xl mb-3">📚</div>
            <p className="text-xl font-bold text-gray-900">教育</p>
            <p className="text-sm text-gray-600 mt-2">知育・習い事・子育てのコツ</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
