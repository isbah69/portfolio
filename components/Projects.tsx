import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured online store with cart functionality, payment gateway integration, and user authentication.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    imageUrl: "https://picsum.photos/600/400?random=1",
    github: "https://github.com/isbah69",
    link: "#"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity tool allowing users to organize tasks with drag-and-drop features and real-time collaboration.",
    tags: ["TypeScript", "React", "Firebase", "Tailwind"],
    imageUrl: "https://picsum.photos/600/400?random=2",
    github: "https://github.com/isbah69",
    link: "#"
  },
  {
    id: 3,
    title: "Social Dashboard",
    description: "Analytics dashboard aggregating data from multiple social media platforms with interactive charts.",
    tags: ["Vue.js", "D3.js", "Express", "PostgreSQL"],
    imageUrl: "https://picsum.photos/600/400?random=3",
    github: "https://github.com/isbah69",
    link: "#"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-secondary relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
             <Code className="text-accent" />
             <h2 className="text-3xl md:text-4xl font-bold text-slate-100">Featured Projects</h2>
          </div>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto">
             Here are some of the projects I've worked on. Each one was an opportunity to solve a unique problem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-primary rounded-xl overflow-hidden border border-slate-700 hover:border-accent/50 transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/10 flex flex-col h-full"
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-sm">
                  {project.github && (
                    <a href={project.github} className="p-3 bg-slate-800 rounded-full text-white hover:bg-accent transition-colors transform hover:scale-110" title="View Code" target="_blank" rel="noopener noreferrer">
                      <Github size={20} />
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} className="p-3 bg-slate-800 rounded-full text-white hover:bg-accent transition-colors transform hover:scale-110" title="Live Demo" target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium px-2 py-1 bg-secondary rounded-md text-accent border border-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
            <a href="https://github.com/isbah69" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors border-b border-accent/20 hover:border-accent pb-1">
                View more on GitHub <ExternalLink size={16} />
            </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;