export type Skills = {
  skills: MainSkills;
  subskills: SubSkillsType[];
}[];

export type MainSkills =
  | 'Frontend'
  | 'Backend'
  | 'Blockchain'
  | 'Design'
  | 'Growth'
  | 'Content'
  | 'Community'
  | 'Other'
  | 'Mobile';

type SubSkillsType =
  | 'Javascript'
  | 'PHP'
  | 'Python'
  | 'Java'
  | 'C++'
  | 'C'
  | 'Ruby'
  | 'Go'
  | 'MySQL'
  | 'Postgres'
  | 'Redux'
  | 'MongoDB'
  | 'React'
  | 'Angular'
  | 'Android'
  | 'Vue'
  | 'iOS'
  | 'Rust'
  | 'Solidity'
  | 'Sway'
  | 'Move'
  | 'Flutter'
  | 'React Native'
  | 'Data Analytics'
  | 'Operations'
  | 'Admin'
  | 'Community Manager'
  | 'Discord Moderator'
  | 'Research'
  | 'Writing'
  | 'Video'
  | 'Social Media'
  | 'Business Development'
  | 'Digital Marketing'
  | 'Marketing'
  | 'UI/UX Design'
  | 'Graphic Design'
  | 'Illustration'
  | 'Game Design'
  | 'Presentation Design'
  | 'CPP'
  | 'Product Feedback'
  | 'Product Manager';
