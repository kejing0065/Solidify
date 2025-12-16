# Solidify - 3D Printing Service Website

A modern, responsive React.js website for a 3D printing service company. Built with React Router, Vite, and CSS3 for a fast, engaging user experience.

## Features

- **Responsive Design**: Fully responsive and mobile-friendly
- **Modern UI**: Clean, professional design with smooth animations
- **Multiple Pages**:
  - Home page with hero section, features, and testimonials
  - Services page with detailed service descriptions
  - Portfolio page showcasing completed projects
  - Pricing page with transparent pricing plans
  - Contact page with contact form and business information
- **Navigation**: Sticky navbar with smooth scrolling
- **Contact Form**: Functional contact form with validation
- **SEO Friendly**: Proper semantic HTML structure
- **Performance**: Optimized with Vite for fast builds and development

## Project Structure

```
solidify/
├── index.html                    # Main HTML file
├── package.json                  # Dependencies and scripts
├── vite.config.js               # Vite configuration
├── src/
│   ├── main.jsx                 # React entry point
│   ├── App.jsx                  # Main App component
│   ├── pages/
│   │   ├── Home.jsx            # Home page
│   │   ├── Services.jsx        # Services page
│   │   ├── Portfolio.jsx       # Portfolio/Projects page
│   │   ├── Pricing.jsx         # Pricing page
│   │   └── Contact.jsx         # Contact page
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation bar
│   │   ├── Footer.jsx          # Footer
│   │   ├── HeroSection.jsx     # Hero section
│   │   ├── FeaturesSection.jsx # Features section
│   │   ├── ServicesPreview.jsx # Services preview
│   │   ├── Testimonials.jsx    # Client testimonials
│   │   └── CallToAction.jsx    # Call-to-action section
│   └── styles/
│       ├── global.css          # Global styles and variables
│       ├── navbar.css          # Navbar styles
│       ├── footer.css          # Footer styles
│       ├── hero.css            # Hero section styles
│       ├── features.css        # Features section styles
│       ├── services-preview.css # Services preview styles
│       ├── testimonials.css    # Testimonials styles
│       ├── cta.css             # CTA section styles
│       ├── services.css        # Services page styles
│       ├── portfolio.css       # Portfolio page styles
│       ├── pricing.css         # Pricing page styles
│       └── contact.css         # Contact page styles
```

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup Steps

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The website will open automatically at `http://localhost:3000`

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Customization

### Colors
Edit the CSS variables in `src/styles/global.css`:
```css
:root {
  --primary-color: #0066cc;
  --secondary-color: #00d4ff;
  --accent-orange: #ff6b35;
  --accent-green: #06d6a0;
  /* ... more colors */
}
```

### Company Information
Update company details in:
- `src/components/Footer.jsx` - Footer contact info
- `src/pages/Contact.jsx` - Contact page details
- `src/components/HeroSection.jsx` - Hero section stats

### Services
Modify service data in:
- `src/pages/Services.jsx` - Main services page
- `src/components/ServicesPreview.jsx` - Home page services preview

### Portfolio
Update portfolio items in `src/pages/Portfolio.jsx` with your actual projects

### Pricing
Modify pricing plans in `src/pages/Pricing.jsx` with your actual pricing structure

## Features Included

### 1. Home Page
- Eye-catching hero section with CTA buttons
- Key statistics
- Features showcase (6 benefits)
- Services preview (4 main services)
- Client testimonials
- Call-to-action section

### 2. Services Page
- Detailed service descriptions
- 6 comprehensive service offerings
- Feature lists for each service

### 3. Portfolio Page
- Project showcase with 8 example projects
- Category tags
- Project statistics
- Responsive grid layout

### 4. Pricing Page
- 3 pricing tiers (Starter, Professional, Enterprise)
- Material pricing table
- 6 different material options
- FAQ section

### 5. Contact Page
- Professional contact form
- Contact information
- Business hours
- Social media links
- Success message after form submission

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Optimizations

- Vite for fast build times
- CSS animations for smooth transitions
- Optimized images and icons
- Minimal bundle size
- Lazy loading ready

## Adding to Production

1. Build the project:
```bash
npm run build
```

2. The `dist` folder contains the production-ready files

3. Deploy to your hosting provider:
   - Vercel (recommended for Vite apps)
   - Netlify
   - AWS
   - Any static hosting service

### Example Deployment with Vercel:
```bash
npm install -g vercel
vercel
```

## Future Enhancements

Consider adding:
- Backend API integration for contact form
- Image gallery with lightbox
- Blog section
- Testimonials database
- Project filtering on portfolio
- Live chat support
- Payment integration
- Client login area
- Analytics tracking
- SEO optimizations

## File Sizes

- Minimal CSS (modular and organized)
- No unnecessary dependencies
- Fast load times
- SEO friendly

## Support

For customization or additional features, refer to:
- [React Documentation](https://react.dev)
- [React Router Documentation](https://reactrouter.com)
- [Vite Documentation](https://vitejs.dev)

## License

This project is ready for commercial use. Feel free to modify and customize for your needs.

## Notes

- The contact form currently logs to console - integrate with a backend service like EmailJS or Formspree to actually send emails
- Replace placeholder company information with your actual details
- Update social media links in the footer
- Add your actual portfolio projects and images
- Consider adding a CMS for easier content management as the site grows
