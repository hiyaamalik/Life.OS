import { useState, useEffect } from "react";
import { useUser } from "../context/UserContext";

const Home = () => {
  const { userTheme, isAuthenticated } = useUser();
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good Morning");
    else if (hour < 18) setGreeting("Good Afternoon");
    else setGreeting("Good Evening");
  }, []);

  const getThemeStyles = () => {
    switch (userTheme) {
      case 'NatureCalm':
        return {
          background: 'bg-gradient-to-r from-green-100 to-blue-100',
          accent: 'from-green-400 to-blue-500',
          text: 'text-green-800',
          card: 'bg-white/70'
        };
      case 'VintageCottagecore':
        return {
          background: 'bg-gradient-to-r from-amber-50 to-rose-100',
          accent: 'from-rose-300 to-amber-300',
          text: 'text-amber-800',
          card: 'bg-white/70'
        };
      case 'DisneyMagicalRealm':
        return {
          background: 'bg-gradient-to-r from-purple-100 to-blue-100',
          accent: 'from-purple-400 to-blue-400',
          text: 'text-purple-800',
          card: 'bg-white/70'
        };
      case 'SoftGirlEra':
        return {
          background: 'bg-gradient-to-r from-pink-100 to-blue-100',
          accent: 'from-pink-300 to-blue-300',
          text: 'text-pink-700',
          card: 'bg-white/70'
        };
      case 'MinimalistZen':
        return {
          background: 'bg-gradient-to-r from-gray-100 to-gray-200',
          accent: 'from-gray-400 to-gray-500',
          text: 'text-gray-700',
          card: 'bg-white/70'
        };
      case 'DarkAcademia':
        return {
          background: 'bg-gradient-to-r from-stone-200 to-stone-300',
          accent: 'from-stone-500 to-amber-700',
          text: 'text-stone-800',
          card: 'bg-white/70'
        };
      case 'BossBabeEmpire':
        return {
          background: 'bg-gradient-to-r from-pink-100 to-slate-100',
          accent: 'from-pink-500 to-slate-500',
          text: 'text-slate-800',
          card: 'bg-white/70'
        };
      default:
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
    <div className={`min-h-screen w-screen ${styles.background} flex flex-col items-center py-4 px-3 md:py-6 md:px-4 overflow-y-auto`}>
      {/* Header */}
      <header className="w-full max-w-5xl px-2 md:px-4 mb-4 md:mb-6 flex flex-col sm:flex-row justify-between items-center">
        <h1 className={`text-4xl md:text-5xl font-bold ${styles.text}`}>Life.OS</h1>
        <div className="flex space-x-2 md:space-x-4 mt-3 sm:mt-0">
          <button className={`px-4 md:px-6 py-2 rounded-lg bg-gradient-to-r ${styles.accent} text-white font-medium`}>
            Settings
          </button>
          <button className="px-4 md:px-6 py-2 rounded-lg bg-white/20 backdrop-blur-sm text-gray-700 font-medium">
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-5xl text-center flex flex-col gap-4 md:gap-6 flex-1">
        <section className={`${styles.card} backdrop-blur-md p-4 md:p-8 rounded-xl md:rounded-2xl shadow-xl`}>
          <h2 className={`text-3xl md:text-4xl font-bold ${styles.text} mb-2 md:mb-4`}>
            {greeting}, {isAuthenticated ? "User" : "Guest"}!
          </h2>
          <p className={`${styles.text} mb-4 md:mb-6 opacity-80 text-base md:text-lg`}>
            Welcome to your Life.OS dashboard. Here's your personalized space for productivity and life management.
          </p>
          <div className="flex items-center justify-center">
            <div className={`h-3 w-3 rounded-full bg-gradient-to-r ${styles.accent} mr-2`}></div>
            <p className={`${styles.text} text-sm`}>Your selected theme: {userTheme || 'Default'}</p>
          </div>
        </section>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 flex-1">
          {/* Quick Tasks */}
          <div className={`${styles.card} backdrop-blur-md p-4 md:p-6 rounded-xl shadow-lg h-full`}>
            <h3 className={`text-xl md:text-2xl font-semibold ${styles.text} mb-3 md:mb-4`}>Quick Tasks</h3>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center">
                <input type="checkbox" className="mr-3 form-checkbox h-4 w-4 md:h-5 md:w-5" />
                <span className={`${styles.text} text-base md:text-lg`}>Create to-do list for today</span>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="mr-3 form-checkbox h-4 w-4 md:h-5 md:w-5" />
                <span className={`${styles.text} text-base md:text-lg`}>Review weekly goals</span>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="mr-3 form-checkbox h-4 w-4 md:h-5 md:w-5" />
                <span className={`${styles.text} text-base md:text-lg`}>Plan weekend activities</span>
              </div>
            </div>
          </div>
          
          {/* Calendar Overview */}
          <div className={`${styles.card} backdrop-blur-md p-4 md:p-6 rounded-xl shadow-lg h-full`}>
            <h3 className={`text-xl md:text-2xl font-semibold ${styles.text} mb-3 md:mb-4`}>Calendar Overview</h3>
            <div className="space-y-3 md:space-y-4">
              <div className="flex justify-between items-center">
                <span className={`${styles.text} font-medium text-base md:text-lg`}>Today</span>
                <span className={`${styles.text} text-base md:text-lg`}>2 events</span>
              </div>
              <div className="flex justify-between items-center">
                <span className={`${styles.text} font-medium text-base md:text-lg`}>Tomorrow</span>
                <span className={`${styles.text} text-base md:text-lg`}>1 event</span>
              </div>
              <div className="flex justify-between items-center">
                <span className={`${styles.text} font-medium text-base md:text-lg`}>This Week</span>
                <span className={`${styles.text} text-base md:text-lg`}>5 events</span>
              </div>
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className={`${styles.card} backdrop-blur-md p-4 md:p-6 rounded-xl shadow-lg h-full`}>
            <h3 className={`text-xl md:text-2xl font-semibold ${styles.text} mb-3 md:mb-4`}>Quick Stats</h3>
            <div className="grid grid-cols-2 gap-2 md:gap-4">
              <div className="text-center p-2 md:p-4 bg-white/50 rounded-lg">
                <p className={`text-2xl md:text-3xl font-bold ${styles.text}`}>85%</p>
                <p className={`text-xs md:text-sm ${styles.text}`}>Tasks Completed</p>
              </div>
              <div className="text-center p-2 md:p-4 bg-white/50 rounded-lg">
                <p className={`text-2xl md:text-3xl font-bold ${styles.text}`}>12</p>
                <p className={`text-xs md:text-sm ${styles.text}`}>Projects Active</p>
              </div>
              <div className="text-center p-2 md:p-4 bg-white/50 rounded-lg">
                <p className={`text-2xl md:text-3xl font-bold ${styles.text}`}>3</p>
                <p className={`text-xs md:text-sm ${styles.text}`}>Days Streak</p>
              </div>
              <div className="text-center p-2 md:p-4 bg-white/50 rounded-lg">
                <p className={`text-2xl md:text-3xl font-bold ${styles.text}`}>7</p>
                <p className={`text-xs md:text-sm ${styles.text}`}>Notes Today</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional Section */}
        <section className={`${styles.card} backdrop-blur-md p-4 md:p-6 rounded-xl shadow-lg w-full`}>
          <h3 className={`text-xl md:text-2xl font-semibold ${styles.text} mb-3 md:mb-4`}>Recent Activity</h3>
          <div className="space-y-3 md:space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className={`h-2 w-2 md:h-3 md:w-3 rounded-full bg-gradient-to-r ${styles.accent} mr-2 md:mr-3`}></div>
                <span className={`${styles.text} text-base md:text-lg`}>Project "Website Redesign" updated</span>
              </div>
              <span className={`${styles.text} text-sm md:text-base opacity-70`}>2h ago</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className={`h-2 w-2 md:h-3 md:w-3 rounded-full bg-gradient-to-r ${styles.accent} mr-2 md:mr-3`}></div>
                <span className={`${styles.text} text-base md:text-lg`}>Added 3 new tasks to "Home Improvement"</span>
              </div>
              <span className={`${styles.text} text-sm md:text-base opacity-70`}>5h ago</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className={`h-2 w-2 md:h-3 md:w-3 rounded-full bg-gradient-to-r ${styles.accent} mr-2 md:mr-3`}></div>
                <span className={`${styles.text} text-base md:text-lg`}>Completed daily meditation</span>
              </div>
              <span className={`${styles.text} text-sm md:text-base opacity-70`}>Yesterday</span>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="w-full max-w-5xl py-3 md:py-4 text-center mt-4">
        <p className={`${styles.text} text-sm md:text-base opacity-70`}>
          © 2025 Life.OS - Your life management system
        </p>
      </footer>
    </div>
  );
};

export default Home;