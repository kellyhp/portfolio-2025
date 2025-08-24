# Kelly Phan - Portfolio 2025

A portfolio website built with Next.js, showcasing my work experience, projects, and technical blog posts. Features smooth animations, dark/light mode, and a responsive design that highlights both software development and UI/UX projects.

## Features

- Modern Design: Clean, professional interface with smooth animations and transitions
- Dark/Light Mode: Automatic theme switching with system preference detection
- Interactive Elements: Magnetic hover effects, spotlight highlights, and animated backgrounds
- Responsive Layout: Optimized for all device sizes and screen resolutions
- Blog Section: Technical blog posts covering system design, HCI, and AI
- Project Showcase: Detailed presentations of software and UI/UX projects
- Smooth Animations: Framer Motion-powered interactions for enhanced user experience

## Tech Stack

### Frontend
- Next.js 14 - React framework with App Router
- TypeScript - Type-safe development
- Tailwind CSS - Utility-first CSS framework
- Framer Motion - Animation library for React
- Lucide React - Beautiful, customizable icons

### Styling & Animation
- CSS Modules - Component-scoped styling
- Custom CSS Variables - Consistent theming system
- Spring Animations - Smooth, physics-based transitions
- Responsive Design - Mobile-first approach

## Project Structure

```
nim/
├── app/                          # Next.js App Router
│   ├── blog/                     # Blog post pages (MDX)
│   ├── components/               # Reusable UI components
│   ├── globals.css              # Global styles and CSS variables
│   ├── layout.tsx               # Root layout component
│   └── page.tsx                 # Homepage component
├── components/                   # Shared UI components
│   └── ui/                      # Base UI components
├── hooks/                        # Custom React hooks
├── lib/                          # Utility functions and constants
├── public/                       # Static assets and images
└── types/                        # TypeScript type definitions
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/kellyhp/portfolio-2025.git
   cd portfolio-2025
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```


## Customization

### Adding New Blog Posts
1. Create a new MDX file in `app/blog/`
2. Add metadata export with title, description, and canonical URL
3. Update `app/data.ts` with the new blog post information
4. Include `hasTOC: true` for table of contents support

### Modifying Styles
- Global styles: `app/globals.css`
- Component styles: Individual component files
- CSS variables: Defined in `globals.css` for consistent theming

### Adding New Projects
1. Update `SOFTWARE_PROJECTS` or `UIUX_PROJECTS` in `app/data.ts`
2. Add project images to `public/assets/`
3. Update project descriptions and links

## Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `.next`
3. Deploy automatically on push to main branch


## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Next.js Team for the amazing framework
- Framer Motion for smooth animations
- Tailwind CSS for the utility-first approach
- Lucide for beautiful icons
- Open Source Community for inspiration and tools

---

Built with ❤️ by Kelly Phan
