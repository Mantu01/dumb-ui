import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy } from 'lucide-react';

const FONTS = {
  COMIC_SANS: '"Comic Sans MS", cursive',
  PAPYRUS: 'Papyrus, fantasy',
  TIMES_NEW_ROMAN: '"Times New Roman", serif',
  IMPACT: 'Impact, sans-serif',
  BRUSH_SCRIPT: '"Brush Script MT", cursive'
};

const COLORS = {
  YELLOW: '#FFFF00',
  CYAN: '#00FFFF',
  MAGENTA: '#FF00FF',
  LIME: '#00FF00',
  HOT_PINK: '#FF69B4',
  ORANGE: '#FFA500'
};

// Sample image URLs for avatars
const AVATAR_IMAGES = {
  image1: 'https://i1.sndcdn.com/artworks-UzgZSA7dcfqTcIOp-0Z1gCA-t500x500.jpg',
  image2: 'https://i.pinimg.com/736x/41/82/2e/41822ec05e9340128e3ba2edc19dea91.jpg',
  image3: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNF8dB0ZeJODcp7qc2igl6Jp7gr-RXN6UJ-38A7bvxTZtWZMAt-YQKOqN19uICwjXBAio&usqp=CAU',
  image4: 'https://pbs.twimg.com/profile_images/1253702194546663424/M0Toxvvl_400x400.jpg',
  image5: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
  image6: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150&h=150&fit=crop&crop=face'
};

const avatarConfigs = {
  avatar1: {
    name: 'Shaky Comic Avatar',
    className: 'w-32 h-32 bg-lime-400 border-8 border-black shake rounded-full overflow-hidden',
    imageUrl: AVATAR_IMAGES.image1,
    reactCode: `<div
  className="w-32 h-32 bg-lime-400 border-8 border-black shake rounded-full overflow-hidden"
  style={{ fontFamily: 'Comic Sans MS' }}
>
  <img 
    src="https://i1.sndcdn.com/artworks-UzgZSA7dcfqTcIOp-0Z1gCA-t500x500.jpg" 
    alt="Avatar" 
    className="w-full h-full object-cover"
  />
</div>`,
    htmlCode: `<div
  class="w-32 h-32 bg-lime-400 border-8 border-black shake rounded-full overflow-hidden"
  style="font-family: 'Comic Sans MS';"
>
  <img 
    src="https://i1.sndcdn.com/artworks-UzgZSA7dcfqTcIOp-0Z1gCA-t500x500.jpg" 
    alt="Avatar" 
    class="w-full h-full object-cover"
  />
</div>`,
    cssCode: `.avatar-shaky {
  width: 8rem;
  height: 8rem;
  background-color: #84cc16;
  border: 8px solid #000000;
  border-radius: 50%;
  overflow: hidden;
  font-family: 'Comic Sans MS';
  animation: shake 0.3s infinite;
}

.avatar-shaky img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@keyframes shake {
  0%, 100% { transform: translateX(0) rotate(0deg); }
  25% { transform: translateX(-10px) rotate(-10deg); }
  75% { transform: translateX(10px) rotate(10deg); }
}`
  },
  avatar2: {
    name: 'Spinning Papyrus Avatar',
    className: 'w-32 h-32 bg-gradient-to-br from-pink-500 to-yellow-400 border-4 border-cyan-400 rounded-lg overflow-hidden spin',
    imageUrl: AVATAR_IMAGES.image2,
    reactCode: `<div
  className="w-32 h-32 bg-gradient-to-br from-pink-500 to-yellow-400 border-4 border-cyan-400 rounded-lg overflow-hidden spin"
  style={{ fontFamily: 'Papyrus' }}
>
  <img 
    src="https://i.pinimg.com/736x/41/82/2e/41822ec05e9340128e3ba2edc19dea91.jpg" 
    alt="Avatar" 
    className="w-full h-full object-cover"
  />
</div>`,
    htmlCode: `<div
  class="w-32 h-32 bg-gradient-to-br from-pink-500 to-yellow-400 border-4 border-cyan-400 rounded-lg overflow-hidden spin"
  style="font-family: 'Papyrus';"
>
  <img 
    src="https://i.pinimg.com/736x/41/82/2e/41822ec05e9340128e3ba2edc19dea91.jpg" 
    alt="Avatar" 
    class="w-full h-full object-cover"
  />
</div>`,
    cssCode: `.avatar-spin {
  width: 8rem;
  height: 8rem;
  background: linear-gradient(135deg, #ec4899, #f59e0b);
  border: 4px solid #22d3ee;
  border-radius: 0.5rem;
  overflow: hidden;
  font-family: 'Papyrus';
  animation: spin 1s linear infinite;
}

.avatar-spin img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}`
  },
  avatar3: {
    name: 'Pulsing Rainbow Avatar',
    className: 'w-32 h-32 bg-red-500 border-8 border-green-500 rounded-full overflow-hidden pulse',
    imageUrl: AVATAR_IMAGES.image3,
    reactCode: `<div
  className="w-32 h-32 bg-red-500 border-8 border-green-500 rounded-full overflow-hidden pulse"
  style={{ fontFamily: 'Impact' }}
>
  <img 
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNF8dB0ZeJODcp7qc2igl6Jp7gr-RXN6UJ-38A7bvxTZtWZMAt-YQKOqN19uICwjXBAio&usqp=CAU" 
    alt="Avatar" 
    className="w-full h-full object-cover"
  />
</div>`,
    htmlCode: `<div
  class="w-32 h-32 bg-red-500 border-8 border-green-500 rounded-full overflow-hidden pulse"
  style="font-family: 'Impact';"
>
  <img 
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNF8dB0ZeJODcp7qc2igl6Jp7gr-RXN6UJ-38A7bvxTZtWZMAt-YQKOqN19uICwjXBAio&usqp=CAU" 
    alt="Avatar" 
    class="w-full h-full object-cover"
  />
</div>`,
    cssCode: `.avatar-pulse {
  width: 8rem;
  height: 8rem;
  background-color: #ef4444;
  border: 8px solid #22c55e;
  border-radius: 50%;
  overflow: hidden;
  font-family: 'Impact';
  animation: pulse 0.5s infinite;
}

.avatar-pulse img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}`
  },
  avatar4: {
    name: 'Bouncing Times Avatar',
    className: 'w-32 h-32 bg-purple-600 border-4 border-yellow-300 rounded-3xl overflow-hidden bounce',
    imageUrl: AVATAR_IMAGES.image4,
    reactCode: `<div
  className="w-32 h-32 bg-purple-600 border-4 border-yellow-300 rounded-3xl overflow-hidden bounce"
  style={{ fontFamily: 'Times New Roman' }}
>
  <img 
    src="https://pbs.twimg.com/profile_images/1253702194546663424/M0Toxvvl_400x400.jpg" 
    alt="Avatar" 
    className="w-full h-full object-cover"
  />
</div>`,
    htmlCode: `<div
  class="w-32 h-32 bg-purple-600 border-4 border-yellow-300 rounded-3xl overflow-hidden bounce"
  style="font-family: 'Times New Roman';"
>
  <img 
    src="https://pbs.twimg.com/profile_images/1253702194546663424/M0Toxvvl_400x400.jpg" 
    alt="Avatar" 
    class="w-full h-full object-cover"
  />
</div>`,
    cssCode: `.avatar-bounce {
  width: 8rem;
  height: 8rem;
  background-color: #9333ea;
  border: 4px solid #fde047;
  border-radius: 1.5rem;
  overflow: hidden;
  font-family: 'Times New Roman';
  animation: bounce 0.8s infinite;
}

.avatar-bounce img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}`
  },
  avatar5: {
    name: 'Wobbly Brush Avatar',
    className: 'w-32 h-32 bg-gradient-to-t from-cyan-400 to-pink-400 border-6 border-orange-500 rounded-full overflow-hidden wobble',
    imageUrl: AVATAR_IMAGES.image5,
    reactCode: `<div
  className="w-32 h-32 bg-gradient-to-t from-cyan-400 to-pink-400 border-6 border-orange-500 rounded-full overflow-hidden wobble"
  style={{ fontFamily: 'Brush Script MT' }}
>
  <img 
    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face" 
    alt="Avatar" 
    className="w-full h-full object-cover"
  />
</div>`,
    htmlCode: `<div
  class="w-32 h-32 bg-gradient-to-t from-cyan-400 to-pink-400 border-6 border-orange-500 rounded-full overflow-hidden wobble"
  style="font-family: 'Brush Script MT';"
>
  <img 
    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face" 
    alt="Avatar" 
    class="w-full h-full object-cover"
  />
</div>`,
    cssCode: `.avatar-wobble {
  width: 8rem;
  height: 8rem;
  background: linear-gradient(to top, #22d3ee, #ec4899);
  border: 6px solid #f97316;
  border-radius: 50%;
  overflow: hidden;
  font-family: 'Brush Script MT';
  animation: wobble 0.7s infinite;
}

.avatar-wobble img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@keyframes wobble {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-15deg); }
  75% { transform: rotate(15deg); }
}`
  },
  avatar6: {
    name: 'Glitchy Mixed Avatar',
    className: 'w-32 h-32 bg-yellow-300 border-8 border-magenta-500 rounded-md overflow-hidden glitch',
    imageUrl: AVATAR_IMAGES.image6,
    reactCode: `<div
  className="w-32 h-32 bg-yellow-300 border-8 border-magenta-500 rounded-md overflow-hidden glitch"
  style={{ fontFamily: 'Comic Sans MS' }}
>
  <img 
    src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150&h=150&fit=crop&crop=face" 
    alt="Avatar" 
    className="w-full h-full object-cover"
  />
</div>`,
    htmlCode: `<div
  class="w-32 h-32 bg-yellow-300 border-8 border-magenta-500 rounded-md overflow-hidden glitch"
  style="font-family: 'Comic Sans MS';"
>
  <img 
    src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150&h=150&fit=crop&crop=face" 
    alt="Avatar" 
    class="w-full h-full object-cover"
  />
</div>`,
    cssCode: `.avatar-glitch {
  width: 8rem;
  height: 8rem;
  background-color: #fde047;
  border: 8px solid #d946ef;
  border-radius: 0.375rem;
  overflow: hidden;
  font-family: 'Comic Sans MS';
  animation: glitch 0.4s infinite;
  position: relative;
}

.avatar-glitch img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@keyframes glitch {
  0% { transform: translate(0); }
  20% { transform: translate(-5px, 5px); }
  40% { transform: translate(-5px, -5px); }
  60% { transform: translate(5px, 5px); }
  80% { transform: translate(5px, -5px); }
  100% { transform: translate(0); }
}`
  }
};

export function AvatarSample() {
  const [selectedAvatar, setSelectedAvatar] = useState('avatar1');
  const [viewMode, setViewMode] = useState('preview');
  const [codeLanguage, setCodeLanguage] = useState('react');
  const [styleType, setStyleType] = useState('tailwindcss');
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedCss, setCopiedCss] = useState(false);

  const config = avatarConfigs[selectedAvatar];

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
        ? `<div className="avatar-${selectedAvatar.slice(-1)}">\n  <img src="${config.imageUrl}" alt="Avatar" className="w-full h-full object-cover" />\n</div>`
        : `<div class="avatar-${selectedAvatar.slice(-1)}">\n  <img src="${config.imageUrl}" alt="Avatar" class="w-full h-full object-cover" />\n</div>`;
    }
  };

  return (
    <div className="min-h-screen p-4 md:p-8" style={{ 
      background: 'linear-gradient(135deg, #FF00FF 0%, #00FFFF 50%, #FFFF00 100%)',
      fontFamily: FONTS.COMIC_SANS
    }}>
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0) rotate(0deg); }
          25% { transform: translateX(-10px) rotate(-10deg); }
          75% { transform: translateX(10px) rotate(10deg); }
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
          50% { transform: translateY(-20px); }
        }
        @keyframes wobble {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-15deg); }
          75% { transform: rotate(15deg); }
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
        .shake { animation: shake 0.3s infinite; }
        .spin { animation: spin 1s linear infinite; }
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
            🎭 DUMBUI AVATARS 🎭
          </h1>
          <p
            className="text-xl md:text-2xl font-bold"
            style={{ fontFamily: FONTS.TIMES_NEW_ROMAN, color: COLORS.CYAN }}
          >
            The MOST ANNOYING Avatars Ever Created!
          </p>
        </div>

        <div className="mb-6 bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-500 p-4 border-8 border-red-600 transform rotate-1">
          <div className="flex flex-wrap gap-3 justify-center">
            {Object.keys(avatarConfigs).map((avatar) => (
              <button
                key={avatar}
                onClick={() => setSelectedAvatar(avatar)}
                className={`px-4 py-2 font-black text-sm md:text-lg border-4 transition-all ${
                  selectedAvatar === avatar
                    ? 'bg-lime-400 text-black border-black scale-110 shake'
                    : 'bg-purple-600 text-yellow-300 border-yellow-300 hover:scale-105'
                }`}
                style={{ fontFamily: FONTS.PAPYRUS }}
              >
                {avatarConfigs[avatar].name.toUpperCase()}
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
                style={{ fontFamily: config.reactCode.includes('Comic Sans') ? FONTS.COMIC_SANS : 
                         config.reactCode.includes('Papyrus') ? FONTS.PAPYRUS :
                         config.reactCode.includes('Times New Roman') ? FONTS.TIMES_NEW_ROMAN :
                         config.reactCode.includes('Impact') ? FONTS.IMPACT : FONTS.BRUSH_SCRIPT }}
              >
                <img 
                  src={config.imageUrl} 
                  alt="Avatar" 
                  className="w-full h-full object-cover"
                />
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
            ⚠️ WARNING: These avatars may cause SEIZURES! ⚠️
          </p>
        </div>
      </div>
    </div>
  );
}