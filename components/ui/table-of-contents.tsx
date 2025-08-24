'use client'

import { useState, useEffect } from 'react'
import { ChevronRight, List } from 'lucide-react'

interface TOCItem {
  id: string
  title: string
  level: number
}

export function TableOfContents() {
  const [isOpen, setIsOpen] = useState(false)
  const [tocItems, setTocItems] = useState<TOCItem[]>([])

  useEffect(() => {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
    const items: TOCItem[] = []

    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1))
      const text = heading.textContent || ''
      
      let id = heading.id
      if (!id) {
        id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
        heading.id = id
      }

      items.push({
        id,
        title: text,
        level
      })
    })

    setTocItems(items)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  if (tocItems.length === 0) return null

  return (
    <div className="fixed right-4 top-32 z-30">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-10 h-10 bg-white dark:bg-zinc-800 rounded-full shadow-lg border border-gray-200 dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-700 transition-colors"
        aria-label="Toggle Table of Contents"
      >
        <List className="w-5 h-5 text-gray-600 dark:text-gray-300" />
      </button>

      {/* TOC Popover */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-20" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* TOC Content */}
          <div className="absolute right-0 top-12 w-80 max-h-96 overflow-y-auto bg-white dark:bg-zinc-800 rounded-lg shadow-xl border border-gray-200 dark:border-zinc-700 p-4 z-30">
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-200 dark:border-zinc-700">
              <List className="w-4 h-4 text-gray-600 dark:text-gray-300" />
              <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
                Table of Contents
              </h3>
            </div>
            
            <nav className="space-y-1">
              {tocItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    w-full text-left px-2 py-1.5 rounded text-sm hover:bg-gray-100 dark:hover:bg-zinc-700 transition-colors
                    ${item.level === 1 ? 'font-medium text-gray-900 dark:text-gray-100' : ''}
                    ${item.level === 2 ? 'text-gray-700 dark:text-gray-300 ml-2' : ''}
                    ${item.level === 3 ? 'text-gray-600 dark:text-gray-400 ml-4' : ''}
                    ${item.level >= 4 ? 'text-gray-500 dark:text-gray-500 ml-6' : ''}
                  `}
                >
                  <div className="flex items-center gap-1">
                    {item.level > 1 && (
                      <ChevronRight className="w-3 h-3 opacity-50" />
                    )}
                    <span className="truncate">{item.title}</span>
                  </div>
                </button>
              ))}
            </nav>
          </div>
        </>
      )}
    </div>
  )
}
