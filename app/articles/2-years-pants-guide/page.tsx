import Link from 'next/link';
import CTABox from '@/components/CTABox';

export const metadata = {
  title: '2歳のズボン選び方｜サイズ・体型別おすすめブランド5選【2026年版】',
  description: '2歳児のズボン選びで悩んでいるママ必見！平均サイズ、体型別の選び方、おすすめブランド5選を徹底解説。むっちり脚・細身・お腹ぽっこりなど体型別のポイントも紹介します。',
};

export default function Article() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-4xl">
      {/* パンくずリスト */}
      <nav className="text-sm text-gray-600 mb-6">
        <Link href="/" className="hover:text-blue-600">ホーム</Link>
        <span className="mx-2">&gt;</span>
        <Link href="/ages" className="hover:text-blue-600">年齢別</Link>
        <span className="mx-2">&gt;</span>
        <span>2歳のズボン選び方</span>
      </nav>

      {/* タイトル */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        2歳のズボン選び方｜サイズ・体型別おすすめブランド5選
      </h1>

      {/* 公開日・更新日 */}
      <div className="text-sm text-gray-600 mb-8">
        <time>公開日：2026年2月9日</time>
      </div>

      {/* 導入 */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
        <p className="text-lg text-gray-800 leading-relaxed">
          「2歳になったのにズボンが入らない...」
          <br />
          「サイズ表通りに買ったのに、ウエストがブカブカ...」
          <br />
          <br />
          そんな悩みを持つママ・パパは多いのではないでしょうか？
          2歳児は体型の個人差が大きく、サイズ選びが特に難しい時期です。
          <br />
          <br />
          この記事では、2歳児のズボン選びのポイントを、体型別に徹底解説します。
        </p>
      </div>

      {/* 目次 */}
      <div className="bg-gray-50 p-6 rounded-lg mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-4">📖 目次</h2>
        <ul className="space-y-2 text-blue-600">
          <li><a href="#section1" className="hover:underline">1. 2歳児の平均サイズとは？</a></li>
          <li><a href="#section2" className="hover:underline">2. サイズ選びの5つのポイント</a></li>
          <li><a href="#section3" className="hover:underline">3. 体型別おすすめの選び方</a></li>
          <li><a href="#section4" className="hover:underline">4. おすすめブランド5選</a></li>
          <li><a href="#section5" className="hover:underline">5. よくある失敗例と対処法</a></li>
        </ul>
      </div>

      {/* セクション1 */}
      <section id="section1" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-blue-500 pb-2">
          1. 2歳児の平均サイズとは？
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          2歳児の一般的なサイズは<strong className="text-blue-600">90cm</strong>ですが、
          体重や体型によって80cm〜100cmまで幅があります。
        </p>

        <div className="bg-white border rounded-lg p-6 shadow-md mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">📊 2歳児の平均身長・体重</h3>
          <table className="w-full text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 border">項目</th>
                <th className="p-3 border">男の子</th>
                <th className="p-3 border">女の子</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border font-bold">平均身長</td>
                <td className="p-3 border">85〜90cm</td>
                <td className="p-3 border">83〜88cm</td>
              </tr>
              <tr>
                <td className="p-3 border font-bold">平均体重</td>
                <td className="p-3 border">11〜13kg</td>
                <td className="p-3 border">10〜12kg</td>
              </tr>
              <tr>
                <td className="p-3 border font-bold">一般的なサイズ</td>
                <td className="p-3 border">90cm</td>
                <td className="p-3 border">90cm</td>
              </tr>
            </tbody>
          </table>
          <p className="text-sm text-gray-600 mt-4">
            ※ 厚生労働省「乳幼児身体発育調査」(2020年)より
          </p>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
          <p className="text-gray-800">
            <strong>⚠️ 注意：</strong>
            身長だけでサイズを決めると失敗します！
            太ももの太さ、お腹周り、股下の長さも重要です。
          </p>
        </div>
      </section>

      {/* セクション2 */}
      <section id="section2" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-blue-500 pb-2">
          2. サイズ選びの5つのポイント
        </h2>

        <div className="space-y-6">
          <div className="bg-white border-l-4 border-blue-500 p-6 rounded-r-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              ① ウエストの調整機能があるか
            </h3>
            <p className="text-gray-700 leading-relaxed">
              2歳児はお腹が出ている子も多く、ウエストがきついことが多いです。
              ゴム調整ができるものや、ストレッチ素材を選びましょう。
            </p>
          </div>

          <div className="bg-white border-l-4 border-green-500 p-6 rounded-r-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              ② 太ももに余裕があるか
            </h3>
            <p className="text-gray-700 leading-relaxed">
              むっちり脚の子は、太ももで引っかかってしまうことも。
              試着時は太ももの余裕を必ず確認してください。
            </p>
          </div>

          <div className="bg-white border-l-4 border-yellow-500 p-6 rounded-r-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              ③ 丈の長さは適切か
            </h3>
            <p className="text-gray-700 leading-relaxed">
              長すぎると転倒の原因に、短すぎるとすぐにサイズアウト。
              くるぶしが隠れる程度が目安です。
            </p>
          </div>

          <div className="bg-white border-l-4 border-purple-500 p-6 rounded-r-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              ④ 動きやすい素材か
            </h3>
            <p className="text-gray-700 leading-relaxed">
              2歳は走り回る時期。ストレッチ素材や柔らかい生地を選ぶと、
              動きやすく快適です。
            </p>
          </div>

          <div className="bg-white border-l-4 border-red-500 p-6 rounded-r-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              ⑤ トイレトレーニング中なら脱ぎやすさも重要
            </h3>
            <p className="text-gray-700 leading-relaxed">
              トイトレ中の子には、自分で脱ぎ履きしやすいゴムウエストがおすすめです。
            </p>
          </div>
        </div>
      </section>

      {/* セクション3 */}
      <section id="section3" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-blue-500 pb-2">
          3. 体型別おすすめの選び方
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-orange-50 p-6 rounded-lg border-2 border-orange-300">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              🧸 むっちり脚タイプ
            </h3>
            <p className="text-gray-700 mb-3">
              太ももがパツパツになりがち。ゆったりシルエットやストレッチ素材を選びましょう。
            </p>
            <p className="text-sm text-gray-600 font-bold">
              おすすめ：UNIQLO、GU、西松屋
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-300">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              🦒 細身タイプ
            </h3>
            <p className="text-gray-700 mb-3">
              ウエストがゆるくずり落ちやすい。調整ベルト付きやスリムフィットを選びましょう。
            </p>
            <p className="text-sm text-gray-600 font-bold">
              おすすめ：GAP、ZARA、無印良品
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border-2 border-green-300">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              🎈 お腹ぽっこりタイプ
            </h3>
            <p className="text-gray-700 mb-3">
              ウエストがきつくて苦しそう。ゴム調整ができるものやハイウエストがおすすめ。
            </p>
            <p className="text-sm text-gray-600 font-bold">
              おすすめ：西松屋、ベルメゾン、しまむら
            </p>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              📏 長身タイプ
            </h3>
            <p className="text-gray-700 mb-3">
              丈が短くなりがち。長めの丈やサイズアップを検討しましょう。
            </p>
            <p className="text-sm text-gray-600 font-bold">
              おすすめ：H&M、無印良品、ブランシェス
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABox />

      {/* セクション4 */}
      <section id="section4" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-blue-500 pb-2">
          4. おすすめブランド5選
        </h2>

        <div className="space-y-8">
          {/* ブランド1 */}
          <div className="bg-white border rounded-lg p-6 shadow-md">
            <h3 className="text-2xl font-bold text-blue-600 mb-3">
              1. UNIQLO（ユニクロ）
            </h3>
            <p className="text-gray-700 mb-4">
              <strong>価格：990円〜</strong>｜<strong>サイズ感：やや大きめ</strong>
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              コスパ最強で、ストレッチ素材が優秀。むっちり脚の子にもおすすめ。
              ウエストゴムで調整しやすく、トイトレ中の子にも最適です。
            </p>
            <p className="text-sm text-gray-600">
              ✅ おすすめポイント：低価格、丈夫、洗濯に強い
            </p>
          </div>

          {/* ブランド2 */}
          <div className="bg-white border rounded-lg p-6 shadow-md">
            <h3 className="text-2xl font-bold text-blue-600 mb-3">
              2. GAP（ギャップ）
            </h3>
            <p className="text-gray-700 mb-4">
              <strong>価格：2,490円〜</strong>｜<strong>サイズ感：標準</strong>
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              デザインが豊富でおしゃれ。細身の子向けのスリムフィットもあり、
              体型に合わせて選べるのが魅力です。
            </p>
            <p className="text-sm text-gray-600">
              ✅ おすすめポイント：デザイン性、品質、サイズ展開豊富
            </p>
          </div>

          {/* ブランド3 */}
          <div className="bg-white border rounded-lg p-6 shadow-md">
            <h3 className="text-2xl font-bold text-blue-600 mb-3">
              3. 西松屋
            </h3>
            <p className="text-gray-700 mb-4">
              <strong>価格：599円〜</strong>｜<strong>サイズ感：大きめ</strong>
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              圧倒的な低価格。汚れても気にならないので、外遊び用におすすめ。
              ウエスト調整ゴム付きが多く、体型を選びません。
            </p>
            <p className="text-sm text-gray-600">
              ✅ おすすめポイント：激安、気兼ねなく使える、種類豊富
            </p>
          </div>

          {/* ブランド4 */}
          <div className="bg-white border rounded-lg p-6 shadow-md">
            <h3 className="text-2xl font-bold text-blue-600 mb-3">
              4. GU（ジーユー）
            </h3>
            <p className="text-gray-700 mb-4">
              <strong>価格：990円〜</strong>｜<strong>サイズ感：やや大きめ</strong>
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              UNIQLOよりもトレンド感があり、プチプラ。
              太ももに余裕のあるデザインが多く、むっちり脚の子にも安心です。
            </p>
            <p className="text-sm text-gray-600">
              ✅ おすすめポイント：低価格、トレンド感、伸縮性
            </p>
          </div>

          {/* ブランド5 */}
          <div className="bg-white border rounded-lg p-6 shadow-md">
            <h3 className="text-2xl font-bold text-blue-600 mb-3">
              5. 無印良品
            </h3>
            <p className="text-gray-700 mb-4">
              <strong>価格：1,790円〜</strong>｜<strong>サイズ感：標準</strong>
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              シンプルで飽きのこないデザイン。オーガニックコットン素材で肌に優しく、
              品質重視のママに人気です。
            </p>
            <p className="text-sm text-gray-600">
              ✅ おすすめポイント：品質、シンプル、肌に優しい
            </p>
          </div>
        </div>
      </section>

      {/* セクション5 */}
      <section id="section5" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-blue-500 pb-2">
          5. よくある失敗例と対処法
        </h2>

        <div className="space-y-6">
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
            <h3 className="text-xl font-bold text-red-700 mb-3">
              ❌ 失敗例1：サイズ表通りに買ったら入らなかった
            </h3>
            <p className="text-gray-700 mb-3">
              ブランドによってサイズ感が異なります。特にむっちり脚の子は、
              ワンサイズ上を選ぶのがおすすめです。
            </p>
            <p className="text-green-700 font-bold">
              ✅ 対処法：口コミを確認する、試着してから購入する
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
            <h3 className="text-xl font-bold text-red-700 mb-3">
              ❌ 失敗例2：大きめを買ったらウエストがブカブカ
            </h3>
            <p className="text-gray-700 mb-3">
              丈に合わせて大きめを買うと、ウエストがゆるくずり落ちることも。
            </p>
            <p className="text-green-700 font-bold">
              ✅ 対処法：調整ベルト付きを選ぶ、ゴムを縫い縮める
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
            <h3 className="text-xl font-bold text-red-700 mb-3">
              ❌ 失敗例3：すぐにサイズアウトしてしまった
            </h3>
            <p className="text-gray-700 mb-3">
              2歳は成長が早い時期。ジャストサイズだとすぐに着られなくなります。
            </p>
            <p className="text-green-700 font-bold">
              ✅ 対処法：ワンサイズ大きめを買う、プチプラで買い替え前提にする
            </p>
          </div>
        </div>
      </section>

      {/* まとめ */}
      <section className="bg-gray-50 p-8 rounded-lg mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          まとめ
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          2歳のズボン選びは、身長だけでなく<strong>体型</strong>に合わせることが重要です。
        </p>
        <ul className="space-y-2 text-gray-700">
          <li>✅ むっちり脚 → ゆったりシルエット、ストレッチ素材</li>
          <li>✅ 細身 → 調整ベルト付き、スリムフィット</li>
          <li>✅ お腹ぽっこり → ゴム調整、ハイウエスト</li>
          <li>✅ 長身 → 長めの丈、サイズアップ</li>
        </ul>
        <p className="text-lg text-gray-700 leading-relaxed mt-6">
          それでも迷ったら、<strong>2分で診断！</strong>
          あなたのお子さんにぴったりなズボンを見つけましょう。
        </p>
      </section>

      {/* 最後のCTA */}
      <CTABox />

      {/* 関連記事 */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">関連記事</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Link
            href="/articles/brand-comparison"
            className="bg-white border rounded-lg p-6 hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-bold text-blue-600 mb-2">
              ユニクロ vs GAP vs 西松屋｜徹底比較
            </h3>
            <p className="text-gray-600">
              人気ブランド3社のサイズ感、価格、品質を比較しました。
            </p>
          </Link>
          <Link
            href="/articles/thick-legs-pants"
            className="bg-white border rounded-lg p-6 hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-bold text-blue-600 mb-2">
              むっちり脚におすすめ！ゆったりズボン5選
            </h3>
            <p className="text-gray-600">
              太めの脚でもゆったり履けるズボンを厳選しました。
            </p>
          </Link>
        </div>
      </section>
    </article>
  );
}
