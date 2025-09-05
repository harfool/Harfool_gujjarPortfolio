import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface PageTransitionProps {
  children: React.ReactNode
  routeKey?: string
}

const easeInOutExpo: any = [0.16, 1, 0.3, 1]
const easeOut: any = [0.4, 0, 0.2, 1]
const variants = {
  initial: { opacity: 0, y: 12 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeInOutExpo } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.4, ease: easeOut } }
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children, routeKey = 'page' }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div key={routeKey} variants={variants} initial="initial" animate="enter" exit="exit">
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default PageTransition
