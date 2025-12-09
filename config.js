// ===========================
// Portfolio Configuration
// ===========================
// Update these values with your own information

const PORTFOLIO_CONFIG = {
    // Personal Information
    name: 'Cholaraju Bhuvan',
    email: 'cholarajubhuvan9@gmail.com',
    phone: '+91-9113278365',
    location: 'Bengaluru, Karnataka',
    
    // Social Media - Update with your actual usernames
    social: {
        github: 'cholarajubhuvan',
        linkedin: 'cholarajubhuvan',
        leetcode: 'CholarajuBhuvan',
        twitter: '', // Optional
        portfolio: '' // Optional: Your custom domain
    },
    
    // API Configuration
    github: {
        username: 'cholarajubhuvan',
        // Optional: Add a Personal Access Token for higher rate limits (Public repo access only)
        // Get one from: https://github.com/settings/tokens
        token: '', // Leave empty for public access
        excludeRepos: ['username', 'username.github.io'], // Repos to exclude from display
        maxRepos: 10 // Maximum number of repos to display
    },
    
    leetcode: {
        username: 'CholarajuBhuvan',
        // LeetCode API is public, no token needed
    },
    
    // Featured Projects (manually added projects that will always show)
    featuredProjects: [
        {
            name: 'Generative AI for Adaptive Route Optimization',
            description: 'Developed a Generative AI-based model to dynamically optimize travel routes based on real-time traffic, weather, and user preferences.',
            technologies: ['Python', 'React', 'AI/ML', 'TensorFlow'],
            features: [
                'Implemented adaptive learning algorithms for continuous route refinement',
                'Utilized historical trip data and contextual insights for optimization'
            ],
            year: '2025',
            github: '', // Optional: GitHub link
            demo: '', // Optional: Live demo link
            icon: 'fa-route'
        },
        {
            name: 'Ecommerce Ecosystem Software',
            description: 'Developed a full-stack Ecommerce application with dynamic inventory management and comprehensive functionality.',
            technologies: ['HTML', 'CSS', 'JavaScript', 'MongoDB'],
            features: [
                'Implemented admin and associate logins with role-based access',
                'Built picker, packer, and delivery agent software modules',
                'Created real-time total calculation, checkout, and clear-bill features'
            ],
            year: '2025',
            github: '', // Optional: GitHub link
            demo: '', // Optional: Live demo link
            icon: 'fa-shopping-cart'
        }
    ],
    
    // Theme customization (optional)
    theme: {
        primaryColor: '#6366f1',
        secondaryColor: '#8b5cf6',
        accentColor: '#ec4899'
    }
};

// Export configuration
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PORTFOLIO_CONFIG;
}
