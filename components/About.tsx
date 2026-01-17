
import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Database, Layout } from 'lucide-react';

// Use any to bypass motion component type errors in this environment
const MotionDiv = motion.div as any;

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <MotionDiv
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
          >
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Hello! I'm Isbah Mehmood, a passionate Full Stack Developer with a knack for building efficient and scalable web applications. 
              My journey in technology involves constantly exploring new tools and methodologies to solve complex problems.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              I specialize in creating seamless user experiences backed by powerful server-side logic. Whether it's designing a sleek frontend 
              or optimizing database queries, I enjoy every aspect of the development lifecycle.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
               <div className="p-4 bg-primary rounded-xl border border-slate-700">
                  <h3 className="text-accent text-3xl font-bold mb-1">3+</h3>
                  <p className="text-slate-400 text-sm">Years Experience</p>
               </div>
               <div className="p-4 bg-primary rounded-xl border border-slate-700">
                  <h3 className="text-accent text-3xl font-bold mb-1">20+</h3>
                  <p className="text-slate-400 text-sm">Projects Completed</p>
               </div>
            </div>
          </MotionDiv>

          <div className="grid gap-6">
            <Card 
              icon={<Layout className="text-accent" size={32} />}
              title="Frontend Development"
              desc="Building responsive, accessible, and performant user interfaces using modern libraries like React and Tailwind."
            />
            <Card 
              icon={<Terminal className="text-purple-500" size={32} />}
              title="Backend Development"
              desc="Creating robust APIs and server-side logic with Node.js, ensuring security and scalability."
            />
            <Card 
              icon={<Database className="text-pink-500" size={32} />}
              title="Database Management"
              desc="Designing efficient database schemas and optimizing queries for data-driven applications."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Card: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <MotionDiv 
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="p-6 bg-primary rounded-xl border border-slate-700 hover:border-accent/50 transition-colors shadow-sm"
  >
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-slate-100 mb-2">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
  </MotionDiv>
);

export default About;
