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
  JOKERMAN: 'Jokerman, fantasy'
};

const COLORS = {
  YELLOW: '#FFFF00',
  CYAN: '#00FFFF',
  MAGENTA: '#FF00FF',
  LIME: '#00FF00',
  HOT_PINK: '#FF69B4',
  ORANGE: '#FFA500',
  NEON_GREEN: '#39FF14'
};

const breadcrumbConfigs = {
  breadcrumb1: {
    name: 'Shaky Comic Breadcrumb',
    className: 'flex items-center space-x-2 shake bg-lime-400 p-4 border-8 border-black rounded-full',
    items: ['🏠 Home', '🎮 Products', '🎯 Gaming', '🕹️ Consoles'],
    reactCode: `<div className="flex items-center space-x-2 shake bg-lime-400 p-4 border-8 border-black rounded-full">
  <a href="#" className="text-black font-black text-lg hover:text-yellow-300 transition-colors" style={{ fontFamily: 'Comic Sans MS' }}>
    🏠 Home
  </a>
  <span className="text-black text-2xl font-black">❯</span>
  <a href="#" className="text-black font-black text-lg hover:text-yellow-300 transition-colors" style={{ fontFamily: 'Comic Sans MS' }}>
    🎮 Products
  </a>
  <span className="text-black text-2xl font-black">❯</span>
  <a href="#" className="text-black font-black text-lg hover:text-yellow-300 transition-colors" style={{ fontFamily: 'Comic Sans MS' }}>
    🎯 Gaming
  </a>
  <span className="text-black text-2xl font-black">❯</span>
  <span className="text-black font-black text-lg bg-yellow-300 px-3 py-1 rounded-full" style={{ fontFamily: 'Comic Sans MS' }}>
    🕹️ Consoles
  </span>
</div>`,
    htmlCode: `<div class="flex items-center space-x-2 shake bg-lime-400 p-4 border-8 border-black rounded-full">
  <a href="#" class="text-black font-black text-lg hover:text-yellow-300 transition-colors" style="font-family: 'Comic Sans MS';">
    🏠 Home
  </a>
  <span class="text-black text-2xl font-black">❯</span>
  <a href="#" class="text-black font-black text-lg hover:text-yellow-300 transition-colors" style="font-family: 'Comic Sans MS';">
    🎮 Products
  </a>
  <span class="text-black text-2xl font-black">❯</span>
  <a href="#" class="text-black font-black text-lg hover:text-yellow-300 transition-colors" style="font-family: 'Comic Sans MS';">
    🎯 Gaming
  </a>
  <span class="text-black text-2xl font-black">❯</span>
  <span class="text-black font-black text-lg bg-yellow-300 px-3 py-1 rounded-full" style="font-family: 'Comic Sans MS';">
    🕹️ Consoles
  </span>
</div>`,
    cssCode: `.breadcrumb-shaky {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #84cc16;
  padding: 1rem;
  border: 8px solid #000000;
  border-radius: 9999px;
  font-family: 'Comic Sans MS';
  animation: shake 0.5s infinite;
}

.breadcrumb-shaky a {
  color: #000000;
  font-weight: 900;
  font-size: 1.125rem;
  text-decoration: none;
  transition: color 0.3s;
}

.breadcrumb-shaky a:hover {
  color: #fde047;
}

.breadcrumb-shaky span:last-child {
  background-color: #fde047;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
}

.breadcrumb-shaky .separator {
  color: #000000;
  font-size: 1.5rem;
  font-weight: 900;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}`
  },
  breadcrumb2: {
    name: 'Spinning Rainbow Breadcrumb',
    className: 'flex items-center space-x-4 spin bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-400 p-6 border-4 border-purple-600 rounded-lg',
    items: ['📁 Root', '💾 Files', '📷 Images', '🌟 Vacation'],
    reactCode: `<div className="flex items-center space-x-4 spin bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-400 p-6 border-4 border-purple-600 rounded-lg">
  <a href="#" className="text-black font-black text-xl hover:text-white transition-colors" style={{ fontFamily: 'Papyrus' }}>
    📁 Root
  </a>
  <span className="text-black text-3xl font-black animate-bounce">⚡</span>
  <a href="#" className="text-black font-black text-xl hover:text-white transition-colors" style={{ fontFamily: 'Papyrus' }}>
    💾 Files
  </a>
  <span className="text-black text-3xl font-black animate-bounce">⚡</span>
  <a href="#" className="text-black font-black text-xl hover:text-white transition-colors" style={{ fontFamily: 'Papyrus' }}>
    📷 Images
  </a>
  <span className="text-black text-3xl font-black animate-bounce">⚡</span>
  <span className="text-black font-black text-xl bg-white px-4 py-2 rounded-full border-4 border-black" style={{ fontFamily: 'Papyrus' }}>
    🌟 Vacation
  </span>
</div>`,
    htmlCode: `<div class="flex items-center space-x-4 spin bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-400 p-6 border-4 border-purple-600 rounded-lg">
  <a href="#" class="text-black font-black text-xl hover:text-white transition-colors" style="font-family: 'Papyrus';">
    📁 Root
  </a>
  <span class="text-black text-3xl font-black animate-bounce">⚡</span>
  <a href="#" class="text-black font-black text-xl hover:text-white transition-colors" style="font-family: 'Papyrus';">
    💾 Files
  </a>
  <span class="text-black text-3xl font-black animate-bounce">⚡</span>
  <a href="#" class="text-black font-black text-xl hover:text-white transition-colors" style="font-family: 'Papyrus';">
    📷 Images
  </a>
  <span class="text-black text-3xl font-black animate-bounce">⚡</span>
  <span class="text-black font-black text-xl bg-white px-4 py-2 rounded-full border-4 border-black" style="font-family: 'Papyrus';">
    🌟 Vacation
  </span>
</div>`,
    cssCode: `.breadcrumb-spin {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: linear-gradient(to right, #ec4899, #f59e0b, #22d3ee);
  padding: 1.5rem;
  border: 4px solid #9333ea;
  border-radius: 0.5rem;
  font-family: 'Papyrus';
  animation: spin 2s linear infinite;
}

.breadcrumb-spin a {
  color: #000000;
  font-weight: 900;
  font-size: 1.25rem;
  text-decoration: none;
  transition: color 0.3s;
}

.breadcrumb-spin a:hover {
  color: #ffffff;
}

.breadcrumb-spin span:last-child {
  background-color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  border: 4px solid #000000;
}

.breadcrumb-spin .separator {
  color: #000000;
  font-size: 1.875rem;
  font-weight: 900;
  animation: bounce 1s infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}`
  },
  breadcrumb3: {
    name: 'Bouncing Times Breadcrumb',
    className: 'flex items-center space-x-3 bounce bg-purple-600 p-5 border-8 border-yellow-300 rounded-2xl',
    items: ['🌐 Internet', '🔍 Search', '🛒 Shopping', '👕 Clothing'],
    reactCode: `<div className="flex items-center space-x-3 bounce bg-purple-600 p-5 border-8 border-yellow-300 rounded-2xl">
  <a href="#" className="text-yellow-300 font-black text-lg hover:text-pink-400 transition-colors" style={{ fontFamily: 'Times New Roman' }}>
    🌐 Internet
  </a>
  <span className="text-yellow-300 text-2xl font-black pulse">🎯</span>
  <a href="#" className="text-yellow-300 font-black text-lg hover:text-pink-400 transition-colors" style={{ fontFamily: 'Times New Roman' }}>
    🔍 Search
  </a>
  <span className="text-yellow-300 text-2xl font-black pulse">🎯</span>
  <a href="#" className="text-yellow-300 font-black text-lg hover:text-pink-400 transition-colors" style={{ fontFamily: 'Times New Roman' }}>
    🛒 Shopping
  </a>
  <span className="text-yellow-300 text-2xl font-black pulse">🎯</span>
  <span className="text-purple-600 font-black text-lg bg-pink-400 px-4 py-2 rounded-lg border-4 border-white" style={{ fontFamily: 'Times New Roman' }}>
    👕 Clothing
  </span>
</div>`,
    htmlCode: `<div class="flex items-center space-x-3 bounce bg-purple-600 p-5 border-8 border-yellow-300 rounded-2xl">
  <a href="#" class="text-yellow-300 font-black text-lg hover:text-pink-400 transition-colors" style="font-family: 'Times New Roman';">
    🌐 Internet
  </a>
  <span class="text-yellow-300 text-2xl font-black pulse">🎯</span>
  <a href="#" class="text-yellow-300 font-black text-lg hover:text-pink-400 transition-colors" style="font-family: 'Times New Roman';">
    🔍 Search
  </a>
  <span class="text-yellow-300 text-2xl font-black pulse">🎯</span>
  <a href="#" class="text-yellow-300 font-black text-lg hover:text-pink-400 transition-colors" style="font-family: 'Times New Roman';">
    🛒 Shopping
  </a>
  <span class="text-yellow-300 text-2xl font-black pulse">🎯</span>
  <span class="text-purple-600 font-black text-lg bg-pink-400 px-4 py-2 rounded-lg border-4 border-white" style="font-family: 'Times New Roman';">
    👕 Clothing
  </span>
</div>`,
    cssCode: `.breadcrumb-bounce {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background-color: #9333ea;
  padding: 1.25rem;
  border: 8px solid #fde047;
  border-radius: 1rem;
  font-family: 'Times New Roman';
  animation: bounce 0.8s infinite;
}

.breadcrumb-bounce a {
  color: #fde047;
  font-weight: 900;
  font-size: 1.125rem;
  text-decoration: none;
  transition: color 0.3s;
}

.breadcrumb-bounce a:hover {
  color: #ec4899;
}

.breadcrumb-bounce span:last-child {
  background-color: #ec4899;
  color: #9333ea;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: 4px solid #ffffff;
}

.breadcrumb-bounce .separator {
  color: #fde047;
  font-size: 1.5rem;
  font-weight: 900;
  animation: pulse 0.5s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.3); }
}`
  },
  breadcrumb4: {
    name: 'Wobbly Brush Breadcrumb',
    className: 'flex items-center space-x-6 wobble bg-gradient-to-br from-cyan-400 to-pink-400 p-7 border-6 border-orange-500 rounded-full',
    items: ['📚 Library', '📖 Books', '🔬 Science', '🚀 Physics'],
    reactCode: `<div className="flex items-center space-x-6 wobble bg-gradient-to-br from-cyan-400 to-pink-400 p-7 border-6 border-orange-500 rounded-full">
  <a href="#" className="text-black font-black text-xl hover:text-white transition-colors" style={{ fontFamily: 'Brush Script MT' }}>
    📚 Library
  </a>
  <span className="text-black text-4xl font-black spin">🌀</span>
  <a href="#" className="text-black font-black text-xl hover:text-white transition-colors" style={{ fontFamily: 'Brush Script MT' }}>
    📖 Books
  </a>
  <span className="text-black text-4xl font-black spin">🌀</span>
  <a href="#" className="text-black font-black text-xl hover:text-white transition-colors" style={{ fontFamily: 'Brush Script MT' }}>
    🔬 Science
  </a>
  <span className="text-black text-4xl font-black spin">🌀</span>
  <span className="text-white font-black text-xl bg-black px-5 py-3 rounded-full border-4 border-yellow-300" style={{ fontFamily: 'Brush Script MT' }}>
    🚀 Physics
  </span>
</div>`,
    htmlCode: `<div class="flex items-center space-x-6 wobble bg-gradient-to-br from-cyan-400 to-pink-400 p-7 border-6 border-orange-500 rounded-full">
  <a href="#" class="text-black font-black text-xl hover:text-white transition-colors" style="font-family: 'Brush Script MT';">
    📚 Library
  </a>
  <span class="text-black text-4xl font-black spin">🌀</span>
  <a href="#" class="text-black font-black text-xl hover:text-white transition-colors" style="font-family: 'Brush Script MT';">
    📖 Books
  </a>
  <span class="text-black text-4xl font-black spin">🌀</span>
  <a href="#" class="text-black font-black text-xl hover:text-white transition-colors" style="font-family: 'Brush Script MT';">
    🔬 Science
  </a>
  <span class="text-black text-4xl font-black spin">🌀</span>
  <span class="text-white font-black text-xl bg-black px-5 py-3 rounded-full border-4 border-yellow-300" style="font-family: 'Brush Script MT';">
    🚀 Physics
  </span>
</div>`,
    cssCode: `.breadcrumb-wobble {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background: linear-gradient(135deg, #22d3ee, #ec4899);
  padding: 1.75rem;
  border: 6px solid #f97316;
  border-radius: 9999px;
  font-family: 'Brush Script MT';
  animation: wobble 0.7s infinite;
}

.breadcrumb-wobble a {
  color: #000000;
  font-weight: 900;
  font-size: 1.25rem;
  text-decoration: none;
  transition: color 0.3s;
}

.breadcrumb-wobble a:hover {
  color: #ffffff;
}

.breadcrumb-wobble span:last-child {
  background-color: #000000;
  color: #ffffff;
  padding: 0.75rem 1.25rem;
  border-radius: 9999px;
  border: 4px solid #fde047;
}

.breadcrumb-wobble .separator {
  color: #000000;
  font-size: 2.25rem;
  font-weight: 900;
  animation: spin 1s linear infinite;
}

@keyframes wobble {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-10deg); }
  75% { transform: rotate(10deg); }
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}`
  },
  breadcrumb5: {
    name: 'Glitchy Impact Breadcrumb',
    className: 'flex items-center space-x-4 glitch bg-yellow-300 p-6 border-8 border-magenta-500 rounded-md',
    items: ['🎵 Music', '🎸 Rock', '🎤 Bands', '🎸 Queen'],
    reactCode: `<div className="flex items-center space-x-4 glitch bg-yellow-300 p-6 border-8 border-magenta-500 rounded-md">
  <a href="#" className="text-black font-black text-lg hover:text-red-600 transition-colors" style={{ fontFamily: 'Impact' }}>
    🎵 Music
  </a>
  <span className="text-black text-3xl font-black shake">💥</span>
  <a href="#" className="text-black font-black text-lg hover:text-red-600 transition-colors" style={{ fontFamily: 'Impact' }}>
    🎸 Rock
  </a>
  <span className="text-black text-3xl font-black shake">💥</span>
  <a href="#" className="text-black font-black text-lg hover:text-red-600 transition-colors" style={{ fontFamily: 'Impact' }}>
    🎤 Bands
  </a>
  <span className="text-black text-3xl font-black shake">💥</span>
  <span className="text-white font-black text-lg bg-red-600 px-4 py-2 rounded-md border-4 border-black" style={{ fontFamily: 'Impact' }}>
    🎸 Queen
  </span>
</div>`,
    htmlCode: `<div class="flex items-center space-x-4 glitch bg-yellow-300 p-6 border-8 border-magenta-500 rounded-md">
  <a href="#" class="text-black font-black text-lg hover:text-red-600 transition-colors" style="font-family: 'Impact';">
    🎵 Music
  </a>
  <span class="text-black text-3xl font-black shake">💥</span>
  <a href="#" class="text-black font-black text-lg hover:text-red-600 transition-colors" style="font-family: 'Impact';">
    🎸 Rock
  </a>
  <span class="text-black text-3xl font-black shake">💥</span>
  <a href="#" class="text-black font-black text-lg hover:text-red-600 transition-colors" style="font-family: 'Impact';">
    🎤 Bands
  </a>
  <span class="text-black text-3xl font-black shake">💥</span>
  <span class="text-white font-black text-lg bg-red-600 px-4 py-2 rounded-md border-4 border-black" style="font-family: 'Impact';">
    🎸 Queen
  </span>
</div>`,
    cssCode: `.breadcrumb-glitch {
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: #fde047;
  padding: 1.5rem;
  border: 8px solid #d946ef;
  border-radius: 0.375rem;
  font-family: 'Impact';
  animation: glitch 0.4s infinite;
  position: relative;
}

.breadcrumb-glitch a {
  color: #000000;
  font-weight: 900;
  font-size: 1.125rem;
  text-decoration: none;
  transition: color 0.3s;
}

.breadcrumb-glitch a:hover {
  color: #dc2626;
}

.breadcrumb-glitch span:last-child {
  background-color: #dc2626;
  color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  border: 4px solid #000000;
}

.breadcrumb-glitch .separator {
  color: #000000;
  font-size: 1.875rem;
  font-weight: 900;
  animation: shake 0.3s infinite;
}

@keyframes glitch {
  0% { transform: translate(0); }
  20% { transform: translate(-5px, 5px); }
  40% { transform: translate(-5px, -5px); }
  60% { transform: translate(5px, 5px); }
  80% { transform: translate(5px, -5px); }
  100% { transform: translate(0); }
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}`
  },
  breadcrumb6: {
    name: 'Pulsing Jokerman Breadcrumb',
    className: 'flex items-center space-x-5 pulse bg-gradient-to-r from-green-400 to-blue-500 p-6 border-8 border-red-600 rounded-xl',
    items: ['🏢 Company', '👥 Team', '💼 Projects', '🎨 Design'],
    reactCode: `<div className="flex items-center space-x-5 pulse bg-gradient-to-r from-green-400 to-blue-500 p-6 border-8 border-red-600 rounded-xl">
  <a href="#" className="text-white font-black text-lg hover:text-yellow-300 transition-colors" style={{ fontFamily: 'Jokerman' }}>
    🏢 Company
  </a>
  <span className="text-white text-3xl font-black wobble">✨</span>
  <a href="#" className="text-white font-black text-lg hover:text-yellow-300 transition-colors" style={{ fontFamily: 'Jokerman' }}>
    👥 Team
  </a>
  <span className="text-white text-3xl font-black wobble">✨</span>
  <a href="#" className="text-white font-black text-lg hover:text-yellow-300 transition-colors" style={{ fontFamily: 'Jokerman' }}>
    💼 Projects
  </a>
  <span className="text-white text-3xl font-black wobble">✨</span>
  <span className="text-black font-black text-lg bg-yellow-300 px-4 py-2 rounded-xl border-4 border-white" style={{ fontFamily: 'Jokerman' }}>
    🎨 Design
  </span>
</div>`,
    htmlCode: `<div class="flex items-center space-x-5 pulse bg-gradient-to-r from-green-400 to-blue-500 p-6 border-8 border-red-600 rounded-xl">
  <a href="#" class="text-white font-black text-lg hover:text-yellow-300 transition-colors" style="font-family: 'Jokerman';">
    🏢 Company
  </a>
  <span class="text-white text-3xl font-black wobble">✨</span>
  <a href="#" class="text-white font-black text-lg hover:text-yellow-300 transition-colors" style="font-family: 'Jokerman';">
    👥 Team
  </a>
  <span class="text-white text-3xl font-black wobble">✨</span>
  <a href="#" class="text-white font-black text-lg hover:text-yellow-300 transition-colors" style="font-family: 'Jokerman';">
    💼 Projects
  </a>
  <span class="text-white text-3xl font-black wobble">✨</span>
  <span class="text-black font-black text-lg bg-yellow-300 px-4 py-2 rounded-xl border-4 border-white" style="font-family: 'Jokerman';">
    🎨 Design
  </span>
</div>`,
    cssCode: `.breadcrumb-pulse {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  background: linear-gradient(to right, #4ade80, #3b82f6);
  padding: 1.5rem;
  border: 8px solid #dc2626;
  border-radius: 0.75rem;
  font-family: 'Jokerman';
  animation: pulse 0.5s infinite;
}

.breadcrumb-pulse a {
  color: #ffffff;
  font-weight: 900;
  font-size: 1.125rem;
  text-decoration: none;
  transition: color 0.3s;
}

.breadcrumb-pulse a:hover {
  color: #fde047;
}

.breadcrumb-pulse span:last-child {
  background-color: #fde047;
  color: #000000;
  padding: 0.5rem 1rem;
  border-radius: 0.75rem;
  border: 4px solid #ffffff;
}

.breadcrumb-pulse .separator {
  color: #ffffff;
  font-size: 1.875rem;
  font-weight: 900;
  animation: wobble 0.7s infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

@keyframes wobble {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-10deg); }
  75% { transform: rotate(10deg); }
}`
  }
};

export function BreadcrumbSample() {
  const [selectedBreadcrumb, setSelectedBreadcrumb] = useState('breadcrumb1');
  const [viewMode, setViewMode] = useState('preview');
  const [codeLanguage, setCodeLanguage] = useState('react');
  const [styleType, setStyleType] = useState('tailwindcss');
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedCss, setCopiedCss] = useState(false);

  const config = breadcrumbConfigs[selectedBreadcrumb];

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
        ? `<div className="breadcrumb-${selectedBreadcrumb.slice(-1)}">\n  {/* Breadcrumb items */}\n</div>`
        : `<div class="breadcrumb-${selectedBreadcrumb.slice(-1)}">\n  <!-- Breadcrumb items -->\n</div>`;
    }
  };

  const renderBreadcrumbItems = () => {
    return config.items.map((item, index) => (
      <React.Fragment key={index}>
        {index === config.items.length - 1 ? (
          <span className={`${
            selectedBreadcrumb === 'breadcrumb1' ? 'text-black font-black text-lg bg-yellow-300 px-3 py-1 rounded-full' :
            selectedBreadcrumb === 'breadcrumb2' ? 'text-black font-black text-xl bg-white px-4 py-2 rounded-full border-4 border-black' :
            selectedBreadcrumb === 'breadcrumb3' ? 'text-purple-600 font-black text-lg bg-pink-400 px-4 py-2 rounded-lg border-4 border-white' :
            selectedBreadcrumb === 'breadcrumb4' ? 'text-white font-black text-xl bg-black px-5 py-3 rounded-full border-4 border-yellow-300' :
            selectedBreadcrumb === 'breadcrumb5' ? 'text-white font-black text-lg bg-red-600 px-4 py-2 rounded-md border-4 border-black' :
            'text-black font-black text-lg bg-yellow-300 px-4 py-2 rounded-xl border-4 border-white'
          }`}>
            {item}
          </span>
        ) : (
          <>
            <a href="#" className={`${
              selectedBreadcrumb === 'breadcrumb1' ? 'text-black font-black text-lg hover:text-yellow-300' :
              selectedBreadcrumb === 'breadcrumb2' ? 'text-black font-black text-xl hover:text-white' :
              selectedBreadcrumb === 'breadcrumb3' ? 'text-yellow-300 font-black text-lg hover:text-pink-400' :
              selectedBreadcrumb === 'breadcrumb4' ? 'text-black font-black text-xl hover:text-white' :
              selectedBreadcrumb === 'breadcrumb5' ? 'text-black font-black text-lg hover:text-red-600' :
              'text-white font-black text-lg hover:text-yellow-300'
            } transition-colors`}>
              {item}
            </a>
            <span className={`${
              selectedBreadcrumb === 'breadcrumb1' ? 'text-black text-2xl font-black' :
              selectedBreadcrumb === 'breadcrumb2' ? 'text-black text-3xl font-black animate-bounce' :
              selectedBreadcrumb === 'breadcrumb3' ? 'text-yellow-300 text-2xl font-black pulse' :
              selectedBreadcrumb === 'breadcrumb4' ? 'text-black text-4xl font-black spin' :
              selectedBreadcrumb === 'breadcrumb5' ? 'text-black text-3xl font-black shake' :
              'text-white text-3xl font-black wobble'
            }`}>
              {selectedBreadcrumb === 'breadcrumb1' ? '❯' :
               selectedBreadcrumb === 'breadcrumb2' ? '⚡' :
               selectedBreadcrumb === 'breadcrumb3' ? '🎯' :
               selectedBreadcrumb === 'breadcrumb4' ? '🌀' :
               selectedBreadcrumb === 'breadcrumb5' ? '💥' : '✨'}
            </span>
          </>
        )}
      </React.Fragment>
    ));
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
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes wobble {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-10deg); }
          75% { transform: rotate(10deg); }
        }
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-5px, 5px); }
          40% { transform: translate(-5px, -5px); }
          60% { transform: translate(5px, 5px); }
          80% { transform: translate(5px, -5px); }
          100% { transform: translate(0); }
        }
        @keyframes colorflip {
          0%, 100% { color: #FFFF00; }
          33% { color: #FF00FF; }
          66% { color: #00FFFF; }
        }
        .shake { animation: shake 0.5s infinite; }
        .spin { animation: spin 2s linear infinite; }
        .pulse { animation: pulse 0.5s infinite; }
        .bounce { animation: bounce 0.8s infinite; }
        .wobble { animation: wobble 0.7s infinite; }
        .glitch { animation: glitch 0.4s infinite; }
        .colorflip { animation: colorflip 2s infinite; }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 bg-black/20 p-6 border-8 border-lime-400 transform -rotate-2">
          <h1
            className="text-4xl md:text-6xl font-black mb-4 colorflip"
            style={{ fontFamily: FONTS.COMIC_SANS }}
          >
            🍞 DUMBUI BREADCRUMBS 🍞
          </h1>
          <p
            className="text-xl md:text-2xl font-bold"
            style={{ fontFamily: FONTS.TIMES_NEW_ROMAN, color: COLORS.CYAN }}
          >
            The MOST CONFUSING Navigation Ever!
          </p>
        </div>

        <div className="mb-6 bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-500 p-4 border-8 border-red-600 transform rotate-1">
          <div className="flex flex-wrap gap-3 justify-center">
            {Object.keys(breadcrumbConfigs).map((breadcrumb) => (
              <button
                key={breadcrumb}
                onClick={() => setSelectedBreadcrumb(breadcrumb)}
                className={`px-4 py-2 font-black text-sm md:text-lg border-4 transition-all ${
                  selectedBreadcrumb === breadcrumb
                    ? 'bg-lime-400 text-black border-black scale-110 shake'
                    : 'bg-purple-600 text-yellow-300 border-yellow-300 hover:scale-105'
                }`}
                style={{ fontFamily: FONTS.PAPYRUS }}
              >
                {breadcrumbConfigs[breadcrumb].name.toUpperCase()}
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
                  fontFamily: config.reactCode.includes('Comic Sans') ? FONTS.COMIC_SANS : 
                           config.reactCode.includes('Papyrus') ? FONTS.PAPYRUS :
                           config.reactCode.includes('Times New Roman') ? FONTS.TIMES_NEW_ROMAN :
                           config.reactCode.includes('Impact') ? FONTS.IMPACT :
                           config.reactCode.includes('Brush Script') ? FONTS.BRUSH_SCRIPT : FONTS.JOKERMAN
                }}
              >
                {renderBreadcrumbItems()}
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
            ⚠️ WARNING: These breadcrumbs may cause NAVIGATION NIGHTMARES! ⚠️
          </p>
        </div>
      </div>
    </div>
  );
}