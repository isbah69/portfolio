import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-primary relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss new opportunities? Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-slate-100">Contact Information</h3>
            <div className="space-y-6">
              <ContactItem 
                icon={<Mail size={24} />} 
                title="Email" 
                value="i696982172@gmail.com" 
                href="mailto:i696982172@gmail.com"
              />
              <ContactItem 
                icon={<Phone size={24} />} 
                title="Phone" 
                value="03297376890" 
                href="tel:03297376890"
              />
              <ContactItem 
                icon={<Linkedin size={24} />} 
                title="LinkedIn" 
                value="Isbah Mehmood" 
                href="https://www.linkedin.com/in/isbah-mehmood-5991b7330/"
              />
              <ContactItem 
                icon={<Github size={24} />} 
                title="GitHub" 
                value="isbah69" 
                href="https://github.com/isbah69"
              />
              <ContactItem 
                 icon={<MapPin size={24} />}
                 title="Location"
                 value="Available for Remote Work"
                 href="#"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-secondary p-8 rounded-2xl border border-slate-700 shadow-xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                  <input type="text" className="w-full bg-primary border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-accent transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                  <input type="email" className="w-full bg-primary border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-accent transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Subject</label>
                <input type="text" className="w-full bg-primary border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-accent transition-colors" placeholder="Project Inquiry" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                <textarea rows={4} className="w-full bg-primary border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-accent transition-colors resize-none" placeholder="Tell me about your project..."></textarea>
              </div>
              <button className="w-full bg-accent hover:bg-accentHover text-white font-bold py-3 rounded-lg transition-all flex items-center justify-center gap-2 group">
                Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ContactItem: React.FC<{ icon: React.ReactNode; title: string; value: string; href: string }> = ({ icon, title, value, href }) => (
  <a href={href} target={href.startsWith('http') ? "_blank" : "_self"} rel="noopener noreferrer" className="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary transition-colors group border border-transparent hover:border-slate-700">
    <div className="p-3 bg-primary rounded-lg text-accent group-hover:scale-110 transition-transform border border-slate-700 group-hover:border-accent/50">
      {icon}
    </div>
    <div>
      <h4 className="font-medium text-slate-300 group-hover:text-accent transition-colors">{title}</h4>
      <p className="text-slate-400 text-sm break-all">{value}</p>
    </div>
  </a>
);

export default Contact;