import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Dialogue from '@/components/Dialogue';

export const metadata: Metadata = {
  title: '細身の4歳児向け！ブカブカしないスリムパンツおすすめ6選【2026年版】',
  description: '細身・痩せ型の4歳児に最適！ウエストがブカブカしないスリムパンツ6選と、サイズ選びのコツを紹介します。',
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
            <span className="text-gray-900">細身の4歳児向けパンツ</span>
          </nav>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              細身の4歳児向け！<br />ブカブカしないスリムパンツおすすめ6選
            </h1>
            <div className="text-sm text-gray-500 mb-6">公開日：2026年2月9日</div>
          </div>

          <div className="bg-pink-50 border-l-4 border-primary p-6 mb-12 rounded-r-lg">
            <p className="text-lg leading-relaxed mb-4">
              「うちの子細身で、ズボンのウエストがブカブカ...」<br />
              「歩くとズボンがずり落ちてきて、何度も引き上げてる」
            </p>
            <p className="text-lg leading-relaxed">
              細身・痩せ型の4歳児には、普通のパンツだとウエストが大きすぎることが多いですよね。
            </p>
          </div>

          <section className="mb-12">
            <h2 className="section-title">ママのお悩み相談</h2>

            <Dialogue speaker="mom">
              うちの子4歳なんだけど、すごく細身で...。身長は110cmだからサイズ110を買うと、ウエストがブカブカで脱げちゃうの。
            </Dialogue>

            <Dialogue speaker="expert">
              細身の子あるあるですね！身長でサイズを選ぶと、ウエストが大きすぎることが多いんです。おすすめは<strong>スリムフィット</strong>や<strong>ウエスト調整機能付き</strong>のパンツですよ。
            </Dialogue>

            <Dialogue speaker="mom">
              スリムフィットって、きついんじゃない？
            </Dialogue>

            <Dialogue speaker="expert">
              大丈夫です！スリムフィットは「細身体型に合わせた設計」なので、細身の子にはジャストフィット。ストレッチ素材なら締め付け感もありませんよ。
            </Dialogue>
          </section>

          <section className="mb-12">
            <h2 className="section-title">細身体型のパンツ選びポイント</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="text-3xl mb-3">✅</div>
                <h3 className="text-xl font-bold mb-3">スリムフィット</h3>
                <p className="text-gray-700 leading-relaxed">
                  細身の子向けに設計されたスリムフィット。ウエストがブカブカせず、すっきり履けます。
                </p>
              </Card>

              <Card className="p-6">
                <div className="text-3xl mb-3">✅</div>
                <h3 className="text-xl font-bold mb-3">ウエスト調整機能</h3>
                <p className="text-gray-700 leading-relaxed">
                  内側のボタンやゴムで調整できるタイプなら、ウエストをぴったりに絞れます。
                </p>
              </Card>

              <Card className="p-6">
                <div className="text-3xl mb-3">✅</div>
                <h3 className="text-xl font-bold mb-3">レギンスタイプ</h3>
                <p className="text-gray-700 leading-relaxed">
                  レギンスなら伸縮性抜群で、細身の子でもフィット。動きやすくてずり落ちません。
                </p>
              </Card>

              <Card className="p-6">
                <div className="text-3xl mb-3">✅</div>
                <h3 className="text-xl font-bold mb-3">ベルト使用</h3>
                <p className="text-gray-700 leading-relaxed">
                  ベルトループ付きパンツ+キッズベルトで、ウエストをしっかり固定できます。
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="section-title">細身でもOK！おすすめパンツ6選</h2>

            <div className="space-y-6 mt-8">
              <Card className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-primary">1. ユニクロ「スリムフィットパンツ」</h3>
                <p className="text-gray-700 leading-relaxed">
                  細身の子にぴったりのスリムフィット。ウエスト調整機能付きで、さらにフィット感を調整可能。ストレッチ素材で動きやすい。価格は990円〜。
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-primary">2. GAP「スキニーデニム」</h3>
                <p className="text-gray-700 leading-relaxed">
                  細身体型向けのスキニーフィット。おしゃれなデザインで、お出かけにも◎。ウエストはしっかりフィット。価格は3,490円〜。
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-primary">3. 無印良品「ストレッチレギンス」</h3>
                <p className="text-gray-700 leading-relaxed">
                  細身の子に最適なレギンス。伸縮性抜群でフィット感◎。オーガニックコットンで肌に優しい。価格は790円〜。
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-primary">4. ZARA「スリムチノパンツ」</h3>
                <p className="text-gray-700 leading-relaxed">
                  おしゃれなスリムチノ。細身の子にジャストフィットで、ブカブカしません。カジュアルにもフォーマルにも使える。価格は2,990円〜。
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-primary">5. H&M「スキニーフィットパンツ」</h3>
                <p className="text-gray-700 leading-relaxed">
                  プチプラでおしゃれなスキニーフィット。細身の子向けで、ウエストもぴったり。カラバリ豊富。価格は1,299円〜。
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-primary">6. devirock「スリムストレッチパンツ」</h3>
                <p className="text-gray-700 leading-relaxed">
                  細身の子に最適なスリムデザイン。ストレッチ素材で動きやすく、ウエスト調整機能付き。コスパ◎。価格は1,280円〜。
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="section-title">まとめ</h2>
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-card p-8">
              <p className="text-lg leading-relaxed">
                細身の4歳児には、<strong>スリムフィット</strong>や<strong>ウエスト調整機能付き</strong>がおすすめ。ブカブカせず、すっきり履けるパンツを選びましょう！
              </p>
            </div>
          </section>

          <section className="bg-gradient-to-r from-primary to-accent rounded-card p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">🎯 「うちの子にぴったりなブランドが知りたい！」</h2>
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
