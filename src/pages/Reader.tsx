import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Reader: React.FC = () => {
  const [clickedWord, setClickedWord] = useState<string | null>(null);

  const words = [
    { id: 1, word: "Hljóðs", meaning: "hearing, attention" },
    { id: 2, word: "bið", meaning: "I ask" },
    { id: 3, word: "ek", meaning: "I" },
    { id: 4, word: "allar", meaning: "all" },
    { id: 5, word: "helgar", meaning: "holy" },
    { id: 6, word: "kindir", meaning: "races, families" },
    { id: 7, word: "meiri", meaning: "greater" },
    { id: 8, word: "ok", meaning: "and" },
    { id: 9, word: "minni", meaning: "lesser" },
    { id: 10, word: "mögu", meaning: "sons" },
    { id: 11, word: "Heimdalar", meaning: "of Heimdallr" }
  ];

  const handleWordClick = (word: string, meaning: string) => {
    setClickedWord(`${word}: ${meaning}`);
    setTimeout(() => setClickedWord(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="bg-gray-900 text-white py-4 sticky top-0 z-10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="text-xl hover:text-yellow-500 transition">
            ← Home
          </Link>
          <span className="text-sm text-gray-400">Völuspá • Stanza 1</span>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-3xl font-bold text-center mb-2">Völuspá</h1>
          <p className="text-center text-gray-500 italic mb-8">
            The Prophecy of the Seeress
          </p>
          
          <div className="text-lg leading-relaxed border-l-4 border-yellow-500 pl-4">
            {words.map((item) => (
              <span
                key={item.id}
                onClick={() => handleWordClick(item.word, item.meaning)}
                className="inline-block px-1 cursor-pointer 
                  hover:text-yellow-600 hover:scale-105 
                  transition-all duration-200"
                title="Click for definition"
              >
                {item.word}{' '}
              </span>
            ))}
          </div>

          <div className="mt-8 text-sm text-gray-500 text-center">
            Click any word to see its meaning
          </div>
        </div>
      </div>

      {/* Word Definition Popup */}
      {clickedWord && (
        <div className="fixed bottom-4 right-4 bg-gray-900 text-white px-6 py-4 rounded-lg shadow-2xl animate-bounce">
          <span className="text-yellow-500 font-bold">{clickedWord}</span>
        </div>
      )}

      {/* Mobile Hint */}
      <div className="fixed bottom-4 left-4 md:hidden">
        <div className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
          👆 Tap words
        </div>
      </div>
    </div>
  );
};

export default Reader;
