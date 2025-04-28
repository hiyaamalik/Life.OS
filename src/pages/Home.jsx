import { useState, useEffect } from "react";
import { useUser } from "../context/UserContext";

const Home = () => {
  const { theme, isAuthenticated } = useUser();
  const [greeting, setGreeting] = useState("");

  // Generate appropriate greeting based on time of day
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good Morning");
    else if (hour < 18) setGreeting("Good Afternoon");
    else setGreeting("Good Evening");
  }, []);

  // Theme-based styling
  const getThemeStyles = () => {
    switch (theme) {
      case 'oceanTheme':
        return {
          background: 'bg-gradient-to-r from-blue-100 to-teal-100',
          accent: 'from-blue-400 to-teal-500',
          text: 'text-blue-800',
          card: 'bg-white/70'
        };
      default: // defaultTheme - Tangled inspired
        return {
          background: 'bg-gradient-to-r from-purple-100 to-pink-100',
          accent: 'from-pink-400 to-purple-500',
          text: 'text-purple-700',
          card: 'bg-white/70'
        };
    }
  };

  const styles = getThemeStyles();

  return (
    <div className={`min-h-screen ${styles.background} flex flex-col items-center justify-center`}>
      {/* Header */}
      <header className="container mx-auto mb-12 flex justify-between items-center w-full">
        <h1 className={`text-4xl font-bold ${styles.text}`}>Life.OS</h1>
        <div className="flex space-x-4">
          <button className={`px-4 py-2 rounded-lg bg-gradient-to-r ${styles.accent} text-white`}>
            Settings
          </button>
          <button className="px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm text-gray-700">
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto w-full text-center">
        {/* Welcome Section */}
        <section className={`${styles.card} backdrop-blur-md p-8 rounded-2xl shadow-xl mb-10`}>
          <h2 className={`text-3xl font-bold ${styles.text} mb-4`}>
            {greeting}, User!
          </h2>
          <p className={`${styles.text} mb-6 opacity-80`}>
            Welcome to your Life.OS dashboard. Here's your personalized space for productivity and life management.
          </p>
          <div className="flex items-center justify-center">
            <div className={`h-3 w-3 rounded-full bg-gradient-to-r ${styles.accent} mr-2`}></div>
            <p className={`${styles.text} text-sm`}>Your selected theme: {theme}</p>
          </div>
        </section>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {/* Quick Tasks Card */}
          <div className={`${styles.card} backdrop-blur-md p-6 rounded-xl shadow-lg`}>
            <h3 className={`text-xl font-semibold ${styles.text} mb-4`}>Quick Tasks</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <input type="checkbox" className="mr-3 form-checkbox" />
                <span className={`${styles.text}`}>Create to-do list for today</span>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="mr-3 form-checkbox" />
                <span className={`${styles.text}`}>Review weekly goals</span>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="mr-3 form-checkbox" />
                <span className={`${styles.text}`}>Plan weekend activities</span>
              </div>
            </div>
            <button className={`mt-4 px-4 py-2 text-sm rounded-lg bg-gradient-to-r ${styles.accent} text-white`}>
              Add Task
            </button>
          </div>

          {/* Calendar Card */}
          <div className={`${styles.card} backdrop-blur-md p-6 rounded-xl shadow-lg`}>
            <h3 className={`text-xl font-semibold ${styles.text} mb-4`}>Calendar</h3>
            <div className="text-center p-4">
              <p className={`text-lg font-medium ${styles.text}`}>{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}</p>
              <p className={`text-sm ${styles.text} opacity-70`}>No events scheduled for today</p>
            </div>
            <button className={`mt-4 px-4 py-2 text-sm rounded-lg bg-gradient-to-r ${styles.accent} text-white`}>
              Schedule Event
            </button>
          </div>

          {/* Focus Mode Card */}
          <div className={`${styles.card} backdrop-blur-md p-6 rounded-xl shadow-lg`}>
            <h3 className={`text-xl font-semibold ${styles.text} mb-4`}>Focus Mode</h3>
            <div className="flex justify-center p-4">
              <div className={`h-24 w-24 rounded-full border-4 border-gradient-to-r ${styles.accent} flex items-center justify-center`}>
                <span className={`text-2xl font-bold ${styles.text}`}>25:00</span>
              </div>
            </div>
            <div className="flex justify-center space-x-4 mt-2">
              <button className={`px-4 py-2 text-sm rounded-lg bg-gradient-to-r ${styles.accent} text-white`}>
                Start
              </button>
              <button className="px-4 py-2 text-sm rounded-lg bg-white/50 text-gray-700">
                Reset
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Floating decoration elements - for Tangled-inspired theme */}
      {theme === 'defaultTheme' && (
        <>
          <div className="fixed top-1/4 left-10 w-6 h-6 bg-pink-200 rounded-full animate-float opacity-70"></div>
          <div className="fixed top-1/3 right-20 w-8 h-8 bg-purple-200 rounded-full animate-float-delay opacity-70"></div>
          <div className="fixed bottom-1/4 left-20 w-10 h-10 bg-pink-200 rounded-full animate-float-slow opacity-70"></div>
          <div className="fixed bottom-1/3 right-10 w-5 h-5 bg-purple-200 rounded-full animate-float-delay-slow opacity-70"></div>
        </>
      )}
      
      {/* Ocean theme decorations */}
      {theme === 'oceanTheme' && (
        <>
          <div className="fixed top-1/4 left-10 w-6 h-6 bg-blue-200 rounded-full animate-float opacity-70"></div>
          <div className="fixed top-1/3 right-20 w-8 h-8 bg-teal-200 rounded-full animate-float-delay opacity-70"></div>
          <div className="fixed bottom-1/4 left-20 w-10 h-10 bg-blue-200 rounded-full animate-float-slow opacity-70"></div>
          <div className="fixed bottom-1/3 right-10 w-5 h-5 bg-teal-200 rounded-full animate-float-delay-slow opacity-70"></div>
        </>
      )}
    </div>
  );
};

export default Home;
