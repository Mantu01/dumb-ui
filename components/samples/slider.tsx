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

const sliderConfigs = {
  slider1: {
    name: 'Shaky Rainbow Slider',
    className: 'slider-shaky-rainbow',
    reactCode: `<input
  type="range"
  min="0"
  max="100"
  className="slider-shaky-rainbow"
/>`,
    htmlCode: `<input
  type="range"
  min="0"
  max="100"
  class="slider-shaky-rainbow"
/>`,
    cssCode: `.slider-shaky-rainbow {
  width: 100%;
  height: 2rem;
  background: linear-gradient(to right, #ef4444, #22c55e, #3b82f6);
  border: 4px solid #000000;
  border-radius: 0.5rem;
  animation: shake 0.3s infinite;
  -webkit-appearance: none;
  appearance: none;
  outline: none;
}

.slider-shaky-rainbow::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 3rem;
  height: 3rem;
  background: #facc15;
  border: 4px solid #000000;
  border-radius: 50%;
  animation: shake 0.3s infinite;
  cursor: grab;
}

.slider-shaky-rainbow::-moz-range-thumb {
  width: 3rem;
  height: 3rem;
  background: #facc15;
  border: 4px solid #000000;
  border-radius: 50%;
  animation: shake 0.3s infinite;
  cursor: grab;
}

.slider-shaky-rainbow::-webkit-slider-track {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 2rem;
  background: linear-gradient(to right, #ef4444, #22c55e, #3b82f6);
  border-radius: 0.5rem;
}

.slider-shaky-rainbow::-moz-range-track {
  width: 100%;
  height: 2rem;
  background: linear-gradient(to right, #ef4444, #22c55e, #3b82f6);
  border-radius: 0.5rem;
  border: none;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}`
  },

  slider2: {
    name: 'Spinning Neon Slider',
    className: 'slider-spinning-neon',
    reactCode: `<input
  type="range"
  min="0"
  max="100"
  className="slider-spinning-neon"
/>`,
    htmlCode: `<input
  type="range"
  min="0"
  max="100"
  class="slider-spinning-neon"
/>`,
    cssCode: `.slider-spinning-neon {
  width: 100%;
  height: 1.5rem;
  background: #000000;
  border: 4px solid #22d3ee;
  border-radius: 9999px;
  box-shadow: 0 0 20px #22d3ee;
  animation: spin 2s linear infinite;
  -webkit-appearance: none;
  appearance: none;
  outline: none;
}

.slider-spinning-neon::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 2.5rem;
  height: 2.5rem;
  background: #9333ea;
  border: 4px solid #fde047;
  border-radius: 50%;
  animation: spin 2s linear infinite;
  cursor: grab;
}

.slider-spinning-neon::-moz-range-thumb {
  width: 2.5rem;
  height: 2.5rem;
  background: #9333ea;
  border: 4px solid #fde047;
  border-radius: 50%;
  animation: spin 2s linear infinite;
  cursor: grab;
}

.slider-spinning-neon::-webkit-slider-track {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 1.5rem;
  background: #000000;
  border-radius: 9999px;
}

.slider-spinning-neon::-moz-range-track {
  width: 100%;
  height: 1.5rem;
  background: #000000;
  border-radius: 9999px;
  border: none;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}`
  },

  slider3: {
    name: 'Pulsing Glow Slider',
    className: 'slider-pulsing-glow',
    reactCode: `<input
  type="range"
  min="0"
  max="100"
  className="slider-pulsing-glow"
/>`,
    htmlCode: `<input
  type="range"
  min="0"
  max="100"
  class="slider-pulsing-glow"
/>`,
    cssCode: `.slider-pulsing-glow {
  width: 100%;
  height: 2.5rem;
  background: #ef4444;
  border: none;
  border-radius: 0;
  transform: skewX(-6deg);
  box-shadow: 0 0 30px #ef4444;
  animation: pulse 0.5s infinite;
  -webkit-appearance: none;
  appearance: none;
  outline: none;
}

.slider-pulsing-glow::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 3.5rem;
  height: 3.5rem;
  background: #84cc16;
  border: 4px solid #000000;
  border-radius: 0.5rem;
  animation: pulse 0.5s infinite;
  cursor: grab;
}

.slider-pulsing-glow::-moz-range-thumb {
  width: 3.5rem;
  height: 3.5rem;
  background: #84cc16;
  border: 4px solid #000000;
  border-radius: 0.5rem;
  animation: pulse 0.5s infinite;
  cursor: grab;
}

.slider-pulsing-glow::-webkit-slider-track {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 2.5rem;
  background: #ef4444;
  border-radius: 0;
}

.slider-pulsing-glow::-moz-range-track {
  width: 100%;
  height: 2.5rem;
  background: #ef4444;
  border-radius: 0;
  border: none;
}

@keyframes pulse {
  0%, 100% { transform: skewX(-6deg) scale(1); }
  50% { transform: skewX(-6deg) scale(1.05); }
}`
  },

  slider4: {
    name: 'Bouncing Comic Slider',
    className: 'slider-bouncing-comic',
    reactCode: `<input
  type="range"
  min="0"
  max="100"
  className="slider-bouncing-comic"
/>`,
    htmlCode: `<input
  type="range"
  min="0"
  max="100"
  class="slider-bouncing-comic"
/>`,
    cssCode: `.slider-bouncing-comic {
  width: 100%;
  height: 2rem;
  background: #2563eb;
  border: 8px dashed #facc15;
  border-radius: 9999px;
  animation: bounce 0.8s infinite;
  -webkit-appearance: none;
  appearance: none;
  outline: none;
}

.slider-bouncing-comic::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 3rem;
  height: 3rem;
  background: #f97316;
  border: 4px solid #ffffff;
  border-radius: 50%;
  animation: bounce 0.8s infinite;
  cursor: grab;
}

.slider-bouncing-comic::-moz-range-thumb {
  width: 3rem;
  height: 3rem;
  background: #f97316;
  border: 4px solid #ffffff;
  border-radius: 50%;
  animation: bounce 0.8s infinite;
  cursor: grab;
}

.slider-bouncing-comic::-webkit-slider-track {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 2rem;
  background: #2563eb;
  border-radius: 9999px;
}

.slider-bouncing-comic::-moz-range-track {
  width: 100%;
  height: 2rem;
  background: #2563eb;
  border-radius: 9999px;
  border: none;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}`
  },

  slider5: {
    name: 'Color Flip Slider',
    className: 'slider-color-flip',
    reactCode: `<input
  type="range"
  min="0"
  max="100"
  className="slider-color-flip"
/>`,
    htmlCode: `<input
  type="range"
  min="0"
  max="100"
  class="slider-color-flip"
/>`,
    cssCode: `.slider-color-flip {
  width: 100%;
  height: 2.25rem;
  background: linear-gradient(to right, #9333ea, #db2777);
  border: 4px solid #000000;
  border-radius: 0.5rem;
  animation: colorflip 1s infinite;
  transform: rotate(2deg);
  -webkit-appearance: none;
  appearance: none;
  outline: none;
}

.slider-color-flip::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 2.75rem;
  height: 2.75rem;
  background: linear-gradient(to right, #22d3ee, #fde047);
  border: 4px solid #000000;
  border-radius: 50%;
  animation: colorflip 1s infinite;
  cursor: grab;
}

.slider-color-flip::-moz-range-thumb {
  width: 2.75rem;
  height: 2.75rem;
  background: linear-gradient(to right, #22d3ee, #fde047);
  border: 4px solid #000000;
  border-radius: 50%;
  animation: colorflip 1s infinite;
  cursor: grab;
}

.slider-color-flip::-webkit-slider-track {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 2.25rem;
  background: linear-gradient(to right, #9333ea, #db2777);
  border-radius: 0.5rem;
}

.slider-color-flip::-moz-range-track {
  width: 100%;
  height: 2.25rem;
  background: linear-gradient(to right, #9333ea, #db2777);
  border-radius: 0.5rem;
  border: none;
}

@keyframes colorflip {
  0% { filter: hue-rotate(0deg); }
  100% { filter: hue-rotate(360deg); }
}`
  },

  slider6: {
    name: 'Wobbly 3D Slider',
    className: 'slider-wobbly-3d',
    reactCode: `<input
  type="range"
  min="0"
  max="100"
  className="slider-wobbly-3d"
/>`,
    htmlCode: `<input
  type="range"
  min="0"
  max="100"
  class="slider-wobbly-3d"
/>`,
    cssCode: `.slider-wobbly-3d {
  width: 100%;
  height: 2.5rem;
  background: #22c55e;
  border: none;
  box-shadow: 0 0 30px #22c55e;
  border-bottom: 4px solid #000000;
  border-right: 4px solid #000000;
  animation: wobble 0.6s infinite;
  -webkit-appearance: none;
  appearance: none;
  outline: none;
}

.slider-wobbly-3d::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 4rem;
  height: 4rem;
  background: #ef4444;
  border: 4px solid #000000;
  border-radius: 50%;
  box-shadow: 0 0 20px #3b82f6;
  animation: wobble 0.6s infinite;
  cursor: grab;
}

.slider-wobbly-3d::-moz-range-thumb {
  width: 4rem;
  height: 4rem;
  background: #ef4444;
  border: 4px solid #000000;
  border-radius: 50%;
  box-shadow: 0 0 20px #3b82f6;
  animation: wobble 0.6s infinite;
  cursor: grab;
}

.slider-wobbly-3d::-webkit-slider-track {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 2.5rem;
  background: #22c55e;
}

.slider-wobbly-3d::-moz-range-track {
  width: 100%;
  height: 2.5rem;
  background: #22c55e;
  border: none;
}

@keyframes wobble {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-2deg) scale(1.05); }
  75% { transform: rotate(2deg) scale(0.95); }
}`
  }
};

export function SliderSample() {
  const [selectedSlider, setSelectedSlider] = useState('slider1');
  const [viewMode, setViewMode] = useState('preview');
  const [codeLanguage, setCodeLanguage] = useState('react');
  const [styleType, setStyleType] = useState('tailwindcss');
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedCss, setCopiedCss] = useState(false);
  const [sliderValue, setSliderValue] = useState(50);

  const config = sliderConfigs[selectedSlider];

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
        ? `<input\n  type="range"\n  min="0"\n  max="100"\n  className="slider-custom"\n/>`
        : `<input\n  type="range"\n  min="0"\n  max="100"\n  class="slider-custom"\n/>`;
    }
  };

  const getFontFamily = () => {
    switch (selectedSlider) {
      case 'slider1': return FONTS.COMIC_SANS;
      case 'slider2': return FONTS.PAPYRUS;
      case 'slider3': return FONTS.IMPACT;
      case 'slider4': return FONTS.COMIC_SANS;
      case 'slider5': return FONTS.BRUSH_SCRIPT;
      case 'slider6': return FONTS.WINGDINGS;
      default: return FONTS.COMIC_SANS;
    }
  };

  const getValueDisplay = () => {
    let emoji = '😐';
    if (sliderValue < 20) emoji = '😭';
    else if (sliderValue < 40) emoji = '😟';
    else if (sliderValue < 60) emoji = '😐';
    else if (sliderValue < 80) emoji = '😊';
    else emoji = '🤩';
    
    return `${sliderValue}% ${emoji}`;
  };

  return (
    <div className="min-h-screen p-4 md:p-8" style={{ 
      background: 'linear-gradient(45deg, #FF00FF 0%, #00FFFF 25%, #FFFF00 50%, #FFA500 75%, #FF69B4 100%)',
      fontFamily: FONTS.COMIC_SANS
    }}>
      <style>{`
        ${config.cssCode}
        
        /* Additional global styles */
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
          50% { transform: scale(1.05); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes colorflip {
          0% { filter: hue-rotate(0deg); }
          100% { filter: hue-rotate(360deg); }
        }
        @keyframes wobble {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-2deg) scale(1.05); }
          75% { transform: rotate(2deg) scale(0.95); }
        }
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
            🎚️ DUMBUI SLIDERS 🎚️
          </h1>
          <p
            className="text-xl md:text-2xl font-bold"
            style={{ fontFamily: FONTS.BRUSH_SCRIPT, color: COLORS.CYAN, textShadow: '2px 2px 0 #000' }}
          >
            The MOST Frustrating Sliders on the Web!
          </p>
        </div>

        <div className="mb-6 bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-500 p-4 border-8 border-red-600 transform rotate-1">
          <div className="flex flex-wrap gap-3 justify-center">
            {Object.keys(sliderConfigs).map((slider) => (
              <button
                key={slider}
                onClick={() => setSelectedSlider(slider)}
                className={`px-4 py-2 font-black text-sm border-4 transition-all ${
                  selectedSlider === slider
                    ? 'bg-lime-400 text-black border-black scale-110 shake'
                    : 'bg-purple-600 text-yellow-300 border-yellow-300 hover:scale-105'
                }`}
                style={{ fontFamily: FONTS.PAPYRUS }}
              >
                {sliderConfigs[slider].name.toUpperCase()}
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
              
              {/* Single Slider Display */}
              <div className="w-full max-w-2xl bg-black/30 p-8 border-4 border-white transform scale-110">
                <div className="text-center mb-6">
                  <label className="text-white font-bold text-xl block mb-4" style={{ fontFamily: FONTS.COMIC_SANS, textShadow: '2px 2px 0 #000' }}>
                    ADJUST THE TERRIBLE SLIDER:
                  </label>
                  <div className="text-3xl font-black text-yellow-300 mb-2" style={{ fontFamily: getFontFamily() }}>
                    {getValueDisplay()}
                  </div>
                </div>
                
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderValue}
                  onChange={(e) => setSliderValue(parseInt(e.target.value))}
                  className={config.className}
                />
                
                <div className="flex justify-between mt-4 text-white font-bold" style={{ fontFamily: FONTS.COMIC_SANS }}>
                  <span>😭 AWFUL</span>
                  <span>😐 MEH</span>
                  <span>🤩 AMAZING</span>
                </div>
              </div>

              {/* Slider Selection Indicator */}
              <div className="mt-8 bg-black/50 p-4 border-4 border-yellow-400 rounded-lg">
                <p className="text-white font-bold text-lg text-center" style={{ fontFamily: FONTS.COMIC_SANS }}>
                  Currently viewing: <span className="text-yellow-300">{config.name}</span>
                </p>
                <p className="text-cyan-300 text-center mt-2" style={{ fontFamily: FONTS.TIMES_NEW_ROMAN }}>
                  Use the buttons above to switch between different terrible sliders!
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
            ⚠️ WARNING: These sliders may cause MOTION SICKNESS and FRUSTRATION! ⚠️
          </p>
        </div>
      </div>
    </div>
  );
}