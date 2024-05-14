export const signupQuestions = [
  {
    id: "name",
    question: "What name would you like to go by?",
    type: "text",
  },
  {
    id: "q1",
    question: "What are your goals?",
    description: "",
    type: "radio",
    options: [
      {
        value: "Learn something new",
      },
      {
        value: "Master a Skill",
      },
      {
        value: "Still trying to figure it out",
      }
    ],
  },
  {
    id: "q2",
    question: "What is your experience level?",
    description: "",
    type: "radio",
    options: [
      {
        value: "Less than 2 years",
      },
      {
        value: "2 - 5 years",
      },
      {
        value: "More than 5 years",
      },
    ],
  },
  {
    id: "q3",
    question: "What would you like to learn?",
    description: "Select all that apply",
    type: "checkbox",
    options: [
      {
        title: "Frontend",
        options: [
          {
            value: "HTML",
          },
          {
            value: "CSS",
          },
          {
            value: "Javascript",
          },
          {
            value: "TypeScript",
          },
        ]
      },
      {
        title: "Backend",
        options: [
          {
            value: "Python",
          },
          {
            value: "Java",
          },
          {
            value: "Ruby",
          },
          {
            value: "C#",
          },
        ]
      },
      {
        title: "Frameworks and Libraries",
        options: [
          {
            value: "React",
          },
          {
            value: "Angular",
          },
          {
            value: "Vue",
          },
          {
            value: "Svelte",
          },
          {
            value: "Next.js"
          }
        ]
      },
      {
        title: "Mobile App Development",
        options: [
          {
            value: "React Native",
          },
          {
            value: "Flutter",
          },
          {
            value: "Swift",
          },
          {
            value: "Kotlin",
          },
        ]
      },
      {
        title: "Tech Stacks",
        options: [
          {
            value: "MERN",
          },
          {
            value: "MEAN",
          },
          {
            value: "LAMP",
          },
          {
            value: "JAMstack",
          },
          {
            value: "Python-Django"
          }
        ]
      },
      {
        title: "Others",
        options: [
          {
            value: "DevOps",
          },
          {
            value: "Machine Learning",
          },
          {
            value: "Data Science",
          },
          {
            value: "Cybersecurity",
          },
          {
            value: "Blockchain"
          }
        ]
      }
    ],
  },
  {
    id: "q4",
    question: "What is your preferred language?",
    description: "",
    type: "select",
    placeholder: "Select your preferred language",
    options: [
      {
        value: "English",
      },
      {
        value: "Spanish",
      },
      {
        value: "French",
      },
      {
        value: "German",
      },
      {
        value: "Chinese",
      },
      {
        value: "Japanese",
      },
      {
        value: "Korean",
      },
    ],
  },
  {
    id: "q5",
    question: "Do you prefer virtual or in-person sessions?",
    description: "",
    type: "radio",
    options: [
      {
        value: "Virtual",
      },
      {
        value: "In person",
      }
    ]
  },
  {
    id: "q6",
    question: "This is a test checkbox question",
    description: "Select multiple",
    type: "checkbox",
    options: [
      {
        value: "Option 1",
      },
      {
        value: "Option 2",
      },
      {
        value: "Option 3",
      },
      {
        value: "Option 4",
      }
    ]
  }
];