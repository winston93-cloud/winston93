import { useEffect, useRef, useState } from 'react'

interface ScrollEffectsProps {
  children: React.ReactNode
  className?: string
  animation?: 'fadeInUp' | 'slideInLeft' | 'slideInRight' | 'scaleIn' | 'fadeIn'
  delay?: number
}

export default function ScrollEffects({ 
  children, 
  className = '', 
  animation = 'fadeInUp',
  delay = 0 
}: ScrollEffectsProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      const currentRef = ref.current
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [delay])

  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0 translate-y-8'
    
    switch (animation) {
      case 'fadeInUp':
        return 'opacity-100 translate-y-0 animate-fadeInUp'
      case 'slideInLeft':
        return 'opacity-100 translate-x-0 animate-slideInLeft'
      case 'slideInRight':
        return 'opacity-100 translate-x-0 animate-slideInRight'
      case 'scaleIn':
        return 'opacity-100 scale-100 animate-scaleIn'
      case 'fadeIn':
        return 'opacity-100'
      default:
        return 'opacity-100 translate-y-0'
    }
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  )
} 