export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Fondo con efecto de partículas */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-green-400 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
          <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Creamos
          </span>
          <span className="block text-white mt-4">
            Experiencias
          </span>
          <span className="block bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mt-4">
            Digitales
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Un socio creativo para la producción de contenido digital que impulsa resultados reales
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            <span className="flex items-center">
              Ver Nuestro Trabajo
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
          
          <button className="group border-2 border-white hover:bg-white hover:text-black text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
            Contáctanos
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
} 