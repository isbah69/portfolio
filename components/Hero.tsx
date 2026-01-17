
import React from 'react';
import { Github, Linkedin, Mail, ArrowRight, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

// Use any to bypass motion component type errors in this environment
const MotionDiv = motion.div as any;

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/20 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-pink-500/20 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <MotionDiv
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-block px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium backdrop-blur-sm">
            Full Stack Developer
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-100 leading-tight">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-purple-500 to-pink-500">
              Isbah Mehmood
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
            I craft responsive websites and robust web applications. With a passion for clean code and user-centric design, I bring ideas to life on the web.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#about"
              className="px-8 py-3 bg-accent hover:bg-accentHover text-white rounded-full font-semibold transition-all shadow-lg shadow-accent/25 flex items-center gap-2 group"
            >
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-slate-600 hover:border-accent text-slate-300 hover:text-accent rounded-full font-semibold transition-all hover:bg-slate-800/50"
            >
              Contact Me
            </a>
          </div>

          <div className="flex gap-6 pt-8 items-center">
            <SocialLink href="https://github.com/isbah69" icon={<Github size={24} />} label="GitHub" />
            <SocialLink href="https://www.linkedin.com/in/isbah-mehmood-5991b7330/" icon={<Linkedin size={24} />} label="LinkedIn" />
            <SocialLink href="mailto:i696982172@gmail.com" icon={<Mail size={24} />} label="Email" />
            <SocialLink href="tel:03297376890" icon={<Phone size={24} />} label="Call" />
          </div>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto group">
            {/* Soft glow effect around the image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent to-purple-600 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity animate-pulse"></div>
            
            {/* The profile image container - strictly using the shared identity image */}
            <div className="relative w-full h-full rounded-full border-4 border-slate-800 overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
              <img
                src="profile.jpg"
                alt="Isbah Mehmood"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
};

const SocialLink: React.FC<{ href: string; icon: React.ReactNode; label: string }> = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-slate-400 hover:text-accent hover:scale-110 transition-all duration-300"
    aria-label={label}
    title={label}
  >
    {icon}
  </a>
);

export default Hero;
