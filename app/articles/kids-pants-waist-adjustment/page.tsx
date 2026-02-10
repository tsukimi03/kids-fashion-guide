import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Dialogue from '@/components/Dialogue';

export const metadata: Metadata = {
  title: '大きすぎるズボンを調整！ウエスト詰めの簡単テクニック4選【2026年版】',
  description: '大きめサイズのズボンを買ったけどウエストがブカブカ...。裁縫不要で簡単にできるウエスト詰めテクニック4選を紹介します。',
};

export default function Article() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Container className="py-12">
        <article>
          <nav className="text-sm text-gray-600 mb-8">
            <a href="/" className="link">ホーム</a>
            <span className="mx-2">›</span>
            <a href="/categories/pants" className="link">パンツ</a>
            <span className="mx-2">›</span>
            <span className="text-gray-900">ウエスト詰めテクニック</span>
          </nav>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              大きすぎるズボンを調整！<br />ウエスト詰めの簡単テクニック4選
            </h1>
            <div className="text-sm text-gray-500 mb-6">公開日：2026年2月9日</div>
          </div>

          <div className="bg-pink-50 border-l-4 border-primary p-6 mb-12 rounded-r-lg">
            <p className="text-lg leading-relaxed mb-4">
              「長く使えるように大きめサイズを買ったら、ウエストがブカブカ...」<br />
              「裁縫は苦手だけど、なんとか調整したい...」
            </p>
            <p className="text-lg leading-relaxed">
              そんな悩みを持つママ必見！裁縫不要で簡単にできるウエスト詰めテクニックを4つご紹介します。
            </p>
          </div>

          <section className="mb-12">
            <h2 className="section-title">ママのお悩み相談</h2>

            <Dialogue speaker="mom">
              成長を見越して大きめサイズを買ったんだけど、ウエストがブカブカで脱げちゃうの...。でも裁縫は苦手で...
            </Dialogue>

            <Dialogue speaker="expert">
              大丈夫です！針と糸を使わなくても、ウエストを調整できる便利グッズがたくさんあるんですよ。今回は<strong>裁縫不要</strong>の簡単テクニックを4つご紹介しますね。
            </Dialogue>
          </section>

          <section className="mb-12">
            <h2 className="section-title">裁縫不要！ウエスト詰めテクニック4選</h2>

            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">1️⃣</div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-3">ウエストゴム調整ボタン</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      ウエストの内側にボタンを取り付けて、ゴムの長さを調整する方法。針と糸だけで簡単に取り付けられます。
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm font-bold text-blue-900 mb-2">👍 難易度：★☆☆☆☆</p>
                      <p className="text-sm text-gray-700">
                        100均でボタンと糸を買ってくるだけ。5分で完成！
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">2️⃣</div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-3">パンツベルト</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      キッズ用のパンツベルトを使う方法。ベルト穴で調整できるので、成長に合わせて長く使えます。
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm font-bold text-blue-900 mb-2">👍 難易度：★☆☆☆☆</p>
                      <p className="text-sm text-gray-700">
                        ベルトを通すだけ！ベルトループ付きパンツ限定。
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">3️⃣</div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-3">ウエストゴム交換</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      ウエストゴムを抜いて、細めのゴムに交換する方法。ゴム通しがあれば簡単にできます。
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm font-bold text-blue-900 mb-2">👍 難易度：★★☆☆☆</p>
                      <p className="text-sm text-gray-700">
                        100均でゴムとゴム通しを購入。10分で完成！
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">4️⃣</div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-3">安全ピンで仮留め</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      ウエストの内側を安全ピンで留めて、サイズを小さくする方法。一時的な対処に最適。
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm font-bold text-blue-900 mb-2">👍 難易度：★☆☆☆☆</p>
                      <p className="text-sm text-gray-700">
                        安全ピンで留めるだけ。30秒で完成！ただし洗濯時は外す必要あり。
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="section-title">おすすめ便利グッズ</h2>

            <Dialogue speaker="expert">
              ウエスト調整に便利なグッズもご紹介しますね。どれも100均やAmazonで買えますよ。
            </Dialogue>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-3">ウエスト調整ボタン</h3>
                <p className="text-sm text-gray-700 mb-2">価格: 100円〜</p>
                <p className="text-gray-700">
                  パンツの内側に取り付けるだけで、ウエストを数段階調整可能。100均で購入できます。
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-3">キッズベルト</h3>
                <p className="text-sm text-gray-700 mb-2">価格: 500円〜</p>
                <p className="text-gray-700">
                  ベルトループ付きパンツなら、ベルトでウエストを調整。成長に合わせて長く使えます。
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-3">ゴム通し</h3>
                <p className="text-sm text-gray-700 mb-2">価格: 100円〜</p>
                <p className="text-gray-700">
                  ウエストゴムを交換する時に必須。100均で購入可能。使い方も簡単です。
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-3">平ゴム（細め）</h3>
                <p className="text-sm text-gray-700 mb-2">価格: 100円〜</p>
                <p className="text-gray-700">
                  ウエストゴム交換用。1cm幅の細めゴムがおすすめ。100均で購入可能。
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="section-title">まとめ</h2>
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-card p-8">
              <p className="text-lg leading-relaxed">
                ウエストが大きすぎるズボンは、<strong>裁縫不要</strong>の簡単テクニックで調整可能！ボタン、ベルト、ゴム交換、安全ピンなど、お好みの方法で試してみてくださいね。
              </p>
            </div>
          </section>

          <section className="bg-gradient-to-r from-primary to-accent rounded-card p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">🎯 「最初からぴったりサイズを選びたい！」</h2>
            <p className="text-xl mb-8">
              10問の簡単な質問に答えるだけで、<br />お子さんの体型に合ったおすすめブランドがわかります
            </p>
            <Button href="/diagnosis-redirect" variant="secondary" className="!bg-white !text-primary !border-white hover:!bg-gray-50 !text-lg !px-12 !py-4">
              無料で診断を始める →
            </Button>
            <p className="text-sm mt-4 opacity-90">※ 2万人以上のママが利用中！</p>
          </section>
        </article>
      </Container>
    </div>
  );
}
