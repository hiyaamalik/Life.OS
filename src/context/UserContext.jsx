import { createContext, useState, useContext, useEffect } from 'react';

// Create the UserContext
const UserContext = createContext();

// UserContext Provider Component
export const UserProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userTheme, setUserTheme] = useState(localStorage.getItem('theme') || 'NatureCalm'); // default theme to 'NatureCalm'

  useEffect(() => {
    // Persist theme in localStorage
    if (userTheme) {
      localStorage.setItem('theme', userTheme);
    }
  }, [userTheme]);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('theme'); // Remove theme on logout (optional)
  };

  return (
    <UserContext.Provider value={{ 
      isAuthenticated, 
      setIsAuthenticated,
      userTheme, // Changed to userTheme to match the naming convention
      login, 
      logout, 
      setUserTheme 
    }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use UserContext
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export default UserContext;
