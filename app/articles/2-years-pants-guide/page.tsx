import Link from 'next/link';
import CTABox from '@/components/CTABox';
import Dialogue from '@/components/Dialogue';

export const metadata = {
  title: '2歳のズボン選び方｜サイズ・体型別おすすめブランド5選【2026年版】',
  description: '2歳児のズボン選びで悩んでいるママ必見！平均サイズ、体型別の選び方、おすすめブランド5選を徹底解説。むっちり脚・細身・お腹ぽっこりなど体型別のポイントも紹介します。',
};

export default function Article() {
  return (
    <div className="min-h-screen" style={{
      background: 'linear-gradient(135deg, #FFF5F7 0%, #FFF0F5 25%, #F0F8FF 50%, #FFF0F5 75%, #FFF5F7 100%)',
      backgroundSize: '400% 400%',
    }}>
      {/* ドット柄の背景オーバーレイ */}
      <div
        className="fixed inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #FFB6C1 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      />

      <article className="container mx-auto px-4 py-12 max-w-4xl relative z-10">
        {/* パンくずリスト */}
        <nav className="text-sm text-gray-600 mb-6 flex items-center gap-2">
          <span className="text-pink-400">🏠</span>
          <Link href="/" className="hover:text-pink-600 transition-colors">ホーム</Link>
          <span className="text-pink-300">›</span>
          <span className="text-pink-600">2歳のズボン選び方</span>
        </nav>

        {/* タイトル */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 mb-8 border-4 border-pink-100 relative overflow-hidden">
          {/* 装飾 */}
          <div className="absolute top-4 right-4 text-6xl opacity-20">🌸</div>
          <div className="absolute bottom-4 left-4 text-4xl opacity-20">💕</div>

          <div className="relative z-10">
            <div className="inline-block bg-gradient-to-r from-pink-200 to-purple-200 px-4 py-1 rounded-full text-sm font-bold text-pink-800 mb-4">
              👶 2歳児ママ必見！
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{
              background: 'linear-gradient(135deg, #FF6B9D 0%, #C084FC 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              2歳のズボン選び方
            </h1>
            <p className="text-xl text-gray-600 mb-2">サイズ・体型別おすすめブランド5選 ✨</p>
            <div className="text-sm text-gray-500 mt-4 flex items-center gap-2">
              <span>📅</span>
              <time>2026年2月9日</time>
            </div>
          </div>
        </div>

        {/* 会話スタート */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 mb-8 border-4 border-pink-100">
          <div className="text-center mb-6">
            <span className="text-4xl">💭</span>
            <h2 className="text-2xl font-bold text-gray-800 mt-2">ママのお悩み相談室</h2>
          </div>

          <Dialogue speaker="mom">
            <p>最近、2歳の息子のズボン選びで悩んでいるんです...😢</p>
            <p className="mt-2">サイズ表では90cmなんですが、買ってみたらウエストがブカブカで💦</p>
          </Dialogue>

          <Dialogue speaker="expert">
            <p>そのお悩み、とてもよくわかります！💡</p>
            <p className="mt-2">実は、<strong className="text-pink-600 bg-pink-50 px-2 py-1 rounded">2歳児は体型の個人差が最も大きい時期</strong>なんです。</p>
            <p className="mt-2">身長だけでなく、体重や体型を考慮してサイズを選ぶ必要があるんですよ✨</p>
          </Dialogue>

          <Dialogue speaker="mom">
            <p>そうなんですね！具体的にどうやって選べばいいんでしょうか？🤔</p>
          </Dialogue>

          <Dialogue speaker="expert">
            <p>それでは、順番に説明していきますね📝</p>
            <p className="mt-2">まずは、2歳児の平均サイズから見ていきましょう！</p>
          </Dialogue>
        </div>

        {/* セクション1: 平均サイズ */}
        <section id="section1" className="mb-12">
          {/* 手書き風ヘッダー */}
          <div className="relative mb-8">
            <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 text-white rounded-3xl p-8 shadow-2xl transform -rotate-1">
              <h2 className="text-3xl font-bold text-center transform rotate-1 flex items-center justify-center gap-3">
                <span className="text-4xl">📏</span>
                1. 2歳児の平均サイズとは？
                <span className="text-4xl">📏</span>
              </h2>
            </div>
            {/* 手書き風の波線 */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
              <svg width="200" height="10" viewBox="0 0 200 10">
                <path d="M 0 5 Q 25 0, 50 5 T 100 5 T 150 5 T 200 5" stroke="#FFB6C1" strokeWidth="3" fill="none" strokeLinecap="round"/>
              </svg>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 border-4 border-purple-100">
            <Dialogue speaker="expert">
              <p>2歳児の一般的なサイズは<strong className="text-pink-600 text-xl bg-pink-50 px-3 py-1 rounded-full">90cm</strong>です 📐</p>
              <p className="mt-2">ただし、体重や体型によって<span className="bg-yellow-100 px-2 py-1 rounded">80cm〜100cm</span>まで幅があるんですよ。</p>
            </Dialogue>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-4 border-blue-200 rounded-3xl p-8 my-8 shadow-lg relative overflow-hidden">
              {/* 装飾 */}
              <div className="absolute top-2 right-2 text-4xl opacity-30">⭐</div>
              <div className="absolute bottom-2 left-2 text-4xl opacity-30">✨</div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-3xl">📊</span>
                2歳児の平均身長・体重
              </h3>
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-pink-200 to-purple-200">
                      <th className="p-4 text-left font-bold text-pink-800">項目</th>
                      <th className="p-4 text-center font-bold text-pink-800">男の子 👦</th>
                      <th className="p-4 text-center font-bold text-pink-800">女の子 👧</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b-2 border-pink-100">
                      <td className="p-4 font-bold text-gray-700">身長</td>
                      <td className="p-4 text-center text-gray-700">85〜90cm</td>
                      <td className="p-4 text-center text-gray-700">83〜88cm</td>
                    </tr>
                    <tr className="bg-pink-50 border-b-2 border-pink-100">
                      <td className="p-4 font-bold text-gray-700">体重</td>
                      <td className="p-4 text-center text-gray-700">11〜13kg</td>
                      <td className="p-4 text-center text-gray-700">10.5〜12.5kg</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-gray-700">おすすめサイズ</td>
                      <td className="p-4 text-center font-bold text-pink-600">90cm</td>
                      <td className="p-4 text-center font-bold text-pink-600">90cm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <Dialogue speaker="mom">
              <p>うちの子は身長88cmで体重が13kgなんですが、これって標準ですか？🤔</p>
            </Dialogue>

            <Dialogue speaker="expert">
              <p>はい、標準的な体型ですね！👍✨</p>
              <p className="mt-2">ただし、同じ身長・体重でも、<strong className="text-purple-600">お腹周り、太もも、お尻の大きさ</strong>は個人差があります。</p>
              <p className="mt-2">だから、<span className="bg-yellow-200 px-3 py-1 rounded-full font-bold">体型に合わせた選び方</span>が重要なんです💡</p>
            </Dialogue>
          </div>
        </section>

        {/* セクション2: サイズ選びのポイント */}
        <section id="section2" className="mb-12">
          <div className="relative mb-8">
            <div className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 text-white rounded-3xl p-8 shadow-2xl transform rotate-1">
              <h2 className="text-3xl font-bold text-center transform -rotate-1 flex items-center justify-center gap-3">
                <span className="text-4xl">✨</span>
                2. サイズ選びの5つのポイント
                <span className="text-4xl">✨</span>
              </h2>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 border-4 border-pink-100">
            <Dialogue speaker="mom">
              <p>具体的にはどこを見て選べばいいんですか？👀</p>
            </Dialogue>

            <Dialogue speaker="expert">
              <p>5つのポイントがあります！これを押さえれば失敗しませんよ🎯✨</p>
            </Dialogue>

            <div className="space-y-8 my-8">
              {/* ポイント1 */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 border-4 border-blue-200 shadow-lg relative overflow-hidden transform hover:scale-105 transition-transform">
                <div className="absolute top-4 right-4 text-6xl opacity-20">1️⃣</div>
                <h3 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-3">
                  <span className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl">✓</span>
                  ウエストの余裕を確認
                </h3>
                <Dialogue speaker="expert">
                  <p>ウエストは<strong className="text-blue-600 text-lg">指2本分の余裕</strong>があるのが理想です 👆👆</p>
                  <p className="mt-2">きつすぎると苦しくて嫌がりますし、ゆるすぎると下がってきてしまいます💦</p>
                </Dialogue>
              </div>

              {/* ポイント2 */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 border-4 border-purple-200 shadow-lg relative overflow-hidden transform hover:scale-105 transition-transform">
                <div className="absolute top-4 right-4 text-6xl opacity-20">2️⃣</div>
                <h3 className="text-2xl font-bold text-purple-700 mb-4 flex items-center gap-3">
                  <span className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl">✓</span>
                  太もも周りの余裕
                </h3>
                <Dialogue speaker="expert">
                  <p>太ももがパツパツだと動きにくく、嫌がる原因になります😢</p>
                  <p className="mt-2">しゃがんだ時に<strong className="text-purple-600">生地が突っ張らない</strong>かチェックしましょう！</p>
                </Dialogue>
                <Dialogue speaker="mom">
                  <p>うちの子、太ももが太めなんですが...😅</p>
                </Dialogue>
                <Dialogue speaker="expert">
                  <p>その場合は<span className="bg-yellow-200 px-3 py-1 rounded-full font-bold">ストレッチ素材</span>や、<span className="bg-yellow-200 px-3 py-1 rounded-full font-bold">ゆったりシルエット</span>のブランドを選ぶと良いですよ💡</p>
                </Dialogue>
              </div>

              {/* ポイント3 */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 border-4 border-green-200 shadow-lg relative overflow-hidden transform hover:scale-105 transition-transform">
                <div className="absolute top-4 right-4 text-6xl opacity-20">3️⃣</div>
                <h3 className="text-2xl font-bold text-green-700 mb-4 flex items-center gap-3">
                  <span className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl">✓</span>
                  股下の長さ
                </h3>
                <Dialogue speaker="expert">
                  <p>股下は<strong className="text-green-600 text-lg">+3〜5cm</strong>くらいの余裕があると、成長しても長く着られます📏</p>
                  <p className="mt-2">ただし、長すぎると引きずって危ないので注意が必要です⚠️</p>
                </Dialogue>
              </div>

              {/* ポイント4 */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-8 border-4 border-orange-200 shadow-lg relative overflow-hidden transform hover:scale-105 transition-transform">
                <div className="absolute top-4 right-4 text-6xl opacity-20">4️⃣</div>
                <h3 className="text-2xl font-bold text-orange-700 mb-4 flex items-center gap-3">
                  <span className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl">✓</span>
                  ウエスト調整機能
                </h3>
                <Dialogue speaker="expert">
                  <p>内側にゴムの調整ボタンが付いていると、体型に合わせて調整できて便利です🔘</p>
                  <p className="mt-2">ユニクロやGAPなどの主要ブランドには大抵付いていますよ✨</p>
                </Dialogue>
              </div>

              {/* ポイント5 */}
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-3xl p-8 border-4 border-pink-200 shadow-lg relative overflow-hidden transform hover:scale-105 transition-transform">
                <div className="absolute top-4 right-4 text-6xl opacity-20">5️⃣</div>
                <h3 className="text-2xl font-bold text-pink-700 mb-4 flex items-center gap-3">
                  <span className="bg-pink-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl">✓</span>
                  素材の伸縮性
                </h3>
                <Dialogue speaker="expert">
                  <p>2歳はよく動く時期なので、<strong className="text-pink-600">ストレッチ素材</strong>がおすすめです🏃‍♂️💨</p>
                  <p className="mt-2">綿100%よりも、<span className="bg-yellow-200 px-2 py-1 rounded font-bold">綿95% + ポリウレタン5%</span>くらいの方が動きやすいですよ！</p>
                </Dialogue>
              </div>
            </div>

            <Dialogue speaker="mom">
              <p>なるほど！この5つを確認すればいいんですね✍️✨</p>
            </Dialogue>
          </div>
        </section>

        {/* CTA */}
        <div className="my-12">
          <CTABox />
        </div>

        {/* セクション3: 体型別の選び方 */}
        <section id="section3" className="mb-12">
          <div className="relative mb-8">
            <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white rounded-3xl p-8 shadow-2xl transform -rotate-1">
              <h2 className="text-3xl font-bold text-center transform rotate-1 flex items-center justify-center gap-3">
                <span className="text-4xl">👶</span>
                3. 体型別おすすめの選び方
                <span className="text-4xl">✨</span>
              </h2>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 border-4 border-purple-100">
            <Dialogue speaker="mom">
              <p>体型によって選び方が変わるんですか？🤔</p>
            </Dialogue>

            <Dialogue speaker="expert">
              <p>はい！お子さんの体型に合わせて選ぶのが、失敗しないコツなんです💡</p>
              <p className="mt-2">大きく分けて3タイプあります！</p>
            </Dialogue>

            {/* やせ型・細身 */}
            <div className="my-10 bg-gradient-to-br from-blue-100 via-blue-50 to-purple-50 rounded-3xl p-10 shadow-2xl border-4 border-blue-200 relative overflow-hidden">
              <div className="absolute top-4 right-4 text-8xl opacity-10">🩱</div>
              <h3 className="text-3xl font-bold text-blue-900 mb-6 flex items-center gap-4">
                <span className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl shadow-lg">🩱</span>
                やせ型・細身の子
              </h3>

              <Dialogue speaker="mom">
                <p>うちの子、細身で90cmだとウエストがブカブカなんです...😢</p>
              </Dialogue>

              <Dialogue speaker="expert">
                <p>細身のお子さんには、<strong className="text-blue-600 text-xl">ユニクロ</strong>がおすすめです！🎯</p>
                <p className="mt-2">ユニクロは細身設計なので、スッキリ着られますよ✨</p>
                <p className="mt-2">また、<span className="bg-yellow-200 px-3 py-1 rounded-full font-bold">レギンスタイプ</span>も良いですね。伸縮性が高くてフィットします👍</p>
              </Dialogue>

              <div className="bg-white rounded-2xl p-6 mt-6 border-4 border-blue-200 shadow-lg">
                <h4 className="font-bold text-blue-700 mb-4 text-xl flex items-center gap-2">
                  <span>🏆</span> おすすめブランド
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <div>
                      <strong className="text-blue-600">ユニクロ</strong>: 細身シルエット、ウエスト調整機能付き
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <div>
                      <strong className="text-blue-600">無印良品</strong>: シンプルで細身、綿100%
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <div>
                      <strong className="text-blue-600">H&M</strong>: 細身デザイン、価格も手頃
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* ぽっちゃり・むっちり */}
            <div className="my-10 bg-gradient-to-br from-pink-100 via-pink-50 to-purple-50 rounded-3xl p-10 shadow-2xl border-4 border-pink-200 relative overflow-hidden">
              <div className="absolute top-4 right-4 text-8xl opacity-10">🍖</div>
              <h3 className="text-3xl font-bold text-pink-900 mb-6 flex items-center gap-4">
                <span className="bg-pink-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl shadow-lg">🍖</span>
                ぽっちゃり・太もも太めの子
              </h3>

              <Dialogue speaker="mom">
                <p>うちの子は太ももが太くて、ユニクロだとパツパツで...💦</p>
              </Dialogue>

              <Dialogue speaker="expert">
                <p>そういう場合は、<strong className="text-pink-600 text-xl">GAP</strong>がおすすめです！🎯</p>
                <p className="mt-2">GAPはアメリカンサイズでゆったりしているので、太もも周りに余裕があります✨</p>
                <p className="mt-2">ワンサイズ下を選んでも大丈夫なくらいです💕</p>
              </Dialogue>

              <Dialogue speaker="mom">
                <p>へえ！知らなかったです！勉強になります😊</p>
              </Dialogue>

              <div className="bg-white rounded-2xl p-6 mt-6 border-4 border-pink-200 shadow-lg">
                <h4 className="font-bold text-pink-700 mb-4 text-xl flex items-center gap-2">
                  <span>🏆</span> おすすめブランド
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <div>
                      <strong className="text-pink-600">GAP</strong>: ゆったりシルエット、ストレッチ素材
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <div>
                      <strong className="text-pink-600">西松屋</strong>: ワンサイズ上で対応、コスパ◎
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <div>
                      <strong className="text-pink-600">ユニクロ（イージーパンツ）</strong>: ゆったりライン
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* 標準体型 */}
            <div className="my-10 bg-gradient-to-br from-green-100 via-green-50 to-blue-50 rounded-3xl p-10 shadow-2xl border-4 border-green-200 relative overflow-hidden">
              <div className="absolute top-4 right-4 text-8xl opacity-10">👶</div>
              <h3 className="text-3xl font-bold text-green-900 mb-6 flex items-center gap-4">
                <span className="bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl shadow-lg">👶</span>
                標準体型の子
              </h3>

              <Dialogue speaker="expert">
                <p>標準体型なら、<strong>どのブランドでも基本的にOK</strong>です！✨</p>
                <p className="mt-2">用途に合わせて選びましょう🎯</p>
              </Dialogue>

              <div className="bg-white rounded-2xl p-6 mt-6 border-4 border-green-200 shadow-lg">
                <h4 className="font-bold text-green-700 mb-4 text-xl flex items-center gap-2">
                  <span>📝</span> 用途別おすすめ
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <div>
                      <strong className="text-green-600">お出かけ用</strong>: GAP、ユニクロ（おしゃれ＆品質◎）
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <div>
                      <strong className="text-green-600">保育園用</strong>: 西松屋（汚れても気にならない）
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <div>
                      <strong className="text-green-600">普段着</strong>: ユニクロ、ZARA（バランス◎）
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="my-12">
          <CTABox />
        </div>

        {/* まとめ */}
        <div className="bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 rounded-3xl shadow-2xl p-10 mb-12 border-4 border-pink-200 relative overflow-hidden">
          <div className="absolute top-0 left-0 text-9xl opacity-10">🎯</div>
          <div className="absolute bottom-0 right-0 text-9xl opacity-10">✨</div>

          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8 relative z-10">
            🎯 まとめ 🎯
          </h2>

          <Dialogue speaker="expert">
            <p>それでは、今日のポイントをおさらいしましょう！📚✨</p>
          </Dialogue>

          <div className="bg-white rounded-2xl p-8 my-6 shadow-xl border-4 border-pink-200">
            <h3 className="font-bold text-2xl text-gray-900 mb-6 flex items-center gap-3">
              <span>✅</span> 2歳のズボン選び 5つのポイント
            </h3>
            <ol className="space-y-4">
              {[
                { num: '1️⃣', text: 'ウエストは指2本分の余裕を確保' },
                { num: '2️⃣', text: '太もも周りの余裕をチェック（しゃがんで確認）' },
                { num: '3️⃣', text: '股下は+3〜5cmくらいがベスト' },
                { num: '4️⃣', text: 'ウエスト調整機能付きを選ぶ' },
                { num: '5️⃣', text: 'ストレッチ素材で動きやすく' }
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-4 bg-pink-50 p-4 rounded-xl">
                  <span className="text-3xl">{point.num}</span>
                  <strong className="text-gray-700 text-lg flex-1">{point.text}</strong>
                </li>
              ))}
            </ol>
          </div>

          <div className="bg-white rounded-2xl p-8 my-6 shadow-xl border-4 border-purple-200">
            <h3 className="font-bold text-2xl text-gray-900 mb-6 flex items-center gap-3">
              <span>🏆</span> 体型別おすすめブランド
            </h3>
            <ul className="space-y-4">
              {[
                { icon: '🩱', type: 'やせ型・細身', brands: 'ユニクロ、無印良品' },
                { icon: '🍖', type: 'ぽっちゃり', brands: 'GAP、西松屋（ワンサイズ上）' },
                { icon: '👶', type: '標準体型', brands: 'どこでもOK（用途で選ぶ）' }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 bg-purple-50 p-4 rounded-xl">
                  <span className="text-3xl">{item.icon}</span>
                  <div className="flex-1">
                    <strong className="text-purple-700 text-lg">{item.type}</strong>
                    <span className="text-gray-700"> → {item.brands}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <Dialogue speaker="mom">
            <p>とってもわかりやすかったです！早速試してみます✨💕</p>
          </Dialogue>

          <Dialogue speaker="expert">
            <p>お子さんにぴったりのズボンが見つかると良いですね😊🌸</p>
            <p className="mt-2">もっと詳しく知りたい方は、下の診断ツールもぜひ使ってみてください！</p>
          </Dialogue>
        </div>

        {/* 最後のCTA */}
        <div className="my-12">
          <CTABox />
        </div>

        {/* 関連記事 */}
        <section className="mt-16 pt-12 border-t-4 border-pink-200">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8 flex items-center justify-center gap-3">
            <span className="text-4xl">📚</span>
            あわせて読みたい
            <span className="text-4xl">💕</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Link
              href="/articles/brand-comparison"
              className="block bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border-4 border-purple-200 hover:border-purple-400 transform hover:scale-105"
            >
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-purple-600 mb-3">ユニクロ vs GAP vs 西松屋｜徹底比較</h3>
              <p className="text-gray-600">人気3大ブランドを価格・品質・サイズ感で比較！✨</p>
            </Link>
            <Link
              href="/articles/chubby-pants-recommendation"
              className="block bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border-4 border-pink-200 hover:border-pink-400 transform hover:scale-105"
            >
              <div className="text-4xl mb-4">💖</div>
              <h3 className="text-2xl font-bold text-pink-600 mb-3">むっちり脚の子におすすめ！ゆったりズボン5選</h3>
              <p className="text-gray-600">太もも太めの子でも快適に履けるパンツを厳選！💕</p>
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
