import React, { useEffect, useRef, useState } from 'react'

interface AnimatedElementProps {
  children: React.ReactNode
  animation?: string
  delay?: number
  duration?: number
  distance?: number
  className?: string
}

export default function AnimatedElement({ 
  children, 
  animation = 'fadeInUp', 
  delay = 0, 
  duration = 800,
  distance = 50,
  className = '' 
}: AnimatedElementProps) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.1 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const getAnimationClasses = () => {
    const baseClasses = `transition-all ease-out`
    const durationClass = `duration-${Math.min(duration, 1000)}`
    
    if (!isVisible) {
      switch (animation) {
        case 'fadeInUp': return `${baseClasses} ${durationClass} opacity-0 translate-y-${distance}`
        case 'slideInLeft': return `${baseClasses} ${durationClass} opacity-0 -translate-x-${distance}`
        case 'slideInRight': return `${baseClasses} ${durationClass} opacity-0 translate-x-${distance}`
        case 'slideInUp': return `${baseClasses} ${durationClass} opacity-0 translate-y-${distance}`
        case 'slideInDown': return `${baseClasses} ${durationClass} opacity-0 -translate-y-${distance}`
        case 'bounceInDown': return `${baseClasses} ${durationClass} opacity-0 -translate-y-${distance} scale-95`
        case 'scaleIn': return `${baseClasses} ${durationClass} opacity-0 scale-75`
        case 'bounceIn': return `${baseClasses} ${durationClass} opacity-0 scale-95`
        case 'rotateIn': return `${baseClasses} ${durationClass} opacity-0 rotate-12`
        case 'flipInX': return `${baseClasses} ${durationClass} opacity-0 rotateX-90`
        default: return `${baseClasses} ${durationClass} opacity-0`
      }
    }
    
    return `${baseClasses} ${durationClass} opacity-100 translate-x-0 translate-y-0 scale-100 rotate-0`
  }

  return (
    <div ref={elementRef} className={`${getAnimationClasses()} ${className}`}>
      {children}
    </div>
  )
} 