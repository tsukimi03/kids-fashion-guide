import Link from 'next/link';
import CTABox from '@/components/CTABox';
import Dialogue from '@/components/Dialogue';

export const metadata = {
  title: '2歳のズボン選び方｜サイズ・体型別おすすめブランド5選【2026年版】',
  description: '2歳児のズボン選びで悩んでいるママ必見！平均サイズ、体型別の選び方、おすすめブランド5選を徹底解説。むっちり脚・細身・お腹ぽっこりなど体型別のポイントも紹介します。',
};

export default function Article() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-4xl bg-gradient-to-b from-pink-50/30 to-blue-50/30">
      {/* パンくずリスト */}
      <nav className="text-sm text-gray-600 mb-6">
        <Link href="/" className="hover:text-blue-600">ホーム</Link>
        <span className="mx-2">&gt;</span>
        <span>2歳のズボン選び方</span>
      </nav>

      {/* タイトル */}
      <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          2歳のズボン選び方
        </h1>
        <p className="text-lg text-gray-600">サイズ・体型別おすすめブランド5選</p>
        <div className="text-sm text-gray-500 mt-4">
          <time>公開日：2026年2月9日</time>
        </div>
      </div>

      {/* 会話スタート */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <Dialogue speaker="mom">
          <p>最近、2歳の息子のズボン選びで悩んでいるんです...。</p>
          <p className="mt-2">サイズ表では90cmなんですが、買ってみたらウエストがブカブカで💦</p>
        </Dialogue>

        <Dialogue speaker="expert">
          <p>そのお悩み、とてもよくわかります！</p>
          <p className="mt-2">実は、<strong className="text-blue-600">2歳児は体型の個人差が最も大きい時期</strong>なんです。</p>
          <p className="mt-2">身長だけでなく、体重や体型を考慮してサイズを選ぶ必要があるんですよ。</p>
        </Dialogue>

        <Dialogue speaker="mom">
          <p>そうなんですね！具体的にどうやって選べばいいんでしょうか？</p>
        </Dialogue>

        <Dialogue speaker="expert">
          <p>それでは、順番に説明していきますね📝</p>
          <p className="mt-2">まずは、2歳児の平均サイズから見ていきましょう。</p>
        </Dialogue>
      </div>

      {/* セクション1: 平均サイズ */}
      <section id="section1" className="mb-12">
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-t-2xl p-6 shadow-lg">
          <h2 className="text-3xl font-bold">
            1. 2歳児の平均サイズとは？
          </h2>
        </div>
        <div className="bg-white rounded-b-2xl shadow-lg p-8">
          <Dialogue speaker="expert">
            <p>2歳児の一般的なサイズは<strong className="text-blue-600">90cm</strong>です。</p>
            <p className="mt-2">ただし、体重や体型によって80cm〜100cmまで幅があるんですよ。</p>
          </Dialogue>

          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 my-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">📊 2歳児の平均身長・体重</h3>
            <table className="w-full text-left bg-white rounded-lg overflow-hidden shadow">
              <thead className="bg-gradient-to-r from-blue-100 to-purple-100">
                <tr>
                  <th className="p-4 border">項目</th>
                  <th className="p-4 border">男の子</th>
                  <th className="p-4 border">女の子</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border font-semibold">身長</td>
                  <td className="p-4 border">85〜90cm</td>
                  <td className="p-4 border">83〜88cm</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 border font-semibold">体重</td>
                  <td className="p-4 border">11〜13kg</td>
                  <td className="p-4 border">10.5〜12.5kg</td>
                </tr>
                <tr>
                  <td className="p-4 border font-semibold">おすすめサイズ</td>
                  <td className="p-4 border">90cm</td>
                  <td className="p-4 border">90cm</td>
                </tr>
              </tbody>
            </table>
          </div>

          <Dialogue speaker="mom">
            <p>うちの子は身長88cmで体重が13kgなんですが、これって標準ですか？</p>
          </Dialogue>

          <Dialogue speaker="expert">
            <p>はい、標準的な体型ですね！</p>
            <p className="mt-2">ただし、同じ身長・体重でも、<strong>お腹周り、太もも、お尻の大きさ</strong>は個人差があります。</p>
            <p className="mt-2">だから、<span className="bg-yellow-200 px-2 py-1 rounded">体型に合わせた選び方</span>が重要なんです。</p>
          </Dialogue>
        </div>
      </section>

      {/* セクション2: サイズ選びのポイント */}
      <section id="section2" className="mb-12">
        <div className="bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-t-2xl p-6 shadow-lg">
          <h2 className="text-3xl font-bold">
            2. サイズ選びの5つのポイント
          </h2>
        </div>
        <div className="bg-white rounded-b-2xl shadow-lg p-8">
          <Dialogue speaker="mom">
            <p>具体的にはどこを見て選べばいいんですか？</p>
          </Dialogue>

          <Dialogue speaker="expert">
            <p>5つのポイントがあります！これを押さえれば失敗しませんよ✨</p>
          </Dialogue>

          <div className="space-y-6 my-8">
            {/* ポイント1 */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-blue-700 mb-3">
                ✅ ポイント1: ウエストの余裕を確認
              </h3>
              <Dialogue speaker="expert">
                <p>ウエストは<strong>指2本分の余裕</strong>があるのが理想です。</p>
                <p className="mt-2">きつすぎると苦しくて嫌がりますし、ゆるすぎると下がってきてしまいます。</p>
              </Dialogue>
            </div>

            {/* ポイント2 */}
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6 border-l-4 border-purple-500">
              <h3 className="text-xl font-bold text-purple-700 mb-3">
                ✅ ポイント2: 太もも周りの余裕
              </h3>
              <Dialogue speaker="expert">
                <p>太ももがパツパツだと動きにくく、嫌がる原因になります。</p>
                <p className="mt-2">しゃがんだ時に<strong>生地が突っ張らない</strong>かチェックしましょう。</p>
              </Dialogue>
              <Dialogue speaker="mom">
                <p>うちの子、太ももが太めなんですが...😅</p>
              </Dialogue>
              <Dialogue speaker="expert">
                <p>その場合は<span className="bg-yellow-200 px-2 py-1 rounded">ストレッチ素材</span>や、<span className="bg-yellow-200 px-2 py-1 rounded">ゆったりシルエット</span>のブランドを選ぶと良いですよ。後ほど詳しく説明しますね！</p>
              </Dialogue>
            </div>

            {/* ポイント3 */}
            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-green-700 mb-3">
                ✅ ポイント3: 股下の長さ
              </h3>
              <Dialogue speaker="expert">
                <p>股下は<strong>+3〜5cm</strong>くらいの余裕があると、成長しても長く着られます。</p>
                <p className="mt-2">ただし、長すぎると引きずって危ないので注意が必要です。</p>
              </Dialogue>
            </div>

            {/* ポイント4 */}
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-6 border-l-4 border-orange-500">
              <h3 className="text-xl font-bold text-orange-700 mb-3">
                ✅ ポイント4: ウエスト調整機能
              </h3>
              <Dialogue speaker="expert">
                <p>内側にゴムの調整ボタンが付いていると、体型に合わせて調整できて便利です。</p>
                <p className="mt-2">ユニクロやGAPなどの主要ブランドには大抵付いていますよ。</p>
              </Dialogue>
            </div>

            {/* ポイント5 */}
            <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-xl p-6 border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-red-700 mb-3">
                ✅ ポイント5: 素材の伸縮性
              </h3>
              <Dialogue speaker="expert">
                <p>2歳はよく動く時期なので、<strong>ストレッチ素材</strong>がおすすめです。</p>
                <p className="mt-2">綿100%よりも、<span className="bg-yellow-200 px-2 py-1 rounded">綿95% + ポリウレタン5%</span>くらいの方が動きやすいですよ。</p>
              </Dialogue>
            </div>
          </div>

          <Dialogue speaker="mom">
            <p>なるほど！この5つを確認すればいいんですね📝</p>
          </Dialogue>
        </div>
      </section>

      {/* CTA */}
      <CTABox />

      {/* セクション3: 体型別の選び方 */}
      <section id="section3" className="mb-12">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-t-2xl p-6 shadow-lg">
          <h2 className="text-3xl font-bold">
            3. 体型別おすすめの選び方
          </h2>
        </div>
        <div className="bg-white rounded-b-2xl shadow-lg p-8">
          <Dialogue speaker="mom">
            <p>体型によって選び方が変わるんですか？</p>
          </Dialogue>

          <Dialogue speaker="expert">
            <p>はい！お子さんの体型に合わせて選ぶのが、失敗しないコツなんです。</p>
            <p className="mt-2">大きく分けて3タイプあります。</p>
          </Dialogue>

          {/* やせ型・細身 */}
          <div className="my-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-3">
              <span className="text-4xl">🩱</span>
              やせ型・細身の子
            </h3>

            <Dialogue speaker="mom">
              <p>うちの子、細身で90cmだとウエストがブカブカなんです...。</p>
            </Dialogue>

            <Dialogue speaker="expert">
              <p>細身のお子さんには、<strong className="text-blue-600">ユニクロ</strong>がおすすめです！</p>
              <p className="mt-2">ユニクロは細身設計なので、スッキリ着られますよ。</p>
              <p className="mt-2">また、<span className="bg-yellow-200 px-2 py-1 rounded">レギンスタイプ</span>も良いですね。伸縮性が高くてフィットします。</p>
            </Dialogue>

            <div className="bg-white rounded-xl p-6 mt-4 border-2 border-blue-200">
              <h4 className="font-bold text-blue-700 mb-3">おすすめブランド</h4>
              <ul className="space-y-2 text-gray-700">
                <li>✓ <strong>ユニクロ</strong>: 細身シルエット、ウエスト調整機能付き</li>
                <li>✓ <strong>無印良品</strong>: シンプルで細身、綿100%</li>
                <li>✓ <strong>H&M</strong>: 細身デザイン、価格も手頃</li>
              </ul>
            </div>
          </div>

          {/* ぽっちゃり・むっちり */}
          <div className="my-8 bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-pink-900 mb-6 flex items-center gap-3">
              <span className="text-4xl">🍖</span>
              ぽっちゃり・太もも太めの子
            </h3>

            <Dialogue speaker="mom">
              <p>うちの子は太ももが太くて、ユニクロだとパツパツで...💦</p>
            </Dialogue>

            <Dialogue speaker="expert">
              <p>そういう場合は、<strong className="text-pink-600">GAP</strong>がおすすめです！</p>
              <p className="mt-2">GAPはアメリカンサイズでゆったりしているので、太もも周りに余裕があります。</p>
              <p className="mt-2">ワンサイズ下を選んでも大丈夫なくらいです。</p>
            </Dialogue>

            <Dialogue speaker="mom">
              <p>へえ！知らなかったです！</p>
            </Dialogue>

            <div className="bg-white rounded-xl p-6 mt-4 border-2 border-pink-200">
              <h4 className="font-bold text-pink-700 mb-3">おすすめブランド</h4>
              <ul className="space-y-2 text-gray-700">
                <li>✓ <strong>GAP</strong>: ゆったりシルエット、ストレッチ素材</li>
                <li>✓ <strong>西松屋</strong>: ワンサイズ上で対応、コスパ◎</li>
                <li>✓ <strong>ユニクロ（イージーパンツ）</strong>: ゆったりライン</li>
              </ul>
            </div>
          </div>

          {/* 標準体型 */}
          <div className="my-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-green-900 mb-6 flex items-center gap-3">
              <span className="text-4xl">👶</span>
              標準体型の子
            </h3>

            <Dialogue speaker="expert">
              <p>標準体型なら、<strong>どのブランドでも基本的にOK</strong>です！</p>
              <p className="mt-2">用途に合わせて選びましょう。</p>
            </Dialogue>

            <div className="bg-white rounded-xl p-6 mt-4 border-2 border-green-200">
              <h4 className="font-bold text-green-700 mb-3">用途別おすすめ</h4>
              <ul className="space-y-2 text-gray-700">
                <li>✓ <strong>お出かけ用</strong>: GAP、ユニクロ（おしゃれ＆品質◎）</li>
                <li>✓ <strong>保育園用</strong>: 西松屋（汚れても気にならない）</li>
                <li>✓ <strong>普段着</strong>: ユニクロ、ZARA（バランス◎）</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* セクション4: おすすめブランド5選 */}
      <section id="section4" className="mb-12">
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-t-2xl p-6 shadow-lg">
          <h2 className="text-3xl font-bold">
            4. おすすめブランド5選
          </h2>
        </div>
        <div className="bg-white rounded-b-2xl shadow-lg p-8">
          <Dialogue speaker="mom">
            <p>結局、どのブランドがいいんでしょう？</p>
          </Dialogue>

          <Dialogue speaker="expert">
            <p>人気の5ブランドを、価格・品質・サイズ感で比較してみますね！</p>
          </Dialogue>

          {/* ブランド比較表 */}
          <div className="overflow-x-auto my-8">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                <tr>
                  <th className="p-4 text-left">ブランド</th>
                  <th className="p-4 text-center">価格</th>
                  <th className="p-4 text-center">品質</th>
                  <th className="p-4 text-center">サイズ感</th>
                  <th className="p-4 text-center">おすすめ</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr className="hover:bg-blue-50">
                  <td className="p-4 font-bold text-blue-600">ユニクロ</td>
                  <td className="p-4 text-center">990〜1,490円</td>
                  <td className="p-4 text-center">⭐⭐⭐⭐⭐</td>
                  <td className="p-4 text-center">細身</td>
                  <td className="p-4 text-center text-sm">やせ型〜標準</td>
                </tr>
                <tr className="hover:bg-pink-50">
                  <td className="p-4 font-bold text-pink-600">GAP</td>
                  <td className="p-4 text-center">1,990〜3,990円</td>
                  <td className="p-4 text-center">⭐⭐⭐⭐</td>
                  <td className="p-4 text-center">ゆったり</td>
                  <td className="p-4 text-center text-sm">ぽっちゃり</td>
                </tr>
                <tr className="hover:bg-green-50">
                  <td className="p-4 font-bold text-green-600">西松屋</td>
                  <td className="p-4 text-center">499〜1,290円</td>
                  <td className="p-4 text-center">⭐⭐⭐</td>
                  <td className="p-4 text-center">標準</td>
                  <td className="p-4 text-center text-sm">保育園用</td>
                </tr>
                <tr className="hover:bg-purple-50">
                  <td className="p-4 font-bold text-purple-600">ZARA</td>
                  <td className="p-4 text-center">1,990〜2,990円</td>
                  <td className="p-4 text-center">⭐⭐⭐⭐</td>
                  <td className="p-4 text-center">細身</td>
                  <td className="p-4 text-center text-sm">おしゃれ重視</td>
                </tr>
                <tr className="hover:bg-orange-50">
                  <td className="p-4 font-bold text-orange-600">無印良品</td>
                  <td className="p-4 text-center">1,290〜1,990円</td>
                  <td className="p-4 text-center">⭐⭐⭐⭐</td>
                  <td className="p-4 text-center">標準</td>
                  <td className="p-4 text-center text-sm">シンプル好き</td>
                </tr>
              </tbody>
            </table>
          </div>

          <Dialogue speaker="mom">
            <p>わかりやすい！これなら選びやすいですね✨</p>
          </Dialogue>
        </div>
      </section>

      {/* CTA */}
      <CTABox />

      {/* セクション5: よくある失敗例 */}
      <section id="section5" className="mb-12">
        <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-t-2xl p-6 shadow-lg">
          <h2 className="text-3xl font-bold">
            5. よくある失敗例と対処法
          </h2>
        </div>
        <div className="bg-white rounded-b-2xl shadow-lg p-8">
          <Dialogue speaker="mom">
            <p>他のママたちはどんな失敗をしているんですか？</p>
          </Dialogue>

          <Dialogue speaker="expert">
            <p>よくある失敗例を3つ紹介しますね。これを知っておけば同じ失敗を避けられます！</p>
          </Dialogue>

          <div className="space-y-6 mt-8">
            {/* 失敗例1 */}
            <div className="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-6">
              <h3 className="text-xl font-bold text-red-700 mb-4">❌ 失敗例1: 「長く着せたい」と大きめを買う</h3>
              <Dialogue speaker="mom">
                <p>私もやっちゃいました...すぐサイズアウトするから大きめを買ったんですが。</p>
              </Dialogue>
              <Dialogue speaker="expert">
                <p>その気持ちはわかりますが、大きすぎると<strong>転倒の原因</strong>になります。</p>
                <p className="mt-2">特に股下が長すぎると引きずって危険です。</p>
                <p className="mt-2 bg-yellow-100 p-3 rounded-lg">
                  <strong>対処法：</strong>ジャストサイズを選び、ウエスト調整機能で対応する
                </p>
              </Dialogue>
            </div>

            {/* 失敗例2 */}
            <div className="bg-orange-50 border-l-4 border-orange-500 rounded-r-xl p-6">
              <h3 className="text-xl font-bold text-orange-700 mb-4">❌ 失敗例2: オンラインで試着せずに購入</h3>
              <Dialogue speaker="mom">
                <p>店舗に行くのが面倒で、つい...</p>
              </Dialogue>
              <Dialogue speaker="expert">
                <p>オンラインは便利ですが、ブランドによってサイズ感が全然違うんです。</p>
                <p className="mt-2 bg-yellow-100 p-3 rounded-lg">
                  <strong>対処法：</strong>初めてのブランドは店舗で試着。2回目からオンラインでOK
                </p>
              </Dialogue>
            </div>

            {/* 失敗例3 */}
            <div className="bg-purple-50 border-l-4 border-purple-500 rounded-r-xl p-6">
              <h3 className="text-xl font-bold text-purple-700 mb-4">❌ 失敗例3: デザイン重視で機能性を無視</h3>
              <Dialogue speaker="mom">
                <p>可愛いデニムを買ったら、硬くて動きにくそうで...</p>
              </Dialogue>
              <Dialogue speaker="expert">
                <p>2歳はたくさん動く時期なので、<strong>動きやすさ</strong>が最優先です。</p>
                <p className="mt-2 bg-yellow-100 p-3 rounded-lg">
                  <strong>対処法：</strong>お出かけ用と普段着を分ける。普段着はストレッチ素材を選ぶ
                </p>
              </Dialogue>
            </div>
          </div>
        </div>
      </section>

      {/* まとめ */}
      <div className="bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-2xl shadow-2xl p-8 mb-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          🎯 まとめ
        </h2>

        <Dialogue speaker="expert">
          <p>それでは、今日のポイントをおさらいしましょう！</p>
        </Dialogue>

        <div className="bg-white rounded-xl p-6 my-6 shadow-md">
          <h3 className="font-bold text-xl text-gray-900 mb-4">✅ 2歳のズボン選び 5つのポイント</h3>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li><strong>ウエストは指2本分の余裕</strong>を確保</li>
            <li><strong>太もも周りの余裕</strong>をチェック（しゃがんで確認）</li>
            <li><strong>股下は+3〜5cm</strong>くらいがベスト</li>
            <li><strong>ウエスト調整機能付き</strong>を選ぶ</li>
            <li><strong>ストレッチ素材</strong>で動きやすく</li>
          </ol>
        </div>

        <div className="bg-white rounded-xl p-6 my-6 shadow-md">
          <h3 className="font-bold text-xl text-gray-900 mb-4">🏆 体型別おすすめブランド</h3>
          <ul className="space-y-2 text-gray-700">
            <li>🩱 <strong>やせ型・細身</strong> → ユニクロ、無印良品</li>
            <li>🍖 <strong>ぽっちゃり</strong> → GAP、西松屋（ワンサイズ上）</li>
            <li>👶 <strong>標準体型</strong> → どこでもOK（用途で選ぶ）</li>
          </ul>
        </div>

        <Dialogue speaker="mom">
          <p>とってもわかりやすかったです！早速試してみます✨</p>
        </Dialogue>

        <Dialogue speaker="expert">
          <p>お子さんにぴったりのズボンが見つかると良いですね😊</p>
          <p className="mt-2">もっと詳しく知りたい方は、下の診断ツールもぜひ使ってみてください！</p>
        </Dialogue>
      </div>

      {/* 最後のCTA */}
      <CTABox />

      {/* 関連記事 */}
      <section className="mt-16 pt-12 border-t-2 border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">📚 あわせて読みたい</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Link
            href="/articles/brand-comparison"
            className="block bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow border-2 border-gray-100 hover:border-purple-300"
          >
            <h3 className="text-xl font-bold text-purple-600 mb-2">ユニクロ vs GAP vs 西松屋｜徹底比較</h3>
            <p className="text-gray-600 text-sm">人気3大ブランドを価格・品質・サイズ感で比較！</p>
          </Link>
          <Link
            href="/articles/chubby-pants-recommendation"
            className="block bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow border-2 border-gray-100 hover:border-pink-300"
          >
            <h3 className="text-xl font-bold text-pink-600 mb-2">むっちり脚の子におすすめ！ゆったりズボン5選</h3>
            <p className="text-gray-600 text-sm">太もも太めの子でも快適に履けるパンツを厳選！</p>
          </Link>
        </div>
      </section>
    </article>
  );
}
