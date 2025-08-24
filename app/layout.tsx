import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' }
  ],
  colorScheme: 'light dark',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.kellyphan.dev/'),
  alternates: {
    canonical: '/'
  },
  title: {
    default: 'Kelly Phan - Personal Website',
    template: '%s | Kelly Phan'
  },
  description: 'Kelly Phan is a Software Engineer and UI/UX Designer passionate about building scalable systems and creating intuitive user experiences. Explore my projects, blog posts, and professional journey.',
  keywords: [
    'Kelly Phan',
    'Software Engineer',
    'UI/UX Designer',
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
    'System Design',
    'AI Pipelines',
    'Web Development',
    'Portfolio'
  ],
  authors: [{ name: 'Kelly Phan' }],
  creator: 'Kelly Phan',
  publisher: 'Kelly Phan',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.kellyphan.dev/',
    siteName: 'Kelly Phan - Portfolio',
    title: 'Kelly Phan - Software Engineer & UI/UX Designer',
    description: 'Kelly Phan is a Software Engineer and UI/UX Designer passionate about building scalable systems and creating intuitive user experiences.',
    images: [
      {
        url: '/assets/portfolio-preview.png',
        width: 1200,
        height: 630,
        alt: 'Kelly Phan - Software Engineer & UI/UX Designer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kelly Phan - Software Engineer & UI/UX Designer',
    description: 'Kelly Phan is a Software Engineer and UI/UX Designer passionate about building scalable systems and creating intuitive user experiences.',
    images: ['/assets/portfolio-preview.png'],
    creator: '@kellyphan',
    site: '@kellyphan',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'technology',
  classification: 'portfolio',
  other: {
    'msapplication-TileColor': '#00ff88',
    'theme-color': '#00ff88',
  },
};

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} bg-white tracking-tight antialiased dark:bg-zinc-950`}
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <div className="pointer-events-none fixed left-0 top-0 z-10 h-12 w-screen bg-gray-100 to-transparent backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)] dark:bg-zinc-950" />
          <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
            <div className="relative mx-auto w-full max-w-6xl flex-1 px-4 pt-20">
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
