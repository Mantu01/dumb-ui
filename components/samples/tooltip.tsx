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

const tooltipConfigs = {
  tooltip1: {
    name: 'Shaky Rainbow Tooltip',
    className: 'relative group',
    triggerText: 'Hover Me!',
    tooltipContent: '🌈 SURPRISE! 🌈',
    reactCode: `<div className="relative group">
  <button className="px-6 py-3 bg-lime-400 text-black font-black text-lg border-4 border-black shake">
    Hover Me!
  </button>
  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-6 py-4 bg-gradient-to-r from-red-500 via-yellow-500 to-purple-500 text-black font-black text-xl border-8 border-black rounded-lg shake opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
    🌈 SURPRISE! 🌈
    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-8 border-transparent border-t-black"></div>
  </div>
</div>`,
    htmlCode: `<div class="relative group">
  <button class="px-6 py-3 bg-lime-400 text-black font-black text-lg border-4 border-black shake">
    Hover Me!
  </button>
  <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-6 py-4 bg-gradient-to-r from-red-500 via-yellow-500 to-purple-500 text-black font-black text-xl border-8 border-black rounded-lg shake opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
    🌈 SURPRISE! 🌈
    <div class="absolute top-full left-1/2 transform -translate-x-1/2 border-8 border-transparent border-t-black"></div>
  </div>
</div>`,
    cssCode: `.tooltip-shaky-rainbow {
  position: relative;
  display: inline-block;
}

.tooltip-shaky-rainbow .trigger {
  padding: 0.75rem 1.5rem;
  background-color: #84cc16;
  color: #000000;
  font-weight: 900;
  font-size: 1.125rem;
  border: 4px solid #000000;
  animation: shake 0.5s infinite;
}

.tooltip-shaky-rainbow .tooltip {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 0.5rem;
  padding: 1rem 1.5rem;
  background: linear-gradient(to right, #ef4444, #eab308, #a855f7);
  color: #000000;
  font-weight: 900;
  font-size: 1.25rem;
  border: 8px solid #000000;
  border-radius: 0.5rem;
  animation: shake 0.3s infinite;
  opacity: 0;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.tooltip-shaky-rainbow:hover .tooltip {
  opacity: 1;
}

.tooltip-shaky-rainbow .tooltip::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 8px solid transparent;
  border-top-color: #000000;
}

@keyframes shake {
  0%, 100% { transform: translateX(-50%) translateX(0); }
  25% { transform: translateX(-50%) translateX(-5px); }
  75% { transform: translateX(-50%) translateX(5px); }
}`
  },

  tooltip2: {
    name: 'Blinking Neon Tooltip',
    className: 'relative group',
    triggerText: 'NEON HOVER',
    tooltipContent: '💡 BRIGHT IDEA! 💡',
    reactCode: `<div className="relative group">
  <button className="px-8 py-4 bg-black text-cyan-400 font-black text-xl border-4 border-cyan-400 blink shadow-lg">
    NEON HOVER
  </button>
  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-8 py-4 bg-black text-cyan-400 font-black text-2xl border-6 border-cyan-400 rounded-full blink opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap">
    💡 BRIGHT IDEA! 💡
    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 border-6 border-transparent border-b-cyan-400"></div>
  </div>
</div>`,
    htmlCode: `<div class="relative group">
  <button class="px-8 py-4 bg-black text-cyan-400 font-black text-xl border-4 border-cyan-400 blink shadow-lg">
    NEON HOVER
  </button>
  <div class="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-8 py-4 bg-black text-cyan-400 font-black text-2xl border-6 border-cyan-400 rounded-full blink opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap">
    💡 BRIGHT IDEA! 💡
    <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 border-6 border-transparent border-b-cyan-400"></div>
  </div>
</div>`,
    cssCode: `.tooltip-blinking-neon {
  position: relative;
  display: inline-block;
}

.tooltip-blinking-neon .trigger {
  padding: 1rem 2rem;
  background-color: #000000;
  color: #00ffff;
  font-weight: 900;
  font-size: 1.25rem;
  border: 4px solid #00ffff;
  animation: blink 0.8s infinite;
  text-shadow: 0 0 10px #00ffff;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
}

.tooltip-blinking-neon .tooltip {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 0.5rem;
  padding: 1rem 2rem;
  background-color: #000000;
  color: #00ffff;
  font-weight: 900;
  font-size: 1.5rem;
  border: 6px solid #00ffff;
  border-radius: 9999px;
  animation: blink 0.5s infinite;
  text-shadow: 0 0 10px #00ffff;
  opacity: 0;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.tooltip-blinking-neon:hover .tooltip {
  opacity: 1;
}

.tooltip-blinking-neon .tooltip::after {
  content: '';
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 6px solid transparent;
  border-bottom-color: #00ffff;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0.3; }
}`
  },

  tooltip3: {
    name: 'Spinning 3D Tooltip',
    className: 'relative group',
    triggerText: 'SPIN ME!',
    tooltipContent: '🌀 WHEEE! 🌀',
    reactCode: `<div className="relative group">
  <button className="px-10 py-5 bg-red-500 text-white font-black text-2xl border-8 border-white rounded-xl spin-slow">
    SPIN ME!
  </button>
  <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 px-10 py-5 bg-blue-500 text-yellow-300 font-black text-2xl border-10 border-yellow-300 rounded-lg spin-fast opacity-0 group-hover:opacity-100 transition-all duration-500 whitespace-nowrap">
    🌀 WHEEE! 🌀
    <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-10 border-transparent border-r-yellow-300"></div>
  </div>
</div>`,
    htmlCode: `<div class="relative group">
  <button class="px-10 py-5 bg-red-500 text-white font-black text-2xl border-8 border-white rounded-xl spin-slow">
    SPIN ME!
  </button>
  <div class="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 px-10 py-5 bg-blue-500 text-yellow-300 font-black text-2xl border-10 border-yellow-300 rounded-lg spin-fast opacity-0 group-hover:opacity-100 transition-all duration-500 whitespace-nowrap">
    🌀 WHEEE! 🌀
    <div class="absolute right-full top-1/2 transform -translate-y-1/2 border-10 border-transparent border-r-yellow-300"></div>
  </div>
</div>`,
    cssCode: `.tooltip-spinning-3d {
  position: relative;
  display: inline-block;
}

.tooltip-spinning-3d .trigger {
  padding: 1.25rem 2.5rem;
  background-color: #ef4444;
  color: #ffffff;
  font-weight: 900;
  font-size: 1.5rem;
  border: 8px solid #ffffff;
  border-radius: 0.75rem;
  animation: spinSlow 3s infinite linear;
  transform-style: preserve-3d;
}

.tooltip-spinning-3d .tooltip {
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 0.5rem;
  padding: 1.25rem 2.5rem;
  background-color: #3b82f6;
  color: #fef08a;
  font-weight: 900;
  font-size: 1.5rem;
  border: 10px solid #fef08a;
  border-radius: 0.5rem;
  animation: spinFast 1s infinite linear;
  transform-style: preserve-3d;
  opacity: 0;
  transition: all 0.5s ease;
  white-space: nowrap;
}

.tooltip-spinning-3d:hover .tooltip {
  opacity: 1;
}

.tooltip-spinning-3d .tooltip::after {
  content: '';
  position: absolute;
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  border: 10px solid transparent;
  border-right-color: #fef08a;
}

@keyframes spinSlow {
  0% { transform: rotateY(0deg); }
  100% { transform: rotateY(360deg); }
}

@keyframes spinFast {
  0% { transform: translateY(-50%) rotateX(0deg); }
  100% { transform: translateY(-50%) rotateX(360deg); }
}`
  },

  tooltip4: {
    name: 'Bouncing Comic Tooltip',
    className: 'relative group',
    triggerText: 'BOUNCE!',
    tooltipContent: '🤪 CRAZY TIP! 🤪',
    reactCode: `<div className="relative group">
  <button className="px-12 py-6 bg-purple-600 text-yellow-300 font-black text-3xl border-12 border-yellow-300 rounded-full bounce">
    BOUNCE!
  </button>
  <div className="absolute right-full top-1/2 transform -translate-y-1/2 mr-2 px-12 py-6 bg-green-500 text-white font-black text-3xl border-12 border-white rounded-full bounce-fast opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
    🤪 CRAZY TIP! 🤪
    <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-12 border-transparent border-l-white"></div>
  </div>
</div>`,
    htmlCode: `<div class="relative group">
  <button class="px-12 py-6 bg-purple-600 text-yellow-300 font-black text-3xl border-12 border-yellow-300 rounded-full bounce">
    BOUNCE!
  </button>
  <div class="absolute right-full top-1/2 transform -translate-y-1/2 mr-2 px-12 py-6 bg-green-500 text-white font-black text-3xl border-12 border-white rounded-full bounce-fast opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
    🤪 CRAZY TIP! 🤪
    <div class="absolute left-full top-1/2 transform -translate-y-1/2 border-12 border-transparent border-l-white"></div>
  </div>
</div>`,
    cssCode: `.tooltip-bouncing-comic {
  position: relative;
  display: inline-block;
}

.tooltip-bouncing-comic .trigger {
  padding: 1.5rem 3rem;
  background-color: #9333ea;
  color: #fef08a;
  font-weight: 900;
  font-size: 1.875rem;
  border: 12px solid #fef08a;
  border-radius: 9999px;
  animation: bounce 1s infinite alternate;
}

.tooltip-bouncing-comic .tooltip {
  position: absolute;
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  margin-right: 0.5rem;
  padding: 1.5rem 3rem;
  background-color: #22c55e;
  color: #ffffff;
  font-weight: 900;
  font-size: 1.875rem;
  border: 12px solid #ffffff;
  border-radius: 9999px;
  animation: bounceFast 0.5s infinite alternate;
  opacity: 0;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.tooltip-bouncing-comic:hover .tooltip {
  opacity: 1;
}

.tooltip-bouncing-comic .tooltip::after {
  content: '';
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  border: 12px solid transparent;
  border-left-color: #ffffff;
}

@keyframes bounce {
  0% { transform: translateY(0); }
  100% { transform: translateY(-20px); }
}

@keyframes bounceFast {
  0% { transform: translateY(-50%) translateY(0); }
  100% { transform: translateY(-50%) translateY(-15px); }
}`
  },

  tooltip5: {
    name: 'Matrix Color Flip Tooltip',
    className: 'relative group',
    triggerText: 'MATRIX',
    tooltipContent: '👾 SYSTEM HACKED! 👾',
    reactCode: `<div className="relative group">
  <button className="px-14 py-7 bg-black text-green-400 font-mono font-black text-4xl border-16 border-green-400 matrix-flip">
    MATRIX
  </button>
  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-14 py-7 bg-black text-green-400 font-mono font-black text-4xl border-16 border-green-400 matrix-flip-fast opacity-0 group-hover:opacity-100 transition-all duration-100 whitespace-nowrap">
    👾 SYSTEM HACKED! 👾
    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 border-16 border-transparent border-b-green-400"></div>
  </div>
</div>`,
    htmlCode: `<div class="relative group">
  <button class="px-14 py-7 bg-black text-green-400 font-mono font-black text-4xl border-16 border-green-400 matrix-flip">
    MATRIX
  </button>
  <div class="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-14 py-7 bg-black text-green-400 font-mono font-black text-4xl border-16 border-green-400 matrix-flip-fast opacity-0 group-hover:opacity-100 transition-all duration-100 whitespace-nowrap">
    👾 SYSTEM HACKED! 👾
    <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 border-16 border-transparent border-b-green-400"></div>
  </div>
</div>`,
    cssCode: `.tooltip-matrix-flip {
  position: relative;
  display: inline-block;
}

.tooltip-matrix-flip .trigger {
  padding: 1.75rem 3.5rem;
  background-color: #000000;
  color: #00ff00;
  font-family: monospace;
  font-weight: 900;
  font-size: 2.25rem;
  border: 16px solid #00ff00;
  animation: matrixFlip 1s infinite;
  text-shadow: 0 0 5px #00ff00;
}

.tooltip-matrix-flip .tooltip {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 0.5rem;
  padding: 1.75rem 3.5rem;
  background-color: #000000;
  color: #00ff00;
  font-family: monospace;
  font-weight: 900;
  font-size: 2.25rem;
  border: 16px solid #00ff00;
  animation: matrixFlipFast 0.3s infinite;
  text-shadow: 0 0 5px #00ff00;
  opacity: 0;
  transition: all 0.1s ease;
  white-space: nowrap;
}

.tooltip-matrix-flip:hover .tooltip {
  opacity: 1;
}

.tooltip-matrix-flip .tooltip::after {
  content: '';
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 16px solid transparent;
  border-bottom-color: #00ff00;
}

@keyframes matrixFlip {
  0%, 100% { 
    color: #00ff00;
    border-color: #00ff00;
    background-color: #000000;
  }
  33% { 
    color: #ff00ff;
    border-color: #ff00ff;
    background-color: #ffff00;
  }
  66% { 
    color: #00ffff;
    border-color: #00ffff;
    background-color: #ff00ff;
  }
}

@keyframes matrixFlipFast {
  0%, 100% { 
    color: #00ff00;
    border-color: #00ff00;
  }
  50% { 
    color: #ff0000;
    border-color: #ff0000;
  }
}`
  }
};

export function TooltipSample() {
  const [selectedTooltip, setSelectedTooltip] = useState('tooltip1');
  const [viewMode, setViewMode] = useState('preview');
  const [codeLanguage, setCodeLanguage] = useState('react');
  const [styleType, setStyleType] = useState('tailwindcss');
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedCss, setCopiedCss] = useState(false);

  const config = tooltipConfigs[selectedTooltip];

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
        ? `<div className="tooltip-custom">\n  <button>${config.triggerText}</button>\n  <div>${config.tooltipContent}</div>\n</div>`
        : `<div class="tooltip-custom">\n  <button>${config.triggerText}</button>\n  <div>${config.tooltipContent}</div>\n</div>`;
    }
  };

  const renderTooltipPreview = () => {
    switch (selectedTooltip) {
      case 'tooltip1':
        return (
          <div className="relative group">
            <button className="px-6 py-3 bg-lime-400 text-black font-black text-lg border-4 border-black shake" 
                    style={{ fontFamily: FONTS.COMIC_SANS }}>
              {config.triggerText}
            </button>
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-6 py-4 bg-gradient-to-r from-red-500 via-yellow-500 to-purple-500 text-black font-black text-xl border-8 border-black rounded-lg shake opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap"
                 style={{ fontFamily: FONTS.COMIC_SANS }}>
              {config.tooltipContent}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-8 border-transparent border-t-black"></div>
            </div>
          </div>
        );
      case 'tooltip2':
        return (
          <div className="relative group">
            <button className="px-8 py-4 bg-black text-cyan-400 font-black text-xl border-4 border-cyan-400 blink shadow-lg"
                    style={{ fontFamily: FONTS.IMPACT }}>
              {config.triggerText}
            </button>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-8 py-4 bg-black text-cyan-400 font-black text-2xl border-6 border-cyan-400 rounded-full blink opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap"
                 style={{ fontFamily: FONTS.IMPACT }}>
              {config.tooltipContent}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 border-6 border-transparent border-b-cyan-400"></div>
            </div>
          </div>
        );
      case 'tooltip3':
        return (
          <div className="relative group">
            <button className="px-10 py-5 bg-red-500 text-white font-black text-2xl border-8 border-white rounded-xl spin-slow"
                    style={{ fontFamily: FONTS.PAPYRUS }}>
              {config.triggerText}
            </button>
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 px-10 py-5 bg-blue-500 text-yellow-300 font-black text-2xl border-10 border-yellow-300 rounded-lg spin-fast opacity-0 group-hover:opacity-100 transition-all duration-500 whitespace-nowrap"
                 style={{ fontFamily: FONTS.PAPYRUS }}>
              {config.tooltipContent}
              <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-10 border-transparent border-r-yellow-300"></div>
            </div>
          </div>
        );
      case 'tooltip4':
        return (
          <div className="relative group">
            <button className="px-12 py-6 bg-purple-600 text-yellow-300 font-black text-3xl border-12 border-yellow-300 rounded-full bounce"
                    style={{ fontFamily: FONTS.COMIC_SANS }}>
              {config.triggerText}
            </button>
            <div className="absolute right-full top-1/2 transform -translate-y-1/2 mr-2 px-12 py-6 bg-green-500 text-white font-black text-3xl border-12 border-white rounded-full bounce-fast opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap"
                 style={{ fontFamily: FONTS.COMIC_SANS }}>
              {config.tooltipContent}
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-12 border-transparent border-l-white"></div>
            </div>
          </div>
        );
      case 'tooltip5':
        return (
          <div className="relative group">
            <button className="px-14 py-7 bg-black text-green-400 font-mono font-black text-4xl border-16 border-green-400 matrix-flip">
              {config.triggerText}
            </button>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-14 py-7 bg-black text-green-400 font-mono font-black text-4xl border-16 border-green-400 matrix-flip-fast opacity-0 group-hover:opacity-100 transition-all duration-100 whitespace-nowrap">
              {config.tooltipContent}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 border-16 border-transparent border-b-green-400"></div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen p-4 md:p-8" style={{ 
      background: 'linear-gradient(135deg, #FF00FF 0%, #00FFFF 50%, #FFFF00 100%)',
      fontFamily: FONTS.COMIC_SANS
    }}>
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(-50%) translateX(0); }
          25% { transform: translateX(-50%) translateX(-5px); }
          75% { transform: translateX(-50%) translateX(5px); }
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0.3; }
        }
        @keyframes spinSlow {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }
        @keyframes spinFast {
          0% { transform: translateY(-50%) rotateX(0deg); }
          100% { transform: translateY(-50%) rotateX(360deg); }
        }
        @keyframes bounce {
          0% { transform: translateY(0); }
          100% { transform: translateY(-20px); }
        }
        @keyframes bounceFast {
          0% { transform: translateY(-50%) translateY(0); }
          100% { transform: translateY(-50%) translateY(-15px); }
        }
        @keyframes matrixFlip {
          0%, 100% { 
            color: #00ff00;
            border-color: #00ff00;
            background-color: #000000;
          }
          33% { 
            color: #ff00ff;
            border-color: #ff00ff;
            background-color: #ffff00;
          }
          66% { 
            color: #00ffff;
            border-color: #00ffff;
            background-color: #ff00ff;
          }
        }
        @keyframes matrixFlipFast {
          0%, 100% { 
            color: #00ff00;
            border-color: #00ff00;
          }
          50% { 
            color: #ff0000;
            border-color: #ff0000;
          }
        }
        @keyframes colorflip {
          0%, 100% { color: #FFFF00; }
          33% { color: #FF00FF; }
          66% { color: #00FFFF; }
        }
        .shake { animation: shake 0.5s infinite; }
        .blink { animation: blink 0.8s infinite; }
        .spin-slow { animation: spinSlow 3s infinite linear; }
        .spin-fast { animation: spinFast 1s infinite linear; }
        .bounce { animation: bounce 1s infinite alternate; }
        .bounce-fast { animation: bounceFast 0.5s infinite alternate; }
        .matrix-flip { animation: matrixFlip 1s infinite; }
        .matrix-flip-fast { animation: matrixFlipFast 0.3s infinite; }
        .colorflip { animation: colorflip 2s infinite; }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 bg-black/20 p-6 border-8 border-lime-400 transform -rotate-2">
          <h1
            className="text-4xl md:text-6xl font-black mb-4 colorflip"
            style={{ fontFamily: FONTS.COMIC_SANS }}
          >
            🎨 DUMBUI TOOLTIPS 🎨
          </h1>
          <p
            className="text-xl md:text-2xl font-bold"
            style={{ fontFamily: FONTS.TIMES_NEW_ROMAN, color: COLORS.CYAN }}
          >
            The WORST Tooltips on the Internet!
          </p>
        </div>

        <div className="mb-6 bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-500 p-4 border-8 border-red-600 transform rotate-1">
          <div className="flex flex-wrap gap-3 justify-center">
            {Object.keys(tooltipConfigs).map((tooltip) => (
              <button
                key={tooltip}
                onClick={() => setSelectedTooltip(tooltip)}
                className={`px-6 py-3 font-black text-lg border-4 transition-all ${
                  selectedTooltip === tooltip
                    ? 'bg-lime-400 text-black border-black scale-110 shake'
                    : 'bg-purple-600 text-yellow-300 border-yellow-300 hover:scale-105'
                }`}
                style={{ fontFamily: FONTS.PAPYRUS }}
              >
                {tooltipConfigs[tooltip].name}
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
              {renderTooltipPreview()}
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
            ⚠️ WARNING: These tooltips may cause MOTION SICKNESS! ⚠️
          </p>
        </div>
      </div>
    </div>
  );
}