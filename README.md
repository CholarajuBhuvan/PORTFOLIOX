# Cholaraju Bhuvan - Dynamic Portfolio Website

A modern, responsive, and **fully dynamic** portfolio website that automatically fetches and displays your GitHub projects and LeetCode statistics in real-time.

## 🌟 Features

### Dynamic Features
- **🔄 GitHub Integration**: Automatically fetches all your public repositories
- **📊 Live Stats**: Real-time GitHub stats (total repos, stars, forks)
- **💻 LeetCode Dashboard**: Live LeetCode problem-solving statistics
- **🏆 Difficulty Breakdown**: Visual representation of Easy, Medium, and Hard problems solved
- **⚡ Recent Submissions**: Shows your latest LeetCode submissions
- **🎯 Smart Filtering**: Filter projects by category (All, GitHub, Featured)

### Design Features
- **Responsive Design**: Fully responsive layout that works seamlessly on all devices
- **Modern UI/UX**: Clean, attractive design with smooth animations and transitions
- **Interactive Elements**: Dynamic skill bars, typing effects, and smooth scrolling
- **Contact Form**: Integrated contact form for easy communication
- **Experience Timeline**: Visual timeline of work experience

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid, Flexbox, and animations
- **JavaScript (ES6+)**: Async/await, Fetch API, DOM manipulation
- **GitHub API**: Real-time repository data
- **LeetCode API**: Problem-solving statistics
- **Font Awesome**: Icon library
- **Google Fonts**: Poppins font family

## 📂 Project Structure

```
portfolio/
│
├── index.html          # Main HTML file
├── style.css          # Stylesheet with animations
├── script.js          # JavaScript with API integrations
├── config.js          # Configuration file (UPDATE THIS!)
└── README.md          # Project documentation
```

## 🚀 Quick Start

### 1. Update Configuration

Open `script.js` and update the configuration at the top:

```javascript
const CONFIG = {
    githubUsername: 'your-github-username',    // REQUIRED
    leetcodeUsername: 'your-leetcode-username', // REQUIRED
    githubToken: '' // Optional: For higher API rate limits
};
```

### 2. Deploy Online

#### Option A: GitHub Pages (Recommended - Free!)

1. **Create a new repository** named `your-username.github.io`
2. **Upload all files** to the repository
3. **Enable GitHub Pages**:
   - Go to Settings → Pages
   - Select "main" branch as source
   - Click Save
4. **Access your portfolio** at: `https://your-username.github.io`

#### Option B: Netlify (Free)

1. Go to [Netlify](https://netlify.com)
2. Drag and drop your portfolio folder
3. Your site is live instantly!

#### Option C: Vercel (Free)

1. Go to [Vercel](https://vercel.com)
2. Import your GitHub repository
3. Deploy with one click!

#### Option D: Firebase Hosting (Free)

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

### 3. GitHub Personal Access Token (Optional)

For **higher API rate limits** (60 → 5000 requests/hour):

1. Go to GitHub → Settings → Developer Settings → Personal Access Tokens
2. Generate new token (classic)
3. Select **only** `public_repo` scope
4. Copy token and add to config:
   ```javascript
   githubToken: 'your_token_here'
   ```

**⚠️ Security Note**: Never commit tokens to public repositories!

## 📱 Sections

- **Home**: Introduction with call-to-action buttons and social links
- **About**: Personal information and educational background
- **Experience**: Professional work history with timeline
- **Projects**: 
  - Featured manually-added projects
  - Dynamically loaded GitHub repositories
  - Filter by category
  - Live project statistics
- **LeetCode**: 
  - Total problems solved
  - Difficulty breakdown with animated charts
  - Recent submissions
  - Ranking and acceptance rate
- **Skills**: Technical skills with animated progress bars and certifications
- **Contact**: Contact information and working form

## 🎨 Customization

### Update Personal Information

Edit `index.html` to update:
- Contact details
- Education history
- Work experience
- Featured projects

### Change Colors

Modify CSS variables in `style.css`:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #ec4899;
    /* ... more colors */
}
```

### Add More Projects

You can manually add featured projects in the HTML or they'll automatically load from your GitHub!

## 🔧 API Information

### GitHub API
- **Rate Limit (No Token)**: 60 requests/hour
- **Rate Limit (With Token)**: 5,000 requests/hour
- **Documentation**: https://docs.github.com/en/rest

### LeetCode API
- **Public GraphQL API**: No authentication needed
- **Note**: May have rate limiting
- **Fallback**: Shows error message if unavailable

## 📊 Features Breakdown

### GitHub Integration
- ✅ Fetches all public repositories
- ✅ Shows repository statistics (stars, forks, size)
- ✅ Displays primary language with color coding
- ✅ Shows repository topics as tags
- ✅ Links to GitHub and live demos
- ✅ Excludes forked repositories
- ✅ Sorts by stars/recent updates

### LeetCode Integration
- ✅ Total problems solved
- ✅ Easy/Medium/Hard breakdown
- ✅ Animated progress circles
- ✅ User ranking
- ✅ Acceptance rate
- ✅ Recent submissions with timestamps
- ✅ Submission status (Accepted/Failed)

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 📧 Contact

- **Email**: cholarajubhuvan9@gmail.com
- **Phone**: +91-9113278365
- **LinkedIn**: [linkedin.com/in/cholarajubhuvan](https://linkedin.com/in/cholarajubhuvan)
- **Location**: Bengaluru, Karnataka

## 🐛 Troubleshooting

### GitHub Projects Not Loading?
1. Check your username in `CONFIG`
2. Check browser console for errors
3. Verify internet connection
4. Check GitHub API rate limit: https://api.github.com/rate_limit

### LeetCode Stats Not Showing?
1. Verify your LeetCode username
2. Ensure your profile is public
3. Check browser console for errors
4. LeetCode API may have restrictions

### CORS Issues?
- GitHub Pages automatically handles CORS
- If hosting locally, use a local server:
  ```bash
  python -m http.server 8000
  # or
  npx http-server
  ```

## 📄 License

This project is open source and available for personal use.

## 🙏 Acknowledgments

- GitHub API for repository data
- LeetCode for problem-solving stats
- Font Awesome for icons
- Google Fonts for typography
- Inspiration from modern portfolio designs

## 🔄 Updates

### Latest Version (v2.0)
- ✅ Dynamic GitHub integration
- ✅ Live LeetCode statistics
- ✅ Project filtering system
- ✅ Animated statistics
- ✅ Recent submissions feed
- ✅ Responsive design improvements

---

**Built with ❤️ by Cholaraju Bhuvan**

🚀 **Ready to deploy!** Just update the config and push to GitHub Pages!
