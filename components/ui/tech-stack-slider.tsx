'use client';
import { InfiniteSlider } from './infinite-slider';
import Image from 'next/image';

const TECH_LOGOS = [
  { name: 'AWS', src: '/assets/logo/aws.jpeg' },
  { name: 'Azure', src: '/assets/logo/azure.webp' },
  { name: 'Chart.js', src: '/assets/logo/chartjs.jpg' },
  { name: 'CSS', src: '/assets/logo/css.jpg' },
  { name: 'D3.js', src: '/assets/logo/d3js.png' },
  { name: 'Figma', src: '/assets/logo/figma.jpg' },
  { name: 'Firebase', src: '/assets/logo/firebase.png' },
  { name: 'Flask', src: '/assets/logo/flask.png' },
  { name: 'HTML', src: '/assets/logo/html.png' },
  { name: 'Java', src: '/assets/logo/java.svg' },
  { name: 'JavaScript', src: '/assets/logo/javascript.png' },
  { name: 'MongoDB', src: '/assets/logo/mongodb.png' },
  { name: 'Next.js', src: '/assets/logo/next.jpg' },
  { name: 'Node.js', src: '/assets/logo/nodejs.jpg' },
  { name: 'PostgreSQL', src: '/assets/logo/postresql.png' },
  { name: 'Power BI', src: '/assets/logo/powerbi.webp' },
  { name: 'Prisma', src: '/assets/logo/prisma.webp' },
  { name: 'Python', src: '/assets/logo/python.jpeg' },
  { name: 'React', src: '/assets/logo/react.png' },
  { name: 'Sketch', src: '/assets/logo/sketch.jpg' },
  { name: 'SQL', src: '/assets/logo/sql.jpeg' },
  { name: 'Tableau', src: '/assets/logo/tableau.jpg' },
  { name: 'Tailwind CSS', src: '/assets/logo/tailwind.jpg' },
  { name: 'TypeScript', src: '/assets/logo/typescript.png' },
];

export function TechStackSlider() {
  return (
    <div className="w-full bg-custom-green-light dark:bg-custom-green-light/20 rounded-2xl p-6 px-0 border border-custom-green-medium transition-all duration-300">
      {/* First slider - left to right (first half) */}
      <InfiniteSlider
        speedOnHover={20}
        gap={24}
        className="w-full mb-8"
      >
        {TECH_LOGOS.slice(0, Math.ceil(TECH_LOGOS.length / 2)).map((tech, index) => (
          <div
            key={`${tech.name}-left-${index}`}
            className="flex flex-col items-center group"
          >
            <div className="relative w-20 h-20 md:w-24 md:h-24 bg-white dark:bg-zinc-900 rounded-xl p-3 shadow-lg border border-custom-green-medium transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
              <Image
                src={tech.src}
                alt={tech.name}
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        ))}
      </InfiniteSlider>

      {/* Second slider - right to left (second half) */}
      <InfiniteSlider
        speedOnHover={20}
        gap={24}
        reverse={true}
        className="w-full"
      >
        {TECH_LOGOS.slice(Math.ceil(TECH_LOGOS.length / 2)).map((tech, index) => (
          <div
            key={`${tech.name}-right-${index}`}
            className="flex flex-col items-center group"
          >
            <div className="relative w-20 h-20 md:w-24 md:h-24 bg-white dark:bg-zinc-900 rounded-xl p-3 shadow-lg border border-custom-green-medium transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
              <Image
                src={tech.src}
                alt={tech.name}
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        ))}
      </InfiniteSlider>
    </div>
  );
}
