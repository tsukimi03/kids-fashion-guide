import Link from 'next/link';
import CTABox from '@/components/CTABox';
import Dialogue from '@/components/Dialogue';

export const metadata = {
  title: '2歳のズボン選び方｜サイズ・体型別おすすめブランド5選【2026年版】',
  description: '2歳児のズボン選びで悩んでいるママ必見！平均サイズ、体型別の選び方、おすすめブランド5選を徹底解説。むっちり脚・細身・お腹ぽっこりなど体型別のポイントも紹介します。',
};

export default function Article() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50/30 to-white">
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* パンくずリスト */}
        <nav className="text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-pink-600 transition-colors">ホーム</Link>
          <span className="mx-2">›</span>
          <Link href="/#articles" className="hover:text-pink-600 transition-colors">年齢別</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-900">2歳のズボン選び方</span>
        </nav>

        {/* タイトル */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            2歳のズボン選び方｜サイズ・体型別おすすめブランド5選
          </h1>
          <div className="text-sm text-gray-500 mb-6">
            公開日：2026年2月9日
          </div>
        </div>

        {/* 導入 */}
        <div className="bg-pink-50 border-l-4 border-pink-400 p-6 mb-12 rounded-r-lg">
          <p className="text-lg text-gray-800 leading-relaxed mb-4">
            「2歳になったのにズボンが入らない...」<br />
            「サイズ表通りに買ったのに、ウエストがブカブカ...」
          </p>
          <p className="text-lg text-gray-800 leading-relaxed">
            そんな悩みを持つママ・パパは多いのではないでしょうか？<br />
            2歳児は体型の個人差が大きく、サイズ選びが特に難しい時期です。
          </p>
        </div>

        {/* 会話セクション */}
        <div className="bg-white rounded-lg border border-gray-200 p-8 mb-12 shadow-sm">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 border-b-2 border-pink-200 pb-2 inline-block">
              ママのお悩み相談
            </h2>
          </div>

          <Dialogue speaker="mom">
            <p className="text-base">最近、2歳の息子のズボン選びで悩んでいるんです...</p>
            <p className="mt-2 text-base">サイズ表では90cmなんですが、買ってみたらウエストがブカブカで。</p>
          </Dialogue>

          <Dialogue speaker="expert">
            <p className="text-base">そのお悩み、とてもよくわかります。</p>
            <p className="mt-2 text-base">実は、<strong className="text-pink-600">2歳児は体型の個人差が最も大きい時期</strong>なんです。身長だけでなく、体重や体型を考慮してサイズを選ぶ必要があります。</p>
          </Dialogue>

          <Dialogue speaker="mom">
            <p className="text-base">そうなんですね！具体的にどうやって選べばいいんでしょうか？</p>
          </Dialogue>

          <Dialogue speaker="expert">
            <p className="text-base">それでは、順番に説明していきますね。</p>
          </Dialogue>
        </div>

        {/* 目次 */}
        <div className="bg-gray-50 rounded-lg p-6 mb-12 border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4">📖 目次</h2>
          <ul className="space-y-2">
            <li><a href="#section1" className="text-blue-600 hover:underline text-base">1. 2歳児の平均サイズとは？</a></li>
            <li><a href="#section2" className="text-blue-600 hover:underline text-base">2. サイズ選びの5つのポイント</a></li>
            <li><a href="#section3" className="text-blue-600 hover:underline text-base">3. 体型別おすすめの選び方</a></li>
            <li><a href="#section4" className="text-blue-600 hover:underline text-base">4. おすすめブランド5選</a></li>
            <li><a href="#section5" className="text-blue-600 hover:underline text-base">5. よくある失敗例と対処法</a></li>
          </ul>
        </div>

        {/* セクション1: 平均サイズ */}
        <section id="section1" className="mb-12">
          <div className="bg-pink-100 rounded-lg p-6 mb-6">
            <h2 className="text-3xl font-bold text-gray-900">
              1. 2歳児の平均サイズとは？
            </h2>
          </div>

          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              2歳児の一般的なサイズは<strong className="text-pink-600 text-xl">90cm</strong>ですが、
              体重や体型によって80cm〜100cmまで幅があります。
            </p>
          </div>

          <div className="bg-white border-2 border-pink-200 rounded-lg p-6 shadow-sm mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-pink-200 pb-2">
              📊 2歳児の平均身長・体重
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-pink-50">
                    <th className="p-4 border border-pink-200 font-bold text-gray-800">項目</th>
                    <th className="p-4 border border-pink-200 font-bold text-gray-800">男の子</th>
                    <th className="p-4 border border-pink-200 font-bold text-gray-800">女の子</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 border border-gray-200 font-semibold">身長</td>
                    <td className="p-4 border border-gray-200">85〜90cm</td>
                    <td className="p-4 border border-gray-200">83〜88cm</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 border border-gray-200 font-semibold">体重</td>
                    <td className="p-4 border border-gray-200">11〜13kg</td>
                    <td className="p-4 border border-gray-200">10.5〜12.5kg</td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-gray-200 font-semibold">おすすめサイズ</td>
                    <td className="p-4 border border-gray-200 text-pink-600 font-bold">90cm</td>
                    <td className="p-4 border border-gray-200 text-pink-600 font-bold">90cm</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <Dialogue speaker="mom">
              <p className="text-base">うちの子は身長88cmで体重が13kgなんですが、これって標準ですか？</p>
            </Dialogue>

            <Dialogue speaker="expert">
              <p className="text-base">はい、標準的な体型ですね。</p>
              <p className="mt-2 text-base">ただし、同じ身長・体重でも、<strong>お腹周り、太もも、お尻の大きさ</strong>は個人差があります。だから、体型に合わせた選び方が重要なんです。</p>
            </Dialogue>
          </div>
        </section>

        {/* セクション2: サイズ選びのポイント */}
        <section id="section2" className="mb-12">
          <div className="bg-pink-100 rounded-lg p-6 mb-6">
            <h2 className="text-3xl font-bold text-gray-900">
              2. サイズ選びの5つのポイント
            </h2>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm mb-8">
            <Dialogue speaker="mom">
              <p className="text-base">具体的にはどこを見て選べばいいんですか？</p>
            </Dialogue>

            <Dialogue speaker="expert">
              <p className="text-base">5つのポイントがあります。これを押さえれば失敗しませんよ。</p>
            </Dialogue>
          </div>

          <div className="space-y-6">
            {/* ポイント1 */}
            <div className="bg-white border-l-4 border-blue-400 rounded-r-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                ✓ ポイント1：ウエストの余裕を確認
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                ウエストは<strong className="text-blue-600">指2本分の余裕</strong>があるのが理想です。
                きつすぎると苦しくて嫌がりますし、ゆるすぎると下がってきてしまいます。
              </p>
            </div>

            {/* ポイント2 */}
            <div className="bg-white border-l-4 border-purple-400 rounded-r-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                ✓ ポイント2：太もも周りの余裕
              </h3>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                太ももがパツパツだと動きにくく、嫌がる原因になります。
                しゃがんだ時に生地が突っ張らないかチェックしましょう。
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r">
                <p className="text-sm text-gray-700">
                  <strong>太もも太めの子は：</strong>ストレッチ素材やゆったりシルエットのブランドを選ぶと良いです。
                </p>
              </div>
            </div>

            {/* ポイント3 */}
            <div className="bg-white border-l-4 border-green-400 rounded-r-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                ✓ ポイント3：股下の長さ
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                股下は<strong className="text-green-600">+3〜5cm</strong>くらいの余裕があると、成長しても長く着られます。
                ただし、長すぎると引きずって危ないので注意が必要です。
              </p>
            </div>

            {/* ポイント4 */}
            <div className="bg-white border-l-4 border-orange-400 rounded-r-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                ✓ ポイント4：ウエスト調整機能
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                内側にゴムの調整ボタンが付いていると、体型に合わせて調整できて便利です。
                ユニクロやGAPなどの主要ブランドには大抵付いています。
              </p>
            </div>

            {/* ポイント5 */}
            <div className="bg-white border-l-4 border-pink-400 rounded-r-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                ✓ ポイント5：素材の伸縮性
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                2歳はよく動く時期なので、<strong className="text-pink-600">ストレッチ素材</strong>がおすすめです。
                綿100%よりも、綿95% + ポリウレタン5%くらいの方が動きやすいですよ。
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="my-12">
          <CTABox />
        </div>

        {/* セクション3: 体型別の選び方 */}
        <section id="section3" className="mb-12">
          <div className="bg-pink-100 rounded-lg p-6 mb-6">
            <h2 className="text-3xl font-bold text-gray-900">
              3. 体型別おすすめの選び方
            </h2>
          </div>

          <div className="space-y-8">
            {/* やせ型・細身 */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">
                🩱 やせ型・細身の子
              </h3>

              <div className="bg-white rounded-lg p-6 mb-4">
                <Dialogue speaker="mom">
                  <p className="text-base">うちの子、細身で90cmだとウエストがブカブカなんです...</p>
                </Dialogue>

                <Dialogue speaker="expert">
                  <p className="text-base">細身のお子さんには、<strong className="text-blue-600">ユニクロ</strong>がおすすめです。</p>
                  <p className="mt-2 text-base">ユニクロは細身設計なので、スッキリ着られますよ。</p>
                </Dialogue>
              </div>

              <div className="bg-white rounded-lg p-6 border-2 border-blue-200">
                <h4 className="font-bold text-blue-700 mb-3 text-lg">おすすめブランド</h4>
                <ul className="space-y-2 text-base text-gray-700">
                  <li>✓ <strong>ユニクロ</strong>：細身シルエット、ウエスト調整機能付き</li>
                  <li>✓ <strong>無印良品</strong>：シンプルで細身、綿100%</li>
                  <li>✓ <strong>H&M</strong>：細身デザイン、価格も手頃</li>
                </ul>
              </div>
            </div>

            {/* ぽっちゃり・むっちり */}
            <div className="bg-pink-50 border-2 border-pink-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-pink-900 mb-6">
                🍖 ぽっちゃり・太もも太めの子
              </h3>

              <div className="bg-white rounded-lg p-6 mb-4">
                <Dialogue speaker="mom">
                  <p className="text-base">うちの子は太ももが太くて、ユニクロだとパツパツで...</p>
                </Dialogue>

                <Dialogue speaker="expert">
                  <p className="text-base">そういう場合は、<strong className="text-pink-600">GAP</strong>がおすすめです。</p>
                  <p className="mt-2 text-base">GAPはアメリカンサイズでゆったりしているので、太もも周りに余裕があります。</p>
                </Dialogue>
              </div>

              <div className="bg-white rounded-lg p-6 border-2 border-pink-200">
                <h4 className="font-bold text-pink-700 mb-3 text-lg">おすすめブランド</h4>
                <ul className="space-y-2 text-base text-gray-700">
                  <li>✓ <strong>GAP</strong>：ゆったりシルエット、ストレッチ素材</li>
                  <li>✓ <strong>西松屋</strong>：ワンサイズ上で対応、コスパ◎</li>
                  <li>✓ <strong>ユニクロ（イージーパンツ）</strong>：ゆったりライン</li>
                </ul>
              </div>
            </div>

            {/* 標準体型 */}
            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-green-900 mb-6">
                👶 標準体型の子
              </h3>

              <div className="bg-white rounded-lg p-6 mb-4">
                <Dialogue speaker="expert">
                  <p className="text-base">標準体型なら、どのブランドでも基本的にOKです。用途に合わせて選びましょう。</p>
                </Dialogue>
              </div>

              <div className="bg-white rounded-lg p-6 border-2 border-green-200">
                <h4 className="font-bold text-green-700 mb-3 text-lg">用途別おすすめ</h4>
                <ul className="space-y-2 text-base text-gray-700">
                  <li>✓ <strong>お出かけ用</strong>：GAP、ユニクロ（おしゃれ＆品質◎）</li>
                  <li>✓ <strong>保育園用</strong>：西松屋（汚れても気にならない）</li>
                  <li>✓ <strong>普段着</strong>：ユニクロ、ZARA（バランス◎）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="my-12">
          <CTABox />
        </div>

        {/* セクション4: おすすめブランド5選 */}
        <section id="section4" className="mb-12">
          <div className="bg-pink-100 rounded-lg p-6 mb-6">
            <h2 className="text-3xl font-bold text-gray-900">
              4. おすすめブランド5選
            </h2>
          </div>

          <div className="overflow-x-auto mb-8">
            <table className="w-full bg-white rounded-lg shadow-sm border border-gray-200">
              <thead>
                <tr className="bg-pink-50 border-b-2 border-pink-200">
                  <th className="p-4 text-left font-bold text-gray-800">ブランド</th>
                  <th className="p-4 text-center font-bold text-gray-800">価格</th>
                  <th className="p-4 text-center font-bold text-gray-800">品質</th>
                  <th className="p-4 text-center font-bold text-gray-800">サイズ感</th>
                  <th className="p-4 text-center font-bold text-gray-800">おすすめ</th>
                </tr>
              </thead>
              <tbody className="text-base">
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-bold text-blue-600">ユニクロ</td>
                  <td className="p-4 text-center">990〜1,490円</td>
                  <td className="p-4 text-center">⭐⭐⭐⭐⭐</td>
                  <td className="p-4 text-center">細身</td>
                  <td className="p-4 text-center text-sm">やせ型〜標準</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="p-4 font-bold text-pink-600">GAP</td>
                  <td className="p-4 text-center">1,990〜3,990円</td>
                  <td className="p-4 text-center">⭐⭐⭐⭐</td>
                  <td className="p-4 text-center">ゆったり</td>
                  <td className="p-4 text-center text-sm">ぽっちゃり</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-bold text-green-600">西松屋</td>
                  <td className="p-4 text-center">499〜1,290円</td>
                  <td className="p-4 text-center">⭐⭐⭐</td>
                  <td className="p-4 text-center">標準</td>
                  <td className="p-4 text-center text-sm">保育園用</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="p-4 font-bold text-purple-600">ZARA</td>
                  <td className="p-4 text-center">1,990〜2,990円</td>
                  <td className="p-4 text-center">⭐⭐⭐⭐</td>
                  <td className="p-4 text-center">細身</td>
                  <td className="p-4 text-center text-sm">おしゃれ重視</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-orange-600">無印良品</td>
                  <td className="p-4 text-center">1,290〜1,990円</td>
                  <td className="p-4 text-center">⭐⭐⭐⭐</td>
                  <td className="p-4 text-center">標準</td>
                  <td className="p-4 text-center text-sm">シンプル好き</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* セクション5: よくある失敗例 */}
        <section id="section5" className="mb-12">
          <div className="bg-pink-100 rounded-lg p-6 mb-6">
            <h2 className="text-3xl font-bold text-gray-900">
              5. よくある失敗例と対処法
            </h2>
          </div>

          <div className="space-y-6">
            {/* 失敗例1 */}
            <div className="bg-red-50 border-l-4 border-red-400 rounded-r-lg p-6">
              <h3 className="text-xl font-bold text-red-700 mb-3">
                ❌ 失敗例1：「長く着せたい」と大きめを買う
              </h3>
              <p className="text-base text-gray-700 mb-3">
                大きすぎると転倒の原因になります。特に股下が長すぎると引きずって危険です。
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r">
                <p className="text-sm font-bold text-gray-700">
                  対処法：ジャストサイズを選び、ウエスト調整機能で対応する
                </p>
              </div>
            </div>

            {/* 失敗例2 */}
            <div className="bg-orange-50 border-l-4 border-orange-400 rounded-r-lg p-6">
              <h3 className="text-xl font-bold text-orange-700 mb-3">
                ❌ 失敗例2：オンラインで試着せずに購入
              </h3>
              <p className="text-base text-gray-700 mb-3">
                ブランドによってサイズ感が全然違います。
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r">
                <p className="text-sm font-bold text-gray-700">
                  対処法：初めてのブランドは店舗で試着。2回目からオンラインでOK
                </p>
              </div>
            </div>

            {/* 失敗例3 */}
            <div className="bg-purple-50 border-l-4 border-purple-400 rounded-r-lg p-6">
              <h3 className="text-xl font-bold text-purple-700 mb-3">
                ❌ 失敗例3：デザイン重視で機能性を無視
              </h3>
              <p className="text-base text-gray-700 mb-3">
                2歳はたくさん動く時期なので、動きやすさが最優先です。
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r">
                <p className="text-sm font-bold text-gray-700">
                  対処法：お出かけ用と普段着を分ける。普段着はストレッチ素材を選ぶ
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* まとめ */}
        <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg p-8 mb-12 border-2 border-pink-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            まとめ
          </h2>

          <div className="bg-white rounded-lg p-6 mb-6">
            <h3 className="font-bold text-xl text-gray-900 mb-4 border-b-2 border-pink-200 pb-2">
              ✅ 2歳のズボン選び 5つのポイント
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-base text-gray-700">
              <li>ウエストは指2本分の余裕を確保</li>
              <li>太もも周りの余裕をチェック（しゃがんで確認）</li>
              <li>股下は+3〜5cmくらいがベスト</li>
              <li>ウエスト調整機能付きを選ぶ</li>
              <li>ストレッチ素材で動きやすく</li>
            </ol>
          </div>

          <div className="bg-white rounded-lg p-6">
            <h3 className="font-bold text-xl text-gray-900 mb-4 border-b-2 border-pink-200 pb-2">
              🏆 体型別おすすめブランド
            </h3>
            <ul className="space-y-2 text-base text-gray-700">
              <li>🩱 <strong>やせ型・細身</strong> → ユニクロ、無印良品</li>
              <li>🍖 <strong>ぽっちゃり</strong> → GAP、西松屋（ワンサイズ上）</li>
              <li>👶 <strong>標準体型</strong> → どこでもOK（用途で選ぶ）</li>
            </ul>
          </div>
        </div>

        {/* 最後のCTA */}
        <div className="my-12">
          <CTABox />
        </div>

        {/* 関連記事 */}
        <section className="mt-16 pt-8 border-t-2 border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📚 あわせて読みたい</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/articles/brand-comparison"
              className="block bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-200"
            >
              <h3 className="text-xl font-bold text-purple-600 mb-2">ユニクロ vs GAP vs 西松屋｜徹底比較</h3>
              <p className="text-gray-600 text-sm">人気3大ブランドを価格・品質・サイズ感で比較！</p>
            </Link>
            <Link
              href="/articles/chubby-pants-recommendation"
              className="block bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-200"
            >
              <h3 className="text-xl font-bold text-pink-600 mb-2">むっちり脚の子におすすめ！ゆったりズボン5選</h3>
              <p className="text-gray-600 text-sm">太もも太めの子でも快適に履けるパンツを厳選！</p>
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
