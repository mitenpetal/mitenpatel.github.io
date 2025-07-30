// resume-builder.js
// This file builds the resume content dynamically from resume-data.js

class ResumeBuilder {
    constructor(data) {
        this.data = data;
    }

    // Build the header section
    buildHeader() {
        const header = document.getElementById('header');
        header.innerHTML = `
            <div class="header-content">
                <h1 class="name">${this.data.personal.name}</h1>
                <h2 class="title">${this.data.personal.title}</h2>
                <div class="contact-info">
                    <a href="mailto:${this.data.personal.email}" class="contact-item">
                        <span>📧</span>
                        <span>${this.data.personal.email}</span>
                    </a>
                    <div class="contact-item">
                        <span>📱</span>
                        <span>${this.data.personal.phone}</span>
                    </div>
                    <a href="${this.data.personal.linkedin}" class="contact-item" target="_blank">
                        <span>💼</span>
                        <span>LinkedIn Profile</span>
                    </a>
                    <a href="${this.data.personal.github}" class="contact-item" target="_blank">
                        <span>🐙</span>
                        <span>GitHub Portfolio</span>
                    </a>
                </div>
            </div>
        `;
    }

    // Build the terminal section
    buildTerminal() {
        const terminal = document.getElementById('terminal');
        terminal.innerHTML = `
            <div class="terminal-header">
                <div class="terminal-button red"></div>
                <div class="terminal-button yellow"></div>
                <div class="terminal-button green"></div>
            </div>
            <div class="terminal-content">
                <div><span class="terminal-prompt">security@expert:~$</span> whoami</div>
                <div>${this.data.summary.intro}</div>
                <div><span class="terminal-prompt">security@expert:~$</span> cat specializations.txt</div>
                ${this.data.summary.specializations.map(spec => `<div>${spec}</div>`).join('')}
                <div><span class="terminal-prompt">security@expert:~$</span> <span class="cursor"></span></div>
            </div>
        `;
    }

    // Build the skills matrix
    buildSkills() {
        const skillsMatrix = document.getElementById('skills-matrix');
        let skillsHTML = '';

        Object.entries(this.data.skills).forEach(([category, skills]) => {
            const icon = this.data.skillIcons[category] || '⚡';
            skillsHTML += `
                <div class="skill-category">
                    <h3 class="skill-title">
                        <div class="skill-icon">${icon}</div>
                        ${category}
                    </h3>
                    ${skills.map(skill => `
                        <div class="skill-item">
                            <span class="skill-name">${skill.name}</span>
                            <div class="skill-level">
                                <div class="skill-progress" style="width: ${skill.level}%"></div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        });

        skillsMatrix.innerHTML = skillsHTML;
    }

    // Build the experience timeline
    buildExperience() {
        const timeline = document.getElementById('experience-timeline');
        let experienceHTML = '';

        this.data.experience.forEach(job => {
            experienceHTML += `
                <div class="timeline-item">
                    <h3 class="job-title">${job.title}</h3>
                    <div class="company">${job.company}</div>
                    <div class="duration">${job.duration}</div>
                    <ul class="achievements">
                        ${job.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                    </ul>
                </div>
            `;
        });

        timeline.innerHTML = experienceHTML;
    }

    // Build the projects grid
    buildProjects() {
        const projectsGrid = document.getElementById('projects-grid');
        let projectsHTML = '';

        this.data.projects.forEach(project => {
            projectsHTML += `
                <div class="project-card">
                    <h3 class="project-title">${project.title}</h3>
                    <div class="project-tech">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                    <p>${project.description}</p>
                    <div class="project-links">
                        ${project.github ? `<a href="${project.github}" class="project-link" target="_blank">GitHub</a>` : ''}
                        ${project.demo ? `<a href="${project.demo}" class="project-link" target="_blank">Live Demo</a>` : ''}
                    </div>
                </div>
            `;
        });

        projectsGrid.innerHTML = projectsHTML;
    }

    // Build the certifications section
    buildCertifications() {
        const certifications = document.getElementById('certifications');
        let certsHTML = '';

        this.data.certifications.forEach(cert => {
            certsHTML += `
                <div class="cert-item">
                    <div class="cert-icon">${cert.icon}</div>
                    <h4>${cert.name}</h4>
                    <p>${cert.description}</p>
                    <div class="cert-date">${cert.date}</div>
                </div>
            `;
        });

        certifications.innerHTML = certsHTML;
    }

    // Build the footer
    buildFooter() {
        const footer = document.getElementById('footer');
        footer.innerHTML = `
            <h3>Let's Connect & Collaborate</h3>
            <p>Ready to discuss cutting-edge security solutions, AI implementations, or enterprise administration challenges.</p>
            <div class="social-links">
                <a href="${this.data.personal.linkedin}" class="social-link" target="_blank">${this.data.socialIcons.linkedin}</a>
                <a href="${this.data.personal.github}" class="social-link" target="_blank">${this.data.socialIcons.github}</a>
                <a href="${this.data.personal.twitter}" class="social-link" target="_blank">${this.data.socialIcons.twitter}</a>
                <a href="mailto:${this.data.personal.email}" class="social-link">${this.data.socialIcons.email}</a>
            </div>
        `;
    }

    // Build the entire resume
    buildResume() {
        this.buildHeader();
        this.buildTerminal();
        this.buildSkills();
        this.buildExperience();
        this.buildProjects();
        this.buildCertifications();
        this.buildFooter();
    }
}

// Initialize the resume builder when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const builder = new ResumeBuilder(resumeData);
    builder.buildResume();
});