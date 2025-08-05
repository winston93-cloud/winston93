import { useEffect, useRef, useState } from 'react'

export default function OfertaEducativaSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const educationalLevels = [
    {
      name: 'KINDER',
      image: '/images/education/kinder.png',
      bgColor: 'bg-cyan-400',
      textColor: 'text-white',
      delay: '200ms'
    },
    {
      name: 'PRIMARIA',
      image: '/images/education/primaria.png',
      bgColor: 'bg-yellow-400',
      textColor: 'text-white',
      delay: '400ms'
    },
    {
      name: 'SECUNDARIA',
      image: '/images/education/secundaria.png',
      bgColor: 'bg-blue-600',
      textColor: 'text-white',
      delay: '600ms'
    }
  ]

  return (
    <div ref={sectionRef} className="w-full relative">
      {/* Sección de Oferta Educativa */}
      <div className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-10 md:mb-14">
            {/* Título principal */}
            <div className={`transition-all duration-1000 ease-out ${
              isVisible 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 -translate-y-8 scale-95'
            }`} style={{ transitionDelay: '100ms' }}>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-4">
                OFERTA
              </h1>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-blue-600">
                EDUCATIVA
              </h2>
            </div>
          </div>

          {/* Tarjetas de niveles educativos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {educationalLevels.map((level, index) => (
              <div
                key={level.name}
                className={`bg-white rounded-3xl overflow-hidden shadow-lg transition-all duration-1000 ease-out transform cursor-pointer group hover:scale-105 hover:shadow-2xl hover:-translate-y-2 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-12 scale-95'
                }`}
                style={{ transitionDelay: level.delay }}
              >
                {/* Imagen del nivel educativo que ocupa la mayor parte de la tarjeta */}
                <div className="relative h-56 md:h-64 lg:h-72 overflow-hidden">
                  <img
                    src={level.image}
                    alt={`Estudiantes de ${level.name} - Instituto Winston Churchill`}
                    className="w-full h-full object-cover object-center transition-all duration-200 ease-out group-hover:scale-110 group-hover:brightness-110"
                    style={{ objectPosition: 'center 0%' }}
                  />
                  
                  {/* Overlay de hover con efecto brillante */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-all duration-300 transform -skew-x-12 -translate-x-full group-hover:translate-x-full"></div>
                </div>

                {/* Sección inferior con color de fondo y texto */}
                <div className={`${level.bgColor} px-6 py-4 md:px-8 md:py-5`}>
                  <div className="text-center">
                    <h3 className={`text-2xl md:text-3xl lg:text-4xl font-bold ${level.textColor} tracking-wider transition-all duration-150 group-hover:scale-110 group-hover:tracking-widest`}>
                      {level.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Elementos decorativos adicionales */}
        <div className="hidden md:block absolute top-20 left-20 w-4 h-4 bg-cyan-400 rounded-full animate-bounce opacity-60"></div>
        <div className="hidden md:block absolute bottom-32 right-32 w-3 h-3 bg-yellow-400 rounded-full animate-pulse opacity-70"></div>
        <div className="hidden md:block absolute top-1/3 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-50"></div>
        <div className="hidden md:block absolute bottom-1/4 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-bounce opacity-40"></div>
      </div>

      {/* Footer Section */}
      <div className="bg-blue-600 text-white py-6 relative">
        <div className="container mx-auto px-6">
          
          {/* Diseño principal del footer similar a la imagen */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            
            {/* Lado izquierdo - Logo y eslogan con forma curva */}
            <div className="relative">
              <div className={`transition-all duration-1000 ease-out ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`} style={{ transitionDelay: '800ms' }}>
                {/* Forma curva de fondo */}
                <div className="relative bg-blue-700 rounded-2xl p-4 md:p-6 overflow-hidden">
                  {/* Elemento decorativo curvo */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500 rounded-full transform translate-x-8 -translate-y-8 opacity-30"></div>
                  
                  <div className="relative z-10">
                    <div className="text-2xl md:text-3xl font-bold mb-2 text-yellow-400">
                      Winston
                    </div>
                    <div className="text-sm md:text-base font-semibold mb-3 text-white">
                      WORKING FOR BRIGHTER FUTURES
                    </div>
                    <div className="text-xs text-blue-100 mb-2">
                      #saywinston
                    </div>
                    
                    {/* Información de contacto */}
                    <div className="space-y-1 text-xs text-blue-100">
                      <div>CALL: 3-4309</div>
                      <div>COL. JARDÍN 20 DE NOVIEMBRE,</div>
                      <div>CD. MADERO TAMPS.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Lado derecho - Redes sociales y aviso de privacidad */}
            <div className="text-center lg:text-right">
              <div className={`transition-all duration-1000 ease-out ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`} style={{ transitionDelay: '1000ms' }}>
                
                {/* Redes sociales */}
                <div className="flex justify-center lg:justify-end space-x-3 mb-4">
                  <a href="#" className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors duration-300">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors duration-300">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors duration-300">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 01-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors duration-300">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                </div>
                
                {/* Aviso de privacidad */}
                <div className="text-right">
                  <div className="text-sm font-bold text-white">
                    AVISO DE PRIVACIDAD
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
} 