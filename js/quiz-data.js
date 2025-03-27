const quizQuestions = [
    {
        id: 1,
        question: "Which activities do you enjoy the most?",
        options: [
            {
                text: "Solving complex problems and puzzles",
                categories: ["technology", "analysis", "engineering"]
            },
            {
                text: "Helping and teaching others",
                categories: ["education", "healthcare", "social-services"]
            },
            {
                text: "Creating art or design",
                categories: ["creative", "design", "media"]
            },
            {
                text: "Managing and organizing projects",
                categories: ["business", "management", "administration"]
            }
        ]
    },
    {
        id: 2,
        question: "What type of work environment do you prefer?",
        options: [
            {
                text: "Office or remote work setting",
                categories: ["technology", "business", "administration"]
            },
            {
                text: "Active and dynamic environment",
                categories: ["healthcare", "education", "service"]
            },
            {
                text: "Creative studio or workspace",
                categories: ["creative", "design", "media"]
            },
            {
                text: "Mix of indoor and outdoor settings",
                categories: ["environmental", "construction", "field-work"]
            }
        ]
    },
    {
        id: 3,
        question: "Which skills would you like to develop?",
        options: [
            {
                text: "Technical and analytical skills",
                categories: ["technology", "engineering", "analysis"]
            },
            {
                text: "Communication and leadership",
                categories: ["management", "education", "business"]
            },
            {
                text: "Creativity and design",
                categories: ["creative", "design", "media"]
            },
            {
                text: "Problem-solving and research",
                categories: ["science", "research", "development"]
            }
        ]
    },
    {
        id: 4,
        question: "What's most important to you in a career?",
        options: [
            {
                text: "Innovation and cutting-edge technology",
                categories: ["technology", "research", "development"]
            },
            {
                text: "Making a positive impact on others",
                categories: ["healthcare", "education", "social-services"]
            },
            {
                text: "Creative expression and originality",
                categories: ["creative", "design", "arts"]
            },
            {
                text: "Leadership and business growth",
                categories: ["business", "management", "entrepreneurship"]
            }
        ]
    },
    {
        id: 5,
        question: "How do you prefer to work?",
        options: [
            {
                text: "Independently on focused tasks",
                categories: ["technology", "research", "creative"]
            },
            {
                text: "Collaboratively in teams",
                categories: ["management", "education", "healthcare"]
            },
            {
                text: "Mix of independent and team work",
                categories: ["business", "design", "engineering"]
            },
            {
                text: "Leading and directing others",
                categories: ["management", "education", "administration"]
            }
        ]
    }
];

const careerPaths = {
    "technology": {
        title: "Technology & Software Development",
        roles: ["Software Developer", "Data Scientist", "IT Consultant"],
        description: "Career paths focused on creating and maintaining technology solutions.",
        skills: ["Programming", "Problem Solving", "Technical Design"]
    },
    "healthcare": {
        title: "Healthcare & Medical",
        roles: ["Healthcare Administrator", "Medical Professional", "Health Technologist"],
        description: "Careers dedicated to improving health and wellbeing of others.",
        skills: ["Patient Care", "Medical Knowledge", "Communication"]
    },
    "business": {
        title: "Business & Management",
        roles: ["Business Analyst", "Project Manager", "Marketing Manager"],
        description: "Careers in business operations, strategy, and leadership.",
        skills: ["Leadership", "Analysis", "Communication"]
    },
    "creative": {
        title: "Creative & Design",
        roles: ["UX Designer", "Graphic Designer", "Content Creator"],
        description: "Careers focusing on creative expression and design.",
        skills: ["Design", "Creativity", "Visual Communication"]
    },
    "education": {
        title: "Education & Training",
        roles: ["Teacher", "Corporate Trainer", "Educational Consultant"],
        description: "Careers in teaching, training, and knowledge sharing.",
        skills: ["Teaching", "Communication", "Organization"]
    }
};
