const coursesData = [
  {
    id: 1,
    title: "React Fundamentals",
    instructor: "John Doe",
    difficulty: "Beginner",
    students: 245,
    duration: "8 Hours",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&auto=format&fit=crop",
    description: "Learn React from scratch.",
  },
  {
    id: 2,
    title: "JavaScript Essentials",
    instructor: "Jane Smith",
    difficulty: "Beginner",
    students: 380,
    duration: "10 Hours",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop",
    description: "Master the fundamentals of JavaScript.",
  },
  {
    id: 3,
    title: "Advanced CSS",
    instructor: "Michael Brown",
    difficulty: "Intermediate",
    students: 195,
    duration: "7 Hours",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&auto=format&fit=crop",
    description: "Build beautiful and responsive websites.",
  },
  {
    id: 4,
    title: "HTML5 Complete Guide",
    instructor: "Sarah Wilson",
    difficulty: "Beginner",
    students: 520,
    duration: "6 Hours",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&auto=format&fit=crop",
    description: "Learn modern HTML for web development.",
  },
  {
    id: 5,
    title: "Node.js Bootcamp",
    instructor: "David Johnson",
    difficulty: "Intermediate",
    students: 315,
    duration: "12 Hours",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop",
    description: "Build backend applications with Node.js.",
  },
  {
    id: 6,
    title: "Express.js API Development",
    instructor: "Emily Davis",
    difficulty: "Intermediate",
    students: 280,
    duration: "9 Hours",
    image:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600&auto=format&fit=crop",
    description: "Create RESTful APIs using Express.",
  },
  {
    id: 7,
    title: "MongoDB for Beginners",
    instructor: "Chris Evans",
    difficulty: "Beginner",
    students: 220,
    duration: "8 Hours",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop",
    description: "Learn database design with MongoDB.",
  },
  {
    id: 8,
    title: "TypeScript Masterclass",
    instructor: "Sophia Lee",
    difficulty: "Intermediate",
    students: 170,
    duration: "9 Hours",
    image:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&auto=format&fit=crop",
    description: "Write safer JavaScript with TypeScript.",
  },
  {
    id: 9,
    title: "Next.js in Practice",
    instructor: "Daniel Carter",
    difficulty: "Advanced",
    students: 142,
    duration: "11 Hours",
    image:
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&auto=format&fit=crop",
    description: "Build modern full-stack React apps.",
  },
  {
    id: 10,
    title: "Git & GitHub",
    instructor: "Olivia Green",
    difficulty: "Beginner",
    students: 640,
    duration: "5 Hours",
    image:
      "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&auto=format&fit=crop",
    description: "Version control your projects like a pro.",
  },
  {
    id: 11,
    title: "Python Programming",
    instructor: "James White",
    difficulty: "Beginner",
    students: 710,
    duration: "14 Hours",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop",
    description: "Learn Python from beginner to advanced.",
  },
  {
    id: 12,
    title: "Django Web Development",
    instructor: "Emma Thompson",
    difficulty: "Intermediate",
    students: 185,
    duration: "13 Hours",
    image:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&auto=format&fit=crop",
    description: "Build powerful web apps with Django.",
  },
  {
    id: 13,
    title: "UI/UX Design Basics",
    instructor: "Liam Scott",
    difficulty: "Beginner",
    students: 430,
    duration: "8 Hours",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&auto=format&fit=crop",
    description: "Design user-friendly digital experiences.",
  },
  {
    id: 14,
    title: "Figma for Designers",
    instructor: "Ava Martin",
    difficulty: "Beginner",
    students: 290,
    duration: "6 Hours",
    image:
      "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?w=600&auto=format&fit=crop",
    description: "Prototype and design with Figma.",
  },
  {
    id: 15,
    title: "Data Structures & Algorithms",
    instructor: "Benjamin Hall",
    difficulty: "Advanced",
    students: 205,
    duration: "18 Hours",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&auto=format&fit=crop",
    description: "Prepare for coding interviews.",
  },
  {
    id: 16,
    title: "Machine Learning Basics",
    instructor: "Grace Walker",
    difficulty: "Intermediate",
    students: 310,
    duration: "15 Hours",
    image:
      "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=600&auto=format&fit=crop",
    description: "An introduction to machine learning concepts.",
  },
  {
    id: 17,
    title: "AWS Cloud Essentials",
    instructor: "Henry Young",
    difficulty: "Intermediate",
    students: 240,
    duration: "10 Hours",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop",
    description: "Get started with cloud computing.",
  },
  {
    id: 18,
    title: "Cybersecurity Fundamentals",
    instructor: "Natalie King",
    difficulty: "Intermediate",
    students: 198,
    duration: "9 Hours",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&auto=format&fit=crop",
    description: "Understand modern cybersecurity principles.",
  },
  {
    id: 19,
    title: "Flutter Mobile Development",
    instructor: "William Moore",
    difficulty: "Intermediate",
    students: 276,
    duration: "12 Hours",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&auto=format&fit=crop",
    description: "Build beautiful cross-platform mobile apps.",
  },
  {
    id: 20,
    title: "Docker & Kubernetes",
    instructor: "Isabella Clark",
    difficulty: "Advanced",
    students: 154,
    duration: "16 Hours",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop",
    description: "Deploy and manage containerized applications.",
  },
];

export default coursesData;
