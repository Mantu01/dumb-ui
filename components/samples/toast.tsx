import React, { useState, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy, X, CheckCircle, AlertCircle, Info, AlertTriangle, Bell } from 'lucide-react';

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

const toastConfigs = {
  toast1: {
    name: 'Shaky Comic Toast',
    className: 'fixed top-4 right-4 z-50 max-w-sm w-full shake',
    toastClassName: 'bg-lime-400 border-8 border-black rounded-full p-6 shadow-2xl',
    contentClassName: 'flex items-center justify-between',
    textClassName: 'text-black font-black text-lg',
    iconClassName: 'text-black',
    closeClassName: 'text-black hover:text-red-600 transition-colors',
    messages: [
      { id: 1, type: 'success', text: '🎉 Success! Everything worked perfectly!', duration: 5000 },
      { id: 2, type: 'error', text: '💥 Error! Something went terribly wrong!', duration: 5000 },
      { id: 3, type: 'warning', text: '⚠️ Warning! This might be important!', duration: 5000 },
      { id: 4, type: 'info', text: 'ℹ️ Info! Just letting you know!', duration: 5000 }
    ],
    reactCode: `const [toasts, setToasts] = useState([]);

const addToast = (message) => {
  const newToast = {
    id: Date.now(),
    type: message.type,
    text: message.text,
    duration: message.duration
  };
  setToasts(prev => [...prev, newToast]);
};

const removeToast = (id) => {
  setToasts(prev => prev.filter(toast => toast.id !== id));
};

// Auto-remove toasts after duration
useEffect(() => {
  toasts.forEach(toast => {
    if (toast.duration) {
      setTimeout(() => {
        removeToast(toast.id);
      }, toast.duration);
    }
  });
}, [toasts]);

<div className="fixed top-4 right-4 z-50 max-w-sm w-full shake">
  {toasts.map((toast) => (
    <div
      key={toast.id}
      className="bg-lime-400 border-8 border-black rounded-full p-6 shadow-2xl mb-4"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {toast.type === 'success' && <CheckCircle size={24} className="text-black" />}
          {toast.type === 'error' && <AlertCircle size={24} className="text-black" />}
          {toast.type === 'warning' && <AlertTriangle size={24} className="text-black" />}
          {toast.type === 'info' && <Info size={24} className="text-black" />}
          <span className="text-black font-black text-lg" style={{ fontFamily: 'Comic Sans MS' }}>
            {toast.text}
          </span>
        </div>
        <button
          onClick={() => removeToast(toast.id)}
          className="text-black hover:text-red-600 transition-colors"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  ))}
</div>

{/* Trigger Buttons */}
<div className="flex gap-4 flex-wrap">
  <button
    onClick={() => addToast({
      type: 'success',
      text: '🎉 Success! Everything worked perfectly!',
      duration: 5000
    })}
    className="px-6 py-3 bg-lime-400 text-black font-black text-lg border-4 border-black rounded-full hover:bg-yellow-300 transition-colors shake"
    style={{ fontFamily: 'Comic Sans MS' }}
  >
    Show Success Toast
  </button>
  <button
    onClick={() => addToast({
      type: 'error', 
      text: '💥 Error! Something went terribly wrong!',
      duration: 5000
    })}
    className="px-6 py-3 bg-lime-400 text-black font-black text-lg border-4 border-black rounded-full hover:bg-yellow-300 transition-colors shake"
    style={{ fontFamily: 'Comic Sans MS' }}
  >
    Show Error Toast
  </button>
</div>`,
    htmlCode: `<!-- Toast Container -->
<div id="toast-container" class="fixed top-4 right-4 z-50 max-w-sm w-full shake">
  <!-- Toasts will be added here dynamically -->
</div>

<!-- Trigger Buttons -->
<div class="flex gap-4 flex-wrap">
  <button
    onclick="showToast('success', '🎉 Success! Everything worked perfectly!')"
    class="px-6 py-3 bg-lime-400 text-black font-black text-lg border-4 border-black rounded-full hover:bg-yellow-300 transition-colors shake"
    style="font-family: 'Comic Sans MS';"
  >
    Show Success Toast
  </button>
  <button
    onclick="showToast('error', '💥 Error! Something went terribly wrong!')"
    class="px-6 py-3 bg-lime-400 text-black font-black text-lg border-4 border-black rounded-full hover:bg-yellow-300 transition-colors shake"
    style="font-family: 'Comic Sans MS';"
  >
    Show Error Toast
  </button>
  <button
    onclick="showToast('warning', '⚠️ Warning! This might be important!')"
    class="px-6 py-3 bg-lime-400 text-black font-black text-lg border-4 border-black rounded-full hover:bg-yellow-300 transition-colors shake"
    style="font-family: 'Comic Sans MS';"
  >
    Show Warning Toast
  </button>
  <button
    onclick="showToast('info', 'ℹ️ Info! Just letting you know!')"
    class="px-6 py-3 bg-lime-400 text-black font-black text-lg border-4 border-black rounded-full hover:bg-yellow-300 transition-colors shake"
    style="font-family: 'Comic Sans MS';"
  >
    Show Info Toast
  </button>
</div>`,
    cssCode: `.toast-shaky {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 50;
  max-width: 24rem;
  width: 100%;
  animation: shake 0.5s infinite;
}

.toast-shaky .toast {
  background-color: #84cc16;
  border: 8px solid #000000;
  border-radius: 9999px;
  padding: 1.5rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
}

.toast-shaky .content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.toast-shaky .text {
  color: #000000;
  font-weight: 900;
  font-size: 1.125rem;
  font-family: 'Comic Sans MS';
}

.toast-shaky .close {
  color: #000000;
  transition: color 0.3s;
}

.toast-shaky .close:hover {
  color: #dc2626;
}

.toast-shaky .trigger {
  padding: 0.75rem 1.5rem;
  background-color: #84cc16;
  color: #000000;
  font-weight: 900;
  font-size: 1.125rem;
  border: 4px solid #000000;
  border-radius: 9999px;
  transition: background-color 0.3s;
  font-family: 'Comic Sans MS';
  animation: shake 0.5s infinite;
}

.toast-shaky .trigger:hover {
  background-color: #fde047;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}`
  },
  toast2: {
    name: 'Spinning Rainbow Toast',
    className: 'fixed top-4 right-4 z-50 max-w-sm w-full',
    toastClassName: 'bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-400 border-4 border-purple-600 rounded-lg p-6 shadow-2xl spin',
    contentClassName: 'flex items-center justify-between',
    textClassName: 'text-black font-black text-lg',
    iconClassName: 'text-black',
    closeClassName: 'text-black hover:text-red-600 transition-colors',
    messages: [
      { id: 1, type: 'success', text: '🌀 Success! Everything is spinning!', duration: 5000 },
      { id: 2, type: 'error', text: '🌪️ Error! Everything is chaotic!', duration: 5000 },
      { id: 3, type: 'warning', text: '⚡ Warning! Things are rotating!', duration: 5000 },
      { id: 4, type: 'info', text: '💫 Info! Spinning information!', duration: 5000 }
    ],
    reactCode: `const [toasts, setToasts] = useState([]);

const addToast = (message) => {
  const newToast = {
    id: Date.now(),
    type: message.type,
    text: message.text,
    duration: message.duration
  };
  setToasts(prev => [...prev, newToast]);
};

const removeToast = (id) => {
  setToasts(prev => prev.filter(toast => toast.id !== id));
};

useEffect(() => {
  toasts.forEach(toast => {
    if (toast.duration) {
      setTimeout(() => {
        removeToast(toast.id);
      }, toast.duration);
    }
  });
}, [toasts]);

<div className="fixed top-4 right-4 z-50 max-w-sm w-full">
  {toasts.map((toast) => (
    <div
      key={toast.id}
      className="bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-400 border-4 border-purple-600 rounded-lg p-6 shadow-2xl mb-4 spin"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {toast.type === 'success' && <CheckCircle size={24} className="text-black" />}
          {toast.type === 'error' && <AlertCircle size={24} className="text-black" />}
          {toast.type === 'warning' && <AlertTriangle size={24} className="text-black" />}
          {toast.type === 'info' && <Info size={24} className="text-black" />}
          <span className="text-black font-black text-lg" style={{ fontFamily: 'Papyrus' }}>
            {toast.text}
          </span>
        </div>
        <button
          onClick={() => removeToast(toast.id)}
          className="text-black hover:text-red-600 transition-colors"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  ))}
</div>

<div className="flex gap-4 flex-wrap">
  <button
    onClick={() => addToast({
      type: 'success',
      text: '🌀 Success! Everything is spinning!',
      duration: 5000
    })}
    className="px-6 py-3 bg-gradient-to-r from-pink-500 to-cyan-400 text-black font-black text-lg border-4 border-white rounded-lg hover:scale-110 transition-transform pulse"
    style={{ fontFamily: 'Papyrus' }}
  >
    Show Success Toast
  </button>
  <button
    onClick={() => addToast({
      type: 'error',
      text: '🌪️ Error! Everything is chaotic!',
      duration: 5000
    })}
    className="px-6 py-3 bg-gradient-to-r from-pink-500 to-cyan-400 text-black font-black text-lg border-4 border-white rounded-lg hover:scale-110 transition-transform pulse"
    style={{ fontFamily: 'Papyrus' }}
  >
    Show Error Toast
  </button>
</div>`,
    htmlCode: `<!-- Toast Container -->
<div id="toast-container" class="fixed top-4 right-4 z-50 max-w-sm w-full">
  <!-- Toasts will be added here dynamically -->
</div>

<!-- Trigger Buttons -->
<div class="flex gap-4 flex-wrap">
  <button
    onclick="showToast('success', '🌀 Success! Everything is spinning!')"
    class="px-6 py-3 bg-gradient-to-r from-pink-500 to-cyan-400 text-black font-black text-lg border-4 border-white rounded-lg hover:scale-110 transition-transform pulse"
    style="font-family: 'Papyrus';"
  >
    Show Success Toast
  </button>
  <button
    onclick="showToast('error', '🌪️ Error! Everything is chaotic!')"
    class="px-6 py-3 bg-gradient-to-r from-pink-500 to-cyan-400 text-black font-black text-lg border-4 border-white rounded-lg hover:scale-110 transition-transform pulse"
    style="font-family: 'Papyrus';"
  >
    Show Error Toast
  </button>
  <button
    onclick="showToast('warning', '⚡ Warning! Things are rotating!')"
    class="px-6 py-3 bg-gradient-to-r from-pink-500 to-cyan-400 text-black font-black text-lg border-4 border-white rounded-lg hover:scale-110 transition-transform pulse"
    style="font-family: 'Papyrus';"
  >
    Show Warning Toast
  </button>
  <button
    onclick="showToast('info', '💫 Info! Spinning information!')"
    class="px-6 py-3 bg-gradient-to-r from-pink-500 to-cyan-400 text-black font-black text-lg border-4 border-white rounded-lg hover:scale-110 transition-transform pulse"
    style="font-family: 'Papyrus';"
  >
    Show Info Toast
  </button>
</div>`,
    cssCode: `.toast-spin {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 50;
  max-width: 24rem;
  width: 100%;
}

.toast-spin .toast {
  background: linear-gradient(to right, #ec4899, #f59e0b, #22d3ee);
  border: 4px solid #9333ea;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
  animation: spin 2s linear infinite;
}

.toast-spin .content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.toast-spin .text {
  color: #000000;
  font-weight: 900;
  font-size: 1.125rem;
  font-family: 'Papyrus';
}

.toast-spin .close {
  color: #000000;
  transition: color 0.3s;
}

.toast-spin .close:hover {
  color: #dc2626;
}

.toast-spin .trigger {
  padding: 0.75rem 1.5rem;
  background: linear-gradient(to right, #ec4899, #22d3ee);
  color: #000000;
  font-weight: 900;
  font-size: 1.125rem;
  border: 4px solid #ffffff;
  border-radius: 0.5rem;
  transition: transform 0.3s;
  font-family: 'Papyrus';
  animation: pulse 0.5s infinite;
}

.toast-spin .trigger:hover {
  transform: scale(1.1);
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
  toast3: {
    name: 'Bouncing Times Toast',
    className: 'fixed top-4 right-4 z-50 max-w-sm w-full',
    toastClassName: 'bg-purple-600 border-8 border-yellow-300 rounded-2xl p-6 shadow-2xl bounce',
    contentClassName: 'flex items-center justify-between',
    textClassName: 'text-yellow-300 font-black text-lg',
    iconClassName: 'text-yellow-300',
    closeClassName: 'text-yellow-300 hover:text-red-400 transition-colors',
    messages: [
      { id: 1, type: 'success', text: '🏀 Success! Bouncing with joy!', duration: 5000 },
      { id: 2, type: 'error', text: '🎯 Error! Things are falling apart!', duration: 5000 },
      { id: 3, type: 'warning', text: '⚽ Warning! Pay attention!', duration: 5000 },
      { id: 4, type: 'info', text: '🎾 Info! Bouncing news!', duration: 5000 }
    ],
    reactCode: `const [toasts, setToasts] = useState([]);

const addToast = (message) => {
  const newToast = {
    id: Date.now(),
    type: message.type,
    text: message.text,
    duration: message.duration
  };
  setToasts(prev => [...prev, newToast]);
};

const removeToast = (id) => {
  setToasts(prev => prev.filter(toast => toast.id !== id));
};

useEffect(() => {
  toasts.forEach(toast => {
    if (toast.duration) {
      setTimeout(() => {
        removeToast(toast.id);
      }, toast.duration);
    }
  });
}, [toasts]);

<div className="fixed top-4 right-4 z-50 max-w-sm w-full">
  {toasts.map((toast) => (
    <div
      key={toast.id}
      className="bg-purple-600 border-8 border-yellow-300 rounded-2xl p-6 shadow-2xl mb-4 bounce"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {toast.type === 'success' && <CheckCircle size={24} className="text-yellow-300" />}
          {toast.type === 'error' && <AlertCircle size={24} className="text-yellow-300" />}
          {toast.type === 'warning' && <AlertTriangle size={24} className="text-yellow-300" />}
          {toast.type === 'info' && <Info size={24} className="text-yellow-300" />}
          <span className="text-yellow-300 font-black text-lg" style={{ fontFamily: 'Times New Roman' }}>
            {toast.text}
          </span>
        </div>
        <button
          onClick={() => removeToast(toast.id)}
          className="text-yellow-300 hover:text-red-400 transition-colors"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  ))}
</div>

<div className="flex gap-4 flex-wrap">
  <button
    onClick={() => addToast({
      type: 'success',
      text: '🏀 Success! Bouncing with joy!',
      duration: 5000
    })}
    className="px-6 py-3 bg-purple-600 text-yellow-300 font-black text-lg border-4 border-yellow-300 rounded-2xl hover:bg-pink-500 transition-colors wobble"
    style={{ fontFamily: 'Times New Roman' }}
  >
    Show Success Toast
  </button>
  <button
    onClick={() => addToast({
      type: 'error',
      text: '🎯 Error! Things are falling apart!',
      duration: 5000
    })}
    className="px-6 py-3 bg-purple-600 text-yellow-300 font-black text-lg border-4 border-yellow-300 rounded-2xl hover:bg-pink-500 transition-colors wobble"
    style={{ fontFamily: 'Times New Roman' }}
  >
    Show Error Toast
  </button>
</div>`,
    htmlCode: `<!-- Toast Container -->
<div id="toast-container" class="fixed top-4 right-4 z-50 max-w-sm w-full">
  <!-- Toasts will be added here dynamically -->
</div>

<!-- Trigger Buttons -->
<div class="flex gap-4 flex-wrap">
  <button
    onclick="showToast('success', '🏀 Success! Bouncing with joy!')"
    class="px-6 py-3 bg-purple-600 text-yellow-300 font-black text-lg border-4 border-yellow-300 rounded-2xl hover:bg-pink-500 transition-colors wobble"
    style="font-family: 'Times New Roman';"
  >
    Show Success Toast
  </button>
  <button
    onclick="showToast('error', '🎯 Error! Things are falling apart!')"
    class="px-6 py-3 bg-purple-600 text-yellow-300 font-black text-lg border-4 border-yellow-300 rounded-2xl hover:bg-pink-500 transition-colors wobble"
    style="font-family: 'Times New Roman';"
  >
    Show Error Toast
  </button>
  <button
    onclick="showToast('warning', '⚽ Warning! Pay attention!')"
    class="px-6 py-3 bg-purple-600 text-yellow-300 font-black text-lg border-4 border-yellow-300 rounded-2xl hover:bg-pink-500 transition-colors wobble"
    style="font-family: 'Times New Roman';"
  >
    Show Warning Toast
  </button>
  <button
    onclick="showToast('info', '🎾 Info! Bouncing news!')"
    class="px-6 py-3 bg-purple-600 text-yellow-300 font-black text-lg border-4 border-yellow-300 rounded-2xl hover:bg-pink-500 transition-colors wobble"
    style="font-family: 'Times New Roman';"
  >
    Show Info Toast
  </button>
</div>`,
    cssCode: `.toast-bounce {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 50;
  max-width: 24rem;
  width: 100%;
}

.toast-bounce .toast {
  background-color: #9333ea;
  border: 8px solid #fde047;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
  animation: bounce 0.8s infinite;
}

.toast-bounce .content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.toast-bounce .text {
  color: #fde047;
  font-weight: 900;
  font-size: 1.125rem;
  font-family: 'Times New Roman';
}

.toast-bounce .close {
  color: #fde047;
  transition: color 0.3s;
}

.toast-bounce .close:hover {
  color: #f87171;
}

.toast-bounce .trigger {
  padding: 0.75rem 1.5rem;
  background-color: #9333ea;
  color: #fde047;
  font-weight: 900;
  font-size: 1.125rem;
  border: 4px solid #fde047;
  border-radius: 1rem;
  transition: background-color 0.3s;
  font-family: 'Times New Roman';
  animation: wobble 0.7s infinite;
}

.toast-bounce .trigger:hover {
  background-color: #ec4899;
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
  toast4: {
    name: 'Wobbly Brush Toast',
    className: 'fixed top-4 right-4 z-50 max-w-sm w-full',
    toastClassName: 'bg-gradient-to-t from-cyan-400 to-pink-400 border-6 border-orange-500 rounded-full p-6 shadow-2xl wobble',
    contentClassName: 'flex items-center justify-between',
    textClassName: 'text-black font-black text-lg',
    iconClassName: 'text-black',
    closeClassName: 'text-black hover:text-red-600 transition-colors',
    messages: [
      { id: 1, type: 'success', text: '🌊 Success! Riding the waves!', duration: 5000 },
      { id: 2, type: 'error', text: '🚢 Error! Ship is sinking!', duration: 5000 },
      { id: 3, type: 'warning', text: '🌪️ Warning! Storm ahead!', duration: 5000 },
      { id: 4, type: 'info', text: '⛵ Info! Smooth sailing!', duration: 5000 }
    ],
    reactCode: `const [toasts, setToasts] = useState([]);

const addToast = (message) => {
  const newToast = {
    id: Date.now(),
    type: message.type,
    text: message.text,
    duration: message.duration
  };
  setToasts(prev => [...prev, newToast]);
};

const removeToast = (id) => {
  setToasts(prev => prev.filter(toast => toast.id !== id));
};

useEffect(() => {
  toasts.forEach(toast => {
    if (toast.duration) {
      setTimeout(() => {
        removeToast(toast.id);
      }, toast.duration);
    }
  });
}, [toasts]);

<div className="fixed top-4 right-4 z-50 max-w-sm w-full">
  {toasts.map((toast) => (
    <div
      key={toast.id}
      className="bg-gradient-to-t from-cyan-400 to-pink-400 border-6 border-orange-500 rounded-full p-6 shadow-2xl mb-4 wobble"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {toast.type === 'success' && <CheckCircle size={24} className="text-black" />}
          {toast.type === 'error' && <AlertCircle size={24} className="text-black" />}
          {toast.type === 'warning' && <AlertTriangle size={24} className="text-black" />}
          {toast.type === 'info' && <Info size={24} className="text-black" />}
          <span className="text-black font-black text-lg" style={{ fontFamily: 'Brush Script MT' }}>
            {toast.text}
          </span>
        </div>
        <button
          onClick={() => removeToast(toast.id)}
          className="text-black hover:text-red-600 transition-colors"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  ))}
</div>

<div className="flex gap-4 flex-wrap">
  <button
    onClick={() => addToast({
      type: 'success',
      text: '🌊 Success! Riding the waves!',
      duration: 5000
    })}
    className="px-6 py-3 bg-gradient-to-t from-cyan-400 to-pink-400 text-black font-black text-lg border-4 border-black rounded-full hover:scale-105 transition-transform shake"
    style={{ fontFamily: 'Brush Script MT' }}
  >
    Show Success Toast
  </button>
  <button
    onClick={() => addToast({
      type: 'error',
      text: '🚢 Error! Ship is sinking!',
      duration: 5000
    })}
    className="px-6 py-3 bg-gradient-to-t from-cyan-400 to-pink-400 text-black font-black text-lg border-4 border-black rounded-full hover:scale-105 transition-transform shake"
    style={{ fontFamily: 'Brush Script MT' }}
  >
    Show Error Toast
  </button>
</div>`,
    htmlCode: `<!-- Toast Container -->
<div id="toast-container" class="fixed top-4 right-4 z-50 max-w-sm w-full">
  <!-- Toasts will be added here dynamically -->
</div>

<!-- Trigger Buttons -->
<div class="flex gap-4 flex-wrap">
  <button
    onclick="showToast('success', '🌊 Success! Riding the waves!')"
    class="px-6 py-3 bg-gradient-to-t from-cyan-400 to-pink-400 text-black font-black text-lg border-4 border-black rounded-full hover:scale-105 transition-transform shake"
    style="font-family: 'Brush Script MT';"
  >
    Show Success Toast
  </button>
  <button
    onclick="showToast('error', '🚢 Error! Ship is sinking!')"
    class="px-6 py-3 bg-gradient-to-t from-cyan-400 to-pink-400 text-black font-black text-lg border-4 border-black rounded-full hover:scale-105 transition-transform shake"
    style="font-family: 'Brush Script MT';"
  >
    Show Error Toast
  </button>
  <button
    onclick="showToast('warning', '🌪️ Warning! Storm ahead!')"
    class="px-6 py-3 bg-gradient-to-t from-cyan-400 to-pink-400 text-black font-black text-lg border-4 border-black rounded-full hover:scale-105 transition-transform shake"
    style="font-family: 'Brush Script MT';"
  >
    Show Warning Toast
  </button>
  <button
    onclick="showToast('info', '⛵ Info! Smooth sailing!')"
    class="px-6 py-3 bg-gradient-to-t from-cyan-400 to-pink-400 text-black font-black text-lg border-4 border-black rounded-full hover:scale-105 transition-transform shake"
    style="font-family: 'Brush Script MT';"
  >
    Show Info Toast
  </button>
</div>`,
    cssCode: `.toast-wobble {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 50;
  max-width: 24rem;
  width: 100%;
}

.toast-wobble .toast {
  background: linear-gradient(to top, #22d3ee, #ec4899);
  border: 6px solid #f97316;
  border-radius: 9999px;
  padding: 1.5rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
  animation: wobble 0.7s infinite;
}

.toast-wobble .content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.toast-wobble .text {
  color: #000000;
  font-weight: 900;
  font-size: 1.125rem;
  font-family: 'Brush Script MT';
}

.toast-wobble .close {
  color: #000000;
  transition: color 0.3s;
}

.toast-wobble .close:hover {
  color: #dc2626;
}

.toast-wobble .trigger {
  padding: 0.75rem 1.5rem;
  background: linear-gradient(to top, #22d3ee, #ec4899);
  color: #000000;
  font-weight: 900;
  font-size: 1.125rem;
  border: 4px solid #000000;
  border-radius: 9999px;
  transition: transform 0.3s;
  font-family: 'Brush Script MT';
  animation: shake 0.5s infinite;
}

.toast-wobble .trigger:hover {
  transform: scale(1.05);
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
  toast5: {
    name: 'Glitchy Impact Toast',
    className: 'fixed top-4 right-4 z-50 max-w-sm w-full',
    toastClassName: 'bg-yellow-300 border-8 border-magenta-500 rounded-md p-6 shadow-2xl glitch',
    contentClassName: 'flex items-center justify-between',
    textClassName: 'text-black font-black text-lg',
    iconClassName: 'text-black',
    closeClassName: 'text-black hover:text-red-600 transition-colors',
    messages: [
      { id: 1, type: 'success', text: '💥 Success! Glitching perfectly!', duration: 5000 },
      { id: 2, type: 'error', text: '🔄 Error! System malfunction!', duration: 5000 },
      { id: 3, type: 'warning', text: '⚠️ Warning! Display corrupted!', duration: 5000 },
      { id: 4, type: 'info', text: 'ℹ️ Info! Data stream active!', duration: 5000 }
    ],
    reactCode: `const [toasts, setToasts] = useState([]);

const addToast = (message) => {
  const newToast = {
    id: Date.now(),
    type: message.type,
    text: message.text,
    duration: message.duration
  };
  setToasts(prev => [...prev, newToast]);
};

const removeToast = (id) => {
  setToasts(prev => prev.filter(toast => toast.id !== id));
};

useEffect(() => {
  toasts.forEach(toast => {
    if (toast.duration) {
      setTimeout(() => {
        removeToast(toast.id);
      }, toast.duration);
    }
  });
}, [toasts]);

<div className="fixed top-4 right-4 z-50 max-w-sm w-full">
  {toasts.map((toast) => (
    <div
      key={toast.id}
      className="bg-yellow-300 border-8 border-magenta-500 rounded-md p-6 shadow-2xl mb-4 glitch"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {toast.type === 'success' && <CheckCircle size={24} className="text-black" />}
          {toast.type === 'error' && <AlertCircle size={24} className="text-black" />}
          {toast.type === 'warning' && <AlertTriangle size={24} className="text-black" />}
          {toast.type === 'info' && <Info size={24} className="text-black" />}
          <span className="text-black font-black text-lg" style={{ fontFamily: 'Impact' }}>
            {toast.text}
          </span>
        </div>
        <button
          onClick={() => removeToast(toast.id)}
          className="text-black hover:text-red-600 transition-colors"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  ))}
</div>

<div className="flex gap-4 flex-wrap">
  <button
    onClick={() => addToast({
      type: 'success',
      text: '💥 Success! Glitching perfectly!',
      duration: 5000
    })}
    className="px-6 py-3 bg-yellow-300 text-black font-black text-lg border-4 border-magenta-500 rounded-md hover:bg-yellow-400 transition-colors pulse"
    style={{ fontFamily: 'Impact' }}
  >
    Show Success Toast
  </button>
  <button
    onClick={() => addToast({
      type: 'error',
      text: '🔄 Error! System malfunction!',
      duration: 5000
    })}
    className="px-6 py-3 bg-yellow-300 text-black font-black text-lg border-4 border-magenta-500 rounded-md hover:bg-yellow-400 transition-colors pulse"
    style={{ fontFamily: 'Impact' }}
  >
    Show Error Toast
  </button>
</div>`,
    htmlCode: `<!-- Toast Container -->
<div id="toast-container" class="fixed top-4 right-4 z-50 max-w-sm w-full">
  <!-- Toasts will be added here dynamically -->
</div>

<!-- Trigger Buttons -->
<div class="flex gap-4 flex-wrap">
  <button
    onclick="showToast('success', '💥 Success! Glitching perfectly!')"
    class="px-6 py-3 bg-yellow-300 text-black font-black text-lg border-4 border-magenta-500 rounded-md hover:bg-yellow-400 transition-colors pulse"
    style="font-family: 'Impact';"
  >
    Show Success Toast
  </button>
  <button
    onclick="showToast('error', '🔄 Error! System malfunction!')"
    class="px-6 py-3 bg-yellow-300 text-black font-black text-lg border-4 border-magenta-500 rounded-md hover:bg-yellow-400 transition-colors pulse"
    style="font-family: 'Impact';"
  >
    Show Error Toast
  </button>
  <button
    onclick="showToast('warning', '⚠️ Warning! Display corrupted!')"
    class="px-6 py-3 bg-yellow-300 text-black font-black text-lg border-4 border-magenta-500 rounded-md hover:bg-yellow-400 transition-colors pulse"
    style="font-family: 'Impact';"
  >
    Show Warning Toast
  </button>
  <button
    onclick="showToast('info', 'ℹ️ Info! Data stream active!')"
    class="px-6 py-3 bg-yellow-300 text-black font-black text-lg border-4 border-magenta-500 rounded-md hover:bg-yellow-400 transition-colors pulse"
    style="font-family: 'Impact';"
  >
    Show Info Toast
  </button>
</div>`,
    cssCode: `.toast-glitch {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 50;
  max-width: 24rem;
  width: 100%;
}

.toast-glitch .toast {
  background-color: #fde047;
  border: 8px solid #d946ef;
  border-radius: 0.375rem;
  padding: 1.5rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
  animation: glitch 0.4s infinite;
}

.toast-glitch .content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.toast-glitch .text {
  color: #000000;
  font-weight: 900;
  font-size: 1.125rem;
  font-family: 'Impact';
}

.toast-glitch .close {
  color: #000000;
  transition: color 0.3s;
}

.toast-glitch .close:hover {
  color: #dc2626;
}

.toast-glitch .trigger {
  padding: 0.75rem 1.5rem;
  background-color: #fde047;
  color: #000000;
  font-weight: 900;
  font-size: 1.125rem;
  border: 4px solid #d946ef;
  border-radius: 0.375rem;
  transition: background-color 0.3s;
  font-family: 'Impact';
  animation: pulse 0.5s infinite;
}

.toast-glitch .trigger:hover {
  background-color: #facc15;
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
  toast6: {
    name: 'Pulsing Jokerman Toast',
    className: 'fixed top-4 right-4 z-50 max-w-sm w-full',
    toastClassName: 'bg-gradient-to-r from-green-400 to-blue-500 border-8 border-red-600 rounded-xl p-6 shadow-2xl pulse',
    contentClassName: 'flex items-center justify-between',
    textClassName: 'text-white font-black text-lg',
    iconClassName: 'text-white',
    closeClassName: 'text-white hover:text-yellow-300 transition-colors',
    messages: [
      { id: 1, type: 'success', text: '✨ Success! Magic happened!', duration: 5000 },
      { id: 2, type: 'error', text: '💫 Error! Spell backfired!', duration: 5000 },
      { id: 3, type: 'warning', text: '🌟 Warning! Magic unstable!', duration: 5000 },
      { id: 4, type: 'info', text: '🔮 Info! Mystical update!', duration: 5000 }
    ],
    reactCode: `const [toasts, setToasts] = useState([]);

const addToast = (message) => {
  const newToast = {
    id: Date.now(),
    type: message.type,
    text: message.text,
    duration: message.duration
  };
  setToasts(prev => [...prev, newToast]);
};

const removeToast = (id) => {
  setToasts(prev => prev.filter(toast => toast.id !== id));
};

useEffect(() => {
  toasts.forEach(toast => {
    if (toast.duration) {
      setTimeout(() => {
        removeToast(toast.id);
      }, toast.duration);
    }
  });
}, [toasts]);

<div className="fixed top-4 right-4 z-50 max-w-sm w-full">
  {toasts.map((toast) => (
    <div
      key={toast.id}
      className="bg-gradient-to-r from-green-400 to-blue-500 border-8 border-red-600 rounded-xl p-6 shadow-2xl mb-4 pulse"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {toast.type === 'success' && <CheckCircle size={24} className="text-white" />}
          {toast.type === 'error' && <AlertCircle size={24} className="text-white" />}
          {toast.type === 'warning' && <AlertTriangle size={24} className="text-white" />}
          {toast.type === 'info' && <Info size={24} className="text-white" />}
          <span className="text-white font-black text-lg" style={{ fontFamily: 'Jokerman' }}>
            {toast.text}
          </span>
        </div>
        <button
          onClick={() => removeToast(toast.id)}
          className="text-white hover:text-yellow-300 transition-colors"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  ))}
</div>

<div className="flex gap-4 flex-wrap">
  <button
    onClick={() => addToast({
      type: 'success',
      text: '✨ Success! Magic happened!',
      duration: 5000
    })}
    className="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-black text-lg border-4 border-white rounded-xl hover:scale-110 transition-transform bounce"
    style={{ fontFamily: 'Jokerman' }}
  >
    Show Success Toast
  </button>
  <button
    onClick={() => addToast({
      type: 'error',
      text: '💫 Error! Spell backfired!',
      duration: 5000
    })}
    className="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-black text-lg border-4 border-white rounded-xl hover:scale-110 transition-transform bounce"
    style={{ fontFamily: 'Jokerman' }}
  >
    Show Error Toast
  </button>
</div>`,
    htmlCode: `<!-- Toast Container -->
<div id="toast-container" class="fixed top-4 right-4 z-50 max-w-sm w-full">
  <!-- Toasts will be added here dynamically -->
</div>

<!-- Trigger Buttons -->
<div class="flex gap-4 flex-wrap">
  <button
    onclick="showToast('success', '✨ Success! Magic happened!')"
    class="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-black text-lg border-4 border-white rounded-xl hover:scale-110 transition-transform bounce"
    style="font-family: 'Jokerman';"
  >
    Show Success Toast
  </button>
  <button
    onclick="showToast('error', '💫 Error! Spell backfired!')"
    class="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-black text-lg border-4 border-white rounded-xl hover:scale-110 transition-transform bounce"
    style="font-family: 'Jokerman';"
  >
    Show Error Toast
  </button>
  <button
    onclick="showToast('warning', '🌟 Warning! Magic unstable!')"
    class="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-black text-lg border-4 border-white rounded-xl hover:scale-110 transition-transform bounce"
    style="font-family: 'Jokerman';"
  >
    Show Warning Toast
  </button>
  <button
    onclick="showToast('info', '🔮 Info! Mystical update!')"
    class="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-black text-lg border-4 border-white rounded-xl hover:scale-110 transition-transform bounce"
    style="font-family: 'Jokerman';"
  >
    Show Info Toast
  </button>
</div>`,
    cssCode: `.toast-pulse {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 50;
  max-width: 24rem;
  width: 100%;
}

.toast-pulse .toast {
  background: linear-gradient(to right, #4ade80, #3b82f6);
  border: 8px solid #dc2626;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
  animation: pulse 0.5s infinite;
}

.toast-pulse .content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.toast-pulse .text {
  color: #ffffff;
  font-weight: 900;
  font-size: 1.125rem;
  font-family: 'Jokerman';
}

.toast-pulse .close {
  color: #ffffff;
  transition: color 0.3s;
}

.toast-pulse .close:hover {
  color: #fde047;
}

.toast-pulse .trigger {
  padding: 0.75rem 1.5rem;
  background: linear-gradient(to right, #4ade80, #3b82f6);
  color: #ffffff;
  font-weight: 900;
  font-size: 1.125rem;
  border: 4px solid #ffffff;
  border-radius: 0.75rem;
  transition: transform 0.3s;
  font-family: 'Jokerman';
  animation: bounce 0.8s infinite;
}

.toast-pulse .trigger:hover {
  transform: scale(1.1);
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

export function ToastSample() {
  const [selectedToast, setSelectedToast] = useState('toast1');
  const [viewMode, setViewMode] = useState('preview');
  const [codeLanguage, setCodeLanguage] = useState('react');
  const [styleType, setStyleType] = useState('tailwindcss');
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedCss, setCopiedCss] = useState(false);
  const [toasts, setToasts] = useState([]);

  const config = toastConfigs[selectedToast];

  const addToast = (message) => {
    const newToast = {
      id: Date.now(),
      type: message.type,
      text: message.text,
      duration: message.duration
    };
    setToasts(prev => [...prev, newToast]);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  // Auto-remove toasts after their duration
  useEffect(() => {
    toasts.forEach(toast => {
      if (toast.duration) {
        setTimeout(() => {
          removeToast(toast.id);
        }, toast.duration);
      }
    });
  }, [toasts]);

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
        ? `<div className="toast-${selectedToast.slice(-1)}">\n  {/* Toast content */}\n</div>`
        : `<div class="toast-${selectedToast.slice(-1)}">\n  <!-- Toast content -->\n</div>`;
    }
  };

  const renderToastContainer = () => (
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
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={config.toastClassName}
        >
          <div className={config.contentClassName}>
            <div className="flex items-center gap-3">
              {toast.type === 'success' && <CheckCircle size={24} className={config.iconClassName} />}
              {toast.type === 'error' && <AlertCircle size={24} className={config.iconClassName} />}
              {toast.type === 'warning' && <AlertTriangle size={24} className={config.iconClassName} />}
              {toast.type === 'info' && <Info size={24} className={config.iconClassName} />}
              <span className={config.textClassName}>
                {toast.text}
              </span>
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className={config.closeClassName}
            >
              <X size={20} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  const renderTriggerButtons = () => (
    <div className="flex gap-4 flex-wrap justify-center">
      {config.messages.map((message) => (
        <button
          key={message.id}
          onClick={() => addToast(message)}
          className={`px-6 py-3 font-black text-lg border-4 transition-all ${
            selectedToast === 'toast1' ? 'bg-lime-400 text-black border-black rounded-full hover:bg-yellow-300 shake' :
            selectedToast === 'toast2' ? 'bg-gradient-to-r from-pink-500 to-cyan-400 text-black border-white rounded-lg hover:scale-110 pulse' :
            selectedToast === 'toast3' ? 'bg-purple-600 text-yellow-300 border-yellow-300 rounded-2xl hover:bg-pink-500 wobble' :
            selectedToast === 'toast4' ? 'bg-gradient-to-t from-cyan-400 to-pink-400 text-black border-black rounded-full hover:scale-105 shake' :
            selectedToast === 'toast5' ? 'bg-yellow-300 text-black border-magenta-500 rounded-md hover:bg-yellow-400 pulse' :
            'bg-gradient-to-r from-green-400 to-blue-500 text-white border-white rounded-xl hover:scale-110 bounce'
          }`}
        >
          Show {message.type.charAt(0).toUpperCase() + message.type.slice(1)} Toast
        </button>
      ))}
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
            🍞 DUMBUI TOASTS 🍞
          </h1>
          <p
            className="text-xl md:text-2xl font-bold"
            style={{ fontFamily: FONTS.TIMES_NEW_ROMAN, color: COLORS.CYAN }}
          >
            The MOST ANNOYING Notifications Ever!
          </p>
        </div>

        <div className="mb-6 bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-500 p-4 border-8 border-red-600 transform rotate-1">
          <div className="flex flex-wrap gap-3 justify-center">
            {Object.keys(toastConfigs).map((toast) => (
              <button
                key={toast}
                onClick={() => {
                  setSelectedToast(toast);
                  setToasts([]);
                }}
                className={`px-4 py-2 font-black text-sm md:text-lg border-4 transition-all ${
                  selectedToast === toast
                    ? 'bg-lime-400 text-black border-black scale-110 shake'
                    : 'bg-purple-600 text-yellow-300 border-yellow-300 hover:scale-105'
                }`}
                style={{ fontFamily: FONTS.PAPYRUS }}
              >
                {toastConfigs[toast].name.toUpperCase()}
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
              
              {/* Toast Container */}
              {renderToastContainer()}

              {/* Trigger Buttons */}
              {renderTriggerButtons()}

              <div className="mt-6 text-center">
                <p className="text-white font-bold text-lg" style={{ fontFamily: FONTS.COMIC_SANS }}>
                  Active Toasts: <span className="text-yellow-300">{toasts.length}</span>
                </p>
                <p className="text-white font-bold text-lg mt-2" style={{ fontFamily: FONTS.COMIC_SANS }}>
                  Toasts auto-dismiss after 5 seconds, or click X to close!
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
            ⚠️ WARNING: These toasts may cause NOTIFICATION OVERLOAD! ⚠️
          </p>
        </div>
      </div>
    </div>
  );
}