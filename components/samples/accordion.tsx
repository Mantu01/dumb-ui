import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy, ChevronDown, ChevronUp } from 'lucide-react';

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

const accordionConfigs = {
  accordion1: {
    name: 'Shaky Rainbow Accordion',
    className: 'shake border-8 border-black bg-gradient-to-r from-red-500 via-green-500 to-blue-500',
    headerClassName: 'shake bg-yellow-400 text-black font-black text-xl p-6 border-b-4 border-black',
    contentClassName: 'shake bg-white text-black font-bold p-6 border-t-4 border-black',
    reactCode: `<div className="shake border-8 border-black bg-gradient-to-r from-red-500 via-green-500 to-blue-500">
  <button 
    className="shake bg-yellow-400 text-black font-black text-xl p-6 border-b-4 border-black w-full text-left"
    onClick={() => setIsOpen(!isOpen)}
  >
    📢 CLICK ME! I SHAKE! 📢
    {isOpen ? <ChevronUp className="float-right" /> : <ChevronDown className="float-right" />}
  </button>
  {isOpen && (
    <div className="shake bg-white text-black font-bold p-6 border-t-4 border-black">
      🎉 WOW! This content is SHAKING! 🎉<br/>
      Can you even read this while it's moving?<br/>
      So annoying! So terrible! Perfect! ✨
    </div>
  )}
</div>`,
    htmlCode: `<div class="shake border-8 border-black bg-gradient-to-r from-red-500 via-green-500 to-blue-500">
  <button class="shake bg-yellow-400 text-black font-black text-xl p-6 border-b-4 border-black w-full text-left">
    📢 CLICK ME! I SHAKE! 📢
    <span class="float-right">▼</span>
  </button>
  <div class="shake bg-white text-black font-bold p-6 border-t-4 border-black">
    🎉 WOW! This content is SHAKING! 🎉<br/>
    Can you even read this while it's moving?<br/>
    So annoying! So terrible! Perfect! ✨
  </div>
</div>`,
    cssCode: `.accordion-shaky-rainbow {
  border: 8px solid #000000;
  background: linear-gradient(to right, #ef4444, #22c55e, #3b82f6);
  animation: shake 0.3s infinite;
}

.accordion-shaky-rainbow-header {
  background: #facc15;
  color: #000000;
  font-weight: 900;
  font-size: 1.25rem;
  padding: 1.5rem;
  border-bottom: 4px solid #000000;
  animation: shake 0.3s infinite;
  width: 100%;
  text-align: left;
}

.accordion-shaky-rainbow-content {
  background: #ffffff;
  color: #000000;
  font-weight: 700;
  padding: 1.5rem;
  border-top: 4px solid #000000;
  animation: shake 0.3s infinite;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}`
  },

  accordion2: {
    name: 'Spinning Neon Accordion',
    className: 'spin-slow border-4 border-cyan-400 bg-black text-cyan-300 shadow-lg shadow-cyan-400',
    headerClassName: 'spin-slow bg-purple-600 text-yellow-300 font-black text-xl p-6 border-b-4 border-yellow-300',
    contentClassName: 'spin-slow bg-gray-900 text-pink-300 font-bold p-6 border-t-4 border-yellow-300',
    reactCode: `<div className="spin-slow border-4 border-cyan-400 bg-black text-cyan-300 shadow-lg shadow-cyan-400">
  <button 
    className="spin-slow bg-purple-600 text-yellow-300 font-black text-xl p-6 border-b-4 border-yellow-300 w-full text-left"
    onClick={() => setIsOpen(!isOpen)}
  >
    🌪️ SPINNING SECTION! 🌪️
    {isOpen ? <ChevronUp className="float-right" /> : <ChevronDown className="float-right" />}
  </button>
  {isOpen && (
    <div className="spin-slow bg-gray-900 text-pink-300 font-bold p-6 border-t-4 border-yellow-300">
      🌀 Everything is SPINNING! 🌀<br/>
      Reading this content might make you dizzy!<br/>
      Perfect for causing motion sickness! 🤢
    </div>
  )}
</div>`,
    htmlCode: `<div class="spin-slow border-4 border-cyan-400 bg-black text-cyan-300 shadow-lg shadow-cyan-400">
  <button class="spin-slow bg-purple-600 text-yellow-300 font-black text-xl p-6 border-b-4 border-yellow-300 w-full text-left">
    🌪️ SPINNING SECTION! 🌪️
    <span class="float-right">▼</span>
  </button>
  <div class="spin-slow bg-gray-900 text-pink-300 font-bold p-6 border-t-4 border-yellow-300">
    🌀 Everything is SPINNING! 🌀<br/>
    Reading this content might make you dizzy!<br/>
    Perfect for causing motion sickness! 🤢
  </div>
</div>`,
    cssCode: `.accordion-spinning-neon {
  border: 4px solid #22d3ee;
  background: #000000;
  color: #67e8f9;
  box-shadow: 0 0 20px #22d3ee;
  animation: spin 3s linear infinite;
}

.accordion-spinning-neon-header {
  background: #9333ea;
  color: #fde047;
  font-weight: 900;
  font-size: 1.25rem;
  padding: 1.5rem;
  border-bottom: 4px solid #fde047;
  animation: spin 3s linear infinite;
  width: 100%;
  text-align: left;
}

.accordion-spinning-neon-content {
  background: #1f2937;
  color: #f9a8d4;
  font-weight: 700;
  padding: 1.5rem;
  border-top: 4px solid #fde047;
  animation: spin 3s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}`
  },

  accordion3: {
    name: 'Pulsing Glow Accordion',
    className: 'pulse-fast border-0 bg-red-500 shadow-2xl shadow-red-500 rounded-none transform skew-x-6',
    headerClassName: 'pulse-fast bg-lime-400 text-black font-black text-2xl p-7 border-b-0',
    contentClassName: 'pulse-fast bg-yellow-300 text-red-600 font-bold p-7 border-t-0',
    reactCode: `<div className="pulse-fast border-0 bg-red-500 shadow-2xl shadow-red-500 rounded-none transform skew-x-6">
  <button 
    className="pulse-fast bg-lime-400 text-black font-black text-2xl p-7 border-b-0 w-full text-left"
    onClick={() => setIsOpen(!isOpen)}
  >
    💥 PULSING EXPANDER! 💥
    {isOpen ? <ChevronUp className="float-right" /> : <ChevronDown className="float-right" />}
  </button>
  {isOpen && (
    <div className="pulse-fast bg-yellow-300 text-red-600 font-bold p-7 border-t-0">
      🔥 PULSE PULSE PULSE! 🔥<br/>
      This content keeps growing and shrinking!<br/>
      Very distracting! Very terrible! 👏
    </div>
  )}
</div>`,
    htmlCode: `<div class="pulse-fast border-0 bg-red-500 shadow-2xl shadow-red-500 rounded-none transform skew-x-6">
  <button class="pulse-fast bg-lime-400 text-black font-black text-2xl p-7 border-b-0 w-full text-left">
    💥 PULSING EXPANDER! 💥
    <span class="float-right">▼</span>
  </button>
  <div class="pulse-fast bg-yellow-300 text-red-600 font-bold p-7 border-t-0">
    🔥 PULSE PULSE PULSE! 🔥<br/>
    This content keeps growing and shrinking!<br/>
    Very distracting! Very terrible! 👏
  </div>
</div>`,
    cssCode: `.accordion-pulsing-glow {
  border: none;
  background: #ef4444;
  box-shadow: 0 0 30px #ef4444;
  border-radius: 0;
  transform: skewX(-6deg);
  animation: pulse 0.8s infinite;
}

.accordion-pulsing-glow-header {
  background: #84cc16;
  color: #000000;
  font-weight: 900;
  font-size: 1.5rem;
  padding: 1.75rem;
  border-bottom: none;
  animation: pulse 0.8s infinite;
  width: 100%;
  text-align: left;
}

.accordion-pulsing-glow-content {
  background: #fef08a;
  color: #dc2626;
  font-weight: 700;
  padding: 1.75rem;
  border-top: none;
  animation: pulse 0.8s infinite;
}

@keyframes pulse {
  0%, 100% { transform: skewX(-6deg) scale(1); }
  50% { transform: skewX(-6deg) scale(1.05); }
}`
  },

  accordion4: {
    name: 'Bouncing Comic Accordion',
    className: 'bounce border-8 border-dashed border-yellow-400 bg-blue-600 rounded-full',
    headerClassName: 'bounce bg-orange-500 text-white font-black text-xl p-6 border-b-4 border-dashed border-white rounded-t-full',
    contentClassName: 'bounce bg-green-500 text-black font-bold p-6 border-t-4 border-dashed border-white rounded-b-full',
    reactCode: `<div className="bounce border-8 border-dashed border-yellow-400 bg-blue-600 rounded-full">
  <button 
    className="bounce bg-orange-500 text-white font-black text-xl p-6 border-b-4 border-dashed border-white rounded-t-full w-full text-left"
    onClick={() => setIsOpen(!isOpen)}
  >
    🏀 BOUNCING ACCORDION! 🏀
    {isOpen ? <ChevronUp className="float-right" /> : <ChevronDown className="float-right" />}
  </button>
  {isOpen && (
    <div className="bounce bg-green-500 text-black font-bold p-6 border-t-4 border-dashed border-white rounded-b-full">
      🎯 UP AND DOWN WE GO! 🎯<br/>
      This content won't stay still!<br/>
      Try to read it while it bounces! 😵
    </div>
  )}
</div>`,
    htmlCode: `<div class="bounce border-8 border-dashed border-yellow-400 bg-blue-600 rounded-full">
  <button class="bounce bg-orange-500 text-white font-black text-xl p-6 border-b-4 border-dashed border-white rounded-t-full w-full text-left">
    🏀 BOUNCING ACCORDION! 🏀
    <span class="float-right">▼</span>
  </button>
  <div class="bounce bg-green-500 text-black font-bold p-6 border-t-4 border-dashed border-white rounded-b-full">
    🎯 UP AND DOWN WE GO! 🎯<br/>
    This content won't stay still!<br/>
    Try to read it while it bounces! 😵
  </div>
</div>`,
    cssCode: `.accordion-bouncing-comic {
  border: 8px dashed #facc15;
  background: #2563eb;
  border-radius: 9999px;
  animation: bounce 1s infinite;
}

.accordion-bouncing-comic-header {
  background: #f97316;
  color: #ffffff;
  font-weight: 900;
  font-size: 1.25rem;
  padding: 1.5rem;
  border-bottom: 4px dashed #ffffff;
  border-radius: 9999px 9999px 0 0;
  animation: bounce 1s infinite;
  width: 100%;
  text-align: left;
}

.accordion-bouncing-comic-content {
  background: #22c55e;
  color: #000000;
  font-weight: 700;
  padding: 1.5rem;
  border-top: 4px dashed #ffffff;
  border-radius: 0 0 9999px 9999px;
  animation: bounce 1s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}`
  },

  accordion5: {
    name: 'Color Flip Accordion',
    className: 'colorflip-fast border-4 border-black bg-gradient-to-r from-purple-600 to-pink-600 transform rotate-3',
    headerClassName: 'colorflip-fast bg-cyan-400 text-black font-black text-xl p-6 border-b-4 border-black',
    contentClassName: 'colorflip-fast bg-yellow-300 text-purple-600 font-bold p-6 border-t-4 border-black',
    reactCode: `<div className="colorflip-fast border-4 border-black bg-gradient-to-r from-purple-600 to-pink-600 transform rotate-3">
  <button 
    className="colorflip-fast bg-cyan-400 text-black font-black text-xl p-6 border-b-4 border-black w-full text-left"
    onClick={() => setIsOpen(!isOpen)}
  >
    🌈 COLOR SHIFTING! 🌈
    {isOpen ? <ChevronUp className="float-right" /> : <ChevronDown className="float-right" />}
  </button>
  {isOpen && (
    <div className="colorflip-fast bg-yellow-300 text-purple-600 font-bold p-6 border-t-4 border-black">
      🎨 COLORS EVERYWHERE! 🎨<br/>
      The colors keep changing rapidly!<br/>
      Can you focus on the text? Probably not! 😵‍💫
    </div>
  )}
</div>`,
    htmlCode: `<div class="colorflip-fast border-4 border-black bg-gradient-to-r from-purple-600 to-pink-600 transform rotate-3">
  <button class="colorflip-fast bg-cyan-400 text-black font-black text-xl p-6 border-b-4 border-black w-full text-left">
    🌈 COLOR SHIFTING! 🌈
    <span class="float-right">▼</span>
  </button>
  <div class="colorflip-fast bg-yellow-300 text-purple-600 font-bold p-6 border-t-4 border-black">
    🎨 COLORS EVERYWHERE! 🎨<br/>
    The colors keep changing rapidly!<br/>
    Can you focus on the text? Probably not! 😵‍💫
  </div>
</div>`,
    cssCode: `.accordion-color-flip {
  border: 4px solid #000000;
  background: linear-gradient(to right, #9333ea, #db2777);
  animation: colorflip 1.5s infinite;
  transform: rotate(3deg);
}

.accordion-color-flip-header {
  background: #22d3ee;
  color: #000000;
  font-weight: 900;
  font-size: 1.25rem;
  padding: 1.5rem;
  border-bottom: 4px solid #000000;
  animation: colorflip 1.5s infinite;
  width: 100%;
  text-align: left;
}

.accordion-color-flip-content {
  background: #fef08a;
  color: #9333ea;
  font-weight: 700;
  padding: 1.5rem;
  border-top: 4px solid #000000;
  animation: colorflip 1.5s infinite;
}

@keyframes colorflip {
  0% { filter: hue-rotate(0deg); }
  100% { filter: hue-rotate(360deg); }
}`
  },

  accordion6: {
    name: 'Wobbly 3D Accordion',
    className: 'wobble border-0 bg-green-500 shadow-2xl shadow-green-500 border-b-8 border-r-8 border-black',
    headerClassName: 'wobble bg-red-500 text-black font-black text-2xl p-7 border-b-4 border-black',
    contentClassName: 'wobble bg-blue-500 text-white font-bold p-7 border-t-4 border-black',
    reactCode: `<div className="wobble border-0 bg-green-500 shadow-2xl shadow-green-500 border-b-8 border-r-8 border-black">
  <button 
    className="wobble bg-red-500 text-black font-black text-2xl p-7 border-b-4 border-black w-full text-left"
    onClick={() => setIsOpen(!isOpen)}
  >
    🎪 WOBBLY EXPANDO! 🎪
    {isOpen ? <ChevronUp className="float-right" /> : <ChevronDown className="float-right" />}
  </button>
  {isOpen && (
    <div className="wobble bg-blue-500 text-white font-bold p-7 border-t-4 border-black">
      🎭 WIGGLE WIGGLE WIGGLE! 🎭<br/>
      Everything wobbles and shakes!<br/>
      So unstable! So terrible! Perfect! 🥴
    </div>
  )}
</div>`,
    htmlCode: `<div class="wobble border-0 bg-green-500 shadow-2xl shadow-green-500 border-b-8 border-r-8 border-black">
  <button class="wobble bg-red-500 text-black font-black text-2xl p-7 border-b-4 border-black w-full text-left">
    🎪 WOBBLY EXPANDO! 🎪
    <span class="float-right">▼</span>
  </button>
  <div class="wobble bg-blue-500 text-white font-bold p-7 border-t-4 border-black">
    🎭 WIGGLE WIGGLE WIGGLE! 🎭<br/>
    Everything wobbles and shakes!<br/>
    So unstable! So terrible! Perfect! 🥴
  </div>
</div>`,
    cssCode: `.accordion-wobbly-3d {
  border: none;
  background: #22c55e;
  box-shadow: 0 0 30px #22c55e;
  border-bottom: 8px solid #000000;
  border-right: 8px solid #000000;
  animation: wobble 0.7s infinite;
}

.accordion-wobbly-3d-header {
  background: #ef4444;
  color: #000000;
  font-weight: 900;
  font-size: 1.5rem;
  padding: 1.75rem;
  border-bottom: 4px solid #000000;
  animation: wobble 0.7s infinite;
  width: 100%;
  text-align: left;
}

.accordion-wobbly-3d-content {
  background: #3b82f6;
  color: #ffffff;
  font-weight: 700;
  padding: 1.75rem;
  border-top: 4px solid #000000;
  animation: wobble 0.7s infinite;
}

@keyframes wobble {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-3deg) scale(1.05); }
  75% { transform: rotate(3deg) scale(0.95); }
}`
  }
};

export function AccordionSample() {
  const [selectedAccordion, setSelectedAccordion] = useState('accordion1');
  const [viewMode, setViewMode] = useState('preview');
  const [codeLanguage, setCodeLanguage] = useState('react');
  const [styleType, setStyleType] = useState('tailwindcss');
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedCss, setCopiedCss] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const config = accordionConfigs[selectedAccordion];

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
        ? `<div className="accordion-custom">\n  {/* Accordion content */}\n</div>`
        : `<div class="accordion-custom">\n  <!-- Accordion content -->\n</div>`;
    }
  };

  const getFontFamily = () => {
    switch (selectedAccordion) {
      case 'accordion1': return FONTS.COMIC_SANS;
      case 'accordion2': return FONTS.PAPYRUS;
      case 'accordion3': return FONTS.IMPACT;
      case 'accordion4': return FONTS.COMIC_SANS;
      case 'accordion5': return FONTS.BRUSH_SCRIPT;
      case 'accordion6': return FONTS.WINGDINGS;
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
          50% { transform: scale(1.05); }
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
            📖 DUMBUI ACCORDIONS 📖
          </h1>
          <p
            className="text-xl md:text-2xl font-bold"
            style={{ fontFamily: FONTS.BRUSH_SCRIPT, color: COLORS.CYAN, textShadow: '2px 2px 0 #000' }}
          >
            The MOST Annoying Expandable Sections!
          </p>
        </div>

        <div className="mb-6 bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-500 p-4 border-8 border-red-600 transform rotate-1">
          <div className="flex flex-wrap gap-3 justify-center">
            {Object.keys(accordionConfigs).map((accordion) => (
              <button
                key={accordion}
                onClick={() => setSelectedAccordion(accordion)}
                className={`px-4 py-2 font-black text-sm border-4 transition-all ${
                  selectedAccordion === accordion
                    ? 'bg-lime-400 text-black border-black scale-110 shake'
                    : 'bg-purple-600 text-yellow-300 border-yellow-300 hover:scale-105'
                }`}
                style={{ fontFamily: FONTS.PAPYRUS }}
              >
                {accordionConfigs[accordion].name.toUpperCase()}
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
              
              {/* Single Accordion Display */}
              <div className="w-full max-w-2xl transform scale-110">
                <div 
                  className={config.className}
                  style={{ fontFamily: getFontFamily() }}
                >
                  <button 
                    className={config.headerClassName}
                    onClick={() => setIsOpen(!isOpen)}
                    style={{ fontFamily: getFontFamily() }}
                  >
                    {selectedAccordion === 'accordion1' && '📢 CLICK ME! I SHAKE! 📢'}
                    {selectedAccordion === 'accordion2' && '🌪️ SPINNING SECTION! 🌪️'}
                    {selectedAccordion === 'accordion3' && '💥 PULSING EXPANDER! 💥'}
                    {selectedAccordion === 'accordion4' && '🏀 BOUNCING ACCORDION! 🏀'}
                    {selectedAccordion === 'accordion5' && '🌈 COLOR SHIFTING! 🌈'}
                    {selectedAccordion === 'accordion6' && '🎪 WOBBLY EXPANDO! 🎪'}
                    {isOpen ? 
                      <ChevronUp className="float-right" size={24} /> : 
                      <ChevronDown className="float-right" size={24} />
                    }
                  </button>
                  {isOpen && (
                    <div 
                      className={config.contentClassName}
                      style={{ fontFamily: getFontFamily() }}
                    >
                      {selectedAccordion === 'accordion1' && '🎉 WOW! This content is SHAKING! 🎉<br/>Can you even read this while it\'s moving?<br/>So annoying! So terrible! Perfect! ✨'}
                      {selectedAccordion === 'accordion2' && '🌀 Everything is SPINNING! 🌀<br/>Reading this content might make you dizzy!<br/>Perfect for causing motion sickness! 🤢'}
                      {selectedAccordion === 'accordion3' && '🔥 PULSE PULSE PULSE! 🔥<br/>This content keeps growing and shrinking!<br/>Very distracting! Very terrible! 👏'}
                      {selectedAccordion === 'accordion4' && '🎯 UP AND DOWN WE GO! 🎯<br/>This content won\'t stay still!<br/>Try to read it while it bounces! 😵'}
                      {selectedAccordion === 'accordion5' && '🎨 COLORS EVERYWHERE! 🎨<br/>The colors keep changing rapidly!<br/>Can you focus on the text? Probably not! 😵‍💫'}
                      {selectedAccordion === 'accordion6' && '🎭 WIGGLE WIGGLE WIGGLE! 🎭<br/>Everything wobbles and shakes!<br/>So unstable! So terrible! Perfect! 🥴'}
                    </div>
                  )}
                </div>
              </div>

              {/* Accordion Selection Indicator */}
              <div className="mt-8 bg-black/50 p-4 border-4 border-yellow-400 rounded-lg">
                <p className="text-white font-bold text-lg text-center" style={{ fontFamily: FONTS.COMIC_SANS }}>
                  Currently viewing: <span className="text-yellow-300">{config.name}</span>
                </p>
                <p className="text-cyan-300 text-center mt-2" style={{ fontFamily: FONTS.TIMES_NEW_ROMAN }}>
                  Click the header to expand/collapse this terrible accordion!
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
            ⚠️ WARNING: These accordions may cause HEADACHES and CONFUSION! ⚠️
          </p>
        </div>
      </div>
    </div>
  );
}