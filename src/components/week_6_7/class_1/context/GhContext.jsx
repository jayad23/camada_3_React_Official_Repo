import { createContext, useState } from "react";

export const AuthenticationContext = createContext();

const AuthenticationProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthentication = () => {
    setIsAuthenticated(true);
  }

  const store = {
    isAuthenticated,
    handleAuthentication
  }

  return (
    <AuthenticationContext.Provider value={store}>
      {children}
    </AuthenticationContext.Provider>
  )

}

export default AuthenticationProvider;