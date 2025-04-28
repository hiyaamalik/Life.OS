import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import SparkleButton from "../components/DreamyButton"; // Your SparkleButton component

const Landing = () => {
  const [activeForm, setActiveForm] = useState(null);
  const { login } = useUser();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/home"); // Navigate to Home after login
  };

  return (
    <div className="landing-container">
      <div className="buttons">
        <SparkleButton text="Login" onClick={handleLogin} />
        <SparkleButton text="Sign Up" onClick={() => setActiveForm("signup")} />
      </div>

      {activeForm === "signup" && (
        <div className="signup-form">
          {/* Your signup form content */}
          <p>Sign up to choose your theme!</p>
        </div>
      )}
    </div>
  );
};

export default Landing;
