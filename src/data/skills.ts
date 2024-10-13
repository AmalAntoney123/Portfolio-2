import { ISkillListItem, SkillLevel } from "@/types";

const skills: ISkillListItem[] = [
  {
    title: "Programming Languages",
    items: [
      {
        title: "JavaScript",
        level: SkillLevel.Expert,
        icon: "/skills/javascript.svg",
      },
      {
        title: "TypeScript",
        level: SkillLevel.Intermediate,
        icon: "/skills/typescript.svg",
      },
      {
        title: "Dart",
        level: SkillLevel.Expert,
        icon: "/skills/dart.svg",
      },
      {
        title: "Python",
        level: SkillLevel.Expert,
        icon: "/skills/python2.svg",
      },
    ],
  },
  {
    title: "Frontend Development",
    items: [

      {
        title: "React.js",
        level: SkillLevel.Expert,
        icon: "/skills/react.svg",
      },
      {
        title: "HTML",
        level: SkillLevel.Expert,
        icon: "/skills/html.svg",
      },
      {
        title: "CSS",
        level: SkillLevel.Intermediate,
        icon: "/skills/css.svg",
      },
      {
        title: "Flutter",
        level: SkillLevel.Intermediate,
        icon: "/skills/flutter.svg",
      }
    ],
  },
  {
    title: "Backend Development",
    items: [
      {
        title: "Node.js",
        level: SkillLevel.Expert,
        icon: "/skills/nodejs.svg",
      },
      {
        title: "Python",
        level: SkillLevel.Expert,
        icon: "/skills/python2.svg",
      },
      {
        title: "Php",
        level: SkillLevel.Intermediate,
        icon: "/skills/php.svg",
      },
    ],
  },
  {
    title: "Mobile App Development",
    items: [
      {
        title: "Flutter",
        level: SkillLevel.Expert,
        icon: "/skills/flutter.svg",
      },
      {
        title: "React-Native",
        level: SkillLevel.Expert,
        icon: "/skills/react.svg",
      },
    ],
  },
  {
    title: "Database Management",
    items: [
      {
        title: "MongoDB",
        level: SkillLevel.Intermediate,
        icon: "/skills/mongodb.svg",
      },
      {
        title: "MySQL",
        level: SkillLevel.Begginer,
        icon: "/skills/mysql.svg",
      },
      {
        title: "Firebase",
        level: SkillLevel.Intermediate,
        icon: "/skills/firebase.svg",
      },
    ],
  },
  {
    title: "Machine Learning",
    items: [
      {
        title: "OpenCV",
        level: SkillLevel.Intermediate,
        icon: "/skills/opencv2.svg",
      },
      {
        title: "Numpy",
        level: SkillLevel.Begginer,
        icon: "/skills/numpy.svg",
      },
      {
        title: "Scikit-Learn",
        level: SkillLevel.Intermediate,
        icon: "/skills/scikitlearn.svg",
      },
    ],
  },
  {
    title: "DevOps/VCS",
    items: [
      {
        title: "Docker",
        level: SkillLevel.Begginer,
        icon: "/skills/docker.png",
      },
      {
        title: "Git",
        level: SkillLevel.Expert,
        icon: "/skills/git.svg",
      },
      {
        title: "GitHub",
        level: SkillLevel.Expert,
        icon: "/skills/github.svg",
      },
    ],
  },
  {
    title: "Nontechnical Skills",
    items: [
      {
        title: "Problem Solving",
        level: SkillLevel.Expert,
        icon: "/images/logical-thinking.png",
      },
      {
        title: "Collaboration",
        level: SkillLevel.Expert,
        icon: "/images/collaboration.png",
      },
      {
        title: "Analytical Skills",
        level: SkillLevel.Expert,
        icon: "/images/analytical-skills.png",
      },
    ],
  },
];

export default skills;
