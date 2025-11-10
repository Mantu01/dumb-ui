import React, { useState, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy, Play, Pause, RotateCcw } from 'lucide-react';

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

const progressConfigs = {
  progress1: {
    name: 'Shaky Comic Progress',
    className: 'w-full shake bg-lime-400 p-6 border-8 border-black rounded-full',
    trackClassName: 'w-full bg-yellow-300 rounded-full h-8 border-4 border-black',
    barClassName: 'bg-red-600 h-full rounded-full border-4 border-black shake transition-all duration-300',
    textClassName: 'text-black font-black text-xl text-center mt-2',
    reactCode: `const [progress, setProgress] = useState(0);
const [isRunning, setIsRunning] = useState(false);

useEffect(() => {
  let interval;
  if (isRunning && progress < 100) {
    interval = setInterval(() => {
      setProgress(prev => Math.min(prev + 1, 100));
    }, 50);
  }
  return () => clearInterval(interval);
}, [isRunning, progress]);

<div className="w-full shake bg-lime-400 p-6 border-8 border-black rounded-full">
  <div className="w-full bg-yellow-300 rounded-full h-8 border-4 border-black">
    <div 
      className="bg-red-600 h-full rounded-full border-4 border-black shake transition-all duration-300"
      style={{ width: \`\${progress}%\` }}
    ></div>
  </div>
  <div className="text-black font-black text-xl text-center mt-2" style={{ fontFamily: 'Comic Sans MS' }}>
    {progress}% COMPLETE! 🎉
  </div>
  <div className="flex justify-center gap-4 mt-4">
    <button
      onClick={() => setIsRunning(!isRunning)}
      className="px-6 py-3 bg-yellow-300 text-black font-black text-lg border-4 border-black rounded-full hover:bg-red-600 hover:text-white transition-colors"
      style={{ fontFamily: 'Comic Sans MS' }}
    >
      {isRunning ? <Pause size={20} /> : <Play size={20} />}
    </button>
    <button
      onClick={() => {
        setProgress(0);
        setIsRunning(false);
      }}
      className="px-6 py-3 bg-yellow-300 text-black font-black text-lg border-4 border-black rounded-full hover:bg-red-600 hover:text-white transition-colors"
      style={{ fontFamily: 'Comic Sans MS' }}
    >
      <RotateCcw size={20} />
    </button>
  </div>
</div>`,
    htmlCode: `<!-- Progress Container -->
<div class="w-full shake bg-lime-400 p-6 border-8 border-black rounded-full">
  <!-- Progress Track -->
  <div class="w-full bg-yellow-300 rounded-full h-8 border-4 border-black">
    <!-- Progress Bar -->
    <div 
      id="progress-bar"
      class="bg-red-600 h-full rounded-full border-4 border-black shake transition-all duration-300"
      style="width: 0%"
    ></div>
  </div>
  <!-- Progress Text -->
  <div class="text-black font-black text-xl text-center mt-2" style="font-family: 'Comic Sans MS';">
    <span id="progress-text">0%</span> COMPLETE! 🎉
  </div>
  <!-- Controls -->
  <div class="flex justify-center gap-4 mt-4">
    <button
      onclick="toggleProgress()"
      id="toggle-btn"
      class="px-6 py-3 bg-yellow-300 text-black font-black text-lg border-4 border-black rounded-full hover:bg-red-600 hover:text-white transition-colors"
      style="font-family: 'Comic Sans MS';"
    >
      ▶
    </button>
    <button
      onclick="resetProgress()"
      class="px-6 py-3 bg-yellow-300 text-black font-black text-lg border-4 border-black rounded-full hover:bg-red-600 hover:text-white transition-colors"
      style="font-family: 'Comic Sans MS';"
    >
      🔄
    </button>
  </div>
</div>`,
    cssCode: `.progress-shaky {
  width: 100%;
  background-color: #84cc16;
  padding: 1.5rem;
  border: 8px solid #000000;
  border-radius: 9999px;
  animation: shake 0.5s infinite;
}

.progress-shaky .track {
  width: 100%;
  background-color: #fde047;
  border-radius: 9999px;
  height: 2rem;
  border: 4px solid #000000;
}

.progress-shaky .bar {
  background-color: #dc2626;
  height: 100%;
  border-radius: 9999px;
  border: 4px solid #000000;
  animation: shake 0.5s infinite;
  transition: width 0.3s ease;
}

.progress-shaky .text {
  color: #000000;
  font-weight: 900;
  font-size: 1.25rem;
  text-align: center;
  margin-top: 0.5rem;
  font-family: 'Comic Sans MS';
}

.progress-shaky .controls {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

.progress-shaky .control-btn {
  padding: 0.75rem 1.5rem;
  background-color: #fde047;
  color: #000000;
  font-weight: 900;
  font-size: 1.125rem;
  border: 4px solid #000000;
  border-radius: 9999px;
  transition: all 0.3s;
  font-family: 'Comic Sans MS';
}

.progress-shaky .control-btn:hover {
  background-color: #dc2626;
  color: #ffffff;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}`
  },
  progress2: {
    name: 'Spinning Rainbow Progress',
    className: 'w-full spin bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-400 p-6 border-4 border-purple-600 rounded-lg',
    trackClassName: 'w-full bg-white rounded-lg h-10 border-2 border-purple-600',
    barClassName: 'bg-purple-600 h-full rounded-lg border-2 border-white spin transition-all duration-300',
    textClassName: 'text-black font-black text-xl text-center mt-3',
    reactCode: `const [progress, setProgress] = useState(0);
const [isRunning, setIsRunning] = useState(false);

useEffect(() => {
  let interval;
  if (isRunning && progress < 100) {
    interval = setInterval(() => {
      setProgress(prev => Math.min(prev + 1, 100));
    }, 50);
  }
  return () => clearInterval(interval);
}, [isRunning, progress]);

<div className="w-full spin bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-400 p-6 border-4 border-purple-600 rounded-lg">
  <div className="w-full bg-white rounded-lg h-10 border-2 border-purple-600">
    <div 
      className="bg-purple-600 h-full rounded-lg border-2 border-white spin transition-all duration-300"
      style={{ width: \`\${progress}%\` }}
    ></div>
  </div>
  <div className="text-black font-black text-xl text-center mt-3" style={{ fontFamily: 'Papyrus' }}>
    LOADING: {progress}% 🌀
  </div>
  <div className="flex justify-center gap-4 mt-4">
    <button
      onClick={() => setIsRunning(!isRunning)}
      className="px-6 py-3 bg-white text-black font-black text-lg border-2 border-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition-colors pulse"
      style={{ fontFamily: 'Papyrus' }}
    >
      {isRunning ? <Pause size={20} /> : <Play size={20} />}
    </button>
    <button
      onClick={() => {
        setProgress(0);
        setIsRunning(false);
      }}
      className="px-6 py-3 bg-white text-black font-black text-lg border-2 border-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition-colors pulse"
      style={{ fontFamily: 'Papyrus' }}
    >
      <RotateCcw size={20} />
    </button>
  </div>
</div>`,
    htmlCode: `<!-- Progress Container -->
<div class="w-full spin bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-400 p-6 border-4 border-purple-600 rounded-lg">
  <!-- Progress Track -->
  <div class="w-full bg-white rounded-lg h-10 border-2 border-purple-600">
    <!-- Progress Bar -->
    <div 
      id="progress-bar"
      class="bg-purple-600 h-full rounded-lg border-2 border-white spin transition-all duration-300"
      style="width: 0%"
    ></div>
  </div>
  <!-- Progress Text -->
  <div class="text-black font-black text-xl text-center mt-3" style="font-family: 'Papyrus';">
    LOADING: <span id="progress-text">0%</span> 🌀
  </div>
  <!-- Controls -->
  <div class="flex justify-center gap-4 mt-4">
    <button
      onclick="toggleProgress()"
      id="toggle-btn"
      class="px-6 py-3 bg-white text-black font-black text-lg border-2 border-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition-colors pulse"
      style="font-family: 'Papyrus';"
    >
      ▶
    </button>
    <button
      onclick="resetProgress()"
      class="px-6 py-3 bg-white text-black font-black text-lg border-2 border-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition-colors pulse"
      style="font-family: 'Papyrus';"
    >
      🔄
    </button>
  </div>
</div>`,
    cssCode: `.progress-spin {
  width: 100%;
  background: linear-gradient(to right, #ec4899, #f59e0b, #22d3ee);
  padding: 1.5rem;
  border: 4px solid #9333ea;
  border-radius: 0.5rem;
  animation: spin 2s linear infinite;
}

.progress-spin .track {
  width: 100%;
  background-color: #ffffff;
  border-radius: 0.5rem;
  height: 2.5rem;
  border: 2px solid #9333ea;
}

.progress-spin .bar {
  background-color: #9333ea;
  height: 100%;
  border-radius: 0.5rem;
  border: 2px solid #ffffff;
  animation: spin 2s linear infinite;
  transition: width 0.3s ease;
}

.progress-spin .text {
  color: #000000;
  font-weight: 900;
  font-size: 1.25rem;
  text-align: center;
  margin-top: 0.75rem;
  font-family: 'Papyrus';
}

.progress-spin .controls {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

.progress-spin .control-btn {
  padding: 0.75rem 1.5rem;
  background-color: #ffffff;
  color: #000000;
  font-weight: 900;
  font-size: 1.125rem;
  border: 2px solid #9333ea;
  border-radius: 0.5rem;
  transition: all 0.3s;
  font-family: 'Papyrus';
  animation: pulse 0.5s infinite;
}

.progress-spin .control-btn:hover {
  background-color: #9333ea;
  color: #ffffff;
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
  progress3: {
    name: 'Bouncing Times Progress',
    className: 'w-full bounce bg-purple-600 p-6 border-8 border-yellow-300 rounded-2xl',
    trackClassName: 'w-full bg-pink-500 rounded-2xl h-12 border-4 border-yellow-300',
    barClassName: 'bg-yellow-300 h-full rounded-2xl border-4 border-white bounce transition-all duration-300',
    textClassName: 'text-yellow-300 font-black text-xl text-center mt-3',
    reactCode: `const [progress, setProgress] = useState(0);
const [isRunning, setIsRunning] = useState(false);

useEffect(() => {
  let interval;
  if (isRunning && progress < 100) {
    interval = setInterval(() => {
      setProgress(prev => Math.min(prev + 1, 100));
    }, 50);
  }
  return () => clearInterval(interval);
}, [isRunning, progress]);

<div className="w-full bounce bg-purple-600 p-6 border-8 border-yellow-300 rounded-2xl">
  <div className="w-full bg-pink-500 rounded-2xl h-12 border-4 border-yellow-300">
    <div 
      className="bg-yellow-300 h-full rounded-2xl border-4 border-white bounce transition-all duration-300"
      style={{ width: \`\${progress}%\` }}
    ></div>
  </div>
  <div className="text-yellow-300 font-black text-xl text-center mt-3" style={{ fontFamily: 'Times New Roman' }}>
    PROGRESS: {progress}% 🏀
  </div>
  <div className="flex justify-center gap-4 mt-4">
    <button
      onClick={() => setIsRunning(!isRunning)}
      className="px-6 py-3 bg-pink-500 text-white font-black text-lg border-4 border-yellow-300 rounded-2xl hover:bg-yellow-300 hover:text-black transition-colors wobble"
      style={{ fontFamily: 'Times New Roman' }}
    >
      {isRunning ? <Pause size={20} /> : <Play size={20} />}
    </button>
    <button
      onClick={() => {
        setProgress(0);
        setIsRunning(false);
      }}
      className="px-6 py-3 bg-pink-500 text-white font-black text-lg border-4 border-yellow-300 rounded-2xl hover:bg-yellow-300 hover:text-black transition-colors wobble"
      style={{ fontFamily: 'Times New Roman' }}
    >
      <RotateCcw size={20} />
    </button>
  </div>
</div>`,
    htmlCode: `<!-- Progress Container -->
<div class="w-full bounce bg-purple-600 p-6 border-8 border-yellow-300 rounded-2xl">
  <!-- Progress Track -->
  <div class="w-full bg-pink-500 rounded-2xl h-12 border-4 border-yellow-300">
    <!-- Progress Bar -->
    <div 
      id="progress-bar"
      class="bg-yellow-300 h-full rounded-2xl border-4 border-white bounce transition-all duration-300"
      style="width: 0%"
    ></div>
  </div>
  <!-- Progress Text -->
  <div class="text-yellow-300 font-black text-xl text-center mt-3" style="font-family: 'Times New Roman';">
    PROGRESS: <span id="progress-text">0%</span> 🏀
  </div>
  <!-- Controls -->
  <div class="flex justify-center gap-4 mt-4">
    <button
      onclick="toggleProgress()"
      id="toggle-btn"
      class="px-6 py-3 bg-pink-500 text-white font-black text-lg border-4 border-yellow-300 rounded-2xl hover:bg-yellow-300 hover:text-black transition-colors wobble"
      style="font-family: 'Times New Roman';"
    >
      ▶
    </button>
    <button
      onclick="resetProgress()"
      class="px-6 py-3 bg-pink-500 text-white font-black text-lg border-4 border-yellow-300 rounded-2xl hover:bg-yellow-300 hover:text-black transition-colors wobble"
      style="font-family: 'Times New Roman';"
    >
      🔄
    </button>
  </div>
</div>`,
    cssCode: `.progress-bounce {
  width: 100%;
  background-color: #9333ea;
  padding: 1.5rem;
  border: 8px solid #fde047;
  border-radius: 1rem;
  animation: bounce 0.8s infinite;
}

.progress-bounce .track {
  width: 100%;
  background-color: #ec4899;
  border-radius: 1rem;
  height: 3rem;
  border: 4px solid #fde047;
}

.progress-bounce .bar {
  background-color: #fde047;
  height: 100%;
  border-radius: 1rem;
  border: 4px solid #ffffff;
  animation: bounce 0.8s infinite;
  transition: width 0.3s ease;
}

.progress-bounce .text {
  color: #fde047;
  font-weight: 900;
  font-size: 1.25rem;
  text-align: center;
  margin-top: 0.75rem;
  font-family: 'Times New Roman';
}

.progress-bounce .controls {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

.progress-bounce .control-btn {
  padding: 0.75rem 1.5rem;
  background-color: #ec4899;
  color: #ffffff;
  font-weight: 900;
  font-size: 1.125rem;
  border: 4px solid #fde047;
  border-radius: 1rem;
  transition: all 0.3s;
  font-family: 'Times New Roman';
  animation: wobble 0.7s infinite;
}

.progress-bounce .control-btn:hover {
  background-color: #fde047;
  color: #000000;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes wobble {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-5deg); }
  75% { transform: rotate(5deg); }
}`
  },
  progress4: {
    name: 'Wobbly Brush Progress',
    className: 'w-full wobble bg-gradient-to-t from-cyan-400 to-pink-400 p-6 border-6 border-orange-500 rounded-full',
    trackClassName: 'w-full bg-black rounded-full h-10 border-4 border-yellow-300',
    barClassName: 'bg-yellow-300 h-full rounded-full border-4 border-black wobble transition-all duration-300',
    textClassName: 'text-black font-black text-xl text-center mt-3',
    reactCode: `const [progress, setProgress] = useState(0);
const [isRunning, setIsRunning] = useState(false);

useEffect(() => {
  let interval;
  if (isRunning && progress < 100) {
    interval = setInterval(() => {
      setProgress(prev => Math.min(prev + 1, 100));
    }, 50);
  }
  return () => clearInterval(interval);
}, [isRunning, progress]);

<div className="w-full wobble bg-gradient-to-t from-cyan-400 to-pink-400 p-6 border-6 border-orange-500 rounded-full">
  <div className="w-full bg-black rounded-full h-10 border-4 border-yellow-300">
    <div 
      className="bg-yellow-300 h-full rounded-full border-4 border-black wobble transition-all duration-300"
      style={{ width: \`\${progress}%\` }}
    ></div>
  </div>
  <div className="text-black font-black text-xl text-center mt-3" style={{ fontFamily: 'Brush Script MT' }}>
    {progress}% DONE! 🌊
  </div>
  <div className="flex justify-center gap-4 mt-4">
    <button
      onClick={() => setIsRunning(!isRunning)}
      className="px-6 py-3 bg-black text-white font-black text-lg border-4 border-yellow-300 rounded-full hover:bg-yellow-300 hover:text-black transition-colors shake"
      style={{ fontFamily: 'Brush Script MT' }}
    >
      {isRunning ? <Pause size={20} /> : <Play size={20} />}
    </button>
    <button
      onClick={() => {
        setProgress(0);
        setIsRunning(false);
      }}
      className="px-6 py-3 bg-black text-white font-black text-lg border-4 border-yellow-300 rounded-full hover:bg-yellow-300 hover:text-black transition-colors shake"
      style={{ fontFamily: 'Brush Script MT' }}
    >
      <RotateCcw size={20} />
    </button>
  </div>
</div>`,
    htmlCode: `<!-- Progress Container -->
<div class="w-full wobble bg-gradient-to-t from-cyan-400 to-pink-400 p-6 border-6 border-orange-500 rounded-full">
  <!-- Progress Track -->
  <div class="w-full bg-black rounded-full h-10 border-4 border-yellow-300">
    <!-- Progress Bar -->
    <div 
      id="progress-bar"
      class="bg-yellow-300 h-full rounded-full border-4 border-black wobble transition-all duration-300"
      style="width: 0%"
    ></div>
  </div>
  <!-- Progress Text -->
  <div class="text-black font-black text-xl text-center mt-3" style="font-family: 'Brush Script MT';">
    <span id="progress-text">0%</span> DONE! 🌊
  </div>
  <!-- Controls -->
  <div class="flex justify-center gap-4 mt-4">
    <button
      onclick="toggleProgress()"
      id="toggle-btn"
      class="px-6 py-3 bg-black text-white font-black text-lg border-4 border-yellow-300 rounded-full hover:bg-yellow-300 hover:text-black transition-colors shake"
      style="font-family: 'Brush Script MT';"
    >
      ▶
    </button>
    <button
      onclick="resetProgress()"
      class="px-6 py-3 bg-black text-white font-black text-lg border-4 border-yellow-300 rounded-full hover:bg-yellow-300 hover:text-black transition-colors shake"
      style="font-family: 'Brush Script MT';"
    >
      🔄
    </button>
  </div>
</div>`,
    cssCode: `.progress-wobble {
  width: 100%;
  background: linear-gradient(to top, #22d3ee, #ec4899);
  padding: 1.5rem;
  border: 6px solid #f97316;
  border-radius: 9999px;
  animation: wobble 0.7s infinite;
}

.progress-wobble .track {
  width: 100%;
  background-color: #000000;
  border-radius: 9999px;
  height: 2.5rem;
  border: 4px solid #fde047;
}

.progress-wobble .bar {
  background-color: #fde047;
  height: 100%;
  border-radius: 9999px;
  border: 4px solid #000000;
  animation: wobble 0.7s infinite;
  transition: width 0.3s ease;
}

.progress-wobble .text {
  color: #000000;
  font-weight: 900;
  font-size: 1.25rem;
  text-align: center;
  margin-top: 0.75rem;
  font-family: 'Brush Script MT';
}

.progress-wobble .controls {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

.progress-wobble .control-btn {
  padding: 0.75rem 1.5rem;
  background-color: #000000;
  color: #ffffff;
  font-weight: 900;
  font-size: 1.125rem;
  border: 4px solid #fde047;
  border-radius: 9999px;
  transition: all 0.3s;
  font-family: 'Brush Script MT';
  animation: shake 0.5s infinite;
}

.progress-wobble .control-btn:hover {
  background-color: #fde047;
  color: #000000;
}

@keyframes wobble {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-5deg); }
  75% { transform: rotate(5deg); }
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-3px); }
  75% { transform: translateX(3px); }
}`
  },
  progress5: {
    name: 'Glitchy Impact Progress',
    className: 'w-full glitch bg-yellow-300 p-6 border-8 border-magenta-500 rounded-md',
    trackClassName: 'w-full bg-red-600 rounded-md h-12 border-4 border-black',
    barClassName: 'bg-cyan-400 h-full rounded-md border-4 border-white glitch transition-all duration-300',
    textClassName: 'text-black font-black text-xl text-center mt-3',
    reactCode: `const [progress, setProgress] = useState(0);
const [isRunning, setIsRunning] = useState(false);

useEffect(() => {
  let interval;
  if (isRunning && progress < 100) {
    interval = setInterval(() => {
      setProgress(prev => Math.min(prev + 1, 100));
    }, 50);
  }
  return () => clearInterval(interval);
}, [isRunning, progress]);

<div className="w-full glitch bg-yellow-300 p-6 border-8 border-magenta-500 rounded-md">
  <div className="w-full bg-red-600 rounded-md h-12 border-4 border-black">
    <div 
      className="bg-cyan-400 h-full rounded-md border-4 border-white glitch transition-all duration-300"
      style={{ width: \`\${progress}%\` }}
    ></div>
  </div>
  <div className="text-black font-black text-xl text-center mt-3" style={{ fontFamily: 'Impact' }}>
    UPLOADING: {progress}% 💥
  </div>
  <div className="flex justify-center gap-4 mt-4">
    <button
      onClick={() => setIsRunning(!isRunning)}
      className="px-6 py-3 bg-red-600 text-white font-black text-lg border-4 border-black rounded-md hover:bg-cyan-400 hover:text-black transition-colors pulse"
      style={{ fontFamily: 'Impact' }}
    >
      {isRunning ? <Pause size={20} /> : <Play size={20} />}
    </button>
    <button
      onClick={() => {
        setProgress(0);
        setIsRunning(false);
      }}
      className="px-6 py-3 bg-red-600 text-white font-black text-lg border-4 border-black rounded-md hover:bg-cyan-400 hover:text-black transition-colors pulse"
      style={{ fontFamily: 'Impact' }}
    >
      <RotateCcw size={20} />
    </button>
  </div>
</div>`,
    htmlCode: `<!-- Progress Container -->
<div class="w-full glitch bg-yellow-300 p-6 border-8 border-magenta-500 rounded-md">
  <!-- Progress Track -->
  <div class="w-full bg-red-600 rounded-md h-12 border-4 border-black">
    <!-- Progress Bar -->
    <div 
      id="progress-bar"
      class="bg-cyan-400 h-full rounded-md border-4 border-white glitch transition-all duration-300"
      style="width: 0%"
    ></div>
  </div>
  <!-- Progress Text -->
  <div class="text-black font-black text-xl text-center mt-3" style="font-family: 'Impact';">
    UPLOADING: <span id="progress-text">0%</span> 💥
  </div>
  <!-- Controls -->
  <div class="flex justify-center gap-4 mt-4">
    <button
      onclick="toggleProgress()"
      id="toggle-btn"
      class="px-6 py-3 bg-red-600 text-white font-black text-lg border-4 border-black rounded-md hover:bg-cyan-400 hover:text-black transition-colors pulse"
      style="font-family: 'Impact';"
    >
      ▶
    </button>
    <button
      onclick="resetProgress()"
      class="px-6 py-3 bg-red-600 text-white font-black text-lg border-4 border-black rounded-md hover:bg-cyan-400 hover:text-black transition-colors pulse"
      style="font-family: 'Impact';"
    >
      🔄
    </button>
  </div>
</div>`,
    cssCode: `.progress-glitch {
  width: 100%;
  background-color: #fde047;
  padding: 1.5rem;
  border: 8px solid #d946ef;
  border-radius: 0.375rem;
  animation: glitch 0.4s infinite;
}

.progress-glitch .track {
  width: 100%;
  background-color: #dc2626;
  border-radius: 0.375rem;
  height: 3rem;
  border: 4px solid #000000;
}

.progress-glitch .bar {
  background-color: #22d3ee;
  height: 100%;
  border-radius: 0.375rem;
  border: 4px solid #ffffff;
  animation: glitch 0.4s infinite;
  transition: width 0.3s ease;
}

.progress-glitch .text {
  color: #000000;
  font-weight: 900;
  font-size: 1.25rem;
  text-align: center;
  margin-top: 0.75rem;
  font-family: 'Impact';
}

.progress-glitch .controls {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

.progress-glitch .control-btn {
  padding: 0.75rem 1.5rem;
  background-color: #dc2626;
  color: #ffffff;
  font-weight: 900;
  font-size: 1.125rem;
  border: 4px solid #000000;
  border-radius: 0.375rem;
  transition: all 0.3s;
  font-family: 'Impact';
  animation: pulse 0.5s infinite;
}

.progress-glitch .control-btn:hover {
  background-color: #22d3ee;
  color: #000000;
}

@keyframes glitch {
  0% { transform: translate(0); }
  20% { transform: translate(-5px, 5px); }
  40% { transform: translate(-5px, -5px); }
  60% { transform: translate(5px, 5px); }
  80% { transform: translate(5px, -5px); }
  100% { transform: translate(0); }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}`
  },
  progress6: {
    name: 'Pulsing Jokerman Progress',
    className: 'w-full pulse bg-gradient-to-r from-green-400 to-blue-500 p-6 border-8 border-red-600 rounded-xl',
    trackClassName: 'w-full bg-white rounded-xl h-10 border-4 border-red-600',
    barClassName: 'bg-yellow-300 h-full rounded-xl border-4 border-black pulse transition-all duration-300',
    textClassName: 'text-white font-black text-xl text-center mt-3',
    reactCode: `const [progress, setProgress] = useState(0);
const [isRunning, setIsRunning] = useState(false);

useEffect(() => {
  let interval;
  if (isRunning && progress < 100) {
    interval = setInterval(() => {
      setProgress(prev => Math.min(prev + 1, 100));
    }, 50);
  }
  return () => clearInterval(interval);
}, [isRunning, progress]);

<div className="w-full pulse bg-gradient-to-r from-green-400 to-blue-500 p-6 border-8 border-red-600 rounded-xl">
  <div className="w-full bg-white rounded-xl h-10 border-4 border-red-600">
    <div 
      className="bg-yellow-300 h-full rounded-xl border-4 border-black pulse transition-all duration-300"
      style={{ width: \`\${progress}%\` }}
    ></div>
  </div>
  <div className="text-white font-black text-xl text-center mt-3" style={{ fontFamily: 'Jokerman' }}>
    INSTALLING: {progress}% ✨
  </div>
  <div className="flex justify-center gap-4 mt-4">
    <button
      onClick={() => setIsRunning(!isRunning)}
      className="px-6 py-3 bg-white text-black font-black text-lg border-4 border-red-600 rounded-xl hover:bg-yellow-300 transition-colors bounce"
      style={{ fontFamily: 'Jokerman' }}
    >
      {isRunning ? <Pause size={20} /> : <Play size={20} />}
    </button>
    <button
      onClick={() => {
        setProgress(0);
        setIsRunning(false);
      }}
      className="px-6 py-3 bg-white text-black font-black text-lg border-4 border-red-600 rounded-xl hover:bg-yellow-300 transition-colors bounce"
      style={{ fontFamily: 'Jokerman' }}
    >
      <RotateCcw size={20} />
    </button>
  </div>
</div>`,
    htmlCode: `<!-- Progress Container -->
<div class="w-full pulse bg-gradient-to-r from-green-400 to-blue-500 p-6 border-8 border-red-600 rounded-xl">
  <!-- Progress Track -->
  <div class="w-full bg-white rounded-xl h-10 border-4 border-red-600">
    <!-- Progress Bar -->
    <div 
      id="progress-bar"
      class="bg-yellow-300 h-full rounded-xl border-4 border-black pulse transition-all duration-300"
      style="width: 0%"
    ></div>
  </div>
  <!-- Progress Text -->
  <div class="text-white font-black text-xl text-center mt-3" style="font-family: 'Jokerman';">
    INSTALLING: <span id="progress-text">0%</span> ✨
  </div>
  <!-- Controls -->
  <div class="flex justify-center gap-4 mt-4">
    <button
      onclick="toggleProgress()"
      id="toggle-btn"
      class="px-6 py-3 bg-white text-black font-black text-lg border-4 border-red-600 rounded-xl hover:bg-yellow-300 transition-colors bounce"
      style="font-family: 'Jokerman';"
    >
      ▶
    </button>
    <button
      onclick="resetProgress()"
      class="px-6 py-3 bg-white text-black font-black text-lg border-4 border-red-600 rounded-xl hover:bg-yellow-300 transition-colors bounce"
      style="font-family: 'Jokerman';"
    >
      🔄
    </button>
  </div>
</div>`,
    cssCode: `.progress-pulse {
  width: 100%;
  background: linear-gradient(to right, #4ade80, #3b82f6);
  padding: 1.5rem;
  border: 8px solid #dc2626;
  border-radius: 0.75rem;
  animation: pulse 0.5s infinite;
}

.progress-pulse .track {
  width: 100%;
  background-color: #ffffff;
  border-radius: 0.75rem;
  height: 2.5rem;
  border: 4px solid #dc2626;
}

.progress-pulse .bar {
  background-color: #fde047;
  height: 100%;
  border-radius: 0.75rem;
  border: 4px solid #000000;
  animation: pulse 0.5s infinite;
  transition: width 0.3s ease;
}

.progress-pulse .text {
  color: #ffffff;
  font-weight: 900;
  font-size: 1.25rem;
  text-align: center;
  margin-top: 0.75rem;
  font-family: 'Jokerman';
}

.progress-pulse .controls {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

.progress-pulse .control-btn {
  padding: 0.75rem 1.5rem;
  background-color: #ffffff;
  color: #000000;
  font-weight: 900;
  font-size: 1.125rem;
  border: 4px solid #dc2626;
  border-radius: 0.75rem;
  transition: background-color 0.3s;
  font-family: 'Jokerman';
  animation: bounce 0.8s infinite;
}

.progress-pulse .control-btn:hover {
  background-color: #fde047;
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

export function ProgressSample() {
  const [selectedProgress, setSelectedProgress] = useState('progress1');
  const [viewMode, setViewMode] = useState('preview');
  const [codeLanguage, setCodeLanguage] = useState('react');
  const [styleType, setStyleType] = useState('tailwindcss');
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedCss, setCopiedCss] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const config = progressConfigs[selectedProgress];

  useEffect(() => {
    let interval;
    if (isRunning && progress < 100) {
      interval = setInterval(() => {
        setProgress(prev => Math.min(prev + 1, 100));
      }, 50);
    }
    return () => clearInterval(interval);
  }, [isRunning, progress]);

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
        ? `<div className="progress-${selectedProgress.slice(-1)}">\n  {/* Progress content */}\n</div>`
        : `<div class="progress-${selectedProgress.slice(-1)}">\n  <!-- Progress content -->\n</div>`;
    }
  };

  const renderProgress = () => (
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
      <div className={config.trackClassName}>
        <div 
          className={config.barClassName}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className={config.textClassName}>
        {config.name.includes('Comic') && `${progress}% COMPLETE! 🎉`}
        {config.name.includes('Rainbow') && `LOADING: ${progress}% 🌀`}
        {config.name.includes('Times') && `PROGRESS: ${progress}% 🏀`}
        {config.name.includes('Brush') && `${progress}% DONE! 🌊`}
        {config.name.includes('Impact') && `UPLOADING: ${progress}% 💥`}
        {config.name.includes('Jokerman') && `INSTALLING: ${progress}% ✨`}
      </div>
      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={() => setIsRunning(!isRunning)}
          className={`px-6 py-3 font-black text-lg border-4 transition-colors ${
            selectedProgress === 'progress1' ? 'bg-yellow-300 text-black border-black rounded-full hover:bg-red-600 hover:text-white' :
            selectedProgress === 'progress2' ? 'bg-white text-black border-purple-600 rounded-lg hover:bg-purple-600 hover:text-white pulse' :
            selectedProgress === 'progress3' ? 'bg-pink-500 text-white border-yellow-300 rounded-2xl hover:bg-yellow-300 hover:text-black wobble' :
            selectedProgress === 'progress4' ? 'bg-black text-white border-yellow-300 rounded-full hover:bg-yellow-300 hover:text-black shake' :
            selectedProgress === 'progress5' ? 'bg-red-600 text-white border-black rounded-md hover:bg-cyan-400 hover:text-black pulse' :
            'bg-white text-black border-red-600 rounded-xl hover:bg-yellow-300 bounce'
          }`}
        >
          {isRunning ? <Pause size={20} /> : <Play size={20} />}
        </button>
        <button
          onClick={() => {
            setProgress(0);
            setIsRunning(false);
          }}
          className={`px-6 py-3 font-black text-lg border-4 transition-colors ${
            selectedProgress === 'progress1' ? 'bg-yellow-300 text-black border-black rounded-full hover:bg-red-600 hover:text-white' :
            selectedProgress === 'progress2' ? 'bg-white text-black border-purple-600 rounded-lg hover:bg-purple-600 hover:text-white pulse' :
            selectedProgress === 'progress3' ? 'bg-pink-500 text-white border-yellow-300 rounded-2xl hover:bg-yellow-300 hover:text-black wobble' :
            selectedProgress === 'progress4' ? 'bg-black text-white border-yellow-300 rounded-full hover:bg-yellow-300 hover:text-black shake' :
            selectedProgress === 'progress5' ? 'bg-red-600 text-white border-black rounded-md hover:bg-cyan-400 hover:text-black pulse' :
            'bg-white text-black border-red-600 rounded-xl hover:bg-yellow-300 bounce'
          }`}
        >
          <RotateCcw size={20} />
        </button>
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
          50% { transform: translateY(-10px); }
        }
        @keyframes wobble {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-5deg); }
          75% { transform: rotate(5deg); }
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

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 bg-black/20 p-6 border-8 border-lime-400 transform -rotate-2">
          <h1
            className="text-4xl md:text-6xl font-black mb-4 colorflip"
            style={{ fontFamily: FONTS.COMIC_SANS }}
          >
            📊 DUMBUI PROGRESS 📊
          </h1>
          <p
            className="text-xl md:text-2xl font-bold"
            style={{ fontFamily: FONTS.TIMES_NEW_ROMAN, color: COLORS.CYAN }}
          >
            The MOST DISTRACTING Progress Bars Ever!
          </p>
        </div>

        <div className="mb-6 bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-500 p-4 border-8 border-red-600 transform rotate-1">
          <div className="flex flex-wrap gap-3 justify-center">
            {Object.keys(progressConfigs).map((progress) => (
              <button
                key={progress}
                onClick={() => {
                  setSelectedProgress(progress);
                  setProgress(0);
                  setIsRunning(false);
                }}
                className={`px-4 py-2 font-black text-sm md:text-lg border-4 transition-all ${
                  selectedProgress === progress
                    ? 'bg-lime-400 text-black border-black scale-110 shake'
                    : 'bg-purple-600 text-yellow-300 border-yellow-300 hover:scale-105'
                }`}
                style={{ fontFamily: FONTS.PAPYRUS }}
              >
                {progressConfigs[progress].name.toUpperCase()}
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
              
              {renderProgress()}

              <div className="mt-6 text-center">
                <p className="text-white font-bold text-lg" style={{ fontFamily: FONTS.COMIC_SANS }}>
                  Status: <span className="text-yellow-300">
                    {isRunning ? 'RUNNING 🏃‍♂️' : progress === 100 ? 'COMPLETE! 🎉' : 'PAUSED ⏸️'}
                  </span>
                </p>
                <p className="text-white font-bold text-lg mt-2" style={{ fontFamily: FONTS.COMIC_SANS }}>
                  Use the buttons to control the progress!
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
            ⚠️ WARNING: These progress bars may cause SEIZURES! ⚠️
          </p>
        </div>
      </div>
    </div>
  );
}