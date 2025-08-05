import AnimatedElement from '@/components/AnimatedElement'
import { useEffect, useRef, useState } from 'react'

export default function EducationalOfferSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={sectionRef} className="min-h-[calc(100vh-4rem)] md:h-[calc(100vh-4rem)] w-full relative overflow-hidden bg-white">
      {/* Contenido principal */}
      <div className="h-full flex items-center py-8 md:py-0">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between h-full py-8 md:py-0">
            
            {/* Lado izquierdo - Imagen de estudiantes */}
            <div className="w-full md:w-1/2 relative flex items-center justify-center md:justify-start md:pl-8 mb-8 md:mb-0">
              <div className={`relative transition-all duration-1000 ease-out ${
                isVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-12'
              }`} style={{ transitionDelay: '200ms' }}>
                {/* Formas geométricas de fondo - Más pequeñas en móvil */}
                <div className="absolute -top-6 -left-6 md:-top-10 md:-left-10 w-16 h-16 md:w-32 md:h-32 bg-blue-600 rounded-lg transform rotate-12"></div>
                <div className="absolute -bottom-3 left-12 md:-bottom-5 md:left-20 w-12 h-12 md:w-24 md:h-24 bg-yellow-400 rounded-lg transform -rotate-6"></div>
                <div className="absolute top-3 -right-3 md:top-5 md:-right-5 w-10 h-10 md:w-20 md:h-20 bg-green-500 rounded-lg transform rotate-45"></div>
                
                {/* Imagen de estudiantes - Responsive */}
                <img
                  src="/images/students/niños_left.jpg"
                  alt="Estudiantes del Instituto Winston Churchill"
                  className="relative z-10 h-[280px] md:h-[600px] w-auto max-w-none object-contain"
                />
              </div>
            </div>

            {/* Lado derecho - Contenido de texto */}
            <div className="w-full md:w-1/2 text-center md:text-left md:pl-16 px-4 md:px-0">
              {/* Títulos - Entran desde arriba */}
              <div className={`mb-6 md:mb-8 transition-all duration-1000 ease-out ${
                isVisible 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 -translate-y-8 scale-95'
              }`} style={{ transitionDelay: '400ms' }}>
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-blue-900 leading-tight mb-3 md:mb-4">
                  INSTITUTO WINSTON CHURCHILL
                </h1>
                <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-blue-700 mb-4 md:mb-6">
                  Formando líderes con visión global desde hace más de 30 años.
                </h2>
              </div>

              {/* Descripción - Entra desde abajo */}
              <p className={`text-base md:text-lg text-gray-700 leading-relaxed max-w-full md:max-w-lg mx-auto md:mx-0 transition-all duration-1000 ease-out ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`} style={{ transitionDelay: '600ms' }}>
                Ofrecemos una educación integral que impulsa el pensamiento crítico, los valores y 
                el desarrollo emocional de nuestros alumnos. Respaldados por alianzas 
                académicas internacionales, preparamos a cada estudiante para enfrentar con éxito los 
                retos del mundo actual.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Elementos decorativos adicionales - Ocultos en móvil */}
      <div className="hidden md:block absolute top-20 right-40 w-3 h-3 bg-blue-400 rounded-full animate-bounce opacity-60"></div>
      <div className="hidden md:block absolute bottom-32 left-32 w-2 h-2 bg-yellow-300 rounded-full animate-pulse opacity-70"></div>
      <div className="hidden md:block absolute top-1/3 right-1/4 w-1 h-1 bg-green-400 rounded-full animate-ping opacity-50"></div>
    </div>
  )
} 