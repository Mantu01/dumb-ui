import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy, ChevronLeft, ChevronRight } from 'lucide-react';

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

const paginationConfigs = {
  pagination1: {
    name: 'Shaky Comic Pagination',
    className: 'flex items-center space-x-2 shake bg-lime-400 p-4 border-8 border-black rounded-full',
    itemClassName: 'flex items-center justify-center w-12 h-12 bg-lime-400 text-black font-black text-lg border-4 border-black rounded-full hover:bg-yellow-300 transition-colors',
    activeClassName: 'bg-yellow-300 scale-110 shake',
    prevNextClassName: 'flex items-center justify-center w-12 h-12 bg-lime-400 text-black font-black text-lg border-4 border-black rounded-full hover:bg-yellow-300 transition-colors',
    disabledClassName: 'opacity-50 cursor-not-allowed',
    totalPages: 8,
    reactCode: `const [currentPage, setCurrentPage] = useState(1);
const totalPages = 8;

<div className="flex items-center space-x-2 shake bg-lime-400 p-4 border-8 border-black rounded-full">
  <button
    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
    disabled={currentPage === 1}
    className="flex items-center justify-center w-12 h-12 bg-lime-400 text-black font-black text-lg border-4 border-black rounded-full hover:bg-yellow-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    style={{ fontFamily: 'Comic Sans MS' }}
  >
    <ChevronLeft size={20} />
  </button>
  
  {[...Array(totalPages)].map((_, index) => {
    const page = index + 1;
    return (
      <button
        key={page}
        onClick={() => setCurrentPage(page)}
        className={\`flex items-center justify-center w-12 h-12 bg-lime-400 text-black font-black text-lg border-4 border-black rounded-full hover:bg-yellow-300 transition-colors \${
          currentPage === page ? 'bg-yellow-300 scale-110 shake' : ''
        }\`}
        style={{ fontFamily: 'Comic Sans MS' }}
      >
        {page}
      </button>
    );
  })}
  
  <button
    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
    disabled={currentPage === totalPages}
    className="flex items-center justify-center w-12 h-12 bg-lime-400 text-black font-black text-lg border-4 border-black rounded-full hover:bg-yellow-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    style={{ fontFamily: 'Comic Sans MS' }}
  >
    <ChevronRight size={20} />
  </button>
</div>`,
    htmlCode: `<!-- Pagination Container -->
<div class="flex items-center space-x-2 shake bg-lime-400 p-4 border-8 border-black rounded-full">
  <!-- Previous Button -->
  <button
    onclick="previousPage()"
    id="prev-btn"
    class="flex items-center justify-center w-12 h-12 bg-lime-400 text-black font-black text-lg border-4 border-black rounded-full hover:bg-yellow-300 transition-colors"
    style="font-family: 'Comic Sans MS';"
  >
    ◀
  </button>
  
  <!-- Page Buttons -->
  <button
    onclick="goToPage(1)"
    class="flex items-center justify-center w-12 h-12 bg-yellow-300 text-black font-black text-lg border-4 border-black rounded-full scale-110 shake"
    style="font-family: 'Comic Sans MS';"
  >
    1
  </button>
  <button
    onclick="goToPage(2)"
    class="flex items-center justify-center w-12 h-12 bg-lime-400 text-black font-black text-lg border-4 border-black rounded-full hover:bg-yellow-300 transition-colors"
    style="font-family: 'Comic Sans MS';"
  >
    2
  </button>
  <button
    onclick="goToPage(3)"
    class="flex items-center justify-center w-12 h-12 bg-lime-400 text-black font-black text-lg border-4 border-black rounded-full hover:bg-yellow-300 transition-colors"
    style="font-family: 'Comic Sans MS';"
  >
    3
  </button>
  <button
    onclick="goToPage(4)"
    class="flex items-center justify-center w-12 h-12 bg-lime-400 text-black font-black text-lg border-4 border-black rounded-full hover:bg-yellow-300 transition-colors"
    style="font-family: 'Comic Sans MS';"
  >
    4
  </button>
  <button
    onclick="goToPage(5)"
    class="flex items-center justify-center w-12 h-12 bg-lime-400 text-black font-black text-lg border-4 border-black rounded-full hover:bg-yellow-300 transition-colors"
    style="font-family: 'Comic Sans MS';"
  >
    5
  </button>
  <button
    onclick="goToPage(6)"
    class="flex items-center justify-center w-12 h-12 bg-lime-400 text-black font-black text-lg border-4 border-black rounded-full hover:bg-yellow-300 transition-colors"
    style="font-family: 'Comic Sans MS';"
  >
    6
  </button>
  <button
    onclick="goToPage(7)"
    class="flex items-center justify-center w-12 h-12 bg-lime-400 text-black font-black text-lg border-4 border-black rounded-full hover:bg-yellow-300 transition-colors"
    style="font-family: 'Comic Sans MS';"
  >
    7
  </button>
  <button
    onclick="goToPage(8)"
    class="flex items-center justify-center w-12 h-12 bg-lime-400 text-black font-black text-lg border-4 border-black rounded-full hover:bg-yellow-300 transition-colors"
    style="font-family: 'Comic Sans MS';"
  >
    8
  </button>
  
  <!-- Next Button -->
  <button
    onclick="nextPage()"
    id="next-btn"
    class="flex items-center justify-center w-12 h-12 bg-lime-400 text-black font-black text-lg border-4 border-black rounded-full hover:bg-yellow-300 transition-colors"
    style="font-family: 'Comic Sans MS';"
  >
    ▶
  </button>
</div>`,
    cssCode: `.pagination-shaky {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #84cc16;
  padding: 1rem;
  border: 8px solid #000000;
  border-radius: 9999px;
  animation: shake 0.5s infinite;
}

.pagination-shaky .item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background-color: #84cc16;
  color: #000000;
  font-weight: 900;
  font-size: 1.125rem;
  border: 4px solid #000000;
  border-radius: 9999px;
  transition: background-color 0.3s, transform 0.3s;
  font-family: 'Comic Sans MS';
}

.pagination-shaky .item:hover {
  background-color: #fde047;
}

.pagination-shaky .item.active {
  background-color: #fde047;
  transform: scale(1.1);
  animation: shake 0.5s infinite;
}

.pagination-shaky .prev-next {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background-color: #84cc16;
  color: #000000;
  font-weight: 900;
  font-size: 1.125rem;
  border: 4px solid #000000;
  border-radius: 9999px;
  transition: background-color 0.3s;
  font-family: 'Comic Sans MS';
}

.pagination-shaky .prev-next:hover:not(.disabled) {
  background-color: #fde047;
}

.pagination-shaky .prev-next.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}`
  },
  pagination2: {
    name: 'Spinning Rainbow Pagination',
    className: 'flex items-center space-x-3 spin bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-400 p-6 border-4 border-purple-600 rounded-lg',
    itemClassName: 'flex items-center justify-center w-12 h-12 bg-white text-black font-black text-lg border-2 border-purple-600 rounded-lg hover:scale-110 transition-transform',
    activeClassName: 'bg-purple-600 text-white scale-125 spin',
    prevNextClassName: 'flex items-center justify-center w-12 h-12 bg-white text-black font-black text-lg border-2 border-purple-600 rounded-lg hover:scale-110 transition-transform',
    disabledClassName: 'opacity-50 cursor-not-allowed',
    totalPages: 7,
    reactCode: `const [currentPage, setCurrentPage] = useState(1);
const totalPages = 7;

<div className="flex items-center space-x-3 spin bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-400 p-6 border-4 border-purple-600 rounded-lg">
  <button
    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
    disabled={currentPage === 1}
    className="flex items-center justify-center w-12 h-12 bg-white text-black font-black text-lg border-2 border-purple-600 rounded-lg hover:scale-110 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
    style={{ fontFamily: 'Papyrus' }}
  >
    <ChevronLeft size={20} />
  </button>
  
  {[...Array(totalPages)].map((_, index) => {
    const page = index + 1;
    return (
      <button
        key={page}
        onClick={() => setCurrentPage(page)}
        className={\`flex items-center justify-center w-12 h-12 bg-white text-black font-black text-lg border-2 border-purple-600 rounded-lg hover:scale-110 transition-transform \${
          currentPage === page ? 'bg-purple-600 text-white scale-125 spin' : ''
        }\`}
        style={{ fontFamily: 'Papyrus' }}
      >
        {page}
      </button>
    );
  })}
  
  <button
    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
    disabled={currentPage === totalPages}
    className="flex items-center justify-center w-12 h-12 bg-white text-black font-black text-lg border-2 border-purple-600 rounded-lg hover:scale-110 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
    style={{ fontFamily: 'Papyrus' }}
  >
    <ChevronRight size={20} />
  </button>
</div>`,
    htmlCode: `<!-- Pagination Container -->
<div class="flex items-center space-x-3 spin bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-400 p-6 border-4 border-purple-600 rounded-lg">
  <!-- Previous Button -->
  <button
    onclick="previousPage()"
    id="prev-btn"
    class="flex items-center justify-center w-12 h-12 bg-white text-black font-black text-lg border-2 border-purple-600 rounded-lg hover:scale-110 transition-transform"
    style="font-family: 'Papyrus';"
  >
    ◀
  </button>
  
  <!-- Page Buttons -->
  <button
    onclick="goToPage(1)"
    class="flex items-center justify-center w-12 h-12 bg-purple-600 text-white font-black text-lg border-2 border-purple-600 rounded-lg scale-125 spin"
    style="font-family: 'Papyrus';"
  >
    1
  </button>
  <button
    onclick="goToPage(2)"
    class="flex items-center justify-center w-12 h-12 bg-white text-black font-black text-lg border-2 border-purple-600 rounded-lg hover:scale-110 transition-transform"
    style="font-family: 'Papyrus';"
  >
    2
  </button>
  <button
    onclick="goToPage(3)"
    class="flex items-center justify-center w-12 h-12 bg-white text-black font-black text-lg border-2 border-purple-600 rounded-lg hover:scale-110 transition-transform"
    style="font-family: 'Papyrus';"
  >
    3
  </button>
  <button
    onclick="goToPage(4)"
    class="flex items-center justify-center w-12 h-12 bg-white text-black font-black text-lg border-2 border-purple-600 rounded-lg hover:scale-110 transition-transform"
    style="font-family: 'Papyrus';"
  >
    4
  </button>
  <button
    onclick="goToPage(5)"
    class="flex items-center justify-center w-12 h-12 bg-white text-black font-black text-lg border-2 border-purple-600 rounded-lg hover:scale-110 transition-transform"
    style="font-family: 'Papyrus';"
  >
    5
  </button>
  <button
    onclick="goToPage(6)"
    class="flex items-center justify-center w-12 h-12 bg-white text-black font-black text-lg border-2 border-purple-600 rounded-lg hover:scale-110 transition-transform"
    style="font-family: 'Papyrus';"
  >
    6
  </button>
  <button
    onclick="goToPage(7)"
    class="flex items-center justify-center w-12 h-12 bg-white text-black font-black text-lg border-2 border-purple-600 rounded-lg hover:scale-110 transition-transform"
    style="font-family: 'Papyrus';"
  >
    7
  </button>
  
  <!-- Next Button -->
  <button
    onclick="nextPage()"
    id="next-btn"
    class="flex items-center justify-center w-12 h-12 bg-white text-black font-black text-lg border-2 border-purple-600 rounded-lg hover:scale-110 transition-transform"
    style="font-family: 'Papyrus';"
  >
    ▶
  </button>
</div>`,
    cssCode: `.pagination-spin {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: linear-gradient(to right, #ec4899, #f59e0b, #22d3ee);
  padding: 1.5rem;
  border: 4px solid #9333ea;
  border-radius: 0.5rem;
  animation: spin 2s linear infinite;
}

.pagination-spin .item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background-color: #ffffff;
  color: #000000;
  font-weight: 900;
  font-size: 1.125rem;
  border: 2px solid #9333ea;
  border-radius: 0.5rem;
  transition: transform 0.3s;
  font-family: 'Papyrus';
}

.pagination-spin .item:hover {
  transform: scale(1.1);
}

.pagination-spin .item.active {
  background-color: #9333ea;
  color: #ffffff;
  transform: scale(1.25);
  animation: spin 2s linear infinite;
}

.pagination-spin .prev-next {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background-color: #ffffff;
  color: #000000;
  font-weight: 900;
  font-size: 1.125rem;
  border: 2px solid #9333ea;
  border-radius: 0.5rem;
  transition: transform 0.3s;
  font-family: 'Papyrus';
}

.pagination-spin .prev-next:hover:not(.disabled) {
  transform: scale(1.1);
}

.pagination-spin .prev-next.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}`
  },
  pagination3: {
    name: 'Bouncing Times Pagination',
    className: 'flex items-center space-x-4 bounce bg-purple-600 p-5 border-8 border-yellow-300 rounded-2xl',
    itemClassName: 'flex items-center justify-center w-12 h-12 bg-purple-600 text-yellow-300 font-black text-lg border-4 border-yellow-300 rounded-2xl hover:bg-pink-500 transition-colors',
    activeClassName: 'bg-pink-500 text-white scale-110 bounce',
    prevNextClassName: 'flex items-center justify-center w-12 h-12 bg-purple-600 text-yellow-300 font-black text-lg border-4 border-yellow-300 rounded-2xl hover:bg-pink-500 transition-colors',
    disabledClassName: 'opacity-50 cursor-not-allowed',
    totalPages: 6,
    reactCode: `const [currentPage, setCurrentPage] = useState(1);
const totalPages = 6;

<div className="flex items-center space-x-4 bounce bg-purple-600 p-5 border-8 border-yellow-300 rounded-2xl">
  <button
    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
    disabled={currentPage === 1}
    className="flex items-center justify-center w-12 h-12 bg-purple-600 text-yellow-300 font-black text-lg border-4 border-yellow-300 rounded-2xl hover:bg-pink-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    style={{ fontFamily: 'Times New Roman' }}
  >
    <ChevronLeft size={20} />
  </button>
  
  {[...Array(totalPages)].map((_, index) => {
    const page = index + 1;
    return (
      <button
        key={page}
        onClick={() => setCurrentPage(page)}
        className={\`flex items-center justify-center w-12 h-12 bg-purple-600 text-yellow-300 font-black text-lg border-4 border-yellow-300 rounded-2xl hover:bg-pink-500 transition-colors \${
          currentPage === page ? 'bg-pink-500 text-white scale-110 bounce' : ''
        }\`}
        style={{ fontFamily: 'Times New Roman' }}
      >
        {page}
      </button>
    );
  })}
  
  <button
    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
    disabled={currentPage === totalPages}
    className="flex items-center justify-center w-12 h-12 bg-purple-600 text-yellow-300 font-black text-lg border-4 border-yellow-300 rounded-2xl hover:bg-pink-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    style={{ fontFamily: 'Times New Roman' }}
  >
    <ChevronRight size={20} />
  </button>
</div>`,
    htmlCode: `<!-- Pagination Container -->
<div class="flex items-center space-x-4 bounce bg-purple-600 p-5 border-8 border-yellow-300 rounded-2xl">
  <!-- Previous Button -->
  <button
    onclick="previousPage()"
    id="prev-btn"
    class="flex items-center justify-center w-12 h-12 bg-purple-600 text-yellow-300 font-black text-lg border-4 border-yellow-300 rounded-2xl hover:bg-pink-500 transition-colors"
    style="font-family: 'Times New Roman';"
  >
    ◀
  </button>
  
  <!-- Page Buttons -->
  <button
    onclick="goToPage(1)"
    class="flex items-center justify-center w-12 h-12 bg-pink-500 text-white font-black text-lg border-4 border-yellow-300 rounded-2xl scale-110 bounce"
    style="font-family: 'Times New Roman';"
  >
    1
  </button>
  <button
    onclick="goToPage(2)"
    class="flex items-center justify-center w-12 h-12 bg-purple-600 text-yellow-300 font-black text-lg border-4 border-yellow-300 rounded-2xl hover:bg-pink-500 transition-colors"
    style="font-family: 'Times New Roman';"
  >
    2
  </button>
  <button
    onclick="goToPage(3)"
    class="flex items-center justify-center w-12 h-12 bg-purple-600 text-yellow-300 font-black text-lg border-4 border-yellow-300 rounded-2xl hover:bg-pink-500 transition-colors"
    style="font-family: 'Times New Roman';"
  >
    3
  </button>
  <button
    onclick="goToPage(4)"
    class="flex items-center justify-center w-12 h-12 bg-purple-600 text-yellow-300 font-black text-lg border-4 border-yellow-300 rounded-2xl hover:bg-pink-500 transition-colors"
    style="font-family: 'Times New Roman';"
  >
    4
  </button>
  <button
    onclick="goToPage(5)"
    class="flex items-center justify-center w-12 h-12 bg-purple-600 text-yellow-300 font-black text-lg border-4 border-yellow-300 rounded-2xl hover:bg-pink-500 transition-colors"
    style="font-family: 'Times New Roman';"
  >
    5
  </button>
  <button
    onclick="goToPage(6)"
    class="flex items-center justify-center w-12 h-12 bg-purple-600 text-yellow-300 font-black text-lg border-4 border-yellow-300 rounded-2xl hover:bg-pink-500 transition-colors"
    style="font-family: 'Times New Roman';"
  >
    6
  </button>
  
  <!-- Next Button -->
  <button
    onclick="nextPage()"
    id="next-btn"
    class="flex items-center justify-center w-12 h-12 bg-purple-600 text-yellow-300 font-black text-lg border-4 border-yellow-300 rounded-2xl hover:bg-pink-500 transition-colors"
    style="font-family: 'Times New Roman';"
  >
    ▶
  </button>
</div>`,
    cssCode: `.pagination-bounce {
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: #9333ea;
  padding: 1.25rem;
  border: 8px solid #fde047;
  border-radius: 1rem;
  animation: bounce 0.8s infinite;
}

.pagination-bounce .item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background-color: #9333ea;
  color: #fde047;
  font-weight: 900;
  font-size: 1.125rem;
  border: 4px solid #fde047;
  border-radius: 1rem;
  transition: background-color 0.3s, transform 0.3s;
  font-family: 'Times New Roman';
}

.pagination-bounce .item:hover {
  background-color: #ec4899;
}

.pagination-bounce .item.active {
  background-color: #ec4899;
  color: #ffffff;
  transform: scale(1.1);
  animation: bounce 0.8s infinite;
}

.pagination-bounce .prev-next {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background-color: #9333ea;
  color: #fde047;
  font-weight: 900;
  font-size: 1.125rem;
  border: 4px solid #fde047;
  border-radius: 1rem;
  transition: background-color 0.3s;
  font-family: 'Times New Roman';
}

.pagination-bounce .prev-next:hover:not(.disabled) {
  background-color: #ec4899;
}

.pagination-bounce .prev-next.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}`
  },
  pagination4: {
    name: 'Wobbly Brush Pagination',
    className: 'flex items-center space-x-3 wobble bg-gradient-to-t from-cyan-400 to-pink-400 p-6 border-6 border-orange-500 rounded-full',
    itemClassName: 'flex items-center justify-center w-12 h-12 bg-black text-white font-black text-lg border-4 border-yellow-300 rounded-full hover:bg-yellow-300 hover:text-black transition-colors',
    activeClassName: 'bg-yellow-300 text-black scale-110 wobble',
    prevNextClassName: 'flex items-center justify-center w-12 h-12 bg-black text-white font-black text-lg border-4 border-yellow-300 rounded-full hover:bg-yellow-300 hover:text-black transition-colors',
    disabledClassName: 'opacity-50 cursor-not-allowed',
    totalPages: 5,
    reactCode: `const [currentPage, setCurrentPage] = useState(1);
const totalPages = 5;

<div className="flex items-center space-x-3 wobble bg-gradient-to-t from-cyan-400 to-pink-400 p-6 border-6 border-orange-500 rounded-full">
  <button
    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
    disabled={currentPage === 1}
    className="flex items-center justify-center w-12 h-12 bg-black text-white font-black text-lg border-4 border-yellow-300 rounded-full hover:bg-yellow-300 hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    style={{ fontFamily: 'Brush Script MT' }}
  >
    <ChevronLeft size={20} />
  </button>
  
  {[...Array(totalPages)].map((_, index) => {
    const page = index + 1;
    return (
      <button
        key={page}
        onClick={() => setCurrentPage(page)}
        className={\`flex items-center justify-center w-12 h-12 bg-black text-white font-black text-lg border-4 border-yellow-300 rounded-full hover:bg-yellow-300 hover:text-black transition-colors \${
          currentPage === page ? 'bg-yellow-300 text-black scale-110 wobble' : ''
        }\`}
        style={{ fontFamily: 'Brush Script MT' }}
      >
        {page}
      </button>
    );
  })}
  
  <button
    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
    disabled={currentPage === totalPages}
    className="flex items-center justify-center w-12 h-12 bg-black text-white font-black text-lg border-4 border-yellow-300 rounded-full hover:bg-yellow-300 hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    style={{ fontFamily: 'Brush Script MT' }}
  >
    <ChevronRight size={20} />
  </button>
</div>`,
    htmlCode: `<!-- Pagination Container -->
<div class="flex items-center space-x-3 wobble bg-gradient-to-t from-cyan-400 to-pink-400 p-6 border-6 border-orange-500 rounded-full">
  <!-- Previous Button -->
  <button
    onclick="previousPage()"
    id="prev-btn"
    class="flex items-center justify-center w-12 h-12 bg-black text-white font-black text-lg border-4 border-yellow-300 rounded-full hover:bg-yellow-300 hover:text-black transition-colors"
    style="font-family: 'Brush Script MT';"
  >
    ◀
  </button>
  
  <!-- Page Buttons -->
  <button
    onclick="goToPage(1)"
    class="flex items-center justify-center w-12 h-12 bg-yellow-300 text-black font-black text-lg border-4 border-yellow-300 rounded-full scale-110 wobble"
    style="font-family: 'Brush Script MT';"
  >
    1
  </button>
  <button
    onclick="goToPage(2)"
    class="flex items-center justify-center w-12 h-12 bg-black text-white font-black text-lg border-4 border-yellow-300 rounded-full hover:bg-yellow-300 hover:text-black transition-colors"
    style="font-family: 'Brush Script MT';"
  >
    2
  </button>
  <button
    onclick="goToPage(3)"
    class="flex items-center justify-center w-12 h-12 bg-black text-white font-black text-lg border-4 border-yellow-300 rounded-full hover:bg-yellow-300 hover:text-black transition-colors"
    style="font-family: 'Brush Script MT';"
  >
    3
  </button>
  <button
    onclick="goToPage(4)"
    class="flex items-center justify-center w-12 h-12 bg-black text-white font-black text-lg border-4 border-yellow-300 rounded-full hover:bg-yellow-300 hover:text-black transition-colors"
    style="font-family: 'Brush Script MT';"
  >
    4
  </button>
  <button
    onclick="goToPage(5)"
    class="flex items-center justify-center w-12 h-12 bg-black text-white font-black text-lg border-4 border-yellow-300 rounded-full hover:bg-yellow-300 hover:text-black transition-colors"
    style="font-family: 'Brush Script MT';"
  >
    5
  </button>
  
  <!-- Next Button -->
  <button
    onclick="nextPage()"
    id="next-btn"
    class="flex items-center justify-center w-12 h-12 bg-black text-white font-black text-lg border-4 border-yellow-300 rounded-full hover:bg-yellow-300 hover:text-black transition-colors"
    style="font-family: 'Brush Script MT';"
  >
    ▶
  </button>
</div>`,
    cssCode: `.pagination-wobble {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: linear-gradient(to top, #22d3ee, #ec4899);
  padding: 1.5rem;
  border: 6px solid #f97316;
  border-radius: 9999px;
  animation: wobble 0.7s infinite;
}

.pagination-wobble .item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background-color: #000000;
  color: #ffffff;
  font-weight: 900;
  font-size: 1.125rem;
  border: 4px solid #fde047;
  border-radius: 9999px;
  transition: all 0.3s;
  font-family: 'Brush Script MT';
}

.pagination-wobble .item:hover {
  background-color: #fde047;
  color: #000000;
}

.pagination-wobble .item.active {
  background-color: #fde047;
  color: #000000;
  transform: scale(1.1);
  animation: wobble 0.7s infinite;
}

.pagination-wobble .prev-next {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background-color: #000000;
  color: #ffffff;
  font-weight: 900;
  font-size: 1.125rem;
  border: 4px solid #fde047;
  border-radius: 9999px;
  transition: all 0.3s;
  font-family: 'Brush Script MT';
}

.pagination-wobble .prev-next:hover:not(.disabled) {
  background-color: #fde047;
  color: #000000;
}

.pagination-wobble .prev-next.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

@keyframes wobble {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-5deg); }
  75% { transform: rotate(5deg); }
}`
  },
  pagination5: {
    name: 'Glitchy Impact Pagination',
    className: 'flex items-center space-x-2 glitch bg-yellow-300 p-4 border-8 border-magenta-500 rounded-md',
    itemClassName: 'flex items-center justify-center w-12 h-12 bg-yellow-300 text-black font-black text-lg border-4 border-magenta-500 rounded-md hover:bg-red-600 hover:text-white transition-colors',
    activeClassName: 'bg-red-600 text-white scale-110 glitch',
    prevNextClassName: 'flex items-center justify-center w-12 h-12 bg-yellow-300 text-black font-black text-lg border-4 border-magenta-500 rounded-md hover:bg-red-600 hover:text-white transition-colors',
    disabledClassName: 'opacity-50 cursor-not-allowed',
    totalPages: 8,
    reactCode: `const [currentPage, setCurrentPage] = useState(1);
const totalPages = 8;

<div className="flex items-center space-x-2 glitch bg-yellow-300 p-4 border-8 border-magenta-500 rounded-md">
  <button
    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
    disabled={currentPage === 1}
    className="flex items-center justify-center w-12 h-12 bg-yellow-300 text-black font-black text-lg border-4 border-magenta-500 rounded-md hover:bg-red-600 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    style={{ fontFamily: 'Impact' }}
  >
    <ChevronLeft size={20} />
  </button>
  
  {[...Array(totalPages)].map((_, index) => {
    const page = index + 1;
    return (
      <button
        key={page}
        onClick={() => setCurrentPage(page)}
        className={\`flex items-center justify-center w-12 h-12 bg-yellow-300 text-black font-black text-lg border-4 border-magenta-500 rounded-md hover:bg-red-600 hover:text-white transition-colors \${
          currentPage === page ? 'bg-red-600 text-white scale-110 glitch' : ''
        }\`}
        style={{ fontFamily: 'Impact' }}
      >
        {page}
      </button>
    );
  })}
  
  <button
    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
    disabled={currentPage === totalPages}
    className="flex items-center justify-center w-12 h-12 bg-yellow-300 text-black font-black text-lg border-4 border-magenta-500 rounded-md hover:bg-red-600 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    style={{ fontFamily: 'Impact' }}
  >
    <ChevronRight size={20} />
  </button>
</div>`,
    htmlCode: `<!-- Pagination Container -->
<div class="flex items-center space-x-2 glitch bg-yellow-300 p-4 border-8 border-magenta-500 rounded-md">
  <!-- Previous Button -->
  <button
    onclick="previousPage()"
    id="prev-btn"
    class="flex items-center justify-center w-12 h-12 bg-yellow-300 text-black font-black text-lg border-4 border-magenta-500 rounded-md hover:bg-red-600 hover:text-white transition-colors"
    style="font-family: 'Impact';"
  >
    ◀
  </button>
  
  <!-- Page Buttons -->
  <button
    onclick="goToPage(1)"
    class="flex items-center justify-center w-12 h-12 bg-red-600 text-white font-black text-lg border-4 border-magenta-500 rounded-md scale-110 glitch"
    style="font-family: 'Impact';"
  >
    1
  </button>
  <button
    onclick="goToPage(2)"
    class="flex items-center justify-center w-12 h-12 bg-yellow-300 text-black font-black text-lg border-4 border-magenta-500 rounded-md hover:bg-red-600 hover:text-white transition-colors"
    style="font-family: 'Impact';"
  >
    2
  </button>
  <button
    onclick="goToPage(3)"
    class="flex items-center justify-center w-12 h-12 bg-yellow-300 text-black font-black text-lg border-4 border-magenta-500 rounded-md hover:bg-red-600 hover:text-white transition-colors"
    style="font-family: 'Impact';"
  >
    3
  </button>
  <button
    onclick="goToPage(4)"
    class="flex items-center justify-center w-12 h-12 bg-yellow-300 text-black font-black text-lg border-4 border-magenta-500 rounded-md hover:bg-red-600 hover:text-white transition-colors"
    style="font-family: 'Impact';"
  >
    4
  </button>
  <button
    onclick="goToPage(5)"
    class="flex items-center justify-center w-12 h-12 bg-yellow-300 text-black font-black text-lg border-4 border-magenta-500 rounded-md hover:bg-red-600 hover:text-white transition-colors"
    style="font-family: 'Impact';"
  >
    5
  </button>
  <button
    onclick="goToPage(6)"
    class="flex items-center justify-center w-12 h-12 bg-yellow-300 text-black font-black text-lg border-4 border-magenta-500 rounded-md hover:bg-red-600 hover:text-white transition-colors"
    style="font-family: 'Impact';"
  >
    6
  </button>
  <button
    onclick="goToPage(7)"
    class="flex items-center justify-center w-12 h-12 bg-yellow-300 text-black font-black text-lg border-4 border-magenta-500 rounded-md hover:bg-red-600 hover:text-white transition-colors"
    style="font-family: 'Impact';"
  >
    7
  </button>
  <button
    onclick="goToPage(8)"
    class="flex items-center justify-center w-12 h-12 bg-yellow-300 text-black font-black text-lg border-4 border-magenta-500 rounded-md hover:bg-red-600 hover:text-white transition-colors"
    style="font-family: 'Impact';"
  >
    8
  </button>
  
  <!-- Next Button -->
  <button
    onclick="nextPage()"
    id="next-btn"
    class="flex items-center justify-center w-12 h-12 bg-yellow-300 text-black font-black text-lg border-4 border-magenta-500 rounded-md hover:bg-red-600 hover:text-white transition-colors"
    style="font-family: 'Impact';"
  >
    ▶
  </button>
</div>`,
    cssCode: `.pagination-glitch {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #fde047;
  padding: 1rem;
  border: 8px solid #d946ef;
  border-radius: 0.375rem;
  animation: glitch 0.4s infinite;
}

.pagination-glitch .item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background-color: #fde047;
  color: #000000;
  font-weight: 900;
  font-size: 1.125rem;
  border: 4px solid #d946ef;
  border-radius: 0.375rem;
  transition: all 0.3s;
  font-family: 'Impact';
}

.pagination-glitch .item:hover {
  background-color: #dc2626;
  color: #ffffff;
}

.pagination-glitch .item.active {
  background-color: #dc2626;
  color: #ffffff;
  transform: scale(1.1);
  animation: glitch 0.4s infinite;
}

.pagination-glitch .prev-next {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background-color: #fde047;
  color: #000000;
  font-weight: 900;
  font-size: 1.125rem;
  border: 4px solid #d946ef;
  border-radius: 0.375rem;
  transition: all 0.3s;
  font-family: 'Impact';
}

.pagination-glitch .prev-next:hover:not(.disabled) {
  background-color: #dc2626;
  color: #ffffff;
}

.pagination-glitch .prev-next.disabled {
  opacity: 0.5;
  cursor: not-allowed;
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
  pagination6: {
    name: 'Pulsing Jokerman Pagination',
    className: 'flex items-center space-x-3 pulse bg-gradient-to-r from-green-400 to-blue-500 p-6 border-8 border-red-600 rounded-xl',
    itemClassName: 'flex items-center justify-center w-12 h-12 bg-white text-black font-black text-lg border-4 border-red-600 rounded-xl hover:bg-yellow-300 transition-colors',
    activeClassName: 'bg-yellow-300 text-black scale-110 pulse',
    prevNextClassName: 'flex items-center justify-center w-12 h-12 bg-white text-black font-black text-lg border-4 border-red-600 rounded-xl hover:bg-yellow-300 transition-colors',
    disabledClassName: 'opacity-50 cursor-not-allowed',
    totalPages: 7,
    reactCode: `const [currentPage, setCurrentPage] = useState(1);
const totalPages = 7;

<div className="flex items-center space-x-3 pulse bg-gradient-to-r from-green-400 to-blue-500 p-6 border-8 border-red-600 rounded-xl">
  <button
    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
    disabled={currentPage === 1}
    className="flex items-center justify-center w-12 h-12 bg-white text-black font-black text-lg border-4 border-red-600 rounded-xl hover:bg-yellow-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    style={{ fontFamily: 'Jokerman' }}
  >
    <ChevronLeft size={20} />
  </button>
  
  {[...Array(totalPages)].map((_, index) => {
    const page = index + 1;
    return (
      <button
        key={page}
        onClick={() => setCurrentPage(page)}
        className={\`flex items-center justify-center w-12 h-12 bg-white text-black font-black text-lg border-4 border-red-600 rounded-xl hover:bg-yellow-300 transition-colors \${
          currentPage === page ? 'bg-yellow-300 text-black scale-110 pulse' : ''
        }\`}
        style={{ fontFamily: 'Jokerman' }}
      >
        {page}
      </button>
    );
  })}
  
  <button
    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
    disabled={currentPage === totalPages}
    className="flex items-center justify-center w-12 h-12 bg-white text-black font-black text-lg border-4 border-red-600 rounded-xl hover:bg-yellow-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    style={{ fontFamily: 'Jokerman' }}
  >
    <ChevronRight size={20} />
  </button>
</div>`,
    htmlCode: `<!-- Pagination Container -->
<div class="flex items-center space-x-3 pulse bg-gradient-to-r from-green-400 to-blue-500 p-6 border-8 border-red-600 rounded-xl">
  <!-- Previous Button -->
  <button
    onclick="previousPage()"
    id="prev-btn"
    class="flex items-center justify-center w-12 h-12 bg-white text-black font-black text-lg border-4 border-red-600 rounded-xl hover:bg-yellow-300 transition-colors"
    style="font-family: 'Jokerman';"
  >
    ◀
  </button>
  
  <!-- Page Buttons -->
  <button
    onclick="goToPage(1)"
    class="flex items-center justify-center w-12 h-12 bg-yellow-300 text-black font-black text-lg border-4 border-red-600 rounded-xl scale-110 pulse"
    style="font-family: 'Jokerman';"
  >
    1
  </button>
  <button
    onclick="goToPage(2)"
    class="flex items-center justify-center w-12 h-12 bg-white text-black font-black text-lg border-4 border-red-600 rounded-xl hover:bg-yellow-300 transition-colors"
    style="font-family: 'Jokerman';"
  >
    2
  </button>
  <button
    onclick="goToPage(3)"
    class="flex items-center justify-center w-12 h-12 bg-white text-black font-black text-lg border-4 border-red-600 rounded-xl hover:bg-yellow-300 transition-colors"
    style="font-family: 'Jokerman';"
  >
    3
  </button>
  <button
    onclick="goToPage(4)"
    class="flex items-center justify-center w-12 h-12 bg-white text-black font-black text-lg border-4 border-red-600 rounded-xl hover:bg-yellow-300 transition-colors"
    style="font-family: 'Jokerman';"
  >
    4
  </button>
  <button
    onclick="goToPage(5)"
    class="flex items-center justify-center w-12 h-12 bg-white text-black font-black text-lg border-4 border-red-600 rounded-xl hover:bg-yellow-300 transition-colors"
    style="font-family: 'Jokerman';"
  >
    5
  </button>
  <button
    onclick="goToPage(6)"
    class="flex items-center justify-center w-12 h-12 bg-white text-black font-black text-lg border-4 border-red-600 rounded-xl hover:bg-yellow-300 transition-colors"
    style="font-family: 'Jokerman';"
  >
    6
  </button>
  <button
    onclick="goToPage(7)"
    class="flex items-center justify-center w-12 h-12 bg-white text-black font-black text-lg border-4 border-red-600 rounded-xl hover:bg-yellow-300 transition-colors"
    style="font-family: 'Jokerman';"
  >
    7
  </button>
  
  <!-- Next Button -->
  <button
    onclick="nextPage()"
    id="next-btn"
    class="flex items-center justify-center w-12 h-12 bg-white text-black font-black text-lg border-4 border-red-600 rounded-xl hover:bg-yellow-300 transition-colors"
    style="font-family: 'Jokerman';"
  >
    ▶
  </button>
</div>`,
    cssCode: `.pagination-pulse {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: linear-gradient(to right, #4ade80, #3b82f6);
  padding: 1.5rem;
  border: 8px solid #dc2626;
  border-radius: 0.75rem;
  animation: pulse 0.5s infinite;
}

.pagination-pulse .item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background-color: #ffffff;
  color: #000000;
  font-weight: 900;
  font-size: 1.125rem;
  border: 4px solid #dc2626;
  border-radius: 0.75rem;
  transition: background-color 0.3s, transform 0.3s;
  font-family: 'Jokerman';
}

.pagination-pulse .item:hover {
  background-color: #fde047;
}

.pagination-pulse .item.active {
  background-color: #fde047;
  color: #000000;
  transform: scale(1.1);
  animation: pulse 0.5s infinite;
}

.pagination-pulse .prev-next {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background-color: #ffffff;
  color: #000000;
  font-weight: 900;
  font-size: 1.125rem;
  border: 4px solid #dc2626;
  border-radius: 0.75rem;
  transition: background-color 0.3s;
  font-family: 'Jokerman';
}

.pagination-pulse .prev-next:hover:not(.disabled) {
  background-color: #fde047;
}

.pagination-pulse .prev-next.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}`
  }
};

export function PaginationSample() {
  const [selectedPagination, setSelectedPagination] = useState('pagination1');
  const [viewMode, setViewMode] = useState('preview');
  const [codeLanguage, setCodeLanguage] = useState('react');
  const [styleType, setStyleType] = useState('tailwindcss');
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedCss, setCopiedCss] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const config = paginationConfigs[selectedPagination];

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
        ? `<div className="pagination-${selectedPagination.slice(-1)}">\n  {/* Pagination content */}\n</div>`
        : `<div class="pagination-${selectedPagination.slice(-1)}">\n  <!-- Pagination content -->\n</div>`;
    }
  };

  const renderPagination = () => (
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
      <button
        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
        className={`${config.prevNextClassName} ${currentPage === 1 ? config.disabledClassName : ''}`}
      >
        <ChevronLeft size={20} />
      </button>
      
      {[...Array(config.totalPages)].map((_, index) => {
        const page = index + 1;
        return (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`${config.itemClassName} ${currentPage === page ? config.activeClassName : ''}`}
          >
            {page}
          </button>
        );
      })}
      
      <button
        onClick={() => setCurrentPage(prev => Math.min(prev + 1, config.totalPages))}
        disabled={currentPage === config.totalPages}
        className={`${config.prevNextClassName} ${currentPage === config.totalPages ? config.disabledClassName : ''}`}
      >
        <ChevronRight size={20} />
      </button>
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
            📄 DUMBUI PAGINATION 📄
          </h1>
          <p
            className="text-xl md:text-2xl font-bold"
            style={{ fontFamily: FONTS.TIMES_NEW_ROMAN, color: COLORS.CYAN }}
          >
            The MOST DISORIENTING Page Navigation Ever!
          </p>
        </div>

        <div className="mb-6 bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-500 p-4 border-8 border-red-600 transform rotate-1">
          <div className="flex flex-wrap gap-3 justify-center">
            {Object.keys(paginationConfigs).map((pagination) => (
              <button
                key={pagination}
                onClick={() => {
                  setSelectedPagination(pagination);
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 font-black text-sm md:text-lg border-4 transition-all ${
                  selectedPagination === pagination
                    ? 'bg-lime-400 text-black border-black scale-110 shake'
                    : 'bg-purple-600 text-yellow-300 border-yellow-300 hover:scale-105'
                }`}
                style={{ fontFamily: FONTS.PAPYRUS }}
              >
                {paginationConfigs[pagination].name.toUpperCase()}
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
              
              {renderPagination()}

              <p className="text-white font-bold text-lg text-center mt-8" style={{ fontFamily: FONTS.COMIC_SANS }}>
                Current Page: <span className="text-yellow-300 text-2xl">{currentPage}</span> / {config.totalPages}
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
            ⚠️ WARNING: This pagination may cause MOTION SICKNESS! ⚠️
          </p>
        </div>
      </div>
    </div>
  );
}