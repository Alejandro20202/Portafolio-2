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
            className="relative flex justify-center md:justify-end"
          >
            <div className={`relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-1 bg-gradient-to-tr ${themeClasses.progress} shadow-2xl overflow-hidden group`}>
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent blur-xl group-hover:rotate-180 transition-transform duration-1000" />
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/10 relative z-10">
                <img
                  src={profileImage}
                  alt="Jhon Alejandro Jojoa Molina"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
            <div className={`absolute -bottom-10 -right-10 w-64 h-64 bg-gradient-to-br ${themeClasses.accent} opacity-20 rounded-full blur-3xl -z-10`} />
            <div className={`absolute -top-10 -left-10 w-64 h-64 bg-gradient-to-br ${themeClasses.progress} opacity-20 rounded-full blur-3xl -z-10`} />
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
                  { name: 'HTML5', icon: <div className="w-8 h-8 flex items-center justify-center text-[#E34F26]"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/></svg></div>, color: 'from-orange-500 to-red-500' },
                  { name: 'CSS3', icon: <div className="w-8 h-8 flex items-center justify-center text-[#1572B6]"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/></svg></div>, color: 'from-blue-500 to-cyan-500' },
                  { name: 'JavaScript', icon: <div className="w-8 h-8 flex items-center justify-center text-[#F7DF1E]"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.045-.705.15-.645.975-.75 1.53-.675.735.09 1.2.555 1.35 1.14.33-.135.66-.27.975-.405-.21-1.244-1.245-1.935-2.445-1.935-1.156 0-2.146.615-2.326 1.74-.06.42-.045.705.105.99.27.57.825.945 1.725 1.305 1.275.51 1.875.93 1.875 1.575 0 .555-.45 1.035-1.56 1.035-1.275 0-1.815-.555-2.085-1.185-.345.15-.66.3-.975.435.42 1.2 1.32 1.74 2.895 1.74 2.085 0 2.895-1.185 2.73-2.22zm-8.351-5.146h-.975c0 2.497-.033 4.867-.033 7.41-.135.03-.27.045-.42.045-1.485 0-1.77-.765-1.77-2.145 0-.585.045-1.2.045-1.8h-.945c0 .6.015 1.2.015 1.92 0 2.145.51 2.985 2.715 2.985.465 0 .9-.045 1.41-.135v-8.31z"/></svg></div>, color: 'from-yellow-400 to-orange-500' },
                  { name: 'TypeScript', icon: <div className="w-8 h-8 flex items-center justify-center text-[#3178C6]"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm17.363 9.75c.612 0 1.154.037 1.627.111v2.111c-.524-.124-1.087-.186-1.687-.186-1.374 0-2.062.611-2.062 1.833v5.131h-2.425V9.91h2.281v1.178c.475-.872 1.231-1.338 2.266-1.338zm-7.026 0c.549 0 1.033.045 1.45.135v2.131c-.487-.18-1.012-.27-1.575-.27-.855 0-1.283.293-1.283.878 0 .435.251.742.754.922l1.395.48c1.343.465 2.014 1.253 2.014 2.363 0 1.185-.717 2.07-2.152 2.655-.548.225-1.193.338-1.935.338-.637 0-1.222-.053-1.755-.158v-2.281c.547.233 1.185.353 1.912.353.945 0 1.418-.3 1.418-.9 0-.42-.293-.728-.878-.923l-1.35-.48c-1.35-.488-2.025-1.253-2.025-2.295 0-1.17.713-2.033 2.138-2.588.517-.202 1.102-.308 1.754-.308z"/></svg></div>, color: 'from-blue-600 to-blue-700' },
                  { name: 'React', icon: <div className="w-8 h-8 flex items-center justify-center text-[#61DAFB]"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12c0 1.23-.3 2.4-.85 3.44l-1.83-1.06c.43-.76.68-1.55.68-2.38 0-2.76-2.24-5-5-5-1.23 0-2.4.3-3.44.85l-1.06-1.83C13.44 5.3 14.6 5 15.83 5c4.42 0 8 3.58 8 8zm-8.17 6.15c-1.04.55-2.21.85-3.44.85-4.42 0-8-3.58-8-8 0-1.23.3-2.4.85-3.44l1.83 1.06c-.43.76-.68 1.55-.68 2.38 0 2.76 2.24 5 5 5 1.23 0 2.4-.3 3.44-.85l1.06 1.83zM12 10.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5z"/></svg></div>, color: 'from-cyan-400 to-blue-500' },
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
                    <div className="bg-white/10 backdrop-blur-sm rounded-full px-5 py-2.5 hover:bg-white/20 transition-all border border-white/20 flex items-center gap-3">
                      {tech.icon}
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
                  { name: 'Next.js', icon: <div className="w-8 h-8 flex items-center justify-center text-white"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.182 18.252l-6.853-8.825v7.456h-1.488v-10.37h1.488l6.853 8.825v-7.456h1.488v10.37h-1.488z"/></svg></div>, color: 'from-gray-700 to-gray-900' },
                  { name: 'Tailwind CSS', icon: <div className="w-8 h-8 flex items-center justify-center text-[#06B6D4]"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/></svg></div>, color: 'from-teal-400 to-cyan-500' },
                  { name: 'Motion', icon: <div className="w-8 h-8 flex items-center justify-center text-white"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M0 14.787L9.426 24.213L24 9.639L14.574.213L0 14.787Z"/></svg></div>, color: 'from-pink-500 to-purple-500' },
                  { name: 'React Router', icon: <div className="w-8 h-8 flex items-center justify-center text-[#CA4245]"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 18c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z"/></svg></div>, color: 'from-red-500 to-pink-500' },
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
                    <div className="bg-white/10 backdrop-blur-sm rounded-full px-5 py-2.5 hover:bg-white/20 transition-all border border-white/20 flex items-center gap-3">
                      {tech.icon}
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
                  { name: 'Git', icon: <div className="w-8 h-8 flex items-center justify-center text-[#F05032]"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.187 0L8.708 2.624l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72 1.127 1.684 1.127 2.674 0 .99-.406 1.954-1.127 2.674-.722.722-1.685 1.128-2.675 1.128-.99 0-1.953-.406-2.674-1.128-.722-.72-.128-1.685-1.128-2.674 0-.99.406-1.954 1.128-2.674.512-.511 1.255-.653 1.895-.433l-2.66-2.66c-.22.22-.654.438-1.295.438-.515-.516-.658-1.258-.438-1.9l-2.76-2.76-6.199 6.199c-.604.605-.604 1.584 0 2.188l10.479 10.479c.604.604 1.582.604 2.187 0l10.479-10.479c.604-.604.604-1.582 0-2.187z"/></svg></div>, color: 'from-orange-500 to-red-600' },
                  { name: 'GitHub', icon: <div className="w-8 h-8 flex items-center justify-center text-white"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.82 1.102.82 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></div>, color: 'from-gray-600 to-gray-800' },
                  { name: 'Figma', icon: <div className="w-8 h-8 flex items-center justify-center text-[#F24E1E]"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 24c3.314 0 6-2.686 6-6V6c0-3.314-2.686-6-6-6S6 2.686 6 6v12c0 3.314 2.686 6 6 6zM6 6c0-1.657 1.343-3 3-3s3 1.343 3 3-1.343 3-3 3-3-1.343-3-3zm0 12c0-1.657 1.343-3 3-3s3 1.343 3 3-1.343 3-3 3-3-1.343-3-3zm3-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z"/></svg></div>, color: 'from-purple-500 to-pink-500' },
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
                    <div className="bg-white/10 backdrop-blur-sm rounded-full px-5 py-2.5 hover:bg-white/20 transition-all border border-white/20 flex items-center gap-3">
                      {tech.icon}
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
      <footer className={`${theme === 'dark' ? 'bg-slate-950 border-t border-slate-800' : 'bg-gray-900'} text-white py-12 px-4`}>
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://github.com/Alejandro20202"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 ${theme === 'dark' ? 'bg-slate-800 hover:bg-blue-600' : 'bg-gray-800 hover:bg-blue-600'} rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg`}
              title="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="mailto:am5314284@gmail.com"
              className={`w-12 h-12 ${theme === 'dark' ? 'bg-slate-800 hover:bg-blue-600' : 'bg-gray-800 hover:bg-blue-600'} rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg`}
              title="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/alejandro-molina-239b9b401"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 ${theme === 'dark' ? 'bg-slate-800 hover:bg-blue-600' : 'bg-gray-800 hover:bg-blue-600'} rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg`}
              title="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
          <div className="text-2xl font-bold text-gray-400 mb-2">
            2026
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
