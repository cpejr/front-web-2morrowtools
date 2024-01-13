import React, { createContext, useContext, useMemo, useState, useEffect } from "react";

import PropTypes from "prop-types";

const ColorContext = createContext();

export function ColorProvider({ children }) {
  const storedColor = localStorage.getItem("GlobalColor");
  const [globalColor, setGlobalColor] = useState(storedColor || "light");

  useEffect(() => {
    localStorage.setItem("globalColor", globalColor);
  }, [globalColor]);

  const value = useMemo(() => ({ globalColor, setGlobalColor }), [globalColor]);
  return <ColorContext.Provider value={value}>{children}</ColorContext.Provider>;
}

export function useGlobalColor() {
  return useContext(ColorContext);
}

ColorProvider.propTypes = {
  children: PropTypes.func.isRequired,
};
