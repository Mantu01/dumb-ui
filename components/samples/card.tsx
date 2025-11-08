import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy } from 'lucide-react';

const FONTS = {
  COMIC_SANS: '"Comic Sans MS", cursive',
  PAPYRUS: 'Papyrus, fantasy',
  TIMES_NEW_ROMAN: '"Times New Roman", serif',
  IMPACT: 'Impact, fantasy'
};

const COLORS = {
  YELLOW: '#FFFF00',
  CYAN: '#00FFFF',
  MAGENTA: '#FF00FF',
  LIME: '#00FF00'
};

const cardConfigs = {
  card1: {
    name: 'Neon Nightmare Card',
    component: () => (
      <div className="bg-gradient-to-br from-pink-500 via-yellow-400 to-cyan-500 p-6 border-8 border-lime-400 transform rotate-3 hover:rotate-6 transition-transform shake max-w-sm">
        <img 
          src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=400&h=300&fit=crop" 
          alt="Random" 
          className="w-full h-48 object-cover border-4 border-magenta-600 mb-4 grayscale hover:grayscale-0 transition-all"
        />
        <h3 className="text-3xl font-black mb-3 colorflip" style={{ fontFamily: FONTS.IMPACT }}>
          SCREAMING TITLE!!!
        </h3>
        <p className="text-lg mb-4" style={{ fontFamily: FONTS.COMIC_SANS, color: '#000' }}>
          This card is SO BRIGHT it might burn your retinas! Click if you DARE! 🔥🔥🔥
        </p>
        <button className="w-full px-4 py-3 bg-red-600 text-yellow-300 font-black text-xl pulse-bright border-4 border-black hover:bg-red-700" style={{ fontFamily: FONTS.PAPYRUS }}>
          CLICK ME NOW!!!
        </button>
      </div>
    ),
    reactCode: `<div className="bg-gradient-to-br from-pink-500 via-yellow-400 to-cyan-500 p-6 border-8 border-lime-400 transform rotate-3 hover:rotate-6 transition-transform shake max-w-sm">
  <img 
    src="your-image-url.jpg" 
    alt="Random" 
    className="w-full h-48 object-cover border-4 border-magenta-600 mb-4 grayscale hover:grayscale-0 transition-all"
  />
  <h3 className="text-3xl font-black mb-3 colorflip" style={{ fontFamily: "Impact" }}>
    SCREAMING TITLE!!!
  </h3>
  <p className="text-lg mb-4" style={{ fontFamily: "Comic Sans MS", color: "#000" }}>
    This card is SO BRIGHT it might burn your retinas! Click if you DARE! 🔥🔥🔥
  </p>
  <button className="w-full px-4 py-3 bg-red-600 text-yellow-300 font-black text-xl pulse-bright border-4 border-black hover:bg-red-700" style={{ fontFamily: "Papyrus" }}>
    CLICK ME NOW!!!
  </button>
</div>`,
    htmlCode: `<div class="bg-gradient-to-br from-pink-500 via-yellow-400 to-cyan-500 p-6 border-8 border-lime-400 transform rotate-3 hover:rotate-6 transition-transform shake max-w-sm">
  <img 
    src="your-image-url.jpg" 
    alt="Random" 
    class="w-full h-48 object-cover border-4 border-magenta-600 mb-4 grayscale hover:grayscale-0 transition-all"
  />
  <h3 class="text-3xl font-black mb-3 colorflip" style="font-family: Impact;">
    SCREAMING TITLE!!!
  </h3>
  <p class="text-lg mb-4" style="font-family: 'Comic Sans MS'; color: #000;">
    This card is SO BRIGHT it might burn your retinas! Click if you DARE! 🔥🔥🔥
  </p>
  <button class="w-full px-4 py-3 bg-red-600 text-yellow-300 font-black text-xl pulse-bright border-4 border-black hover:bg-red-700" style="font-family: Papyrus;">
    CLICK ME NOW!!!
  </button>
</div>`,
    cssCode: `.card-neon {
  background: linear-gradient(135deg, #ec4899 0%, #fbbf24 50%, #06b6d4 100%);
  padding: 1.5rem;
  border: 8px solid #84cc16;
  transform: rotate(3deg);
  max-width: 24rem;
  transition: transform 0.3s;
  animation: shake 0.5s infinite;
}

.card-neon:hover {
  transform: rotate(6deg);
}

.card-neon img {
  width: 100%;
  height: 12rem;
  object-fit: cover;
  border: 4px solid #c026d3;
  margin-bottom: 1rem;
  filter: grayscale(100%);
  transition: filter 0.3s;
}

.card-neon img:hover {
  filter: grayscale(0%);
}

.card-neon h3 {
  font-size: 1.875rem;
  font-weight: 900;
  margin-bottom: 0.75rem;
  font-family: Impact;
  animation: colorflip 2s infinite;
}

.card-neon p {
  font-size: 1.125rem;
  margin-bottom: 1rem;
  font-family: 'Comic Sans MS';
  color: #000000;
}

.card-neon button {
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: #dc2626;
  color: #fde047;
  font-weight: 900;
  font-size: 1.25rem;
  border: 4px solid #000000;
  font-family: Papyrus;
  animation: pulse-bright 1s infinite;
}

.card-neon button:hover {
  background-color: #b91c1c;
}`
  },
  card2: {
    name: 'Spinning Chaos Card',
    component: () => (
      <div className="bg-cyan-400 p-6 border-8 border-red-600 transform -rotate-2 hover:scale-110 transition-all jitter max-w-sm">
        <div className="bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-600 p-4 border-4 border-black mb-4 transform rotate-6">
          <img 
            src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&h=300&fit=crop" 
            alt="Chaos" 
            className="w-full h-40 object-cover border-4 border-lime-400 sepia"
          />
        </div>
        <h3 className="text-2xl font-black mb-2 text-magenta-600" style={{ fontFamily: FONTS.PAPYRUS }}>
          ~~TILTED TEXT~~
        </h3>
        <p className="text-base mb-4 bg-yellow-300 p-2 border-2 border-blue-900" style={{ fontFamily: FONTS.TIMES_NEW_ROMAN }}>
          Warning: This card contains MAXIMUM UGLINESS! Viewer discretion advised! ⚠️
        </p>
        <div className="flex gap-2">
          <button className="flex-1 px-3 py-2 bg-lime-400 text-black font-black border-4 border-purple-600 hover:bg-green-500" style={{ fontFamily: FONTS.COMIC_SANS }}>
            YES
          </button>
          <button className="flex-1 px-3 py-2 bg-pink-500 text-white font-black border-4 border-cyan-400 hover:bg-pink-600" style={{ fontFamily: FONTS.COMIC_SANS }}>
            NO
          </button>
        </div>
      </div>
    ),
    reactCode: `<div className="bg-cyan-400 p-6 border-8 border-red-600 transform -rotate-2 hover:scale-110 transition-all jitter max-w-sm">
  <div className="bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-600 p-4 border-4 border-black mb-4 transform rotate-6">
    <img 
      src="your-image-url.jpg" 
      alt="Chaos" 
      className="w-full h-40 object-cover border-4 border-lime-400 sepia"
    />
  </div>
  <h3 className="text-2xl font-black mb-2 text-magenta-600" style={{ fontFamily: "Papyrus" }}>
    ~~TILTED TEXT~~
  </h3>
  <p className="text-base mb-4 bg-yellow-300 p-2 border-2 border-blue-900" style={{ fontFamily: "Times New Roman" }}>
    Warning: This card contains MAXIMUM UGLINESS! Viewer discretion advised! ⚠️
  </p>
  <div className="flex gap-2">
    <button className="flex-1 px-3 py-2 bg-lime-400 text-black font-black border-4 border-purple-600 hover:bg-green-500" style={{ fontFamily: "Comic Sans MS" }}>
      YES
    </button>
    <button className="flex-1 px-3 py-2 bg-pink-500 text-white font-black border-4 border-cyan-400 hover:bg-pink-600" style={{ fontFamily: "Comic Sans MS" }}>
      NO
    </button>
  </div>
</div>`,
    htmlCode: `<div class="bg-cyan-400 p-6 border-8 border-red-600 transform -rotate-2 hover:scale-110 transition-all jitter max-w-sm">
  <div class="bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-600 p-4 border-4 border-black mb-4 transform rotate-6">
    <img 
      src="your-image-url.jpg" 
      alt="Chaos" 
      class="w-full h-40 object-cover border-4 border-lime-400 sepia"
    />
  </div>
  <h3 class="text-2xl font-black mb-2 text-magenta-600" style="font-family: Papyrus;">
    ~~TILTED TEXT~~
  </h3>
  <p class="text-base mb-4 bg-yellow-300 p-2 border-2 border-blue-900" style="font-family: 'Times New Roman';">
    Warning: This card contains MAXIMUM UGLINESS! Viewer discretion advised! ⚠️
  </p>
  <div class="flex gap-2">
    <button class="flex-1 px-3 py-2 bg-lime-400 text-black font-black border-4 border-purple-600 hover:bg-green-500" style="font-family: 'Comic Sans MS';">
      YES
    </button>
    <button class="flex-1 px-3 py-2 bg-pink-500 text-white font-black border-4 border-cyan-400 hover:bg-pink-600" style="font-family: 'Comic Sans MS';">
      NO
    </button>
  </div>
</div>`,
    cssCode: `.card-chaos {
  background-color: #06b6d4;
  padding: 1.5rem;
  border: 8px solid #dc2626;
  transform: rotate(-2deg);
  max-width: 24rem;
  transition: all 0.3s;
  animation: jitter 0.3s infinite;
}

.card-chaos:hover {
  transform: scale(1.1);
}

.card-image-wrapper {
  background: linear-gradient(90deg, #fde047 0%, #ec4899 50%, #9333ea 100%);
  padding: 1rem;
  border: 4px solid #000000;
  margin-bottom: 1rem;
  transform: rotate(6deg);
}

.card-chaos img {
  width: 100%;
  height: 10rem;
  object-fit: cover;
  border: 4px solid #84cc16;
  filter: sepia(100%);
}

.card-chaos h3 {
  font-size: 1.5rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  color: #c026d3;
  font-family: Papyrus;
}

.card-chaos p {
  font-size: 1rem;
  margin-bottom: 1rem;
  background-color: #fde047;
  padding: 0.5rem;
  border: 2px solid #1e3a8a;
  font-family: 'Times New Roman';
}

.card-buttons {
  display: flex;
  gap: 0.5rem;
}

.card-chaos button {
  flex: 1;
  padding: 0.5rem 0.75rem;
  font-weight: 900;
  font-family: 'Comic Sans MS';
}`
  },
  card3: {
    name: 'Rainbow Explosion Card',
    component: () => (
      <div className="bg-gradient-to-br from-red-500 via-yellow-400 via-green-500 via-blue-500 to-purple-600 p-8 border-8 border-black transform hover:-rotate-3 transition-all max-w-sm pulse-bright">
        <div className="bg-white p-1 border-4 border-cyan-400 mb-4 transform -rotate-3">
          <img 
            src="https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=400&h=300&fit=crop" 
            alt="Rainbow" 
            className="w-full h-44 object-cover hue-rotate-180"
          />
        </div>
        <div className="bg-pink-500 p-4 border-4 border-yellow-300 mb-4 transform rotate-2">
          <h3 className="text-3xl font-black text-lime-400" style={{ fontFamily: FONTS.IMPACT }}>
            🌈 RAINBOW POWER! 🌈
          </h3>
        </div>
        <p className="text-xl font-bold mb-4 bg-cyan-300 p-3 border-4 border-magenta-600" style={{ fontFamily: FONTS.COMIC_SANS }}>
          Every color at once = MAXIMUM DESIGN! 💥
        </p>
        <button className="w-full px-6 py-4 bg-gradient-to-r from-lime-400 via-pink-500 to-cyan-400 text-black font-black text-2xl border-8 border-red-600 hover:scale-105 shake" style={{ fontFamily: FONTS.PAPYRUS }}>
          BUY NOW $999
        </button>
      </div>
    ),
    reactCode: `<div className="bg-gradient-to-br from-red-500 via-yellow-400 via-green-500 via-blue-500 to-purple-600 p-8 border-8 border-black transform hover:-rotate-3 transition-all max-w-sm pulse-bright">
  <div className="bg-white p-1 border-4 border-cyan-400 mb-4 transform -rotate-3">
    <img 
      src="your-image-url.jpg" 
      alt="Rainbow" 
      className="w-full h-44 object-cover hue-rotate-180"
    />
  </div>
  <div className="bg-pink-500 p-4 border-4 border-yellow-300 mb-4 transform rotate-2">
    <h3 className="text-3xl font-black text-lime-400" style={{ fontFamily: "Impact" }}>
      🌈 RAINBOW POWER! 🌈
    </h3>
  </div>
  <p className="text-xl font-bold mb-4 bg-cyan-300 p-3 border-4 border-magenta-600" style={{ fontFamily: "Comic Sans MS" }}>
    Every color at once = MAXIMUM DESIGN! 💥
  </p>
  <button className="w-full px-6 py-4 bg-gradient-to-r from-lime-400 via-pink-500 to-cyan-400 text-black font-black text-2xl border-8 border-red-600 hover:scale-105 shake" style={{ fontFamily: "Papyrus" }}>
    BUY NOW $999
  </button>
</div>`,
    htmlCode: `<div class="bg-gradient-to-br from-red-500 via-yellow-400 via-green-500 via-blue-500 to-purple-600 p-8 border-8 border-black transform hover:-rotate-3 transition-all max-w-sm pulse-bright">
  <div class="bg-white p-1 border-4 border-cyan-400 mb-4 transform -rotate-3">
    <img 
      src="your-image-url.jpg" 
      alt="Rainbow" 
      class="w-full h-44 object-cover hue-rotate-180"
    />
  </div>
  <div class="bg-pink-500 p-4 border-4 border-yellow-300 mb-4 transform rotate-2">
    <h3 class="text-3xl font-black text-lime-400" style="font-family: Impact;">
      🌈 RAINBOW POWER! 🌈
    </h3>
  </div>
  <p class="text-xl font-bold mb-4 bg-cyan-300 p-3 border-4 border-magenta-600" style="font-family: 'Comic Sans MS';">
    Every color at once = MAXIMUM DESIGN! 💥
  </p>
  <button class="w-full px-6 py-4 bg-gradient-to-r from-lime-400 via-pink-500 to-cyan-400 text-black font-black text-2xl border-8 border-red-600 hover:scale-105 shake" style="font-family: Papyrus;">
    BUY NOW $999
  </button>
</div>`,
    cssCode: `.card-rainbow {
  background: linear-gradient(135deg, #ef4444 0%, #fbbf24 25%, #22c55e 50%, #3b82f6 75%, #9333ea 100%);
  padding: 2rem;
  border: 8px solid #000000;
  max-width: 24rem;
  transition: all 0.3s;
  animation: pulse-bright 1s infinite;
}

.card-rainbow:hover {
  transform: rotate(-3deg);
}

.card-rainbow .image-wrapper {
  background-color: #ffffff;
  padding: 0.25rem;
  border: 4px solid #06b6d4;
  margin-bottom: 1rem;
  transform: rotate(-3deg);
}

.card-rainbow img {
  width: 100%;
  height: 11rem;
  object-fit: cover;
  filter: hue-rotate(180deg);
}

.card-rainbow .title-wrapper {
  background-color: #ec4899;
  padding: 1rem;
  border: 4px solid #fde047;
  margin-bottom: 1rem;
  transform: rotate(2deg);
}

.card-rainbow h3 {
  font-size: 1.875rem;
  font-weight: 900;
  color: #84cc16;
  font-family: Impact;
}

.card-rainbow p {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background-color: #67e8f9;
  padding: 0.75rem;
  border: 4px solid #c026d3;
  font-family: 'Comic Sans MS';
}

.card-rainbow button {
  width: 100%;
  padding: 1rem 1.5rem;
  background: linear-gradient(90deg, #84cc16 0%, #ec4899 50%, #06b6d4 100%);
  color: #000000;
  font-weight: 900;
  font-size: 1.5rem;
  border: 8px solid #dc2626;
  font-family: Papyrus;
  animation: shake 0.5s infinite;
}

.card-rainbow button:hover {
  transform: scale(1.05);
}`
  },
  card4: {
    name: 'Blinking Disaster Card',
    component: () => (
      <div className="bg-yellow-300 p-6 border-8 border-purple-600 transform rotate-1 hover:rotate-0 transition-all max-w-sm flicker">
        <div className="flex gap-2 mb-4">
          <div className="flex-1 bg-red-500 p-2 border-4 border-black">
            <img 
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=200&fit=crop" 
              alt="Split" 
              className="w-full h-24 object-cover border-2 border-cyan-400 brightness-150"
            />
          </div>
          <div className="flex-1 bg-blue-500 p-2 border-4 border-black">
            <img 
              src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=200&h=200&fit=crop" 
              alt="Split2" 
              className="w-full h-24 object-cover border-2 border-lime-400 contrast-200"
            />
          </div>
        </div>
        <h3 className="text-2xl font-black mb-2 bg-magenta-600 text-yellow-300 p-2 border-4 border-cyan-400 transform -rotate-2" style={{ fontFamily: FONTS.IMPACT }}>
          !!! URGENT !!!
        </h3>
        <p className="text-lg mb-4 bg-lime-400 p-3 border-4 border-red-600" style={{ fontFamily: FONTS.TIMES_NEW_ROMAN }}>
          This card blinks and causes CONFUSION! Perfect for annoying users! 🚨
        </p>
        <div className="grid grid-cols-3 gap-2">
          <button className="px-2 py-2 bg-cyan-400 text-black font-black border-2 border-black hover:bg-cyan-500" style={{ fontFamily: FONTS.COMIC_SANS }}>
            A
          </button>
          <button className="px-2 py-2 bg-pink-400 text-black font-black border-2 border-black hover:bg-pink-500" style={{ fontFamily: FONTS.COMIC_SANS }}>
            B
          </button>
          <button className="px-2 py-2 bg-lime-400 text-black font-black border-2 border-black hover:bg-lime-500" style={{ fontFamily: FONTS.COMIC_SANS }}>
            C
          </button>
        </div>
      </div>
    ),
    reactCode: `<div className="bg-yellow-300 p-6 border-8 border-purple-600 transform rotate-1 hover:rotate-0 transition-all max-w-sm flicker">
  <div className="flex gap-2 mb-4">
    <div className="flex-1 bg-red-500 p-2 border-4 border-black">
      <img 
        src="image1.jpg" 
        alt="Split" 
        className="w-full h-24 object-cover border-2 border-cyan-400 brightness-150"
      />
    </div>
    <div className="flex-1 bg-blue-500 p-2 border-4 border-black">
      <img 
        src="image2.jpg" 
        alt="Split2" 
        className="w-full h-24 object-cover border-2 border-lime-400 contrast-200"
      />
    </div>
  </div>
  <h3 className="text-2xl font-black mb-2 bg-magenta-600 text-yellow-300 p-2 border-4 border-cyan-400 transform -rotate-2" style={{ fontFamily: "Impact" }}>
    !!! URGENT !!!
  </h3>
  <p className="text-lg mb-4 bg-lime-400 p-3 border-4 border-red-600" style={{ fontFamily: "Times New Roman" }}>
    This card blinks and causes CONFUSION! Perfect for annoying users! 🚨
  </p>
  <div className="grid grid-cols-3 gap-2">
    <button className="px-2 py-2 bg-cyan-400 text-black font-black border-2 border-black hover:bg-cyan-500" style={{ fontFamily: "Comic Sans MS" }}>
      A
    </button>
    <button className="px-2 py-2 bg-pink-400 text-black font-black border-2 border-black hover:bg-pink-500" style={{ fontFamily: "Comic Sans MS" }}>
      B
    </button>
    <button className="px-2 py-2 bg-lime-400 text-black font-black border-2 border-black hover:bg-lime-500" style={{ fontFamily: "Comic Sans MS" }}>
      C
    </button>
  </div>
</div>`,
    htmlCode: `<div class="bg-yellow-300 p-6 border-8 border-purple-600 transform rotate-1 hover:rotate-0 transition-all max-w-sm flicker">
  <div class="flex gap-2 mb-4">
    <div class="flex-1 bg-red-500 p-2 border-4 border-black">
      <img 
        src="image1.jpg" 
        alt="Split" 
        class="w-full h-24 object-cover border-2 border-cyan-400 brightness-150"
      />
    </div>
    <div class="flex-1 bg-blue-500 p-2 border-4 border-black">
      <img 
        src="image2.jpg" 
        alt="Split2" 
        class="w-full h-24 object-cover border-2 border-lime-400 contrast-200"
      />
    </div>
  </div>
  <h3 class="text-2xl font-black mb-2 bg-magenta-600 text-yellow-300 p-2 border-4 border-cyan-400 transform -rotate-2" style="font-family: Impact;">
    !!! URGENT !!!
  </h3>
  <p class="text-lg mb-4 bg-lime-400 p-3 border-4 border-red-600" style="font-family: 'Times New Roman';">
    This card blinks and causes CONFUSION! Perfect for annoying users! 🚨
  </p>
  <div class="grid grid-cols-3 gap-2">
    <button class="px-2 py-2 bg-cyan-400 text-black font-black border-2 border-black hover:bg-cyan-500" style="font-family: 'Comic Sans MS';">
      A
    </button>
    <button class="px-2 py-2 bg-pink-400 text-black font-black border-2 border-black hover:bg-pink-500" style="font-family: 'Comic Sans MS';">
      B
    </button>
    <button class="px-2 py-2 bg-lime-400 text-black font-black border-2 border-black hover:bg-lime-500" style="font-family: 'Comic Sans MS';">
      C
    </button>
  </div>
</div>`,
    cssCode: `.card-blinking {
  background-color: #fde047;
  padding: 1.5rem;
  border: 8px solid #9333ea;
  transform: rotate(1deg);
  max-width: 24rem;
  transition: all 0.3s;
  animation: flicker 0.3s infinite;
}

.card-blinking:hover {
  transform: rotate(0deg);
}

.image-grid {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.image-box {
  flex: 1;
  padding: 0.5rem;
  border: 4px solid #000000;
}

.image-box-1 {
  background-color: #ef4444;
}

.image-box-2 {
  background-color: #3b82f6;
}

.card-blinking img {
  width: 100%;
  height: 6rem;
  object-fit: cover;
}

.image-box-1 img {
  border: 2px solid #06b6d4;
  filter: brightness(150%);
}

.image-box-2 img {
  border: 2px solid #84cc16;
  filter: contrast(200%);
}

.card-blinking h3 {
  font-size: 1.5rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  background-color: #c026d3;
  color: #fde047;
  padding: 0.5rem;
  border: 4px solid #06b6d4;
  transform: rotate(-2deg);
  font-family: Impact;
}

.card-blinking p {
  font-size: 1.125rem;
  margin-bottom: 1rem;
  background-color: #84cc16;
  padding: 0.75rem;
  border: 4px solid #dc2626;
  font-family: 'Times New Roman';
}

.button-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
}

.card-blinking button {
  padding: 0.5rem;
  font-weight: 900;
  border: 2px solid #000000;
  font-family: 'Comic Sans MS';
}

@keyframes flicker {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}`
  },
  card5: {
    name: 'Glitch Monster Card',
    component: () => (
      <div className="bg-gradient-to-tr from-lime-400 via-cyan-400 to-pink-500 p-6 border-8 border-yellow-300 transform -rotate-3 hover:rotate-3 transition-all max-w-sm jitter">
        <div className="relative mb-4">
          <img 
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop" 
            alt="Glitch" 
            className="w-full h-48 object-cover border-8 border-red-600 saturate-200 hover:invert transition-all"
          />
          <div className="absolute top-2 right-2 bg-red-600 text-yellow-300 px-4 py-2 font-black border-4 border-black rotate-12" style={{ fontFamily: FONTS.IMPACT }}>
            NEW!
          </div>
        </div>
        <div className="bg-black p-4 border-4 border-cyan-400 mb-4 transform rotate-2">
          <h3 className="text-2xl font-black text-lime-400 mb-2 glitch-text" style={{ fontFamily: FONTS.PAPYRUS }}>
            GLITCH EFFECT!!!
          </h3>
          <p className="text-base text-magenta-500" style={{ fontFamily: FONTS.COMIC_SANS }}>
            ⚡ POWERED BY CHAOS ⚡
          </p>
        </div>
        <div className="flex gap-2">
          <button className="flex-1 px-4 py-3 bg-yellow-300 text-purple-900 font-black border-4 border-purple-900 hover:bg-yellow-400 shake" style={{ fontFamily: FONTS.IMPACT }}>
            ⭐ LIKE
          </button>
          <button className="flex-1 px-4 py-3 bg-magenta-600 text-white font-black border-4 border-black hover:bg-magenta-700 shake" style={{ fontFamily: FONTS.IMPACT }}>
            💀 HATE
          </button>
        </div>
      </div>
    ),
    reactCode: `<div className="bg-gradient-to-tr from-lime-400 via-cyan-400 to-pink-500 p-6 border-8 border-yellow-300 transform -rotate-3 hover:rotate-3 transition-all max-w-sm jitter">
  <div className="relative mb-4">
    <img 
      src="your-image-url.jpg" 
      alt="Glitch" 
      className="w-full h-48 object-cover border-8 border-red-600 saturate-200 hover:invert transition-all"
    />
    <div className="absolute top-2 right-2 bg-red-600 text-yellow-300 px-4 py-2 font-black border-4 border-black rotate-12" style={{ fontFamily: "Impact" }}>
      NEW!
    </div>
  </div>
  <div className="bg-black p-4 border-4 border-cyan-400 mb-4 transform rotate-2">
    <h3 className="text-2xl font-black text-lime-400 mb-2 glitch-text" style={{ fontFamily: "Papyrus" }}>
      GLITCH EFFECT!!!
    </h3>
    <p className="text-base text-magenta-500" style={{ fontFamily: "Comic Sans MS" }}>
      ⚡ POWERED BY CHAOS ⚡
    </p>
  </div>
  <div className="flex gap-2">
    <button className="flex-1 px-4 py-3 bg-yellow-300 text-purple-900 font-black border-4 border-purple-900 hover:bg-yellow-400 shake" style={{ fontFamily: "Impact" }}>
      ⭐ LIKE
    </button>
    <button className="flex-1 px-4 py-3 bg-magenta-600 text-white font-black border-4 border-black hover:bg-magenta-700 shake" style={{ fontFamily: "Impact" }}>
      💀 HATE
    </button>
  </div>
</div>`,
    htmlCode: `<div class="bg-gradient-to-tr from-lime-400 via-cyan-400 to-pink-500 p-6 border-8 border-yellow-300 transform -rotate-3 hover:rotate-3 transition-all max-w-sm jitter">
  <div class="relative mb-4">
    <img 
      src="your-image-url.jpg" 
      alt="Glitch" 
      class="w-full h-48 object-cover border-8 border-red-600 saturate-200 hover:invert transition-all"
    />
    <div class="absolute top-2 right-2 bg-red-600 text-yellow-300 px-4 py-2 font-black border-4 border-black rotate-12" style="font-family: Impact;">
      NEW!
    </div>
  </div>
  <div class="bg-black p-4 border-4 border-cyan-400 mb-4 transform rotate-2">
    <h3 class="text-2xl font-black text-lime-400 mb-2 glitch-text" style="font-family: Papyrus;">
      GLITCH EFFECT!!!
    </h3>
    <p class="text-base text-magenta-500" style="font-family: 'Comic Sans MS';">
      ⚡ POWERED BY CHAOS ⚡
    </p>
  </div>
  <div class="flex gap-2">
    <button class="flex-1 px-4 py-3 bg-yellow-300 text-purple-900 font-black border-4 border-purple-900 hover:bg-yellow-400 shake" style="font-family: Impact;">
      ⭐ LIKE
    </button>
    <button class="flex-1 px-4 py-3 bg-magenta-600 text-white font-black border-4 border-black hover:bg-magenta-700 shake" style="font-family: Impact;">
      💀 HATE
    </button>
  </div>
</div>`,
    cssCode: `.card-glitch {
  background: linear-gradient(135deg, #84cc16 0%, #06b6d4 50%, #ec4899 100%);
  padding: 1.5rem;
  border: 8px solid #fde047;
  transform: rotate(-3deg);
  max-width: 24rem;
  transition: all 0.3s;
  animation: jitter 0.3s infinite;
}

.card-glitch:hover {
  transform: rotate(3deg);
}

.card-glitch .image-container {
  position: relative;
  margin-bottom: 1rem;
}

.card-glitch img {
  width: 100%;
  height: 12rem;
  object-fit: cover;
  border: 8px solid #dc2626;
  filter: saturate(200%);
  transition: all 0.3s;
}

.card-glitch img:hover {
  filter: invert(100%);
}

.card-glitch .badge {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background-color: #dc2626;
  color: #fde047;
  padding: 0.5rem 1rem;
  font-weight: 900;
  border: 4px solid #000000;
  transform: rotate(12deg);
  font-family: Impact;
}

.card-glitch .content-box {
  background-color: #000000;
  padding: 1rem;
  border: 4px solid #06b6d4;
  margin-bottom: 1rem;
  transform: rotate(2deg);
}

.card-glitch h3 {
  font-size: 1.5rem;
  font-weight: 900;
  color: #84cc16;
  margin-bottom: 0.5rem;
  font-family: Papyrus;
}

.card-glitch p {
  font-size: 1rem;
  color: #c026d3;
  font-family: 'Comic Sans MS';
}

.card-glitch .button-group {
  display: flex;
  gap: 0.5rem;
}

.card-glitch button {
  flex: 1;
  padding: 0.75rem 1rem;
  font-weight: 900;
  border: 4px solid;
  font-family: Impact;
  animation: shake 0.5s infinite;
}`
  },
  card6: {
    name: 'Eyesore Special Card',
    component: () => (
      <div className="bg-red-500 p-6 border-8 border-lime-400 transform rotate-2 hover:-rotate-2 transition-all max-w-sm pulse-bright">
        <div className="grid grid-cols-2 gap-2 mb-4">
          <img 
            src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=200&h=150&fit=crop" 
            alt="Grid1" 
            className="w-full h-24 object-cover border-4 border-cyan-400 blur-sm hover:blur-none transition-all"
          />
          <img 
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=150&fit=crop" 
            alt="Grid2" 
            className="w-full h-24 object-cover border-4 border-magenta-600 grayscale hover:grayscale-0 transition-all"
          />
          <img 
            src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=200&h=150&fit=crop" 
            alt="Grid3" 
            className="w-full h-24 object-cover border-4 border-yellow-300 sepia hover:sepia-0 transition-all"
          />
          <img 
            src="https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=200&h=150&fit=crop" 
            alt="Grid4" 
            className="w-full h-24 object-cover border-4 border-pink-500 hue-rotate-90 hover:hue-rotate-0 transition-all"
          />
        </div>
        <h3 className="text-3xl font-black mb-3 bg-yellow-300 text-purple-900 p-2 border-4 border-black transform -rotate-1 colorflip" style={{ fontFamily: FONTS.COMIC_SANS }}>
          🔥 MEGA SALE! 🔥
        </h3>
        <p className="text-lg mb-4 bg-cyan-400 p-3 border-4 border-pink-600" style={{ fontFamily: FONTS.TIMES_NEW_ROMAN }}>
          4 IMAGES! 4 FILTERS! MAXIMUM CONFUSION GUARANTEED! 🎪
        </p>
        <div className="space-y-2">
          <button className="w-full px-4 py-2 bg-lime-400 text-black font-black border-4 border-purple-600 hover:bg-lime-500 jitter" style={{ fontFamily: FONTS.PAPYRUS }}>
            ADD TO CART 🛒
          </button>
          <button className="w-full px-4 py-2 bg-magenta-600 text-yellow-300 font-black border-4 border-cyan-400 hover:bg-magenta-700 jitter" style={{ fontFamily: FONTS.PAPYRUS }}>
            SHARE THIS MESS 📢
          </button>
        </div>
      </div>
    ),
    reactCode: `<div className="bg-red-500 p-6 border-8 border-lime-400 transform rotate-2 hover:-rotate-2 transition-all max-w-sm pulse-bright">
  <div className="grid grid-cols-2 gap-2 mb-4">
    <img 
      src="image1.jpg" 
      alt="Grid1" 
      className="w-full h-24 object-cover border-4 border-cyan-400 blur-sm hover:blur-none transition-all"
    />
    <img 
      src="image2.jpg" 
      alt="Grid2" 
      className="w-full h-24 object-cover border-4 border-magenta-600 grayscale hover:grayscale-0 transition-all"
    />
    <img 
      src="image3.jpg" 
      alt="Grid3" 
      className="w-full h-24 object-cover border-4 border-yellow-300 sepia hover:sepia-0 transition-all"
    />
    <img 
      src="image4.jpg" 
      alt="Grid4" 
      className="w-full h-24 object-cover border-4 border-pink-500 hue-rotate-90 hover:hue-rotate-0 transition-all"
    />
  </div>
  <h3 className="text-3xl font-black mb-3 bg-yellow-300 text-purple-900 p-2 border-4 border-black transform -rotate-1 colorflip" style={{ fontFamily: "Comic Sans MS" }}>
    🔥 MEGA SALE! 🔥
  </h3>
  <p className="text-lg mb-4 bg-cyan-400 p-3 border-4 border-pink-600" style={{ fontFamily: "Times New Roman" }}>
    4 IMAGES! 4 FILTERS! MAXIMUM CONFUSION GUARANTEED! 🎪
  </p>
  <div className="space-y-2">
    <button className="w-full px-4 py-2 bg-lime-400 text-black font-black border-4 border-purple-600 hover:bg-lime-500 jitter" style={{ fontFamily: "Papyrus" }}>
      ADD TO CART 🛒
    </button>
    <button className="w-full px-4 py-2 bg-magenta-600 text-yellow-300 font-black border-4 border-cyan-400 hover:bg-magenta-700 jitter" style={{ fontFamily: "Papyrus" }}>
      SHARE THIS MESS 📢
    </button>
  </div>
</div>`,
    htmlCode: `<div class="bg-red-500 p-6 border-8 border-lime-400 transform rotate-2 hover:-rotate-2 transition-all max-w-sm pulse-bright">
  <div class="grid grid-cols-2 gap-2 mb-4">
    <img 
      src="image1.jpg" 
      alt="Grid1" 
      class="w-full h-24 object-cover border-4 border-cyan-400 blur-sm hover:blur-none transition-all"
    />
    <img 
      src="image2.jpg" 
      alt="Grid2" 
      class="w-full h-24 object-cover border-4 border-magenta-600 grayscale hover:grayscale-0 transition-all"
    />
    <img 
      src="image3.jpg" 
      alt="Grid3" 
      class="w-full h-24 object-cover border-4 border-yellow-300 sepia hover:sepia-0 transition-all"
    />
    <img 
      src="image4.jpg" 
      alt="Grid4" 
      class="w-full h-24 object-cover border-4 border-pink-500 hue-rotate-90 hover:hue-rotate-0 transition-all"
    />
  </div>
  <h3 class="text-3xl font-black mb-3 bg-yellow-300 text-purple-900 p-2 border-4 border-black transform -rotate-1 colorflip" style="font-family: 'Comic Sans MS';">
    🔥 MEGA SALE! 🔥
  </h3>
  <p class="text-lg mb-4 bg-cyan-400 p-3 border-4 border-pink-600" style="font-family: 'Times New Roman';">
    4 IMAGES! 4 FILTERS! MAXIMUM CONFUSION GUARANTEED! 🎪
  </p>
  <div class="space-y-2">
    <button class="w-full px-4 py-2 bg-lime-400 text-black font-black border-4 border-purple-600 hover:bg-lime-500 jitter" style="font-family: Papyrus;">
      ADD TO CART 🛒
    </button>
    <button class="w-full px-4 py-2 bg-magenta-600 text-yellow-300 font-black border-4 border-cyan-400 hover:bg-magenta-700 jitter" style="font-family: Papyrus;">
      SHARE THIS MESS 📢
    </button>
  </div>
</div>`,
    cssCode: `.card-eyesore {
  background-color: #ef4444;
  padding: 1.5rem;
  border: 8px solid #84cc16;
  transform: rotate(2deg);
  max-width: 24rem;
  transition: all 0.3s;
  animation: pulse-bright 1s infinite;
}

.card-eyesore:hover {
  transform: rotate(-2deg);
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.image-grid img {
  width: 100%;
  height: 6rem;
  object-fit: cover;
  border: 4px solid;
  transition: filter 0.3s;
}

.image-grid img:nth-child(1) {
  border-color: #06b6d4;
  filter: blur(4px);
}

.image-grid img:nth-child(1):hover {
  filter: blur(0);
}

.image-grid img:nth-child(2) {
  border-color: #c026d3;
  filter: grayscale(100%);
}

.image-grid img:nth-child(2):hover {
  filter: grayscale(0%);
}

.image-grid img:nth-child(3) {
  border-color: #fde047;
  filter: sepia(100%);
}

.image-grid img:nth-child(3):hover {
  filter: sepia(0%);
}

.image-grid img:nth-child(4) {
  border-color: #ec4899;
  filter: hue-rotate(90deg);
}

.image-grid img:nth-child(4):hover {
  filter: hue-rotate(0deg);
}

.card-eyesore h3 {
  font-size: 1.875rem;
  font-weight: 900;
  margin-bottom: 0.75rem;
  background-color: #fde047;
  color: #581c87;
  padding: 0.5rem;
  border: 4px solid #000000;
  transform: rotate(-1deg);
  font-family: 'Comic Sans MS';
  animation: colorflip 2s infinite;
}

.card-eyesore p {
  font-size: 1.125rem;
  margin-bottom: 1rem;
  background-color: #06b6d4;
  padding: 0.75rem;
  border: 4px solid #db2777;
  font-family: 'Times New Roman';
}

.card-eyesore button {
  width: 100%;
  padding: 0.5rem 1rem;
  font-weight: 900;
  border: 4px solid;
  font-family: Papyrus;
  animation: jitter 0.3s infinite;
  margin-bottom: 0.5rem;
}`
  }
};

export function CardSample() {
  const [selectedCard, setSelectedCard] = useState('card1');
  const [viewMode, setViewMode] = useState('preview');
  const [codeLanguage, setCodeLanguage] = useState('react');
  const [styleType, setStyleType] = useState('tailwindcss');
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedCss, setCopiedCss] = useState(false);

  const config = cardConfigs[selectedCard];

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
      const simplifiedReact = `<div className="card-${selectedCard.replace('card', '')}">\n  {/* Card content with custom CSS classes */}\n</div>`;
      const simplifiedHtml = `<div class="card-${selectedCard.replace('card', '')}">\n  <!-- Card content with custom CSS classes -->\n</div>`;
      return codeLanguage === 'react' ? simplifiedReact : simplifiedHtml;
    }
  };

  return (
    <div className="min-h-screen p-4 md:p-8" style={{ 
      background: 'linear-gradient(135deg, #ec4899 0%, #fbbf24 25%, #06b6d4 50%, #84cc16 75%, #c026d3 100%)',
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
        @keyframes jitter {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(-2px, 2px); }
          50% { transform: translate(2px, -2px); }
          75% { transform: translate(-2px, -2px); }
        }
        @keyframes pulse-bright {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.02); }
        }
        @keyframes flicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .shake { animation: shake 0.5s infinite; }
        .colorflip { animation: colorflip 2s infinite; }
        .jitter { animation: jitter 0.3s infinite; }
        .pulse-bright { animation: pulse-bright 1s infinite; }
        .flicker { animation: flicker 0.3s infinite; }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 bg-gradient-to-r from-red-500 via-yellow-400 to-cyan-500 p-6 border-8 border-black transform rotate-1">
          <h1
            className="text-4xl md:text-6xl font-black mb-4 colorflip"
            style={{ fontFamily: FONTS.IMPACT }}
          >
            🎴 DUMBUI CARDS 🎴
          </h1>
          <p
            className="text-xl md:text-3xl font-black"
            style={{ fontFamily: FONTS.PAPYRUS, color: COLORS.MAGENTA }}
          >
            Cards SO UGLY They'll Make You CRY! 😭
          </p>
        </div>

        <div className="mb-6 bg-gradient-to-r from-lime-400 via-pink-500 to-cyan-400 p-4 border-8 border-purple-600 transform -rotate-1">
          <div className="flex flex-wrap gap-3 justify-center">
            {Object.keys(cardConfigs).map((card) => (
              <button
                key={card}
                onClick={() => setSelectedCard(card)}
                className={`px-6 py-3 font-black text-lg border-4 transition-all ${
                  selectedCard === card
                    ? 'bg-yellow-300 text-black border-black scale-110 shake'
                    : 'bg-red-600 text-lime-400 border-lime-400 hover:scale-105'
                }`}
                style={{ fontFamily: FONTS.IMPACT }}
              >
                {card.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6 bg-purple-600 p-4 border-8 border-yellow-300 transform rotate-1">
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <button
              onClick={() => setViewMode('preview')}
              className={`px-6 py-3 font-black text-lg border-4 transition-all ${
                viewMode === 'preview'
                  ? 'bg-lime-400 text-black border-black shake'
                  : 'bg-cyan-400 text-black border-black hover:bg-cyan-500'
              }`}
              style={{ fontFamily: FONTS.PAPYRUS }}
            >
              👁️ PREVIEW
            </button>
            <button
              onClick={() => setViewMode('code')}
              className={`px-6 py-3 font-black text-lg border-4 transition-all ${
                viewMode === 'code'
                  ? 'bg-lime-400 text-black border-black shake'
                  : 'bg-cyan-400 text-black border-black hover:bg-cyan-500'
              }`}
              style={{ fontFamily: FONTS.PAPYRUS }}
            >
              💻 CODE
            </button>

            <div className="flex gap-2">
              <select
                value={styleType}
                onChange={(e) => setStyleType(e.target.value)}
                className="px-4 py-3 font-black text-lg border-4 border-black bg-pink-400"
                style={{ fontFamily: FONTS.COMIC_SANS }}
              >
                <option value="tailwindcss">TailwindCSS</option>
                <option value="css">CSS</option>
              </select>

              <select
                value={codeLanguage}
                onChange={(e) => setCodeLanguage(e.target.value)}
                className="px-4 py-3 font-black text-lg border-4 border-black bg-yellow-300"
                style={{ fontFamily: FONTS.COMIC_SANS }}
              >
                <option value="react">React</option>
                <option value="html">HTML</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-cyan-400 p-8 border-8 border-red-600 transform -rotate-1">
          {viewMode === 'preview' ? (
            <div className="flex flex-col items-center justify-center min-h-[600px] bg-gradient-to-br from-yellow-300 via-magenta-500 to-blue-500 border-8 border-lime-400 p-8">
              <h2
                className="text-3xl font-black mb-8 pulse-bright bg-black text-cyan-400 px-6 py-3 border-4 border-yellow-300 transform rotate-2"
                style={{ fontFamily: FONTS.IMPACT }}
              >
                {config.name}
              </h2>
              {config.component()}
            </div>
          ) : (
            <div className="space-y-4">
              <div className="bg-gray-900 p-4 border-4 border-pink-400 relative">
                <div className="flex justify-between items-center mb-2 pb-2 border-b-2 border-gray-700">
                  <span className="text-pink-300 font-bold" style={{ fontFamily: FONTS.IMPACT }}>
                    {codeLanguage === 'react' ? '⚛️ REACT CODE' : '🌐 HTML CODE'}
                  </span>
                  <button
                    onClick={() => handleCopy(getCodeToDisplay(), 'code')}
                    className="px-3 py-1 bg-lime-400 text-black font-bold border-2 border-black hover:bg-lime-500 flex items-center gap-2"
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
                    maxHeight: '500px'
                  }}
                  showLineNumbers
                  wrapLines
                >
                  {getCodeToDisplay()}
                </SyntaxHighlighter>
              </div>

              {styleType === 'css' && (
                <div className="bg-gray-900 p-4 border-4 border-cyan-400 relative">
                  <div className="flex justify-between items-center mb-2 pb-2 border-b-2 border-gray-700">
                    <span className="text-cyan-300 font-bold" style={{ fontFamily: FONTS.IMPACT }}>
                      🎨 CSS CODE
                    </span>
                    <button
                      onClick={() => handleCopy(config.cssCode, 'css')}
                      className="px-3 py-1 bg-cyan-400 text-black font-bold border-2 border-black hover:bg-cyan-500 flex items-center gap-2"
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
                      maxHeight: '500px'
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

        <div className="mt-8 bg-gradient-to-r from-cyan-400 via-lime-400 to-pink-500 p-6 border-8 border-black transform rotate-2">
          <p
            className="text-2xl font-black text-center jitter"
            style={{ fontFamily: FONTS.IMPACT, color: '#000' }}
          >
            ⚠️ WARNING: These cards are WEAPONS-GRADE UGLY! Use at your own risk! ⚠️
          </p>
        </div>

        <div className="mt-8 bg-yellow-300 p-6 border-8 border-purple-600 transform -rotate-1">
          <h3
            className="text-3xl font-black mb-4 text-center colorflip"
            style={{ fontFamily: FONTS.PAPYRUS }}
          >
            📋 FEATURES OF TERRIBLE CARDS 📋
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-pink-500 to-red-600 p-4 border-4 border-black transform rotate-1">
              <p className="text-lg font-black text-yellow-300" style={{ fontFamily: FONTS.COMIC_SANS }}>
                🎨 CLASHING COLORS EVERYWHERE!
              </p>
            </div>
            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-4 border-4 border-black transform -rotate-2">
              <p className="text-lg font-black text-lime-400" style={{ fontFamily: FONTS.COMIC_SANS }}>
                🌀 ROTATING & SHAKING ANIMATIONS!
              </p>
            </div>
            <div className="bg-gradient-to-br from-lime-500 to-green-600 p-4 border-4 border-black transform rotate-2">
              <p className="text-lg font-black text-magenta-600" style={{ fontFamily: FONTS.COMIC_SANS }}>
                😵 MAXIMUM EYE STRAIN GUARANTEED!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}