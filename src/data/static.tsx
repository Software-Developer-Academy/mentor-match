export const Subjects = [
  {
    name: "HTML",
    icon: "html5",
    description: "HyperText Markup Language",
  },
  {
    name: "CSS",
    icon: "css3",
    description: "Cascading Style Sheets",
  },
  {
    name: "JavaScript",
    icon: "javascript",
    description: "JavaScript",
  },
  {
    name: "TypeScript",
    icon: "typescript",
    description: "TypeScript",
  },
  {
    name: "Python",
    icon: "python",
    description: "Python",
  },
  {
    name: "Ruby",
    icon: "ruby",
    description: "Ruby",
  },
  {
    name: "Java",
    icon: "java",
    description: "Java",
  },
  {
    name: "PHP",
    icon: "php",
    description: "PHP",
  },
  {
    name: "C#",
    icon: "csharp",
    description: "C#",
  },
  {
    name: "React",
    icon: "react",
    description: "React",
  },
  {
    name: "Angular",
    icon: "angular",
    description: "Angular",
  },
  {
    name: "Vue",
    icon: "vue",
    description: "Vue",
  },
  {
    name: "Svelte",
    icon: "svelte",
    description: "Svelte",
  },
  {
    name: "Node.js",
    icon: "nodejs",
    description: "Node.js",
  },
  {
    name: "Express",
    icon: "express",
    description: "Express",
  },
  {
    name: "Django",
    icon: "django",
    description: "Django",
  },
  {
    name: "Ruby on Rails",
    icon: "rails",
    description: "Ruby on Rails",
  },
  {
    name: "Spring",
    icon: "spring",
    description: "Spring",
  },
  {
    name: "Laravel",
    icon: "laravel",
    description: "Laravel",
  },
  {
    name: "ASP.NET",
    icon: "aspnet",
    description: "ASP.NET",
  },
  {
    name: "MongoDB",
    icon: "mongodb",
    description: "MongoDB",
  },
  {
    name: "SQL",
    icon: "mysql",
    description: "SQL",
  },
  {
    name: "MySQL",
    icon: "mysql",
    description: "MySQL",
  },
  {
    name: "PostgreSQL",
    icon: "postgresql",
    description: "PostgreSQL",
  },
  {
    name: "SQLite",
    icon: "sqlite",
    description: "SQLite",
  },
  {
    name: "Firebase",
    icon: "firebase",
    description: "Firebase",
  },
  {
    name: "AWS",
    icon: "aws",
    description: "Amazon Web Services",
  },
  {
    name: "Azure",
    icon: "azure",
    description: "Microsoft Azure",
  },
  {
    name: "Google Cloud",
    icon: "googlecloud",
    description: "Google Cloud Platform",
  },
  {
    name: "Docker",
    icon: "docker",
    description: "Docker",
  },
  {
    name: "Kubernetes",
    icon: "kubernetes",
    description: "Kubernetes",
  },
  {
    name: "Jenkins",
    icon: "jenkins",
    description: "Jenkins",
  },
  {
    name: "Swift",
    icon: "swift",
    description: "Swift",
  },
  {
    name: "Kotlin",
    icon: "kotlin",
    description: "Kotlin",
  },
  {
    name: "Flutter",
    icon: "flutter",
    description: "Flutter",
  },
  {
    name: "React Native",
    icon: "react",
    description: "React Native",
  },
  {
    name: "Xamarin",
    icon: "xamarin",
    description: "Xamarin",
  },
  {
    name: "Unity",
    icon: "unity",
    description: "Unity",
  },
  {
    name: "C++",
    icon: "cplusplus",
    description: "C++",
  },
  {
    name: "C",
    icon: "c",
    description: "C",
  },
  {
    name: "Rust",
    icon: "rust",
    description: "Rust",
  },
  {
    name: "Go",
    icon: "go",
    description: "Go",
  },
  {
    name: "Scala",
    icon: "scala",
    description: "Scala",
  },
  {
    name: "Haskell",
    icon: "haskell",
    description: "Haskell",
  },
  {
    name: "Elixir",
    icon: "elixir",
    description: "Elixir",
  },
  {
    name: "Clojure",
    icon: "clojure",
    description: "Clojure",
  },
  {
    name: "F#",
    icon: "fsharp",
    description: "F#",
  },
  {
    name: "R",
    icon: "r",
    description: "R",
  },
  {
    name: "Perl",
    icon: "perl",
    description: "Perl",
  },
  {
    name: "Shell",
    icon: "shell",
    description: "Shell",
  },
  {
    name: "PowerShell",
    icon: "powershell",
    description: "PowerShell",
  },
  {
    name: "Bash",
    icon: "bash",
    description: "Bash",
  },
];

export const getIcon = (name: string) => {
  const icon = Subjects.find((subject) => subject.name === name)?.icon ?? 'fallback';
  return icon;
}