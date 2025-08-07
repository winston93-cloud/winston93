import AnimatedElement from '@/components/AnimatedElement'
import { FaFacebookF, FaTiktok, FaWhatsapp, FaInstagram, FaYoutube } from 'react-icons/fa6'

export default function Footer() {
  return (
    <footer className="relative text-white overflow-hidden" style={{ minHeight: '220px' }}>
      {/* Imagen de fondo */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/hero/footer.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      {/* Contenido */}
      <div className="relative z-10 container mx-auto px-6 md:px-10 py-6 md:py-10">
        {/* Columna izquierda */}
        <div className="max-w-2xl">
          <AnimatedElement animation="fadeInUp" delay={150}>
            <div className="flex items-center mb-4">
              <img src="/images/logos/logo_winston.png" alt="Winston" className="h-8 w-auto" />
            </div>
            <h2 className="text-xl md:text-2xl font-extrabold tracking-wide uppercase mb-1">
              WORKING FOR BRIGHTER FUTURES
            </h2>
            <p className="text-sm opacity-90 mb-6">#soywinston</p>
          </AnimatedElement>

          <AnimatedElement animation="fadeInUp" delay={350}>
            <div className="space-y-1 text-sm md:text-base">
              <p>CALLE 3 #309</p>
              <p>COL. JARDÍN 20  DE NOVIEMBRE,</p>
              <p>CD. MADERO TAMPS.</p>
            </div>
          </AnimatedElement>
        </div>

        {/* Iconos centrados entre textos */}
        <AnimatedElement animation="fadeInUp" delay={500}>
          <div className="absolute left-1/2 -translate-x-1/2 bottom-6 md:bottom-8 flex items-center gap-4">
            <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition"><FaFacebookF className="w-4 h-4" /></a>
            <a href="#" aria-label="TikTok" className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition"><FaTiktok className="w-4 h-4" /></a>
            <a href="#" aria-label="WhatsApp" className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition"><FaWhatsapp className="w-4 h-4" /></a>
            <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition"><FaInstagram className="w-4 h-4" /></a>
            <a href="#" aria-label="YouTube" className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition"><FaYoutube className="w-4 h-4" /></a>
          </div>
        </AnimatedElement>

        {/* Enlace de privacidad anclado abajo derecha */}
        <a
          href="#"
          className="absolute right-6 md:right-10 bottom-6 md:bottom-8 font-semibold uppercase tracking-wide text-sm hover:text-yellow-400 transition-colors"
        >
          AVISO DE PRIVACIDAD
        </a>
      </div>
    </footer>
  )
} 