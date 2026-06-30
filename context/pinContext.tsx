"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface PinProp {
  pin: string;
  setPin: Dispatch<SetStateAction<string>>
}

const PinContext = createContext<PinProp | undefined>(undefined);

function PinContextProvider({ children }: { children: ReactNode }) {
    const [pin, setPin] = useState("");

  return (
    <PinContext.Provider value={{ pin, setPin }}>
      {children}
    </PinContext.Provider>
  );
}

function usePinContext() {
  const pinContext = useContext(PinContext);
  if (!pinContext) {
    throw new Error(
      "usePinContext cannot be used out the Pin provider.",
    );
  }

  return pinContext;
}

export { PinContextProvider, usePinContext };
