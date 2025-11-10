import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy, X } from 'lucide-react';

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

const dialogConfigs = {
  dialog1: {
    name: 'Shaky Comic Dialog',
    className: 'fixed inset-0 flex items-center justify-center z-50 shake bg-black bg-opacity-50',
    dialogClassName: 'bg-lime-400 border-8 border-black rounded-lg p-6 max-w-md w-full mx-4',
    title: '🎉 IMPORTANT MESSAGE! 🎉',
    content: 'This is a VERY important dialog that shakes constantly to get your attention! Are you sure you want to continue?',
    reactCode: `const [isOpen, setIsOpen] = useState(false);

<>
  <button 
    onClick={() => setIsOpen(true)}
    className="px-6 py-3 bg-lime-400 text-black font-black text-lg border-4 border-black hover:bg-yellow-300 transition-colors"
    style={{ fontFamily: 'Comic Sans MS' }}
  >
    Open Dialog
  </button>

  {isOpen && (
    <div className="fixed inset-0 flex items-center justify-center z-50 shake bg-black bg-opacity-50">
      <div className="bg-lime-400 border-8 border-black rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-black text-black" style={{ fontFamily: 'Comic Sans MS' }}>
            🎉 IMPORTANT MESSAGE! 🎉
          </h2>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-black hover:text-red-600 text-2xl font-black transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        <p className="text-black font-bold mb-6 text-lg" style={{ fontFamily: 'Comic Sans MS' }}>
          This is a VERY important dialog that shakes constantly to get your attention! Are you sure you want to continue?
        </p>
        <div className="flex gap-4">
          <button 
            onClick={() => setIsOpen(false)}
            className="flex-1 py-3 bg-red-500 text-white font-black text-lg border-4 border-black hover:bg-red-600 transition-colors"
            style={{ fontFamily: 'Comic Sans MS' }}
          >
            CANCEL
          </button>
          <button 
            onClick={() => setIsOpen(false)}
            className="flex-1 py-3 bg-green-500 text-white font-black text-lg border-4 border-black hover:bg-green-600 transition-colors"
            style={{ fontFamily: 'Comic Sans MS' }}
          >
            CONFIRM
          </button>
        </div>
      </div>
    </div>
  )}
</>`,
    htmlCode: `<!-- Trigger Button -->
<button 
  onclick="openDialog()"
  class="px-6 py-3 bg-lime-400 text-black font-black text-lg border-4 border-black hover:bg-yellow-300 transition-colors"
  style="font-family: 'Comic Sans MS';"
>
  Open Dialog
</button>

<!-- Dialog -->
<div id="dialog" class="fixed inset-0 flex items-center justify-center z-50 shake bg-black bg-opacity-50 hidden">
  <div class="bg-lime-400 border-8 border-black rounded-lg p-6 max-w-md w-full mx-4">
    <div class="flex justify-between items-start mb-4">
      <h2 class="text-2xl font-black text-black" style="font-family: 'Comic Sans MS';">
        🎉 IMPORTANT MESSAGE! 🎉
      </h2>
      <button 
        onclick="closeDialog()"
        class="text-black hover:text-red-600 text-2xl font-black transition-colors"
      >
        ✕
      </button>
    </div>
    <p class="text-black font-bold mb-6 text-lg" style="font-family: 'Comic Sans MS';">
      This is a VERY important dialog that shakes constantly to get your attention! Are you sure you want to continue?
    </p>
    <div class="flex gap-4">
      <button 
        onclick="closeDialog()"
        class="flex-1 py-3 bg-red-500 text-white font-black text-lg border-4 border-black hover:bg-red-600 transition-colors"
        style="font-family: 'Comic Sans MS';"
      >
        CANCEL
      </button>
      <button 
        onclick="closeDialog()"
        class="flex-1 py-3 bg-green-500 text-white font-black text-lg border-4 border-black hover:bg-green-600 transition-colors"
        style="font-family: 'Comic Sans MS';"
      >
        CONFIRM
      </button>
    </div>
  </div>
</div>`,
    cssCode: `.dialog-shaky {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  background-color: rgba(0, 0, 0, 0.5);
  animation: shake 0.5s infinite;
}

.dialog-shaky .content {
  background-color: #84cc16;
  border: 8px solid #000000;
  border-radius: 0.5rem;
  padding: 1.5rem;
  max-width: 28rem;
  width: 100%;
  margin: 0 1rem;
  font-family: 'Comic Sans MS';
}

.dialog-shaky .title {
  font-size: 1.5rem;
  font-weight: 900;
  color: #000000;
  margin-bottom: 1rem;
}

.dialog-shaky .message {
  color: #000000;
  font-weight: 700;
  font-size: 1.125rem;
  margin-bottom: 1.5rem;
}

.dialog-shaky .buttons {
  display: flex;
  gap: 1rem;
}

.dialog-shaky .button {
  flex: 1;
  padding: 0.75rem;
  color: #ffffff;
  font-weight: 900;
  font-size: 1.125rem;
  border: 4px solid #000000;
  transition: background-color 0.3s;
}

.dialog-shaky .cancel {
  background-color: #ef4444;
}

.dialog-shaky .cancel:hover {
  background-color: #dc2626;
}

.dialog-shaky .confirm {
  background-color: #22c55e;
}

.dialog-shaky .confirm:hover {
  background-color: #16a34a;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}`
  },
  dialog2: {
    name: 'Spinning Rainbow Dialog',
    className: 'fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50',
    dialogClassName: 'bg-gradient-to-br from-pink-500 via-yellow-400 to-cyan-400 border-4 border-purple-600 rounded-lg p-6 max-w-md w-full mx-4 spin',
    title: '🌀 SPINNING ALERT! 🌀',
    content: 'This dialog spins round and round forever! Try to read this message while everything is rotating!',
    reactCode: `const [isOpen, setIsOpen] = useState(false);

<>
  <button 
    onClick={() => setIsOpen(true)}
    className="px-6 py-3 bg-gradient-to-r from-pink-500 to-cyan-400 text-black font-black text-lg border-4 border-white hover:scale-110 transition-transform"
    style={{ fontFamily: 'Papyrus' }}
  >
    Open Spinner
  </button>

  {isOpen && (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-gradient-to-br from-pink-500 via-yellow-400 to-cyan-400 border-4 border-purple-600 rounded-lg p-6 max-w-md w-full mx-4 spin">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-black text-black" style={{ fontFamily: 'Papyrus' }}>
            🌀 SPINNING ALERT! 🌀
          </h2>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-black hover:text-red-600 text-2xl font-black transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        <p className="text-black font-bold mb-6 text-lg" style={{ fontFamily: 'Papyrus' }}>
          This dialog spins round and round forever! Try to read this message while everything is rotating!
        </p>
        <div className="flex gap-4">
          <button 
            onClick={() => setIsOpen(false)}
            className="flex-1 py-3 bg-white text-black font-black text-lg border-4 border-black hover:bg-gray-200 transition-colors pulse"
            style={{ fontFamily: 'Papyrus' }}
          >
            NO WAY!
          </button>
          <button 
            onClick={() => setIsOpen(false)}
            className="flex-1 py-3 bg-black text-white font-black text-lg border-4 border-white hover:bg-gray-800 transition-colors pulse"
            style={{ fontFamily: 'Papyrus' }}
          >
            I AGREE!
          </button>
        </div>
      </div>
    </div>
  )}
</>`,
    htmlCode: `<!-- Trigger Button -->
<button 
  onclick="openDialog()"
  class="px-6 py-3 bg-gradient-to-r from-pink-500 to-cyan-400 text-black font-black text-lg border-4 border-white hover:scale-110 transition-transform"
  style="font-family: 'Papyrus';"
>
  Open Spinner
</button>

<!-- Dialog -->
<div id="dialog" class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 hidden">
  <div class="bg-gradient-to-br from-pink-500 via-yellow-400 to-cyan-400 border-4 border-purple-600 rounded-lg p-6 max-w-md w-full mx-4 spin">
    <div class="flex justify-between items-start mb-4">
      <h2 class="text-2xl font-black text-black" style="font-family: 'Papyrus';">
        🌀 SPINNING ALERT! 🌀
      </h2>
      <button 
        onclick="closeDialog()"
        class="text-black hover:text-red-600 text-2xl font-black transition-colors"
      >
        ✕
      </button>
    </div>
    <p class="text-black font-bold mb-6 text-lg" style="font-family: 'Papyrus';">
      This dialog spins round and round forever! Try to read this message while everything is rotating!
    </p>
    <div class="flex gap-4">
      <button 
        onclick="closeDialog()"
        class="flex-1 py-3 bg-white text-black font-black text-lg border-4 border-black hover:bg-gray-200 transition-colors pulse"
        style="font-family: 'Papyrus';"
      >
        NO WAY!
      </button>
      <button 
        onclick="closeDialog()"
        class="flex-1 py-3 bg-black text-white font-black text-lg border-4 border-white hover:bg-gray-800 transition-colors pulse"
        style="font-family: 'Papyrus';"
      >
        I AGREE!
      </button>
    </div>
  </div>
</div>`,
    cssCode: `.dialog-spin {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  background-color: rgba(0, 0, 0, 0.5);
}

.dialog-spin .content {
  background: linear-gradient(135deg, #ec4899, #f59e0b, #22d3ee);
  border: 4px solid #9333ea;
  border-radius: 0.5rem;
  padding: 1.5rem;
  max-width: 28rem;
  width: 100%;
  margin: 0 1rem;
  font-family: 'Papyrus';
  animation: spin 2s linear infinite;
}

.dialog-spin .title {
  font-size: 1.5rem;
  font-weight: 900;
  color: #000000;
  margin-bottom: 1rem;
}

.dialog-spin .message {
  color: #000000;
  font-weight: 700;
  font-size: 1.125rem;
  margin-bottom: 1.5rem;
}

.dialog-spin .buttons {
  display: flex;
  gap: 1rem;
}

.dialog-spin .button {
  flex: 1;
  padding: 0.75rem;
  font-weight: 900;
  font-size: 1.125rem;
  border: 4px solid;
  transition: background-color 0.3s;
  animation: pulse 0.5s infinite;
}

.dialog-spin .cancel {
  background-color: #ffffff;
  color: #000000;
  border-color: #000000;
}

.dialog-spin .cancel:hover {
  background-color: #e5e5e5;
}

.dialog-spin .confirm {
  background-color: #000000;
  color: #ffffff;
  border-color: #ffffff;
}

.dialog-spin .confirm:hover {
  background-color: #262626;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}`
  },
  dialog3: {
    name: 'Bouncing Times Dialog',
    className: 'fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50',
    dialogClassName: 'bg-purple-600 border-8 border-yellow-300 rounded-2xl p-6 max-w-md w-full mx-4 bounce',
    title: '🏀 BOUNCING NOTICE! 🏀',
    content: 'This dialog bounces up and down constantly! Good luck trying to click the buttons while they are moving!',
    reactCode: `const [isOpen, setIsOpen] = useState(false);

<>
  <button 
    onClick={() => setIsOpen(true)}
    className="px-6 py-3 bg-purple-600 text-yellow-300 font-black text-lg border-4 border-yellow-300 hover:bg-purple-700 transition-colors"
    style={{ fontFamily: 'Times New Roman' }}
  >
    Open Bouncer
  </button>

  {isOpen && (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-purple-600 border-8 border-yellow-300 rounded-2xl p-6 max-w-md w-full mx-4 bounce">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-black text-yellow-300" style={{ fontFamily: 'Times New Roman' }}>
            🏀 BOUNCING NOTICE! 🏀
          </h2>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-yellow-300 hover:text-red-400 text-2xl font-black transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        <p className="text-yellow-300 font-bold mb-6 text-lg" style={{ fontFamily: 'Times New Roman' }}>
          This dialog bounces up and down constantly! Good luck trying to click the buttons while they are moving!
        </p>
        <div className="flex gap-4">
          <button 
            onClick={() => setIsOpen(false)}
            className="flex-1 py-3 bg-pink-500 text-white font-black text-lg border-4 border-white hover:bg-pink-600 transition-colors wobble"
            style={{ fontFamily: 'Times New Roman' }}
          >
            DENY
          </button>
          <button 
            onClick={() => setIsOpen(false)}
            className="flex-1 py-3 bg-green-500 text-white font-black text-lg border-4 border-white hover:bg-green-600 transition-colors wobble"
            style={{ fontFamily: 'Times New Roman' }}
          >
            ACCEPT
          </button>
        </div>
      </div>
    </div>
  )}
</>`,
    htmlCode: `<!-- Trigger Button -->
<button 
  onclick="openDialog()"
  class="px-6 py-3 bg-purple-600 text-yellow-300 font-black text-lg border-4 border-yellow-300 hover:bg-purple-700 transition-colors"
  style="font-family: 'Times New Roman';"
>
  Open Bouncer
</button>

<!-- Dialog -->
<div id="dialog" class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 hidden">
  <div class="bg-purple-600 border-8 border-yellow-300 rounded-2xl p-6 max-w-md w-full mx-4 bounce">
    <div class="flex justify-between items-start mb-4">
      <h2 class="text-2xl font-black text-yellow-300" style="font-family: 'Times New Roman';">
        🏀 BOUNCING NOTICE! 🏀
      </h2>
      <button 
        onclick="closeDialog()"
        class="text-yellow-300 hover:text-red-400 text-2xl font-black transition-colors"
      >
        ✕
      </button>
    </div>
    <p class="text-yellow-300 font-bold mb-6 text-lg" style="font-family: 'Times New Roman';">
      This dialog bounces up and down constantly! Good luck trying to click the buttons while they are moving!
    </p>
    <div class="flex gap-4">
      <button 
        onclick="closeDialog()"
        class="flex-1 py-3 bg-pink-500 text-white font-black text-lg border-4 border-white hover:bg-pink-600 transition-colors wobble"
        style="font-family: 'Times New Roman';"
      >
        DENY
      </button>
      <button 
        onclick="closeDialog()"
        class="flex-1 py-3 bg-green-500 text-white font-black text-lg border-4 border-white hover:bg-green-600 transition-colors wobble"
        style="font-family: 'Times New Roman';"
      >
        ACCEPT
      </button>
    </div>
  </div>
</div>`,
    cssCode: `.dialog-bounce {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  background-color: rgba(0, 0, 0, 0.5);
}

.dialog-bounce .content {
  background-color: #9333ea;
  border: 8px solid #fde047;
  border-radius: 1rem;
  padding: 1.5rem;
  max-width: 28rem;
  width: 100%;
  margin: 0 1rem;
  font-family: 'Times New Roman';
  animation: bounce 0.8s infinite;
}

.dialog-bounce .title {
  font-size: 1.5rem;
  font-weight: 900;
  color: #fde047;
  margin-bottom: 1rem;
}

.dialog-bounce .message {
  color: #fde047;
  font-weight: 700;
  font-size: 1.125rem;
  margin-bottom: 1.5rem;
}

.dialog-bounce .buttons {
  display: flex;
  gap: 1rem;
}

.dialog-bounce .button {
  flex: 1;
  padding: 0.75rem;
  color: #ffffff;
  font-weight: 900;
  font-size: 1.125rem;
  border: 4px solid #ffffff;
  transition: background-color 0.3s;
  animation: wobble 0.7s infinite;
}

.dialog-bounce .cancel {
  background-color: #ec4899;
}

.dialog-bounce .cancel:hover {
  background-color: #db2777;
}

.dialog-bounce .confirm {
  background-color: #22c55e;
}

.dialog-bounce .confirm:hover {
  background-color: #16a34a;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

@keyframes wobble {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-5deg); }
  75% { transform: rotate(5deg); }
}`
  },
  dialog4: {
    name: 'Wobbly Brush Dialog',
    className: 'fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50',
    dialogClassName: 'bg-gradient-to-t from-cyan-400 to-pink-400 border-6 border-orange-500 rounded-full p-8 max-w-md w-full mx-4 wobble',
    title: '🌊 WOBBLY WARNING! 🌊',
    content: 'This dialog wobbles back and forth like a ship in a storm! Hope you are not seasick!',
    reactCode: `const [isOpen, setIsOpen] = useState(false);

<>
  <button 
    onClick={() => setIsOpen(true)}
    className="px-6 py-3 bg-gradient-to-t from-cyan-400 to-pink-400 text-black font-black text-lg border-4 border-black hover:scale-105 transition-transform"
    style={{ fontFamily: 'Brush Script MT' }}
  >
    Open Wobbler
  </button>

  {isOpen && (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-gradient-to-t from-cyan-400 to-pink-400 border-6 border-orange-500 rounded-full p-8 max-w-md w-full mx-4 wobble">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-black text-black" style={{ fontFamily: 'Brush Script MT' }}>
            🌊 WOBBLY WARNING! 🌊
          </h2>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-black hover:text-red-600 text-2xl font-black transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        <p className="text-black font-bold mb-6 text-lg text-center" style={{ fontFamily: 'Brush Script MT' }}>
          This dialog wobbles back and forth like a ship in a storm! Hope you are not seasick!
        </p>
        <div className="flex gap-4">
          <button 
            onClick={() => setIsOpen(false)}
            className="flex-1 py-3 bg-black text-white font-black text-lg border-4 border-yellow-300 hover:bg-gray-800 transition-colors shake"
            style={{ fontFamily: 'Brush Script MT' }}
          >
            ESCAPE
          </button>
          <button 
            onClick={() => setIsOpen(false)}
            className="flex-1 py-3 bg-yellow-300 text-black font-black text-lg border-4 border-black hover:bg-yellow-400 transition-colors shake"
            style={{ fontFamily: 'Brush Script MT' }}
          >
            PROCEED
          </button>
        </div>
      </div>
    </div>
  )}
</>`,
    htmlCode: `<!-- Trigger Button -->
<button 
  onclick="openDialog()"
  class="px-6 py-3 bg-gradient-to-t from-cyan-400 to-pink-400 text-black font-black text-lg border-4 border-black hover:scale-105 transition-transform"
  style="font-family: 'Brush Script MT';"
>
  Open Wobbler
</button>

<!-- Dialog -->
<div id="dialog" class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 hidden">
  <div class="bg-gradient-to-t from-cyan-400 to-pink-400 border-6 border-orange-500 rounded-full p-8 max-w-md w-full mx-4 wobble">
    <div class="flex justify-between items-start mb-4">
      <h2 class="text-2xl font-black text-black" style="font-family: 'Brush Script MT';">
        🌊 WOBBLY WARNING! 🌊
      </h2>
      <button 
        onclick="closeDialog()"
        class="text-black hover:text-red-600 text-2xl font-black transition-colors"
      >
        ✕
      </button>
    </div>
    <p class="text-black font-bold mb-6 text-lg text-center" style="font-family: 'Brush Script MT';">
      This dialog wobbles back and forth like a ship in a storm! Hope you are not seasick!
    </p>
    <div class="flex gap-4">
      <button 
        onclick="closeDialog()"
        class="flex-1 py-3 bg-black text-white font-black text-lg border-4 border-yellow-300 hover:bg-gray-800 transition-colors shake"
        style="font-family: 'Brush Script MT';"
      >
        ESCAPE
      </button>
      <button 
        onclick="closeDialog()"
        class="flex-1 py-3 bg-yellow-300 text-black font-black text-lg border-4 border-black hover:bg-yellow-400 transition-colors shake"
        style="font-family: 'Brush Script MT';"
      >
        PROCEED
      </button>
    </div>
  </div>
</div>`,
    cssCode: `.dialog-wobble {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  background-color: rgba(0, 0, 0, 0.5);
}

.dialog-wobble .content {
  background: linear-gradient(to top, #22d3ee, #ec4899);
  border: 6px solid #f97316;
  border-radius: 9999px;
  padding: 2rem;
  max-width: 28rem;
  width: 100%;
  margin: 0 1rem;
  font-family: 'Brush Script MT';
  animation: wobble 0.7s infinite;
}

.dialog-wobble .title {
  font-size: 1.5rem;
  font-weight: 900;
  color: #000000;
  margin-bottom: 1rem;
}

.dialog-wobble .message {
  color: #000000;
  font-weight: 700;
  font-size: 1.125rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

.dialog-wobble .buttons {
  display: flex;
  gap: 1rem;
}

.dialog-wobble .button {
  flex: 1;
  padding: 0.75rem;
  font-weight: 900;
  font-size: 1.125rem;
  border: 4px solid;
  transition: background-color 0.3s;
  animation: shake 0.5s infinite;
}

.dialog-wobble .cancel {
  background-color: #000000;
  color: #ffffff;
  border-color: #fde047;
}

.dialog-wobble .cancel:hover {
  background-color: #262626;
}

.dialog-wobble .confirm {
  background-color: #fde047;
  color: #000000;
  border-color: #000000;
}

.dialog-wobble .confirm:hover {
  background-color: #facc15;
}

@keyframes wobble {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-10deg); }
  75% { transform: rotate(10deg); }
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-3px); }
  75% { transform: translateX(3px); }
}`
  },
  dialog5: {
    name: 'Glitchy Impact Dialog',
    className: 'fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50',
    dialogClassName: 'bg-yellow-300 border-8 border-magenta-500 rounded-md p-6 max-w-md w-full mx-4 glitch',
    title: '💥 GLITCHY ALERT! 💥',
    content: 'This dialog glitches randomly all over the screen! Good luck trying to read this important message!',
    reactCode: `const [isOpen, setIsOpen] = useState(false);

<>
  <button 
    onClick={() => setIsOpen(true)}
    className="px-6 py-3 bg-yellow-300 text-black font-black text-lg border-4 border-magenta-500 hover:bg-yellow-400 transition-colors"
    style={{ fontFamily: 'Impact' }}
  >
    Open Glitcher
  </button>

  {isOpen && (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-yellow-300 border-8 border-magenta-500 rounded-md p-6 max-w-md w-full mx-4 glitch">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-black text-black" style={{ fontFamily: 'Impact' }}>
            💥 GLITCHY ALERT! 💥
          </h2>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-black hover:text-red-600 text-2xl font-black transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        <p className="text-black font-bold mb-6 text-lg" style={{ fontFamily: 'Impact' }}>
          This dialog glitches randomly all over the screen! Good luck trying to read this important message!
        </p>
        <div className="flex gap-4">
          <button 
            onClick={() => setIsOpen(false)}
            className="flex-1 py-3 bg-red-600 text-white font-black text-lg border-4 border-black hover:bg-red-700 transition-colors pulse"
            style={{ fontFamily: 'Impact' }}
          >
            ABORT
          </button>
          <button 
            onClick={() => setIsOpen(false)}
            className="flex-1 py-3 bg-green-600 text-white font-black text-lg border-4 border-black hover:bg-green-700 transition-colors pulse"
            style={{ fontFamily: 'Impact' }}
          >
            CONTINUE
          </button>
        </div>
      </div>
    </div>
  )}
</>`,
    htmlCode: `<!-- Trigger Button -->
<button 
  onclick="openDialog()"
  class="px-6 py-3 bg-yellow-300 text-black font-black text-lg border-4 border-magenta-500 hover:bg-yellow-400 transition-colors"
  style="font-family: 'Impact';"
>
  Open Glitcher
</button>

<!-- Dialog -->
<div id="dialog" class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 hidden">
  <div class="bg-yellow-300 border-8 border-magenta-500 rounded-md p-6 max-w-md w-full mx-4 glitch">
    <div class="flex justify-between items-start mb-4">
      <h2 class="text-2xl font-black text-black" style="font-family: 'Impact';">
        💥 GLITCHY ALERT! 💥
      </h2>
      <button 
        onclick="closeDialog()"
        class="text-black hover:text-red-600 text-2xl font-black transition-colors"
      >
        ✕
      </button>
    </div>
    <p class="text-black font-bold mb-6 text-lg" style="font-family: 'Impact';">
      This dialog glitches randomly all over the screen! Good luck trying to read this important message!
    </p>
    <div class="flex gap-4">
      <button 
        onclick="closeDialog()"
        class="flex-1 py-3 bg-red-600 text-white font-black text-lg border-4 border-black hover:bg-red-700 transition-colors pulse"
        style="font-family: 'Impact';"
      >
        ABORT
      </button>
      <button 
        onclick="closeDialog()"
        class="flex-1 py-3 bg-green-600 text-white font-black text-lg border-4 border-black hover:bg-green-700 transition-colors pulse"
        style="font-family: 'Impact';"
      >
        CONTINUE
      </button>
    </div>
  </div>
</div>`,
    cssCode: `.dialog-glitch {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  background-color: rgba(0, 0, 0, 0.5);
}

.dialog-glitch .content {
  background-color: #fde047;
  border: 8px solid #d946ef;
  border-radius: 0.375rem;
  padding: 1.5rem;
  max-width: 28rem;
  width: 100%;
  margin: 0 1rem;
  font-family: 'Impact';
  animation: glitch 0.4s infinite;
  position: relative;
}

.dialog-glitch .title {
  font-size: 1.5rem;
  font-weight: 900;
  color: #000000;
  margin-bottom: 1rem;
}

.dialog-glitch .message {
  color: #000000;
  font-weight: 700;
  font-size: 1.125rem;
  margin-bottom: 1.5rem;
}

.dialog-glitch .buttons {
  display: flex;
  gap: 1rem;
}

.dialog-glitch .button {
  flex: 1;
  padding: 0.75rem;
  color: #ffffff;
  font-weight: 900;
  font-size: 1.125rem;
  border: 4px solid #000000;
  transition: background-color 0.3s;
  animation: pulse 0.5s infinite;
}

.dialog-glitch .cancel {
  background-color: #dc2626;
}

.dialog-glitch .cancel:hover {
  background-color: #b91c1c;
}

.dialog-glitch .confirm {
  background-color: #16a34a;
}

.dialog-glitch .confirm:hover {
  background-color: #15803d;
}

@keyframes glitch {
  0% { transform: translate(0); }
  20% { transform: translate(-8px, 8px); }
  40% { transform: translate(-8px, -8px); }
  60% { transform: translate(8px, 8px); }
  80% { transform: translate(8px, -8px); }
  100% { transform: translate(0); }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}`
  },
  dialog6: {
    name: 'Pulsing Jokerman Dialog',
    className: 'fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50',
    dialogClassName: 'bg-gradient-to-r from-green-400 to-blue-500 border-8 border-red-600 rounded-xl p-6 max-w-md w-full mx-4 pulse',
    title: '✨ PULSING UPDATE! ✨',
    content: 'This dialog pulses constantly like a heartbeat! The buttons also have their own animations!',
    reactCode: `const [isOpen, setIsOpen] = useState(false);

<>
  <button 
    onClick={() => setIsOpen(true)}
    className="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-black text-lg border-4 border-white hover:scale-110 transition-transform"
    style={{ fontFamily: 'Jokerman' }}
  >
    Open Pulsar
  </button>

  {isOpen && (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-gradient-to-r from-green-400 to-blue-500 border-8 border-red-600 rounded-xl p-6 max-w-md w-full mx-4 pulse">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-black text-white" style={{ fontFamily: 'Jokerman' }}>
            ✨ PULSING UPDATE! ✨
          </h2>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-yellow-300 text-2xl font-black transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        <p className="text-white font-bold mb-6 text-lg" style={{ fontFamily: 'Jokerman' }}>
          This dialog pulses constantly like a heartbeat! The buttons also have their own animations!
        </p>
        <div className="flex gap-4">
          <button 
            onClick={() => setIsOpen(false)}
            className="flex-1 py-3 bg-yellow-300 text-black font-black text-lg border-4 border-white hover:bg-yellow-400 transition-colors bounce"
            style={{ fontFamily: 'Jokerman' }}
          >
            SKIP
          </button>
          <button 
            onClick={() => setIsOpen(false)}
            className="flex-1 py-3 bg-white text-black font-black text-lg border-4 border-black hover:bg-gray-200 transition-colors bounce"
            style={{ fontFamily: 'Jokerman' }}
          >
            UPDATE
          </button>
        </div>
      </div>
    </div>
  )}
</>`,
    htmlCode: `<!-- Trigger Button -->
<button 
  onclick="openDialog()"
  class="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-black text-lg border-4 border-white hover:scale-110 transition-transform"
  style="font-family: 'Jokerman';"
>
  Open Pulsar
</button>

<!-- Dialog -->
<div id="dialog" class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 hidden">
  <div class="bg-gradient-to-r from-green-400 to-blue-500 border-8 border-red-600 rounded-xl p-6 max-w-md w-full mx-4 pulse">
    <div class="flex justify-between items-start mb-4">
      <h2 class="text-2xl font-black text-white" style="font-family: 'Jokerman';">
        ✨ PULSING UPDATE! ✨
      </h2>
      <button 
        onclick="closeDialog()"
        class="text-white hover:text-yellow-300 text-2xl font-black transition-colors"
      >
        ✕
      </button>
    </div>
    <p class="text-white font-bold mb-6 text-lg" style="font-family: 'Jokerman';">
      This dialog pulses constantly like a heartbeat! The buttons also have their own animations!
    </p>
    <div class="flex gap-4">
      <button 
        onclick="closeDialog()"
        class="flex-1 py-3 bg-yellow-300 text-black font-black text-lg border-4 border-white hover:bg-yellow-400 transition-colors bounce"
        style="font-family: 'Jokerman';"
      >
        SKIP
      </button>
      <button 
        onclick="closeDialog()"
        class="flex-1 py-3 bg-white text-black font-black text-lg border-4 border-black hover:bg-gray-200 transition-colors bounce"
        style="font-family: 'Jokerman';"
      >
        UPDATE
      </button>
    </div>
  </div>
</div>`,
    cssCode: `.dialog-pulse {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  background-color: rgba(0, 0, 0, 0.5);
}

.dialog-pulse .content {
  background: linear-gradient(to right, #4ade80, #3b82f6);
  border: 8px solid #dc2626;
  border-radius: 0.75rem;
  padding: 1.5rem;
  max-width: 28rem;
  width: 100%;
  margin: 0 1rem;
  font-family: 'Jokerman';
  animation: pulse 0.5s infinite;
}

.dialog-pulse .title {
  font-size: 1.5rem;
  font-weight: 900;
  color: #ffffff;
  margin-bottom: 1rem;
}

.dialog-pulse .message {
  color: #ffffff;
  font-weight: 700;
  font-size: 1.125rem;
  margin-bottom: 1.5rem;
}

.dialog-pulse .buttons {
  display: flex;
  gap: 1rem;
}

.dialog-pulse .button {
  flex: 1;
  padding: 0.75rem;
  font-weight: 900;
  font-size: 1.125rem;
  border: 4px solid;
  transition: background-color 0.3s;
  animation: bounce 0.8s infinite;
}

.dialog-pulse .cancel {
  background-color: #fde047;
  color: #000000;
  border-color: #ffffff;
}

.dialog-pulse .cancel:hover {
  background-color: #facc15;
}

.dialog-pulse .confirm {
  background-color: #ffffff;
  color: #000000;
  border-color: #000000;
}

.dialog-pulse .confirm:hover {
  background-color: #e5e5e5;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}`
  }
};

export function DialogSample() {
  const [selectedDialog, setSelectedDialog] = useState('dialog1');
  const [viewMode, setViewMode] = useState('preview');
  const [codeLanguage, setCodeLanguage] = useState('react');
  const [styleType, setStyleType] = useState('tailwindcss');
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedCss, setCopiedCss] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const config = dialogConfigs[selectedDialog];

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
        ? `<div className="dialog-${selectedDialog.slice(-1)}">\n  {/* Dialog content */}\n</div>`
        : `<div class="dialog-${selectedDialog.slice(-1)}">\n  <!-- Dialog content -->\n</div>`;
    }
  };

  const renderDialog = () => (
    <div className={config.className}>
      <div 
        className={config.dialogClassName}
        style={{ 
          fontFamily: config.reactCode.includes('Comic Sans') ? FONTS.COMIC_SANS : 
                   config.reactCode.includes('Papyrus') ? FONTS.PAPYRUS :
                   config.reactCode.includes('Times New Roman') ? FONTS.TIMES_NEW_ROMAN :
                   config.reactCode.includes('Impact') ? FONTS.IMPACT :
                   config.reactCode.includes('Brush Script') ? FONTS.BRUSH_SCRIPT : FONTS.JOKERMAN
        }}
      >
        <div className="flex justify-between items-start mb-4">
          <h2 className={`text-2xl font-black ${
            selectedDialog === 'dialog1' ? 'text-black' :
            selectedDialog === 'dialog2' ? 'text-black' :
            selectedDialog === 'dialog3' ? 'text-yellow-300' :
            selectedDialog === 'dialog4' ? 'text-black' :
            selectedDialog === 'dialog5' ? 'text-black' : 'text-white'
          }`}>
            {config.title}
          </h2>
          <button 
            onClick={() => setIsDialogOpen(false)}
            className={`${
              selectedDialog === 'dialog1' ? 'text-black hover:text-red-600' :
              selectedDialog === 'dialog2' ? 'text-black hover:text-red-600' :
              selectedDialog === 'dialog3' ? 'text-yellow-300 hover:text-red-400' :
              selectedDialog === 'dialog4' ? 'text-black hover:text-red-600' :
              selectedDialog === 'dialog5' ? 'text-black hover:text-red-600' : 'text-white hover:text-yellow-300'
            } text-2xl font-black transition-colors`}
          >
            <X size={24} />
          </button>
        </div>
        <p className={`font-bold mb-6 text-lg ${
          selectedDialog === 'dialog1' ? 'text-black' :
          selectedDialog === 'dialog2' ? 'text-black' :
          selectedDialog === 'dialog3' ? 'text-yellow-300' :
          selectedDialog === 'dialog4' ? 'text-black text-center' :
          selectedDialog === 'dialog5' ? 'text-black' : 'text-white'
        }`}>
          {config.content}
        </p>
        <div className="flex gap-4">
          <button 
            onClick={() => setIsDialogOpen(false)}
            className={`flex-1 py-3 font-black text-lg border-4 transition-colors ${
              selectedDialog === 'dialog1' ? 'bg-red-500 text-white border-black hover:bg-red-600' :
              selectedDialog === 'dialog2' ? 'bg-white text-black border-black hover:bg-gray-200 pulse' :
              selectedDialog === 'dialog3' ? 'bg-pink-500 text-white border-white hover:bg-pink-600 wobble' :
              selectedDialog === 'dialog4' ? 'bg-black text-white border-yellow-300 hover:bg-gray-800 shake' :
              selectedDialog === 'dialog5' ? 'bg-red-600 text-white border-black hover:bg-red-700 pulse' :
              'bg-yellow-300 text-black border-white hover:bg-yellow-400 bounce'
            }`}
          >
            {selectedDialog === 'dialog1' ? 'CANCEL' :
             selectedDialog === 'dialog2' ? 'NO WAY!' :
             selectedDialog === 'dialog3' ? 'DENY' :
             selectedDialog === 'dialog4' ? 'ESCAPE' :
             selectedDialog === 'dialog5' ? 'ABORT' : 'SKIP'}
          </button>
          <button 
            onClick={() => setIsDialogOpen(false)}
            className={`flex-1 py-3 font-black text-lg border-4 transition-colors ${
              selectedDialog === 'dialog1' ? 'bg-green-500 text-white border-black hover:bg-green-600' :
              selectedDialog === 'dialog2' ? 'bg-black text-white border-white hover:bg-gray-800 pulse' :
              selectedDialog === 'dialog3' ? 'bg-green-500 text-white border-white hover:bg-green-600 wobble' :
              selectedDialog === 'dialog4' ? 'bg-yellow-300 text-black border-black hover:bg-yellow-400 shake' :
              selectedDialog === 'dialog5' ? 'bg-green-600 text-white border-black hover:bg-green-700 pulse' :
              'bg-white text-black border-black hover:bg-gray-200 bounce'
            }`}
          >
            {selectedDialog === 'dialog1' ? 'CONFIRM' :
             selectedDialog === 'dialog2' ? 'I AGREE!' :
             selectedDialog === 'dialog3' ? 'ACCEPT' :
             selectedDialog === 'dialog4' ? 'PROCEED' :
             selectedDialog === 'dialog5' ? 'CONTINUE' : 'UPDATE'}
          </button>
        </div>
      </div>
    </div>
  );

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
          50% { transform: scale(1.05); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes wobble {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-10deg); }
          75% { transform: rotate(10deg); }
        }
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-8px, 8px); }
          40% { transform: translate(-8px, -8px); }
          60% { transform: translate(8px, 8px); }
          80% { transform: translate(8px, -8px); }
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
            💬 DUMBUI DIALOGS 💬
          </h1>
          <p
            className="text-xl md:text-2xl font-bold"
            style={{ fontFamily: FONTS.TIMES_NEW_ROMAN, color: COLORS.CYAN }}
          >
            The MOST ANNOYING Popups in Existence!
          </p>
        </div>

        <div className="mb-6 bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-500 p-4 border-8 border-red-600 transform rotate-1">
          <div className="flex flex-wrap gap-3 justify-center">
            {Object.keys(dialogConfigs).map((dialog) => (
              <button
                key={dialog}
                onClick={() => setSelectedDialog(dialog)}
                className={`px-4 py-2 font-black text-sm md:text-lg border-4 transition-all ${
                  selectedDialog === dialog
                    ? 'bg-lime-400 text-black border-black scale-110 shake'
                    : 'bg-purple-600 text-yellow-300 border-yellow-300 hover:scale-105'
                }`}
                style={{ fontFamily: FONTS.PAPYRUS }}
              >
                {dialogConfigs[dialog].name.toUpperCase()}
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
              
              {/* Trigger Button */}
              <button 
                onClick={() => setIsDialogOpen(true)}
                className={`px-6 py-3 font-black text-lg border-4 transition-all mb-8 ${
                  selectedDialog === 'dialog1' ? 'bg-lime-400 text-black border-black hover:bg-yellow-300' :
                  selectedDialog === 'dialog2' ? 'bg-gradient-to-r from-pink-500 to-cyan-400 text-black border-white hover:scale-110' :
                  selectedDialog === 'dialog3' ? 'bg-purple-600 text-yellow-300 border-yellow-300 hover:bg-purple-700' :
                  selectedDialog === 'dialog4' ? 'bg-gradient-to-t from-cyan-400 to-pink-400 text-black border-black hover:scale-105' :
                  selectedDialog === 'dialog5' ? 'bg-yellow-300 text-black border-magenta-500 hover:bg-yellow-400' :
                  'bg-gradient-to-r from-green-400 to-blue-500 text-white border-white hover:scale-110'
                }`}
                style={{ 
                  fontFamily: config.reactCode.includes('Comic Sans') ? FONTS.COMIC_SANS : 
                           config.reactCode.includes('Papyrus') ? FONTS.PAPYRUS :
                           config.reactCode.includes('Times New Roman') ? FONTS.TIMES_NEW_ROMAN :
                           config.reactCode.includes('Impact') ? FONTS.IMPACT :
                           config.reactCode.includes('Brush Script') ? FONTS.BRUSH_SCRIPT : FONTS.JOKERMAN
                }}
              >
                {selectedDialog === 'dialog1' ? 'Open Dialog' :
                 selectedDialog === 'dialog2' ? 'Open Spinner' :
                 selectedDialog === 'dialog3' ? 'Open Bouncer' :
                 selectedDialog === 'dialog4' ? 'Open Wobbler' :
                 selectedDialog === 'dialog5' ? 'Open Glitcher' : 'Open Pulsar'}
              </button>

              <p className="text-white font-bold text-lg text-center" style={{ fontFamily: FONTS.COMIC_SANS }}>
                Click the button above to experience this terrible dialog!
              </p>

              {/* Dialog */}
              {isDialogOpen && renderDialog()}
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
            ⚠️ WARNING: These dialogs may cause MOTION SICKNESS! ⚠️
          </p>
        </div>
      </div>
    </div>
  );
}