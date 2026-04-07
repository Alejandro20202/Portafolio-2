import { useState, useEffect } from 'react';
import html2pdf from 'html2pdf.js';
import { motion, useScroll, useSpring } from 'motion/react';
import { Menu, X, Code, Palette, Users, Briefcase, Mail, Phone, Github, Linkedin, ExternalLink, ChevronDown, Download, Star, GraduationCap, Calendar, Award, Globe, Languages } from 'lucide-react';
import profileImage from '../assets/2ec0edd9fb8815761da0e17c25f9f82b7ba5a07d.png';
import cert1 from '../assets/9a97a3abe4da264c1b30fc77f50166fd4c9c2130.png';
import cert2 from '../assets/711b745778ff8042b4d18338ac51839841c5213e.png';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import type { Language } from './locales/translations';

function PortfolioContent() {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [theme, setTheme] = useState('modern'); // 'modern', 'emerald', 'dark', 'purple', 'orange'
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'sobre-mi', 'experiencia', 'habilidades', 'proyectos', 'tecnologias', 'testimonios', 'contacto'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const downloadCV = async () => {
    // Abrir el CV en una nueva pestaña y luego pedir que lo guarden como PDF
    // Esto es mucho más robusto y rápido que html2pdf que a veces se bloquea
    const link = document.createElement('a');
    link.href = '/cv.html';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navItems = [
    { id: 'inicio', label: t.nav.inicio },
    { id: 'sobre-mi', label: t.nav.sobreMi },
    { id: 'experiencia', label: t.nav.experiencia },
    { id: 'habilidades', label: t.nav.habilidades },
    { id: 'proyectos', label: t.nav.proyectos },
    { id: 'tecnologias', label: t.nav.tecnologias },
    { id: 'testimonios', label: t.nav.testimonios },
    { id: 'contacto', label: t.nav.contacto },
  ];

  const testimonials = [
    {
      name: t.testimonials.items[0].name,
      role: t.testimonials.items[0].role,
      image: 'https://images.unsplash.com/photo-1745434159123-4908d0b9df94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHNtaWxpbmd8ZW58MXx8fHwxNzc0MzcxOTg2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      text: t.testimonials.items[0].text,
      rating: 5
    },
    {
      name: t.testimonials.items[1].name,
      role: t.testimonials.items[1].role,
      image: 'https://images.unsplash.com/photo-1758518727984-17b37f2f0562?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGJ1c2luZXNzbWFuJTIwcG9ydHJhaXQlMjBjb3Jwb3JhdGV8ZW58MXx8fHwxNzc0MzgyMDYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      text: t.testimonials.items[1].text,
      rating: 5
    },
    {
      name: t.testimonials.items[2].name,
      role: t.testimonials.items[2].role,
      image: 'https://images.unsplash.com/photo-1758691736975-9f7f643d178e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwYnVzaW5lc3MlMjBwZW9wbGUlMjB0ZWFtfGVufDF8fHx8MTc3NDM4MjA1OHww&ixlib=rb-4.1.0&q=80&w=1080',
      text: t.testimonials.items[2].text,
      rating: 5
    }
  ];

  const projects = [
    {
      title: t.projects.items[1].title,
      desc: t.projects.items[1].desc,
      image: 'https://images.unsplash.com/photo-1637937459053-c788742455be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGUlMjBzY3JlZW58ZW58MXx8fHwxNzc0MjM2NzU5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      github: 'https://github.com/Alejandro20202',
      demo: 'https://cali-theta.vercel.app/'
    },
    {
      title: t.projects.items[2].title,
      desc: t.projects.items[2].desc,
      image: 'https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BlciUyMHdvcmtzcGFjZSUyMGRlc2slMjBjb2Rpbmd8ZW58MXx8fHwxNzc0MzE5ODc4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      github: 'https://github.com/Alejandro20202',
      demo: '#'
    },
    {
      title: t.projects.items[3].title,
      desc: t.projects.items[3].desc,
      image: 'https://images.unsplash.com/photo-1637937459053-c788742455be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGUlMjBzY3JlZW58ZW58MXx8fHwxNzc0MjM2NzU5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      github: 'https://github.com/Alejandro20202',
      demo: '#'
    }
  ];

  const getThemeClasses = () => {
    switch (theme) {
      case 'emerald':
        return {
          bg: 'from-emerald-50 via-white to-emerald-100',
          accent: 'from-emerald-600 to-teal-600',
          progress: 'from-emerald-500 via-teal-500 to-cyan-500',
          text: 'text-emerald-600',
          btn: 'bg-emerald-600 hover:bg-emerald-700',
          navActive: 'text-emerald-600 after:bg-emerald-600'
        };
      case 'dark':
        return {
          bg: 'from-slate-950 via-slate-900 to-slate-950',
          accent: 'from-blue-500 to-purple-500',
          progress: 'from-blue-400 via-purple-400 to-pink-400',
          text: 'text-blue-400',
          btn: 'bg-blue-600 hover:bg-blue-700',
          navActive: 'text-blue-400 after:bg-blue-400'
        };
      case 'purple':
        return {
          bg: 'from-purple-50 via-white to-purple-100',
          accent: 'from-purple-600 to-indigo-600',
          progress: 'from-purple-500 via-indigo-500 to-blue-500',
          text: 'text-purple-600',
          btn: 'bg-purple-600 hover:bg-purple-700',
          navActive: 'text-purple-600 after:bg-purple-600'
        };
      case 'orange':
        return {
          bg: 'from-orange-50 via-white to-orange-100',
          accent: 'from-orange-600 to-red-600',
          progress: 'from-orange-500 via-red-500 to-yellow-500',
          text: 'text-orange-600',
          btn: 'bg-orange-600 hover:bg-orange-700',
          navActive: 'text-orange-600 after:bg-orange-600'
        };
      default: // modern (blue)
        return {
          bg: 'from-slate-50 via-white to-slate-100',
          accent: 'from-blue-600 to-purple-600',
          progress: 'from-blue-500 via-purple-500 to-pink-500',
          text: 'text-blue-600',
          btn: 'bg-blue-600 hover:bg-blue-700',
          navActive: 'text-blue-600 after:bg-blue-600'
        };
    }
  };

  const themeClasses = getThemeClasses();

  return (
    <div className={`min-h-screen bg-gradient-to-br ${themeClasses.bg} ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
      {/* Progress Bar */}
      <motion.div
        className={`fixed top-0 left-0 right-0 h-1 bg-gradient-to-r ${themeClasses.progress} origin-left z-50`}
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 ${theme === 'dark' ? 'bg-slate-900/80' : 'bg-white/80'} backdrop-blur-md shadow-sm z-40`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => scrollToSection('inicio')}
            >
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${themeClasses.accent} flex items-center justify-center text-white font-bold text-xl`}>
                J
              </div>
              <span className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>Jhon Jojoa</span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative text-sm font-medium transition-colors ${
                    activeSection === item.id 
                      ? themeClasses.text 
                      : (theme === 'dark' ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900')
                  } ${
                    activeSection === item.id ? 'after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-current' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              <div className="flex items-center gap-3 ml-4 border-l border-slate-200 pl-6">
                {/* Theme Switcher */}
                <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-full gap-1">
                  <button 
                    onClick={() => setTheme('modern')}
                    className={`w-5 h-5 rounded-full bg-blue-500 transition-transform ${theme === 'modern' ? 'scale-125 ring-2 ring-white' : 'opacity-50 hover:opacity-100'}`}
                    title="Blue"
                  />
                  <button 
                    onClick={() => setTheme('emerald')}
                    className={`w-5 h-5 rounded-full bg-emerald-500 transition-transform ${theme === 'emerald' ? 'scale-125 ring-2 ring-white' : 'opacity-50 hover:opacity-100'}`}
                    title="Emerald"
                  />
                  <button 
                    onClick={() => setTheme('purple')}
                    className={`w-5 h-5 rounded-full bg-purple-500 transition-transform ${theme === 'purple' ? 'scale-125 ring-2 ring-white' : 'opacity-50 hover:opacity-100'}`}
                    title="Purple"
                  />
                  <button 
                    onClick={() => setTheme('orange')}
                    className={`w-5 h-5 rounded-full bg-orange-500 transition-transform ${theme === 'orange' ? 'scale-125 ring-2 ring-white' : 'opacity-50 hover:opacity-100'}`}
                    title="Orange"
                  />
                  <button 
                    onClick={() => setTheme('dark')}
                    className={`w-5 h-5 rounded-full bg-slate-900 transition-transform ${theme === 'dark' ? 'scale-125 ring-2 ring-white' : 'opacity-50 hover:opacity-100'}`}
                    title="Dark"
                  />
                </div>

                <button
                  onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border-2 transition-all ${
                    theme === 'dark' 
                      ? 'border-slate-700 text-slate-300 hover:border-blue-500 hover:text-blue-500' 
                      : 'border-slate-200 text-slate-600 hover:border-blue-600 hover:text-blue-600'
                  }`}
                >
                  <Languages className="w-3.5 h-3.5" />
                  {language === 'es' ? 'ES' : 'EN'}
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${theme === 'dark' ? 'hover:bg-slate-800 text-white' : 'hover:bg-slate-100 text-slate-600'}`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`md:hidden border-t ${theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}
          >
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? `${theme === 'dark' ? 'bg-slate-800 text-blue-400' : 'bg-blue-50 text-blue-600'}`
                      : `${theme === 'dark' ? 'text-slate-400 hover:bg-slate-800' : 'text-slate-600 hover:bg-slate-50'}`
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              <div className="flex items-center gap-4 px-4 py-3">
                <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-full gap-2">
                  <button onClick={() => setTheme('modern')} className="w-5 h-5 rounded-full bg-blue-500" />
                  <button onClick={() => setTheme('emerald')} className="w-5 h-5 rounded-full bg-emerald-500" />
                  <button onClick={() => setTheme('purple')} className="w-5 h-5 rounded-full bg-purple-500" />
                  <button onClick={() => setTheme('orange')} className="w-5 h-5 rounded-full bg-orange-500" />
                  <button onClick={() => setTheme('dark')} className="w-5 h-5 rounded-full bg-slate-900" />
                </div>
                <button
                  onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
                  className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold border-2 ${
                    theme === 'dark' ? 'border-slate-700 text-slate-300' : 'border-slate-200 text-slate-600'
                  }`}
                >
                  <Languages className="w-4 h-4" />
                  {language === 'es' ? 'ES' : 'EN'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="min-h-screen flex items-center justify-center pt-16 px-4">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl mb-6 font-bold"
            >
              {t.hero.greeting}{' '}
              <span className={`bg-gradient-to-r ${themeClasses.progress} bg-clip-text text-transparent`}>
                {t.hero.name}
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className={`text-lg sm:text-xl mb-8 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}
            >
              {t.hero.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <button
                onClick={() => scrollToSection('proyectos')}
                className={`px-8 py-3 bg-gradient-to-r ${themeClasses.accent} text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all`}
              >
                {t.hero.viewProjects}
              </button>
              <button
                onClick={downloadCV}
                className={`px-8 py-3 border-2 rounded-full font-medium hover:scale-105 transition-all flex items-center gap-2 ${
                  theme === 'dark' 
                    ? 'border-blue-500 text-blue-400 hover:bg-blue-500/10' 
                    : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                }`}
              >
                <Download className="w-5 h-5" />
                {t.hero.downloadCV}
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className={`px-8 py-3 border-2 rounded-full font-medium hover:scale-105 transition-all flex items-center gap-2 ${
                  theme === 'dark' 
                    ? 'border-slate-700 text-slate-300 hover:bg-slate-800' 
                    : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                {t.hero.contact}
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={profileImage}
                alt="Jhon Alejandro Jojoa Molina"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>

        <motion.button
          onClick={() => scrollToSection('sobre-mi')}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </motion.button>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className={`py-20 px-4 ${theme === 'dark' ? 'bg-slate-900/50' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl text-center mb-12 font-bold">
              {t.about.title}<span className={`bg-gradient-to-r ${themeClasses.progress} bg-clip-text text-transparent`}>{t.about.titleHighlight}</span>
            </h2>

            {/* About Me Content */}
            <div className={`${theme === 'dark' ? 'bg-slate-800/50' : 'bg-gradient-to-br from-blue-50 to-purple-50'} rounded-2xl p-8 sm:p-12 mb-12`}>
              <p className={`${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'} text-lg leading-relaxed mb-6`}>
                {t.about.paragraph1}
              </p>
              <p className={`${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'} text-lg leading-relaxed mb-6`}>
                {t.about.paragraph2}
              </p>
              <p className={`${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'} text-lg leading-relaxed`}>
                {t.about.paragraph3}
              </p>
            </div>

            {/* Certifications Section */}
            <div className="mt-12">
              <h3 className="text-2xl sm:text-3xl text-center mb-8 font-bold">
                <span className={`bg-gradient-to-r ${themeClasses.progress} bg-clip-text text-transparent`}>{t.about.certificationsTitle}</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ y: -5 }}
                  className={`${theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-white'} border rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group`}
                >
                  <div className="aspect-[3/4] overflow-hidden bg-white p-4">
                    <img
                      src={cert1}
                      alt={t.about.cert1Title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Award className={`w-5 h-5 ${themeClasses.text}`} />
                      <h4 className="font-semibold text-lg">{t.about.cert1Title}</h4>
                    </div>
                    <p className={`${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'} text-sm mb-2`}>{t.about.cert1Desc}</p>
                    <p className="text-gray-500 text-sm">{t.about.cert1Date}</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ y: -5 }}
                  className={`${theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-white'} border rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group`}
                >
                  <div className="aspect-[3/4] overflow-hidden bg-white p-4">
                    <img
                      src={cert2}
                      alt={t.about.cert2Title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Award className={`w-5 h-5 ${themeClasses.text}`} />
                      <h4 className="font-semibold text-lg">{t.about.cert2Title}</h4>
                    </div>
                    <p className={`${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'} text-sm mb-2`}>{t.about.cert2Desc}</p>
                    <p className="text-gray-500 text-sm">{t.about.cert2Date}</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiencia" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl text-center mb-12 font-bold">
              <span className={`bg-gradient-to-r ${themeClasses.progress} bg-clip-text text-transparent`}>{t.experience.title}</span>
            </h2>
            
            <div className="space-y-8">
              {/* Academic Experience */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className={`relative pl-8 border-l-4 ${theme === 'dark' ? 'border-blue-500' : 'border-blue-500'}`}
              >
                <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-3 h-3 text-white" />
                </div>
                <div className={`${theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-white'} border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all`}>
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-xl sm:text-2xl mb-2 font-bold">{t.experience.academic.title}</h3>
                      <p className={`${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'} font-medium`}>{t.experience.academic.institution}</p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{t.experience.academic.status}</span>
                    </div>
                  </div>
                  <p className={`${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'} leading-relaxed`}>
                    {t.experience.academic.description}
                  </p>
                </div>
              </motion.div>

              {/* Project Experience */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className={`relative pl-8 border-l-4 ${theme === 'dark' ? 'border-purple-500' : 'border-purple-500'}`}
              >
                <div className="absolute -left-3 top-0 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                  <Briefcase className="w-3 h-3 text-white" />
                </div>
                <div className={`${theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-white'} border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all`}>
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-xl sm:text-2xl mb-2 font-bold">{t.experience.projects.title}</h3>
                      <p className={`${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'} font-medium`}>{t.experience.projects.subtitle}</p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{t.experience.projects.date}</span>
                    </div>
                  </div>
                  <ul className={`space-y-2 ${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}`}>
                    <li className="flex items-start gap-2">
                      <span className={`${themeClasses.text} mt-1`}>•</span>
                      <span>{t.experience.projects.item1}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className={`${themeClasses.text} mt-1`}>•</span>
                      <span>{t.experience.projects.item2}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className={`${themeClasses.text} mt-1`}>•</span>
                      <span>{t.experience.projects.item3}</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Additional Experience */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className={`relative pl-8 border-l-4 ${theme === 'dark' ? 'border-pink-500' : 'border-pink-500'}`}
              >
                <div className="absolute -left-3 top-0 w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center">
                  <Users className="w-3 h-3 text-white" />
                </div>
                <div className={`${theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-white'} border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all`}>
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-xl sm:text-2xl mb-2 font-bold">{t.experience.personal.title}</h3>
                      <p className={`${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'} font-medium`}>{t.experience.personal.subtitle}</p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{t.experience.personal.date}</span>
                    </div>
                  </div>
                  <p className={`${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'} leading-relaxed`}>
                    {t.experience.personal.description}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className={`py-20 px-4 ${theme === 'dark' ? 'bg-slate-900/50' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl text-center mb-12 font-bold">
              {t.skills.title}<span className={`bg-gradient-to-r ${themeClasses.progress} bg-clip-text text-transparent`}>{t.skills.titleHighlight}</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.skills.items.map((skill, index) => {
                const icons = [Code, Palette, Briefcase, Users, Code, Palette];
                const Icon = icons[index];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className={`${theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-white'} border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all`}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${themeClasses.accent} rounded-lg flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl mb-2 font-bold">{skill.title}</h3>
                    <p className={`${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'}`}>{skill.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className={`py-20 px-4 ${theme === 'dark' ? 'bg-slate-900' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl text-center mb-12 font-bold">
              {t.projects.title}<span className={`bg-gradient-to-r ${themeClasses.progress} bg-clip-text text-transparent`}>{t.projects.titleHighlight}</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Featured Project */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -10 }}
                className={`md:col-span-2 ${theme === 'dark' ? 'bg-slate-800/50 border-slate-700' : 'bg-gradient-to-br from-blue-50 to-purple-50'} border rounded-2xl overflow-hidden shadow-xl group`}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="aspect-video md:aspect-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1750056393326-8feed2a1c34f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVSSUyMGRlc2lnbiUyMGludGVyZmFjZSUyMG1vY2t1cHxlbnwxfHx8fDE3NzQyNjk2MjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="UI Design Interface"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className={`inline-block px-3 py-1 ${theme === 'dark' ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600'} rounded-full text-sm mb-4 w-fit font-bold`}>
                      {t.projects.featured}
                    </div>
                    <h3 className="text-2xl sm:text-3xl mb-4 font-bold">{t.projects.items[0].title}</h3>
                    <p className={`${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'} mb-6 leading-relaxed`}>
                      {t.projects.items[0].desc}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href="https://fernandorosero91.github.io/interfacesjuegos/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${themeClasses.accent} text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all`}
                      >
                        {t.projects.viewDemo}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <a
                        href="https://github.com/Alejandro20202"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-6 py-3 ${theme === 'dark' ? 'bg-slate-700 text-white' : 'bg-gray-800 text-white'} rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all`}
                      >
                        <Github className="w-4 h-4" />
                        {t.projects.github}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Other Projects */}
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className={`${theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-white'} border rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group`}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl mb-3 font-bold">{project.title}</h3>
                    <p className={`${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'} leading-relaxed mb-4`}>{project.desc}</p>
                    <div className="flex gap-3">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-4 py-2 ${themeClasses.btn} text-white rounded-lg text-sm font-medium transition-colors`}
                      >
                        <ExternalLink className="w-4 h-4" />
                        {t.projects.demo}
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-4 py-2 ${theme === 'dark' ? 'bg-slate-700 hover:bg-slate-600' : 'bg-gray-800 hover:bg-gray-900'} text-white rounded-lg text-sm font-medium transition-colors`}
                      >
                        <Github className="w-4 h-4" />
                        {t.projects.github}
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="tecnologias" className={`py-20 px-4 ${theme === 'dark' ? 'bg-slate-950' : 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'}`}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl text-center mb-4 font-bold">
              <span className={`bg-gradient-to-r ${themeClasses.progress} bg-clip-text text-transparent`}>{t.technologies.title}</span>
            </h2>
            <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
              {t.technologies.subtitle}
            </p>
            
            {/* Frontend Technologies */}
            <div className="mb-10">
              <h3 className="text-lg text-gray-400 mb-4 text-center font-medium">{t.technologies.frontend}</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { name: 'HTML5', icon: '🌐', color: 'from-orange-500 to-red-500' },
                  { name: 'CSS3', icon: '🎨', color: 'from-blue-500 to-cyan-500' },
                  { name: 'JavaScript', icon: '⚡', color: 'from-yellow-400 to-orange-500' },
                  { name: 'TypeScript', icon: '📘', color: 'from-blue-600 to-blue-700' },
                  { name: 'React', icon: '⚛️', color: 'from-cyan-400 to-blue-500' },
                ].map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="relative group"
                  >
                    <div className="bg-white/10 backdrop-blur-sm rounded-full px-5 py-2.5 hover:bg-white/20 transition-all border border-white/20 flex items-center gap-2">
                      <span className="text-2xl">{tech.icon}</span>
                      <span className="text-white font-medium text-sm">{tech.name}</span>
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-30 rounded-full transition-opacity blur-md`}></div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Frameworks & Libraries */}
            <div className="mb-10">
              <h3 className="text-lg text-gray-400 mb-4 text-center font-medium">{t.technologies.frameworks}</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { name: 'Next.js', icon: '▲', color: 'from-gray-700 to-gray-900' },
                  { name: 'Tailwind CSS', icon: '💨', color: 'from-teal-400 to-cyan-500' },
                  { name: 'Motion', icon: '🎬', color: 'from-pink-500 to-purple-500' },
                  { name: 'React Router', icon: '🛣️', color: 'from-red-500 to-pink-500' },
                ].map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="relative group"
                  >
                    <div className="bg-white/10 backdrop-blur-sm rounded-full px-5 py-2.5 hover:bg-white/20 transition-all border border-white/20 flex items-center gap-2">
                      <span className="text-2xl">{tech.icon}</span>
                      <span className="text-white font-medium text-sm">{tech.name}</span>
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-30 rounded-full transition-opacity blur-md`}></div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tools & Design */}
            <div className="mb-10">
              <h3 className="text-lg text-gray-400 mb-4 text-center font-medium">{t.technologies.tools}</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { name: 'Git', icon: '🔧', color: 'from-orange-500 to-red-600' },
                  { name: 'GitHub', icon: '🐙', color: 'from-gray-600 to-gray-800' },
                  { name: 'Vercel', icon: '🚀', color: 'from-black to-gray-800' },
                  { name: 'Figma', icon: '🎨', color: 'from-purple-500 to-pink-500' },
                  { name: 'VS Code', icon: '💻', color: 'from-blue-500 to-cyan-500' },
                ].map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="relative group"
                  >
                    <div className="bg-white/10 backdrop-blur-sm rounded-full px-5 py-2.5 hover:bg-white/20 transition-all border border-white/20 flex items-center gap-2">
                      <span className="text-2xl">{tech.icon}</span>
                      <span className="text-white font-medium text-sm">{tech.name}</span>
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-30 rounded-full transition-opacity blur-md`}></div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
                <p className="text-gray-300 text-sm">
                  {t.technologies.learning}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className={`py-20 px-4 ${theme === 'dark' ? 'bg-slate-900/50' : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'}`}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl text-center mb-4 font-bold">
              <span className={`bg-gradient-to-r ${themeClasses.progress} bg-clip-text text-transparent`}>{t.testimonials.title}</span>
            </h2>
            <p className={`${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'} text-center mb-12 max-w-2xl mx-auto`}>
              {t.testimonials.subtitle}
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className={`${theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-white'} border rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-full overflow-hidden border-2 ${themeClasses.text}`}>
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{testimonial.name}</h4>
                      <p className={`${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'} text-sm`}>{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className={`${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'} italic leading-relaxed`}>
                    "{testimonial.text}"
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className={`py-20 px-4 ${theme === 'dark' ? 'bg-slate-900' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl text-center mb-12 font-bold">
              <span className={`bg-gradient-to-r ${themeClasses.progress} bg-clip-text text-transparent`}>{t.contact.title}</span>
            </h2>
            <div className={`${theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100'} rounded-2xl p-8 sm:p-12 shadow-xl border-2`}>
              <p className={`${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'} text-lg text-center mb-8`}>
                {t.contact.subtitle}
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <motion.a
                  href="mailto:am5314284@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  className={`flex items-center gap-4 p-6 ${theme === 'dark' ? 'bg-slate-700 hover:bg-slate-600' : 'bg-gradient-to-br from-blue-50 to-blue-100'} rounded-xl hover:shadow-lg transition-all`}
                >
                  <div className={`w-12 h-12 ${theme === 'dark' ? 'bg-blue-600' : 'bg-blue-500'} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className={`${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'} text-sm mb-1`}>{t.contact.email}</div>
                    <div className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>am5314284@gmail.com</div>
                  </div>
                </motion.a>

                <motion.a
                  href="tel:3236000339"
                  whileHover={{ scale: 1.05 }}
                  className={`flex items-center gap-4 p-6 ${theme === 'dark' ? 'bg-slate-700 hover:bg-slate-600' : 'bg-gradient-to-br from-purple-50 to-purple-100'} rounded-xl hover:shadow-lg transition-all`}
                >
                  <div className={`w-12 h-12 ${theme === 'dark' ? 'bg-purple-600' : 'bg-purple-500'} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className={`${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'} text-sm mb-1`}>{t.contact.phone}</div>
                    <div className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>323 600 0339</div>
                  </div>
                </motion.a>

                <motion.a
                  href="https://github.com/Alejandro20202"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className={`flex items-center gap-4 p-6 ${theme === 'dark' ? 'bg-slate-700 hover:bg-slate-600' : 'bg-gradient-to-br from-pink-50 to-pink-100'} rounded-xl hover:shadow-lg transition-all`}
                >
                  <div className={`w-12 h-12 ${theme === 'dark' ? 'bg-slate-600' : 'bg-gray-800'} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <Github className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className={`${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'} text-sm mb-1`}>{t.contact.github}</div>
                    <div className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Alejandro20202</div>
                  </div>
                </motion.a>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`flex items-center gap-4 p-6 ${theme === 'dark' ? 'bg-slate-700 hover:bg-slate-600' : 'bg-gradient-to-br from-orange-50 to-orange-100'} rounded-xl hover:shadow-lg transition-all`}
                >
                  <div className={`w-12 h-12 ${theme === 'dark' ? 'bg-orange-600' : 'bg-orange-500'} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className={`${theme === 'dark' ? 'text-slate-400' : 'text-gray-600'} text-sm mb-1`}>{t.contact.linkedin}</div>
                    <div className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{t.contact.linkedinText}</div>
                  </div>
                </motion.div>
              </div>

              <div className={`mt-8 p-6 ${theme === 'dark' ? 'bg-slate-700/50' : 'bg-gradient-to-r from-blue-50 to-purple-50'} rounded-xl`}>
                <p className={`text-center ${theme === 'dark' ? 'text-slate-300' : 'text-gray-700'}`}>
                  {t.contact.availability}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${theme === 'dark' ? 'bg-slate-950 border-t border-slate-800' : 'bg-gray-900'} text-white py-8 px-4`}>
        <div className="max-w-6xl mx-auto text-center">
          <div className={`text-xl mb-4 bg-gradient-to-r ${themeClasses.progress} bg-clip-text text-transparent font-bold`}>
            {t.footer.name}
          </div>
          <p className="text-gray-400 mb-4">{t.footer.role}</p>
          <div className="flex justify-center gap-4 mb-4">
            <a
              href="mailto:am5314284@gmail.com"
              className={`w-10 h-10 ${theme === 'dark' ? 'bg-slate-800 hover:bg-blue-600' : 'bg-gray-800 hover:bg-blue-600'} rounded-full flex items-center justify-center transition-colors`}
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/Alejandro20202"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-10 h-10 ${theme === 'dark' ? 'bg-slate-800 hover:bg-blue-600' : 'bg-gray-800 hover:bg-blue-600'} rounded-full flex items-center justify-center transition-colors`}
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            {t.footer.rights}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <PortfolioContent />
    </LanguageProvider>
  );
}
