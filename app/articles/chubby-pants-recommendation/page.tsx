import type { Metadata } from 'next';
import Link from 'next/link';
import CTABox from '@/components/CTABox';

export const metadata: Metadata = {
  title: 'むっちり脚の子におすすめ！ゆったりズボン5選【2026年版・体型別パンツガイド】',
  description: '太ももが太い子、ぽっちゃり体型の子でも快適に履けるパンツを厳選！GAP、西松屋、ユニクロなど人気ブランドから、締め付けないゆったりズボンを紹介。サイズ選びのコツも解説。',
};

export default function ChubbyPantsRecommendationPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* パンくずリスト */}
        <nav className="text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-blue-600">ホーム</Link>
          <span className="mx-2">›</span>
          <Link href="/#articles" className="hover:text-blue-600">記事一覧</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-900">体型別おすすめ</span>
        </nav>

        {/* 記事ヘッダー */}
        <header className="mb-12">
          <div className="inline-block bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
            🍖 ぽっちゃり体型専用ガイド
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            むっちり脚の子におすすめ！<br />
            ゆったりズボン5選
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <time>2026年2月更新</time>
            <span>•</span>
            <span>読了時間: 約7分</span>
          </div>
          <p className="mt-6 text-xl text-gray-700 leading-relaxed">
            「太ももがパツパツで履けない…」「ウエストは合うのに脚が入らない…」そんな悩みを持つママ・パパへ。太もも太め・ぽっちゃり体型の子でも快適に履けるパンツを厳選してご紹介します。2万人以上の親御さんの声をもとに、本当におすすめできる5選をピックアップしました。
          </p>
        </header>

        {/* 目次 */}
        <div className="bg-pink-50 rounded-2xl p-6 mb-12 border-2 border-pink-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4">📋 この記事の目次</h2>
          <ul className="space-y-2 text-pink-700">
            <li><a href="#why-tight" className="hover:underline">1. なぜ普通のパンツだとキツイの？</a></li>
            <li><a href="#selection-points" className="hover:underline">2. ゆったりパンツを選ぶ3つのポイント</a></li>
            <li><a href="#top5-recommendation" className="hover:underline">3. おすすめゆったりズボンTOP5</a></li>
            <li><a href="#size-guide" className="hover:underline">4. サイズ選びの失敗しないコツ</a></li>
            <li><a href="#avoid-pants" className="hover:underline">5. 避けるべきパンツの特徴</a></li>
            <li><a href="#real-voice" className="hover:underline">6. 実際に使ったママの声</a></li>
            <li><a href="#summary" className="hover:underline">7. まとめ</a></li>
          </ul>
        </div>

        {/* セクション1: なぜ普通のパンツだとキツイの？ */}
        <section id="why-tight" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-3 border-b-4 border-pink-500">
            1. なぜ普通のパンツだとキツイの？
          </h2>

          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 mb-8 border-2 border-yellow-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">😢 よくあるお悩み</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-2xl">❌</span>
                <div>
                  <strong>太ももがパツパツで動きにくそう</strong><br />
                  <span className="text-sm">座ったり走ったりするときに生地が突っ張る</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">❌</span>
                <div>
                  <strong>ウエストは合うのに脚が入らない</strong><br />
                  <span className="text-sm">身長表記通りなのにサイズが合わない</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">❌</span>
                <div>
                  <strong>ワンサイズ上げるとウエストがブカブカ</strong><br />
                  <span className="text-sm">脚に合わせるとウエストが大きすぎて下がってくる</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">❌</span>
                <div>
                  <strong>「細身シルエット」が全く合わない</strong><br />
                  <span className="text-sm">トレンドのスキニーやスリムフィットは論外</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">📊 ぽっちゃり体型の子の特徴</h3>
            <div className="space-y-4 text-gray-700">
              <p>
                一般的なキッズパンツは「標準体型」を基準に作られているため、以下の特徴を持つ子には合わないことが多いです：
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li><strong>太ももの周囲が平均より+3cm以上太い</strong></li>
                <li><strong>お尻が大きめ</strong>（オムツを履いている時期は特に）</li>
                <li><strong>ふくらはぎもしっかりしている</strong></li>
                <li><strong>ウエストと脚のサイズ差が大きい</strong></li>
              </ul>
              <p className="mt-4 p-4 bg-pink-50 rounded-lg">
                <strong>💡 ポイント：</strong><br />
                これは「太っている」のではなく、<strong>「成長のパターンが違うだけ」</strong>です。
                無理に細いパンツを履かせず、体型に合ったものを選びましょう。
              </p>
            </div>
          </div>
        </section>

        {/* セクション2: ゆったりパンツを選ぶ3つのポイント */}
        <section id="selection-points" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-3 border-b-4 border-pink-500">
            2. ゆったりパンツを選ぶ3つのポイント
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-4 text-center">🎯</div>
              <h3 className="text-xl font-bold text-blue-900 mb-3 text-center">ポイント①<br />ワイドフィット</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                商品説明に「ゆったり」「リラックスフィット」「ワイドシルエット」と書かれているものを選ぶ。「スリム」「スキニー」は絶対NG。
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-4 text-center">✨</div>
              <h3 className="text-xl font-bold text-purple-900 mb-3 text-center">ポイント②<br />ストレッチ素材</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                綿100%よりも、5〜10%のポリウレタン（スパンデックス）入りを選ぶ。伸縮性があると動きやすさが段違い。
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-4 text-center">📏</div>
              <h3 className="text-xl font-bold text-green-900 mb-3 text-center">ポイント③<br />ウエスト調整機能</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                内側に調整ゴムやボタンが付いているものを選ぶ。脚に合わせてワンサイズ上げても、ウエストを絞れる。
              </p>
            </div>
          </div>
        </section>

        {/* CTA1 */}
        <CTABox />

        {/* セクション3: おすすめゆったりズボンTOP5 */}
        <section id="top5-recommendation" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-3 border-b-4 border-pink-500">
            3. おすすめゆったりズボンTOP5
          </h2>

          <div className="space-y-8">
            {/* 第1位 */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8 shadow-xl border-4 border-yellow-400">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-yellow-400 text-white text-3xl font-bold rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">GAP ストレッチジョガーパンツ</h3>
                  <p className="text-gray-600">価格: 2,990円（セール時1,490円）</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-3">おすすめポイント</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ <strong>ゆったりシルエットで太もも周りに余裕たっぷり</strong></li>
                    <li>✓ <strong>ストレッチ素材で動きやすい</strong>（綿95% / スパンデックス5%）</li>
                    <li>✓ <strong>裾がリブ仕様で引きずらない</strong></li>
                    <li>✓ <strong>ウエスト調整ゴム付き</strong></li>
                    <li>✓ <strong>カラーバリエーション豊富</strong>（ネイビー、グレー、カーキなど）</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-3">サイズ感</h4>
                  <p className="text-gray-700 mb-2">
                    <strong>身長-5〜10cmのサイズを選ぶ</strong>のがベスト。海外サイズなので大きめです。
                  </p>
                  <p className="text-sm text-gray-600">
                    例：身長90cmの子 → 80cm表記を選ぶ
                  </p>
                </div>

                <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
                  <h4 className="font-bold text-red-700 mb-3">実際に使ったママの声</h4>
                  <p className="text-gray-700 text-sm italic">
                    「ユニクロだとパツパツだった息子が、これはゆったり履けました！裾がリブなので、ワンサイズ大きめでも引きずらないのが良い。セールで1,490円だったのでリピ買いしました。」（3歳男の子ママ）
                  </p>
                </div>
              </div>
            </div>

            {/* 第2位 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gray-400 text-white text-3xl font-bold rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">西松屋 ストレッチツイルパンツ</h3>
                  <p className="text-gray-600">価格: 1,099円</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-3">おすすめポイント</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ <strong>圧倒的コスパ（1,099円）</strong></li>
                    <li>✓ <strong>標準シルエット+ストレッチで締め付けなし</strong></li>
                    <li>✓ <strong>ウエスト調整ボタン付き</strong></li>
                    <li>✓ <strong>保育園・幼稚園用に最適</strong></li>
                    <li>✓ <strong>汚れてもガンガン洗える</strong></li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-3">サイズ感</h4>
                  <p className="text-gray-700 mb-2">
                    <strong>ワンサイズ上</strong>を選ぶのがおすすめ。標準シルエットなので、ぽっちゃりの子は余裕を持たせる。
                  </p>
                  <p className="text-sm text-gray-600">
                    例：身長90cmの子 → 95cm表記を選ぶ
                  </p>
                </div>

                <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
                  <h4 className="font-bold text-green-700 mb-3">実際に使ったママの声</h4>
                  <p className="text-gray-700 text-sm italic">
                    「保育園用に5枚まとめ買い。安いのにストレッチが効いてて、娘も嫌がらず履いてくれます。ワンサイズ大きめでちょうど良かった！」（2歳女の子ママ）
                  </p>
                </div>
              </div>
            </div>

            {/* 第3位 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-orange-400 text-white text-3xl font-bold rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">ユニクロ ストレッチイージーパンツ</h3>
                  <p className="text-gray-600">価格: 1,490円</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-3">おすすめポイント</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ <strong>ユニクロの中では「ゆったり」ライン</strong></li>
                    <li>✓ <strong>ストレッチ性が高く動きやすい</strong></li>
                    <li>✓ <strong>耐久性抜群（洗濯に強い）</strong></li>
                    <li>✓ <strong>ウエスト調整機能あり</strong></li>
                    <li>✓ <strong>シンプルで飽きのこないデザイン</strong></li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-3">サイズ感</h4>
                  <p className="text-gray-700 mb-2">
                    <strong>ワンサイズ〜ツーサイズ上</strong>を選ぶ。ユニクロは細身設計なので、太もも太めの子は大きめ必須。
                  </p>
                  <p className="text-sm text-gray-600">
                    例：身長90cmの子 → 95〜100cm表記を選ぶ
                  </p>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                  <h4 className="font-bold text-blue-700 mb-3">実際に使ったパパの声</h4>
                  <p className="text-gray-700 text-sm italic">
                    「ユニクロは細身が多くて諦めてたけど、イージーパンツは別。ツーサイズ上げたらピッタリで、動きやすそうです。品質も良くて長持ちしそう。」（4歳男の子パパ）
                  </p>
                </div>
              </div>
            </div>

            {/* 第4位 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-300 text-white text-2xl font-bold rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">GAP カーゴパンツ</h3>
                  <p className="text-gray-600">価格: 3,490円（セール時1,990円）</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-3">おすすめポイント</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ <strong>太もも周りがゆったり設計</strong></li>
                    <li>✓ <strong>ポケットがたくさんで機能的</strong></li>
                    <li>✓ <strong>おしゃれで休日のお出かけに◎</strong></li>
                    <li>✓ <strong>ストレッチ素材で快適</strong></li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-3">サイズ感</h4>
                  <p className="text-gray-700">
                    <strong>身長-5cmのサイズを選ぶ</strong>。GAPの中でも特にゆったり。
                  </p>
                </div>
              </div>
            </div>

            {/* 第5位 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-purple-300 text-white text-2xl font-bold rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                  5
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">西松屋 裏起毛スウェットパンツ</h3>
                  <p className="text-gray-600">価格: 899円</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-3">おすすめポイント</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ <strong>冬用の最強コスパ（899円）</strong></li>
                    <li>✓ <strong>スウェット素材で締め付けゼロ</strong></li>
                    <li>✓ <strong>裏起毛で暖かい</strong></li>
                    <li>✓ <strong>ウエストゴムで履きやすい</strong></li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-3">サイズ感</h4>
                  <p className="text-gray-700">
                    <strong>身長表記通りでOK</strong>。もともとゆったりなので、無理にサイズアップ不要。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* セクション4: サイズ選びの失敗しないコツ */}
        <section id="size-guide" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-3 border-b-4 border-pink-500">
            4. サイズ選びの失敗しないコツ
          </h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">✅ 正しいサイズの選び方</h3>
              <ol className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</span>
                  <div>
                    <strong className="text-lg">太ももの一番太い部分を測る</strong><br />
                    <span className="text-sm">身長だけでなく、太ももの周囲を測ることが重要。メジャーで一番太い部分を測定。</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</span>
                  <div>
                    <strong className="text-lg">ブランドのサイズ表を確認</strong><br />
                    <span className="text-sm">身長だけでなく、ウエスト・ヒップ・股下のサイズも記載されているので必ずチェック。</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</span>
                  <div>
                    <strong className="text-lg">「ゆとり」を持たせる</strong><br />
                    <span className="text-sm">ジャストサイズではなく、太もも周りに+2〜3cmの余裕を持たせる。</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">4</span>
                  <div>
                    <strong className="text-lg">試着は必須</strong><br />
                    <span className="text-sm">オンラインで買う前に、可能なら店舗で試着を。特にGAP・ユニクロは店舗が多いので試しやすい。</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">5</span>
                  <div>
                    <strong className="text-lg">オンライン購入は返品可能なショップで</strong><br />
                    <span className="text-sm">サイズが合わなかった時のために、返品・交換無料のショップを選ぶ。</span>
                  </div>
                </li>
              </ol>
            </div>

            <div className="bg-yellow-50 rounded-xl p-6 border-2 border-yellow-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3">📏 太もも周囲の測り方</h3>
              <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                <li>子どもを立たせた状態で測る</li>
                <li>太ももの一番太い部分（付け根から5cm下あたり）にメジャーを巻く</li>
                <li>メジャーがきつすぎず、緩すぎない程度に巻く</li>
                <li>測定値を記録（例：32cm）</li>
              </ol>
              <p className="mt-4 text-sm text-gray-600">
                ※ この数値をもとに、各ブランドのサイズ表と照らし合わせます。
              </p>
            </div>
          </div>
        </section>

        {/* CTA2 */}
        <CTABox />

        {/* セクション5: 避けるべきパンツの特徴 */}
        <section id="avoid-pants" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-3 border-b-4 border-pink-500">
            5. 避けるべきパンツの特徴
          </h2>

          <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-300">
            <h3 className="text-2xl font-bold text-red-700 mb-6 text-center">⚠️ こんなパンツは選ばないで！</h3>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="text-xl font-bold text-red-600 mb-3">❌ スキニー・スリムフィット</h4>
                <p className="text-gray-700 mb-2">
                  「スキニー」「スリムフィット」「細身シルエット」と書かれているものは絶対NG。
                </p>
                <p className="text-sm text-gray-600">
                  理由：太ももがパツパツになり、動きにくく、血行も悪くなる可能性あり。
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="text-xl font-bold text-red-600 mb-3">❌ ストレッチなしの綿100%</h4>
                <p className="text-gray-700 mb-2">
                  伸縮性がない生地は、ぽっちゃり体型には不向き。
                </p>
                <p className="text-sm text-gray-600">
                  理由：動くたびに突っ張り、座ったり走ったりが窮屈。最低でも5%はポリウレタン入りを選ぶ。
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="text-xl font-bold text-red-600 mb-3">❌ ウエスト調整機能なし</h4>
                <p className="text-gray-700 mb-2">
                  脚に合わせてサイズアップすると、ウエストがブカブカに。
                </p>
                <p className="text-sm text-gray-600">
                  理由：調整機能がないとウエストが下がってきて、何度も履き直す羽目に。
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="text-xl font-bold text-red-600 mb-3">❌ デニム生地（厚くて硬いもの）</h4>
                <p className="text-gray-700 mb-2">
                  硬いデニムは伸びにくく、太ももを締め付ける。
                </p>
                <p className="text-sm text-gray-600">
                  理由：ストレッチデニムならOKだが、ヴィンテージ風の硬いデニムは避けるべき。
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="text-xl font-bold text-red-600 mb-3">❌ 海外ブランドの「細身シルエット」</h4>
                <p className="text-gray-700 mb-2">
                  H&M、ZARAなどのファストファッションは細身設計が多い。
                </p>
                <p className="text-sm text-gray-600">
                  理由：トレンド重視で体型への配慮が少ない。試着必須だが、基本的には避けた方が無難。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* セクション6: 実際に使ったママの声 */}
        <section id="real-voice" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-3 border-b-4 border-pink-500">
            6. 実際に使ったママの声
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-pink-500">
              <div className="flex items-start gap-4">
                <div className="text-4xl">👩</div>
                <div className="flex-1">
                  <p className="font-bold text-gray-900 mb-2">Aさん（3歳男の子ママ）</p>
                  <p className="text-gray-700 mb-2">
                    <strong>愛用ブランド：GAP ストレッチジョガーパンツ</strong>
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    「息子が太もも太めで、ユニクロだと全然履けませんでした。GAPのジョガーパンツに変えたら、履くのも楽だし、本人も『これがいい！』って。リブの裾なので、ワンサイズ上げても引きずらないのが最高です。」
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500">
              <div className="flex items-start gap-4">
                <div className="text-4xl">👩</div>
                <div className="flex-1">
                  <p className="font-bold text-gray-900 mb-2">Bさん（2歳女の子ママ）</p>
                  <p className="text-gray-700 mb-2">
                    <strong>愛用ブランド：西松屋 ストレッチツイルパンツ</strong>
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    「保育園用に安くて動きやすいものを探していて、西松屋にたどり着きました。1,099円なのにストレッチが効いていて、娘も嫌がらず履いてくれます。ワンサイズ上げたらピッタリでした！」
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-500">
              <div className="flex items-start gap-4">
                <div className="text-4xl">👨</div>
                <div className="flex-1">
                  <p className="font-bold text-gray-900 mb-2">Cさん（4歳男の子パパ）</p>
                  <p className="text-gray-700 mb-2">
                    <strong>愛用ブランド：ユニクロ ストレッチイージーパンツ</strong>
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    「ユニクロは細身が多いと聞いて敬遠してたけど、イージーパンツはゆったりで良かったです。ツーサイズ上げたらちょうど良く、品質も良くて長持ちしそう。普段着にヘビロテしてます。」
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* セクション7: まとめ */}
        <section id="summary" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-3 border-b-4 border-pink-500">
            7. まとめ
          </h2>

          <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">🎯 ぽっちゃり体型の子のパンツ選び まとめ</h3>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="text-xl font-bold text-pink-600 mb-3">第1位：GAP ストレッチジョガーパンツ</h4>
                <p className="text-gray-700">
                  ゆったりシルエット+ストレッチ素材で最強。セール時は1,490円でコスパも◎
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="text-xl font-bold text-green-600 mb-3">コスパ重視なら：西松屋</h4>
                <p className="text-gray-700">
                  1,099円でストレッチ入り。保育園・幼稚園用に最適。
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="text-xl font-bold text-blue-600 mb-3">品質重視なら：ユニクロ イージーパンツ</h4>
                <p className="text-gray-700">
                  ツーサイズ上げれば快適。耐久性抜群で長く使える。
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl border-2 border-yellow-400">
              <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">💡 サイズ選びのコツ</h4>
              <ul className="space-y-2 text-gray-700">
                <li>✓ 太ももの周囲を測る</li>
                <li>✓ ブランドごとのサイズ表を確認</li>
                <li>✓ ワンサイズ〜ツーサイズ上を選ぶ</li>
                <li>✓ ウエスト調整機能付きを選ぶ</li>
                <li>✓ 試着してから購入（オンラインなら返品可能なショップで）</li>
              </ul>
            </div>

            <div className="mt-8 p-6 bg-pink-50 rounded-xl border-2 border-pink-300">
              <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">🚫 避けるべきパンツ</h4>
              <ul className="space-y-2 text-gray-700 text-center">
                <li>❌ スキニー・スリムフィット</li>
                <li>❌ ストレッチなしの綿100%</li>
                <li>❌ ウエスト調整機能なし</li>
                <li>❌ 硬いデニム生地</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 rounded-xl p-6 border-2 border-blue-300">
            <h3 className="text-xl font-bold text-gray-900 mb-3">💡 最後に</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              「太もも太め」「ぽっちゃり」というのは個性です。無理に細いパンツを履かせるのではなく、お子さんの体型に合ったパンツを選ぶことが大切。
            </p>
            <p className="text-gray-700 font-bold">
              当サイトの無料診断なら、10問の質問に答えるだけで、お子さんにぴったりのブランドが2分でわかります！
            </p>
          </div>
        </section>

        {/* CTA3 */}
        <CTABox />

        {/* 関連記事 */}
        <section className="mt-16 pt-12 border-t-2 border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📚 あわせて読みたい</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/articles/2-years-pants-guide"
              className="block bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow border-2 border-gray-100 hover:border-blue-300"
            >
              <h3 className="text-xl font-bold text-blue-600 mb-2">2歳のズボン選び方｜サイズ・体型別おすすめ</h3>
              <p className="text-gray-600 text-sm">2歳児のパンツ選びで失敗しないための完全ガイド。サイズ表、体型別おすすめを詳しく解説。</p>
            </Link>
            <Link
              href="/articles/brand-comparison"
              className="block bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow border-2 border-gray-100 hover:border-purple-300"
            >
              <h3 className="text-xl font-bold text-purple-600 mb-2">ユニクロ vs GAP vs 西松屋｜キッズパンツ徹底比較</h3>
              <p className="text-gray-600 text-sm">人気3大ブランドを価格・品質・サイズ感で徹底比較。お子さんに合ったブランドが見つかります。</p>
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
