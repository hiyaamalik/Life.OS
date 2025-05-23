import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import Home from "./pages/Home";
import Survey from "./pages/Survey";

// SparkleButton Component
function SparkleButton({ text, onClick }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 500);
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

// Auth Box Component
function AuthBox({ activeForm, setActiveForm, setIsAuthenticated }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAuthenticated(true);
    if (activeForm === "login") {
      navigate("/home");
    } else if (activeForm === "signup") {
      navigate("/survey");
    }
  };

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[calc(50%-0.5cm)] bg-white/20 backdrop-blur-lg p-10 rounded-3xl shadow-2xl flex flex-col items-center w-96 space-y-6">
      <h2 className="text-3xl font-bold text-purple-700">
        {activeForm === "login" ? "Login" : "Sign Up"}
      </h2>

      {activeForm === "signup" && (
        <input
          type="text"
          placeholder="Name"
          className="w-full px-4 py-3 rounded-xl bg-white/60 text-purple-800 placeholder-purple-500"
        />
      )}

      <input
        type="email"
        placeholder="Email"
        className="w-full px-4 py-3 rounded-xl bg-white/60 text-purple-800 placeholder-purple-500"
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full px-4 py-3 rounded-xl bg-white/60 text-purple-800 placeholder-purple-500"
      />

      <button
        type="submit"
        onClick={handleSubmit}
        className="px-6 py-3 mt-4 bg-gradient-to-r from-pink-400 to-purple-500 text-white rounded-xl font-bold hover:scale-105 transition"
      >
        {activeForm === "login" ? "Login" : "Sign Up"}
      </button>

      <button
        className="mt-4 text-sm text-pink-600 hover:underline"
        onClick={() => setActiveForm(null)}
      >
        Close
      </button>
    </div>
  );
}

// Landing Page Component
function Landing() {
  const [videoEnded, setVideoEnded] = useState(false);
  const [activeForm, setActiveForm] = useState(null);
  // Removed unused variables:
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const navigate = useNavigate();

  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  // Create a setIsAuthenticated function that we'll use in AuthBox
  const setIsAuthenticated = (value) => {
    // We'll keep this function but won't store the state here
    // This way the AuthBox component can still call it without warnings
    console.log("Authentication state updated:", value);
    // If you need to use this value later, consider moving it to UserContext
  };

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
          style={{ backgroundImage: `url(/final-screen.png)` }}
          className="w-screen h-screen bg-cover bg-center"
        >
          <div className="flex flex-col items-center mt-[15cm]">
            <div className="flex space-x-8">
              <SparkleButton text="Login" onClick={() => setActiveForm("login")} />
              <SparkleButton text="Sign Up" onClick={() => setActiveForm("signup")} />
            </div>
          </div>
          {activeForm && (
            <AuthBox
              activeForm={activeForm}
              setActiveForm={setActiveForm}
              setIsAuthenticated={setIsAuthenticated}
            />
          )}
        </div>
      )}
    </div>
  );
}

// We need to wrap our Landing component in a Route to properly use useNavigate
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/survey" element={<Survey />} />
    </Routes>
  );
}

// Main App Component
function App() {
  return (
    <UserProvider>
      <Router>
        <AppRoutes />
      </Router>
    </UserProvider>
  );
}

export default App;