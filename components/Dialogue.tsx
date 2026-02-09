import React from 'react';

type Speaker = 'mom' | 'expert';

interface DialogueProps {
  speaker: Speaker;
  children: React.ReactNode;
}

const MomIcon = () => (
  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-200 to-pink-300 flex items-center justify-center shadow-lg flex-shrink-0">
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      {/* 顔 */}
      <circle cx="32" cy="32" r="20" fill="#FFD4A3" />
      {/* 髪 */}
      <path d="M32 12 C20 12, 15 20, 15 28 L15 30 C15 30, 20 25, 32 25 C44 25, 49 30, 49 30 L49 28 C49 20, 44 12, 32 12 Z" fill="#8B4513" />
      {/* 目 */}
      <circle cx="26" cy="30" r="2" fill="#333" />
      <circle cx="38" cy="30" r="2" fill="#333" />
      {/* 笑顔 */}
      <path d="M24 36 Q32 40, 40 36" stroke="#FF6B9D" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* 頬の赤み */}
      <circle cx="22" cy="34" r="3" fill="#FFB6C1" opacity="0.5" />
      <circle cx="42" cy="34" r="3" fill="#FFB6C1" opacity="0.5" />
    </svg>
  </div>
);

const ExpertIcon = () => (
  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-200 to-blue-300 flex items-center justify-center shadow-lg flex-shrink-0">
    <svg viewBox="0 0 64 64" className="w-10 h-10">
      {/* 顔 */}
      <circle cx="32" cy="32" r="20" fill="#FFE4C4" />
      {/* 髪 */}
      <path d="M32 12 C22 12, 17 18, 17 26 L17 28 C17 28, 22 24, 32 24 C42 24, 47 28, 47 28 L47 26 C47 18, 42 12, 32 12 Z" fill="#4A4A4A" />
      {/* メガネ */}
      <g stroke="#555" strokeWidth="2" fill="none">
        <circle cx="26" cy="30" r="5" />
        <circle cx="38" cy="30" r="5" />
        <line x1="31" y1="30" x2="33" y2="30" />
      </g>
      {/* 目 */}
      <circle cx="26" cy="30" r="2" fill="#333" />
      <circle cx="38" cy="30" r="2" fill="#333" />
      {/* 笑顔 */}
      <path d="M26 38 Q32 42, 38 38" stroke="#333" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  </div>
);

export default function Dialogue({ speaker, children }: DialogueProps) {
  const isMom = speaker === 'mom';

  return (
    <div className={`flex gap-4 mb-6 ${isMom ? 'flex-row' : 'flex-row-reverse'}`}>
      {isMom ? <MomIcon /> : <ExpertIcon />}
      <div className={`flex-1 ${isMom ? 'mr-8' : 'ml-8'}`}>
        <div className={`inline-block px-6 py-4 rounded-2xl shadow-md ${
          isMom
            ? 'bg-gradient-to-br from-pink-50 to-pink-100 rounded-tl-none'
            : 'bg-gradient-to-br from-blue-50 to-blue-100 rounded-tr-none'
        }`}>
          <div className="flex items-center gap-2 mb-2">
            <span className={`text-sm font-bold ${
              isMom ? 'text-pink-700' : 'text-blue-700'
            }`}>
              {isMom ? 'ママ' : '専門家'}
            </span>
          </div>
          <div className="text-gray-800 leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
