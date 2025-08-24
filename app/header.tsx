'use client'
import { TextEffect } from '@/components/ui/text-effect'
import { SlidingNumber } from '@/components/ui/sliding-number'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'motion/react'
import { useState, useEffect } from 'react'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const VARIANTS_ITEM = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const VARIANTS_IMAGE = {
  hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    rotateY: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
}

export function Header() {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const pstTime = new Date(now.toLocaleString("en-US", {timeZone: "America/Los_Angeles"}))
      setTime({
        hours: pstTime.getHours(),
        minutes: pstTime.getMinutes(),
        seconds: pstTime.getSeconds()
      })
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.header 
      className="mb-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-16"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.div 
        className="button w-[250px] h-[300px] md:w-[300px] md:h-[350px] ml-0 md:ml-auto relative overflow-hidden"
        variants={VARIANTS_IMAGE}
      >
        <Image
          src="/assets/Kelly-Phan.jpg"
          alt="Kelly Phan"
          fill
          className="object-cover"
        />
      </motion.div>
      
      <motion.div 
        className="flex-1 flex flex-col gap-2"
        variants={VARIANTS_ITEM}
      >
        <motion.div variants={VARIANTS_ITEM}>
          <Link href="/" className="font-medium text-black dark:text-white text-2xl md:text-3xl">
            Kelly Phan
          </Link>
        </motion.div>
        
        <motion.div variants={VARIANTS_ITEM}>
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-zinc-600 dark:text-zinc-500 text-lg md:text-xl"
            delay={0.5}
          >
          Software Engineer
          </TextEffect>
        </motion.div>
        
        <motion.div 
          className="mt-4 space-y-2"
          variants={VARIANTS_ITEM}
        >
          <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base">
            UC Davis alumni - Computer Science B.S. & Technology Management minor
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base">
            Full stack / User Experience Design / Web Development / AI
          </p>
          <div className="flex items-center gap-2 mt-3">
            <span className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base">
              My current time:
            </span>
            <SlidingNumber value={time.hours} padStart={true} />
            <span className='text-zinc-500'>:</span>
            <SlidingNumber value={time.minutes} padStart={true} />
            <span className='text-zinc-500'>:</span>
            <SlidingNumber value={time.seconds} padStart={true} />
          </div>
        </motion.div>
      </motion.div>
    </motion.header>
  )
}
