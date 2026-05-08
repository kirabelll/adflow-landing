# Avery Tan - UI/UX Designer Portfolio

A modern, responsive portfolio website for Avery Tan, a UI/UX designer based in Singapore. Built with Next.js 16, featuring glassmorphism design, animated backgrounds, and a comprehensive showcase of design work and services.

## 🚀 Features

- **Modern Design**: Dark theme with glassmorphism effects and backdrop blur
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Interactive Elements**: Hover effects, transitions, and animated components
- **Portfolio Showcase**: Case studies with project details and visual previews
- **Service Packages**: Clear pricing tiers with detailed feature lists
- **Contact Integration**: Multiple contact methods including email and calendar booking
- **Performance Optimized**: Next.js 16 with optimized fonts and images

## 🛠 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Fonts**: Google Fonts (Geist, Inter, and 15+ additional typefaces)
- **Icons**: Lucide React
- **Background Animation**: UnicornStudio
- **Language**: TypeScript
- **Package Manager**: npm

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd adaflow
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Design Features

### Typography
The project includes 16 carefully selected Google Fonts:
- **Primary**: Geist (main interface font)
- **Display**: Playfair Display, Instrument Serif
- **Body**: Inter, Roboto, Poppins, Montserrat
- **Monospace**: Geist Mono, Space Mono
- **Specialty**: Bricolage Grotesque, Plus Jakarta Sans, Manrope, Space Grotesk, Work Sans, PT Serif, Quicksand, Nunito, Merriweather

### Visual Effects
- **Glassmorphism**: Backdrop blur effects with transparency
- **Gradients**: Subtle text and background gradients
- **Shadows**: Multi-layered shadow system for depth
- **Animations**: Smooth transitions and hover effects

## 📱 Sections

1. **Hero Section**: Introduction with availability card
2. **Portfolio**: Featured case studies and project showcase
3. **Pricing**: Service packages with detailed features
4. **About**: Professional background and skills
5. **Contact**: Multiple contact methods and social links

## 🔧 Configuration

### External Images
The project is configured to load images from Supabase:
```typescript
// next.config.ts
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'hoirqrkdgbmvpwutwuwj-all.supabase.co',
      pathname: '/storage/v1/object/public/**',
    },
  ],
}
```

### Fonts
All fonts are loaded via Next.js font optimization and configured with CSS variables for easy theming.

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically with zero configuration

### Other Platforms
```bash
npm run build
npm start
```

## 📄 Project Structure

```
adaflow/
├── app/
│   ├── globals.css          # Global styles and font classes
│   ├── layout.tsx           # Root layout with fonts and metadata
│   └── page.tsx             # Main portfolio page
├── public/                  # Static assets
├── next.config.ts           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── package.json             # Dependencies and scripts
```

## 🎯 Performance

- **Next.js 16**: Latest framework features and optimizations
- **Font Optimization**: Automatic font loading and display optimization
- **Image Optimization**: Next.js Image component with remote pattern support
- **CSS Optimization**: Tailwind CSS with purging and minification
- **Bundle Optimization**: Automatic code splitting and tree shaking

## 📞 Contact

For questions about this portfolio or to get in touch with Avery Tan:
- **Email**: hello@averytan.design
- **Location**: Singapore, SG
- **Availability**: Remote-friendly

---

Built with ❤️ using Next.js and Tailwind CSS
