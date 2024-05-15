export const AccountLinks: { text: string; href: string; style: string }[] = [
  { text: "Account Dashboard", href: "/profile", style: "link" },
  { text: "Settings", href: "/settings", style: "link" },
  { text: "Log Out", href: "/logout", style: "button" },
];

type languageProps = {
  name: string;
  href: string;
  icon: string;
};
export const Technologies: {
  title: string;
  languages: languageProps[];
  description: string;
}[] = [
  {
    title: "Frontend",
    languages: [
      {
        name: "HTML",
        href: "/explore/html",
        icon: "html5",
      },
      {
        name: "CSS",
        href: "/explore/css",
        icon: "css3",
      },
      {
        name: "JavaScript",
        href: "/explore/javascript",
        icon: "javascript",
      },
      {
        name: "TypeScript",
        href: "/explore/typescript",
        icon: "typescript",
      },
    ],
    description: "Make software look good",
  },
  {
    title: "Backend",
    languages: [
      {
        name: "Python",
        href: "/explore/python",
        icon: "python",
      },
      {
        name: "Ruby",
        href: "/explore/ruby",
        icon: "ruby",
      },
      {
        name: "Java",
        href: "/explore/java",
        icon: "java",
      },
      {
        name: "PHP",
        href: "/explore/php",
        icon: "php",
      },
      {
        name: "C#",
        href: "/explore/csharp",
        icon: "csharp",
      },
    ],
    description: "Make software work well",
  },
  {
    title: "Fullstack",
    languages: [
      {
        name: "MERN",
        href: "/explore/mern",
        icon: "mern",
      },
      {
        name: "MEAN",
        href: "/explore/mean",
        icon: "mean",
      },
      {
        name: "LAMP",
        href: "/explore/lamp",
        icon: "lamp",
      },
      {
        name: "Python-Django",
        href: "/explore/python-django",
        icon: "python-django",
      },
    ],
    description: "The full package",
  },
  {
    title: "Mobile",
    languages: [
      {
        name: "Swift",
        href: "/explore/swift",
        icon: "swift",
      },
      {
        name: "Kotlin",
        href: "/explore/kotlin",
        icon: "kotlin",
      },
      {
        name: "React Native",
        href: "/explore/react-native",
        icon: "react",
      },
      {
        name: "Flutter",
        href: "/explore/flutter",
        icon: "flutter",
      },
    ],
    description: "",
  },
  {
    title: "Database",
    languages: [
      {
        name: "SQL",
        href: "/explore/sql",
        icon: "mysql",
      },
      {
        name: "NoSQL",
        href: "/explore/nosql",
        icon: "nosql",
      },
      {
        name: "MongoDB",
        href: "/explore/mongodb",
        icon: "mongodb",
      },
      {
        name: "PostgreSQL",
        href: "/explore/postgresql",
        icon: "postgresql",
      },
    ],
    description: "Store data efficiently",
  },
];
