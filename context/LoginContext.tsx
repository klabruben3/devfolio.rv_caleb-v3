"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface LoginProp {
  showLogin: boolean;
  setShowLogin: Dispatch<SetStateAction<boolean>>
}

const LoginContext = createContext<LoginProp | undefined>(undefined);

function LoginContextProvider({ children }: { children: ReactNode }) {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <LoginContext.Provider value={{ showLogin, setShowLogin }}>
      {children}
    </LoginContext.Provider>
  );
}

function useLoginContext() {
  const loginContext = useContext(LoginContext);
  if (!loginContext) {
    throw new Error(
      "useLoginContext cannot be used out the Login provider.",
    );
  }

  return loginContext;
}

export { LoginContextProvider, useLoginContext };
