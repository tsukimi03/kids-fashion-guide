import Link from 'next/link';

export default function CTABox() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 text-white my-12 shadow-2xl">
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-4">
          🎯 あなたのお子さんにぴったりなズボン、2分で診断！
        </h3>
        <p className="text-xl mb-6 opacity-95">
          10問の簡単な質問に答えるだけで、体型に合ったおすすめブランドがわかります。
        </p>
        <Link
          href="/diagnosis-redirect"
          className="inline-block bg-white text-blue-600 px-10 py-4 rounded-full text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all"
        >
          無料で診断を始める →
        </Link>
        <p className="text-sm mt-4 opacity-90">
          ※ 2万人以上のママが利用中！完全無料
        </p>
      </div>
    </div>
  );
}
