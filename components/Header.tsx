'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b shadow-sm z-50 h-[60px]">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* ロゴ */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <span className="text-2xl">👶</span>
          <div>
            <h1 className="text-lg md:text-xl font-bold text-gray-900 leading-tight">
              子供のパンツが合わない！はもう終わり
            </h1>
          </div>
        </Link>

        {/* デスクトップナビゲーション */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/categories/pants"
            className="text-gray-700 hover:text-[#e17e96] font-medium transition-colors"
          >
            パンツ
          </Link>
          <Link
            href="/categories/baby-food"
            className="text-gray-700 hover:text-[#e17e96] font-medium transition-colors"
          >
            離乳食
          </Link>
          <Link
            href="/categories/education"
            className="text-gray-700 hover:text-[#e17e96] font-medium transition-colors"
          >
            教育
          </Link>
          <Link
            href="/diagnosis-redirect"
            className="bg-[#e17e96] text-white px-4 py-2 rounded-full hover:bg-[#c96d82] transition-colors text-sm font-bold"
          >
            🎯 診断する
          </Link>
        </nav>

        {/* モバイルハンバーガーメニュー */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="メニュー"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* モバイルメニュー */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              href="/categories/pants"
              className="text-gray-700 hover:text-[#e17e96] font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              パンツ
            </Link>
            <Link
              href="/categories/baby-food"
              className="text-gray-700 hover:text-[#e17e96] font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              離乳食
            </Link>
            <Link
              href="/categories/education"
              className="text-gray-700 hover:text-[#e17e96] font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              教育
            </Link>
            <Link
              href="/diagnosis-redirect"
              className="bg-[#e17e96] text-white px-4 py-3 rounded-full text-center hover:bg-[#c96d82] transition-colors font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              🎯 診断する
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
