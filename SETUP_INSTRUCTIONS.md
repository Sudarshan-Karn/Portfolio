# Portfolio Setup Instructions

## Complete File Structure
This zip contains all files needed for your portfolio website:

### Configuration Files
- `package.json` - Dependencies and scripts
- `next.config.js` - Next.js configuration
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration
- `.eslintrc.json` - ESLint configuration
- `.gitignore` - Git ignore rules
- `README.md` - Project documentation

### App Directory (Next.js 14 App Router)
- `app/layout.tsx` - Root layout with navbar and footer
- `app/page.tsx` - Home page with all sections
- `app/globals.css` - Global styles and animations
- `app/favicon.ico` - Website icon (placeholder)

### Components
#### Main Components (`components/main/`)
- `hero.tsx` - Hero section with video background
- `navbar.tsx` - Navigation bar with your social links
- `skills.tsx` - Skills showcase section
- `experience.tsx` - Professional experience timeline
- `projects.tsx` - Projects portfolio section
- `certifications.tsx` - Education and certifications
- `encryption.tsx` - Animated transition section
- `footer.tsx` - Footer with contact information
- `star-background.tsx` - 3D animated star field

#### Sub Components (`components/sub/`)
- `hero-content.tsx` - Hero section content with animations
- `project-card.tsx` - Individual project cards
- `experience-card.tsx` - Experience timeline cards
- `skill-data-provider.tsx` - Skill icons with animations
- `skill-text.tsx` - Skills section text content

### Data & Configuration
- `constants/index.ts` - All your personal data (skills, projects, experience)
- `lib/motion.ts` - Animation variants for Framer Motion
- `lib/utils.ts` - Utility functions for styling

## Quick Setup (5 minutes)

### 1. Extract Files
Extract all files to a new folder named `sudarshan-portfolio`

### 2. Install Dependencies
```bash
cd sudarshan-portfolio
npm install --legacy-peer-deps
```

### 3. Add Required Images
Create these folders in the `public` directory and add images:

```
public/
├── skills/
│   ├── python.png
│   ├── sql.png
│   ├── powerbi.png
│   ├── looker.png
│   ├── sheets.png
│   ├── excel.png
│   ├── process.png
│   ├── requirements.png
│   ├── stakeholder.png
│   ├── flowchart.png
│   ├── tensorflow.png
│   ├── keras.png
│   ├── ml.png
│   └── github.png
├── projects/
│   ├── heart-disease.jpg
│   ├── inventory-system.jpg
│   ├── airbnb-analysis.jpg
│   ├── accident-analysis.jpg
│   ├── supplier-system.jpg
│   └── flow-system.jpg
├── videos/
│   ├── blackhole.webm
│   ├── cards-video.webm
│   └── encryption.webm
├── linkedin.svg
├── github.svg
├── email.svg
├── nav-logo.svg
├── main-icon.svg
├── lock-main.png
├── lock-top.png
└── Sudarshan_Karn_Resume.pdf
```

### 4. Run Development Server
```bash
npm run dev
```

Visit `http://localhost:3000` to see your portfolio!

## Customization Guide

### Personal Information
Edit `constants/index.ts` to update:
- Skills and technologies
- Project details and links
- Work experience
- Certifications
- Contact information

### Styling
- Colors: Modify gradient colors in `app/globals.css`
- Layout: Adjust spacing and sizing in component files
- Animations: Customize motion variants in `lib/motion.ts`

### Images
- Replace placeholder images with your actual project screenshots
- Add your professional headshot if desired
- Update logos and icons to match your brand

## Production Deployment

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended)
1. Push to GitHub repository
2. Connect to Vercel
3. Deploy with one click

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `out` folder to Netlify

## Troubleshooting

### Common Issues
1. **Missing Images**: Add placeholder images or update image paths
2. **Animation Issues**: Ensure Framer Motion is properly installed
3. **3D Graphics Not Loading**: Check Three.js dependencies

### Performance Tips
- Optimize images (use WebP format)
- Add lazy loading for sections
- Minimize bundle size

## Support
If you need help customizing the portfolio:
- Check the README.md file
- Review Next.js 14 documentation
- Contact: Sudarshankarn@gmail.com

## Next Steps
1. Add your actual images and content
2. Test on different devices
3. Set up analytics (Google Analytics)
4. Add a blog section (optional)
5. Set up contact form backend
6. Deploy to production

Your professional portfolio is ready! 🚀