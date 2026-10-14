/**
 * Sandesh Salavi - Personal Portfolio Data
 * 
 * INSTRUCTIONS FOR UPDATING:
 * - Update your profile info, projects, and education in this file.
 * - Replace '[Editable Placeholder: ...]' strings with your actual metrics and descriptions as your projects progress.
 * - To activate your real resume, place your 'resume.pdf' in 'client/public/resume.pdf' and set isAvailable to true.
 * - To link your LinkedIn, replace the placeholder URL with your verified profile link.
 */

export const portfolioData = {
  profile: {
    name: "Sandesh Salavi",
    headline: "Building Intelligent Solutions with AI & Software Engineering",
    roleTitle: "Aspiring AI Engineer | Software Developer",
    heroSupportingText: "I'm an aspiring AI Engineer and Software Developer interested in machine learning, deep learning, generative AI, and full-stack application development.",
    about: "I am pursuing a B.E./B.Tech degree at KIT College of Engineering, with an expected graduation year of 2027. My technical interests span AI engineering, machine learning, deep learning, Large Language Models, Retrieval-Augmented Generation, and full-stack software development.\n\nI enjoy exploring how AI models and software systems can be combined to build practical applications. My portfolio highlights my learning and project work across AI and software development.",
    email: "sandeshsalavi3@gmail.com",
    github: "https://github.com/SandeshSalavi",
    linkedin: {
      username: "SandeshSalavi",
      url: "https://www.linkedin.com/in/SandeshSalavi",
      isVerified: false,
      placeholderNote: "LinkedIn Profile URL Placeholder: Update with your verified LinkedIn URL in portfolioData.js"
    },
    resume: {
      fileName: "Sandesh_Salavi_Resume.pdf",
      filePath: "/resume.pdf",
      isAvailable: false,
      placeholderNote: "Upload your resume.pdf into the 'client/public/' directory to activate direct downloads."
    },
    targetRoles: [
      "AI Engineer",
      "Machine Learning Engineer",
      "Software Developer",
      "AI-focused Full-Stack Developer"
    ]
  },

  education: {
    institution: "KIT College of Engineering",
    degree: "B.E./B.Tech",
    expectedGraduation: "2027",
    branch: " Computer Science & Engineering(AIML)",
    startYear: " 2023]",
    coursework: [
      " Data Structures & Algorithms",
      " Database Management Systems",
      " Machine Learning Foundations",
      " Object Oriented Programming",
      " Operating Systems & Computer Networks"
    ],
    grades: " 8.94",
    academicAchievements: [
      "[Editable Placeholder: Add verified academic milestones, Dean's list, or department honors]"
    ]
  },

  skills: [
    {
      category: "Programming",
      iconName: "Code2",
      accentColor: "blue",
      skills: [
        { name: "Python", tag: "Primary Language", focus: "Data Science, PyTorch, Scripting" },
        { name: "Java", tag: "OOP & Systems", focus: "Enterprise Systems, OOP Principles" },
        { name: "SQL", tag: "Relational DB", focus: "Complex Queries, Schema Design" }
      ]
    },
    {
      category: "AI and machine learning",
      iconName: "BrainCircuit",
      accentColor: "violet",
      skills: [
        { name: "Machine Learning", tag: "Core AI", focus: "Supervised & Unsupervised Learning" },
        { name: "Deep Learning", tag: "Neural Networks", focus: "Backprop, Optimization, Architecture" },
        { name: "PyTorch", tag: "Framework", focus: "Tensor Computation, Neural Layers" },
        { name: "XGBoost", tag: "Ensemble ML", focus: "Gradient Boosted Decision Trees" },
        { name: "OpenCV", tag: "Computer Vision", focus: "Image Processing, Feature Extraction" }
      ]
    },
    {
      category: "Generative AI",
      iconName: "Sparkles",
      accentColor: "cyan",
      skills: [
        { name: "Large Language Models (LLMs)", tag: "Prompt & Fine-tuning", focus: "Transformer Architectures, Inference" },
        { name: "Retrieval-Augmented Generation (RAG)", tag: "Knowledge Retrieval", focus: "Embeddings, Vector Search, Grounding" }
      ]
    },
    {
      category: "Web and backend development",
      iconName: "Server",
      accentColor: "indigo",
      skills: [
        { name: "React.js", tag: "Frontend Library", focus: "Component Architecture, Hooks, State" },
        { name: "Node.js", tag: "Runtime", focus: "Event Loop, Asynchronous Services" },
        { name: "MongoDB", tag: "NoSQL Database", focus: "Document Modeling, Aggregations" },
        { name: "REST APIs", tag: "API Design", focus: "Clean Endpoints, CRUD Operations" },
        { name: "JWT authentication", tag: "Security", focus: "Token Lifecycle, Protected Endpoints" }
      ]
    }
  ],

  projects: [
    {
      id: "neurostage",
      title: "NeuroStage",
      category: "AI / Machine Learning",
      badge: "Research Prototype",
      visualType: "neuroscience",
      shortDescription: "An AI-focused project involving sleep-related EEG data and machine-learning-based analysis.",
      disclaimer: "Research Prototype Notice: This project is an academic research prototype and is not a clinically certified diagnostic system.",
      fields: {
        problemStatement: "[Editable Placeholder: Describe the clinical and operational challenge of manual sleep stage scoring, EEG polysomnography complexity, and the requirement for automated time-series classification.]",
        myContribution: "[Editable Placeholder: Specify your contributions, such as designing the EEG preprocessing pipeline, bandpass filtering, epoch segmentation, model experimentation, and validation scripts.]",
        datasetAndPreprocessing: "[Editable Placeholder: Specify the EEG dataset (e.g., Sleep-EDF Database Expanded), sampling rates, artifact rejection methods, epoch duration (e.g., 30-second windows), and normalization techniques.]",
        modelArchitecture: "[Editable Placeholder: Describe model architecture (e.g., 1D Convolutional Neural Network for temporal feature extraction combined with BiLSTM or XGBoost classifier on engineered frequency-band features).]",
        trainingAndEvaluation: "[Editable Placeholder: Specify validation methodology (e.g., k-fold subject-stratified cross-validation), loss functions, optimization algorithm, and learning rate schedules.]",
        results: "[Editable Placeholder: Results pending peer verification and finalized benchmark testing. (Do not state unverified accuracy scores).]",
        limitations: "Research prototype. Evaluated solely on experimental benchmark data; not clinically tested or certified for diagnostic or medical use.",
        github: {
          url: "",
          placeholder: "https://github.com/SandeshSalavi/NeuroStage",
          isAvailable: false,
          note: "Placeholder: Repository will be linked once published on GitHub."
        },
        liveDemo: {
          url: "",
          placeholder: "https://neurostage.demo-placeholder.com",
          isAvailable: false,
          note: "Placeholder: Interactive demo will be provided upon inference server deployment."
        }
      }
    },
    {
      id: "advocate-advisory-system",
      title: "Advocate Advisory System",
      category: "Software Development",
      badge: "Full-Stack Application",
      visualType: "legal-tech",
      shortDescription: "A software development project focused on an advocate advisory application.",
      disclaimer: "Software Advisory System Notice: Designed as an administrative and advisory workflow tool for legal advocates. Not automated legal advice.",
      fields: {
        problemStatement: "[Editable Placeholder: Describe the administrative workload faced by legal advocates, case tracking hurdles, hearing schedule management, and client consultation communication delays.]",
        features: [
          "[Editable Placeholder: Advocate dashboard for upcoming hearing calendar and court dates]",
          "[Editable Placeholder: Client advisory record keeping and case notes documentation]",
          "[Editable Placeholder: Structured document metadata tagging and case status tracking]"
        ],
        myContribution: "[Editable Placeholder: Architected the RESTful backend endpoints in Node.js/Express, implemented MongoDB schemas for advocate and case collections, and built responsive React interfaces.]",
        technologyStack: [
          "React.js",
          "Node.js",
          "Express.js",
          "MongoDB",
          "REST APIs",
          "JWT Authentication"
        ],
        architecture: "[Editable Placeholder: MERN three-tier architecture: React Single Page Application communicating via RESTful JSON APIs to an Express/Node server backed by MongoDB persistence.]",
        screenshots: [
          {
            title: "Advocate Advisory Portal Architecture",
            placeholder: true,
            description: "System diagram showing client-server interaction and case document indexing."
          }
        ],
        limitations: "[Editable Placeholder: Initial release covers local practice management; integration with official e-Courts APIs and automated push SMS notifications planned for upcoming releases.]",
        github: {
          url: "",
          placeholder: "https://github.com/SandeshSalavi/Advocate-Advisory-System",
          isAvailable: false,
          note: "Placeholder: Repository will be linked upon public source code release."
        },
        liveDemo: {
          url: "",
          placeholder: "https://advocate-advisory.demo-placeholder.com",
          isAvailable: false,
          note: "Placeholder: Deployment link will be activated once production staging is configured."
        }
      }
    }
  ],

  achievements: {
    isConfigured: false,
    heading: "Certifications & Verified Achievements",
    notice: "Verified credentials only. As technical certifications, competition awards, or publications are completed and verified, they will appear here with official credential IDs.",
    items: []
  }
};
