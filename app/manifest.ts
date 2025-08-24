import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Kelly Phan - Software Engineer & UI/UX Designer',
    short_name: 'Kelly Phan',
    description: 'Kelly Phan is a Software Engineer and UI/UX Designer passionate about building scalable systems and creating intuitive user experiences.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#00ff88',
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/assets/icon.png',
        sizes: 'any',
        type: 'image/png',
      },
      {
        src: '/assets/icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/assets/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['technology', 'portfolio', 'blog'],
    lang: 'en',
    dir: 'ltr',
  }
}
