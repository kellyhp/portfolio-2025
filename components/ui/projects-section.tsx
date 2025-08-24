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
              className="group flex w-full items-start sm:items-center py-4 transition-all duration-200 hover:bg-zinc-50 dark:hover:bg-zinc-900/50"
            >
              {/* Mobile: Stack vertically, Desktop: Side by side */}
              <div className="flex flex-col sm:flex-row w-full gap-4">
                {/* Image container - responsive sizing */}
                <div className="relative h-24 w-full sm:h-20 sm:w-32 flex-shrink-0 overflow-hidden rounded-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Content container */}
                <div className="flex flex-1 flex-col min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <h3 className="mb-2 text-lg sm:text-lg font-medium text-zinc-900 dark:text-zinc-100 leading-tight">
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
                    
                    {/* Action button - mobile friendly */}
                    <div className="flex items-center gap-3 sm:mx-4">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-custom-green hover:text-custom-green-dark transition-colors px-3 py-2 rounded-lg hover:bg-custom-green/10"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {project.github ? <GithubIcon size={16} /> : <ExternalLinkIcon size={16} />}
                        <span className="hidden sm:inline">
                          {project.github ? 'View Code' : 'View Project'}
                        </span>
                        <span className="sm:hidden">
                          {project.github ? 'Code' : 'View'}
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </MorphingDialogTrigger>
            
            <MorphingDialogContainer>
              <MorphingDialogContent className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden rounded-3xl border border-zinc-200/50 bg-white dark:border-zinc-700/50 dark:bg-zinc-900 sm:w-[600px] max-w-[95vw] mx-auto">
                <div className="relative h-48 sm:h-64 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <MorphingDialogTitle className="mb-2 text-xl sm:text-2xl text-zinc-900 dark:text-zinc-100">
                    {project.title}
                  </MorphingDialogTitle>
                  <MorphingDialogDescription className="mb-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
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
                    className="inline-flex items-center gap-2 rounded-lg bg-custom-green px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-custom-green-dark w-full sm:w-auto justify-center"
                  >
                    {project.github ? <GithubIcon size={16} /> : <ExternalLinkIcon size={16} />}
                    {project.github ? 'View on GitHub' : 'View Project'}
                  </a>
                </div>
                <MorphingDialogClose className="absolute top-3 right-3 sm:top-4 sm:right-4 text-zinc-600 dark:text-zinc-400 p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800" />
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
              className="group flex w-full items-start sm:items-center py-4 transition-all duration-200 hover:bg-zinc-50 dark:hover:bg-zinc-900/50"
            >
              {/* Mobile: Stack vertically, Desktop: Side by side */}
              <div className="flex flex-col sm:flex-row w-full gap-4">
                {/* Image container - responsive sizing */}
                <div className="relative h-24 w-full sm:h-20 sm:w-32 flex-shrink-0 overflow-hidden rounded-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Content container */}
                <div className="flex flex-1 flex-col min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <h3 className="mb-2 text-lg sm:text-lg font-medium text-zinc-900 dark:text-zinc-100 leading-tight">
                        {project.title}
                      </h3>
                      <p className="mb-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    
                    {/* Action button - mobile friendly */}
                    <div className="flex items-center gap-3 sm:mx-4">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-custom-green hover:text-custom-green-dark transition-colors px-3 py-2 rounded-lg hover:bg-custom-green/10"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span className="hidden sm:inline">
                          {project.type === 'case-study' ? 'Read Case Study' : 'View in Figma'}
                        </span>
                        <span className="sm:hidden">
                          {project.type === 'case-study' ? 'Case Study' : 'Figma'}
                        </span>
                        <ExternalLinkIcon size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </MorphingDialogTrigger>
            
            <MorphingDialogContainer>
              <MorphingDialogContent className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden rounded-3xl border border-zinc-200/50 bg-white dark:border-zinc-700/50 dark:bg-zinc-900 sm:w-[600px] max-w-[95vw] mx-auto">
                <div className="relative h-48 sm:h-64 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <MorphingDialogTitle className="mb-2 text-xl sm:text-2xl text-zinc-900 dark:text-zinc-100">
                    {project.title}
                  </MorphingDialogTitle>
                  <MorphingDialogDescription className="mb-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
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
                    className="inline-flex items-center gap-2 rounded-lg bg-custom-green px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-custom-green-dark w-full sm:w-auto justify-center"
                  >
                    {project.type === 'case-study' ? 'Read Case Study' : 'View in Figma'}
                    <ExternalLinkIcon size={16} />
                  </a>
                </div>
                <MorphingDialogClose className="absolute top-3 right-3 sm:top-4 sm:right-4 text-zinc-600 dark:text-zinc-400 p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800" />
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
      {/* Tab Navigation - mobile friendly */}
      <div className="flex flex-col sm:flex-row gap-2 sm:space-x-2">
        {PROJECT_TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center justify-center gap-2 rounded-lg px-4 py-3 sm:py-2 text-sm font-medium transition-all duration-200 ${
              activeTab === tab.id
                ? 'bg-custom-green text-white shadow-lg'
                : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700'
            }`}
          >
            <span>{tab.icon}</span>
            <span className="text-sm sm:text-sm">{tab.title}</span>
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