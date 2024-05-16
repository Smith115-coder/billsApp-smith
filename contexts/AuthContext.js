import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { loadUser } from "../services/AuthService";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState(null);

  useEffect(() => {
    const handleLoadUser = () => {
      loadUser().then((response) => {
        setUser(response.data.attributes.name);
        setEmail(response.data.attributes.email);
      });
    };

    handleLoadUser();
  }, []);

  const contextValue = useMemo(
    () => ({
      user,
      email,
    }),
    [user, email]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error(
      "AuthContext component must be used inside AuthContextProvider"
    );
  return context;
};
