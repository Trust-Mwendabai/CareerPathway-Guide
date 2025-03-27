const careerPathways = {
    technology: {
        title: "Technology & Software Development",
        description: "Build the future through code and innovation",
        roles: [
            {
                title: "Software Developer",
                salary: "$70,000 - $150,000",
                growth: "22% (Much faster than average)",
                education: "Bachelor's Degree",
                skills: ["Programming", "Problem Solving", "Software Design", "Version Control"],
                industries: ["Tech", "Finance", "Healthcare"],
                roadmap: [
                    {
                        title: "Learn Programming Fundamentals",
                        description: "Master a programming language like Python or JavaScript",
                        resources: ["Codecademy", "freeCodeCamp", "The Odin Project"]
                    },
                    {
                        title: "Build Projects",
                        description: "Create personal projects to build portfolio",
                        resources: ["GitHub", "Personal Website", "Open Source Projects"]
                    },
                    {
                        title: "Learn Frameworks & Tools",
                        description: "Master relevant frameworks and development tools",
                        resources: ["React", "Node.js", "Git"]
                    },
                    {
                        title: "Gain Experience",
                        description: "Internships or junior developer positions",
                        resources: ["LinkedIn", "Indeed", "Tech Job Boards"]
                    }
                ]
            }
        ]
    },
    healthcare: {
        title: "Healthcare & Medical",
        description: "Make a difference in people's lives through healthcare",
        roles: [
            {
                title: "Healthcare Administrator",
                salary: "$65,000 - $120,000",
                growth: "32% (Much faster than average)",
                education: "Bachelor's/Master's Degree",
                skills: ["Management", "Healthcare Systems", "Communication", "Problem Solving"],
                industries: ["Hospitals", "Clinics", "Healthcare Organizations"],
                roadmap: [
                    {
                        title: "Complete Education",
                        description: "Bachelor's in Healthcare Administration or related field",
                        resources: ["University Programs", "Online Courses"]
                    },
                    {
                        title: "Gain Certification",
                        description: "Obtain relevant healthcare certifications",
                        resources: ["ACHE", "NAHQ", "Professional Associations"]
                    },
                    {
                        title: "Entry-Level Experience",
                        description: "Start in administrative or assistant roles",
                        resources: ["Hospital Jobs", "LinkedIn", "Healthcare Job Boards"]
                    },
                    {
                        title: "Advanced Positions",
                        description: "Move into management and leadership roles",
                        resources: ["Networking Events", "Professional Development"]
                    }
                ]
            }
        ]
    },
    business: {
        title: "Business & Management",
        description: "Lead organizations and drive business success",
        roles: [
            {
                title: "Business Analyst",
                salary: "$60,000 - $110,000",
                growth: "11% (Faster than average)",
                education: "Bachelor's Degree",
                skills: ["Analysis", "Problem Solving", "Communication", "Data Visualization"],
                industries: ["Consulting", "Finance", "Technology"],
                roadmap: [
                    {
                        title: "Educational Foundation",
                        description: "Bachelor's in Business, Economics, or related field",
                        resources: ["University Programs", "Business Schools"]
                    },
                    {
                        title: "Technical Skills",
                        description: "Learn data analysis and business tools",
                        resources: ["SQL", "Excel", "Tableau"]
                    },
                    {
                        title: "Certification",
                        description: "Obtain relevant business analysis certifications",
                        resources: ["CBAP", "PMI-PBA", "Professional Training"]
                    },
                    {
                        title: "Career Growth",
                        description: "Progress to senior analyst or management roles",
                        resources: ["Professional Networks", "Industry Events"]
                    }
                ]
            }
        ]
    }
};

const filters = {
    industries: [
        "Tech",
        "Healthcare",
        "Finance",
        "Education",
        "Consulting",
        "Manufacturing"
    ],
    skills: [
        "Programming",
        "Analysis",
        "Management",
        "Communication",
        "Problem Solving",
        "Leadership"
    ],
    education: [
        "High School",
        "Associate's Degree",
        "Bachelor's Degree",
        "Master's Degree",
        "Doctorate"
    ]
};
