import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* サイト情報 */}
          <div>
            <h3 className="text-lg font-bold mb-4">子供のパンツが合わない！はもう終わり</h3>
            <p className="text-gray-400 text-sm">
              子育て中のママ・パパを応援する情報サイト
            </p>
          </div>

          {/* カテゴリー */}
          <div>
            <h4 className="text-md font-bold mb-4 text-[#F0BAB8]">カテゴリー</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/categories/pants" className="text-gray-400 hover:text-white transition-colors">
                  パンツ
                </Link>
              </li>
              <li>
                <Link href="/categories/baby-food" className="text-gray-400 hover:text-white transition-colors">
                  離乳食
                </Link>
              </li>
              <li>
                <Link href="/categories/education" className="text-gray-400 hover:text-white transition-colors">
                  教育
                </Link>
              </li>
            </ul>
          </div>

          {/* ツール */}
          <div>
            <h4 className="text-md font-bold mb-4 text-[#F0BAB8]">診断ツール</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/diagnosis-redirect" className="text-gray-400 hover:text-white transition-colors">
                  パンツ診断
                </Link>
              </li>
            </ul>
          </div>

          {/* その他 */}
          <div>
            <h4 className="text-md font-bold mb-4 text-[#F0BAB8]">その他</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  このサイトについて
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  プライバシーポリシー
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
          <p>&copy; 2026 子供のパンツが合わない！はもう終わり All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
