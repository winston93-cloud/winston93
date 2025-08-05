import { useState, useEffect } from 'react'

interface NavigationProps {
  currentSection?: number
}

export default function Navigation({ currentSection = 0 }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  
  // El header será transparente SOLO en la primera sección (index 0)
  // En las demás secciones será azul
  const isTransparent = currentSection === 0

  return (
    <nav className={`${isTransparent ? 'absolute' : 'sticky'} top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isTransparent 
        ? 'bg-transparent' 
        : 'bg-blue-900 shadow-lg backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-2">
        <div className="flex items-center justify-between h-16">
          {/* Logo Winston */}
          <div className="flex items-center -ml-2">
            <img 
              src="/images/logos/logo_winston.png" 
              alt="Instituto Winston Churchill" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-2">
              <a href="#conocenos" className="text-white hover:text-black font-medium transition-all duration-300 text-sm uppercase tracking-wide px-4 py-2 rounded-md hover:shadow-lg" onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = '#dafb00'; e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(218, 251, 0, 0.5), 0 4px 6px -2px rgba(218, 251, 0, 0.3)'}} onMouseLeave={(e) => {e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.boxShadow = 'none'}}>
                CONÓCENOS
              </a>
              
              {/* Menú desplegable de Oferta Educativa */}
              <div className="relative group">
                <a href="#oferta-educativa" className="text-white group-hover:text-black font-medium transition-all duration-300 text-sm uppercase tracking-wide px-4 py-2 rounded-md hover:shadow-lg flex items-center group-hover:shadow-lg" 
                   style={{backgroundColor: 'transparent', boxShadow: 'none'}}
                   onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = '#dafb00'; e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(218, 251, 0, 0.5), 0 4px 6px -2px rgba(218, 251, 0, 0.3)'}} 
                   onMouseLeave={(e) => {
                     // Solo restaurar si no estamos sobre el grupo
                     if (!e.currentTarget.parentElement?.matches(':hover')) {
                       e.currentTarget.style.backgroundColor = 'transparent'; 
                       e.currentTarget.style.boxShadow = 'none';
                     }
                   }}
                   ref={(el) => {
                     if (el) {
                       const parent = el.parentElement;
                       if (parent) {
                         parent.addEventListener('mouseenter', () => {
                           el.style.backgroundColor = '#dafb00';
                           el.style.boxShadow = '0 10px 15px -3px rgba(218, 251, 0, 0.5), 0 4px 6px -2px rgba(218, 251, 0, 0.3)';
                         });
                         parent.addEventListener('mouseleave', () => {
                           el.style.backgroundColor = 'transparent';
                           el.style.boxShadow = 'none';
                         });
                       }
                     }
                   }}>
                  OFERTA EDUCATIVA
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
                
                {/* Submenu desplegable */}
                <div className="absolute top-full left-0 mt-1 w-48 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50" style={{backgroundColor: '#dafb00'}}>
                  <div className="py-2">
                    <a href="/primaria" className="block px-4 py-2 text-black hover:text-white hover:bg-black hover:bg-opacity-20 transition-colors duration-200 text-sm uppercase tracking-wide font-medium">
                      PRIMARIA
                    </a>
                    <a href="#secundaria" className="block px-4 py-2 text-black hover:text-white hover:bg-black hover:bg-opacity-20 transition-colors duration-200 text-sm uppercase tracking-wide font-medium">
                      SECUNDARIA
                    </a>
                  </div>
                </div>
              </div>
              
              <a href="#servicios-en-linea" className="text-white hover:text-black font-medium transition-all duration-300 text-sm uppercase tracking-wide px-4 py-2 rounded-md hover:shadow-lg" onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = '#dafb00'; e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(218, 251, 0, 0.5), 0 4px 6px -2px rgba(218, 251, 0, 0.3)'}} onMouseLeave={(e) => {e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.boxShadow = 'none'}}>
                SERVICIOS EN LÍNEA
              </a>
              <a href="#programas" className="text-white hover:text-black font-medium transition-all duration-300 text-sm uppercase tracking-wide px-4 py-2 rounded-md hover:shadow-lg" onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = '#dafb00'; e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(218, 251, 0, 0.5), 0 4px 6px -2px rgba(218, 251, 0, 0.3)'}} onMouseLeave={(e) => {e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.boxShadow = 'none'}}>
                PROGRAMAS
              </a>
              <a href="#winston-life" className="text-white hover:text-black font-medium transition-all duration-300 text-sm uppercase tracking-wide px-4 py-2 rounded-md hover:shadow-lg" onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = '#dafb00'; e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(218, 251, 0, 0.5), 0 4px 6px -2px rgba(218, 251, 0, 0.3)'}} onMouseLeave={(e) => {e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.boxShadow = 'none'}}>
                WINSTON LIFE
              </a>
              <a href="#contacto" className="text-white hover:text-black font-medium transition-all duration-300 text-sm uppercase tracking-wide px-4 py-2 rounded-md hover:shadow-lg" onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = '#dafb00'; e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(218, 251, 0, 0.5), 0 4px 6px -2px rgba(218, 251, 0, 0.3)'}} onMouseLeave={(e) => {e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.boxShadow = 'none'}}>
                CONTACTO
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-black focus:outline-none focus:text-black transition-all duration-300 p-2 rounded-md hover:shadow-lg"
              onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = '#dafb00'; e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(218, 251, 0, 0.5), 0 4px 6px -2px rgba(218, 251, 0, 0.3)'}} 
              onMouseLeave={(e) => {e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.boxShadow = 'none'}}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/80 backdrop-blur-sm rounded-lg mt-2">
              <a href="#conocenos" className="block px-3 py-2 text-white hover:text-black font-medium transition-all duration-300 text-sm uppercase tracking-wide rounded-md hover:shadow-lg" onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = '#dafb00'; e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(218, 251, 0, 0.5), 0 4px 6px -2px rgba(218, 251, 0, 0.3)'}} onMouseLeave={(e) => {e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.boxShadow = 'none'}}>
                CONÓCENOS
              </a>
              <a href="#oferta-educativa" className="block px-3 py-2 text-white hover:text-black font-medium transition-all duration-300 text-sm uppercase tracking-wide rounded-md hover:shadow-lg" onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = '#dafb00'; e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(218, 251, 0, 0.5), 0 4px 6px -2px rgba(218, 251, 0, 0.3)'}} onMouseLeave={(e) => {e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.boxShadow = 'none'}}>
                OFERTA EDUCATIVA
              </a>
              <a href="#servicios-en-linea" className="block px-3 py-2 text-white hover:text-black font-medium transition-all duration-300 text-sm uppercase tracking-wide rounded-md hover:shadow-lg" onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = '#dafb00'; e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(218, 251, 0, 0.5), 0 4px 6px -2px rgba(218, 251, 0, 0.3)'}} onMouseLeave={(e) => {e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.boxShadow = 'none'}}>
                SERVICIOS EN LÍNEA
              </a>
              <a href="#programas" className="block px-3 py-2 text-white hover:text-black font-medium transition-all duration-300 text-sm uppercase tracking-wide rounded-md hover:shadow-lg" onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = '#dafb00'; e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(218, 251, 0, 0.5), 0 4px 6px -2px rgba(218, 251, 0, 0.3)'}} onMouseLeave={(e) => {e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.boxShadow = 'none'}}>
                PROGRAMAS
              </a>
              <a href="#winston-life" className="block px-3 py-2 text-white hover:text-black font-medium transition-all duration-300 text-sm uppercase tracking-wide rounded-md hover:shadow-lg" onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = '#dafb00'; e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(218, 251, 0, 0.5), 0 4px 6px -2px rgba(218, 251, 0, 0.3)'}} onMouseLeave={(e) => {e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.boxShadow = 'none'}}>
                WINSTON LIFE
              </a>
              <a href="#contacto" className="block px-3 py-2 text-white hover:text-black font-medium transition-all duration-300 text-sm uppercase tracking-wide rounded-md hover:shadow-lg" onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = '#dafb00'; e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(218, 251, 0, 0.5), 0 4px 6px -2px rgba(218, 251, 0, 0.3)'}} onMouseLeave={(e) => {e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.boxShadow = 'none'}}>
                CONTACTO
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 