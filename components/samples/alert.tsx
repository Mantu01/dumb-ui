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
  RED: '#FF0000',
  BLUE: '#0000FF'
};

const alertConfigs = {
  alert1: {
    name: 'Shaky Rainbow Alert',
    className: 'p-8 bg-gradient-to-r from-red-500 via-yellow-500 to-purple-500 text-black font-black text-2xl border-12 border-black rounded-lg shake shadow-2xl',
    text: '🚨 URGENT: This is VERY IMPORTANT! 🚨',
    reactCode: `<div
  className="p-8 bg-gradient-to-r from-red-500 via-yellow-500 to-purple-500 text-black font-black text-2xl border-12 border-black rounded-lg shake shadow-2xl"
  style={{ fontFamily: "Comic Sans MS" }}
>
  🚨 URGENT: This is VERY IMPORTANT! 🚨
</div>`,
    htmlCode: `<div
  class="p-8 bg-gradient-to-r from-red-500 via-yellow-500 to-purple-500 text-black font-black text-2xl border-12 border-black rounded-lg shake shadow-2xl"
  style="font-family: 'Comic Sans MS';"
>
  🚨 URGENT: This is VERY IMPORTANT! 🚨
</div>`,
    cssCode: `.alert-shaky-rainbow {
  padding: 2rem;
  background: linear-gradient(to right, #ef4444, #eab308, #a855f7);
  color: #000000;
  font-weight: 900;
  font-size: 1.5rem;
  border: 12px solid #000000;
  border-radius: 0.5rem;
  font-family: 'Comic Sans MS';
  animation: shake 0.4s infinite;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.9);
  text-align: center;
}

@keyframes shake {
  0%, 100% { transform: translateX(0) rotate(0deg); }
  25% { transform: translateX(-10px) rotate(-3deg); }
  75% { transform: translateX(10px) rotate(3deg); }
}`
  },

  alert2: {
    name: 'Blinking Neon Alert',
    className: 'p-10 bg-black text-cyan-400 font-black text-3xl border-16 border-cyan-400 rounded-full blink shadow-lg',
    text: '⚠️ ATTENTION: Critical System Alert! ⚠️',
    reactCode: `<div
  className="p-10 bg-black text-cyan-400 font-black text-3xl border-16 border-cyan-400 rounded-full blink shadow-lg"
  style={{ fontFamily: "Impact", textShadow: "0 0 15px #00FFFF" }}
>
  ⚠️ ATTENTION: Critical System Alert! ⚠️
</div>`,
    htmlCode: `<div
  class="p-10 bg-black text-cyan-400 font-black text-3xl border-16 border-cyan-400 rounded-full blink shadow-lg"
  style="font-family: Impact; text-shadow: 0 0 15px #00FFFF;"
>
  ⚠️ ATTENTION: Critical System Alert! ⚠️
</div>`,
    cssCode: `.alert-blinking-neon {
  padding: 2.5rem;
  background-color: #000000;
  color: #00ffff;
  font-weight: 900;
  font-size: 1.875rem;
  border: 16px solid #00ffff;
  border-radius: 9999px;
  font-family: Impact;
  text-shadow: 0 0 15px #00ffff;
  animation: blink 0.6s infinite;
  box-shadow: 0 25px 50px -12px rgba(0, 255, 255, 0.5);
  text-align: center;
}

@keyframes blink {
  0%, 50% { 
    opacity: 1;
    box-shadow: 0 0 30px 10px rgba(0, 255, 255, 0.7);
  }
  51%, 100% { 
    opacity: 0.4;
    box-shadow: 0 0 15px 5px rgba(0, 255, 255, 0.3);
  }
}`
  },

  alert3: {
    name: 'Spinning 3D Alert',
    className: 'p-12 bg-lime-400 text-red-600 font-black text-4xl border-20 border-red-600 rounded-xl spin-3d',
    text: '🎯 IMPORTANT: Read This Now! 🎯',
    reactCode: `<div
  className="p-12 bg-lime-400 text-red-600 font-black text-4xl border-20 border-red-600 rounded-xl spin-3d"
  style={{ fontFamily: "Papyrus", transformStyle: "preserve-3d" }}
>
  🎯 IMPORTANT: Read This Now! 🎯
</div>`,
    htmlCode: `<div
  class="p-12 bg-lime-400 text-red-600 font-black text-4xl border-20 border-red-600 rounded-xl spin-3d"
  style="font-family: Papyrus; transform-style: preserve-3d;"
>
  🎯 IMPORTANT: Read This Now! 🎯
</div>`,
    cssCode: `.alert-spinning-3d {
  padding: 3rem;
  background-color: #84cc16;
  color: #dc2626;
  font-weight: 900;
  font-size: 2.25rem;
  border: 20px solid #dc2626;
  border-radius: 0.75rem;
  font-family: Papyrus;
  animation: spin3d 4s infinite linear;
  transform-style: preserve-3d;
  box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.6);
  text-align: center;
  perspective: 1000px;
}

@keyframes spin3d {
  0% { transform: rotateY(0deg) rotateX(5deg); }
  100% { transform: rotateY(360deg) rotateX(5deg); }
}`
  },

  alert4: {
    name: 'Pulsing Glow Alert',
    className: 'p-14 bg-purple-600 text-yellow-300 font-black text-5xl border-24 border-yellow-300 rounded-2xl pulse-glow',
    text: '🔥 WARNING: Extreme Alert! 🔥',
    reactCode: `<div
  className="p-14 bg-purple-600 text-yellow-300 font-black text-5xl border-24 border-yellow-300 rounded-2xl pulse-glow"
  style={{ fontFamily: "Brush Script MT" }}
>
  🔥 WARNING: Extreme Alert! 🔥
</div>`,
    htmlCode: `<div
  class="p-14 bg-purple-600 text-yellow-300 font-black text-5xl border-24 border-yellow-300 rounded-2xl pulse-glow"
  style="font-family: 'Brush Script MT';"
>
  🔥 WARNING: Extreme Alert! 🔥
</div>`,
    cssCode: `.alert-pulsing-glow {
  padding: 3.5rem;
  background-color: #9333ea;
  color: #fef08a;
  font-weight: 900;
  font-size: 3rem;
  border: 24px solid #fef08a;
  border-radius: 1rem;
  font-family: 'Brush Script MT';
  animation: pulseGlow 1.5s infinite alternate;
  box-shadow: 0 0 50px 25px rgba(254, 240, 138, 0.8);
  text-align: center;
}

@keyframes pulseGlow {
  0% { 
    transform: scale(1);
    box-shadow: 0 0 50px 25px rgba(254, 240, 138, 0.8);
  }
  100% { 
    transform: scale(1.1);
    box-shadow: 0 0 80px 40px rgba(254, 240, 138, 1);
  }
}`
  },

  alert5: {
    name: 'Bouncing Comic Alert',
    className: 'p-16 bg-blue-500 text-white font-black text-6xl border-28 border-white rounded-full bounce-comic',
    text: '🎉 SUCCESS: Amazing Job! 🎉',
    reactCode: `<div
  className="p-16 bg-blue-500 text-white font-black text-6xl border-28 border-white rounded-full bounce-comic"
  style={{ fontFamily: "Comic Sans MS", textShadow: "4px 4px 0 #000" }}
>
  🎉 SUCCESS: Amazing Job! 🎉
</div>`,
    htmlCode: `<div
  class="p-16 bg-blue-500 text-white font-black text-6xl border-28 border-white rounded-full bounce-comic"
  style="font-family: 'Comic Sans MS'; text-shadow: 4px 4px 0 #000;"
>
  🎉 SUCCESS: Amazing Job! 🎉
</div>`,
    cssCode: `.alert-bouncing-comic {
  padding: 4rem;
  background-color: #3b82f6;
  color: #ffffff;
  font-weight: 900;
  font-size: 3.75rem;
  border: 28px solid #ffffff;
  border-radius: 9999px;
  font-family: 'Comic Sans MS';
  animation: bounceComic 1.2s infinite alternate;
  text-shadow: 4px 4px 0 #000000;
  box-shadow: 0 45px 70px -15px rgba(0, 0, 0, 0.7);
  text-align: center;
}

@keyframes bounceComic {
  0% { 
    transform: translateY(0) rotate(-2deg);
  }
  100% { 
    transform: translateY(-25px) rotate(2deg);
  }
}`
  },

  alert6: {
    name: 'Matrix Color Flip Alert',
    className: 'p-18 bg-black text-green-400 font-mono font-black text-6xl border-32 border-green-400 rounded-none matrix-flip',
    text: '👾 ALERT: System Compromised! 👾',
    reactCode: `<div
  className="p-18 bg-black text-green-400 font-mono font-black text-6xl border-32 border-green-400 rounded-none matrix-flip"
  style={{ textShadow: "0 0 10px #00FF00" }}
>
  👾 ALERT: System Compromised! 👾
</div>`,
    htmlCode: `<div
  class="p-18 bg-black text-green-400 font-mono font-black text-6xl border-32 border-green-400 rounded-none matrix-flip"
  style="text-shadow: 0 0 10px #00FF00;"
>
  👾 ALERT: System Compromised! 👾
</div>`,
    cssCode: `.alert-matrix-flip {
  padding: 4.5rem;
  background-color: #000000;
  color: #00ff00;
  font-family: monospace;
  font-weight: 900;
  font-size: 3.75rem;
  border: 32px solid #00ff00;
  border-radius: 0;
  text-shadow: 0 0 10px #00ff00;
  animation: matrixFlip 0.8s infinite;
  box-shadow: 0 0 40px 20px rgba(0, 255, 0, 0.6);
  text-align: center;
  letter-spacing: 2px;
}

@keyframes matrixFlip {
  0%, 100% { 
    color: #00ff00;
    border-color: #00ff00;
    background-color: #000000;
  }
  25% { 
    color: #ff00ff;
    border-color: #ff00ff;
    background-color: #ffff00;
  }
  50% { 
    color: #00ffff;
    border-color: #00ffff;
    background-color: #ff00ff;
  }
  75% { 
    color: #ff0000;
    border-color: #ff0000;
    background-color: #00ffff;
  }
}`
  }
};

export function AlertSample() {
  const [selectedAlert, setSelectedAlert] = useState('alert1');
  const [viewMode, setViewMode] = useState('preview');
  const [codeLanguage, setCodeLanguage] = useState('react');
  const [styleType, setStyleType] = useState('tailwindcss');
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedCss, setCopiedCss] = useState(false);

  const config = alertConfigs[selectedAlert];

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
        ? `<div className="alert-custom">\n  ${config.text}\n</div>`
        : `<div class="alert-custom">\n  ${config.text}\n</div>`;
    }
  };

  return (
    <div className="min-h-screen p-4 md:p-8" style={{ 
      background: 'linear-gradient(135deg, #FF00FF 0%, #00FFFF 50%, #FFFF00 100%)',
      fontFamily: FONTS.COMIC_SANS
    }}>
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0) rotate(0deg); }
          25% { transform: translateX(-10px) rotate(-3deg); }
          75% { transform: translateX(10px) rotate(3deg); }
        }
        @keyframes blink {
          0%, 50% { 
            opacity: 1;
            box-shadow: 0 0 30px 10px rgba(0, 255, 255, 0.7);
          }
          51%, 100% { 
            opacity: 0.4;
            box-shadow: 0 0 15px 5px rgba(0, 255, 255, 0.3);
          }
        }
        @keyframes spin3d {
          0% { transform: rotateY(0deg) rotateX(5deg); }
          100% { transform: rotateY(360deg) rotateX(5deg); }
        }
        @keyframes pulseGlow {
          0% { 
            transform: scale(1);
            box-shadow: 0 0 50px 25px rgba(254, 240, 138, 0.8);
          }
          100% { 
            transform: scale(1.1);
            box-shadow: 0 0 80px 40px rgba(254, 240, 138, 1);
          }
        }
        @keyframes bounceComic {
          0% { 
            transform: translateY(0) rotate(-2deg);
          }
          100% { 
            transform: translateY(-25px) rotate(2deg);
          }
        }
        @keyframes matrixFlip {
          0%, 100% { 
            color: #00ff00;
            border-color: #00ff00;
            background-color: #000000;
          }
          25% { 
            color: #ff00ff;
            border-color: #ff00ff;
            background-color: #ffff00;
          }
          50% { 
            color: #00ffff;
            border-color: #00ffff;
            background-color: #ff00ff;
          }
          75% { 
            color: #ff0000;
            border-color: #ff0000;
            background-color: #00ffff;
          }
        }
        @keyframes colorflip {
          0%, 100% { color: #FFFF00; }
          33% { color: #FF00FF; }
          66% { color: #00FFFF; }
        }
        .shake { animation: shake 0.4s infinite; }
        .blink { animation: blink 0.6s infinite; }
        .spin-3d { animation: spin3d 4s infinite linear; }
        .pulse-glow { animation: pulseGlow 1.5s infinite alternate; }
        .bounce-comic { animation: bounceComic 1.2s infinite alternate; }
        .matrix-flip { animation: matrixFlip 0.8s infinite; }
        .colorflip { animation: colorflip 2s infinite; }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 bg-black/20 p-6 border-8 border-lime-400 transform -rotate-2">
          <h1
            className="text-4xl md:text-6xl font-black mb-4 colorflip"
            style={{ fontFamily: FONTS.COMIC_SANS }}
          >
            🎨 DUMBUI ALERTS 🎨
          </h1>
          <p
            className="text-xl md:text-2xl font-bold"
            style={{ fontFamily: FONTS.TIMES_NEW_ROMAN, color: COLORS.CYAN }}
          >
            The WORST Alerts on the Internet!
          </p>
        </div>

        <div className="mb-6 bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-500 p-4 border-8 border-red-600 transform rotate-1">
          <div className="flex flex-wrap gap-3 justify-center">
            {Object.keys(alertConfigs).map((alert) => (
              <button
                key={alert}
                onClick={() => setSelectedAlert(alert)}
                className={`px-6 py-3 font-black text-lg border-4 transition-all ${
                  selectedAlert === alert
                    ? 'bg-lime-400 text-black border-black scale-110 shake'
                    : 'bg-purple-600 text-yellow-300 border-yellow-300 hover:scale-105'
                }`}
                style={{ fontFamily: FONTS.PAPYRUS }}
              >
                {alertConfigs[alert].name}
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
              <div
                className={config.className}
                style={{ 
                  fontFamily: config.name.includes('Matrix') ? 'monospace' : 
                            config.name.includes('Comic') ? FONTS.COMIC_SANS :
                            config.name.includes('Brush') ? FONTS.BRUSH_SCRIPT :
                            config.name.includes('Neon') ? FONTS.IMPACT :
                            config.name.includes('3D') ? FONTS.PAPYRUS : FONTS.COMIC_SANS,
                  textShadow: config.name.includes('Neon') ? '0 0 15px #00FFFF' :
                             config.name.includes('Comic') ? '4px 4px 0 #000' :
                             config.name.includes('Matrix') ? '0 0 10px #00FF00' : 'none'
                }}
              >
                {config.text}
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
            style={{ fontFamily: FONTS.PAPYRUS, color: '#000' }}
          >
            ⚠️ WARNING: These alerts may cause HEADACHES and NAUSEA! ⚠️
          </p>
        </div>
      </div>
    </div>
  );
}