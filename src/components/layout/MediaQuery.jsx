import React from "react";
import { useMediaQuery } from "react-responsive";

export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 540px)",
  });

  return <>{isMobile && children}</>;
};

export const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({
    query: "(min-width: 541px) and (max-width: 1023px)",
  });

  return <>{isTablet && children}</>;
};

export const PC = ({ children }) => {
  const isPc = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  return <>{isPc && children}</>;
};

export const useMediaQueries = () => {
  const isPc = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  const isTablet = useMediaQuery({
    query: "(min-width: 541px) and (max-width: 1023px)",
  });

  const isMobile = useMediaQuery({
    query: "(max-width: 540px)",
  });

  return { isPc, isTablet, isMobile };
};
