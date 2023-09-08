import React, { useEffect, useState } from "react";
import useCurrentSection from "./useCurrentSection";
import { SECTION_LIMIT } from "../../constants/SectionList";

const useIsSectionActive = (sectionIndex) => {
  const [currentSection, _] = useCurrentSection();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (currentSection === SECTION_LIMIT + sectionIndex) {
      setIsActive(true);
    } else {
      if (isActive) {
        setIsActive(false);
      }
    }
  }, [currentSection, sectionIndex]);

  return isActive;
};

export default useIsSectionActive;
