import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy } from 'lucide-react';

const FONTS = {
  COMIC_SANS: '"Comic Sans MS", cursive',
  PAPYRUS: 'Papyrus, fantasy',
  TIMES_NEW_ROMAN: '"Times New Roman", serif',
  IMPACT: 'Impact, sans-serif',
  BRUSH_SCRIPT: '"Brush Script MT", cursive',
  WINGDINGS: 'Wingdings, sans-serif'
};

const COLORS = {
  YELLOW: '#FFFF00',
  CYAN: '#00FFFF',
  MAGENTA: '#FF00FF',
  LIME: '#00FF00',
  ORANGE: '#FFA500',
  PINK: '#FF69B4'
};

const selectConfigs = {
  select1: {
    name: 'Shaky Rainbow Select',
    className: 'shake border-8 border-black bg-cyan-800 text-white font-black text-lg px-6 py-4 transform scale-110',
    reactCode: `<select
  className="shake border-8 border-black bg-gradient-to-r from-red-500 via-green-500 to-blue-500 text-black font-black text-lg px-6 py-4 transform scale-110"
  style={{ fontFamily: "Comic Sans MS" }}
>
  <option>Choose an option! 🎨</option>
  <option>Terrible Option 1</option>
  <option>Worse Option 2</option>
  <option>Awful Option 3</option>
</select>`,
    htmlCode: `<select
  class="shake border-8 border-black bg-gradient-to-r from-red-500 via-green-500 to-blue-500 text-white font-black text-lg px-6 py-4 transform scale-110"
  style="font-family: 'Comic Sans MS';"
>
  <option>Choose an option! 🎨</option>
  <option>Terrible Option 1</option>
  <option>Worse Option 2</option>
  <option>Awful Option 3</option>
</select>`,
    cssCode: `.select-shaky-rainbow {
  border: 8px solid #000000;
  background: linear-gradient(to right, #ef4444, #22c55e, #3b82f6);
  color: #ffffff;
  font-weight: 900;
  font-size: 1.125rem;
  padding: 1rem 1.5rem;
  animation: shake 0.3s infinite;
  transform: scale(1.1);
  font-family: 'Comic Sans MS';
}

@keyframes shake {
  0%, 100% { transform: scale(1.1) translateX(0); }
  25% { transform: scale(1.1) translateX(-5px); }
  75% { transform: scale(1.1) translateX(5px); }
}`
  },

  select2: {
    name: 'Spinning Neon Select',
    className: 'spin-slow border-4 border-cyan-400 bg-black text-cyan-300 font-black text-lg px-6 py-4 shadow-lg shadow-cyan-400',
    reactCode: `<select
  className="spin-slow border-4 border-cyan-400 bg-black text-cyan-300 font-black text-lg px-6 py-4 shadow-lg shadow-cyan-400"
  style={{ fontFamily: "Papyrus" }}
>
  <option>🌀 Spinning Options! 🌪️</option>
  <option>Dizzy Choice 1</option>
  <option>Spinning Choice 2</option>
  <option>Rotating Choice 3</option>
</select>`,
    htmlCode: `<select
  class="spin-slow border-4 border-cyan-400 bg-black text-cyan-300 font-black text-lg px-6 py-4 shadow-lg shadow-cyan-400"
  style="font-family: Papyrus;"
>
  <option>🌀 Spinning Options! 🌪️</option>
  <option>Dizzy Choice 1</option>
  <option>Spinning Choice 2</option>
  <option>Rotating Choice 3</option>
</select>`,
    cssCode: `.select-spinning-neon {
  border: 4px solid #22d3ee;
  background-color: #000000;
  color: #67e8f9;
  font-weight: 900;
  font-size: 1.125rem;
  padding: 1rem 1.5rem;
  animation: spin 3s linear infinite;
  box-shadow: 0 0 20px #22d3ee;
  font-family: 'Papyrus';
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}`
  },

  select3: {
    name: 'Pulsing Glow Select',
    className: 'pulse-fast border-0 bg-red-500 text-yellow-300 font-black text-xl px-8 py-5 shadow-2xl shadow-red-500 rounded-none transform skew-x-6',
    reactCode: `<select
  className="pulse-fast border-0 bg-red-500 text-yellow-300 font-black text-xl px-8 py-5 shadow-2xl shadow-red-500 rounded-none transform skew-x-6"
  style={{ fontFamily: "Impact" }}
>
  <option>💥 PULSING CHOICES! 💥</option>
  <option>Thumping Option 1</option>
  <option>Beating Option 2</option>
  <option>Pounding Option 3</option>
</select>`,
    htmlCode: `<select
  class="pulse-fast border-0 bg-red-500 text-yellow-300 font-black text-xl px-8 py-5 shadow-2xl shadow-red-500 rounded-none transform skew-x-6"
  style="font-family: Impact;"
>
  <option>💥 PULSING CHOICES! 💥</option>
  <option>Thumping Option 1</option>
  <option>Beating Option 2</option>
  <option>Pounding Option 3</option>
</select>`,
    cssCode: `.select-pulsing-glow {
  border: none;
  background-color: #ef4444;
  color: #fef08a;
  font-weight: 900;
  font-size: 1.25rem;
  padding: 1.25rem 2rem;
  animation: pulse 0.8s infinite;
  box-shadow: 0 0 30px #ef4444;
  border-radius: 0;
  transform: skewX(-6deg);
  font-family: 'Impact';
}

@keyframes pulse {
  0%, 100% { transform: skewX(-6deg) scale(1); }
  50% { transform: skewX(-6deg) scale(1.1); }
}`
  },

  select4: {
    name: 'Bouncing Comic Select',
    className: 'bounce border-8 border-dashed border-yellow-400 bg-blue-600 text-white font-black text-lg px-6 py-4 rounded-full',
    reactCode: `<select
  className="bounce border-8 border-dashed border-yellow-400 bg-blue-600 text-white font-black text-lg px-6 py-4 rounded-full"
  style={{ fontFamily: "Comic Sans MS" }}
>
  <option>🏀 BOUNCE AND CHOOSE! 🏀</option>
  <option>Jumping Option 1</option>
  <option>Hopping Option 2</option>
  <option>Bouncing Option 3</option>
</select>`,
    htmlCode: `<select
  class="bounce border-8 border-dashed border-yellow-400 bg-blue-600 text-white font-black text-lg px-6 py-4 rounded-full"
  style="font-family: 'Comic Sans MS';"
>
  <option>🏀 BOUNCE AND CHOOSE! 🏀</option>
  <option>Jumping Option 1</option>
  <option>Hopping Option 2</option>
  <option>Bouncing Option 3</option>
</select>`,
    cssCode: `.select-bouncing-comic {
  border: 8px dashed #facc15;
  background-color: #2563eb;
  color: #ffffff;
  font-weight: 900;
  font-size: 1.125rem;
  padding: 1rem 1.5rem;
  animation: bounce 1s infinite;
  border-radius: 9999px;
  font-family: 'Comic Sans MS';
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}`
  },

  select5: {
    name: 'Color Flip Select',
    className: 'colorflip-fast border-4 border-black bg-gradient-to-r from-purple-600 to-pink-600 text-white font-black text-lg px-6 py-4 transform rotate-3',
    reactCode: `<select
  className="colorflip-fast border-4 border-black bg-gradient-to-r from-purple-600 to-pink-600 text-white font-black text-lg px-6 py-4 transform rotate-3"
  style={{ fontFamily: "Brush Script MT" }}
>
  <option>🌈 COLOR SHIFTING! 🌈</option>
  <option>Rainbow Option 1</option>
  <option>Prism Option 2</option>
  <option>Spectrum Option 3</option>
</select>`,
    htmlCode: `<select
  class="colorflip-fast border-4 border-black bg-gradient-to-r from-purple-600 to-pink-600 text-white font-black text-lg px-6 py-4 transform rotate-3"
  style="font-family: 'Brush Script MT';"
>
  <option>🌈 COLOR SHIFTING! 🌈</option>
  <option>Rainbow Option 1</option>
  <option>Prism Option 2</option>
  <option>Spectrum Option 3</option>
</select>`,
    cssCode: `.select-color-flip {
  border: 4px solid #000000;
  background: linear-gradient(to right, #9333ea, #db2777);
  color: #ffffff;
  font-weight: 900;
  font-size: 1.125rem;
  padding: 1rem 1.5rem;
  animation: colorflip 1.5s infinite;
  transform: rotate(3deg);
  font-family: 'Brush Script MT';
}

@keyframes colorflip {
  0% { filter: hue-rotate(0deg); }
  100% { filter: hue-rotate(360deg); }
}`
  },

  select6: {
    name: 'Wobbly 3D Select',
    className: 'wobble border-0 bg-green-500 text-black font-black text-xl px-8 py-5 shadow-2xl shadow-green-500 border-b-8 border-r-8 border-black',
    reactCode: `<select
  className="wobble border-0 bg-green-500 text-black font-black text-xl px-8 py-5 shadow-2xl shadow-green-500 border-b-8 border-r-8 border-black"
  style={{ fontFamily: "Wingdings" }}
>
  <option>♋ ♌ ♍ WOBBLY! ♎ ♏ ♐</option>
  <option>♉ Option Symbol 1</option>
  <option>♊ Option Symbol 2</option>
  <option>♋ Option Symbol 3</option>
</select>`,
    htmlCode: `<select
  class="wobble border-0 bg-green-500 text-black font-black text-xl px-8 py-5 shadow-2xl shadow-green-500 border-b-8 border-r-8 border-black"
  style="font-family: Wingdings;"
>
  <option>♋ ♌ ♍ WOBBLY! ♎ ♏ ♐</option>
  <option>♉ Option Symbol 1</option>
  <option>♊ Option Symbol 2</option>
  <option>♋ Option Symbol 3</option>
</select>`,
    cssCode: `.select-wobbly-3d {
  border: none;
  background-color: #22c55e;
  color: #000000;
  font-weight: 900;
  font-size: 1.25rem;
  padding: 1.25rem 2rem;
  animation: wobble 0.7s infinite;
  box-shadow: 0 0 30px #22c55e;
  border-bottom: 8px solid #000000;
  border-right: 8px solid #000000;
  font-family: 'Wingdings';
}

@keyframes wobble {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-3deg) scale(1.05); }
  75% { transform: rotate(3deg) scale(0.95); }
}`
  }
};

export function SelectSample() {
  const [selectedSelect, setSelectedSelect] = useState('select1');
  const [viewMode, setViewMode] = useState('preview');
  const [codeLanguage, setCodeLanguage] = useState('react');
  const [styleType, setStyleType] = useState('tailwindcss');
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedCss, setCopiedCss] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const config = selectConfigs[selectedSelect];

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
        ? `<select className="select-custom">\n  <option>Choose an option!</option>\n</select>`
        : `<select class="select-custom">\n  <option>Choose an option!</option>\n</select>`;
    }
  };

  const getFontFamily = () => {
    switch (selectedSelect) {
      case 'select1': return FONTS.COMIC_SANS;
      case 'select2': return FONTS.PAPYRUS;
      case 'select3': return FONTS.IMPACT;
      case 'select4': return FONTS.COMIC_SANS;
      case 'select5': return FONTS.BRUSH_SCRIPT;
      case 'select6': return FONTS.WINGDINGS;
      default: return FONTS.COMIC_SANS;
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
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes colorflip {
          0% { filter: hue-rotate(0deg); }
          100% { filter: hue-rotate(360deg); }
        }
        @keyframes wobble {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-3deg) scale(1.05); }
          75% { transform: rotate(3deg) scale(0.95); }
        }
        .shake { animation: shake 0.3s infinite; }
        .spin-slow { animation: spin 3s linear infinite; }
        .pulse-fast { animation: pulse 0.8s infinite; }
        .bounce { animation: bounce 1s infinite; }
        .colorflip-fast { animation: colorflip 1.5s infinite; }
        .wobble { animation: wobble 0.7s infinite; }
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
            🔽 DUMBUI SELECTS 🔽
          </h1>
          <p
            className="text-xl md:text-2xl font-bold"
            style={{ fontFamily: FONTS.BRUSH_SCRIPT, color: COLORS.CYAN, textShadow: '2px 2px 0 #000' }}
          >
            The WORST Dropdowns You'll Ever Encounter!
          </p>
        </div>

        <div className="mb-6 bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-500 p-4 border-8 border-red-600 transform rotate-1">
          <div className="flex flex-wrap gap-3 justify-center">
            {Object.keys(selectConfigs).map((select) => (
              <button
                key={select}
                onClick={() => setSelectedSelect(select)}
                className={`px-4 py-2 font-black text-sm border-4 transition-all ${
                  selectedSelect === select
                    ? 'bg-lime-400 text-black border-black scale-110 shake'
                    : 'bg-purple-600 text-yellow-300 border-yellow-300 hover:scale-105'
                }`}
                style={{ fontFamily: FONTS.PAPYRUS }}
              >
                {selectConfigs[select].name.toUpperCase()}
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
              
              {/* Single Select Display */}
              <div className="flex flex-col items-center gap-6 bg-black/30 p-8 border-4 border-white transform scale-110">
                <label className="text-white font-bold text-xl text-center" style={{ fontFamily: FONTS.COMIC_SANS, textShadow: '2px 2px 0 #000' }}>
                  MAKE YOUR TERRIBLE CHOICE:
                </label>
                <select
                  value={selectedValue}
                  onChange={(e) => setSelectedValue(e.target.value)}
                  className={config.className}
                  style={{ fontFamily: getFontFamily() }}
                >
                  <option value="">{config.reactCode.includes('<option>') ? config.reactCode.split('<option>')[1]?.split('</option>')[0]?.replace('Choose an option! 🎨', 'Choose an option! 🎨') : 'Choose an option!'}</option>
                  <option value="option1">Terrible Option 1</option>
                  <option value="option2">Worse Option 2</option>
                  <option value="option3">Awful Option 3</option>
                  <option value="option4">Horrible Option 4</option>
                </select>
                {selectedValue && (
                  <p className="text-yellow-300 font-bold text-lg mt-4 text-center" style={{ fontFamily: FONTS.COMIC_SANS }}>
                    You selected: <span className="text-cyan-300">{selectedValue}</span>
                  </p>
                )}
              </div>

              {/* Select Selection Indicator */}
              <div className="mt-8 bg-black/50 p-4 border-4 border-yellow-400 rounded-lg">
                <p className="text-white font-bold text-lg text-center" style={{ fontFamily: FONTS.COMIC_SANS }}>
                  Currently viewing: <span className="text-yellow-300">{config.name}</span>
                </p>
                <p className="text-cyan-300 text-center mt-2" style={{ fontFamily: FONTS.TIMES_NEW_ROMAN }}>
                  Use the buttons above to switch between different terrible selects!
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
            ⚠️ WARNING: These selects may cause DECISION PARALYSIS and REGRET! ⚠️
          </p>
        </div>
      </div>
    </div>
  );
}