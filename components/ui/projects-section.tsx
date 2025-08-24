'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogDescription,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog';
import { ExternalLinkIcon, GithubIcon, ComputerIcon, PaletteIcon } from 'lucide-react';

const PROJECT_TABS = [
  { id: 'software', title: 'Software Projects', icon: <ComputerIcon size={16} /> },
  { id: 'uiux', title: 'UI/UX Projects', icon: <PaletteIcon size={16} /> }
];

type SoftwareProject = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  url: string;
  github?: boolean;
};

type UIUXProject = {
  title: string;
  description: string;
  image: string;
  url: string;
  type: 'case-study' | 'figma';
};

interface ProjectsSectionProps {
  softwareProjects: SoftwareProject[];
  uiuxProjects: UIUXProject[];
}

export function ProjectsSection({ softwareProjects, uiuxProjects }: ProjectsSectionProps) {
  const [activeTab, setActiveTab] = useState('software');

  const renderSoftwareProjects = () => (
    <div className="space-y-0">
      {softwareProjects.map((project, index) => (
        <div key={project.title}>
          <MorphingDialog
            transition={{
              type: 'spring',
              bounce: 0.05,
              duration: 0.25,
            }}
          >
            <MorphingDialogTrigger
              className="group flex w-full items-center py-4 transition-all duration-200 hover:bg-zinc-50 dark:hover:bg-zinc-900/50"
            >
            <div className="relative h-20 w-32 flex-shrink-0 overflow-hidden rounded-lg">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col ml-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="mb-2 text-lg font-medium text-zinc-900 dark:text-zinc-100">
                    {project.title}
                  </h3>
                  <p className="mb-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-custom-green/10 px-2 py-1 text-xs text-custom-green"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="rounded-full bg-zinc-100 px-2 py-1 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-3 mx-4">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-custom-green hover:text-custom-green-dark transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {project.github ? <GithubIcon size={16} /> : <ExternalLinkIcon size={16} />}
                    {project.github ? 'View Code' : 'View Project'}
                  </a>
                </div>
              </div>
            </div>
          </MorphingDialogTrigger>
          
          <MorphingDialogContainer>
            <MorphingDialogContent className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden rounded-3xl border border-zinc-200/50 bg-white dark:border-zinc-700/50 dark:bg-zinc-900 sm:w-[600px]">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <MorphingDialogTitle className="mb-2 text-2xl text-zinc-900 dark:text-zinc-100">
                  {project.title}
                </MorphingDialogTitle>
                <MorphingDialogDescription className="mb-4 text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </MorphingDialogDescription>
                <div className="mb-4">
                  <h4 className="mb-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-custom-green/10 px-3 py-1 text-sm text-custom-green"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-custom-green px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-custom-green-dark"
                >
                  {project.github ? <GithubIcon size={16} /> : <ExternalLinkIcon size={16} />}
                  {project.github ? 'View on GitHub' : 'View Project'}
                </a>
              </div>
              <MorphingDialogClose className="absolute top-4 right-4 text-zinc-600 dark:text-zinc-400" />
            </MorphingDialogContent>
          </MorphingDialogContainer>
        </MorphingDialog>
          {index < softwareProjects.length - 1 && (
            <div className="border-b border-zinc-200 dark:border-zinc-700" />
          )}
        </div>
      ))}
    </div>
  );

  const renderUIUXProjects = () => (
    <div className="space-y-0">
      {uiuxProjects.map((project, index) => (
        <div key={project.title}>
          <MorphingDialog
            transition={{
              type: 'spring',
              bounce: 0.05,
              duration: 0.25,
            }}
          >
            <MorphingDialogTrigger
              className="group flex w-full items-center py-4 transition-all duration-200 hover:bg-zinc-50 dark:hover:bg-zinc-900/50"
            >
              <div className="relative h-20 w-32 flex-shrink-0 overflow-hidden rounded-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col ml-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="mb-2 text-lg font-medium text-zinc-900 dark:text-zinc-100">
                      {project.title}
                    </h3>
                    <p className="mb-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 mx-4">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-custom-green hover:text-custom-green-dark transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {project.type === 'case-study' ? 'Read Case Study' : 'View in Figma'}
                      <ExternalLinkIcon size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </MorphingDialogTrigger>
            
            <MorphingDialogContainer>
              <MorphingDialogContent className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden rounded-3xl border border-zinc-200/50 bg-white dark:border-zinc-700/50 dark:bg-zinc-900 sm:w-[600px]">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <MorphingDialogTitle className="mb-2 text-2xl text-zinc-900 dark:text-zinc-100">
                    {project.title}
                  </MorphingDialogTitle>
                  <MorphingDialogDescription className="mb-4 text-zinc-600 dark:text-zinc-400">
                    {project.description}
                  </MorphingDialogDescription>
                  <div className="mb-4">
                    <h4 className="mb-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                      Project Type:
                    </h4>
                    <span className="inline-flex items-center gap-2 rounded-lg bg-custom-green/10 px-3 py-2 text-sm text-custom-green font-medium">
                      {project.type === 'case-study' ? '📖 Case Study' : '🎨 Figma Design'}
                    </span>
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-custom-green px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-custom-green-dark"
                  >
                    {project.type === 'case-study' ? 'Read Case Study' : 'View in Figma'}
                    <ExternalLinkIcon size={16} />
                  </a>
                </div>
                <MorphingDialogClose className="absolute top-4 right-4 text-zinc-600 dark:text-zinc-400" />
              </MorphingDialogContent>
            </MorphingDialogContainer>
          </MorphingDialog>
          {index < uiuxProjects.length - 1 && (
            <div className="border-b border-zinc-200 dark:border-zinc-700" />
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="flex space-x-2">
        {PROJECT_TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
              activeTab === tab.id
                ? 'bg-custom-green text-white shadow-lg'
                : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700'
            }`}
          >
            <span>{tab.icon}</span>
            {tab.title}
          </button>
        ))}
      </div>

      {/* Content with Transition */}
      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -20, filter: 'blur(4px)' }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          >
            {activeTab === 'software' ? renderSoftwareProjects() : renderUIUXProjects()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}