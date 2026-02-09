'use client';

import { useEffect } from 'react';

export default function DiagnosisRedirect() {
  useEffect(() => {
    // 3秒後にキッズパンツ診断にリダイレクト
    const timer = setTimeout(() => {
      window.location.href = 'http://localhost:3000/quiz';
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="max-w-2xl mx-auto">
        <div className="text-6xl mb-8 animate-bounce">🎯</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          診断ツールに移動します...
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          あなたのお子さんにぴったりなズボンを診断します。
          <br />
          3秒後に自動的に移動します。
        </p>
        <div className="bg-blue-50 rounded-xl p-6 mb-8">
          <p className="text-gray-700">
            ✅ 10問・2分で完了
            <br />
            ✅ 体型に合ったブランドを提案
            <br />
            ✅ 完全無料
          </p>
        </div>
        <a
          href="http://localhost:3000/quiz"
          className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition-colors"
        >
          今すぐ診断する →
        </a>
      </div>
    </div>
  );
}
