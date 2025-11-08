import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy, Menu, X } from 'lucide-react';

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
  NEON_ORANGE: '#FF5F1F',
  ACID_GREEN: '#B0FF00'
};

const navbarConfigs = {
  navbar1: {
    name: 'Disco Disaster Navbar',
    className: 'flex items-center justify-between p-8 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 border-b-8 border-double border-yellow-400 shadow-2xl rotate-1',
    reactCode: `<nav className="flex items-center justify-between p-8 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 border-b-8 border-double border-yellow-400 shadow-2xl rotate-1">
  <div className="flex items-center space-x-4">
    <h1 className="text-4xl font-black text-lime-400 shake" 
        style={{ fontFamily: "Comic Sans MS", textShadow: '3px 3px 0 #000' }}>
      🎪 MY SITE 🎪
    </h1>
    <div className="w-12 h-12 bg-cyan-400 border-4 border-black rounded-full spin"></div>
  </div>
  
  <div className="flex space-x-6 items-center">
    <a href="#home" className="px-6 py-3 bg-yellow-300 text-black font-bold text-xl border-4 border-black hover:bg-pink-400 hover:scale-150 hover:rotate-45 transition-all bounce">
      🏠 HOME
    </a>
    <a href="#about" className="px-6 py-3 bg-green-400 text-white font-bold text-xl border-4 border-dashed border-white hover:bg-blue-500 hover:skew-x-12 hover:animate-pulse transition-all">
      👨‍💼 ABOUT
    </a>
    <a href="#products" className="px-6 py-3 bg-red-500 text-yellow-300 font-bold text-xl border-4 border-dotted border-cyan-400 hover:bg-purple-600 hover:border-8 hover:border-double transition-all blink">
      🛍️ PRODUCTS
    </a>
    <a href="#contact" className="px-6 py-3 bg-blue-400 text-white font-bold text-xl border-4 border-white hover:bg-orange-500 hover:text-black hover:border-green-400 hover:scale-125 transition-all">
      📞 CONTACT
    </a>
  </div>
  
  <button className="p-4 bg-black text-white border-4 border-white rounded-lg hover:bg-white hover:text-black hover:border-red-500 hover:rotate-180 transition-transform">
    <Menu size={32} />
  </button>
</nav>`,
    htmlCode: `<nav class="flex items-center justify-between p-8 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 border-b-8 border-double border-yellow-400 shadow-2xl rotate-1">
  <div class="flex items-center space-x-4">
    <h1 class="text-4xl font-black text-lime-400 shake" 
         style="font-family: 'Comic Sans MS'; text-shadow: 3px 3px 0 #000;">
      🎪 MY SITE 🎪
    </h1>
    <div class="w-12 h-12 bg-cyan-400 border-4 border-black rounded-full spin"></div>
  </div>
  
  <div class="flex space-x-6 items-center">
    <a href="#home" class="px-6 py-3 bg-yellow-300 text-black font-bold text-xl border-4 border-black hover:bg-pink-400 hover:scale-150 hover:rotate-45 transition-all bounce">
      🏠 HOME
    </a>
    <a href="#about" class="px-6 py-3 bg-green-400 text-white font-bold text-xl border-4 border-dashed border-white hover:bg-blue-500 hover:skew-x-12 hover:animate-pulse transition-all">
      👨‍💼 ABOUT
    </a>
    <a href="#products" class="px-6 py-3 bg-red-500 text-yellow-300 font-bold text-xl border-4 border-dotted border-cyan-400 hover:bg-purple-600 hover:border-8 hover:border-double transition-all blink">
      🛍️ PRODUCTS
    </a>
    <a href="#contact" class="px-6 py-3 bg-blue-400 text-white font-bold text-xl border-4 border-white hover:bg-orange-500 hover:text-black hover:border-green-400 hover:scale-125 transition-all">
      📞 CONTACT
    </a>
  </div>
  
  <button class="p-4 bg-black text-white border-4 border-white rounded-lg hover:bg-white hover:text-black hover:border-red-500 hover:rotate-180 transition-transform">
    <svg>...</svg>
  </button>
</nav>`,
    cssCode: `.navbar-disco {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  background: linear-gradient(90deg, #9333ea, #ec4899, #ef4444);
  border-bottom: 8px double #facc15;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  transform: rotate(1deg);
}

/* ... rest of the CSS styles ... */`
  },

  navbar2: {
    name: 'WordArt Nightmare Navbar',
    className: 'flex flex-col md:flex-row items-center justify-between p-6 bg-gradient-to-b from-blue-400 via-green-400 to-yellow-400 border-8 border-dotted border-red-500 shadow-inner transform -rotate-2',
    reactCode: `<nav className="flex flex-col md:flex-row items-center justify-between p-6 bg-gradient-to-b from-blue-400 via-green-400 to-yellow-400 border-8 border-dotted border-red-500 shadow-inner transform -rotate-2">
  <div className="flex items-center space-x-3 mb-4 md:mb-0">
    <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 border-4 border-white rounded-lg skew-x-12 spin-slow"></div>
    <h1 className="text-5xl font-bold rainbow-text wave" 
        style={{ fontFamily: "Jokerman", textShadow: '4px 4px 4px #000' }}>
      🌈 WELCOME 🌈
    </h1>
    <div className="w-10 h-10 bg-red-500 border-4 border-yellow-300 rounded-full bounce-fast"></div>
  </div>
  
  <div className="flex flex-wrap justify-center gap-3 md:gap-4">
    <a href="#home" className="px-5 py-2 bg-white text-purple-600 font-extrabold text-lg border-4 border-green-500 rounded-full hover:bg-black hover:text-yellow-300 hover:scale-125 hover:rotate-12 hover:border-blue-400 transition-all wobble">
      🚀 HOME
    </a>
    <a href="#services" className="px-5 py-2 bg-black text-cyan-300 font-extrabold text-lg border-4 border-yellow-400 border-double hover:bg-white hover:text-red-500 hover:skew-y-12 hover:border-pink-500 transition-all shake-slow">
      💎 SERVICES
    </a>
    <a href="#portfolio" className="px-5 py-2 bg-gradient-to-r from-red-500 to-orange-400 text-white font-extrabold text-lg border-4 border-white border-dashed hover:from-green-400 hover:to-blue-400 hover:text-black hover:scale-110 hover:border-black transition-all blink-slow">
      🎨 PORTFOLIO
    </a>
    <a href="#testimonials" className="px-5 py-2 bg-yellow-300 text-black font-extrabold text-lg border-4 border-red-600 hover:bg-purple-600 hover:text-white hover:border-green-400 hover:-rotate-45 transition-all">
      ⭐ REVIEWS
    </a>
    <a href="#contact" className="px-5 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-extrabold text-lg border-4 border-lime-400 border-dotted hover:bg-pink-500 hover:scale-150 hover:border-white transition-all bounce">
      📬 CONTACT
    </a>
  </div>
  
  <div className="mt-4 md:mt-0 flex items-center space-x-3">
    <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold border-4 border-yellow-300 rounded-lg hover:from-green-400 hover:to-cyan-400 hover:text-black hover:scale-125 hover:rotate-6 transition-all">
      🔔
    </button>
    <button className="px-4 py-2 bg-gradient-to-r from-orange-400 to-red-500 text-white font-bold border-4 border-white rounded-lg hover:from-blue-400 hover:to-purple-500 hover:scale-110 hover:-rotate-6 transition-all">
      👤
    </button>
    <button className="p-3 bg-black text-white border-4 border-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black hover:border-yellow-300 hover:rotate-90 transition-transform">
      <Menu size={24} />
    </button>
  </div>
</nav>`,
    htmlCode: `<nav class="flex flex-col md:flex-row items-center justify-between p-6 bg-gradient-to-b from-blue-400 via-green-400 to-yellow-400 border-8 border-dotted border-red-500 shadow-inner transform -rotate-2">
  <div class="flex items-center space-x-3 mb-4 md:mb-0">
    <div class="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 border-4 border-white rounded-lg skew-x-12 spin-slow"></div>
    <h1 class="text-5xl font-bold rainbow-text wave" 
        style="font-family: 'Jokerman'; text-shadow: 4px 4px 4px #000">
      🌈 WELCOME 🌈
    </h1>
    <div class="w-10 h-10 bg-red-500 border-4 border-yellow-300 rounded-full bounce-fast"></div>
  </div>
  
  <div class="flex flex-wrap justify-center gap-3 md:gap-4">
    <a href="#home" class="px-5 py-2 bg-white text-purple-600 font-extrabold text-lg border-4 border-green-500 rounded-full hover:bg-black hover:text-yellow-300 hover:scale-125 hover:rotate-12 hover:border-blue-400 transition-all wobble">
      🚀 HOME
    </a>
    <a href="#services" class="px-5 py-2 bg-black text-cyan-300 font-extrabold text-lg border-4 border-yellow-400 border-double hover:bg-white hover:text-red-500 hover:skew-y-12 hover:border-pink-500 transition-all shake-slow">
      💎 SERVICES
    </a>
    <a href="#portfolio" class="px-5 py-2 bg-gradient-to-r from-red-500 to-orange-400 text-white font-extrabold text-lg border-4 border-white border-dashed hover:from-green-400 hover:to-blue-400 hover:text-black hover:scale-110 hover:border-black transition-all blink-slow">
      🎨 PORTFOLIO
    </a>
    <a href="#testimonials" class="px-5 py-2 bg-yellow-300 text-black font-extrabold text-lg border-4 border-red-600 hover:bg-purple-600 hover:text-white hover:border-green-400 hover:-rotate-45 transition-all">
      ⭐ REVIEWS
    </a>
    <a href="#contact" class="px-5 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-extrabold text-lg border-4 border-lime-400 border-dotted hover:bg-pink-500 hover:scale-150 hover:border-white transition-all bounce">
      📬 CONTACT
    </a>
  </div>
  
  <div class="mt-4 md:mt-0 flex items-center space-x-3">
    <button class="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold border-4 border-yellow-300 rounded-lg hover:from-green-400 hover:to-cyan-400 hover:text-black hover:scale-125 hover:rotate-6 transition-all">
      🔔
    </button>
    <button class="px-4 py-2 bg-gradient-to-r from-orange-400 to-red-500 text-white font-bold border-4 border-white rounded-lg hover:from-blue-400 hover:to-purple-500 hover:scale-110 hover:-rotate-6 transition-all">
      👤
    </button>
    <button class="p-3 bg-black text-white border-4 border-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black hover:border-yellow-300 hover:rotate-90 transition-transform">
      <svg>...</svg>
    </button>
  </div>
</nav>`,
    cssCode: `.navbar-wordart {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  background: linear-gradient(180deg, #60a5fa, #4ade80, #facc15);
  border: 8px dotted #ef4444;
  box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  transform: rotate(-2deg);
}

/* ... CSS styles for navbar2 ... */`
  },

  navbar3: {
    name: 'Geocities Horror Navbar',
    className: 'flex flex-col md:flex-row items-center justify-between p-4 bg-gradient-to-r from-purple-700 via-pink-600 to-red-600 border-12 border-double border-green-400 border-yellow-300 border-blue-400 shadow-lg transform rotate-3',
    reactCode: `<nav className="flex flex-col md:flex-row items-center justify-between p-4 bg-gradient-to-r from-purple-700 via-pink-600 to-red-600 border-12 border-double border-green-400 border-yellow-300 border-blue-400 shadow-lg transform rotate-3">
  <div className="flex items-center space-x-4 mb-4 md:mb-0">
    <div className="relative">
      <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-600 border-6 border-dotted border-yellow-400 rounded-lg spin-reverse"></div>
      <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 border-3 border-white rounded-full blink-fast"></div>
    </div>
    <h1 className="text-4xl md:text-6xl font-black italic underline rainbow-bg text-stroke jiggle" 
        style={{ fontFamily: "Brush Script MT", fontWeight: 900 }}>
      ✨ MY ✨<br/>AWESOME<br/>SITE! ✨
    </h1>
    <div className="hidden md:flex space-x-2">
      <div className="w-6 h-6 bg-green-400 border-2 border-white rounded-full bounce"></div>
      <div className="w-6 h-6 bg-yellow-300 border-2 border-white rounded-full bounce" style={{animationDelay: '0.2s'}}></div>
      <div className="w-6 h-6 bg-red-500 border-2 border-white rounded-full bounce" style={{animationDelay: '0.4s'}}></div>
    </div>
  </div>
  
  <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-4 md:mb-0">
    <a href="#home" className="px-4 py-3 bg-white text-blue-600 font-bold text-sm border-4 border-red-500 rounded-tl-3xl rounded-br-3xl hover:bg-blue-600 hover:text-white hover:border-yellow-300 hover:scale-125 hover:skew-x-12 transition-all wobble-fast">
      🏡 HOME SWEET HOME
    </a>
    <a href="#about" className="px-4 py-3 bg-yellow-300 text-black font-bold text-sm border-4 border-green-500 border-dashed rounded-tr-3xl rounded-bl-3xl hover:bg-purple-600 hover:text-white hover:border-cyan-400 hover:scale-110 hover:-skew-y-12 transition-all shake">
      ℹ️ ABOUT ME!!!
    </a>
    <a href="#cool" className="px-4 py-3 bg-cyan-400 text-black font-bold text-sm border-4 border-purple-600 border-dotted rounded-3xl hover:bg-red-500 hover:text-yellow-300 hover:border-white hover:rotate-45 hover:scale-130 transition-all blink">
      😎 COOL STUFF
    </a>
    <a href="#links" className="px-4 py-3 bg-lime-400 text-red-600 font-bold text-sm border-4 border-blue-500 rounded-bl-3xl rounded-tr-3xl hover:bg-pink-500 hover:text-white hover:border-black hover:-rotate-25 transition-all">
      🔗 LINKS PAGE
    </a>
    <a href="#guestbook" className="px-4 py-3 bg-orange-400 text-white font-bold text-sm border-4 border-black rounded-tl-3xl rounded-br-3xl hover:bg-green-500 hover:text-black hover:border-yellow-300 hover:scale-115 transition-all bounce">
      📝 SIGN GUESTBOOK
    </a>
  </div>
  
  <div className="flex items-center space-x-3">
    <div className="text-white font-bold text-lg bg-black/50 px-3 py-1 border-2 border-yellow-400 rounded-md marquee">
      <span>VISITOR COUNT: 9999!!! 🎉</span>
    </div>
    <button className="p-3 bg-gradient-to-r from-green-400 to-blue-500 text-white border-4 border-yellow-300 rounded-full hover:from-pink-500 hover:to-purple-600 hover:border-white hover:rotate-180 transition-transform">
      <Menu size={20} />
    </button>
  </div>
</nav>`,
    htmlCode: `<nav class="flex flex-col md:flex-row items-center justify-between p-4 bg-gradient-to-r from-purple-700 via-pink-600 to-red-600 border-12 border-double border-green-400 border-yellow-300 border-blue-400 shadow-lg transform rotate-3">
  <div class="flex items-center space-x-4 mb-4 md:mb-0">
    <div class="relative">
      <div class="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-600 border-6 border-dotted border-yellow-400 rounded-lg spin-reverse"></div>
      <div class="absolute -top-2 -right-2 w-8 h-8 bg-red-500 border-3 border-white rounded-full blink-fast"></div>
    </div>
    <h1 class="text-4xl md:text-6xl font-black italic underline rainbow-bg text-stroke jiggle" 
        style="font-family: 'Brush Script MT'; font-weight: 900">
      ✨ MY ✨<br/>AWESOME<br/>SITE! ✨
    </h1>
    <div class="hidden md:flex space-x-2">
      <div class="w-6 h-6 bg-green-400 border-2 border-white rounded-full bounce"></div>
      <div class="w-6 h-6 bg-yellow-300 border-2 border-white rounded-full bounce" style="animation-delay: 0.2s"></div>
      <div class="w-6 h-6 bg-red-500 border-2 border-white rounded-full bounce" style="animation-delay: 0.4s"></div>
    </div>
  </div>
  
  <div class="flex flex-wrap justify-center gap-2 md:gap-3 mb-4 md:mb-0">
    <a href="#home" class="px-4 py-3 bg-white text-blue-600 font-bold text-sm border-4 border-red-500 rounded-tl-3xl rounded-br-3xl hover:bg-blue-600 hover:text-white hover:border-yellow-300 hover:scale-125 hover:skew-x-12 transition-all wobble-fast">
      🏡 HOME SWEET HOME
    </a>
    <a href="#about" class="px-4 py-3 bg-yellow-300 text-black font-bold text-sm border-4 border-green-500 border-dashed rounded-tr-3xl rounded-bl-3xl hover:bg-purple-600 hover:text-white hover:border-cyan-400 hover:scale-110 hover:-skew-y-12 transition-all shake">
      ℹ️ ABOUT ME!!!
    </a>
    <a href="#cool" class="px-4 py-3 bg-cyan-400 text-black font-bold text-sm border-4 border-purple-600 border-dotted rounded-3xl hover:bg-red-500 hover:text-yellow-300 hover:border-white hover:rotate-45 hover:scale-130 transition-all blink">
      😎 COOL STUFF
    </a>
    <a href="#links" class="px-4 py-3 bg-lime-400 text-red-600 font-bold text-sm border-4 border-blue-500 rounded-bl-3xl rounded-tr-3xl hover:bg-pink-500 hover:text-white hover:border-black hover:-rotate-25 transition-all">
      🔗 LINKS PAGE
    </a>
    <a href="#guestbook" class="px-4 py-3 bg-orange-400 text-white font-bold text-sm border-4 border-black rounded-tl-3xl rounded-br-3xl hover:bg-green-500 hover:text-black hover:border-yellow-300 hover:scale-115 transition-all bounce">
      📝 SIGN GUESTBOOK
    </a>
  </div>
  
  <div class="flex items-center space-x-3">
    <div class="text-white font-bold text-lg bg-black/50 px-3 py-1 border-2 border-yellow-400 rounded-md marquee">
      <span>VISITOR COUNT: 9999!!! 🎉</span>
    </div>
    <button class="p-3 bg-gradient-to-r from-green-400 to-blue-500 text-white border-4 border-yellow-300 rounded-full hover:from-pink-500 hover:to-purple-600 hover:border-white hover:rotate-180 transition-transform">
      <svg>...</svg>
    </button>
  </div>
</nav>`,
    cssCode: `.navbar-geocities {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background: linear-gradient(90deg, #7e22ce, #db2777, #dc2626);
  border: 12px double;
  border-image: linear-gradient(45deg, #4ade80, #facc15, #60a5fa) 1;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.5);
  transform: rotate(3deg);
}

/* ... CSS styles for navbar3 ... */`
  }
};

export function NavbarSample() {
  const [selectedNavbar, setSelectedNavbar] = useState('navbar1');
  const [viewMode, setViewMode] = useState('preview');
  const [codeLanguage, setCodeLanguage] = useState('react');
  const [styleType, setStyleType] = useState('tailwindcss');
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedCss, setCopiedCss] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const config = navbarConfigs[selectedNavbar];

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
        ? `<nav className="navbar-${selectedNavbar.replace('navbar', '')}">\n  <!-- Navbar content -->\n</nav>`
        : `<nav class="navbar-${selectedNavbar.replace('navbar', '')}">\n  <!-- Navbar content -->\n</nav>`;
    }
  };

  const renderNavbarPreview = () => {
    switch (selectedNavbar) {
      case 'navbar1':
        return (
          <nav className={config.className}>
            <div className="flex items-center space-x-4">
              <h1 
                className="text-4xl font-black text-lime-400 shake"
                style={{ fontFamily: FONTS.COMIC_SANS, textShadow: '3px 3px 0 #000' }}
              >
                🎪 MY SITE 🎪
              </h1>
              <div className="w-12 h-12 bg-cyan-400 border-4 border-black rounded-full spin"></div>
            </div>
            
            <div className="flex space-x-6 items-center">
              <a 
                href="#home" 
                className="px-6 py-3 bg-yellow-300 text-black font-bold text-xl border-4 border-black hover:bg-pink-400 hover:scale-150 hover:rotate-45 transition-all bounce"
                style={{ fontFamily: FONTS.IMPACT }}
              >
                🏠 HOME
              </a>
              <a 
                href="#about" 
                className="px-6 py-3 bg-green-400 text-white font-bold text-xl border-4 border-dashed border-white hover:bg-blue-500 hover:skew-x-12 hover:animate-pulse transition-all"
                style={{ fontFamily: FONTS.IMPACT }}
              >
                👨‍💼 ABOUT
              </a>
              <a 
                href="#products" 
                className="px-6 py-3 bg-red-500 text-yellow-300 font-bold text-xl border-4 border-dotted border-cyan-400 hover:bg-purple-600 hover:border-8 hover:border-double transition-all blink"
                style={{ fontFamily: FONTS.IMPACT }}
              >
                🛍️ PRODUCTS
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 bg-blue-400 text-white font-bold text-xl border-4 border-white hover:bg-orange-500 hover:text-black hover:border-green-400 hover:scale-125 transition-all"
                style={{ fontFamily: FONTS.IMPACT }}
              >
                📞 CONTACT
              </a>
            </div>
            
            <button 
              className="p-4 bg-black text-white border-4 border-white rounded-lg hover:bg-white hover:text-black hover:border-red-500 hover:rotate-180 transition-transform"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </nav>
        );

      case 'navbar2':
        return (
          <nav className={config.className}>
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 border-4 border-white rounded-lg skew-x-12 spin-slow"></div>
              <h1 
                className="text-5xl font-bold rainbow-text wave"
                style={{ fontFamily: FONTS.JOKERMAN, textShadow: '4px 4px 4px #000' }}
              >
                🌈 WELCOME 🌈
              </h1>
              <div className="w-10 h-10 bg-red-500 border-4 border-yellow-300 rounded-full bounce-fast"></div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {[
                { text: '🚀 HOME', href: '#home' },
                { text: '💎 SERVICES', href: '#services' },
                { text: '🎨 PORTFOLIO', href: '#portfolio' },
                { text: '⭐ REVIEWS', href: '#testimonials' },
                { text: '📬 CONTACT', href: '#contact' }
              ].map((item, index) => (
                <a 
                  key={index}
                  href={item.href}
                  className="px-5 py-2 font-extrabold text-lg border-4 transition-all"
                  style={{ 
                    fontFamily: FONTS.IMPACT,
                    ...(index === 0 && { background: 'white', color: '#9333ea', borderColor: '#22c55e' }),
                    ...(index === 1 && { background: 'black', color: '#22d3ee', borderColor: '#facc15', borderStyle: 'double' }),
                    ...(index === 2 && { background: 'linear-gradient(to right, #ef4444, #fb923c)', color: 'white', borderColor: 'white', borderStyle: 'dashed' }),
                    ...(index === 3 && { background: '#fef08a', color: 'black', borderColor: '#dc2626' }),
                    ...(index === 4 && { background: 'linear-gradient(to right, #22d3ee, #3b82f6)', color: 'black', borderColor: '#a3e635', borderStyle: 'dotted' })
                  }}
                >
                  {item.text}
                </a>
              ))}
            </div>
            
            <div className="mt-4 md:mt-0 flex items-center space-x-3">
              <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold border-4 border-yellow-300 rounded-lg hover:from-green-400 hover:to-cyan-400 hover:text-black hover:scale-125 hover:rotate-6 transition-all">
                🔔
              </button>
              <button className="px-4 py-2 bg-gradient-to-r from-orange-400 to-red-500 text-white font-bold border-4 border-white rounded-lg hover:from-blue-400 hover:to-purple-500 hover:scale-110 hover:-rotate-6 transition-all">
                👤
              </button>
              <button 
                className="p-3 bg-black text-white border-4 border-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black hover:border-yellow-300 hover:rotate-90 transition-transform"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </nav>
        );

      case 'navbar3':
        return (
          <nav className={config.className}>
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-600 border-6 border-dotted border-yellow-400 rounded-lg spin-reverse"></div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 border-3 border-white rounded-full blink-fast"></div>
              </div>
              <h1 
                className="text-4xl md:text-6xl font-black italic underline rainbow-bg text-stroke jiggle"
                style={{ fontFamily: FONTS.BRUSH_SCRIPT, fontWeight: 900 }}
              >
                ✨ MY ✨<br/>AWESOME<br/>SITE! ✨
              </h1>
              <div className="hidden md:flex space-x-2">
                <div className="w-6 h-6 bg-green-400 border-2 border-white rounded-full bounce"></div>
                <div className="w-6 h-6 bg-yellow-300 border-2 border-white rounded-full bounce" style={{animationDelay: '0.2s'}}></div>
                <div className="w-6 h-6 bg-red-500 border-2 border-white rounded-full bounce" style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-4 md:mb-0">
              {[
                { text: '🏡 HOME SWEET HOME', href: '#home' },
                { text: 'ℹ️ ABOUT ME!!!', href: '#about' },
                { text: '😎 COOL STUFF', href: '#cool' },
                { text: '🔗 LINKS PAGE', href: '#links' },
                { text: '📝 SIGN GUESTBOOK', href: '#guestbook' }
              ].map((item, index) => (
                <a 
                  key={index}
                  href={item.href}
                  className="px-4 py-3 font-bold text-sm border-4 transition-all"
                  style={{ 
                    fontFamily: FONTS.COMIC_SANS,
                    ...(index === 0 && { background: 'white', color: '#2563eb', borderColor: '#ef4444', borderRadius: '1rem 0 1rem 0' }),
                    ...(index === 1 && { background: '#fef08a', color: 'black', borderColor: '#22c55e', borderStyle: 'dashed', borderRadius: '0 1rem 0 1rem' }),
                    ...(index === 2 && { background: '#22d3ee', color: 'black', borderColor: '#9333ea', borderStyle: 'dotted', borderRadius: '1.5rem' }),
                    ...(index === 3 && { background: '#a3e635', color: '#dc2626', borderColor: '#3b82f6', borderRadius: '0 1rem 1rem 0' }),
                    ...(index === 4 && { background: '#fb923c', color: 'white', borderColor: 'black', borderRadius: '1rem 0 0 1rem' })
                  }}
                >
                  {item.text}
                </a>
              ))}
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="text-white font-bold text-lg bg-black/50 px-3 py-1 border-2 border-yellow-400 rounded-md marquee">
                <span>VISITOR COUNT: 9999!!! 🎉</span>
              </div>
              <button 
                className="p-3 bg-gradient-to-r from-green-400 to-blue-500 text-white border-4 border-yellow-300 rounded-full hover:from-pink-500 hover:to-purple-600 hover:border-white hover:rotate-180 transition-transform"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </nav>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen p-4 md:p-8" style={{ 
      background: 'linear-gradient(45deg, #FF00FF 0%, #00FFFF 50%, #FFFF00 100%)',
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
        @keyframes spin-reverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes colorflip {
          0%, 100% { color: #FFFF00; }
          33% { color: #FF00FF; }
          66% { color: #00FFFF; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes wave {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-5px) rotate(2deg); }
          75% { transform: translateY(5px) rotate(-2deg); }
        }
        @keyframes jiggle {
          0%, 100% { transform: rotate(0deg) scale(1); }
          25% { transform: rotate(1deg) scale(1.02); }
          50% { transform: rotate(-1deg) scale(0.98); }
          75% { transform: rotate(0.5deg) scale(1.01); }
        }
        @keyframes wobble {
          0%, 100% { transform: translateX(0%); }
          15% { transform: translateX(-5%) rotate(-5deg); }
          30% { transform: translateX(4%) rotate(3deg); }
          45% { transform: translateX(-3%) rotate(-3deg); }
          60% { transform: translateX(2%) rotate(2deg); }
          75% { transform: translateX(-1%) rotate(-1deg); }
        }
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .shake { animation: shake 0.5s infinite; }
        .spin { animation: spin 1s linear infinite; }
        .spin-slow { animation: spin 3s linear infinite; }
        .spin-reverse { animation: spin-reverse 2s linear infinite; }
        .bounce { animation: bounce 1s infinite; }
        .bounce-fast { animation: bounce 0.5s infinite; }
        .colorflip { animation: colorflip 2s infinite; }
        .blink { animation: blink 0.3s infinite; }
        .blink-fast { animation: blink 0.1s infinite; }
        .blink-slow { animation: blink 1s infinite; }
        .wave { animation: wave 2s infinite; }
        .jiggle { animation: jiggle 0.5s infinite; }
        .wobble { animation: wobble 0.8s infinite; }
        .wobble-fast { animation: wobble 0.4s infinite; }
        .shake-slow { animation: shake 1s infinite; }
        .marquee { overflow: hidden; white-space: nowrap; }
        .marquee span { display: inline-block; animation: marquee 10s linear infinite; }
        .rainbow-text {
          background: linear-gradient(45deg, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #4B0082, #9400D3);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 400% 400%;
          animation: rainbow 3s ease infinite;
        }
        .rainbow-bg {
          background: linear-gradient(45deg, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #4B0082, #9400D3);
          background-size: 400% 400%;
          animation: rainbow 3s ease infinite;
        }
        .text-stroke {
          -webkit-text-stroke: 2px black;
          paint-order: stroke fill;
        }
        @keyframes rainbow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 bg-black/20 p-6 border-8 border-cyan-400 transform rotate-2">
          <h1
            className="text-4xl md:text-6xl font-black mb-4 colorflip"
            style={{ fontFamily: FONTS.COMIC_SANS }}
          >
            🎪 DUMBUI NAVBARS 🎪
          </h1>
          <p
            className="text-xl md:text-2xl font-bold"
            style={{ fontFamily: FONTS.IMPACT, color: COLORS.LIME, textShadow: '2px 2px 0 #000' }}
          >
            The MOST ANNOYING Navigation Ever Created!
          </p>
        </div>

        {/* Navbar Selection */}
        <div className="mb-6 bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 p-4 border-8 border-purple-600 transform -rotate-1">
          <div className="flex flex-wrap gap-3 justify-center">
            {Object.keys(navbarConfigs).map((nav) => (
              <button
                key={nav}
                onClick={() => setSelectedNavbar(nav)}
                className={`px-6 py-3 font-black text-lg border-4 transition-all ${
                  selectedNavbar === nav
                    ? 'bg-lime-400 text-black border-black scale-110 shake'
                    : 'bg-purple-600 text-yellow-300 border-yellow-300 hover:scale-105'
                }`}
                style={{ fontFamily: FONTS.PAPYRUS }}
              >
                {navbarConfigs[nav].name.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6 bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-500 p-4 border-8 border-red-600 transform rotate-1">
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

        <div className="bg-gradient-to-b from-purple-700 to-pink-600 p-8 border-8 border-yellow-300 transform rotate-1 shadow-2xl">
          {viewMode === 'preview' ? (
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-blue-500 via-green-500 to-red-500 p-4 border-8 border-dashed border-white transform -rotate-1">
                <h2
                  className="text-3xl font-black text-center mb-4 colorflip"
                  style={{ fontFamily: FONTS.PAPYRUS, textShadow: '2px 2px 0 #000' }}
                >
                  {config.name}
                </h2>
                
                {/* The Actual Navbar Preview */}
                {renderNavbarPreview()}

                {/* Mobile Menu */}
                {isMenuOpen && (
                  <div className="mt-4 p-6 bg-gradient-to-r from-cyan-400 to-lime-400 border-8 border-dotted border-red-500 transform rotate-2">
                    <div className="grid grid-cols-2 gap-4">
                      {['EXTRA LINK 1', 'MORE STUFF', 'SPECIAL DEAL', 'CLICK HERE'].map((item, index) => (
                        <button
                          key={index}
                          className="p-4 bg-white text-black font-bold text-lg border-4 border-purple-600 hover:bg-yellow-300 hover:scale-110 hover:rotate-6 transition-all"
                          style={{ fontFamily: FONTS.COMIC_SANS }}
                        >
                          {item} 🔥
                        </button>
                      ))}
                    </div>
                  </div>
                )}
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

        <div className="mt-8 bg-gradient-to-r from-yellow-400 via-red-500 to-cyan-400 p-6 border-8 border-green-500 transform rotate-2">
          <p
            className="text-2xl font-black text-center"
            style={{ fontFamily: FONTS.IMPACT, color: '#000', textShadow: '1px 1px 0 #fff' }}
          >
            ⚠️ WARNING: These navbars may cause SEIZURES and REGRET! ⚠️
          </p>
        </div>
      </div>
    </div>
  );
}