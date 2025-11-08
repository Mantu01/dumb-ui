import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy } from 'lucide-react';

const FONTS = {
  COMIC_SANS: '"Comic Sans MS", cursive',
  PAPYRUS: 'Papyrus, fantasy',
  TIMES_NEW_ROMAN: '"Times New Roman", serif'
};

const COLORS = {
  YELLOW: '#FFFF00',
  CYAN: '#00FFFF',
  MAGENTA: '#FF00FF',
  LIME: '#00FF00'
};

const buttonConfigs = {
  button1: {
    name: 'Primary Button',
    className: 'px-6 py-3 bg-lime-400 text-black font-black text-lg shake border-4 border-black hover:bg-yellow-300 transition-colors',
    text: 'Click Me!',
    reactCode: `<button
  className="px-6 py-3 bg-lime-400 text-black font-black text-lg shake border-4 border-black hover:bg-yellow-300 transition-colors"
  style={{ fontFamily: "Comic Sans MS" }}
>
  Click Me!
</button>`,
    htmlCode: `<button
  class="px-6 py-3 bg-lime-400 text-black font-black text-lg shake border-4 border-black hover:bg-yellow-300 transition-colors"
  style="font-family: 'Comic Sans MS';"
>
  Click Me!
</button>`,
    cssCode: `.button-primary {
  padding: 1.5rem 1.5rem;
  background-color: #84cc16;
  color: #000000;
  font-weight: 900;
  font-size: 1.125rem;
  border: 4px solid #000000;
  font-family: 'Comic Sans MS';
  animation: shake 0.5s infinite;
  transition: background-color 0.3s;
}

.button-primary:hover {
  background-color: #fde047;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}`
  },

  button2: {
    name: 'Rainbow Spinner',
    className: 'px-8 py-4 bg-gradient-to-r from-red-400 via-green-500 to-blue-600 text-white font-mono text-xl rotate-scale rounded-full border-8 border-dashed border-yellow-500 hover:animate-spin',
    text: 'DONT CLICK!',
    reactCode: `<button
  className="px-8 py-4 bg-gradient-to-r from-red-400 via-green-500 to-blue-600 text-white font-mono text-xl rotate-scale rounded-full border-8 border-dashed border-yellow-500 hover:animate-spin"
  style={{ textShadow: '2px 2px 4px magenta' }}
>
  DONT CLICK!
</button>`,
    htmlCode: `<button
  class="px-8 py-4 bg-gradient-to-r from-red-400 via-green-500 to-blue-600 text-white font-mono text-xl rotate-scale rounded-full border-8 border-dashed border-yellow-500 hover:animate-spin"
  style="text-shadow: 2px 2px 4px magenta;"
>
  DONT CLICK!
</button>`,
    cssCode: `.button-rainbow {
  padding: 2rem 1rem;
  background: linear-gradient(90deg, #f87171, #4ade80, #60a5fa);
  color: white;
  font-family: monospace;
  font-size: 1.25rem;
  border: 8px dashed #eab308;
  border-radius: 50%;
  text-shadow: 2px 2px 4px #ec4899;
  animation: rotate-scale 2s infinite;
}

.button-rainbow:hover {
  animation: spin 0.5s infinite;
}

@keyframes rotate-scale {
  0% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(180deg) scale(1.5); }
  100% { transform: rotate(360deg) scale(1); }
}`
  },

  button3: {
    name: '3D Comic Disaster',
    className: 'px-10 py-6 bg-purple-600 text-yellow-300 font-comic text-2xl skew-x-12 shadow-2xl border-l-8 border-r-8 border-t-4 border-b-4 border-red-500 hover:bg-pink-700 hover:skew-x-0 transition-all',
    text: 'WOW! BUTTON!',
    reactCode: `<button
  className="px-10 py-6 bg-purple-600 text-yellow-300 font-comic text-2xl skew-x-12 shadow-2xl border-l-8 border-r-8 border-t-4 border-b-4 border-red-500 hover:bg-pink-700 hover:skew-x-0 transition-all"
  style={{ fontFamily: "Comic Sans MS", textShadow: '3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000' }}
>
  WOW! BUTTON!
</button>`,
    htmlCode: `<button
  class="px-10 py-6 bg-purple-600 text-yellow-300 font-comic text-2xl skew-x-12 shadow-2xl border-l-8 border-r-8 border-t-4 border-b-4 border-red-500 hover:bg-pink-700 hover:skew-x-0 transition-all"
  style="font-family: 'Comic Sans MS'; text-shadow: 3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;"
>
  WOW! BUTTON!
</button>`,
    cssCode: `.button-3d-comic {
  padding: 2.5rem 1.5rem;
  background-color: #9333ea;
  color: #fef08a;
  font-family: 'Comic Sans MS';
  font-size: 1.5rem;
  transform: skewX(-12deg);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  border-left: 8px solid #ef4444;
  border-right: 8px solid #ef4444;
  border-top: 4px solid #ef4444;
  border-bottom: 4px solid #ef4444;
  text-shadow: 3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;
  transition: all 0.3s;
}

.button-3d-comic:hover {
  background-color: #be185d;
  transform: skewX(0deg);
}`
  },

  button4: {
    name: 'Blinking Neon Nightmare',
    className: 'px-12 py-8 bg-black text-cyan-400 font-serif text-3xl blink border-4 border-neon rounded-lg shadow-glow hover:bg-gray-900 hover:text-pink-400',
    text: 'BUY NOW!!!',
    reactCode: `<button
  className="px-12 py-8 bg-black text-cyan-400 font-serif text-3xl blink border-4 border-neon rounded-lg shadow-glow hover:bg-gray-900 hover:text-pink-400"
  style={{ fontFamily: "Times New Roman", fontWeight: 'bold' }}
>
  BUY NOW!!!
</button>`,
    htmlCode: `<button
  class="px-12 py-8 bg-black text-cyan-400 font-serif text-3xl blink border-4 border-neon rounded-lg shadow-glow hover:bg-gray-900 hover:text-pink-400"
  style="font-family: 'Times New Roman'; font-weight: bold;"
>
  BUY NOW!!!
</button>`,
    cssCode: `.button-neon {
  padding: 3rem 2rem;
  background-color: #000000;
  color: #22d3ee;
  font-family: 'Times New Roman';
  font-size: 1.875rem;
  font-weight: bold;
  border: 4px solid #06b6d4;
  border-radius: 0.5rem;
  box-shadow: 0 0 20px #06b6d4, 0 0 40px #06b6d4;
  animation: blink 0.3s infinite;
  transition: all 0.3s;
}

.button-neon:hover {
  background-color: #111827;
  color: #ec4899;
  box-shadow: 0 0 20px #ec4899, 0 0 40px #ec4899;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0.3; }
}`
  },

  button5: {
    name: 'Gradient Text Chaos',
    className: 'px-16 py-10 bg-gray-200 text-transparent bg-clip-text font-bold text-4xl bounce border-12 border-double border-gradient rounded-none hover:bg-gray-300 hover:rotate-45',
    text: 'SUBMIT FORM',
    reactCode: `<button
  className="px-16 py-10 bg-gray-200 text-transparent bg-clip-text font-bold text-4xl bounce border-12 border-double border-gradient rounded-none hover:bg-gray-300 hover:rotate-45"
  style={{ backgroundImage: 'linear-gradient(45deg, #ff0000, #00ff00, #0000ff, #ffff00)' }}
>
  SUBMIT FORM
</button>`,
    htmlCode: `<button
  class="px-16 py-10 bg-gray-200 text-transparent bg-clip-text font-bold text-4xl bounce border-12 border-double border-gradient rounded-none hover:bg-gray-300 hover:rotate-45"
  style="background-image: linear-gradient(45deg, #ff0000, #00ff00, #0000ff, #ffff00);"
>
  SUBMIT FORM
</button>`,
    cssCode: `.button-gradient-text {
  padding: 4rem 3rem;
  background-color: #e5e7eb;
  color: transparent;
  background-image: linear-gradient(45deg, #ff0000, #00ff00, #0000ff, #ffff00);
  background-clip: text;
  -webkit-background-clip: text;
  font-weight: bold;
  font-size: 2.25rem;
  border: 12px double;
  border-image: linear-gradient(45deg, #ff0000, #00ff00, #0000ff) 1;
  animation: bounce 1s infinite;
  transition: all 0.3s;
}

.button-gradient-text:hover {
  background-color: #d1d5db;
  transform: rotate(45deg);
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}`
  }
};

export function ButtonSample() {
  const [selectedButton, setSelectedButton] = useState('button1');
  const [viewMode, setViewMode] = useState('preview');
  const [codeLanguage, setCodeLanguage] = useState('react');
  const [styleType, setStyleType] = useState('tailwindcss');
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedCss, setCopiedCss] = useState(false);

  const config = buttonConfigs[selectedButton];

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
        ? `<button className="button-primary">\n  Click Me!\n</button>`
        : `<button class="button-primary">\n  Click Me!\n</button>`;
    }
  };

  return (
    <div className="min-h-screen p-4 md:p-8" style={{ 
      background: 'linear-gradient(135deg, #FF00FF 0%, #00FFFF 50%, #FFFF00 100%)',
      fontFamily: FONTS.COMIC_SANS
    }}>
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        @keyframes colorflip {
          0%, 100% { color: #FFFF00; }
          33% { color: #FF00FF; }
          66% { color: #00FFFF; }
        }
        .shake { animation: shake 0.5s infinite; }
        .colorflip { animation: colorflip 2s infinite; }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 bg-black/20 p-6 border-8 border-lime-400 transform -rotate-2">
          <h1
            className="text-4xl md:text-6xl font-black mb-4 colorflip"
            style={{ fontFamily: FONTS.COMIC_SANS }}
          >
            🎨 DUMBUI BUTTONS 🎨
          </h1>
          <p
            className="text-xl md:text-2xl font-bold"
            style={{ fontFamily: FONTS.TIMES_NEW_ROMAN, color: COLORS.CYAN }}
          >
            The WORST Buttons on the Internet!
          </p>
        </div>

        <div className="mb-6 bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-500 p-4 border-8 border-red-600 transform rotate-1">
          <div className="flex flex-wrap gap-3 justify-center">
            {['button1','button2','button3','button4','button5'].map((btn) => (
              <button
                key={btn}
                onClick={() => setSelectedButton(btn)}
                className={`px-6 py-3 font-black text-lg border-4 transition-all ${
                  selectedButton === btn
                    ? 'bg-lime-400 text-black border-black scale-110 shake'
                    : 'bg-purple-600 text-yellow-300 border-yellow-300 hover:scale-105'
                }`}
                style={{ fontFamily: FONTS.PAPYRUS }}
              >
                {btn.toUpperCase()}
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
                className="text-3xl font-black mb-8 colorflip"
                style={{ fontFamily: FONTS.PAPYRUS }}
              >
                {config.name}
              </h2>
              <button
                className={config.className}
                style={{ fontFamily: FONTS.COMIC_SANS }}
              >
                {config.text}
              </button>
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
            style={{ fontFamily: FONTS.PAPYRUS, color: '#000' }}
          >
            ⚠️ WARNING: These buttons may cause EYE DAMAGE! ⚠️
          </p>
        </div>
      </div>
    </div>
  );
}