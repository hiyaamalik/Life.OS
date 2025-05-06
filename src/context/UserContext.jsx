import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userTheme, setUserTheme] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Added auth state

  return (
    <UserContext.Provider value={{ userTheme, setUserTheme, isAuthenticated, setIsAuthenticated }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
