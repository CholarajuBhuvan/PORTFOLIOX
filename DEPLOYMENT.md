# Deployment Checklist ✅

## Before Deploying

- [ ] Update `script.js` with your GitHub username (line 4)
- [ ] Update `script.js` with your LeetCode username (line 5)
- [ ] Update personal info in `index.html` (email, phone, location)
- [ ] Update social media links in `index.html`
- [ ] Verify all sections have correct information
- [ ] Test locally by opening `index.html` in browser
- [ ] Check browser console for any errors (F12)

## GitHub Pages Deployment

### Method 1: Via GitHub Website
- [ ] Create new repo named `your-username.github.io`
- [ ] Upload all files (index.html, style.css, script.js, config.js)
- [ ] Go to Settings → Pages
- [ ] Select "main" branch as source
- [ ] Save and wait 2-3 minutes
- [ ] Visit `https://your-username.github.io`

### Method 2: Via Git Commands
```bash
# In your portfolio folder, run:
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git
git push -u origin main
```

## Alternative Deployment Options

### Netlify
1. [ ] Go to netlify.com
2. [ ] Drag & drop portfolio folder
3. [ ] Done! Get instant URL

### Vercel
1. [ ] Go to vercel.com
2. [ ] Import from GitHub
3. [ ] Deploy with one click

### Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

## Post-Deployment Checklist

- [ ] Portfolio is accessible online
- [ ] GitHub projects are loading correctly
- [ ] LeetCode stats are displaying
- [ ] All navigation links work
- [ ] Contact form opens email client
- [ ] Social media links are correct
- [ ] Mobile responsive design works
- [ ] All images/icons are loading
- [ ] No console errors

## GitHub API Rate Limits

**Without Token:** 60 requests/hour
**With Token:** 5,000 requests/hour

To get higher limits:
1. [ ] Go to GitHub → Settings → Developer Settings
2. [ ] Generate Personal Access Token (classic)
3. [ ] Select only `public_repo` scope
4. [ ] Copy token
5. [ ] Add to `script.js` CONFIG.githubToken
6. [ ] **NEVER commit token to public repo!**

## Testing URLs

- **GitHub API Rate Limit:** https://api.github.com/rate_limit
- **Your GitHub Repos:** https://api.github.com/users/YOUR-USERNAME/repos
- **Your GitHub Profile:** https://github.com/YOUR-USERNAME

## Common Issues & Solutions

### GitHub Projects Not Loading
- ✅ Check username in CONFIG
- ✅ Ensure profile is public
- ✅ Check API rate limit
- ✅ Open browser console for errors

### LeetCode Stats Not Showing
- ✅ Verify LeetCode username
- ✅ Ensure profile is public
- ✅ LeetCode API may have restrictions
- ✅ Check browser console

### Portfolio Not Updating
- ✅ Clear browser cache (Ctrl+Shift+R)
- ✅ Wait 2-3 minutes for GitHub Pages
- ✅ Check repository is public
- ✅ Verify files are uploaded correctly

## Performance Tips

- ✅ Enable GitHub Pages caching
- ✅ Use GitHub token for better rate limits
- ✅ Compress images if any added
- ✅ Test on multiple devices
- ✅ Check mobile responsiveness

## SEO & Sharing

- [ ] Update meta description in `index.html`
- [ ] Add Open Graph tags for social media
- [ ] Create a custom domain (optional)
- [ ] Submit to Google Search Console
- [ ] Share on LinkedIn, Twitter, etc.

## Maintenance

- [ ] Update projects regularly
- [ ] Keep dependencies updated
- [ ] Monitor API rate limits
- [ ] Check for broken links monthly
- [ ] Update resume/experience as needed

## Next Steps After Deployment

1. ✅ Share portfolio link on LinkedIn
2. ✅ Add to resume
3. ✅ Include in email signature
4. ✅ Share with recruiters
5. ✅ Add to GitHub profile README
6. ✅ Pin best repositories on GitHub
7. ✅ Keep solving LeetCode problems (auto-updates!)
8. ✅ Add new projects to GitHub (auto-displays!)

---

**Your Portfolio URL:** `https://your-username.github.io`

🎉 **Congratulations!** Your dynamic portfolio is now live!
