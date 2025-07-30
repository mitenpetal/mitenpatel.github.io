// animations.js
// Contains all animation and interactive functionality

class AnimationManager {
    constructor() {
        this.init();
    }

    // Initialize all animations
    init() {
        this.createStars();
        this.createParticles();
        this.setupScrollAnimations();
        this.setupInteractiveEffects();
        this.setupTerminalAnimation();
        this.setupScrollProgress();
        this.setupCursorTrail();
    }

    // Create animated stars background
    createStars() {
        const starsContainer = document.getElementById('stars');
        const numStars = 100;
        
        for (let i = 0; i < numStars; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.animationDelay = Math.random() * 3 + 's';
            starsContainer.appendChild(star);
        }
    }

    // Create floating particles
    createParticles() {
        const particlesContainer = document.getElementById('particles');
        
        setInterval(() => {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
            particlesContainer.appendChild(particle);
            
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.remove();
                }
            }, 6000);
        }, 300);
    }

    // Setup scroll-based animations
    setupScrollAnimations() {
        // Animate skill bars on scroll
        const skillBars = document.querySelectorAll('.skill-progress');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const width = entry.target.style.width;
                    entry.target.style.width = '0%';
                    setTimeout(() => {
                        entry.target.style.width = width;
                    }, 100);
                }
            });
        });
        
        skillBars.forEach(bar => observer.observe(bar));

        // Animate timeline items
        const timelineItems = document.querySelectorAll('.timeline-item');
        const timelineObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateX(0)';
                    }, index * 200);
                }
            });
        });

        timelineItems.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(-50px)';
            item.style.transition = 'all 0.6s ease';
            timelineObserver.observe(item);
        });
    }

    // Setup interactive effects
    setupInteractiveEffects() {
        // Contact item interactions
        document.querySelectorAll('.contact-item').forEach(item => {
            item.addEventListener('click', () => {
                item.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    item.style.transform = 'translateY(-2px)';
                }, 150);
            });
        });

        // Project card interactions
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.borderColor = '#00ffff';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            });
        });

        // Skill item hover effects
        document.querySelectorAll('.skill-item').forEach(item => {
            item.addEventListener('mouseenter', () => {
                const progress = item.querySelector('.skill-progress');
                if (progress) {
                    progress.style.boxShadow = '0 0 20px rgba(0, 255, 255, 0.5)';
                }
            });
            
            item.addEventListener('mouseleave', () => {
                const progress = item.querySelector('.skill-progress');
                if (progress) {
                    progress.style.boxShadow = 'none';
                }
            });
        });

        // Certification card hover effects
        document.querySelectorAll('.cert-item').forEach(cert => {
            cert.addEventListener('mouseenter', () => {
                cert.style.transform = 'scale(1.05) rotateY(5deg)';
            });
            
            cert.addEventListener('mouseleave', () => {
                cert.style.transform = 'scale(1) rotateY(0deg)';
            });
        });
    }

    // Setup terminal typing animation
    setupTerminalAnimation() {
        // Wait for content to be loaded
        setTimeout(() => {
            const terminal = document.querySelector('.terminal-content');
            if (!terminal || !resumeData.terminalCommands) return;

            // Clear existing content except the initial lines
            const initialContent = terminal.innerHTML;
            terminal.innerHTML = `
                <div><span class="terminal-prompt">security@expert:~$</span> whoami</div>
                <div>${resumeData.summary.intro}</div>
            `;

            let index = 0;
            const commands = resumeData.terminalCommands;

            function addCommand() {
                if (index < commands.length) {
                    const cmd = commands[index];
                    const line = document.createElement('div');
                    
                    if (cmd.prompt) {
                        line.innerHTML = `<span class="terminal-prompt">${cmd.prompt}</span>${cmd.command}`;
                    } else {
                        line.textContent = cmd.command;
                    }
                    
                    terminal.appendChild(line);
                    index++;
                    setTimeout(addCommand, cmd.delay);
                }
            }
            
            setTimeout(addCommand, 2000);
        }, 1000);
    }

    // Setup scroll progress indicator
    setupScrollProgress() {
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.body.offsetHeight - window.innerHeight;
            const scrollPercent = scrollTop / docHeight;
            
            let progressBar = document.querySelector('.scroll-progress');
            if (!progressBar) {
                progressBar = document.createElement('div');
                progressBar.className = 'scroll-progress';
                progressBar.style.cssText = `
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 0%;
                    height: 3px;
                    background: linear-gradient(90deg, #00ffff, #ff00ff);
                    z-index: 10000;
                    transition: width 0.1s ease;
                `;
                document.body.appendChild(progressBar);
            }
            
            progressBar.style.width = (scrollPercent * 100) + '%';
        });
    }

    // Setup mouse cursor trail effect
    setupCursorTrail() {
        document.addEventListener('mousemove', (e) => {
            let cursor = document.querySelector('.cursor-trail');
            if (!cursor) {
                cursor = document.createElement('div');
                cursor.className = 'cursor-trail';
                cursor.style.cssText = `
                    position: fixed;
                    width: 20px;
                    height: 20px;
                    border: 2px solid #00ffff;
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 9999;
                    transition: all 0.1s ease;
                    mix-blend-mode: difference;
                    opacity: 0.7;
                `;
                document.body.appendChild(cursor);
            }
            
            cursor.style.left = e.clientX - 10 + 'px';
            cursor.style.top = e.clientY - 10 + 'px';
        });
    }

    // Add typing effect to any element
    typeText(element, text, speed = 50) {
        let index = 0;
        element.textContent = '';
        
        function type() {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }

    // Add floating effect to elements
    addFloatingEffect(selector) {
        document.querySelectorAll(selector).forEach((element, index) => {
            element.style.animation = `float 3s ease-in-out infinite`;
            element.style.animationDelay = `${index * 0.2}s`;
        });
    }

    // Add parallax effect
    setupParallax() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.parallax');
            
            parallaxElements.forEach(element => {
                const speed = element.dataset.speed || 0.5;
                element.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
    }

    // Add matrix rain effect (optional)
    createMatrixRain() {
        const canvas = document.createElement('canvas');
        canvas.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
            opacity: 0.1;
        `;
        document.body.appendChild(canvas);

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
        const drops = [];
        const fontSize = 14;
        const columns = canvas.width / fontSize;

        for (let i = 0; i < columns; i++) {
            drops[i] = 1;
        }

        function draw() {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#00ffff';
            ctx.font = fontSize + 'px monospace';

            for (let i = 0; i < drops.length; i++) {
                const text = chars[Math.floor(Math.random() * chars.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }

        setInterval(draw, 35);
    }
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const animationManager = new AnimationManager();
});