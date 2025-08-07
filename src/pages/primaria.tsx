import Head from 'next/head'
import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'

// Componente de Galería Modal
const GalleryModal = ({ 
  isOpen, 
  onClose, 
  images, 
  currentIndex, 
  onNext, 
  onPrev, 
  title 
}: {
  isOpen: boolean
  onClose: () => void
  images: string[]
  currentIndex: number
  onNext: () => void
  onPrev: () => void
  title: string
}) => {
  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
        onClick={onClose}
      >
        <div className="relative max-w-6xl max-h-[95vh] w-full mx-4">
          {/* Botón de cerrar */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 text-white text-4xl hover:text-gray-300 transition-colors"
          >
            ×
          </button>

          {/* Título */}
          <div className="absolute top-4 left-4 z-10 text-white text-2xl font-bold">
            {title}
          </div>

          {/* Imagen principal */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[currentIndex]}
              alt={`${title} - Imagen ${currentIndex + 1}`}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            />
          </motion.div>

          {/* Navegación */}
          <div className="absolute inset-0 flex items-center justify-between p-4 pointer-events-none">
            <button
              onClick={(e) => {
                e.stopPropagation()
                onPrev()
              }}
              className="pointer-events-auto bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all transform hover:scale-110"
            >
              ‹
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                onNext()
              }}
              className="pointer-events-auto bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all transform hover:scale-110"
            >
              ›
            </button>
          </div>

          {/* Indicadores */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation()
                  // Aquí necesitarías una función para ir a una imagen específica
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                }`}
              />
            ))}
          </div>

          {/* Contador */}
          <div className="absolute bottom-4 right-4 text-white text-lg">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default function PrimariaPage() {
  const [scrolled, setScrolled] = useState(false)
  const [windowSize, setWindowSize] = useState({ width: 1920, height: 1080 })
  const { scrollYProgress } = useScroll()

  // Estados para la galería
  const [galleryOpen, setGalleryOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [currentGallery, setCurrentGallery] = useState<string | null>(null)

  // Configuración de galerías
  const galleries: Record<string, { title: string; images: string[] }> = {
    entrepreneurs: {
      title: "ENTREPRENEURS",
      images: [
        "/images/entrepreneurs/emprendedores1.JPG",
        "/images/entrepreneurs/emprendedores2.JPG",
        "/images/entrepreneurs/emprendedores3.JPG",
        "/images/entrepreneurs/emprendedores4.JPG",
        "/images/entrepreneurs/emprendedores5.JPG",
        "/images/entrepreneurs/emprendedores6.JPG",
        "/images/entrepreneurs/emprendedores7.JPG",
        "/images/entrepreneurs/emprendedores8.JPG",
        "/images/entrepreneurs/emprendedores9.JPG",
        "/images/entrepreneurs/emprendedores10.JPG"
      ]
    }
  }

  // Funciones para la galería
  const openGallery = (galleryKey: string) => {
    setCurrentGallery(galleryKey)
    setCurrentImageIndex(0)
    setGalleryOpen(true)
  }

  const closeGallery = () => {
    setGalleryOpen(false)
    setCurrentGallery(null)
  }

  const nextImage = () => {
    if (currentGallery) {
      const totalImages = galleries[currentGallery].images.length
      setCurrentImageIndex((prev) => (prev + 1) % totalImages)
    }
  }

  const prevImage = () => {
    if (currentGallery) {
      const totalImages = galleries[currentGallery].images.length
      setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100
      setScrolled(isScrolled)
    }

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    // Establecer tamaño inicial
    handleResize()

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Primaria - Instituto Winston Churchill</title>
        <meta name="description" content="Educación primaria bilingüe de excelencia en el Instituto Winston Churchill. Formamos estudiantes con pensamiento crítico y valores sólidos." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="primaria, educación bilingüe, Winston Churchill, educación integral, valores, pensamiento crítico" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation - transparente al inicio, azul al hacer scroll */}
      <Navigation currentSection={scrolled ? 1 : 0} />

      {/* Hero Section con imagen de fondo fija */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Imagen de fondo fija con fundido suave */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('/images/facilities/fondo_escuela.png')`,
            backgroundAttachment: 'fixed'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          {/* Overlay con gradiente */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
        </motion.div>

        {/* Nueva imagen de bandas horizontales con movimiento de izquierda a derecha */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          initial={{ x: -windowSize.width, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        >
          <img
            src="/images/facilities/pleca_verde.png"
            alt="Bandas decorativas"
            className="w-full h-full object-cover"
          />
          {/* Texto PRIMARIA sobre la banda azul */}
          <div className="absolute bottom-1/3 right-1/4 transform translate-y-1/2">
            <h1 className="text-white text-4xl md:text-6xl font-bold tracking-wider">PRIMARIA</h1>
          </div>
        </motion.div>

        {/* Imagen del estudiante con movimiento de abajo hacia arriba */}
        <motion.div 
          className="absolute bottom-0 left-0 w-full h-full"
          initial={{ y: windowSize.height, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.8, delay: 0.8, ease: "easeOut" }}
        >
          <img
            src="/images/facilities/niño.png"
            alt="Estudiante de Primaria - Instituto Winston Churchill"
            className="absolute bottom-0 left-16 h-full w-auto object-cover object-bottom"
          />
        </motion.div>
      </section>



      {/* Sección de Educación Bilingüe */}
      <section className="py-20 bg-white relative overflow-hidden">
       
                 <div className="container mx-auto px-6 relative z-10">
           <div className="flex gap-80 items-start justify-center">
             {/* Título a la izquierda */}
             <div className="flex-shrink-0">
               <h2 className="text-3xl md:text-4xl font-bold text-blue-900">EDUCACIÓN</h2>
               <h3 className="text-3xl md:text-4xl font-bold text-blue-600">BILINGÜE</h3>
               <div className="ml-4">
                 <p className="text-lg text-blue-700 font-medium">QUE FORMA</p>
                 <p className="text-lg text-blue-700 font-medium">CON PROPÓSITO</p>
               </div>
             </div>

             {/* Texto descriptivo a la derecha */}
             <div className="w-96">
               <div className="space-y-2 text-gray-600 leading-relaxed text-justify">
                 <p>
                   En nuestra primaria, nuestros alumnos aprenden un modelo bilingüe con inmersión total en inglés, logrando comprender y expresarse con fluidez.
                   La otra mitad se imparte en español cumpliendo con el programa oficial de la SEP.
                 </p>                
                 <div className="ml-8">
                   <p>
                     Desde esta etapa, promovemos el pensamiento emprendedor, la autonomía, fortaleciendo su seguridad, creatividad y habilidades para enfrentar con éxito los retos del mundo actual.
                   </p>
                 </div>
               </div>
             </div>
           </div>
         </div>
      </section>

      {/* Sección de Materias Extracurriculares */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Materias extracurriculares que
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-blue-600">
              enriquecen su formación:
            </h3>
          </div>

          {/* Grid de materias extracurriculares */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 max-w-7xl mx-auto justify-items-center">
            {/* Mindfulness */}
            <div className="relative group overflow-hidden rounded-2xl">
              <img
                src="/images/extracurriculares/mindfulness.jpg"
                alt="Mindfulness"
                className="w-auto h-auto max-h-80 object-contain transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-blue-900 bg-opacity-60 p-3 transition-all duration-700 ease-in-out group-hover:bottom-0 group-hover:top-0 group-hover:bg-opacity-90 group-hover:flex group-hover:items-center group-hover:justify-center">
                <h4 className="text-white text-xl font-bold transition-all duration-700 group-hover:text-2xl">MINDFULNESS</h4>
              </div>
            </div>

            {/* Robótica */}
            <div className="relative group overflow-hidden rounded-2xl">
              <img
                src="/images/extracurriculares/robotica.jpg"
                alt="Robótica"
                className="w-auto h-auto max-h-80 object-contain transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-opacity-60 p-3 transition-all duration-700 ease-in-out group-hover:bottom-0 group-hover:top-0 group-hover:bg-opacity-90 group-hover:flex group-hover:items-center group-hover:justify-center" style={{ backgroundColor: '#dbfb04' }}>
                <h4 className="text-black text-xl font-bold transition-all duration-700 group-hover:text-2xl">ROBÓTICA</h4>
              </div>
            </div>

            {/* Artes */}
            <div className="relative group overflow-hidden rounded-2xl">
              <img
                src="/images/extracurriculares/artes.jpg"
                alt="Artes"
                className="w-auto h-auto max-h-80 object-contain transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-blue-900 bg-opacity-60 p-3 transition-all duration-700 ease-in-out group-hover:bottom-0 group-hover:top-0 group-hover:bg-opacity-90 group-hover:flex group-hover:items-center group-hover:justify-center">
                <h4 className="text-white text-xl font-bold transition-all duration-700 group-hover:text-2xl">ARTES</h4>
              </div>
            </div>
          </div>

          {/* Segunda fila */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto justify-items-center">
            {/* Tecnología */}
            <div className="relative group overflow-hidden rounded-2xl">
              <img
                src="/images/extracurriculares/tecnologia.jpg"
                alt="Tecnología"
                className="w-auto h-auto max-h-80 object-contain transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-opacity-60 p-3 transition-all duration-700 ease-in-out group-hover:bottom-0 group-hover:top-0 group-hover:bg-opacity-90 group-hover:flex group-hover:items-center group-hover:justify-center" style={{ backgroundColor: '#dbfb04' }}>
                <h4 className="text-black text-xl font-bold transition-all duration-700 group-hover:text-2xl">TECNOLOGÍA</h4>
              </div>
            </div>

            {/* Entrepreneurs */}
            <div className="relative group overflow-hidden rounded-2xl cursor-pointer" onClick={() => openGallery('entrepreneurs')}>
              <img
                src="/images/extracurriculares/entrepreneurs.jpg"
                alt="Entrepreneurs"
                className="w-auto h-auto max-h-80 object-contain transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-blue-900 bg-opacity-60 p-3 transition-all duration-700 ease-in-out group-hover:bottom-0 group-hover:top-0 group-hover:bg-opacity-90 group-hover:flex group-hover:items-center group-hover:justify-center">
                <h4 className="text-white text-xl font-bold transition-all duration-700 group-hover:text-2xl">ENTREPRENEURS</h4>
              </div>
            </div>

            {/* Educación en la Fe */}
            <div className="relative group overflow-hidden rounded-2xl">
              <img
                src="/images/extracurriculares/fe.jpg"
                alt="Educación en la Fe"
                className="w-auto h-auto max-h-80 object-contain transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-opacity-60 p-3 transition-all duration-700 ease-in-out group-hover:bottom-0 group-hover:top-0 group-hover:bg-opacity-90 group-hover:flex group-hover:items-center group-hover:justify-center" style={{ backgroundColor: '#dbfb04' }}>
                <h4 className="text-black text-lg font-bold transition-all duration-700 group-hover:text-xl">EDUCACIÓN EN LA FE</h4>
                <span className="text-black text-xs ml-2 transition-all duration-700 group-hover:text-sm">(OPCIONAL)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Certificaciones */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Certificación Internacional */}
            <div className="bg-blue-600 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">CERTIFICACIÓN INTERNACIONAL</h3>
              <p className="mb-6 leading-relaxed">
                Contamos con el respaldo del prestigioso programa de Cambridge diseñado para elevar la excelencia académica en el idioma inglés y proporcionar a nuestros estudiantes las mejores herramientas para su desarrollo.
              </p>
              <div className="flex items-center">
                <img
                  src="/images/logos/cambridge.png"
                  alt="University of Cambridge"
                  className="h-16 w-auto"
                />
              </div>
            </div>

            {/* Servicio de Estancia */}
            <div className="bg-yellow-400 text-black p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">SERVICIO DE ESTANCIA</h3>
              <p className="mb-4 leading-relaxed">
                <strong>FLEXIBILIDAD PARA EL ACOMPAÑAMIENTO PARA ELLOS</strong>
              </p>
              <p className="leading-relaxed">
                Sabemos que cada familia tiene diferentes horarios por eso ofrecemos servicio de estancia para brindar acompañamiento y apoyo a nuestros alumnos en tareas de desarrollo de su autonomía.
              </p>
              <div className="mt-4">
                <p className="font-bold">HORARIO:</p>
                <p>7:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer global se renderiza desde Layout */}

      {/* Modal de Galería */}
      {galleryOpen && currentGallery && (
        <GalleryModal
          isOpen={galleryOpen}
          onClose={closeGallery}
          images={galleries[currentGallery].images}
          currentIndex={currentImageIndex}
          onNext={nextImage}
          onPrev={prevImage}
          title={galleries[currentGallery].title}
        />
      )}
    </>
  )
} 