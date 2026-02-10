import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Dialogue from '@/components/Dialogue';

export const metadata: Metadata = {
  title: '2歳のお腹ぽっこりでもピッタリ！ウエスト調整できるズボン5選【2026年版】',
  description: '2歳児の「お腹ぽっこり」でズボンがきつい悩みを解決！ウエスト調整機能付きのおすすめズボン5選と、体型に合ったサイズ選びのコツを紹介します。',
};

export default function Article() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Container className="py-12">
        <article>
          {/* パンくずリスト */}
          <nav className="text-sm text-gray-600 mb-8">
            <a href="/" className="link">ホーム</a>
            <span className="mx-2">›</span>
            <a href="/categories/pants" className="link">パンツ</a>
            <span className="mx-2">›</span>
            <span className="text-gray-900">2歳のお腹ぽっこりでもピッタリ</span>
          </nav>

          {/* タイトル */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              2歳のお腹ぽっこりでもピッタリ！<br />
              ウエスト調整できるズボン5選
            </h1>
            <div className="text-sm text-gray-500 mb-6">
              公開日：2026年2月9日
            </div>
          </div>

          {/* 導入 */}
          <div className="bg-pink-50 border-l-4 border-primary p-6 mb-12 rounded-r-lg">
            <p className="text-lg leading-relaxed mb-4">
              「2歳になったのに、ズボンのウエストがパツパツ...」<br />
              「お腹がぽっこり出てて、ボタンが留まらない...」
            </p>
            <p className="text-lg leading-relaxed">
              そんな悩みを持つママ・パパは多いのではないでしょうか？<br />
              2歳児は幼児体型でお腹がぽっこり出ているのが普通。でも、ズボン選びに苦労しますよね。
            </p>
          </div>

          {/* 会話セクション1 */}
          <section className="mb-12">
            <h2 className="section-title">ママのお悩み相談</h2>

            <Dialogue speaker="mom">
              うちの子、2歳になったんだけど、お腹がぽっこり出てて...。サイズ表通りに90cmのズボンを買ったら、ウエストがきつくて苦しそうなの。
            </Dialogue>

            <Dialogue speaker="expert">
              わかります！2〜3歳頃は腹筋が未発達で、幼児体型特有の「お腹ぽっこり」が目立つ時期なんです。身長は90cmでも、お腹周りは個人差が大きいんですよ。
            </Dialogue>

            <Dialogue speaker="mom">
              そうなんだ...。じゃあ、ワンサイズ上の100cmを買えばいいのかな？
            </Dialogue>

            <Dialogue speaker="expert">
              ちょっと待ってください！100cmだと丈が長すぎて、今度は裾を引きずってしまいます。おすすめは、<strong>ウエスト調整機能がついているズボン</strong>を選ぶこと。これなら、お腹周りに余裕を持たせつつ、丈はぴったりに調整できますよ。
            </Dialogue>
          </section>

          {/* ポイント解説 */}
          <section className="mb-12">
            <h2 className="section-title">お腹ぽっこり体型のズボン選びポイント</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="text-3xl mb-3">✅</div>
                <h3 className="text-xl font-bold mb-3">ウエスト調整機能</h3>
                <p className="text-gray-700 leading-relaxed">
                  内側のボタンやゴムでウエストを調整できるタイプがおすすめ。お腹周りに余裕を持たせつつ、脱げないようにフィット調整できます。
                </p>
              </Card>

              <Card className="p-6">
                <div className="text-3xl mb-3">✅</div>
                <h3 className="text-xl font-bold mb-3">ストレッチ素材</h3>
                <p className="text-gray-700 leading-relaxed">
                  伸縮性のある素材なら、お腹が出ていても締め付け感が少なく快適。綿+ポリウレタンの混紡素材がおすすめです。
                </p>
              </Card>

              <Card className="p-6">
                <div className="text-3xl mb-3">✅</div>
                <h3 className="text-xl font-bold mb-3">ウエストゴム幅広</h3>
                <p className="text-gray-700 leading-relaxed">
                  細いゴムだと食い込みやすいですが、幅広ゴムなら圧力が分散されて痕がつきにくく、お腹にも優しいです。
                </p>
              </Card>

              <Card className="p-6">
                <div className="text-3xl mb-3">✅</div>
                <h3 className="text-xl font-bold mb-3">ハイウエストデザイン</h3>
                <p className="text-gray-700 leading-relaxed">
                  お腹全体を包み込むハイウエストタイプなら、ぽっこりお腹を自然にカバーできて、動いてもずり落ちません。
                </p>
              </Card>
            </div>
          </section>

          {/* おすすめズボン5選 */}
          <section className="mb-12">
            <h2 className="section-title">お腹ぽっこりでもOK！おすすめズボン5選</h2>

            <Dialogue speaker="expert">
              それでは、ウエスト調整がしやすく、お腹ぽっこり体型の2歳児におすすめのズボンを5つご紹介しますね。
            </Dialogue>

            <div className="space-y-6 mt-8">
              {/* 商品1 */}
              <Card className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-primary">1. ユニクロ「ストレッチパンツ（ウエスト調整機能付き）」</h3>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <span className="text-sm text-gray-600">価格</span>
                    <p className="font-bold">990円〜</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">サイズ展開</span>
                    <p className="font-bold">80〜110cm</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">調整機能</span>
                    <p className="font-bold">内側ボタン</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  内側のボタンでウエストを3段階調整可能。ストレッチ素材で動きやすく、洗濯にも強いコスパ最強の定番アイテム。カラーバリエーションも豊富です。
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm font-bold text-blue-900 mb-2">👍 ママの口コミ</p>
                  <p className="text-sm text-gray-700">
                    「お腹周りに余裕があって、ボタンで調整できるから長く使えます！」（30代ママ）
                  </p>
                </div>
              </Card>

              {/* 商品2 */}
              <Card className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-primary">2. 西松屋「ウエストゴム調整パンツ」</h3>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <span className="text-sm text-gray-600">価格</span>
                    <p className="font-bold">599円〜</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">サイズ展開</span>
                    <p className="font-bold">80〜120cm</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">調整機能</span>
                    <p className="font-bold">ゴム通し穴</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  プチプラなのに品質◎。ウエストゴムの長さを自分で調整できるタイプなので、お腹周りに合わせて最適なフィット感に。デイリー使いにおすすめ。
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm font-bold text-blue-900 mb-2">👍 ママの口コミ</p>
                  <p className="text-sm text-gray-700">
                    「安いから汚れても気にならない！保育園用に何枚も買いました」（20代ママ）
                  </p>
                </div>
              </Card>

              {/* 商品3 */}
              <Card className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-primary">3. GAP「トドラー イージーパンツ」</h3>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <span className="text-sm text-gray-600">価格</span>
                    <p className="font-bold">2,990円〜</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">サイズ展開</span>
                    <p className="font-bold">2T〜5T</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">調整機能</span>
                    <p className="font-bold">ウエストゴム＋紐</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  おしゃれなデザインと機能性を兼ね備えたGAPのイージーパンツ。ウエストゴム＋紐で調整できるので、お腹ぽっこりでも快適。カジュアルなお出かけにも◎
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm font-bold text-blue-900 mb-2">👍 ママの口コミ</p>
                  <p className="text-sm text-gray-700">
                    「デザインが可愛くて、お出かけ用に愛用してます！」（30代ママ）
                  </p>
                </div>
              </Card>

              {/* 商品4 */}
              <Card className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-primary">4. 無印良品「ストレッチデニムパンツ（キッズ）」</h3>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <span className="text-sm text-gray-600">価格</span>
                    <p className="font-bold">1,990円〜</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">サイズ展開</span>
                    <p className="font-bold">80〜110cm</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">調整機能</span>
                    <p className="font-bold">ゴム＋ボタン</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  シンプルで飽きのこないデザイン。ストレッチデニムで動きやすく、ウエストはゴム＋ボタンのダブル調整。オーガニックコットン使用で肌にも優しい。
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm font-bold text-blue-900 mb-2">👍 ママの口コミ</p>
                  <p className="text-sm text-gray-700">
                    「シンプルで合わせやすい！肌触りも良くて子供が嫌がりません」（40代ママ）
                  </p>
                </div>
              </Card>

              {/* 商品5 */}
              <Card className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-primary">5. ベルメゾン「あったか裏起毛パンツ（ウエスト調整ゴム付き）」</h3>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <span className="text-sm text-gray-600">価格</span>
                    <p className="font-bold">1,490円〜</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">サイズ展開</span>
                    <p className="font-bold">80〜130cm</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">調整機能</span>
                    <p className="font-bold">ウエストゴム調整</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  冬に嬉しい裏起毛タイプ。ウエストゴムを調整できるので、お腹周りにゆとりを持たせつつ脱げにくい。あったかくて外遊びにも最適です。
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm font-bold text-blue-900 mb-2">👍 ママの口コミ</p>
                  <p className="text-sm text-gray-700">
                    「冬は毎日これ！暖かいしウエスト調整できるから長く使えます」（30代ママ）
                  </p>
                </div>
              </Card>
            </div>
          </section>

          {/* サイズ選びのコツ */}
          <section className="mb-12">
            <h2 className="section-title">お腹ぽっこり体型のサイズ選びコツ</h2>

            <Dialogue speaker="mom">
              ウエスト調整機能があれば安心だけど、サイズ選びで注意することってある？
            </Dialogue>

            <Dialogue speaker="expert">
              いい質問ですね！お腹ぽっこり体型の場合、以下の3つをチェックしてください。
            </Dialogue>

            <div className="bg-white border-l-4 border-blue-400 rounded-r-lg p-6 mb-6">
              <h3 className="text-xl font-bold mb-4">✅ サイズ選びの3つのチェックポイント</h3>
              <ol className="space-y-4 list-decimal list-inside">
                <li className="text-gray-800">
                  <strong>ウエスト周りの実寸を測る</strong><br />
                  <span className="text-sm text-gray-600">
                    お腹が一番出ている部分をメジャーで測定。サイズ表の「ウエスト」と照らし合わせましょう。
                  </span>
                </li>
                <li className="text-gray-800">
                  <strong>股下の長さを確認</strong><br />
                  <span className="text-sm text-gray-600">
                    丈が長すぎると転倒の原因に。股下の実寸を測って、サイズ表と比較を。
                  </span>
                </li>
                <li className="text-gray-800">
                  <strong>試着時はお腹を触って確認</strong><br />
                  <span className="text-sm text-gray-600">
                    履いた状態でお腹を触り、ゴムが食い込んでいないか、苦しそうじゃないかを確認しましょう。
                  </span>
                </li>
              </ol>
            </div>

            <Dialogue speaker="expert">
              あと、オンラインで買う場合は、「ウエスト調整機能付き」「ストレッチ素材」と明記されているものを選ぶと失敗が少ないですよ。
            </Dialogue>
          </section>

          {/* まとめ */}
          <section className="mb-12">
            <h2 className="section-title">まとめ</h2>
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-card p-8">
              <p className="text-lg leading-relaxed mb-4">
                2歳児の「お腹ぽっこり」は成長の証。無理にきついズボンを履かせず、<strong>ウエスト調整機能付き</strong>や<strong>ストレッチ素材</strong>のズボンを選んであげましょう。
              </p>
              <p className="text-lg leading-relaxed">
                今回ご紹介した5つのブランドは、どれもお腹周りに余裕があって動きやすいと評判です。ぜひお子さんの体型に合った一本を見つけてくださいね！
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-r from-primary to-accent rounded-card p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              🎯 「うちの子に合うサイズが知りたい！」
            </h2>
            <p className="text-xl mb-8">
              10問の簡単な質問に答えるだけで、<br />
              お子さんの体型に合ったおすすめブランドがわかります
            </p>
            <Button
              href="/diagnosis-redirect"
              variant="secondary"
              className="!bg-white !text-primary !border-white hover:!bg-gray-50 !text-lg !px-12 !py-4"
            >
              無料で診断を始める →
            </Button>
            <p className="text-sm mt-4 opacity-90">
              ※ 2万人以上のママが利用中！
            </p>
          </section>
        </article>
      </Container>
    </div>
  );
}
