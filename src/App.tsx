import { useState, useEffect, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Rocket, 
  Target, 
  BarChart3, 
  Users, 
  CheckCircle2, 
  Mail, 
  Phone, 
  MapPin, 
  Menu, 
  X, 
  ChevronRight,
  MessageSquare,
  Globe,
  Zap
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Testimonios', href: '#testimonios' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#0080FF] rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">ID</span>
          </div>
          <span className={`font-bold text-2xl tracking-tighter ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
            IMPULSO<span className="text-[#0080FF]">DIGITAL</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-[#0080FF] ${
                isScrolled ? 'text-slate-600' : 'text-white/80 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contacto" 
            className="bg-[#0080FF] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#0066CC] transition-all transform hover:scale-105 shadow-lg shadow-blue-500/20"
          >
            Empezar ahora
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-900" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className={isScrolled ? 'text-slate-900' : 'text-white'} /> : <Menu className={isScrolled ? 'text-slate-900' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-6 md:hidden flex flex-col gap-4 shadow-xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-slate-600 font-medium py-2 border-b border-slate-50 last:border-0"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-950">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#0080FF]/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[100px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
            <Zap size={14} className="fill-current" />
            Escalando tu empresa
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
            Transformación Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0080FF] to-blue-400 font-extrabold">para Pymes</span>
          </h1>
          <p className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed">
            Impulsamos tu negocio al mundo digital con estrategias modernas, 
            cercanas y efectivas. Ayudamos a las pequeñas y medianas empresas 
            a crecer con confianza.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a 
              href="#contacto" 
              className="w-full sm:w-auto bg-[#0080FF] text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#0066CC] transition-all group shadow-xl shadow-blue-500/20"
            >
              Consulta Gratuita
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#servicios" 
              className="w-full sm:w-auto px-8 py-4 rounded-xl border border-white/10 text-white font-semibold hover:bg-white/5 transition-all flex items-center justify-center"
            >
              Nuestra Metodología
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-950 bg-slate-800 overflow-hidden">
                  <img 
                    src={`https://i.pravatar.cc/150?u=${i + 10}`} 
                    alt="User" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
            <div className="text-sm">
              <span className="text-white font-bold">+50 Proyectos</span>
              <p className="text-slate-500">digitalizados con éxito</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-slate-900 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop" 
              alt="Digital Growth"
              className="w-full h-full object-cover opacity-60"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
            
            {/* Stats Overlay */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-10 p-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <BarChart3 className="text-green-400" size={20} />
                </div>
                <div>
                  <div className="text-slate-400 text-[10px] uppercase font-bold">Crecimiento</div>
                  <div className="text-white font-bold">+184%</div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Floating Circle Visual */}
          <div className="absolute -bottom-6 -left-6 p-6 bg-[#0080FF] rounded-3xl shadow-2xl shadow-blue-500/40 transform rotate-[-5deg]">
            <Rocket className="text-white" size={32} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const items = [
    {
      title: "Desarrollo Web",
      desc: "Sitios web rápidos, modernos y optimizados para convertir visitantes en clientes.",
      icon: <Globe className="text-[#0080FF]" />,
    },
    {
      title: "Marketing Digital",
      desc: "Campañas de ADS y SEO enfocadas en el retorno de inversión para tu negocio.",
      icon: <Target className="text-[#0080FF]" />,
    },
    {
      title: "Automatización",
      desc: "Optimizamos tus procesos internos para ahorrar tiempo y reducir errores.",
      icon: <Zap className="text-[#0080FF]" />,
    },
    {
      title: "Consultoría Estratégica",
      desc: "Acompañamos a dueños de pymes en su camino hacia la digitalización.",
      icon: <Users className="text-[#0080FF]" />,
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-[#0080FF] uppercase tracking-widest mb-3">Nuestros Servicios</h2>
          <p className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Todo lo que tu Pyme necesita para <br /> <span className="text-slate-400">brillar en internet</span></p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 mb-6 group-hover:bg-[#0080FF]/10">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Carlos Mendoza",
      role: "Dueño de Ferretería El Sol",
      text: "Impulso Digital transformó nuestra forma de vender. Pasamos de lo local a vender en todo el país con una web increíble.",
      avatar: "https://i.pravatar.cc/150?u=carlos"
    },
    {
      name: "Elena Rodríguez",
      role: "CEO de Arte Floral",
      text: "El trato es muy cercano. Entienden los problemas de las pymes y te dan soluciones que realmente funcionan.",
      avatar: "https://i.pravatar.cc/150?u=elena"
    },
    {
      name: "Jorge Sanz",
      role: "Restaurateur",
      text: "Gracias a su estrategia de marketing, tenemos el local lleno todos los fines de semana. Profesionales de confianza.",
      avatar: "https://i.pravatar.cc/150?u=jorge"
    }
  ];

  return (
    <section id="testimonios" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-sm font-bold text-[#0080FF] uppercase tracking-widest mb-3">Testimonios</h2>
            <p className="text-3xl md:text-5xl font-bold tracking-tight">Lo que dicen <br />nuestros clientes</p>
          </div>
          <p className="text-slate-500 max-w-sm">Más de 50 pymes ya han confiado en nosotros para dar el salto digital.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map(i => <CheckCircle2 key={i} size={16} className="text-[#0080FF]" />)}
              </div>
              <p className="text-slate-600 mb-8 font-medium italic">"{rev.text}"</p>
              <div className="flex items-center gap-4">
                <img 
                  src={rev.avatar} 
                  alt={rev.name} 
                  className="w-12 h-12 rounded-full object-cover grayscale hover:grayscale-0 transition-all"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p className="font-bold text-slate-900">{rev.name}</p>
                  <p className="text-xs text-slate-400 font-medium">{rev.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const [status, setStatus] = useState<null | 'success' | 'loading'>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="text-sm font-bold text-[#0080FF] uppercase tracking-widest mb-3">Contacto</h2>
          <p className="text-3xl md:text-5xl font-bold tracking-tight mb-6">¿Hablamos de <br /> tu próximo paso?</p>
          <p className="text-slate-500 mb-10 leading-relaxed max-w-md">
            Cuéntanos sobre tu negocio y cuáles son tus objetivos. 
            Te responderemos en menos de 24 horas con una propuesta personalizada.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-[#0080FF] border border-slate-100">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Email</p>
                <p className="font-bold text-slate-900 text-lg">hola@impulsodigital.com</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-[#0080FF] border border-slate-100">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">WhatsApp</p>
                <p className="font-bold text-slate-900 text-lg">+34 600 000 000</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-[#0080FF] border border-slate-100">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Oficina</p>
                <p className="font-bold text-slate-900 text-lg">Calle Digital, 12, Pyme Hub</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-8 md:p-12 rounded-[40px] border border-slate-100">
          {status === 'success' ? (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-2">¡Mensaje recibido!</h3>
              <p className="text-slate-500 mb-8">Gracias por contactar con Impulso Digital. En breve nos pondremos en contacto contigo.</p>
              <button 
                onClick={() => setStatus(null)}
                className="text-[#0080FF] font-bold hover:underline"
              >
                Enviar otro mensaje
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider px-1">Nombre</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Tu nombre"
                    className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0080FF]/20 focus:border-[#0080FF] transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider px-1">Empresa</label>
                  <input 
                    type="text" 
                    placeholder="Tu empresa"
                    className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0080FF]/20 focus:border-[#0080FF] transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider px-1">Email</label>
                <input 
                  required
                  type="email" 
                  placeholder="hola@tuempresa.com"
                  className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0080FF]/20 focus:border-[#0080FF] transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider px-1">Mensaje</label>
                <textarea 
                  required
                  rows={4}
                  placeholder="¿Cómo podemos ayudarte?"
                  className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0080FF]/20 focus:border-[#0080FF] transition-all resize-none"
                />
              </div>
              <button 
                disabled={status === 'loading'}
                className="w-full bg-[#0080FF] text-white py-5 rounded-2xl font-bold hover:bg-[#0066CC] transition-all shadow-xl shadow-blue-500/10 flex items-center justify-center gap-3 disabled:opacity-70"
              >
                {status === 'loading' ? 'Enviando...' : (
                  <>
                    <MessageSquare size={18} />
                    Enviar mensaje
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-[#0080FF] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">ID</span>
              </div>
              <span className="font-bold text-xl tracking-tighter">
                IMPULSO<span className="text-[#0080FF]">DIGITAL</span>
              </span>
            </div>
            <p className="text-slate-500 max-w-sm leading-relaxed mb-8">
              Expertos en transformación digital para pequeñas y medianas empresas. 
              Impulsamos tu crecimiento real con soluciones tecnológicas a medida.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-slate-400">Navegación</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-500 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="text-slate-500 hover:text-white transition-colors">Servicios</a></li>
              <li><a href="#testimonios" className="text-slate-500 hover:text-white transition-colors">Testimonios</a></li>
              <li><a href="#contacto" className="text-slate-500 hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-slate-400">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-500 hover:text-white transition-colors">Aviso Legal</a></li>
              <li><a href="#" className="text-slate-500 hover:text-white transition-colors">Privacidad</a></li>
              <li><a href="#" className="text-slate-500 hover:text-white transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Impulso Digital. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">LinkedIn</span>
            <span className="hover:text-white cursor-pointer transition-colors">Instagram</span>
            <span className="hover:text-white cursor-pointer transition-colors">Twitter</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const TrustBar = () => {
  return (
    <div className="bg-white py-12 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-8">
          Colaboramos con los mejores para tu éxito
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          <div className="flex items-center gap-2">
            <Globe className="text-slate-900" size={24} />
            <span className="font-bold text-slate-900">Google Ads</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="text-slate-900" size={24} />
            <span className="font-bold text-slate-900">Meta Business</span>
          </div>
          <div className="flex items-center gap-2">
            <BarChart3 className="text-slate-900" size={24} />
            <span className="font-bold text-slate-900">HubSpot</span>
          </div>
          <div className="flex items-center gap-2">
            <Rocket className="text-slate-900" size={24} />
            <span className="font-bold text-slate-900">Shopify</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-[#0080FF] selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}
