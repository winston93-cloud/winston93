import { motion } from 'framer-motion'

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gradient-to-b from-blue-900 to-blue-800 z-50 flex items-center justify-center"
    >
      {/* Efecto sutil de fondo */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="text-center relative z-10">
        {/* Logo principal elegante */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: 1,
            opacity: 1,
          }}
          transition={{ 
            duration: 1,
            ease: "easeOut",
          }}
          className="mb-12"
        >
          <img
            src="/images/logos/logo_winston.png"
            alt="Instituto Winston Churchill"
            className="h-28 w-auto mx-auto drop-shadow-lg"
          />
        </motion.div>

        {/* Texto institucional serio */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-white text-xl font-bold mb-2 tracking-wide">
            INSTITUTO WINSTON CHURCHILL
          </h1>
          
          <p className="text-blue-200 text-sm font-medium">
            Working for a Brighter Future
          </p>
        </motion.div>

        {/* Barra de progreso elegante */}
        <div className="w-48 mx-auto mb-8">
          <div className="bg-white bg-opacity-20 rounded-full h-1 overflow-hidden">
            <motion.div
              className="h-full bg-yellow-400 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>

        {/* Indicadores de carga discretos */}
        <div className="flex justify-center space-x-2">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-yellow-400 rounded-full"
              animate={{
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>

        {/* Texto de carga profesional */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-white mt-6 text-sm font-medium"
        >
          Cargando contenido...
        </motion.p>
      </div>
    </motion.div>
  )
}

export default LoadingScreen 