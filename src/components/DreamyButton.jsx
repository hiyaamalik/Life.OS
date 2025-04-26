// components/DreamyButton.jsx
import { useState } from "react";

function DreamyButton({ text, onClick }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 500); // Sparkle for 0.5s
    if (onClick) onClick();
  };

  return (
    <button
      onClick={handleClick}
      className={`relative px-8 py-3 bg-white/10 backdrop-blur-md text-purple-700 font-semibold rounded-2xl text-lg border-2 border-pink-300
      hover:border-purple-400 shadow-lg hover:shadow-pink-400 
      transition ease-in-out duration-300
      ${clicked ? 'animate-sparkle' : 'hover:animate-glitch'}
      `}
    >
      {text}
    </button>
  );
}
  


export default DreamyButton;
