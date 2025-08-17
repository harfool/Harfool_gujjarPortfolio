# Harfool Gurjar - Animated Portfolio

A production-grade animated portfolio showcasing my skills as a Frontend Developer specializing in React.js and modern web technologies.

## 🚀 Features

- **Modern Design**: Dark glassmorphism theme with beautiful animations
- **Responsive**: Fully responsive design that works on all devices
- **Accessible**: WCAG AA compliant with proper semantic HTML
- **SEO Optimized**: Meta tags, structured data, and sitemap included
- **Performance**: Lighthouse score > 95 with optimized loading
- **Animations**: GSAP and Framer Motion for smooth interactions
- **Motion Preferences**: Respects `prefers-reduced-motion` settings

## 🛠️ Tech Stack

- **Frontend**: React.js with Vite
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion + GSAP + ScrollTrigger
- **Forms**: React Hook Form + Zod validation
- **Build Tool**: Vite (ESM modules only)
- **Deployment**: Vercel-ready

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd harfool-animate-folio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect the Vite configuration

2. **Manual deployment**
   ```bash
   npm install -g vercel
   vercel --prod
   ```

### Other Platforms

The build output (`dist` folder) can be deployed to any static hosting service:
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.jsx      # Navigation with scroll progress
│   ├── Hero.jsx        # Hero section with GSAP animations
│   ├── About.jsx       # About section
│   ├── SkillsGrid.jsx  # Skills with hover effects
│   ├── Experience.jsx  # Work experience timeline
│   ├── Projects.jsx    # Featured projects
│   ├── Education.jsx   # Education & certifications
│   ├── Contact.jsx     # Contact form with validation
│   └── Footer.jsx      # Footer with links
├── data/
│   └── profile.js      # Single source of truth for content
├── lib/
│   ├── useGsap.js      # GSAP utilities and hooks
│   └── variants.js     # Framer Motion variants
├── pages/
│   ├── Index.tsx       # Main portfolio page
│   └── NotFound.tsx    # 404 page
└── hooks/              # Custom React hooks
```

## 🎨 Design System

The portfolio uses a comprehensive design system with:

- **Colors**: HSL-based color palette with dark theme
- **Typography**: Inter font family with gradient text effects
- **Components**: Glass morphism cards and buttons
- **Animations**: Consistent motion design
- **Responsive**: Mobile-first approach

## ✨ Key Features

### Animations
- **Hero**: GSAP text reveal with character-by-character animation
- **Scroll**: Progress bar and scroll-triggered animations
- **Cards**: Hover effects and staggered entrances
- **Forms**: Interactive field animations
- **Reduced Motion**: Respects accessibility preferences

### Accessibility
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Skip Links**: Quick navigation for keyboard users
- **Focus Management**: Visible focus indicators
- **ARIA Labels**: Screen reader support
- **Color Contrast**: WCAG AA compliant

### SEO
- **Meta Tags**: Complete OpenGraph and Twitter cards
- **Structured Data**: JSON-LD for rich snippets
- **Sitemap**: XML sitemap for search engines
- **Performance**: Optimized loading and lazy loading

## 📞 Contact Form

The contact form includes:
- Real-time validation with Zod
- Mailto fallback for immediate functionality
- TODO: Integration with Resend/EmailJS for automated sending

To set up automated email sending:
1. Sign up for [Resend](https://resend.com) or [EmailJS](https://emailjs.com)
2. Add your API keys to environment variables
3. Update the form submission handler in `Contact.jsx`

## 🔧 Customization

### Update Content
Edit `src/data/profile.js` to customize:
- Personal information
- Skills and technologies
- Work experience
- Projects
- Education and certifications

### Design Changes
- **Colors**: Update CSS variables in `src/index.css`
- **Animations**: Modify variants in `src/lib/variants.js`
- **Components**: Customize individual component files

### Add New Sections
1. Create new component in `src/components/`
2. Add to `src/pages/Index.tsx`
3. Update navigation in `src/data/profile.js`

## 📄 Resume

Replace `public/HarfoolGujjarResume2025.pdf` with your actual resume file. The download button in the navigation will link to this file.

## 🐛 Troubleshooting

### Build Issues
- Ensure all imports use correct file extensions
- Check for any TypeScript errors
- Verify all dependencies are installed

### Animation Problems
- Check if `prefers-reduced-motion` is enabled
- Ensure GSAP and Framer Motion are properly imported
- Verify ScrollTrigger registration

### Contact Form
- Test mailto functionality
- Check form validation schema
- Verify error handling

## 📈 Performance

The portfolio is optimized for:
- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Excellent LCP, FID, and CLS scores
- **Bundle Size**: Optimized with code splitting
- **Images**: Lazy loading and optimized formats

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.

## 🙋‍♂️ Support

If you have any questions or need help customizing the portfolio:

- **Email**: harfoolgujjar63@gmail.com
- **LinkedIn**: [linkedin.com/in/harfool-gurjar](https://linkedin.com/in/harfool-gurjar)
- **Phone**: +91 96102 37965

---

Built with ❤️ by Harfool Gurjar using React, Tailwind CSS, and modern web technologies.