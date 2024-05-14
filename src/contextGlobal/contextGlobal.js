import React, { createContext, useRef } from "react";

const ContextGlobal = createContext();

export const ContextGlobalProvider = ({ children }) => {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);

  return (
    <ContextGlobal.Provider value={{ aboutRef, skillsRef }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextGlobal;
