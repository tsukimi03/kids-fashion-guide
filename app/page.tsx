import Link from 'next/link';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Container className="py-12">
        {/* Hero Section */}
        <section className="text-center mb-16 py-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            子供のパンツが合わない！<br className="md:hidden" />はもう終わり
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            パンツ選び、離乳食、教育まで。<br />
            子育て中のママ・パパを応援する情報サイト
          </p>
          <Button href="/diagnosis-redirect" variant="primary">
            🎯 2分で診断！体型に合ったパンツを探す
          </Button>
        </section>

        {/* 人気記事 */}
        <section className="mb-16">
          <h3 className="section-title">人気記事</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {/* 記事カード1 */}
            <Link href="/articles/2-years-pants-guide">
              <Card className="p-6 h-full">
                <h4 className="text-xl font-bold mb-3">
                  2歳のズボン選び方｜サイズ・体型別おすすめ
                </h4>
                <p className="text-gray-600 mb-4">
                  2歳児の平均サイズ、体型別のポイント、おすすめブランド5選を徹底解説。
                </p>
                <span className="link">続きを読む →</span>
              </Card>
            </Link>

            {/* 記事カード2 */}
            <Link href="/articles/brand-comparison">
              <Card className="p-6 h-full">
                <h4 className="text-xl font-bold mb-3">
                  ユニクロ vs GAP vs 西松屋｜キッズパンツ徹底比較
                </h4>
                <p className="text-gray-600 mb-4">
                  人気ブランド3社のサイズ感、価格、品質を実際に購入して比較しました。
                </p>
                <span className="link">続きを読む →</span>
              </Card>
            </Link>

            {/* 記事カード3 */}
            <Link href="/articles/chubby-pants-recommendation">
              <Card className="p-6 h-full">
                <h4 className="text-xl font-bold mb-3">
                  むっちり脚の子におすすめ！ゆったりズボン5選
                </h4>
                <p className="text-gray-600 mb-4">
                  太めの脚でもゆったり履けるズボンを厳選。ママたちの口コミも紹介。
                </p>
                <span className="link">続きを読む →</span>
              </Card>
            </Link>
          </div>
        </section>

        {/* CTAセクション */}
        <section className="bg-gradient-to-r from-primary to-accent rounded-card p-12 text-white text-center mb-16">
          <h3 className="text-3xl font-bold mb-4">
            🎯 あなたのお子さんにぴったりなズボン、2分で診断！
          </h3>
          <p className="text-xl mb-8">
            10問の簡単な質問に答えるだけで、体型に合ったおすすめブランドがわかります。
          </p>
          <Button href="/diagnosis-redirect" variant="secondary" className="!bg-white !text-primary !border-white hover:!bg-gray-50">
            無料で診断を始める →
          </Button>
          <p className="text-sm mt-4 opacity-90">
            ※ 2万人以上のママが利用中！
          </p>
        </section>

        {/* カテゴリー */}
        <section>
          <h3 className="section-title">カテゴリーから探す</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/categories/pants">
              <Card className="p-8 text-center bg-gradient-to-br from-pink-50 to-pink-100">
                <div className="text-5xl mb-3">👖</div>
                <p className="text-xl font-bold mb-2">パンツ</p>
                <p className="text-sm text-gray-600">サイズ選び・体型別おすすめ</p>
              </Card>
            </Link>
            <Link href="/categories/baby-food">
              <Card className="p-8 text-center bg-gradient-to-br from-orange-50 to-orange-100">
                <div className="text-5xl mb-3">🍼</div>
                <p className="text-xl font-bold mb-2">離乳食</p>
                <p className="text-sm text-gray-600">月齢別・レシピ・進め方</p>
              </Card>
            </Link>
            <Link href="/categories/education">
              <Card className="p-8 text-center bg-gradient-to-br from-blue-50 to-blue-100">
                <div className="text-5xl mb-3">📚</div>
                <p className="text-xl font-bold mb-2">教育</p>
                <p className="text-sm text-gray-600">知育・習い事・子育てのコツ</p>
              </Card>
            </Link>
          </div>
        </section>
      </Container>
    </div>
  );
}
