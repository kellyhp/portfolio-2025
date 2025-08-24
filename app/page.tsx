'use client'
import { motion, AnimatePresence } from 'motion/react'
import { useState, useRef } from 'react'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import Link from 'next/link'
import Image from 'next/image'
import { TechStackSlider } from '@/components/ui/tech-stack-slider'
import { ProjectsSection } from '@/components/ui/projects-section'
import { SpinningText } from '@/components/ui/spinning-text'
import { Cursor } from '@/components/ui/cursor'
import { DownloadIcon } from 'lucide-react'
import {
  WORK_EXPERIENCE,
  BLOG_POSTS,
  EMAIL,
  SOCIAL_LINKS,
  SOFTWARE_PROJECTS,
  UIUX_PROJECTS,
} from './data'
import { Header } from './header'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

type ProjectVideoProps = {
  src: string
}

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-custom-green px-2.5 py-2 text-sm text-zinc-50 transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </Magnetic>
  )
}

export default function Personal() {
  const [isHoveringResume, setIsHoveringResume] = useState(false);
  const [showAllBlogs, setShowAllBlogs] = useState(false);
  const resumeRef = useRef<HTMLDivElement>(null);

  const handleResumePositionChange = (x: number, y: number) => {
    if (resumeRef.current) {
      const rect = resumeRef.current.getBoundingClientRect();
      const isInside =
        x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
      console.log('Mouse position:', x, y, 'Is inside:', isInside, 'Rect:', rect);
      setIsHoveringResume(isInside);
    }
  };

  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
       <Header />
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Work Experience</h3>
        <div className="flex flex-col space-y-2">
          {WORK_EXPERIENCE.map((job) => (
            <a
              className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              key={job.id}
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                <div className="relative flex w-full flex-row justify-between">
                  <div>
                    <h4 className="font-normal dark:text-zinc-100">
                      {job.title}
                    </h4>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      {job.company}
                    </p>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {job.start} - {job.end}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">My Tech Stack</h3>
        <TechStackSlider />
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Selected Projects</h3>
        <ProjectsSection 
          softwareProjects={SOFTWARE_PROJECTS}
          uiuxProjects={UIUX_PROJECTS}
        />
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-medium">Blog</h3>
          <button
            onClick={() => setShowAllBlogs(!showAllBlogs)}
            className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors duration-200"
          >
            {showAllBlogs ? 'Show Less' : `View More (${BLOG_POSTS.length - 3})`}
          </button>
        </div>
        <div className="flex flex-col space-y-0">
          <div className="rounded-lg dark:bg-zinc-900/80 p-1">
            {BLOG_POSTS.map((post, index) => (
              <motion.div
                key={post.uid}
                initial={false}
                animate={{ 
                  opacity: showAllBlogs || index < 3 ? 1 : 0,
                  height: showAllBlogs || index < 3 ? 'auto' : 0,
                  overflow: showAllBlogs || index < 3 ? 'visible' : 'hidden',
                  marginBottom: showAllBlogs || index < 3 ? 0 : 0,
                  scale: showAllBlogs || index < 3 ? 1 : 0.95,
                }}
                transition={{ 
                  duration: 0.4,
                  ease: 'easeInOut',
                  delay: showAllBlogs ? index * 0.05 : 0
                }}
                style={{
                  transformOrigin: 'top'
                }}
              >
                <Link
                  className="block rounded-xl px-3 py-3 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50 transition-colors duration-200"
                  href={post.link}
                  data-id={post.uid}
                >
                  <div className="flex flex-col space-y-1">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-normal dark:text-zinc-100 flex-1">
                        {post.title}
                      </h4>
                      {post.readTime && (
                        <span className="text-xs text-zinc-400 dark:text-zinc-500 whitespace-nowrap">
                          {post.readTime}
                        </span>
                      )}
                    </div>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      {post.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Connect</h3>
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="flex-1 w-full">
            <p className="mb-5 text-zinc-600 dark:text-zinc-400">
              Feel free to contact me at{' '}
              <a className="underline dark:text-zinc-300" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
            </p>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              {SOCIAL_LINKS.map((link) => (
                <MagneticSocialLink key={link.label} link={link.link}>
                  <div className="flex items-center gap-2">
                    <Image
                      src={link.image}
                      alt={link.label}
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                    <span className="hidden sm:inline">{link.label}</span>
                  </div>
                </MagneticSocialLink>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            {/* Mobile: Simple button */}
            <div className="lg:hidden">
              <a
                href="/assets/KellyPhan_Resume_2024.pdf"
                download
                className="button px-6 py-3 text-sm"
              >
                Download My Resume
              </a>
            </div>
            
            {/* Desktop: Spinning text with Cursor */}
            <div 
              className={`hidden lg:block relative p-4 rounded-lg transition-colors duration-200 ${
                isHoveringResume ? 'bg-custom-green/10' : 'bg-transparent'
              }`} 
              ref={resumeRef}
            >
              <Cursor
                attachToParent
                variants={{
                  initial: { scale: 0.3, opacity: 0 },
                  animate: { scale: 1, opacity: 1 },
                  exit: { scale: 0.3, opacity: 0 },
                }}
                springConfig={{
                  duration: 0.1,
                  damping: 15,
                  stiffness: 300,
                }}
                transition={{
                  ease: 'easeOut',
                  duration: 0.1,
                }}
                onPositionChange={handleResumePositionChange}
              >
                <motion.div
                  animate={{
                    width: isHoveringResume ? 180 : 20,
                    height: isHoveringResume ? 40 : 20,
                  }}
                  className="flex items-center justify-center rounded-lg bg-custom-green border-2 border-white shadow-lg"
                >
                  <AnimatePresence>
                    {isHoveringResume ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.6 }}
                        className="inline-flex w-full items-center justify-center"
                      >
                        <div className="inline-flex items-center text-sm text-white font-medium px-3 py-2">
                          Download Resume <DownloadIcon className="ml-2 h-4 w-4" />
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </motion.div>
              </Cursor>
              
              <a
                href="/assets/KellyPhan_Resume_2025.pdf"
                download
                className="group cursor-pointer relative z-10 block w-full h-full p-4"
              >
                <SpinningText
                  radius={5.5}
                  fontSize={1}
                  variants={{
                    container: {
                      hidden: {
                        opacity: 1,
                      },
                      visible: {
                        opacity: 1,
                        rotate: 360,
                        transition: {
                          type: 'spring',
                          bounce: 0,
                          duration: 6,
                          repeat: Infinity,
                          staggerChildren: 0.03,
                        },
                      },
                    },
                    item: {
                      hidden: {
                        opacity: 0,
                        filter: 'blur(4px)',
                      },
                      visible: {
                        opacity: 1,
                        filter: 'blur(0px)',
                      },
                    },
                  }}
                  className='font-[450] text-custom-green group-hover:text-custom-green-dark transition-colors duration-300 cursor-pointer'
                >
                  {`my resume • my resume • `}
                </SpinningText>
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    </motion.main>
  )
}
