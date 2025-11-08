import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy } from 'lucide-react';

const FONTS = {
  COMIC_SANS: '"Comic Sans MS", cursive',
  PAPYRUS: 'Papyrus, fantasy',
  TIMES_NEW_ROMAN: '"Times New Roman", serif',
  IMPACT: 'Impact, sans-serif',
  BRUSH_SCRIPT: '"Brush Script MT", cursive'
};

const COLORS = {
  YELLOW: '#FFFF00',
  CYAN: '#00FFFF',
  MAGENTA: '#FF00FF',
  LIME: '#00FF00',
  ORANGE: '#FFA500',
  PINK: '#FF69B4'
};

const radioConfigs = {
  radio1: {
    name: 'Shaky Rainbow Radio',
    className: 'w-8 h-8 shake border-8 border-black bg-gradient-to-br from-red-500 via-green-500 to-blue-500 checked:bg-gradient-to-br checked:from-yellow-400 checked:via-pink-500 checked:to-cyan-400 transform scale-150',
    reactCode: `<input
  type="radio"
  name="radio-group"
  className="w-8 h-8 shake border-8 border-black bg-gradient-to-br from-red-500 via-green-500 to-blue-500 checked:bg-gradient-to-br checked:from-yellow-400 checked:via-pink-500 checked:to-cyan-400 transform scale-150"
/>`,
    htmlCode: `<input
  type="radio"
  name="radio-group"
  class="w-8 h-8 shake border-8 border-black bg-gradient-to-br from-red-500 via-green-500 to-blue-500 checked:bg-gradient-to-br checked:from-yellow-400 checked:via-pink-500 checked:to-cyan-400 transform scale-150"
/>`,
    cssCode: `.radio-shaky-rainbow {
  width: 2rem;
  height: 2rem;
  border: 8px solid #000000;
  background: linear-gradient(135deg, #ef4444 0%, #22c55e 50%, #3b82f6 100%);
  animation: shake 0.3s infinite;
  transform: scale(1.5);
}

.radio-shaky-rainbow:checked {
  background: linear-gradient(135deg, #facc15 0%, #ec4899 50%, #22d3ee 100%);
}

@keyframes shake {
  0%, 100% { transform: scale(1.5) translateX(0); }
  25% { transform: scale(1.5) translateX(-8px) rotate(-10deg); }
  75% { transform: scale(1.5) translateX(8px) rotate(10deg); }
}`
  },

  radio2: {
    name: 'Spinning Neon Radio',
    className: 'w-10 h-10 border-4 border-green-400 bg-black checked:bg-purple-600 shadow-lg shadow-cyan-400 spin-slow checked:shadow-pink-400 checked:border-yellow-300',
    reactCode: `<input
  type="radio"
  name="radio-group"
  className="w-10 h-10 border-4 border-green-400 bg-black checked:bg-purple-600 shadow-lg shadow-cyan-400 spin-slow checked:shadow-pink-400 checked:border-yellow-300"
/>`,
    htmlCode: `<input
  type="radio"
  name="radio-group"
  class="w-10 h-10 border-4 border-green-400 bg-black checked:bg-purple-600 shadow-lg shadow-cyan-400 spin-slow checked:shadow-pink-400 checked:border-yellow-300"
/>`,
    cssCode: `.radio-spinning-neon {
  width: 2.5rem;
  height: 2.5rem;
  border: 4px solid #4ade80;
  background-color: #000000;
  box-shadow: 0 0 20px #22d3ee;
  animation: spin 2s linear infinite;
}

.radio-spinning-neon:checked {
  background-color: #9333ea;
  border-color: #fde047;
  box-shadow: 0 0 20px #ec4899;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}`
  },

  radio3: {
    name: 'Pulsing Glow Radio',
    className: 'w-12 h-12 border-0 bg-red-500 checked:bg-lime-400 pulse-fast shadow-xl shadow-red-500 checked:shadow-green-500 rounded-none transform skew-x-12',
    reactCode: `<input
  type="radio"
  name="radio-group"
  className="w-12 h-12 border-0 bg-red-500 checked:bg-lime-400 pulse-fast shadow-xl shadow-red-500 checked:shadow-green-500 rounded-none transform skew-x-12"
/>`,
    htmlCode: `<input
  type="radio"
  name="radio-group"
  class="w-12 h-12 border-0 bg-red-500 checked:bg-lime-400 pulse-fast shadow-xl shadow-red-500 checked:shadow-green-500 rounded-none transform skew-x-12"
/>`,
    cssCode: `.radio-pulsing-glow {
  width: 3rem;
  height: 3rem;
  border: none;
  background-color: #ef4444;
  box-shadow: 0 0 30px #ef4444;
  animation: pulse 0.5s infinite;
  border-radius: 0;
  transform: skewX(12deg);
}

.radio-pulsing-glow:checked {
  background-color: #84cc16;
  box-shadow: 0 0 30px #22c55e;
}

@keyframes pulse {
  0%, 100% { transform: skewX(12deg) scale(1); }
  50% { transform: skewX(12deg) scale(1.3); }
}`
  },

  radio4: {
    name: 'Bouncing Comic Radio',
    className: 'w-9 h-9 border-8 border-yellow-400 bg-blue-600 checked:bg-orange-500 bounce rounded-full border-dashed checked:border-double',
    reactCode: `<input
  type="radio"
  name="radio-group"
  className="w-9 h-9 border-8 border-yellow-400 bg-blue-600 checked:bg-orange-500 bounce rounded-full border-dashed checked:border-double"
/>`,
    htmlCode: `<input
  type="radio"
  name="radio-group"
  class="w-9 h-9 border-8 border-yellow-400 bg-blue-600 checked:bg-orange-500 bounce rounded-full border-dashed checked:border-double"
/>`,
    cssCode: `.radio-bouncing-comic {
  width: 2.25rem;
  height: 2.25rem;
  border: 8px dashed #facc15;
  background-color: #2563eb;
  border-radius: 50%;
  animation: bounce 0.8s infinite;
}

.radio-bouncing-comic:checked {
  background-color: #f97316;
  border-style: double;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}`
  },

  radio5: {
    name: 'Color Flip Radio',
    className: 'w-11 h-11 border-4 border-black bg-gradient-to-r from-purple-600 to-pink-600 checked:from-cyan-400 checked:to-yellow-300 colorflip-fast rounded-lg transform rotate-45',
    reactCode: `<input
  type="radio"
  name="radio-group"
  className="w-11 h-11 border-4 border-black bg-gradient-to-r from-purple-600 to-pink-600 checked:from-cyan-400 checked:to-yellow-300 colorflip-fast rounded-lg transform rotate-45"
/>`,
    htmlCode: `<input
  type="radio"
  name="radio-group"
  class="w-11 h-11 border-4 border-black bg-gradient-to-r from-purple-600 to-pink-600 checked:from-cyan-400 checked:to-yellow-300 colorflip-fast rounded-lg transform rotate-45"
/>`,
    cssCode: `.radio-color-flip {
  width: 2.75rem;
  height: 2.75rem;
  border: 4px solid #000000;
  background: linear-gradient(to right, #9333ea, #db2777);
  animation: colorflip 1s infinite;
  border-radius: 0.5rem;
  transform: rotate(45deg);
}

.radio-color-flip:checked {
  background: linear-gradient(to right, #22d3ee, #fde047);
}

@keyframes colorflip {
  0% { filter: hue-rotate(0deg); }
  100% { filter: hue-rotate(360deg); }
}`
  },

  radio6: {
    name: 'Wobbly 3D Radio',
    className: 'w-10 h-10 border-0 bg-green-500 checked:bg-red-500 wobble shadow-2xl checked:shadow-blue-500 border-b-4 border-r-4 border-black',
    reactCode: `<input
  type="radio"
  name="radio-group"
  className="w-10 h-10 border-0 bg-green-500 checked:bg-red-500 wobble shadow-2xl checked:shadow-blue-500 border-b-4 border-r-4 border-black"
/>`,
    htmlCode: `<input
  type="radio"
  name="radio-group"
  class="w-10 h-10 border-0 bg-green-500 checked:bg-red-500 wobble shadow-2xl checked:shadow-blue-500 border-b-4 border-r-4 border-black"
/>`,
    cssCode: `.radio-wobbly-3d {
  width: 2.5rem;
  height: 2.5rem;
  border: none;
  background-color: #22c55e;
  box-shadow: 
    0 0 25px #22c55e,
    inset -4px -4px 0 #000000;
  border-bottom: 4px solid #000000;
  border-right: 4px solid #000000;
  animation: wobble 0.6s infinite;
}

.radio-wobbly-3d:checked {
  background-color: #ef4444;
  box-shadow: 0 0 25px #3b82f6;
}

@keyframes wobble {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-5deg) scale(1.1); }
  75% { transform: rotate(5deg) scale(0.9); }
}`
  }
};

export function RadioSample() {
  const [selectedRadio, setSelectedRadio] = useState('radio1');
  const [viewMode, setViewMode] = useState('preview');
  const [codeLanguage, setCodeLanguage] = useState('react');
  const [styleType, setStyleType] = useState('tailwindcss');
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedCss, setCopiedCss] = useState(false);
  const [selectedValue, setSelectedValue] = useState('radio1');

  const config = radioConfigs[selectedRadio];

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'code') {
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    } else {
      setCopiedCss(true);
      setTimeout(() => setCopiedCss(false), 2000);
    }
  };

  const getCodeToDisplay = () => {
    if (styleType === 'tailwindcss') {
      return codeLanguage === 'react' ? config.reactCode : config.htmlCode;
    } else {
      return codeLanguage === 'react' 
        ? `<input\n  type="radio"\n  name="radio-group"\n  className="radio-custom"\n/>`
        : `<input\n  type="radio"\n  name="radio-group"\n  class="radio-custom"\n/>`;
    }
  };

  return (
    <div className="min-h-screen p-4 md:p-8" style={{ 
      background: 'linear-gradient(45deg, #FF00FF 0%, #00FFFF 25%, #FFFF00 50%, #FFA500 75%, #FF69B4 100%)',
      fontFamily: FONTS.COMIC_SANS
    }}>
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-8px) rotate(-10deg); }
          75% { transform: translateX(8px) rotate(10deg); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.3); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes colorflip {
          0% { filter: hue-rotate(0deg); }
          100% { filter: hue-rotate(360deg); }
        }
        @keyframes wobble {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-5deg) scale(1.1); }
          75% { transform: rotate(5deg) scale(0.9); }
        }
        .shake { animation: shake 0.3s infinite; }
        .spin-slow { animation: spin 2s linear infinite; }
        .pulse-fast { animation: pulse 0.5s infinite; }
        .bounce { animation: bounce 0.8s infinite; }
        .colorflip-fast { animation: colorflip 1s infinite; }
        .wobble { animation: wobble 0.6s infinite; }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 bg-black/20 p-6 border-8 border-lime-400 transform -rotate-2">
          <h1
            className="text-4xl md:text-6xl font-black mb-4"
            style={{ 
              fontFamily: FONTS.IMPACT,
              background: 'linear-gradient(45deg, #FF0000, #00FF00, #0000FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'colorflip 2s infinite'
            }}
          >
            📻 DUMBUI RADIOS 📻
          </h1>
          <p
            className="text-xl md:text-2xl font-bold"
            style={{ fontFamily: FONTS.BRUSH_SCRIPT, color: COLORS.CYAN, textShadow: '2px 2px 0 #000' }}
          >
            The MOST Annoying Radio Buttons Ever Created!
          </p>
        </div>

        <div className="mb-6 bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-500 p-4 border-8 border-red-600 transform rotate-1">
          <div className="flex flex-wrap gap-3 justify-center">
            {Object.keys(radioConfigs).map((radio) => (
              <button
                key={radio}
                onClick={() => setSelectedRadio(radio)}
                className={`px-4 py-2 font-black text-sm border-4 transition-all ${
                  selectedRadio === radio
                    ? 'bg-lime-400 text-black border-black scale-110 shake'
                    : 'bg-purple-600 text-yellow-300 border-yellow-300 hover:scale-105'
                }`}
                style={{ fontFamily: FONTS.PAPYRUS }}
              >
                {radioConfigs[radio].name.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6 bg-cyan-400 p-4 border-8 border-magenta-600 transform -rotate-1">
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <button
              onClick={() => setViewMode('preview')}
              className={`px-6 py-3 font-black text-lg border-4 transition-all ${
                viewMode === 'preview'
                  ? 'bg-yellow-300 text-black border-black shake'
                  : 'bg-blue-600 text-white border-white hover:bg-blue-700'
              }`}
              style={{ fontFamily: FONTS.COMIC_SANS }}
            >
              👁️ PREVIEW
            </button>
            <button
              onClick={() => setViewMode('code')}
              className={`px-6 py-3 font-black text-lg border-4 transition-all ${
                viewMode === 'code'
                  ? 'bg-yellow-300 text-black border-black shake'
                  : 'bg-blue-600 text-white border-white hover:bg-blue-700'
              }`}
              style={{ fontFamily: FONTS.COMIC_SANS }}
            >
              💻 CODE
            </button>

            <div className="flex gap-2">
              <select
                value={styleType}
                onChange={(e) => setStyleType(e.target.value)}
                className="px-4 py-3 font-black text-lg border-4 border-black bg-lime-400"
                style={{ fontFamily: FONTS.PAPYRUS }}
              >
                <option value="tailwindcss">TailwindCSS</option>
                <option value="css">CSS</option>
              </select>

              <select
                value={codeLanguage}
                onChange={(e) => setCodeLanguage(e.target.value)}
                className="px-4 py-3 font-black text-lg border-4 border-black bg-pink-400"
                style={{ fontFamily: FONTS.PAPYRUS }}
              >
                <option value="react">React</option>
                <option value="html">HTML</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-purple-600 p-8 border-8 border-yellow-300 transform rotate-1">
          {viewMode === 'preview' ? (
            <div className="flex flex-col items-center justify-center min-h-[400px] bg-gradient-to-br from-red-500 via-green-500 to-blue-500 border-8 border-cyan-400 p-8">
              <h2
                className="text-3xl font-black mb-8 text-white"
                style={{ 
                  fontFamily: FONTS.PAPYRUS,
                  textShadow: '3px 3px 0 #000'
                }}
              >
                {config.name}
              </h2>
              
              {/* Single Radio Display */}
              <div className="flex items-center gap-4 bg-black/30 p-8 border-4 border-white transform scale-125">
                <label className="flex items-center gap-4 text-white font-bold text-xl" style={{ fontFamily: FONTS.COMIC_SANS }}>
                  <input
                    type="radio"
                    name="demo-radio"
                    checked={selectedValue === selectedRadio}
                    onChange={() => setSelectedValue(selectedRadio)}
                    className={config.className}
                  />
                  <span className="text-2xl" style={{ textShadow: '2px 2px 0 #000' }}>
                    SELECT ME!
                  </span>
                </label>
              </div>

              {/* Radio Selection Indicator */}
              <div className="mt-8 bg-black/50 p-4 border-4 border-yellow-400 rounded-lg">
                <p className="text-white font-bold text-lg text-center" style={{ fontFamily: FONTS.COMIC_SANS }}>
                  Currently viewing: <span className="text-yellow-300">{config.name}</span>
                </p>
                <p className="text-cyan-300 text-center mt-2" style={{ fontFamily: FONTS.TIMES_NEW_ROMAN }}>
                  Use the buttons above to switch between different terrible radios!
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="bg-gray-900 p-4 border-4 border-lime-400 relative">
                <div className="flex justify-between items-center mb-2 pb-2 border-b-2 border-gray-700">
                  <span className="text-yellow-300 font-bold" style={{ fontFamily: FONTS.COMIC_SANS }}>
                    {codeLanguage === 'react' ? '⚛️ REACT CODE' : '🌐 HTML CODE'}
                  </span>
                  <button
                    onClick={() => handleCopy(getCodeToDisplay(), 'code')}
                    className="px-3 py-1 bg-cyan-400 text-black font-bold border-2 border-black hover:bg-cyan-300 flex items-center gap-2"
                    style={{ fontFamily: FONTS.COMIC_SANS }}
                  >
                    <Copy size={16} />
                    {copiedCode ? 'COPIED!' : 'COPY'}
                  </button>
                </div>
                <SyntaxHighlighter
                  language={codeLanguage === 'react' ? 'jsx' : 'html'}
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    borderRadius: 0,
                    fontSize: '14px',
                    maxHeight: '400px'
                  }}
                  showLineNumbers
                  wrapLines
                >
                  {getCodeToDisplay()}
                </SyntaxHighlighter>
              </div>

              {styleType === 'css' && (
                <div className="bg-gray-900 p-4 border-4 border-pink-400 relative">
                  <div className="flex justify-between items-center mb-2 pb-2 border-b-2 border-gray-700">
                    <span className="text-pink-300 font-bold" style={{ fontFamily: FONTS.COMIC_SANS }}>
                      🎨 CSS CODE
                    </span>
                    <button
                      onClick={() => handleCopy(config.cssCode, 'css')}
                      className="px-3 py-1 bg-pink-400 text-black font-bold border-2 border-black hover:bg-pink-300 flex items-center gap-2"
                      style={{ fontFamily: FONTS.COMIC_SANS }}
                    >
                      <Copy size={16} />
                      {copiedCss ? 'COPIED!' : 'COPY'}
                    </button>
                  </div>
                  <SyntaxHighlighter
                    language="css"
                    style={vscDarkPlus}
                    customStyle={{
                      margin: 0,
                      borderRadius: 0,
                      fontSize: '14px',
                      maxHeight: '400px'
                    }}
                    showLineNumbers
                    wrapLines
                  >
                    {config.cssCode}
                  </SyntaxHighlighter>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="mt-8 bg-gradient-to-r from-yellow-400 via-pink-500 to-cyan-400 p-6 border-8 border-green-500 transform -rotate-2">
          <p
            className="text-2xl font-black text-center"
            style={{ fontFamily: FONTS.PAPYRUS, color: '#000', textShadow: '1px 1px 0 #fff' }}
          >
            ⚠️ WARNING: These radios may cause SEIZURES and REGRET! ⚠️
          </p>
        </div>
      </div>
    </div>
  );
}