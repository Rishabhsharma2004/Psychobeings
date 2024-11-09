import React from 'react';

const QuoteMark = ({ className, flip = false }) => (
  <svg
    viewBox="0 0 40 40"
    className={className}
    width="45"
    height="45"
    style={{ transform: flip ? 'scale(-1, -1)' : 'none' }}
  >
    <path
      d="M12 8 C19 8 25 12 25 20 C25 28 19 32 12 32 C8 32 4 29 4 24 C4 19 8 16 12 16 C16 16 18 19 18 22"
      fill="currentColor"
      strokeLinecap="round"
    />
  </svg>
);

const TCard = ({ content }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 text-center transform transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer relative">
      {/* Top-left inverted quote */}
      <div className="absolute top-2 left-2 text-deep-mint">
        <QuoteMark flip />
      </div>
      {/* Bottom-right normal quote */}
      <div className="absolute bottom-2 right-2 text-deep-mint">
        <QuoteMark />
      </div>
      <p className="text-base sm:text-lg md:text-xl italic text-gray-800 leading-relaxed px-4 sm:px-8 mt-4">
        {content}
      </p>
    </div>
  );
};

export default TCard;
