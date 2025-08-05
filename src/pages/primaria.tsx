import Head from 'next/head'
import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function PrimariaPage() {
  const [scrolled, setScrolled] = useState(false)
  const [windowSize, setWindowSize] = useState({ width: 1920, height: 1080 })
  const { scrollYProgress } = useScroll()

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

      {/* Sección de Educación Bilingüe con avión animado */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Línea trazada para el avión */}
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full absolute inset-0" viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.path
              d="M10,20 Q30,10 50,30 T90,50 Q70,70 50,80 T10,90"
              stroke="#3B82F6"
              strokeWidth="0.5"
              fill="none"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              style={{ pathLength: useTransform(scrollYProgress, [0, 0.3], [0, 1]) }}
            />
          </svg>
        </div>

        {/* Avión que sigue la línea */}
        <motion.div
          className="absolute top-20 left-10 w-8 h-8"
          style={{
            x: useTransform(scrollYProgress, [0, 0.3], [0, 300]),
            y: useTransform(scrollYProgress, [0, 0.3], [0, 200]),
            rotate: useTransform(scrollYProgress, [0, 0.3], [0, 45])
          }}
        >
          <img
            src="/images/facilities/avion.png"
            alt="Avión decorativo"
            className="w-full h-full object-contain"
          />
        </motion.div>
        
        {/* Elementos decorativos de fondo */}
        <div className="absolute top-0 left-0 w-64 h-64 border-4 border-dashed border-gray-300 rounded-full opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 border-4 border-dashed border-gray-300 rounded-full opacity-20"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Contenido de texto */}
            <div>
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mr-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-blue-900">EDUCACIÓN</h2>
                  <h3 className="text-3xl md:text-4xl font-bold text-blue-600">BILINGÜE</h3>
                  <p className="text-lg text-blue-700 font-medium">QUE FORMA CON PROPÓSITO</p>
                </div>
              </div>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  En nuestra primaria, nuestros alumnos aprenden un modelo bilingüe con inmersión total en inglés, logrando comprender y expresarse con fluidez.
                </p>
                <p>
                  La otra mitad se imparte en español cumpliendo con el programa oficial de la SEP.
                </p>
                <p>
                  Desde esta etapa, promovemos el pensamiento emprendedor, la autonomía, fortaleciendo su seguridad, creatividad y habilidades para enfrentar con éxito los retos del mundo actual.
                </p>
              </div>
            </div>

            {/* Botón de acción */}
            <div className="flex justify-center lg:justify-end">
              <button 
                className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-4 px-12 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                style={{ backgroundColor: '#dafb00' }}
              >
                Conocer Más
              </button>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Mindfulness */}
            <div className="relative group">
              <img
                src="/images/activities/mindfulness.jpg"
                alt="Mindfulness"
                className="w-full h-64 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-blue-600 bg-opacity-80 rounded-2xl flex items-end p-6">
                <h4 className="text-white text-2xl font-bold">MINDFULNESS</h4>
              </div>
            </div>

            {/* Robótica */}
            <div className="relative group">
              <img
                src="/images/activities/robotica.jpg"
                alt="Robótica"
                className="w-full h-64 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-yellow-400 bg-opacity-80 rounded-2xl flex items-end p-6">
                <h4 className="text-black text-2xl font-bold">ROBÓTICA</h4>
              </div>
            </div>

            {/* Artes */}
            <div className="relative group">
              <img
                src="/images/activities/artes.jpg"
                alt="Artes"
                className="w-full h-64 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-blue-600 bg-opacity-80 rounded-2xl flex items-end p-6">
                <h4 className="text-white text-2xl font-bold">ARTES</h4>
              </div>
            </div>
          </div>

          {/* Segunda fila */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tecnología */}
            <div className="relative group">
              <img
                src="/images/activities/tecnologia.jpg"
                alt="Tecnología"
                className="w-full h-64 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-yellow-400 bg-opacity-80 rounded-2xl flex items-end p-6">
                <h4 className="text-black text-2xl font-bold">TECNOLOGÍA</h4>
              </div>
            </div>

            {/* Actividades grupales */}
            <div className="relative group">
              <img
                src="/images/activities/grupo.jpg"
                alt="Actividades Grupales"
                className="w-full h-64 object-cover rounded-2xl"
              />
            </div>

            {/* Educación en la Fe */}
            <div className="relative group">
              <img
                src="/images/activities/fe.jpg"
                alt="Educación en la Fe"
                className="w-full h-64 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-blue-600 bg-opacity-80 rounded-2xl flex items-end p-6">
                <h4 className="text-white text-xl font-bold">EDUCACIÓN EN LA FE</h4>
                <span className="text-white text-sm ml-2">(OPCIONAL)</span>
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

      {/* Footer como en la imagen */}
      <footer className="bg-blue-600 text-white py-8 relative overflow-hidden">
        {/* Forma curva decorativa */}
        <div className="absolute top-0 left-0 w-96 h-32 bg-blue-700 rounded-br-full"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Logo y información */}
            <div>
              <img 
                src="/images/logos/logo_winston.png" 
                alt="Instituto Winston Churchill" 
                className="h-12 w-auto mb-4"
              />
              <p className="text-xl font-bold mb-2">WORKING FOR A BRIGHTER FUTURES</p>
              <p className="text-sm mb-4">#saywinston</p>
              
              <div className="space-y-1 text-sm">
                <p>CALL: 3-4309</p>
                <p>COL. JARDÍN 20 DE NOVIEMBRE,</p>
                <p>CD. MADERO TAMPS.</p>
              </div>
            </div>

            {/* Redes sociales y aviso */}
            <div className="text-right">
              <div className="flex justify-end space-x-4 mb-6">
                <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors">
                  <span className="text-white">f</span>
                </a>
                <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors">
                  <span className="text-white">@</span>
                </a>
                <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors">
                  <span className="text-white">in</span>
                </a>
                <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors">
                  <span className="text-white">ig</span>
                </a>
                <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors">
                  <span className="text-white">yt</span>
                </a>
              </div>
              
              <p className="text-lg font-bold">AVISO DE PRIVACIDAD</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
} 