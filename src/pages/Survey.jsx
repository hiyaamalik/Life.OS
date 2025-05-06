import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const Survey = () => {
  const { setUserTheme } = useUser();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({});

  const handleAnswerChange = (question, answer) => {
    setAnswers((prevAnswers) => ({ ...prevAnswers, [question]: answer }));
  };

  const handleNext = () => {
    if (step < 5) {
      setStep(step + 1);
    } else {
      const themeCount = {
        NatureCalm: 0,
        VintageCottagecore: 0,
        DisneyMagicalRealm: 0,
        SoftGirlEra: 0,
        MinimalistZen: 0,
        DarkAcademia: 0,
        BossBabeEmpire: 0,
      };

      Object.values(answers).forEach((answer) => {
        themeCount[answer]++;
      });

      const finalTheme = Object.keys(themeCount).reduce((a, b) =>
        themeCount[a] > themeCount[b] ? a : b
      );

      setUserTheme(finalTheme);
      navigate("/home");
    }
  };

  const questionSets = [
    {
      title: "What is your ideal environment for productivity?",
      name: "productivity",
      options: [
        { label: "Nature-filled escape", value: "NatureCalm" },
        { label: "Cozy, vintage retreat", value: "VintageCottagecore" },
        { label: "Magical, fairy-tale world", value: "DisneyMagicalRealm" },
        { label: "Soft, pastel comfort", value: "SoftGirlEra" },
        { label: "Minimalist, balanced space", value: "MinimalistZen" },
        { label: "Dark, intellectual vibe", value: "DarkAcademia" },
        { label: "Bold, ambitious environment", value: "BossBabeEmpire" },
      ]
    },
    {
      title: "Which of these vibes describes your aesthetic?",
      name: "aesthetic",
      options: [
        { label: "Tranquil and natural", value: "NatureCalm" },
        { label: "Vintage, rustic charm", value: "VintageCottagecore" },
        { label: "Whimsical and dreamy", value: "DisneyMagicalRealm" },
        { label: "Soft, sweet and youthful", value: "SoftGirlEra" },
        { label: "Clean and uncluttered", value: "MinimalistZen" },
        { label: "Mysterious and scholarly", value: "DarkAcademia" },
        { label: "Luxurious and empowering", value: "BossBabeEmpire" },
      ]
    },
    {
      title: "How would you prefer your workspace to feel?",
      name: "workspace",
      options: [
        { label: "Surrounded by nature", value: "NatureCalm" },
        { label: "Cozy and rustic", value: "VintageCottagecore" },
        { label: "Full of magic", value: "DisneyMagicalRealm" },
        { label: "Soft, pastel and creative", value: "SoftGirlEra" },
        { label: "Zen and minimalistic", value: "MinimalistZen" },
        { label: "Intellectual, vintage library", value: "DarkAcademia" },
        { label: "Sleek and motivational", value: "BossBabeEmpire" },
      ]
    },
    {
      title: "Which colors do you prefer?",
      name: "colors",
      options: [
        { label: "Greens, browns, light blues", value: "NatureCalm" },
        { label: "Pinks, greens, creamy whites", value: "VintageCottagecore" },
        { label: "Soft purples, pinks, golds", value: "DisneyMagicalRealm" },
        { label: "Pastel pinks and blues", value: "SoftGirlEra" },
        { label: "Soft grays and earth tones", value: "MinimalistZen" },
        { label: "Dark greens, maroons", value: "DarkAcademia" },
        { label: "Black, gold, deep pink", value: "BossBabeEmpire" },
      ]
    },
    {
      title: "What inspires your productivity?",
      name: "inspiration", 
      options: [
        { label: "Peaceful nature", value: "NatureCalm" },
        { label: "Cozy, vintage feel", value: "VintageCottagecore" },
        { label: "Magic and wonder", value: "DisneyMagicalRealm" },
        { label: "Soft, welcoming spaces", value: "SoftGirlEra" },
        { label: "Clean, minimal surroundings", value: "MinimalistZen" },
        { label: "Deep thinking, dark spaces", value: "DarkAcademia" },
        { label: "Powerful, dynamic environment", value: "BossBabeEmpire" },
      ]
    }
  ];

  const currentQuestion = questionSets[step - 1];

  return (
    <div className="min-h-screen w-screen bg-gradient-to-r from-purple-100 to-pink-100 flex items-center justify-center px-4 py-6 overflow-hidden">
      <div className="bg-white/80 backdrop-blur-md p-6 md:p-10 rounded-xl shadow-xl w-full max-w-md mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-purple-700 mb-4 text-center">Customize Your Experience</h1>
        
        <div className="flex justify-center mb-6">
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((num) => (
              <div 
                key={num} 
                className={`w-3 h-3 rounded-full ${step >= num ? 'bg-purple-500' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl text-purple-600 text-center mb-4">{currentQuestion.title}</h2>
          <div className="space-y-3">
            {currentQuestion.options.map(({ label, value }) => (
              <div key={value} className="flex items-center">
                <input
                  type="radio"
                  name={currentQuestion.name}
                  value={value}
                  id={`${currentQuestion.name}-${value}`}
                  className="mr-3"
                  checked={answers[currentQuestion.name] === value}
                  onChange={() => handleAnswerChange(currentQuestion.name, value)}
                />
                <label htmlFor={`${currentQuestion.name}-${value}`} className="text-purple-700">{label}</label>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between mt-8">
          <button
            className="px-4 md:px-6 py-2 bg-gray-300 text-purple-700 rounded-lg font-medium hover:bg-gray-400 transition disabled:opacity-50"
            onClick={() => step > 1 && setStep(step - 1)}
            disabled={step === 1}
          >
            Back
          </button>
          <button
            className="px-4 md:px-6 py-2 bg-gradient-to-r from-pink-400 to-purple-500 text-white rounded-lg font-medium hover:shadow-lg transition"
            onClick={handleNext}
            disabled={!answers[currentQuestion.name]}
          >
            {step < 5 ? "Next" : "Get Started"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Survey;