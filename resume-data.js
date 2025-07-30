// resume-data.js
// Edit this file to update your resume information

const resumeData = {
    // Personal Information
    personal: {
        name: "Your Name Here",
        title: "Cybersecurity Expert | Azure AD Specialist | Atlassian Administrator",
        email: "your.email@domain.com",
        phone: "+1 (555) 123-4567",
        linkedin: "https://linkedin.com/in/yourprofile",
        github: "https://github.com/yourusername",
        twitter: "https://twitter.com/yourhandle",
        website: "https://yourwebsite.com"
    },

    // Professional Summary
    summary: {
        intro: "Cybersecurity Professional with deep expertise in cloud security, identity management, and enterprise administration",
        specializations: [
            "🔐 Azure Active Directory Architecture & Security",
            "🏢 Atlassian Suite Administration (Jira/Confluence)",
            "🤖 AI Security & ML Model Implementation",
            "🛡️ Enterprise Security Framework Design"
        ]
    },

    // Skills Matrix
    skills: {
        "Cybersecurity & Identity Management": [
            { name: "Azure Active Directory", level: 95 },
            { name: "Identity Governance", level: 90 },
            { name: "Security Framework Design", level: 88 },
            { name: "Conditional Access", level: 92 },
            { name: "Zero Trust Architecture", level: 85 }
        ],
        "Atlassian Administration": [
            { name: "Jira Administration", level: 93 },
            { name: "Confluence Management", level: 90 },
            { name: "Workflow Automation", level: 87 },
            { name: "Custom Field Configuration", level: 85 },
            { name: "User Management & Permissions", level: 91 }
        ],
        "AI & Machine Learning": [
            { name: "GPT Models (3.5/4/4o)", level: 88 },
            { name: "Claude (Anthropic)", level: 90 },
            { name: "AI Security Implementation", level: 85 },
            { name: "Prompt Engineering", level: 92 },
            { name: "Model Integration", level: 87 }
        ],
        "Cloud & Infrastructure": [
            { name: "Microsoft Azure", level: 91 },
            { name: "PowerShell Automation", level: 89 },
            { name: "Microsoft Graph API", level: 86 },
            { name: "REST API Integration", level: 88 },
            { name: "Infrastructure as Code", level: 83 }
        ]
    },

    // Professional Experience
    experience: [
        {
            title: "Senior Azure AD Security Architect",
            company: "TechCorp Solutions",
            duration: "2022 - Present",
            achievements: [
                "Designed and implemented enterprise-scale Azure AD architecture for 50,000+ users",
                "Reduced security incidents by 75% through advanced conditional access policies",
                "Led migration from on-premises AD to hybrid Azure AD Connect deployment",
                "Implemented privileged identity management reducing admin exposure by 80%"
            ]
        },
        {
            title: "Atlassian Administrator & DevOps Engineer",
            company: "Digital Innovation Inc.",
            duration: "2020 - 2022",
            achievements: [
                "Administered Jira/Confluence for 15+ development teams and 500+ users",
                "Created automated workflows reducing ticket resolution time by 60%",
                "Designed custom dashboard and reporting solutions for executive stakeholders",
                "Integrated Atlassian suite with CI/CD pipelines and third-party security tools"
            ]
        },
        {
            title: "Cybersecurity Analyst",
            company: "SecureNet Systems",
            duration: "2018 - 2020",
            achievements: [
                "Monitored and analyzed security events across multi-cloud environments",
                "Developed AI-powered threat detection models with 94% accuracy rate",
                "Created incident response playbooks and automated remediation processes",
                "Conducted security assessments and penetration testing for enterprise clients"
            ]
        }
    ],

    // Featured Projects
    projects: [
        {
            title: "AI-Powered Security Analytics Platform",
            technologies: ["Python", "Azure ML", "GPT-4", "PowerBI"],
            description: "Developed an intelligent security monitoring system using multiple AI models to predict and prevent cyber threats in real-time, reducing false positives by 85%.",
            github: "https://github.com/yourusername/ai-security-platform",
            demo: "https://demo-link.com"
        },
        {
            title: "Enterprise Azure AD Automation Suite",
            technologies: ["PowerShell", "Graph API", "Azure Functions", "Logic Apps"],
            description: "Built comprehensive automation tools for user lifecycle management, group provisioning, and access reviews, reducing manual admin work by 70%.",
            github: "https://github.com/yourusername/azure-automation",
            demo: "https://demo-link.com"
        },
        {
            title: "Jira Workflow Intelligence Engine",
            technologies: ["JavaScript", "Jira API", "Claude AI", "Node.js"],
            description: "Created AI-driven workflow optimization system that analyzes project patterns and suggests improvements, increasing team productivity by 45%.",
            github: "https://github.com/yourusername/jira-ai-engine",
            demo: "https://demo-link.com"
        },
        {
            title: "Zero Trust Network Architecture",
            technologies: ["Azure Sentinel", "Conditional Access", "Intune", "Defender"],
            description: "Designed and implemented comprehensive zero-trust security framework for multinational corporation, eliminating 99% of unauthorized access attempts.",
            github: "https://github.com/yourusername/zero-trust-framework",
            demo: "https://demo-link.com"
        }
    ],

    // Certifications
    certifications: [
        {
            name: "Microsoft Certified: Security Administrator Associate",
            description: "Azure AD & Microsoft 365 Security",
            icon: "🏆",
            date: "2023",
            credentialId: "CERT-123456"
        },
        {
            name: "Atlassian Certified Administrator",
            description: "Jira & Confluence Expert",
            icon: "⚡",
            date: "2022",
            credentialId: "ATL-789012"
        },
        {
            name: "CISSP - Certified Information Systems Security Professional",
            description: "Advanced Cybersecurity",
            icon: "🛡️",
            date: "2021",
            credentialId: "CISSP-345678"
        },
        {
            name: "Azure Solutions Architect Expert",
            description: "Enterprise Cloud Architecture",
            icon: "☁️",
            date: "2022",
            credentialId: "AZ-901234"
        },
        {
            name: "AI/ML Security Specialist",
            description: "Responsible AI Implementation",
            icon: "🤖",
            date: "2023",
            credentialId: "AI-567890"
        },
        {
            name: "Zero Trust Security Framework",
            description: "Advanced Identity Protection",
            icon: "🔐",
            date: "2023",
            credentialId: "ZT-234567"
        }
    ],

    // Terminal Commands for Interactive Section
    terminalCommands: [
        { prompt: 'security@expert:~$', command: ' ls -la skills/', delay: 1000 },
        { prompt: '', command: 'drwxr-xr-x azure-ad-mastery/', delay: 500 },
        { prompt: '', command: 'drwxr-xr-x atlassian-expertise/', delay: 300 },
        { prompt: '', command: 'drwxr-xr-x ai-security-models/', delay: 300 },
        { prompt: '', command: 'drwxr-xr-x enterprise-automation/', delay: 300 },
        { prompt: 'security@expert:~$', command: ' cat achievements.log', delay: 1000 },
        { prompt: '', command: '✅ 50,000+ users managed securely', delay: 400 },
        { prompt: '', command: '✅ 75% reduction in security incidents', delay: 400 },
        { prompt: '', command: '✅ 15+ enterprise Atlassian deployments', delay: 400 },
        { prompt: '', command: '✅ AI-powered threat detection: 94% accuracy', delay: 400 }
    ],

    // Social Media Icons (using emojis for simplicity)
    socialIcons: {
        linkedin: "💼",
        github: "🐙",
        twitter: "🐦",
        email: "📧"
    },

    // Skill Category Icons
    skillIcons: {
        "Cybersecurity & Identity Management": "🔐",
        "Atlassian Administration": "⚡",
        "AI & Machine Learning": "🤖",
        "Cloud & Infrastructure": "☁️"
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = resumeData;
}