import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Dialogue from '@/components/Dialogue';

export const metadata: Metadata = {
  title: '太もも太めの3歳児におすすめ！ゆったりパンツ厳選7選【2026年版】',
  description: '3歳児の「太もも太い」悩みを解決！むっちり脚でも快適に履けるゆったりパンツ7選と、体型に合ったサイズ選びのコツを紹介します。',
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
            <span className="text-gray-900">太もも太めの3歳児におすすめ</span>
          </nav>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              太もも太めの3歳児におすすめ！<br />
              ゆったりパンツ厳選7選
            </h1>
            <div className="text-sm text-gray-500 mb-6">公開日：2026年2月9日</div>
          </div>

          <div className="bg-pink-50 border-l-4 border-primary p-6 mb-12 rounded-r-lg">
            <p className="text-lg leading-relaxed mb-4">
              「うちの子、太ももがむっちりしてて...ズボンがパツパツ」<br />
              「サイズ表通りなのに、太ももで引っかかって履けない」
            </p>
            <p className="text-lg leading-relaxed">
              そんな悩みを持つママは多いですよね。3歳はまだぷっくり体型の子も多く、太ももが太めだとズボン選びに苦労します。
            </p>
          </div>

          <section className="mb-12">
            <h2 className="section-title">ママのお悩み相談</h2>

            <Dialogue speaker="mom">
              うちの子3歳なんだけど、太ももがぷっくりしててズボンが入らないの。無理やり履かせると苦しそうで...
            </Dialogue>

            <Dialogue speaker="expert">
              わかります！3歳児はまだベビー体型が残っていて、太ももがむっちりしている子も多いんです。細身のスキニータイプは避けて、<strong>ゆったりシルエットのパンツ</strong>を選ぶのがポイントですよ。
            </Dialogue>

            <Dialogue speaker="mom">
              ゆったりだと、今度はウエストがブカブカになっちゃわない？
            </Dialogue>

            <Dialogue speaker="expert">
              そこが悩みどころですよね。おすすめは、<strong>太ももにゆとりがあって、ウエストは調整できるタイプ</strong>。最近は太もも周りにゆとりを持たせたデザインが増えているんですよ。
            </Dialogue>
          </section>

          <section className="mb-12">
            <h2 className="section-title">太もも太め体型のパンツ選びポイント</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="text-3xl mb-3">✅</div>
                <h3 className="text-xl font-bold mb-3">ワイドシルエット</h3>
                <p className="text-gray-700 leading-relaxed">
                  太もも周りにゆとりがあるワイドパンツやバギーパンツなら、締め付け感なく快適。動きやすさも抜群です。
                </p>
              </Card>

              <Card className="p-6">
                <div className="text-3xl mb-3">✅</div>
                <h3 className="text-xl font-bold mb-3">ストレッチ素材</h3>
                <p className="text-gray-700 leading-relaxed">
                  伸縮性のある素材なら、太ももにフィットしつつも締め付けません。綿+ポリウレタン混紡がおすすめ。
                </p>
              </Card>

              <Card className="p-6">
                <div className="text-3xl mb-3">✅</div>
                <h3 className="text-xl font-bold mb-3">テーパードデザイン</h3>
                <p className="text-gray-700 leading-relaxed">
                  太もも周りはゆったり、裾に向かって細くなるテーパードなら、すっきり見えて動きやすいです。
                </p>
              </Card>

              <Card className="p-6">
                <div className="text-3xl mb-3">✅</div>
                <h3 className="text-xl font-bold mb-3">ウエスト調整機能</h3>
                <p className="text-gray-700 leading-relaxed">
                  太もも周りでサイズを選ぶと、ウエストがゆるくなりがち。調整機能付きなら安心です。
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="section-title">太もも太めでもOK！おすすめパンツ7選</h2>

            <Dialogue speaker="expert">
              太もも周りにゆとりがあって、動きやすいパンツを7つご紹介しますね。
            </Dialogue>

            <div className="space-y-6 mt-8">
              <Card className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-primary">1. ユニクロ「レギュラーフィットパンツ」</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  太もも周りにゆとりがあるレギュラーフィット。ストレッチ素材で動きやすく、ウエスト調整機能付き。カラバリ豊富で普段使いに最適。価格は990円〜。
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-primary">2. GAP「ワイドレッグパンツ」</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  太ももから裾まで余裕のあるワイドシルエット。おしゃれで動きやすく、外遊びにもお出かけにも◎。価格は2,990円〜。
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-primary">3. 西松屋「ストレッチデニム（ゆったり）」</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  プチプラなのに太もも周りにゆとりあり。ストレッチデニムで動きやすく、保育園用に何枚も買えるコスパ◎。価格は799円〜。
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-primary">4. 無印良品「リラックスフィットパンツ」</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  ゆったりシルエットで締め付け感ゼロ。オーガニックコットン使用で肌にも優しい。シンプルで合わせやすいデザイン。価格は1,990円〜。
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-primary">5. devirock「テーパードパンツ」</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  太もも周りはゆったり、裾はすっきりのテーパードデザイン。ストレッチ素材で動きやすく、カラバリ豊富。価格は1,280円〜。
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-primary">6. プティマイン「バルーンパンツ」</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  太もも周りがぷっくりしたバルーンシルエット。可愛いデザインでお出かけにも◎。ウエストゴムで脱ぎ履きも楽々。価格は2,490円〜。
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-primary">7. ベルメゾン「ゆったりストレッチパンツ」</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  太もも太めの子のために設計されたゆったりシルエット。ストレッチ抜群で動きやすく、ウエスト調整機能付き。価格は1,490円〜。
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="section-title">まとめ</h2>
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-card p-8">
              <p className="text-lg leading-relaxed mb-4">
                太もも太めの3歳児には、<strong>ワイドシルエット</strong>や<strong>ストレッチ素材</strong>のパンツがおすすめ。スキニータイプは避けて、ゆとりのあるデザインを選びましょう。
              </p>
              <p className="text-lg leading-relaxed">
                今回ご紹介した7つのブランドは、どれも太もも周りにゆとりがあって動きやすいと評判です。ぜひお子さんに合った一本を見つけてくださいね！
              </p>
            </div>
          </section>

          <section className="bg-gradient-to-r from-primary to-accent rounded-card p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">🎯 「うちの子に合うブランドが知りたい！」</h2>
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
