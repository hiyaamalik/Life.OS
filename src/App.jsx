import { useState } from "react";

function App() {
  const [videoEnded, setVideoEnded] = useState(false);

  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  // SparkleButton component definition
  function SparkleButton({ text, onClick }) {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 500); // sparkle lasts 0.5s
      if (onClick) onClick();
    };

    return (
      <button
        onClick={handleClick}
        className={`relative px-8 py-3 bg-white/10 backdrop-blur-md text-purple-700 font-semibold rounded-2xl text-lg border-2 border-pink-300
        hover:border-purple-400 shadow-lg hover:shadow-pink-400 
        transition ease-in-out duration-300
        ${clicked ? 'animate-sparkle' : 'hover:animate-glitch'}`}
      >
        {text}
      </button>
    );
  }

  return (
    <div className="w-screen h-screen overflow-hidden flex items-center justify-center relative">
      {!videoEnded ? (
        <video
          src="/landing.mp4"
          autoPlay
          muted
          onEnded={handleVideoEnd}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      ) : (
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: "url('/final-screen.png')" }}
        >
          <div className="flex flex-col items-center mt-[15cm]"> {/* Updated margin-top */}
            <div className="flex space-x-8">
              <SparkleButton text="Login" onClick={() => console.log('Login clicked')} />
              <SparkleButton text="Sign Up" onClick={() => console.log('Sign Up clicked')} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
