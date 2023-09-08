import React, { useContext } from "react";
import { CurrentContext } from "../layout/MainLayout";

const useCurrentSection = (sectionIndex) => {
  // [currentSection, setCurrentSection]
  const value = useContext(CurrentContext);

  if (value === undefined) {
    throw new Error("useCurrentSection should be used within CurrentContext");
  }

  return value;
};

export default useCurrentSection;
