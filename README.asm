# 🚀 Interactive Tech Resume - Modular System

A stunning, cyberpunk-inspired interactive resume built with modular architecture for easy customization and maintenance.

## 📁 File Structure

```
your-username.github.io/
├── index.html              # Main HTML structure
├── styles.css              # All styling and animations
├── resume-data.js          # ✏️ EDIT THIS FILE - Your personal data
├── resume-builder.js       # Dynamic content generator
├── animations.js           # Interactive animations
└── README.md              # This file
```

## ✏️ How to Edit Your Information

### 🎯 **Primary Edit File: `resume-data.js`**

This is the **ONLY** file you need to edit to update your resume content:

#### **Personal Information**
```javascript
personal: {
    name: "Your Name Here",                    // ← Change this
    title: "Your Professional Title",         // ← Change this
    email: "your.email@domain.com",          // ← Change this
    phone: "+1 (555) 123-4567",              // ← Change this
    linkedin: "https://linkedin.com/in/you",  // ← Change this
    github: "https://github.com/yourusername", // ← Change this
}
```

#### **Skills & Expertise**
```javascript
skills: {
    "Category Name": [
        { name: "Skill Name", level: 95 },    // level: 0-100
        { name: "Another Skill", level: 88 }, // ← Add/remove skills
    ],
    // ← Add new categories or modify existing ones
}
```

#### **Professional Experience**
```javascript
experience: [
    {
        title: "Your Job Title",              // ← Change this
        company: "Company Name",              // ← Change this
        duration: "2022 - Present",          // ← Change this
        achievements: [
            "Achievement 1",                  // ← List your achievements
            "Achievement 2",                  // ← Add as many as needed
        ]
    },
    // ← Add more jobs by copying this structure
]
```

#### **Projects**
```javascript
projects: [
    {
        title: "Project Name",               // ← Change this
        technologies: ["Tech1", "Tech2"],   // ← List technologies used
        description: "Project description", // ← Describe the project
        github: "https://github.com/...",   // ← Optional: GitHub link
        demo: "https://demo-link.com"       // ← Optional: Live demo link
    },
    // ← Add more projects
]
```

#### **Certifications**
```javascript
certifications: [
    {
        name: "Certification Name",          // ← Change this
        description: "Brief description",   // ← Change this
        icon: "🏆",                         // ← Choose an emoji icon
        date: "2023",                       // ← Year obtained
        credentialId: "CERT-123456"         // ← Optional: Credential ID
    },
    // ← Add more certifications
]
```

## 🚀 Deployment Steps

### 1. **Create GitHub Repository**
- Create a new repository named `your-username.github.io`
- Make sure it's public

### 2. **Upload Files**
Upload all these files to your repository:
- `index.html`
- `styles.css`
- `resume-data.js` (after editing with your info)
- `resume-builder.js`
- `animations.js`

### 3. **Enable GitHub Pages**
- Go to repository Settings
- Scroll to "Pages" section
- Select "Deploy from a branch"
- Choose "main" branch
- Select "/ (root)" folder
- Save

### 4. **Access Your Resume**
Your resume will be available at: `https://your-username.github.io`

## 🎨 Customization Options

### **Color Scheme**
Edit `styles.css` to change colors:
```css
/* Primary colors */
#00ffff  /* Cyan */
#ff00ff  /* Magenta */
#ffff00  /* Yellow */
```

### **Animations Speed**
Modify timing in `animations.js`:
```javascript
// Change animation durations
setTimeout(addCommand, cmd.delay);  // Terminal typing speed
setInterval(() => {}, 300);         // Particle generation rate
```

### **Background Effects**
Toggle effects in `animations.js`:
```javascript
// Comment out to disable
this.createStars();        // Twinkling stars
this.createParticles();    // Floating particles
this.setupCursorTrail();   // Mouse trail effect
```

## 🔧 Advanced Customization

### **Adding New Sections**
1. Add data to `resume-data.js`
2. Create builder method in `resume-builder.js`
3. Add styling to `styles.css`
4. Call the builder method in `buildResume()`

### **New Skill Categories**
Just add to the `skills` object in `resume-data.js`:
```javascript
skills: {
    "Your New Category": [
        { name: "New Skill", level: 85 }
    ]
}
```

### **Custom Icons**
Update the `skillIcons` object:
```javascript
skillIcons: {
    "Your Category": "🎯"  // Any emoji
}
```

## 📱 Mobile Responsive

The resume is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

## 🌟 Features

- ✨ Cyberpunk-inspired design
- 🌟 Animated background effects
- 💻 Interactive terminal section
- 📊 Animated skill progress bars
- 🎯 Hover effects and transitions
- 📱 Fully responsive design
- 🚀 Fast loading and optimized
- 🔄 Easy content management

## 🎯 Quick Start Checklist

- [ ] Edit `resume-data.js` with your information
- [ ] Replace placeholder links with your actual profiles
- [ ] Update skill levels to reflect your expertise
- [ ] Add your real projects and achievements
- [ ] Upload files to GitHub repository
- [ ] Enable GitHub Pages
- [ ] Test your live resume URL

## 💡 Tips

1. **Keep descriptions concise** - Users scan quickly
2. **Update skill levels realistically** - Be honest about expertise
3. **Use action verbs** in achievements (Led, Developed, Implemented)
4. **Include metrics** when possible (50% improvement, 1000+ users)
5. **Keep it current** - Regular updates show you're active

## 🔗 Need Help?

- Check GitHub Pages documentation
- Validate your JSON syntax in `resume-data.js`
- Test locally by opening `index.html` in a browser
- Ensure all file names match exactly (case-sensitive)

---

**Ready to impress? Edit `resume-data.js` and deploy! 🚀**