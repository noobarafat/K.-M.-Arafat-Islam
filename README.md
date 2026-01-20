# K M Arafat Islam - Portfolio

A modern, fully responsive portfolio website showcasing my projects, skills, and professional information.

## Features

✨ **Modern Design**
- Clean and professional UI with gradient color schemes
- Smooth animations and transitions
- Fully responsive across all devices

🎨 **Interactive Elements**
- Mobile-friendly hamburger menu
- Smooth scrolling navigation
- Animated skill progress bars
- Project cards with hover effects
- Scroll-to-top button
- Form validation with notifications

📱 **Responsive Sections**
- **Home**: Hero section with profile introduction
- **About**: Personal information and downloadable resume
- **Skills**: Categorized skill sets with progress indicators
- **Projects**: Showcase of 6 portfolio projects
- **Contact**: Interactive contact form with validation

## Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript**: Interactive functionality and animations
- **Font Awesome**: Icon library for visual elements

## Getting Started

1. **Clone or download** this repository
2. **Customize the content**:
   - Update personal information in `index.html`
   - Replace placeholder images in `assets/` folder
   - Modify social media links
   - Add your own projects and skills
3. **Open `index.html`** in your browser

## Customization Guide

### Personal Information
Edit the following sections in `index.html`:
- Name and tagline in the home section
- About me text and info items
- Contact details
- Social media links

### Skills
Update the skill categories and percentages in the skills section. Each skill has:
```html
<div class="skill-item">
    <div class="skill-info">
        <span>Skill Name</span>
        <span>Percentage%</span>
    </div>
    <div class="skill-bar">
        <div class="skill-progress" style="width: Percentage%"></div>
    </div>
</div>
```

### Projects
Each project card includes:
- Project image (stored in `assets/`)
- Project title and description
- Technology tags
- Links to live demo and GitHub repo

### Colors
Customize the color scheme in `styles.css` by modifying CSS variables:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #ec4899;
    /* ... more colors */
}
```

## Images

Replace the placeholder SVG images in the `assets/` folder with your own:
- `profile.jpg` - Your profile photo
- `project1.jpg` through `project6.jpg` - Project screenshots
- Add `resume.pdf` for downloadable resume

## Contact Form

The contact form includes validation but needs backend integration for actual email sending. To implement:

1. Create a backend API endpoint (Node.js, PHP, Python, etc.)
2. Update the form submission in `script.js`:

```javascript
fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, subject, message })
})
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Optimized with debounced scroll events
- Lazy loading for animations
- Minimal external dependencies
- Fast load times

## License

This project is open source and available for personal and commercial use.

## Contact

For questions or collaborations:
- Email: your.email@example.com
- GitHub: [yourusername](https://github.com/yourusername)
- LinkedIn: [yourprofile](https://linkedin.com/in/yourusername)

---

**Developed with ❤️ by K M Arafat Islam**
