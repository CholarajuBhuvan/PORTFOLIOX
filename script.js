// ===========================
// Configuration - UPDATE THESE WITH YOUR USERNAMES
// ===========================
const CONFIG = {
    githubUsername: 'cholarajubhuvan', // Replace with your GitHub username
    leetcodeUsername: 'CholarajuBhuvan', // Your LeetCode username (case-sensitive!)
    githubToken: '' // Optional: Add GitHub personal access token for higher rate limits
};

// ===========================
// Navigation & Mobile Menu
// ===========================
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ===========================
// Smooth Scrolling
// ===========================
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// Active Navigation Link
// ===========================
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===========================
// Skill Bars Animation
// ===========================
const skillBars = document.querySelectorAll('.skill-progress');

const animateSkills = () => {
    skillBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        const barPosition = bar.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;
        
        if (barPosition < screenPosition) {
            bar.style.width = progress + '%';
        }
    });
};

window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);

// ===========================
// Intersection Observer for Fade-in Animations
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe elements
const elementsToObserve = document.querySelectorAll(
    '.education-item, .timeline-item, .project-card, .skill-category, .contact-item'
);

elementsToObserve.forEach(element => {
    observer.observe(element);
});

// ===========================
// Contact Form Handling
// ===========================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // Create mailto link
    const mailtoLink = `mailto:cholarajubhuvan9@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    showNotification('Message prepared! Your email client will open shortly.', 'success');
    
    // Reset form
    contactForm.reset();
});

// ===========================
// Notification System
// ===========================
function showNotification(message, type = 'success') {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 1rem 2rem;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        border-radius: 10px;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
        font-weight: 500;
    `;
    
    // Add to document
    document.body.appendChild(notification);
    
    // Remove after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

// Add notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===========================
// Typing Effect for Hero Title
// ===========================
const heroTitle = document.querySelector('.hero-title');
const originalText = heroTitle.textContent;
let charIndex = 0;

function typeEffect() {
    if (charIndex < originalText.length) {
        heroTitle.textContent = originalText.substring(0, charIndex + 1);
        charIndex++;
        setTimeout(typeEffect, 100);
    }
}

// Start typing effect on page load
window.addEventListener('load', () => {
    heroTitle.textContent = '';
    charIndex = 0;
    setTimeout(typeEffect, 500);
});

// ===========================
// Parallax Effect for Hero Section
// ===========================
const heroSection = document.querySelector('.hero');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxSpeed = 0.5;
    
    if (heroSection) {
        heroSection.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    }
});

// ===========================
// Dynamic Year in Footer
// ===========================
const footerYear = document.querySelector('.footer p');
if (footerYear) {
    const currentYear = new Date().getFullYear();
    footerYear.textContent = `© ${currentYear} Cholaraju Bhuvan. All rights reserved.`;
}

// ===========================
// Cursor Trail Effect (Optional)
// ===========================
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    const speed = 0.15;
    
    cursorX += (mouseX - cursorX) * speed;
    cursorY += (mouseY - cursorY) * speed;
    
    requestAnimationFrame(animateCursor);
}

animateCursor();

// ===========================
// Prevent Form Submission on Enter (except in textarea)
// ===========================
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    });
});

// ===========================
// Add Loading Animation
// ===========================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ===========================
// Console Welcome Message
// ===========================
console.log('%c👋 Welcome to Cholaraju Bhuvan\'s Portfolio!', 
    'color: #6366f1; font-size: 20px; font-weight: bold;');
console.log('%cInterested in working together? Get in touch!', 
    'color: #8b5cf6; font-size: 14px;');
console.log('%cEmail: cholarajubhuvan9@gmail.com', 
    'color: #10b981; font-size: 12px;');

// ===========================
// GitHub API Integration
// ===========================
async function fetchGitHubRepos() {
    const projectsContainer = document.getElementById('projectsContainer');
    const projectsLoader = document.getElementById('projectsLoader');
    
    try {
        const headers = {};
        if (CONFIG.githubToken) {
            headers['Authorization'] = `token ${CONFIG.githubToken}`;
        }
        
        // Fetch user data
        const userResponse = await fetch(`https://api.github.com/users/${CONFIG.githubUsername}`, { headers });
        const userData = await userResponse.json();
        
        // Fetch repositories
        const reposResponse = await fetch(`https://api.github.com/users/${CONFIG.githubUsername}/repos?sort=updated&per_page=100`, { headers });
        const repos = await reposResponse.json();
        
        if (Array.isArray(repos)) {
            // Update stats
            const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
            const totalForks = repos.reduce((sum, repo) => sum + repo.forks_count, 0);
            
            document.getElementById('totalRepos').textContent = userData.public_repos || repos.length;
            document.getElementById('totalStars').textContent = totalStars;
            document.getElementById('totalForks').textContent = totalForks;
            
            // Filter out forked repos and sort by stars
            const ownRepos = repos
                .filter(repo => !repo.fork)
                .sort((a, b) => b.stargazers_count - a.stargazers_count);
            
            // Display repositories
            ownRepos.forEach(repo => {
                const projectCard = createGitHubProjectCard(repo);
                projectsContainer.appendChild(projectCard);
            });
        }
        
        projectsLoader.classList.add('hidden');
    } catch (error) {
        console.error('Error fetching GitHub repos:', error);
        projectsLoader.innerHTML = `
            <div class="error-message">
                <i class="fas fa-exclamation-circle"></i>
                <p>Unable to load GitHub projects. Please check the username in the configuration.</p>
            </div>
        `;
    }
}

function createGitHubProjectCard(repo) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('data-category', 'github');
    
    const languageColor = getLanguageColor(repo.language);
    
    card.innerHTML = `
        <div class="project-header">
            <i class="fab fa-github"></i>
        </div>
        <div class="project-content">
            <h3>${repo.name}</h3>
            <p class="project-description">
                ${repo.description || 'No description available'}
            </p>
            <div class="project-tech">
                ${repo.language ? `
                    <span class="language-badge">
                        <span class="language-dot" style="background: ${languageColor}"></span>
                        ${repo.language}
                    </span>
                ` : ''}
                ${repo.topics.slice(0, 3).map(topic => `<span class="tech-tag">${topic}</span>`).join('')}
            </div>
            <div class="project-stats">
                <div class="project-stat">
                    <i class="fas fa-star"></i>
                    <span>${repo.stargazers_count}</span>
                </div>
                <div class="project-stat">
                    <i class="fas fa-code-branch"></i>
                    <span>${repo.forks_count}</span>
                </div>
                ${repo.size ? `
                    <div class="project-stat">
                        <i class="fas fa-database"></i>
                        <span>${(repo.size / 1024).toFixed(1)} MB</span>
                    </div>
                ` : ''}
            </div>
            <div class="project-links">
                <a href="${repo.html_url}" target="_blank" class="project-link">
                    <i class="fab fa-github"></i>
                    View Code
                </a>
                ${repo.homepage ? `
                    <a href="${repo.homepage}" target="_blank" class="project-link secondary">
                        <i class="fas fa-external-link-alt"></i>
                        Live Demo
                    </a>
                ` : ''}
            </div>
        </div>
    `;
    
    return card;
}

function getLanguageColor(language) {
    const colors = {
        'JavaScript': '#f1e05a',
        'Python': '#3572A5',
        'Java': '#b07219',
        'TypeScript': '#2b7489',
        'HTML': '#e34c26',
        'CSS': '#563d7c',
        'C++': '#f34b7d',
        'C': '#555555',
        'Go': '#00ADD8',
        'Rust': '#dea584',
        'Ruby': '#701516',
        'PHP': '#4F5D95'
    };
    return colors[language] || '#6366f1';
}

// ===========================
// LeetCode API Integration
// ===========================
async function fetchLeetCodeStats() {
    try {
        // Try alternative API first (more reliable)
        const response = await fetch(`https://alfa-leetcode-api.onrender.com/${CONFIG.leetcodeUsername}/solved`);
        const data = await response.json();
        
        if (data && data.solvedProblem !== undefined) {
            updateLeetCodeStatsFromAlfa(data);
            
            // Try to fetch recent submissions separately
            await fetchRecentSubmissionsAlternative();
        } else {
            // Fallback to another API
            await fetchLeetCodeStatsAlternative();
        }
    } catch (error) {
        console.error('Error fetching LeetCode stats:', error);
        await fetchLeetCodeStatsAlternative();
    }
}

async function fetchRecentSubmissionsAlternative() {
    try {
        const response = await fetch(`https://alfa-leetcode-api.onrender.com/${CONFIG.leetcodeUsername}/submission`);
        const data = await response.json();
        
        if (data && data.submission && data.submission.length > 0) {
            updateRecentSubmissionsFromAlfa(data.submission);
        } else {
            // Show placeholder
            showRecentSubmissionsPlaceholder();
        }
    } catch (error) {
        console.error('Error fetching recent submissions:', error);
        showRecentSubmissionsPlaceholder();
    }
}

function showRecentSubmissionsPlaceholder() {
    const container = document.getElementById('recentSubmissions');
    container.innerHTML = `
        <div style="text-align: center; padding: 2rem; color: var(--gray-text);">
            <i class="fas fa-code" style="font-size: 2rem; margin-bottom: 1rem; color: var(--primary-color);"></i>
            <p>Keep solving problems!</p>
            <a href="https://leetcode.com/u/${CONFIG.leetcodeUsername}" target="_blank" style="color: var(--primary-color); text-decoration: none; margin-top: 0.5rem; display: inline-block;">
                View Profile <i class="fas fa-external-link-alt"></i>
            </a>
        </div>
    `;
}

function updateRecentSubmissionsFromAlfa(submissions) {
    const container = document.getElementById('recentSubmissions');
    container.innerHTML = '';
    
    submissions.slice(0, 5).forEach(submission => {
        const timestamp = submission.timestamp ? new Date(submission.timestamp * 1000) : new Date();
        const timeAgo = getTimeAgo(timestamp);
        const isAccepted = submission.statusDisplay === 'Accepted' || submission.statusDisplay === 'accepted';
        
        const item = document.createElement('div');
        item.className = `submission-item ${isAccepted ? 'accepted' : 'failed'}`;
        item.innerHTML = `
            <div class="submission-header">
                <span class="submission-title">${submission.title || submission.titleSlug || 'Problem'}</span>
                <span class="submission-status ${isAccepted ? 'accepted' : 'failed'}">
                    ${submission.statusDisplay || 'Completed'}
                </span>
            </div>
            <div class="submission-details">
                <span><i class="fas fa-code"></i> ${submission.lang || 'N/A'}</span>
                <span><i class="fas fa-clock"></i> ${timeAgo}</span>
            </div>
        `;
        container.appendChild(item);
    });
}

async function fetchLeetCodeStatsAlternative() {
    try {
        // Use LeetCode's public profile API
        const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${CONFIG.leetcodeUsername}`);
        const data = await response.json();
        
        if (data && data.totalSolved !== undefined) {
            updateLeetCodeStatsFromAPI(data);
        } else {
            // Fallback to another API
            const response2 = await fetch(`https://alfa-leetcode-api.onrender.com/${CONFIG.leetcodeUsername}`);
            const data2 = await response2.json();
            
            if (data2) {
                updateLeetCodeStatsFromAlfa(data2);
            } else {
                showLeetCodeError();
            }
        }
    } catch (error) {
        console.error('Error with alternative LeetCode API:', error);
        showLeetCodeError();
    }
}

async function fetchRecentSubmissions() {
    try {
        const response = await fetch('https://leetcode.com/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: `
                    query recentSubmissions($username: String!, $limit: Int!) {
                        recentSubmissionList(username: $username, limit: $limit) {
                            title
                            titleSlug
                            timestamp
                            statusDisplay
                            lang
                        }
                    }
                `,
                variables: { 
                    username: CONFIG.leetcodeUsername,
                    limit: 10
                }
            })
        });
        
        const data = await response.json();
        
        if (data.data && data.data.recentSubmissionList) {
            updateRecentSubmissions(data.data.recentSubmissionList);
        }
    } catch (error) {
        console.error('Error fetching recent submissions:', error);
        document.getElementById('recentSubmissions').innerHTML = `
            <div style="text-align: center; padding: 2rem; color: var(--gray-text);">
                <p>Recent submissions unavailable</p>
            </div>
        `;
    }
}

function updateLeetCodeStatsFromAPI(data) {
    const easy = data.easySolved || 0;
    const medium = data.mediumSolved || 0;
    const hard = data.hardSolved || 0;
    const total = data.totalSolved || 0;
    
    // Update counts
    document.getElementById('easyCount').textContent = easy;
    document.getElementById('mediumCount').textContent = medium;
    document.getElementById('hardCount').textContent = hard;
    document.getElementById('totalSolved').textContent = total;
    
    // Animate circles
    const easyTotal = data.totalEasy || 835;
    const mediumTotal = data.totalMedium || 1745;
    const hardTotal = data.totalHard || 745;
    
    animateCircle('easyCircle', easy, easyTotal);
    animateCircle('mediumCircle', medium, mediumTotal);
    animateCircle('hardCircle', hard, hardTotal);
    
    // Update rank
    if (data.ranking) {
        document.getElementById('userRank').textContent = `Rank: ${data.ranking.toLocaleString()}`;
    } else {
        document.getElementById('userRank').textContent = 'Active Solver';
    }
    
    // Calculate acceptance rate
    const acceptanceRate = data.acceptanceRate || ((total / (total + 10)) * 100).toFixed(1);
    document.getElementById('acceptanceRate').textContent = `${acceptanceRate}% Acceptance`;
}

function updateLeetCodeStatsFromAlfa(data) {
    const easy = data.easySolved || 0;
    const medium = data.mediumSolved || 0;
    const hard = data.hardSolved || 0;
    const total = data.solvedProblem || data.totalSolved || 0;
    
    // Update counts
    document.getElementById('easyCount').textContent = easy;
    document.getElementById('mediumCount').textContent = medium;
    document.getElementById('hardCount').textContent = hard;
    document.getElementById('totalSolved').textContent = total;
    
    // Animate circles with realistic totals
    animateCircle('easyCircle', easy, 835);
    animateCircle('mediumCircle', medium, 1745);
    animateCircle('hardCircle', hard, 745);
    
    // Update rank
    if (data.ranking) {
        document.getElementById('userRank').textContent = `Rank: ${data.ranking.toLocaleString()}`;
    } else {
        document.getElementById('userRank').textContent = 'Active Solver';
    }
    
    // Update acceptance rate
    const acceptanceRate = data.acceptanceRate || (total > 0 ? ((total / (total + 10)) * 100).toFixed(1) : '0');
    document.getElementById('acceptanceRate').textContent = `${acceptanceRate}% Acceptance`;
}

function updateRecentSubmissionsSimple(submissions) {
    const container = document.getElementById('recentSubmissions');
    container.innerHTML = '';
    
    submissions.slice(0, 5).forEach(submission => {
        const item = document.createElement('div');
        item.className = 'submission-item accepted';
        item.innerHTML = `
            <div class="submission-header">
                <span class="submission-title">${submission.title || 'Problem'}</span>
                <span class="submission-status accepted">Solved</span>
            </div>
            <div class="submission-details">
                <span><i class="fas fa-code"></i> ${submission.lang || 'N/A'}</span>
                <span><i class="fas fa-clock"></i> Recently</span>
            </div>
        `;
        container.appendChild(item);
    });
}

function updateLeetCodeStats(data) {
    const stats = data.matchedUser.submitStats.acSubmissionNum;
    
    let easy = 0, medium = 0, hard = 0, total = 0;
    
    stats.forEach(stat => {
        if (stat.difficulty === 'Easy') easy = stat.count;
        if (stat.difficulty === 'Medium') medium = stat.count;
        if (stat.difficulty === 'Hard') hard = stat.count;
        if (stat.difficulty === 'All') total = stat.count;
    });
    
    // Update counts
    document.getElementById('easyCount').textContent = easy;
    document.getElementById('mediumCount').textContent = medium;
    document.getElementById('hardCount').textContent = hard;
    document.getElementById('totalSolved').textContent = total;
    
    // Animate circles with realistic totals
    animateCircle('easyCircle', easy, 835);
    animateCircle('mediumCircle', medium, 1745);
    animateCircle('hardCircle', hard, 745);
    
    // Update rank
    if (data.matchedUser.profile && data.matchedUser.profile.ranking) {
        document.getElementById('userRank').textContent = `Rank: ${data.matchedUser.profile.ranking.toLocaleString()}`;
    } else {
        document.getElementById('userRank').textContent = 'Active Solver';
    }
    
    // Calculate acceptance rate
    const acceptanceRate = total > 0 ? ((total / (total + 100)) * 100).toFixed(1) : 0;
    document.getElementById('acceptanceRate').textContent = `${acceptanceRate}% Acceptance`;
}

function animateCircle(circleId, count, total) {
    const circle = document.getElementById(circleId);
    const circumference = 283; // 2 * π * r (r = 45)
    const percentage = (count / total) * 100;
    const offset = circumference - (percentage / 100) * circumference;
    
    setTimeout(() => {
        circle.style.strokeDashoffset = offset;
    }, 100);
}

function updateRecentSubmissions(submissions) {
    const container = document.getElementById('recentSubmissions');
    container.innerHTML = '';
    
    submissions.slice(0, 5).forEach(submission => {
        const date = new Date(submission.timestamp * 1000);
        const timeAgo = getTimeAgo(date);
        const status = submission.statusDisplay.toLowerCase();
        const isAccepted = status.includes('accepted');
        
        const item = document.createElement('div');
        item.className = `submission-item ${isAccepted ? 'accepted' : 'failed'}`;
        item.innerHTML = `
            <div class="submission-header">
                <span class="submission-title">${submission.title}</span>
                <span class="submission-status ${isAccepted ? 'accepted' : 'failed'}">
                    ${submission.statusDisplay}
                </span>
            </div>
            <div class="submission-details">
                <span><i class="fas fa-code"></i> ${submission.lang}</span>
                <span><i class="fas fa-clock"></i> ${timeAgo}</span>
            </div>
        `;
        container.appendChild(item);
    });
}

function getTimeAgo(date) {
    const seconds = Math.floor((new Date() - date) / 1000);
    
    let interval = seconds / 31536000;
    if (interval > 1) return Math.floor(interval) + ' years ago';
    
    interval = seconds / 2592000;
    if (interval > 1) return Math.floor(interval) + ' months ago';
    
    interval = seconds / 86400;
    if (interval > 1) return Math.floor(interval) + ' days ago';
    
    interval = seconds / 3600;
    if (interval > 1) return Math.floor(interval) + ' hours ago';
    
    interval = seconds / 60;
    if (interval > 1) return Math.floor(interval) + ' minutes ago';
    
    return Math.floor(seconds) + ' seconds ago';
}

function showLeetCodeError() {
    const container = document.getElementById('recentSubmissions');
    container.innerHTML = `
        <div class="error-message" style="text-align: center; padding: 2rem; color: var(--gray-text);">
            <i class="fas fa-exclamation-circle" style="font-size: 2rem; margin-bottom: 1rem; color: var(--primary-color);"></i>
            <p>Unable to load LeetCode data automatically.</p>
            <p style="font-size: 0.9rem; margin-top: 1rem;">Visit your profile: <a href="https://leetcode.com/u/${CONFIG.leetcodeUsername}" target="_blank" style="color: var(--primary-color);">LeetCode Profile</a></p>
        </div>
    `;
    
    // Set some default encouraging text
    document.getElementById('userRank').textContent = 'Keep Solving!';
    document.getElementById('acceptanceRate').textContent = 'Check Profile';
}

// ===========================
// Projects Filter
// ===========================
const filterBtns = document.querySelectorAll('.filter-btn');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        const projects = document.querySelectorAll('.project-card');
        
        projects.forEach(project => {
            if (filter === 'all') {
                project.classList.remove('hidden');
            } else {
                const category = project.getAttribute('data-category');
                if (category === filter) {
                    project.classList.remove('hidden');
                } else {
                    project.classList.add('hidden');
                }
            }
        });
    });
});

// ===========================
// Initialize Data Fetching
// ===========================
window.addEventListener('load', () => {
    fetchGitHubRepos();
    fetchLeetCodeStats();
});
