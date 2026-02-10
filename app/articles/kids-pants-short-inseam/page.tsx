import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Dialogue from '@/components/Dialogue';

export const metadata: Metadata = {
  title: '股下が短い子向け！裾上げ不要のキッズパンツブランド5選【2026年版】',
  description: '股下が短い子でもぴったり！裾上げ不要で履けるキッズパンツブランド5選と、股下の測り方・サイズ選びのコツを紹介します。',
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
            <span className="text-gray-900">股下が短い子向けパンツ</span>
          </nav>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              股下が短い子向け！<br />裾上げ不要のキッズパンツブランド5選
            </h1>
            <div className="text-sm text-gray-500 mb-6">公開日：2026年2月9日</div>
          </div>

          <div className="bg-pink-50 border-l-4 border-primary p-6 mb-12 rounded-r-lg">
            <p className="text-lg leading-relaxed mb-4">
              「身長は平均なのに、ズボンの丈が長すぎて裾を引きずる...」<br />
              「毎回裾上げするのが面倒...」
            </p>
            <p className="text-lg leading-relaxed">
              股下が短い子は、サイズ表通りに買っても丈が長すぎることが多いですよね。でも、裾上げ不要で履けるブランドがあるんです！
            </p>
          </div>

          <section className="mb-12">
            <h2 className="section-title">ママのお悩み相談</h2>

            <Dialogue speaker="mom">
              うちの子、身長は100cmあるんだけど、脚が短めで...。100cmのズボンを買うと、いつも裾を引きずっちゃうの。
            </Dialogue>

            <Dialogue speaker="expert">
              あるあるですね！身長と股下の比率は個人差が大きいんです。股下が短めの子には、<strong>股下丈が短めに設計されたブランド</strong>や、<strong>7分丈・8分丈</strong>がおすすめですよ。
            </Dialogue>

            <Dialogue speaker="mom">
              7分丈だと、冬は寒くない？
            </Dialogue>

            <Dialogue speaker="expert">
              確かに！でも最近は<strong>股下短め設計の長ズボン</strong>も増えているんです。ブランドによって股下の長さが違うので、選び方次第でぴったりサイズが見つかりますよ。
            </Dialogue>
          </section>

          <section className="mb-12">
            <h2 className="section-title">股下が短い子のパンツ選びポイント</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="text-3xl mb-3">✅</div>
                <h3 className="text-xl font-bold mb-3">股下丈を必ずチェック</h3>
                <p className="text-gray-700 leading-relaxed">
                  サイズ表の「股下」を確認。同じ100cmでも、ブランドによって股下は5cm以上違うことも。
                </p>
              </Card>

              <Card className="p-6">
                <div className="text-3xl mb-3">✅</div>
                <h3 className="text-xl font-bold mb-3">7分丈・8分丈を活用</h3>
                <p className="text-gray-700 leading-relaxed">
                  長ズボンが長すぎるなら、7分丈・8分丈をチョイス。春夏秋は快適に履けます。
                </p>
              </Card>

              <Card className="p-6">
                <div className="text-3xl mb-3">✅</div>
                <h3 className="text-xl font-bold mb-3">裾上げテープを常備</h3>
                <p className="text-gray-700 leading-relaxed">
                  アイロンで簡単に裾上げできるテープを常備しておくと、長すぎた時も安心です。
                </p>
              </Card>

              <Card className="p-6">
                <div className="text-3xl mb-3">✅</div>
                <h3 className="text-xl font-bold mb-3">ロールアップスタイル</h3>
                <p className="text-gray-700 leading-relaxed">
                  少し長めなら、裾をロールアップ。おしゃれに見えて、成長に合わせて下ろせます。
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="section-title">股下短めOK！おすすめブランド5選</h2>

            <div className="space-y-6 mt-8">
              <Card className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-primary">1. 西松屋「股下短め設計パンツ」</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  西松屋のパンツは他ブランドより股下が2〜3cm短め設計。脚が短めの子にぴったりで、裾上げ不要。プチプラで洗い替えも買いやすい。価格は599円〜。
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-primary">2. ユニクロ「7分丈レギンス」</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  長ズボンが長すぎるなら、7分丈レギンスが最適。春夏秋に活躍し、ストレッチ素材で動きやすい。カラバリ豊富。価格は790円〜。
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-primary">3. しまむら「股下調整パンツ」</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  裾にボタンが付いていて、股下を2段階調整できる画期的デザイン。成長に合わせて長く使える。プチプラで試しやすい。価格は980円〜。
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-primary">4. devirock「ショート丈パンツ」</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  股下が他ブランドより3cm短い設計。脚が短めの子に最適で、裾を引きずる心配なし。ストレッチ素材で動きやすい。価格は1,280円〜。
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-primary">5. 無印良品「8分丈パンツ」</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  長ズボンより少し短い8分丈。股下が短い子にぴったりで、オールシーズン使える。シンプルで合わせやすいデザイン。価格は1,490円〜。
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="section-title">股下の測り方</h2>
            <div className="bg-white border-l-4 border-blue-400 rounded-r-lg p-6">
              <ol className="space-y-3 list-decimal list-inside">
                <li className="text-gray-800">股の付け根（内側）からくるぶしまでをメジャーで測定</li>
                <li className="text-gray-800">サイズ表の「股下」と比較</li>
                <li className="text-gray-800">実寸より2〜3cm長いサイズを選ぶ（靴下分の余裕）</li>
              </ol>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="section-title">まとめ</h2>
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-card p-8">
              <p className="text-lg leading-relaxed">
                股下が短い子には、<strong>股下短め設計のブランド</strong>や<strong>7分丈・8分丈</strong>がおすすめ。裾上げ不要で快適に履けるブランドを選びましょう！
              </p>
            </div>
          </section>

          <section className="bg-gradient-to-r from-primary to-accent rounded-card p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">🎯 「うちの子にぴったりなサイズが知りたい！」</h2>
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
