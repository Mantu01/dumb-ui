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

const checkboxConfigs = {
  checkbox1: {
    name: 'Shaky Rainbow Checkbox',
    className: 'shaky-rainbow-checkbox',
    label: 'I agree to TERRIBLE terms!',
    reactCode: `<label className="flex items-center space-x-4">
  <input
    type="checkbox"
    className="shaky-rainbow-checkbox"
    style={{ fontFamily: "Comic Sans MS" }}
  />
  <span className="text-black font-black text-2xl" style={{ fontFamily: "Comic Sans MS" }}>
    I agree to TERRIBLE terms!
  </span>
</label>`,
    htmlCode: `<label class="flex items-center space-x-4">
  <input
    type="checkbox"
    class="shaky-rainbow-checkbox"
    style="font-family: 'Comic Sans MS';"
  />
  <span class="text-black font-black text-2xl" style="font-family: 'Comic Sans MS';">
    I agree to TERRIBLE terms!
  </span>
</label>`,
    cssCode: `.shaky-rainbow-checkbox {
  width: 60px;
  height: 60px;
  appearance: none;
  background: linear-gradient(45deg, #ef4444, #eab308, #a855f7);
  border: 8px solid #000000;
  border-radius: 10px;
  cursor: pointer;
  animation: shake 0.4s infinite;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
  position: relative;
  transition: all 0.3s ease;
}

.shaky-rainbow-checkbox:checked {
  background: linear-gradient(45deg, #dc2626, #ca8a04, #7c3aed);
  animation: shake 0.2s infinite;
}

.shaky-rainbow-checkbox:checked::after {
  content: '✓';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #000000;
  font-size: 40px;
  font-weight: 900;
  font-family: 'Comic Sans MS';
}

@keyframes shake {
  0%, 100% { transform: translateX(0) rotate(0deg); }
  25% { transform: translateX(-5px) rotate(-5deg); }
  75% { transform: translateX(5px) rotate(5deg); }
}`
  },

  checkbox2: {
    name: 'Blinking Neon Checkbox',
    className: 'blinking-neon-checkbox',
    label: 'Accept NEON conditions!',
    reactCode: `<label className="flex items-center space-x-4">
  <input
    type="checkbox"
    className="blinking-neon-checkbox"
    style={{ fontFamily: "Impact" }}
  />
  <span className="text-cyan-400 font-black text-2xl" style={{ fontFamily: "Impact", textShadow: "0 0 10px #00FFFF" }}>
    Accept NEON conditions!
  </span>
</label>`,
    htmlCode: `<label class="flex items-center space-x-4">
  <input
    type="checkbox"
    class="blinking-neon-checkbox"
    style="font-family: Impact;"
  />
  <span class="text-cyan-400 font-black text-2xl" style="font-family: Impact; text-shadow: 0 0 10px #00FFFF;">
    Accept NEON conditions!
  </span>
</label>`,
    cssCode: `.blinking-neon-checkbox {
  width: 70px;
  height: 70px;
  appearance: none;
  background-color: #000000;
  border: 10px solid #00ffff;
  border-radius: 15px;
  cursor: pointer;
  animation: blink 0.6s infinite;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.7);
  position: relative;
  transition: all 0.3s ease;
}

.blinking-neon-checkbox:checked {
  border-color: #ff00ff;
  animation: blink 0.3s infinite;
  box-shadow: 0 0 30px rgba(255, 0, 255, 0.9);
}

.blinking-neon-checkbox:checked::after {
  content: '⭐';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #00ffff;
  font-size: 35px;
  font-weight: 900;
  text-shadow: 0 0 10px #00ffff;
}

@keyframes blink {
  0%, 50% { 
    opacity: 1;
    border-color: #00ffff;
  }
  51%, 100% { 
    opacity: 0.3;
    border-color: #ff00ff;
  }
}`
  },

  checkbox3: {
    name: 'Spinning 3D Checkbox',
    className: 'spinning-3d-checkbox',
    label: 'Enable 3D MODE!',
    reactCode: `<label className="flex items-center space-x-4">
  <input
    type="checkbox"
    className="spinning-3d-checkbox"
    style={{ fontFamily: "Papyrus" }}
  />
  <span className="text-red-600 font-black text-2xl" style={{ fontFamily: "Papyrus" }}>
    Enable 3D MODE!
  </span>
</label>`,
    htmlCode: `<label class="flex items-center space-x-4">
  <input
    type="checkbox"
    class="spinning-3d-checkbox"
    style="font-family: Papyrus;"
  />
  <span class="text-red-600 font-black text-2xl" style="font-family: Papyrus;">
    Enable 3D MODE!
  </span>
</label>`,
    cssCode: `.spinning-3d-checkbox {
  width: 80px;
  height: 80px;
  appearance: none;
  background-color: #84cc16;
  border: 12px solid #dc2626;
  border-radius: 20px;
  cursor: pointer;
  animation: spin3d 4s infinite linear;
  transform-style: preserve-3d;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6);
  position: relative;
  transition: all 0.3s ease;
  perspective: 1000px;
}

.spinning-3d-checkbox:checked {
  background-color: #65a30d;
  animation: spin3d 2s infinite linear;
}

.spinning-3d-checkbox:checked::after {
  content: '🌀';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 45px;
  font-weight: 900;
}

@keyframes spin3d {
  0% { transform: rotateY(0deg) rotateX(10deg); }
  100% { transform: rotateY(360deg) rotateX(10deg); }
}`
  },

  checkbox4: {
    name: 'Bouncing Comic Checkbox',
    className: 'bouncing-comic-checkbox',
    label: 'Make it BOUNCE!',
    reactCode: `<label className="flex items-center space-x-4">
  <input
    type="checkbox"
    className="bouncing-comic-checkbox"
    style={{ fontFamily: "Comic Sans MS" }}
  />
  <span className="text-yellow-300 font-black text-2xl" style={{ fontFamily: "Comic Sans MS", textShadow: "2px 2px 0 #000" }}>
    Make it BOUNCE!
  </span>
</label>`,
    htmlCode: `<label class="flex items-center space-x-4">
  <input
    type="checkbox"
    class="bouncing-comic-checkbox"
    style="font-family: 'Comic Sans MS';"
  />
  <span class="text-yellow-300 font-black text-2xl" style="font-family: 'Comic Sans MS'; text-shadow: 2px 2px 0 #000;">
    Make it BOUNCE!
  </span>
</label>`,
    cssCode: `.bouncing-comic-checkbox {
  width: 75px;
  height: 75px;
  appearance: none;
  background-color: #9333ea;
  border: 15px solid #fef08a;
  border-radius: 50%;
  cursor: pointer;
  animation: bounceComic 1.2s infinite alternate;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.7);
  position: relative;
  transition: all 0.3s ease;
}

.bouncing-comic-checkbox:checked {
  background-color: #7c3aed;
  animation: bounceComic 0.6s infinite alternate;
}

.bouncing-comic-checkbox:checked::after {
  content: '🤪';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 40px;
  font-weight: 900;
}

@keyframes bounceComic {
  0% { 
    transform: translateY(0) scale(1) rotate(-5deg);
  }
  100% { 
    transform: translateY(-25px) scale(1.1) rotate(5deg);
  }
}`
  },

  checkbox5: {
    name: 'Pulsing Glow Checkbox',
    className: 'pulsing-glow-checkbox',
    label: 'Activate GLOW POWER!',
    reactCode: `<label className="flex items-center space-x-4">
  <input
    type="checkbox"
    className="pulsing-glow-checkbox"
    style={{ fontFamily: "Brush Script MT" }}
  />
  <span className="text-white font-black text-2xl" style={{ fontFamily: "Brush Script MT" }}>
    Activate GLOW POWER!
  </span>
</label>`,
    htmlCode: `<label class="flex items-center space-x-4">
  <input
    type="checkbox"
    class="pulsing-glow-checkbox"
    style="font-family: 'Brush Script MT';"
  />
  <span class="text-white font-black text-2xl" style="font-family: 'Brush Script MT';">
    Activate GLOW POWER!
  </span>
</label>`,
    cssCode: `.pulsing-glow-checkbox {
  width: 85px;
  height: 85px;
  appearance: none;
  background-color: #3b82f6;
  border: 18px solid #ffffff;
  border-radius: 25px;
  cursor: pointer;
  animation: pulseGlow 2s infinite alternate;
  box-shadow: 0 0 30px 15px rgba(59, 130, 246, 0.8);
  position: relative;
  transition: all 0.3s ease;
}

.pulsing-glow-checkbox:checked {
  animation: pulseGlow 0.8s infinite alternate;
  box-shadow: 0 0 50px 25px rgba(59, 130, 246, 1);
}

.pulsing-glow-checkbox:checked::after {
  content: '💥';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 50px;
  font-weight: 900;
}

@keyframes pulseGlow {
  0% { 
    transform: scale(1);
    box-shadow: 0 0 30px 15px rgba(59, 130, 246, 0.8);
  }
  100% { 
    transform: scale(1.15);
    box-shadow: 0 0 50px 25px rgba(59, 130, 246, 1);
  }
}`
  },

  checkbox6: {
    name: 'Matrix Color Flip Checkbox',
    className: 'matrix-flip-checkbox',
    label: 'Hack the MATRIX!',
    reactCode: `<label className="flex items-center space-x-4">
  <input
    type="checkbox"
    className="matrix-flip-checkbox"
  />
  <span className="text-green-400 font-mono font-black text-2xl" style={{ textShadow: "0 0 8px #00FF00" }}>
    Hack the MATRIX!
  </span>
</label>`,
    htmlCode: `<label class="flex items-center space-x-4">
  <input
    type="checkbox"
    class="matrix-flip-checkbox"
  />
  <span class="text-green-400 font-mono font-black text-2xl" style="text-shadow: 0 0 8px #00FF00;">
    Hack the MATRIX!
  </span>
</label>`,
    cssCode: `.matrix-flip-checkbox {
  width: 90px;
  height: 90px;
  appearance: none;
  background-color: #000000;
  border: 20px solid #00ff00;
  cursor: pointer;
  animation: matrixFlip 0.8s infinite;
  box-shadow: 0 0 25px 10px rgba(0, 255, 0, 0.6);
  position: relative;
  transition: all 0.3s ease;
}

.matrix-flip-checkbox:checked {
  animation: matrixFlip 0.3s infinite;
  box-shadow: 0 0 35px 15px rgba(0, 255, 0, 0.8);
}

.matrix-flip-checkbox:checked::after {
  content: '👾';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 55px;
  font-weight: 900;
  text-shadow: 0 0 10px #00ff00;
}

@keyframes matrixFlip {
  0%, 100% { 
    border-color: #00ff00;
    background-color: #000000;
  }
  25% { 
    border-color: #ff00ff;
    background-color: #ffff00;
  }
  50% { 
    border-color: #00ffff;
    background-color: #ff00ff;
  }
  75% { 
    border-color: #ff0000;
    background-color: #00ffff;
  }
}`
  }
};

export function CheckboxSample() {
  const [selectedCheckbox, setSelectedCheckbox] = useState('checkbox1');
  const [viewMode, setViewMode] = useState('preview');
  const [codeLanguage, setCodeLanguage] = useState('react');
  const [styleType, setStyleType] = useState('tailwindcss');
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedCss, setCopiedCss] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const config = checkboxConfigs[selectedCheckbox];

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
        ? `<label className="checkbox-custom">\n  <input type="checkbox" />\n  <span>${config.label}</span>\n</label>`
        : `<label class="checkbox-custom">\n  <input type="checkbox" />\n  <span>${config.label}</span>\n</label>`;
    }
  };

  const renderCheckboxPreview = () => {
    const labelStyle = {
      fontFamily: config.name.includes('Matrix') ? 'monospace' : 
                 config.name.includes('Comic') ? FONTS.COMIC_SANS :
                 config.name.includes('Brush') ? FONTS.BRUSH_SCRIPT :
                 config.name.includes('Neon') ? FONTS.IMPACT :
                 config.name.includes('3D') ? FONTS.PAPYRUS : FONTS.COMIC_SANS,
      textShadow: config.name.includes('Neon') ? '0 0 10px #00FFFF' :
                 config.name.includes('Comic') ? '2px 2px 0 #000' :
                 config.name.includes('Matrix') ? '0 0 8px #00FF00' : 'none',
      color: config.name.includes('Neon') ? COLORS.CYAN :
            config.name.includes('3D') ? COLORS.RED :
            config.name.includes('Comic') ? COLORS.YELLOW :
            config.name.includes('Matrix') ? COLORS.LIME : '#000000'
    };

    return (
      <label className="flex items-center space-x-6 cursor-pointer">
        <input
          type="checkbox"
          className={config.className}
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        <span className="font-black text-2xl" style={labelStyle}>
          {config.label}
        </span>
      </label>
    );
  };

  return (
    <div className="min-h-screen p-4 md:p-8" style={{ 
      background: 'linear-gradient(135deg, #FF00FF 0%, #00FFFF 50%, #FFFF00 100%)',
      fontFamily: FONTS.COMIC_SANS
    }}>
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0) rotate(0deg); }
          25% { transform: translateX(-5px) rotate(-5deg); }
          75% { transform: translateX(5px) rotate(5deg); }
        }
        @keyframes blink {
          0%, 50% { 
            opacity: 1;
            border-color: #00ffff;
          }
          51%, 100% { 
            opacity: 0.3;
            border-color: #ff00ff;
          }
        }
        @keyframes spin3d {
          0% { transform: rotateY(0deg) rotateX(10deg); }
          100% { transform: rotateY(360deg) rotateX(10deg); }
        }
        @keyframes bounceComic {
          0% { 
            transform: translateY(0) scale(1) rotate(-5deg);
          }
          100% { 
            transform: translateY(-25px) scale(1.1) rotate(5deg);
          }
        }
        @keyframes pulseGlow {
          0% { 
            transform: scale(1);
            box-shadow: 0 0 30px 15px rgba(59, 130, 246, 0.8);
          }
          100% { 
            transform: scale(1.15);
            box-shadow: 0 0 50px 25px rgba(59, 130, 246, 1);
          }
        }
        @keyframes matrixFlip {
          0%, 100% { 
            border-color: #00ff00;
            background-color: #000000;
          }
          25% { 
            border-color: #ff00ff;
            background-color: #ffff00;
          }
          50% { 
            border-color: #00ffff;
            background-color: #ff00ff;
          }
          75% { 
            border-color: #ff0000;
            background-color: #00ffff;
          }
        }
        @keyframes colorflip {
          0%, 100% { color: #FFFF00; }
          33% { color: #FF00FF; }
          66% { color: #00FFFF; }
        }

        /* Checkbox Styles */
        .shaky-rainbow-checkbox {
          width: 60px;
          height: 60px;
          appearance: none;
          background: linear-gradient(45deg, #ef4444, #eab308, #a855f7);
          border: 8px solid #000000;
          border-radius: 10px;
          cursor: pointer;
          animation: shake 0.4s infinite;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
          position: relative;
          transition: all 0.3s ease;
        }

        .shaky-rainbow-checkbox:checked {
          background: linear-gradient(45deg, #dc2626, #ca8a04, #7c3aed);
          animation: shake 0.2s infinite;
        }

        .shaky-rainbow-checkbox:checked::after {
          content: '✓';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #000000;
          font-size: 40px;
          font-weight: 900;
          font-family: 'Comic Sans MS';
        }

        .blinking-neon-checkbox {
          width: 70px;
          height: 70px;
          appearance: none;
          background-color: #000000;
          border: 10px solid #00ffff;
          border-radius: 15px;
          cursor: pointer;
          animation: blink 0.6s infinite;
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.7);
          position: relative;
          transition: all 0.3s ease;
        }

        .blinking-neon-checkbox:checked {
          border-color: #ff00ff;
          animation: blink 0.3s infinite;
          box-shadow: 0 0 30px rgba(255, 0, 255, 0.9);
        }

        .blinking-neon-checkbox:checked::after {
          content: '⭐';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #00ffff;
          font-size: 35px;
          font-weight: 900;
          text-shadow: 0 0 10px #00ffff;
        }

        .spinning-3d-checkbox {
          width: 80px;
          height: 80px;
          appearance: none;
          background-color: #84cc16;
          border: 12px solid #dc2626;
          border-radius: 20px;
          cursor: pointer;
          animation: spin3d 4s infinite linear;
          transform-style: preserve-3d;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6);
          position: relative;
          transition: all 0.3s ease;
          perspective: 1000px;
        }

        .spinning-3d-checkbox:checked {
          background-color: #65a30d;
          animation: spin3d 2s infinite linear;
        }

        .spinning-3d-checkbox:checked::after {
          content: '🌀';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 45px;
          font-weight: 900;
        }

        .bouncing-comic-checkbox {
          width: 75px;
          height: 75px;
          appearance: none;
          background-color: #9333ea;
          border: 15px solid #fef08a;
          border-radius: 50%;
          cursor: pointer;
          animation: bounceComic 1.2s infinite alternate;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.7);
          position: relative;
          transition: all 0.3s ease;
        }

        .bouncing-comic-checkbox:checked {
          background-color: #7c3aed;
          animation: bounceComic 0.6s infinite alternate;
        }

        .bouncing-comic-checkbox:checked::after {
          content: '🤪';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 40px;
          font-weight: 900;
        }

        .pulsing-glow-checkbox {
          width: 85px;
          height: 85px;
          appearance: none;
          background-color: #3b82f6;
          border: 18px solid #ffffff;
          border-radius: 25px;
          cursor: pointer;
          animation: pulseGlow 2s infinite alternate;
          box-shadow: 0 0 30px 15px rgba(59, 130, 246, 0.8);
          position: relative;
          transition: all 0.3s ease;
        }

        .pulsing-glow-checkbox:checked {
          animation: pulseGlow 0.8s infinite alternate;
          box-shadow: 0 0 50px 25px rgba(59, 130, 246, 1);
        }

        .pulsing-glow-checkbox:checked::after {
          content: '💥';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 50px;
          font-weight: 900;
        }

        .matrix-flip-checkbox {
          width: 90px;
          height: 90px;
          appearance: none;
          background-color: #000000;
          border: 20px solid #00ff00;
          cursor: pointer;
          animation: matrixFlip 0.8s infinite;
          box-shadow: 0 0 25px 10px rgba(0, 255, 0, 0.6);
          position: relative;
          transition: all 0.3s ease;
        }

        .matrix-flip-checkbox:checked {
          animation: matrixFlip 0.3s infinite;
          box-shadow: 0 0 35px 15px rgba(0, 255, 0, 0.8);
        }

        .matrix-flip-checkbox:checked::after {
          content: '👾';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 55px;
          font-weight: 900;
          text-shadow: 0 0 10px #00ff00;
        }

        .shake { animation: shake 0.4s infinite; }
        .blink { animation: blink 0.6s infinite; }
        .spin-3d { animation: spin3d 4s infinite linear; }
        .bounce-comic { animation: bounceComic 1.2s infinite alternate; }
        .pulse-glow { animation: pulseGlow 2s infinite alternate; }
        .matrix-flip { animation: matrixFlip 0.8s infinite; }
        .colorflip { animation: colorflip 2s infinite; }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 bg-black/20 p-6 border-8 border-lime-400 transform -rotate-2">
          <h1
            className="text-4xl md:text-6xl font-black mb-4 colorflip"
            style={{ fontFamily: FONTS.COMIC_SANS }}
          >
            🎨 DUMBUI CHECKBOXES 🎨
          </h1>
          <p
            className="text-xl md:text-2xl font-bold"
            style={{ fontFamily: FONTS.TIMES_NEW_ROMAN, color: COLORS.CYAN }}
          >
            The WORST Checkboxes on the Internet!
          </p>
        </div>

        <div className="mb-6 bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-500 p-4 border-8 border-red-600 transform rotate-1">
          <div className="flex flex-wrap gap-3 justify-center">
            {Object.keys(checkboxConfigs).map((checkbox) => (
              <button
                key={checkbox}
                onClick={() => setSelectedCheckbox(checkbox)}
                className={`px-6 py-3 font-black text-lg border-4 transition-all ${
                  selectedCheckbox === checkbox
                    ? 'bg-lime-400 text-black border-black scale-110 shake'
                    : 'bg-purple-600 text-yellow-300 border-yellow-300 hover:scale-105'
                }`}
                style={{ fontFamily: FONTS.PAPYRUS }}
              >
                {checkboxConfigs[checkbox].name}
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
              <div className="mb-4">
                {renderCheckboxPreview()}
              </div>
              <div className="text-center mt-4">
                <p className="text-white font-bold text-xl" style={{ fontFamily: FONTS.COMIC_SANS }}>
                  Status: <span className="text-yellow-300">{isChecked ? 'CHECKED! 🎉' : 'UNCHECKED 😞'}</span>
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
            style={{ fontFamily: FONTS.PAPYRUS, color: '#000' }}
          >
            ⚠️ WARNING: These checkboxes may cause EYE STRAIN and CONFUSION! ⚠️
          </p>
        </div>
      </div>
    </div>
  );
}