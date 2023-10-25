const section = (id, name, zIndex, index) => {
  return {
    id,
    name,
    zIndex,
    index,
  };
};

const SectionList = {
  // INFORMATION: section("information", "INFORMATION", 10, -7),
  ABOUT_ME: section("aboutMe", "ABOUT ME", 9, -5),
  SKILLS: section("skills", "SKILLS", 8, -4),
  PROJECTS: section("projects", "PROJECTS", 7, -3),
  ARCHIVE: section("archive", "ARCHIVE", 6, -2),
  ACTIVITY: section("activity", "ACTIVITY", 5, -1),
  // CAREER: section("career", "CAREER", 4, -1),
};

export const SECTION_LIMIT = Object.keys(SectionList).length;

export default SectionList;
