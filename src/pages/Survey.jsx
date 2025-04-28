import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext"; // Fixed import path

const Survey = () => {
  const { setUserTheme } = useUser();
  const navigate = useNavigate();
  const [selectedTheme, setSelectedTheme] = useState("defaultTheme");
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({});

  const handleAnswerChange = (question, answer) => {
    setAnswers((prevAnswers) => ({ ...prevAnswers, [question]: answer }));
  };

  const handleNext = () => {
    if (step < 5) {
      setStep(step + 1);
    } else {
      // Determine final theme based on answers
      const themeCount = {
        NatureCalm: 0,
        VintageCottagecore: 0,
        DisneyMagicalRealm: 0,
        SoftGirlEra: 0,
        MinimalistZen: 0,
        DarkAcademia: 0,
        BossBabeEmpire: 0,
      };

      // Tally answers and update theme counts
      Object.values(answers).forEach((answer) => {
        themeCount[answer]++;
      });

      const finalTheme = Object.keys(themeCount).reduce((a, b) =>
        themeCount[a] > themeCount[b] ? a : b
      );

      setUserTheme(finalTheme);
      // Navigate to home page
      navigate("/home");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 to-pink-100 flex items-center justify-center">
      <div className="bg-white/80 backdrop-blur-md p-10 rounded-xl shadow-xl max-w-lg w-full">
        <h1 className="text-3xl font-bold text-purple-700 mb-6">Customize Your Experience</h1>

        {step === 1 && (
          <div className="space-y-6">
            <h2 className="text-xl text-purple-600">What is your ideal environment for productivity?</h2>
            <div className="space-y-4">
              {[
                { label: "Nature-filled escape", value: "NatureCalm" },
                { label: "Cozy, vintage retreat", value: "VintageCottagecore" },
                { label: "Magical, fairy-tale world", value: "DisneyMagicalRealm" },
                { label: "Soft, pastel comfort", value: "SoftGirlEra" },
                { label: "Minimalist, balanced space", value: "MinimalistZen" },
                { label: "Dark, intellectual vibe", value: "DarkAcademia" },
                { label: "Bold, ambitious environment", value: "BossBabeEmpire" },
              ].map(({ label, value }) => (
                <div key={value} className="flex items-center">
                  <input
                    type="radio"
                    name="productivity"
                    value={value}
                    id={value}
                    className="mr-2"
                    onChange={() => handleAnswerChange("productivity", value)}
                  />
                  <label htmlFor={value} className="text-purple-700">{label}</label>
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-xl text-purple-600">Which of these vibes describes your aesthetic?</h2>
            <div className="space-y-4">
              {[
                { label: "Tranquil and natural", value: "NatureCalm" },
                { label: "Vintage, rustic charm", value: "VintageCottagecore" },
                { label: "Whimsical and dreamy", value: "DisneyMagicalRealm" },
                { label: "Soft, sweet and youthful", value: "SoftGirlEra" },
                { label: "Clean and uncluttered", value: "MinimalistZen" },
                { label: "Mysterious and scholarly", value: "DarkAcademia" },
                { label: "Luxurious and empowering", value: "BossBabeEmpire" },
              ].map(({ label, value }) => (
                <div key={value} className="flex items-center">
                  <input
                    type="radio"
                    name="aesthetic"
                    value={value}
                    id={value}
                    className="mr-2"
                    onChange={() => handleAnswerChange("aesthetic", value)}
                  />
                  <label htmlFor={value} className="text-purple-700">{label}</label>
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <h2 className="text-xl text-purple-600">How would you prefer your workspace to feel?</h2>
            <div className="space-y-4">
              {[
                { label: "Surrounded by nature", value: "NatureCalm" },
                { label: "Cozy and rustic", value: "VintageCottagecore" },
                { label: "Full of magic", value: "DisneyMagicalRealm" },
                { label: "Soft, pastel and creative", value: "SoftGirlEra" },
                { label: "Zen and minimalistic", value: "MinimalistZen" },
                { label: "Intellectual, vintage library", value: "DarkAcademia" },
                { label: "Sleek and motivational", value: "BossBabeEmpire" },
              ].map(({ label, value }) => (
                <div key={value} className="flex items-center">
                  <input
                    type="radio"
                    name="workspace"
                    value={value}
                    id={value}
                    className="mr-2"
                    onChange={() => handleAnswerChange("workspace", value)}
                  />
                  <label htmlFor={value} className="text-purple-700">{label}</label>
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6">
            <h2 className="text-xl text-purple-600">Which colors do you prefer?</h2>
            <div className="space-y-4">
              {[
                { label: "Greens, browns, light blues", value: "NatureCalm" },
                { label: "Pinks, greens, creamy whites", value: "VintageCottagecore" },
                { label: "Soft purples, pinks, golds", value: "DisneyMagicalRealm" },
                { label: "Pastel pinks and blues", value: "SoftGirlEra" },
                { label: "Soft grays and earth tones", value: "MinimalistZen" },
                { label: "Dark greens, maroons", value: "DarkAcademia" },
                { label: "Black, gold, deep pink", value: "BossBabeEmpire" },
              ].map(({ label, value }) => (
                <div key={value} className="flex items-center">
                  <input
                    type="radio"
                    name="colors"
                    value={value}
                    id={value}
                    className="mr-2"
                    onChange={() => handleAnswerChange("colors", value)}
                  />
                  <label htmlFor={value} className="text-purple-700">{label}</label>
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="space-y-6">
            <h2 className="text-xl text-purple-600">What inspires your productivity?</h2>
            <div className="space-y-4">
              {[
                { label: "Peaceful nature", value: "NatureCalm" },
                { label: "Cozy, vintage feel", value: "VintageCottagecore" },
                { label: "Magic and wonder", value: "DisneyMagicalRealm" },
                { label: "Soft, welcoming spaces", value: "SoftGirlEra" },
                { label: "Clean, minimal surroundings", value: "MinimalistZen" },
                { label: "Deep thinking, dark spaces", value: "DarkAcademia" },
                { label: "Powerful, dynamic environment", value: "BossBabeEmpire" },
              ].map(({ label, value }) => (
                <div key={value} className="flex items-center">
                  <input
                    type="radio"
                    name="inspiration"
                    value={value}
                    id={value}
                    className="mr-2"
                    onChange={() => handleAnswerChange("inspiration", value)}
                  />
                  <label htmlFor={value} className="text-purple-700">{label}</label>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex justify-between mt-8">
          <button
            className="px-6 py-2 bg-gray-300 text-purple-700 rounded-lg font-medium hover:bg-gray-400 transition"
            onClick={() => step > 1 && setStep(step - 1)}
            disabled={step === 1}
          >
            Back
          </button>
          <button
            className="px-6 py-2 bg-gradient-to-r from-pink-400 to-purple-500 text-white rounded-lg font-medium hover:shadow-lg transition"
            onClick={handleNext}
          >
            {step < 5 ? "Next" : "Get Started"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Survey;
