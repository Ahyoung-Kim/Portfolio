const section = (id, name, zIndex) => {
  return {
    id,
    name,
    zIndex,
  };
};

const SectionList = {
  INFORMATION: section("information", "INFORMATION", 10),
  ABOUT_ME: section("aboutMe", "ABOUT ME", 9),
  SKILLS: section("skills", "SKILLS", 8),
  PROJECTS: section("projects", "PROJECTS", 7),
  ARCHIVE: section("archive", "ARCHIVE", 6),
  ACTIVITY: section("activity", "ACTIVITY", 5),
  CAREER: section("career", "CAREER", 4),
};

export const SECTION_LIMIT = Object.keys(SectionList).length;

export default SectionList;
