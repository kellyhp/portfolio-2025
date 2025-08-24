import { Metadata } from 'next'

export interface BlogPostMetadata {
  title: string
  description: string
  publishedAt: string
  updatedAt?: string
  author: string
  tags: string[]
  image: string
  slug: string
}

export function generateBlogMetadata(post: BlogPostMetadata): Metadata {
  const url = `https://www.kellyphan.dev/blog/${post.slug}`
  
  return {
    title: post.title,
    description: post.description,
    keywords: [...post.tags, 'Kelly Phan', 'Blog', 'Software Engineering', 'UI/UX Design'],
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      siteName: 'Kelly Phan - Portfolio',
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: 'en_US',
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [post.image],
    },
    alternates: {
      canonical: url,
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
  }
}

export function generateStructuredData(post: BlogPostMetadata) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: post.image,
    author: {
      '@type': 'Person',
      name: post.author,
      url: 'https://kellyphan.dev/',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Kelly Phan',
      logo: {
        '@type': 'ImageObject',
        url: 'https://kellyphan.dev/assets/icon.png',
      },
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://kellyphan.dev/blog/${post.slug}`,
    },
    keywords: post.tags.join(', '),
    articleSection: 'Blog',
    inLanguage: 'en-US',
  }
}

export function generatePersonStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Kelly Phan',
    jobTitle: 'Member of Technical Staff',
    description: 'Kelly Phan is a Software Engineer and UI/UX Designer passionate about building scalable systems and creating intuitive user experiences.',
    url: 'https://www.kellyphan.dev/',
    sameAs: [
      'https://github.com/kellyphan',
      'https://linkedin.com/in/kellyphan',
      'https://instagram.com/kellyphan',
    ],
    image: 'https://www.kellyphan.dev/assets/portfolio-preview.png',
    knowsAbout: [
      'Software Engineering',
      'UI/UX Design',
      'System Design',
      'AI Pipelines',
      'Web Development',
      'React',
      'Next.js',
      'TypeScript',
      'Python',
      'Java',
    ],
    worksFor: {
      '@type': 'Homekey ',
      name: 'Member of Technical Staff',
    },
    alumniOf: {
      '@type': 'Organization',
      name: 'University of California, Davis',
    },
  }
}

export function generateWebsiteStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Kelly Phan - Portfolio',
    description: 'Kelly Phan is a Software Engineer and UI/UX Designer passionate about building scalable systems and creating intuitive user experiences.',
    url: 'https://www.kellyphan.dev/',
    author: {
      '@type': 'Person',
      name: 'Kelly Phan',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.kellyphan.dev/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }
}
