export const portfolioData = {
  personal: {
    name: "Gautam Nagda",
    badge: "HELLO, I'M GAUTAM 👋",
    title: "Building Digital Experiences with Code, AI & Creativity.",
    subtitle: "I'm a Computer Science Engineering student at JECRC Foundation focused on Data Structures & Algorithms, full-stack development and AI-powered technologies. I also bring a creative edge through video editing and digital content creation.",
    role: "Full-Stack Developer & CS Engineering Student",
    location: "Jaipur / Udaipur, Rajasthan, India",
    email: "gautamnagda687@gmail.com",
    gmailComposeUrl: "https://mail.google.com/mail/?view=cm&fs=1&to=gautamnagda687@gmail.com",
    github: "https://github.com/GautamNagda",
    linkedin: "https://www.linkedin.com/in/gautam-nagda-410a52326?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    instagram: "https://www.instagram.com/rohit.editttz?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==",
    stats: [
      { value: "9.3+", label: "GPA", desc: "Top percentile academic standing" },
      { value: "2028", label: "Graduation", desc: "B.Tech Computer Science" },
      { value: "3.4M+", label: "Peak Social Reach", desc: "Achieved through video editing & social media content" },
      { value: "5+", label: "Programming Projects", desc: "C++, OpenGL, ML & Web" },
    ],
    codeSnippet: {
      filename: "gautam.ts",
      code: `const gautam = {
  role: "Full-Stack Developer",
  learning: ["DSA", "React", "Node.js", "AI"],
  building: true
};`
    }
  },

  about: {
    badge: "ABOUT ME",
    heading: "A student building real skills, not just a degree.",
    paragraphs: [
      "I'm Gautam Nagda, a Computer Science Engineering student at JECRC Foundation, currently focused on building strong foundations in Data Structures & Algorithms and full-stack web development.",
      "I enjoy turning ideas into practical projects using modern web technologies and AI-powered tools. Alongside software development, I have experience in video editing, social media content creation and digital storytelling, particularly around cricket content.",
      "My current goal is to continuously improve my problem-solving skills, build impactful full-stack and AI-driven applications, and gain valuable real-world engineering experience."
    ],
    currentFocus: [
      "DSA & Competitive Programming",
      "Full-Stack Web Development",
      "AI & Machine Learning Prototypes",
      "Real-world Scalable Projects",
      "Internship & Placement Preparation"
    ]
  },

  education: {
    badge: "EDUCATION",
    heading: "Academic Journey",
    items: [
      {
        title: "B.Tech — Computer Science Engineering",
        institution: "JECRC Foundation, Jaipur",
        duration: "2024–2028",
        gpa: "9.3+ GPA",
        active: true,
        tags: ["Data Structures", "DBMS", "OOP", "Software Engineering", "Computer Networks", "Operating Systems"]
      },
      {
        title: "Class 12",
        institution: "Central Public School, Udaipur",
        duration: "2023–2024",
        gpa: "89%",
        active: false,
        tags: ["Physics", "Chemistry", "Mathematics", "Computer Science"]
      },
      {
        title: "Class 10",
        institution: "Central Public School, Udaipur",
        duration: "2021–2022",
        gpa: "88%",
        active: false,
        tags: ["Mathematics", "Science", "Social Science", "English"]
      }
    ]
  },

  skills: {
    badge: "SKILLS",
    heading: "Technologies I use and I'm learning",
    categories: [
      {
        name: "Programming",
        skills: ["C++", "Python", "SQL"]
      },
      {
        name: "Frontend",
        skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"]
      },
      {
        name: "Backend",
        skills: ["Node.js", "Express.js", "EJS", "FastAPI"]
      },
      {
        name: "Database",
        skills: ["MongoDB", "SQL"]
      },
      {
        name: "Tools",
        skills: ["Git", "GitHub", "Netlify", "VS Code", "Antigravity"]
      },
      {
        name: "AI & ML",
        featured: true,
        skills: ["Machine Learning", "Scikit-Learn", "NLP", "BERT", "Prompt Engineering", "ChatGPT", "Claude", "AI-assisted development"]
      },
      {
        name: "Graphics & Creative",
        skills: ["OpenGL 3.3", "GLSL Shaders", "Computer Graphics", "Video Editing", "Videography", "Photoshop", "Filmora"]
      }
    ]
  },

  currentlyLearning: {
    badge: "CURRENTLY LEARNING",
    heading: "What I'm Working On",
    items: [
      {
        title: "DSA & Problem Solving",
        progress: 15,
        description: "Arrays, Hashing, Recursion, Sorting, Two Pointer, Linked Lists, Stacks, Queues, Trees, Graphs"
      },
      {
        title: "Full-Stack Development",
        progress: 40,
        description: "JavaScript, React, Node.js, Express, MongoDB, REST APIs, Authentication, Deployment"
      },
      {
        title: "Career Preparation",
        progress: 10,
        description: "DSA practice, CS fundamentals, Projects, Internships, Placement preparation"
      }
    ]
  },

  projects: {
    badge: "FEATURED PROJECTS",
    heading: "Things I've built",
    items: [
      {
        id: "opengl-3d-shooter",
        category: "C++ / OPENGL 3.3 / COMPUTER GRAPHICS",
        title: "3D Shooting Game",
        description: "A first-person 3D shooting game built from scratch using modern C++ and OpenGL 3.3 for understanding the basics of computer graphics — featuring custom GLSL vertex/fragment shaders, MVP transformation matrices, camera controls, coordinate spaces, and a real-time graphics rendering loop.",
        tags: ["C++", "OpenGL 3.3", "GLSL Shaders", "Computer Graphics", "Math / GLM", "Rendering Pipeline"],
        codeUrl: "https://github.com",
        demoUrl: null,
        imageType: "opengl",
        featured: true
      },
      {
        id: "ipl-prediction",
        category: "MACHINE LEARNING / INTERNPE PROJECT",
        title: "IPL Winning Team Prediction ML Model",
        description: "A predictive Machine Learning model engineered during a 6-week internship at InternPe. Analyzes multi-season Indian Premier League datasets, venue statistics, toss decisions, player form, and head-to-head records in Python to forecast match winners with high predictive accuracy.",
        tags: ["Python", "Machine Learning", "Scikit-Learn", "Pandas", "NumPy", "Predictive Analytics", "InternPe"],
        codeUrl: "https://github.com",
        demoUrl: null,
        imageType: "ml",
        featured: true
      },
      {
        id: "speech-sentiment",
        category: "AI / NLP / HACKATHON PROJECT",
        title: "Mental Health Monitoring Using Speech & Sentiment Analysis",
        description: "An AI-based prototype exploring speech patterns, tone and sentiment analysis to identify potential early indicators of mental-health concerns. Presented as a research prototype — not a medical diagnostic tool.",
        tags: ["React", "Tailwind CSS", "NLP", "BERT", "Python", "AI"],
        codeUrl: "https://github.com",
        demoUrl: "https://example.com",
        imageType: "ai",
        featured: true
      },
      {
        id: "cpp-practice",
        category: "C++ / CORE CS",
        title: "C++ Algorithms & Calculator Suite",
        description: "Practical object-oriented programming suite covering modular calculation engines, game logic (Rock Paper Scissors), and core problem-solving algorithms.",
        tags: ["C++", "OOP", "Algorithms", "Problem Solving"],
        codeUrl: "https://github.com",
        demoUrl: null,
        imageType: "code",
        featured: false
      },
      {
        id: "dsa-core-suite",
        category: "C++ / DATA STRUCTURES & ALGORITHMS",
        title: "Data Structures & Core Algorithms",
        description: "Implementation of fundamental data structures in modern C++ — linked lists, stacks, queues, binary trees, recursion, sorting, and graph algorithms.",
        tags: ["C++", "DSA", "Time Complexity", "Memory Management"],
        codeUrl: "https://github.com",
        demoUrl: null,
        imageType: "code",
        featured: false
      }
    ]
  },

  experience: {
    badge: "EXPERIENCE",
    heading: "Work Experience",
    items: [
      {
        id: "internpe-ml",
        role: "Machine Learning Intern",
        company: "InternPe",
        type: "Internship • 6 Weeks",
        duration: "6 Weeks",
        period: "6-Week Virtual Internship",
        description: "Completed an intensive 6-week Machine Learning internship at InternPe. Built an end-to-end IPL Winning Team Prediction ML model by processing and engineering features from historical match data, pitch & venue conditions, toss outcomes, and team performance metrics using Python and Scikit-Learn.",
        tags: ["Machine Learning", "Python", "Scikit-Learn", "Pandas", "IPL Analytics", "Feature Engineering", "Data Modeling"]
      },
      {
        id: "himanshu-creator",
        role: "Next Gen Video Creator",
        company: "Himanshu Engineering Services",
        type: "Internship",
        duration: "Ongoing",
        period: "Internship",
        description: "Working on video creation, editing and digital content production, combining creative storytelling with modern AI-assisted workflows.",
        tags: ["Video Editing", "Content Creation", "Promotional Content", "Social-Media Videos", "Visual Storytelling", "AI-assisted Workflows"]
      }
    ]
  },

  creativeWork: {
    badge: "BEYOND CODE",
    heading: "Creative work, editing & digital storytelling.",
    subtitle: "Alongside software development, I have experience creating short-form content, cricket edits, highlights and promotional videos.",
    items: [
      {
        title: "Cricket Cinematic Edit",
        category: "Sports Montage",
        views: "1.6M",
        videoUrl: "https://www.instagram.com/reel/DQmJYTLktpf/?stkn=MXV5bDA0anF0bGl0NQ==",
        theme: "cricket-1",
        description: "High-paced dramatic match rhythm with color grading and dynamic beat cuts."
      },
      {
        title: "Stadium Atmosphere Highlights",
        category: "Event Visuals",
        views: "320K+",
        theme: "cricket-2",
        description: "Immersive stadium lights, crowd energy, and sound design."
      },
      {
        title: "Night Street Storytelling",
        category: "Cinematography",
        views: "180K+",
        theme: "urban",
        description: "Low-light aesthetic composition and ambient storytelling."
      }
    ]
  },

  events: {
    badge: "EVENTS & HACKATHONS",
    heading: "Where I've shown up to learn",
    items: [
      {
        title: "Workato Buildathon — Agentic Edition",
        location: "Jaipur",
        description: "Participated in an agentic-AI-focused buildathon and explored modern AI development workflows."
      },
      {
        title: "Cognisance — IIT Roorkee",
        location: "13–15 March 2026",
        description: "Participated in technology and interactive events at IIT Roorkee's Cognisance tech fest."
      },
      {
        title: "CII Conference",
        location: "Udaipur — 21 May 2026",
        description: "Explored emerging developments in GenAI, Cybersecurity, Data protection and Digital technology (DPDP Act)."
      }
    ]
  },

  milestones: [
    { title: "9.3+ GPA", desc: "Strong academic performance" },
    { title: "3.4M+ Peak Reach", desc: "Achieved through video editing & social media" },
    { title: "Buildathon Participant", desc: "Workato Agentic Edition" },
    { title: "IIT Roorkee", desc: "Cognisance participant" },
    { title: "AI & ML", desc: "Speech AI & IPL Win Predictor" },
    { title: "Graphics & C++", desc: "OpenGL 3.3 3D Game & CS Suite" }
  ],

  developerSpotlight: {
    badge: "DEVELOPER",
    heading: "Code, Build, Learn, Repeat.",
    subtitle: "I'm continuously improving my problem-solving skills and building projects to turn what I learn into practical applications.",
    githubUrl: "https://github.com/GautamNagda",
    repositories: [
      {
        name: "3d-shooting-game-opengl",
        stack: "C++ • OpenGL 3.3 • GLSL"
      },
      {
        name: "ipl-win-predictor-ml",
        stack: "Python • Scikit-Learn • ML"
      },
      {
        name: "speech-sentiment-ai",
        stack: "NLP • BERT • AI"
      }
    ]
  },

  contact: {
    badge: "CONTACT",
    heading: "Let's Build Something Together.",
    subtitle: "Have a project idea, internship opportunity, collaboration or simply want to connect? I'd love to hear from you."
  }
};
