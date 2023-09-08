const section = (id, name, zIndex, index) => {
  return {
    id,
    name,
    zIndex,
    index,
  };
};

const SectionList = {
  INFORMATION: section("information", "INFORMATION", 10, -7),
  ABOUT_ME: section("aboutMe", "ABOUT ME", 9, -6),
  SKILLS: section("skills", "SKILLS", 8, -5),
  PROJECTS: section("projects", "PROJECTS", 7, -4),
  ARCHIVE: section("archive", "ARCHIVE", 6, -3),
  ACTIVITY: section("activity", "ACTIVITY", 5, -2),
  CAREER: section("career", "CAREER", 4, -1),
};

export const SECTION_LIMIT = Object.keys(SectionList).length;

export default SectionList;
