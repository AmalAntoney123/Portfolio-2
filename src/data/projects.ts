import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "titan-quiz",
    title: "Titan Quiz",
    description:
      "Flutter mobile app for Titan Institute, Alapuzha (Psc Training Institute) for conducting MCQ quizes.",
    icon: "/skills/flutter.svg",
    repoType: RepoType.Private,
    url: "https://www.titaninstitute.in",
    projectType: ProjectType.Personal,
    tags: ["Flutter", "Firebase", "Dart", "Cross Platform Mobile App"],
  },
  {
    id: "emotional-companion",
    title: "Emo",
    description:
      "AI and ML-assisted emotional well-being companion app built with React Native.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    url: "https://emo.amalantoney.com/",
    githubUrl: "https://github.com/AmalAntoney123/ML_mental_health",
    tags: ["React Native", "AI", "Machine Learning", "Emotional Well-being", "Mobile App"],
  },
  {
    id: "career-vertex",
    title: "Career Vertex",
    description:
      "Machine learning-based career recommendation system.",
    icon: "/skills/python2.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/AmalAntoney123/Career-Guidance-ML",
    tags: ["Python", "Scikit-learn", "Flask", "MongoDB"],
  },
  {
    id: "reachout",
    title: "Reachout",
    description:
      "Comprehensive web application designed to support college students' mental health.",
    icon: "/skills/python2.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/AmalAntoney123/Reachout_ML",
    tags: ["Python", "Flask", "OpenAI", "Scikit-learn", "HTML", "Bootstrap"],
  },
  {
    id: "pro-homes-house-services",
    title: "Pro-Homes House Services",
    description:
      "Platform for house services with payment integration and booking functionalities.",
    icon: "/skills/php.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/AmalAntoney123/Pro-Homes",
    tags: ["PHP", "jQuery", "Ajax", "Bootstrap", "MySQL"],
  },
  {
    id: "quierro-cafe-webapp",
    title: "Quierro Cafe WebApp",
    description:
      "Web app with payment integration and blog in MVC Framework.",
    icon: "/skills/laravel.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/AmalAntoney123/Laravel-Coffee-Blog",
    tags: ["Laravel", "Stripe"],
  },
];

export default projects;

export function getProjectName(id: string) {
  const item = projects.find((e) => e.id === id);

  if (!item) return null;

  return item.title;
}

export function getProjectDetails(id: string): IProjectItem | null {
  const item = projects.find((e) => e.id === id);

  if (!item) return null;

  return item;
}
