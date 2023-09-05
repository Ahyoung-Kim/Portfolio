const section = (id, name) => {
  return {
    id,
    name,
  };
};

const SectionList = {
  INFORMATION: section("information", "INFORMATION"),
  ABOUT_ME: section("aboutMe", "ABOUT ME"),
  SKILLS: section("skills", "SKILLS"),
  PROJECTS: section("projects", "PROJECTS"),
  ARCHIVE: section("archive", "ARCHIVE"),
  ACTIVITY: section("activity", "ACTIVITY"),
  CAREER: section("career", "CAREER"),
};

export const SECTION_LIMIT = Object.keys(SectionList).length;

export default SectionList;
