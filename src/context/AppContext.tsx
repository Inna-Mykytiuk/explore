"use client";

import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";

// Define the type for the context value
interface ContextType {
  activeSlideIndex: number;
  setActiveSlideIndex: Dispatch<SetStateAction<number>>;
}

// Create the context with the defined type
export const MyContext = createContext<ContextType | null>(null);

interface AppContextProps {
  children: ReactNode;
}

const AppContext: React.FC<AppContextProps> = ({ children }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);

  const infos: ContextType = { activeSlideIndex, setActiveSlideIndex };

  return <MyContext.Provider value={infos}>{children}</MyContext.Provider>;
};

export default AppContext;
