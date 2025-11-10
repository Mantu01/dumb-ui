import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy, ChevronDown } from 'lucide-react';

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

const dropdownConfigs = {
  dropdown1: {
    name: 'Shaky Comic Dropdown',
    className: 'relative inline-block',
    buttonClassName: 'flex items-center justify-between w-64 px-6 py-4 bg-lime-400 text-black font-black text-lg border-8 border-black rounded-full hover:bg-yellow-300 transition-colors shake',
    menuClassName: 'absolute left-0 right-0 mt-2 bg-lime-400 border-8 border-black rounded-full overflow-hidden shake z-50',
    itemClassName: 'block w-full px-6 py-4 text-black font-black text-lg text-left hover:bg-yellow-300 transition-colors border-b-4 border-black last:border-b-0',
    items: ['🍎 Apple', '🍌 Banana', '🍊 Orange', '🍇 Grape', '🍓 Strawberry'],
    selectedItem: '🍎 Apple',
    reactCode: `const [isOpen, setIsOpen] = useState(false);
const [selected, setSelected] = useState('🍎 Apple');

<div className="relative inline-block">
  <button 
    onClick={() => setIsOpen(!isOpen)}
    className="flex items-center justify-between w-64 px-6 py-4 bg-lime-400 text-black font-black text-lg border-8 border-black rounded-full hover:bg-yellow-300 transition-colors shake"
    style={{ fontFamily: 'Comic Sans MS' }}
  >
    <span>{selected}</span>
    <ChevronDown size={20} className={\`transform \${isOpen ? 'rotate-180' : ''} transition-transform\`} />
  </button>
  
  {isOpen && (
    <div className="absolute left-0 right-0 mt-2 bg-lime-400 border-8 border-black rounded-full overflow-hidden shake z-50">
      {['🍎 Apple', '🍌 Banana', '🍊 Orange', '🍇 Grape', '🍓 Strawberry'].map((item) => (
        <button
          key={item}
          onClick={() => {
            setSelected(item);
            setIsOpen(false);
          }}
          className="block w-full px-6 py-4 text-black font-black text-lg text-left hover:bg-yellow-300 transition-colors border-b-4 border-black last:border-b-0"
          style={{ fontFamily: 'Comic Sans MS' }}
        >
          {item}
        </button>
      ))}
    </div>
  )}
</div>`,
    htmlCode: `<!-- Dropdown Container -->
<div class="relative inline-block">
  <!-- Dropdown Button -->
  <button 
    onclick="toggleDropdown()"
    class="flex items-center justify-between w-64 px-6 py-4 bg-lime-400 text-black font-black text-lg border-8 border-black rounded-full hover:bg-yellow-300 transition-colors shake"
    style="font-family: 'Comic Sans MS';"
  >
    <span id="selected-item">🍎 Apple</span>
    <span class="transform transition-transform">▼</span>
  </button>
  
  <!-- Dropdown Menu -->
  <div id="dropdown-menu" class="absolute left-0 right-0 mt-2 bg-lime-400 border-8 border-black rounded-full overflow-hidden shake z-50 hidden">
    <button
      onclick="selectItem('🍎 Apple')"
      class="block w-full px-6 py-4 text-black font-black text-lg text-left hover:bg-yellow-300 transition-colors border-b-4 border-black"
      style="font-family: 'Comic Sans MS';"
    >
      🍎 Apple
    </button>
    <button
      onclick="selectItem('🍌 Banana')"
      class="block w-full px-6 py-4 text-black font-black text-lg text-left hover:bg-yellow-300 transition-colors border-b-4 border-black"
      style="font-family: 'Comic Sans MS';"
    >
      🍌 Banana
    </button>
    <button
      onclick="selectItem('🍊 Orange')"
      class="block w-full px-6 py-4 text-black font-black text-lg text-left hover:bg-yellow-300 transition-colors border-b-4 border-black"
      style="font-family: 'Comic Sans MS';"
    >
      🍊 Orange
    </button>
    <button
      onclick="selectItem('🍇 Grape')"
      class="block w-full px-6 py-4 text-black font-black text-lg text-left hover:bg-yellow-300 transition-colors border-b-4 border-black"
      style="font-family: 'Comic Sans MS';"
    >
      🍇 Grape
    </button>
    <button
      onclick="selectItem('🍓 Strawberry')"
      class="block w-full px-6 py-4 text-black font-black text-lg text-left hover:bg-yellow-300 transition-colors"
      style="font-family: 'Comic Sans MS';"
    >
      🍓 Strawberry
    </button>
  </div>
</div>`,
    cssCode: `.dropdown-shaky {
  position: relative;
  display: inline-block;
}

.dropdown-shaky .button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 16rem;
  padding: 1rem 1.5rem;
  background-color: #84cc16;
  color: #000000;
  font-weight: 900;
  font-size: 1.125rem;
  border: 8px solid #000000;
  border-radius: 9999px;
  transition: background-color 0.3s;
  font-family: 'Comic Sans MS';
  animation: shake 0.5s infinite;
}

.dropdown-shaky .button:hover {
  background-color: #fde047;
}

.dropdown-shaky .menu {
  position: absolute;
  left: 0;
  right: 0;
  margin-top: 0.5rem;
  background-color: #84cc16;
  border: 8px solid #000000;
  border-radius: 9999px;
  overflow: hidden;
  z-index: 50;
  animation: shake 0.5s infinite;
}

.dropdown-shaky .item {
  display: block;
  width: 100%;
  padding: 1rem 1.5rem;
  color: #000000;
  font-weight: 900;
  font-size: 1.125rem;
  text-align: left;
  transition: background-color 0.3s;
  border-bottom: 4px solid #000000;
  font-family: 'Comic Sans MS';
}

.dropdown-shaky .item:last-child {
  border-bottom: none;
}

.dropdown-shaky .item:hover {
  background-color: #fde047;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}`
  },
  dropdown2: {
    name: 'Spinning Rainbow Dropdown',
    className: 'relative inline-block',
    buttonClassName: 'flex items-center justify-between w-64 px-6 py-4 bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-400 text-black font-black text-lg border-4 border-purple-600 rounded-lg hover:scale-105 transition-transform spin',
    menuClassName: 'absolute left-0 right-0 mt-2 bg-gradient-to-br from-pink-500 to-cyan-400 border-4 border-purple-600 rounded-lg overflow-hidden spin z-50',
    itemClassName: 'block w-full px-6 py-4 text-black font-black text-lg text-left hover:bg-white hover:bg-opacity-50 transition-colors border-b-2 border-purple-600 last:border-b-0',
    items: ['🚀 Rocket', '🛸 UFO', '✈️ Plane', '🚁 Helicopter', '🛩️ Jet'],
    selectedItem: '🚀 Rocket',
    reactCode: `const [isOpen, setIsOpen] = useState(false);
const [selected, setSelected] = useState('🚀 Rocket');

<div className="relative inline-block">
  <button 
    onClick={() => setIsOpen(!isOpen)}
    className="flex items-center justify-between w-64 px-6 py-4 bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-400 text-black font-black text-lg border-4 border-purple-600 rounded-lg hover:scale-105 transition-transform spin"
    style={{ fontFamily: 'Papyrus' }}
  >
    <span>{selected}</span>
    <ChevronDown size={20} className={\`transform \${isOpen ? 'rotate-180' : ''} transition-transform\`} />
  </button>
  
  {isOpen && (
    <div className="absolute left-0 right-0 mt-2 bg-gradient-to-br from-pink-500 to-cyan-400 border-4 border-purple-600 rounded-lg overflow-hidden spin z-50">
      {['🚀 Rocket', '🛸 UFO', '✈️ Plane', '🚁 Helicopter', '🛩️ Jet'].map((item) => (
        <button
          key={item}
          onClick={() => {
            setSelected(item);
            setIsOpen(false);
          }}
          className="block w-full px-6 py-4 text-black font-black text-lg text-left hover:bg-white hover:bg-opacity-50 transition-colors border-b-2 border-purple-600 last:border-b-0"
          style={{ fontFamily: 'Papyrus' }}
        >
          {item}
        </button>
      ))}
    </div>
  )}
</div>`,
    htmlCode: `<!-- Dropdown Container -->
<div class="relative inline-block">
  <!-- Dropdown Button -->
  <button 
    onclick="toggleDropdown()"
    class="flex items-center justify-between w-64 px-6 py-4 bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-400 text-black font-black text-lg border-4 border-purple-600 rounded-lg hover:scale-105 transition-transform spin"
    style="font-family: 'Papyrus';"
  >
    <span id="selected-item">🚀 Rocket</span>
    <span class="transform transition-transform">▼</span>
  </button>
  
  <!-- Dropdown Menu -->
  <div id="dropdown-menu" class="absolute left-0 right-0 mt-2 bg-gradient-to-br from-pink-500 to-cyan-400 border-4 border-purple-600 rounded-lg overflow-hidden spin z-50 hidden">
    <button
      onclick="selectItem('🚀 Rocket')"
      class="block w-full px-6 py-4 text-black font-black text-lg text-left hover:bg-white hover:bg-opacity-50 transition-colors border-b-2 border-purple-600"
      style="font-family: 'Papyrus';"
    >
      🚀 Rocket
    </button>
    <button
      onclick="selectItem('🛸 UFO')"
      class="block w-full px-6 py-4 text-black font-black text-lg text-left hover:bg-white hover:bg-opacity-50 transition-colors border-b-2 border-purple-600"
      style="font-family: 'Papyrus';"
    >
      🛸 UFO
    </button>
    <button
      onclick="selectItem('✈️ Plane')"
      class="block w-full px-6 py-4 text-black font-black text-lg text-left hover:bg-white hover:bg-opacity-50 transition-colors border-b-2 border-purple-600"
      style="font-family: 'Papyrus';"
    >
      ✈️ Plane
    </button>
    <button
      onclick="selectItem('🚁 Helicopter')"
      class="block w-full px-6 py-4 text-black font-black text-lg text-left hover:bg-white hover:bg-opacity-50 transition-colors border-b-2 border-purple-600"
      style="font-family: 'Papyrus';"
    >
      🚁 Helicopter
    </button>
    <button
      onclick="selectItem('🛩️ Jet')"
      class="block w-full px-6 py-4 text-black font-black text-lg text-left hover:bg-white hover:bg-opacity-50 transition-colors"
      style="font-family: 'Papyrus';"
    >
      🛩️ Jet
    </button>
  </div>
</div>`,
    cssCode: `.dropdown-spin {
  position: relative;
  display: inline-block;
}

.dropdown-spin .button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 16rem;
  padding: 1rem 1.5rem;
  background: linear-gradient(to right, #ec4899, #f59e0b, #22d3ee);
  color: #000000;
  font-weight: 900;
  font-size: 1.125rem;
  border: 4px solid #9333ea;
  border-radius: 0.5rem;
  transition: transform 0.3s;
  font-family: 'Papyrus';
  animation: spin 2s linear infinite;
}

.dropdown-spin .button:hover {
  transform: scale(1.05);
}

.dropdown-spin .menu {
  position: absolute;
  left: 0;
  right: 0;
  margin-top: 0.5rem;
  background: linear-gradient(135deg, #ec4899, #22d3ee);
  border: 4px solid #9333ea;
  border-radius: 0.5rem;
  overflow: hidden;
  z-index: 50;
  animation: spin 2s linear infinite;
}

.dropdown-spin .item {
  display: block;
  width: 100%;
  padding: 1rem 1.5rem;
  color: #000000;
  font-weight: 900;
  font-size: 1.125rem;
  text-align: left;
  transition: background-color 0.3s;
  border-bottom: 2px solid #9333ea;
  font-family: 'Papyrus';
}

.dropdown-spin .item:last-child {
  border-bottom: none;
}

.dropdown-spin .item:hover {
  background-color: rgba(255, 255, 255, 0.5);
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}`
  },
  dropdown3: {
    name: 'Bouncing Times Dropdown',
    className: 'relative inline-block',
    buttonClassName: 'flex items-center justify-between w-64 px-6 py-4 bg-purple-600 text-yellow-300 font-black text-lg border-8 border-yellow-300 rounded-2xl hover:bg-purple-700 transition-colors bounce',
    menuClassName: 'absolute left-0 right-0 mt-2 bg-purple-600 border-8 border-yellow-300 rounded-2xl overflow-hidden bounce z-50',
    itemClassName: 'block w-full px-6 py-4 text-yellow-300 font-black text-lg text-left hover:bg-pink-500 transition-colors border-b-4 border-yellow-300 last:border-b-0',
    items: ['🐶 Dog', '🐱 Cat', '🐰 Rabbit', '🐹 Hamster', '🐻 Bear'],
    selectedItem: '🐶 Dog',
    reactCode: `const [isOpen, setIsOpen] = useState(false);
const [selected, setSelected] = useState('🐶 Dog');

<div className="relative inline-block">
  <button 
    onClick={() => setIsOpen(!isOpen)}
    className="flex items-center justify-between w-64 px-6 py-4 bg-purple-600 text-yellow-300 font-black text-lg border-8 border-yellow-300 rounded-2xl hover:bg-purple-700 transition-colors bounce"
    style={{ fontFamily: 'Times New Roman' }}
  >
    <span>{selected}</span>
    <ChevronDown size={20} className={\`transform \${isOpen ? 'rotate-180' : ''} transition-transform\`} />
  </button>
  
  {isOpen && (
    <div className="absolute left-0 right-0 mt-2 bg-purple-600 border-8 border-yellow-300 rounded-2xl overflow-hidden bounce z-50">
      {['🐶 Dog', '🐱 Cat', '🐰 Rabbit', '🐹 Hamster', '🐻 Bear'].map((item) => (
        <button
          key={item}
          onClick={() => {
            setSelected(item);
            setIsOpen(false);
          }}
          className="block w-full px-6 py-4 text-yellow-300 font-black text-lg text-left hover:bg-pink-500 transition-colors border-b-4 border-yellow-300 last:border-b-0"
          style={{ fontFamily: 'Times New Roman' }}
        >
          {item}
        </button>
      ))}
    </div>
  )}
</div>`,
    htmlCode: `<!-- Dropdown Container -->
<div class="relative inline-block">
  <!-- Dropdown Button -->
  <button 
    onclick="toggleDropdown()"
    class="flex items-center justify-between w-64 px-6 py-4 bg-purple-600 text-yellow-300 font-black text-lg border-8 border-yellow-300 rounded-2xl hover:bg-purple-700 transition-colors bounce"
    style="font-family: 'Times New Roman';"
  >
    <span id="selected-item">🐶 Dog</span>
    <span class="transform transition-transform">▼</span>
  </button>
  
  <!-- Dropdown Menu -->
  <div id="dropdown-menu" class="absolute left-0 right-0 mt-2 bg-purple-600 border-8 border-yellow-300 rounded-2xl overflow-hidden bounce z-50 hidden">
    <button
      onclick="selectItem('🐶 Dog')"
      class="block w-full px-6 py-4 text-yellow-300 font-black text-lg text-left hover:bg-pink-500 transition-colors border-b-4 border-yellow-300"
      style="font-family: 'Times New Roman';"
    >
      🐶 Dog
    </button>
    <button
      onclick="selectItem('🐱 Cat')"
      class="block w-full px-6 py-4 text-yellow-300 font-black text-lg text-left hover:bg-pink-500 transition-colors border-b-4 border-yellow-300"
      style="font-family: 'Times New Roman';"
    >
      🐱 Cat
    </button>
    <button
      onclick="selectItem('🐰 Rabbit')"
      class="block w-full px-6 py-4 text-yellow-300 font-black text-lg text-left hover:bg-pink-500 transition-colors border-b-4 border-yellow-300"
      style="font-family: 'Times New Roman';"
    >
      🐰 Rabbit
    </button>
    <button
      onclick="selectItem('🐹 Hamster')"
      class="block w-full px-6 py-4 text-yellow-300 font-black text-lg text-left hover:bg-pink-500 transition-colors border-b-4 border-yellow-300"
      style="font-family: 'Times New Roman';"
    >
      🐹 Hamster
    </button>
    <button
      onclick="selectItem('🐻 Bear')"
      class="block w-full px-6 py-4 text-yellow-300 font-black text-lg text-left hover:bg-pink-500 transition-colors"
      style="font-family: 'Times New Roman';"
    >
      🐻 Bear
    </button>
  </div>
</div>`,
    cssCode: `.dropdown-bounce {
  position: relative;
  display: inline-block;
}

.dropdown-bounce .button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 16rem;
  padding: 1rem 1.5rem;
  background-color: #9333ea;
  color: #fde047;
  font-weight: 900;
  font-size: 1.125rem;
  border: 8px solid #fde047;
  border-radius: 1rem;
  transition: background-color 0.3s;
  font-family: 'Times New Roman';
  animation: bounce 0.8s infinite;
}

.dropdown-bounce .button:hover {
  background-color: #7e22ce;
}

.dropdown-bounce .menu {
  position: absolute;
  left: 0;
  right: 0;
  margin-top: 0.5rem;
  background-color: #9333ea;
  border: 8px solid #fde047;
  border-radius: 1rem;
  overflow: hidden;
  z-index: 50;
  animation: bounce 0.8s infinite;
}

.dropdown-bounce .item {
  display: block;
  width: 100%;
  padding: 1rem 1.5rem;
  color: #fde047;
  font-weight: 900;
  font-size: 1.125rem;
  text-align: left;
  transition: background-color 0.3s;
  border-bottom: 4px solid #fde047;
  font-family: 'Times New Roman';
}

.dropdown-bounce .item:last-child {
  border-bottom: none;
}

.dropdown-bounce .item:hover {
  background-color: #ec4899;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}`
  },
  dropdown4: {
    name: 'Wobbly Brush Dropdown',
    className: 'relative inline-block',
    buttonClassName: 'flex items-center justify-between w-64 px-6 py-4 bg-gradient-to-t from-cyan-400 to-pink-400 text-black font-black text-lg border-6 border-orange-500 rounded-full hover:scale-105 transition-transform wobble',
    menuClassName: 'absolute left-0 right-0 mt-2 bg-gradient-to-br from-cyan-400 to-pink-400 border-6 border-orange-500 rounded-full overflow-hidden wobble z-50',
    itemClassName: 'block w-full px-6 py-4 text-black font-black text-lg text-left hover:bg-black hover:text-white transition-colors border-b-4 border-orange-500 last:border-b-0',
    items: ['⚽ Soccer', '🏀 Basketball', '🎾 Tennis', '🏈 Football', '⚾ Baseball'],
    selectedItem: '⚽ Soccer',
    reactCode: `const [isOpen, setIsOpen] = useState(false);
const [selected, setSelected] = useState('⚽ Soccer');

<div className="relative inline-block">
  <button 
    onClick={() => setIsOpen(!isOpen)}
    className="flex items-center justify-between w-64 px-6 py-4 bg-gradient-to-t from-cyan-400 to-pink-400 text-black font-black text-lg border-6 border-orange-500 rounded-full hover:scale-105 transition-transform wobble"
    style={{ fontFamily: 'Brush Script MT' }}
  >
    <span>{selected}</span>
    <ChevronDown size={20} className={\`transform \${isOpen ? 'rotate-180' : ''} transition-transform\`} />
  </button>
  
  {isOpen && (
    <div className="absolute left-0 right-0 mt-2 bg-gradient-to-br from-cyan-400 to-pink-400 border-6 border-orange-500 rounded-full overflow-hidden wobble z-50">
      {['⚽ Soccer', '🏀 Basketball', '🎾 Tennis', '🏈 Football', '⚾ Baseball'].map((item) => (
        <button
          key={item}
          onClick={() => {
            setSelected(item);
            setIsOpen(false);
          }}
          className="block w-full px-6 py-4 text-black font-black text-lg text-left hover:bg-black hover:text-white transition-colors border-b-4 border-orange-500 last:border-b-0"
          style={{ fontFamily: 'Brush Script MT' }}
        >
          {item}
        </button>
      ))}
    </div>
  )}
</div>`,
    htmlCode: `<!-- Dropdown Container -->
<div class="relative inline-block">
  <!-- Dropdown Button -->
  <button 
    onclick="toggleDropdown()"
    class="flex items-center justify-between w-64 px-6 py-4 bg-gradient-to-t from-cyan-400 to-pink-400 text-black font-black text-lg border-6 border-orange-500 rounded-full hover:scale-105 transition-transform wobble"
    style="font-family: 'Brush Script MT';"
  >
    <span id="selected-item">⚽ Soccer</span>
    <span class="transform transition-transform">▼</span>
  </button>
  
  <!-- Dropdown Menu -->
  <div id="dropdown-menu" class="absolute left-0 right-0 mt-2 bg-gradient-to-br from-cyan-400 to-pink-400 border-6 border-orange-500 rounded-full overflow-hidden wobble z-50 hidden">
    <button
      onclick="selectItem('⚽ Soccer')"
      class="block w-full px-6 py-4 text-black font-black text-lg text-left hover:bg-black hover:text-white transition-colors border-b-4 border-orange-500"
      style="font-family: 'Brush Script MT';"
    >
      ⚽ Soccer
    </button>
    <button
      onclick="selectItem('🏀 Basketball')"
      class="block w-full px-6 py-4 text-black font-black text-lg text-left hover:bg-black hover:text-white transition-colors border-b-4 border-orange-500"
      style="font-family: 'Brush Script MT';"
    >
      🏀 Basketball
    </button>
    <button
      onclick="selectItem('🎾 Tennis')"
      class="block w-full px-6 py-4 text-black font-black text-lg text-left hover:bg-black hover:text-white transition-colors border-b-4 border-orange-500"
      style="font-family: 'Brush Script MT';"
    >
      🎾 Tennis
    </button>
    <button
      onclick="selectItem('🏈 Football')"
      class="block w-full px-6 py-4 text-black font-black text-lg text-left hover:bg-black hover:text-white transition-colors border-b-4 border-orange-500"
      style="font-family: 'Brush Script MT';"
    >
      🏈 Football
    </button>
    <button
      onclick="selectItem('⚾ Baseball')"
      class="block w-full px-6 py-4 text-black font-black text-lg text-left hover:bg-black hover:text-white transition-colors"
      style="font-family: 'Brush Script MT';"
    >
      ⚾ Baseball
    </button>
  </div>
</div>`,
    cssCode: `.dropdown-wobble {
  position: relative;
  display: inline-block;
}

.dropdown-wobble .button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 16rem;
  padding: 1rem 1.5rem;
  background: linear-gradient(to top, #22d3ee, #ec4899);
  color: #000000;
  font-weight: 900;
  font-size: 1.125rem;
  border: 6px solid #f97316;
  border-radius: 9999px;
  transition: transform 0.3s;
  font-family: 'Brush Script MT';
  animation: wobble 0.7s infinite;
}

.dropdown-wobble .button:hover {
  transform: scale(1.05);
}

.dropdown-wobble .menu {
  position: absolute;
  left: 0;
  right: 0;
  margin-top: 0.5rem;
  background: linear-gradient(135deg, #22d3ee, #ec4899);
  border: 6px solid #f97316;
  border-radius: 9999px;
  overflow: hidden;
  z-index: 50;
  animation: wobble 0.7s infinite;
}

.dropdown-wobble .item {
  display: block;
  width: 100%;
  padding: 1rem 1.5rem;
  color: #000000;
  font-weight: 900;
  font-size: 1.125rem;
  text-align: left;
  transition: all 0.3s;
  border-bottom: 4px solid #f97316;
  font-family: 'Brush Script MT';
}

.dropdown-wobble .item:last-child {
  border-bottom: none;
}

.dropdown-wobble .item:hover {
  background-color: #000000;
  color: #ffffff;
}

@keyframes wobble {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-5deg); }
  75% { transform: rotate(5deg); }
}`
  },
  dropdown5: {
    name: 'Glitchy Impact Dropdown',
    className: 'relative inline-block',
    buttonClassName: 'flex items-center justify-between w-64 px-6 py-4 bg-yellow-300 text-black font-black text-lg border-8 border-magenta-500 rounded-md hover:bg-yellow-400 transition-colors glitch',
    menuClassName: 'absolute left-0 right-0 mt-2 bg-yellow-300 border-8 border-magenta-500 rounded-md overflow-hidden glitch z-50',
    itemClassName: 'block w-full px-6 py-4 text-black font-black text-lg text-left hover:bg-red-600 hover:text-white transition-colors border-b-4 border-magenta-500 last:border-b-0',
    items: ['🎸 Guitar', '🎹 Piano', '🥁 Drums', '🎤 Microphone', '🎺 Trumpet'],
    selectedItem: '🎸 Guitar',
    reactCode: `const [isOpen, setIsOpen] = useState(false);
const [selected, setSelected] = useState('🎸 Guitar');

<div className="relative inline-block">
  <button 
    onClick={() => setIsOpen(!isOpen)}
    className="flex items-center justify-between w-64 px-6 py-4 bg-yellow-300 text-black font-black text-lg border-8 border-magenta-500 rounded-md hover:bg-yellow-400 transition-colors glitch"
    style={{ fontFamily: 'Impact' }}
  >
    <span>{selected}</span>
    <ChevronDown size={20} className={\`transform \${isOpen ? 'rotate-180' : ''} transition-transform\`} />
  </button>
  
  {isOpen && (
    <div className="absolute left-0 right-0 mt-2 bg-yellow-300 border-8 border-magenta-500 rounded-md overflow-hidden glitch z-50">
      {['🎸 Guitar', '🎹 Piano', '🥁 Drums', '🎤 Microphone', '🎺 Trumpet'].map((item) => (
        <button
          key={item}
          onClick={() => {
            setSelected(item);
            setIsOpen(false);
          }}
          className="block w-full px-6 py-4 text-black font-black text-lg text-left hover:bg-red-600 hover:text-white transition-colors border-b-4 border-magenta-500 last:border-b-0"
          style={{ fontFamily: 'Impact' }}
        >
          {item}
        </button>
      ))}
    </div>
  )}
</div>`,
    htmlCode: `<!-- Dropdown Container -->
<div class="relative inline-block">
  <!-- Dropdown Button -->
  <button 
    onclick="toggleDropdown()"
    class="flex items-center justify-between w-64 px-6 py-4 bg-yellow-300 text-black font-black text-lg border-8 border-magenta-500 rounded-md hover:bg-yellow-400 transition-colors glitch"
    style="font-family: 'Impact';"
  >
    <span id="selected-item">🎸 Guitar</span>
    <span class="transform transition-transform">▼</span>
  </button>
  
  <!-- Dropdown Menu -->
  <div id="dropdown-menu" class="absolute left-0 right-0 mt-2 bg-yellow-300 border-8 border-magenta-500 rounded-md overflow-hidden glitch z-50 hidden">
    <button
      onclick="selectItem('🎸 Guitar')"
      class="block w-full px-6 py-4 text-black font-black text-lg text-left hover:bg-red-600 hover:text-white transition-colors border-b-4 border-magenta-500"
      style="font-family: 'Impact';"
    >
      🎸 Guitar
    </button>
    <button
      onclick="selectItem('🎹 Piano')"
      class="block w-full px-6 py-4 text-black font-black text-lg text-left hover:bg-red-600 hover:text-white transition-colors border-b-4 border-magenta-500"
      style="font-family: 'Impact';"
    >
      🎹 Piano
    </button>
    <button
      onclick="selectItem('🥁 Drums')"
      class="block w-full px-6 py-4 text-black font-black text-lg text-left hover:bg-red-600 hover:text-white transition-colors border-b-4 border-magenta-500"
      style="font-family: 'Impact';"
    >
      🥁 Drums
    </button>
    <button
      onclick="selectItem('🎤 Microphone')"
      class="block w-full px-6 py-4 text-black font-black text-lg text-left hover:bg-red-600 hover:text-white transition-colors border-b-4 border-magenta-500"
      style="font-family: 'Impact';"
    >
      🎤 Microphone
    </button>
    <button
      onclick="selectItem('🎺 Trumpet')"
      class="block w-full px-6 py-4 text-black font-black text-lg text-left hover:bg-red-600 hover:text-white transition-colors"
      style="font-family: 'Impact';"
    >
      🎺 Trumpet
    </button>
  </div>
</div>`,
    cssCode: `.dropdown-glitch {
  position: relative;
  display: inline-block;
}

.dropdown-glitch .button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 16rem;
  padding: 1rem 1.5rem;
  background-color: #fde047;
  color: #000000;
  font-weight: 900;
  font-size: 1.125rem;
  border: 8px solid #d946ef;
  border-radius: 0.375rem;
  transition: background-color 0.3s;
  font-family: 'Impact';
  animation: glitch 0.4s infinite;
}

.dropdown-glitch .button:hover {
  background-color: #facc15;
}

.dropdown-glitch .menu {
  position: absolute;
  left: 0;
  right: 0;
  margin-top: 0.5rem;
  background-color: #fde047;
  border: 8px solid #d946ef;
  border-radius: 0.375rem;
  overflow: hidden;
  z-index: 50;
  animation: glitch 0.4s infinite;
}

.dropdown-glitch .item {
  display: block;
  width: 100%;
  padding: 1rem 1.5rem;
  color: #000000;
  font-weight: 900;
  font-size: 1.125rem;
  text-align: left;
  transition: all 0.3s;
  border-bottom: 4px solid #d946ef;
  font-family: 'Impact';
}

.dropdown-glitch .item:last-child {
  border-bottom: none;
}

.dropdown-glitch .item:hover {
  background-color: #dc2626;
  color: #ffffff;
}

@keyframes glitch {
  0% { transform: translate(0); }
  20% { transform: translate(-5px, 5px); }
  40% { transform: translate(-5px, -5px); }
  60% { transform: translate(5px, 5px); }
  80% { transform: translate(5px, -5px); }
  100% { transform: translate(0); }
}`
  },
  dropdown6: {
    name: 'Pulsing Jokerman Dropdown',
    className: 'relative inline-block',
    buttonClassName: 'flex items-center justify-between w-64 px-6 py-4 bg-gradient-to-r from-green-400 to-blue-500 text-white font-black text-lg border-8 border-red-600 rounded-xl hover:scale-110 transition-transform pulse',
    menuClassName: 'absolute left-0 right-0 mt-2 bg-gradient-to-r from-green-400 to-blue-500 border-8 border-red-600 rounded-xl overflow-hidden pulse z-50',
    itemClassName: 'block w-full px-6 py-4 text-white font-black text-lg text-left hover:bg-yellow-300 hover:text-black transition-colors border-b-4 border-red-600 last:border-b-0',
    items: ['📱 Phone', '💻 Laptop', '⌚ Watch', '🎮 Console', '📷 Camera'],
    selectedItem: '📱 Phone',
    reactCode: `const [isOpen, setIsOpen] = useState(false);
const [selected, setSelected] = useState('📱 Phone');

<div className="relative inline-block">
  <button 
    onClick={() => setIsOpen(!isOpen)}
    className="flex items-center justify-between w-64 px-6 py-4 bg-gradient-to-r from-green-400 to-blue-500 text-white font-black text-lg border-8 border-red-600 rounded-xl hover:scale-110 transition-transform pulse"
    style={{ fontFamily: 'Jokerman' }}
  >
    <span>{selected}</span>
    <ChevronDown size={20} className={\`transform \${isOpen ? 'rotate-180' : ''} transition-transform\`} />
  </button>
  
  {isOpen && (
    <div className="absolute left-0 right-0 mt-2 bg-gradient-to-r from-green-400 to-blue-500 border-8 border-red-600 rounded-xl overflow-hidden pulse z-50">
      {['📱 Phone', '💻 Laptop', '⌚ Watch', '🎮 Console', '📷 Camera'].map((item) => (
        <button
          key={item}
          onClick={() => {
            setSelected(item);
            setIsOpen(false);
          }}
          className="block w-full px-6 py-4 text-white font-black text-lg text-left hover:bg-yellow-300 hover:text-black transition-colors border-b-4 border-red-600 last:border-b-0"
          style={{ fontFamily: 'Jokerman' }}
        >
          {item}
        </button>
      ))}
    </div>
  )}
</div>`,
    htmlCode: `<!-- Dropdown Container -->
<div class="relative inline-block">
  <!-- Dropdown Button -->
  <button 
    onclick="toggleDropdown()"
    class="flex items-center justify-between w-64 px-6 py-4 bg-gradient-to-r from-green-400 to-blue-500 text-white font-black text-lg border-8 border-red-600 rounded-xl hover:scale-110 transition-transform pulse"
    style="font-family: 'Jokerman';"
  >
    <span id="selected-item">📱 Phone</span>
    <span class="transform transition-transform">▼</span>
  </button>
  
  <!-- Dropdown Menu -->
  <div id="dropdown-menu" class="absolute left-0 right-0 mt-2 bg-gradient-to-r from-green-400 to-blue-500 border-8 border-red-600 rounded-xl overflow-hidden pulse z-50 hidden">
    <button
      onclick="selectItem('📱 Phone')"
      class="block w-full px-6 py-4 text-white font-black text-lg text-left hover:bg-yellow-300 hover:text-black transition-colors border-b-4 border-red-600"
      style="font-family: 'Jokerman';"
    >
      📱 Phone
    </button>
    <button
      onclick="selectItem('💻 Laptop')"
      class="block w-full px-6 py-4 text-white font-black text-lg text-left hover:bg-yellow-300 hover:text-black transition-colors border-b-4 border-red-600"
      style="font-family: 'Jokerman';"
    >
      💻 Laptop
    </button>
    <button
      onclick="selectItem('⌚ Watch')"
      class="block w-full px-6 py-4 text-white font-black text-lg text-left hover:bg-yellow-300 hover:text-black transition-colors border-b-4 border-red-600"
      style="font-family: 'Jokerman';"
    >
      ⌚ Watch
    </button>
    <button
      onclick="selectItem('🎮 Console')"
      class="block w-full px-6 py-4 text-white font-black text-lg text-left hover:bg-yellow-300 hover:text-black transition-colors border-b-4 border-red-600"
      style="font-family: 'Jokerman';"
    >
      🎮 Console
    </button>
    <button
      onclick="selectItem('📷 Camera')"
      class="block w-full px-6 py-4 text-white font-black text-lg text-left hover:bg-yellow-300 hover:text-black transition-colors"
      style="font-family: 'Jokerman';"
    >
      📷 Camera
    </button>
  </div>
</div>`,
    cssCode: `.dropdown-pulse {
  position: relative;
  display: inline-block;
}

.dropdown-pulse .button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 16rem;
  padding: 1rem 1.5rem;
  background: linear-gradient(to right, #4ade80, #3b82f6);
  color: #ffffff;
  font-weight: 900;
  font-size: 1.125rem;
  border: 8px solid #dc2626;
  border-radius: 0.75rem;
  transition: transform 0.3s;
  font-family: 'Jokerman';
  animation: pulse 0.5s infinite;
}

.dropdown-pulse .button:hover {
  transform: scale(1.1);
}

.dropdown-pulse .menu {
  position: absolute;
  left: 0;
  right: 0;
  margin-top: 0.5rem;
  background: linear-gradient(to right, #4ade80, #3b82f6);
  border: 8px solid #dc2626;
  border-radius: 0.75rem;
  overflow: hidden;
  z-index: 50;
  animation: pulse 0.5s infinite;
}

.dropdown-pulse .item {
  display: block;
  width: 100%;
  padding: 1rem 1.5rem;
  color: #ffffff;
  font-weight: 900;
  font-size: 1.125rem;
  text-align: left;
  transition: all 0.3s;
  border-bottom: 4px solid #dc2626;
  font-family: 'Jokerman';
}

.dropdown-pulse .item:last-child {
  border-bottom: none;
}

.dropdown-pulse .item:hover {
  background-color: #fde047;
  color: #000000;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}`
  }
};

export function DropdownSample() {
  const [selectedDropdown, setSelectedDropdown] = useState('dropdown1');
  const [viewMode, setViewMode] = useState('preview');
  const [codeLanguage, setCodeLanguage] = useState('react');
  const [styleType, setStyleType] = useState('tailwindcss');
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedCss, setCopiedCss] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(dropdownConfigs.dropdown1.selectedItem);

  const config = dropdownConfigs[selectedDropdown];

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
        ? `<div className="dropdown-${selectedDropdown.slice(-1)}">\n  {/* Dropdown content */}\n</div>`
        : `<div class="dropdown-${selectedDropdown.slice(-1)}">\n  <!-- Dropdown content -->\n</div>`;
    }
  };

  const renderDropdown = () => (
    <div className={config.className}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={config.buttonClassName}
        style={{ 
          fontFamily: config.reactCode.includes('Comic Sans') ? FONTS.COMIC_SANS : 
                   config.reactCode.includes('Papyrus') ? FONTS.PAPYRUS :
                   config.reactCode.includes('Times New Roman') ? FONTS.TIMES_NEW_ROMAN :
                   config.reactCode.includes('Impact') ? FONTS.IMPACT :
                   config.reactCode.includes('Brush Script') ? FONTS.BRUSH_SCRIPT : FONTS.JOKERMAN
        }}
      >
        <span>{selectedItem}</span>
        <ChevronDown size={20} className={`transform ${isOpen ? 'rotate-180' : ''} transition-transform`} />
      </button>
      
      {isOpen && (
        <div className={config.menuClassName}>
          {config.items.map((item) => (
            <button
              key={item}
              onClick={() => {
                setSelectedItem(item);
                setIsOpen(false);
              }}
              className={config.itemClassName}
              style={{ 
                fontFamily: config.reactCode.includes('Comic Sans') ? FONTS.COMIC_SANS : 
                         config.reactCode.includes('Papyrus') ? FONTS.PAPYRUS :
                         config.reactCode.includes('Times New Roman') ? FONTS.TIMES_NEW_ROMAN :
                         config.reactCode.includes('Impact') ? FONTS.IMPACT :
                         config.reactCode.includes('Brush Script') ? FONTS.BRUSH_SCRIPT : FONTS.JOKERMAN
              }}
            >
              {item}
            </button>
          ))}
        </div>
      )}
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

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 bg-black/20 p-6 border-8 border-lime-400 transform -rotate-2">
          <h1
            className="text-4xl md:text-6xl font-black mb-4 colorflip"
            style={{ fontFamily: FONTS.COMIC_SANS }}
          >
            🔽 DUMBUI DROPDOWNS 🔽
          </h1>
          <p
            className="text-xl md:text-2xl font-bold"
            style={{ fontFamily: FONTS.TIMES_NEW_ROMAN, color: COLORS.CYAN }}
          >
            The MOST FRUSTRATING Menus Ever Created!
          </p>
        </div>

        <div className="mb-6 bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-500 p-4 border-8 border-red-600 transform rotate-1">
          <div className="flex flex-wrap gap-3 justify-center">
            {Object.keys(dropdownConfigs).map((dropdown) => (
              <button
                key={dropdown}
                onClick={() => {
                  setSelectedDropdown(dropdown);
                  setSelectedItem(dropdownConfigs[dropdown].selectedItem);
                  setIsOpen(false);
                }}
                className={`px-4 py-2 font-black text-sm md:text-lg border-4 transition-all ${
                  selectedDropdown === dropdown
                    ? 'bg-lime-400 text-black border-black scale-110 shake'
                    : 'bg-purple-600 text-yellow-300 border-yellow-300 hover:scale-105'
                }`}
                style={{ fontFamily: FONTS.PAPYRUS }}
              >
                {dropdownConfigs[dropdown].name.toUpperCase()}
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
              
              {renderDropdown()}

              <p className="text-white font-bold text-lg text-center mt-8" style={{ fontFamily: FONTS.COMIC_SANS }}>
                Selected: <span className="text-yellow-300">{selectedItem}</span>
              </p>
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
            ⚠️ WARNING: These dropdowns may cause SELECTION ANXIETY! ⚠️
          </p>
        </div>
      </div>
    </div>
  );
}