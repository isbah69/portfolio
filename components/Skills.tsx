import React from 'react';
import { motion } from 'framer-motion';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';

const data = [
  { name: 'React', level: 90, color: '#06b6d4' },
  { name: 'Node.js', level: 85, color: '#8b5cf6' },
  { name: 'TypeScript', level: 80, color: '#3b82f6' },
  { name: 'Tailwind', level: 95, color: '#06b6d4' },
  { name: 'SQL', level: 75, color: '#ec4899' },
  { name: 'Git', level: 85, color: '#f97316' },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-primary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A visual representation of my technical proficiency across the full stack development spectrum.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Chart */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-[400px] w-full bg-secondary/50 p-6 rounded-2xl border border-slate-700"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis type="number" hide domain={[0, 100]} />
                <YAxis dataKey="name" type="category" width={100} tick={{ fill: '#cbd5e1', fontSize: 14 }} axisLine={false} tickLine={false} />
                <Tooltip 
                  cursor={{ fill: 'rgba(255, 255, 255, 0.05)' }}
                  contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', borderRadius: '8px', color: '#f1f5f9' }}
                />
                <Bar dataKey="level" radius={[0, 4, 4, 0]} barSize={20} background={{ fill: '#334155', radius: [0, 4, 4, 0] }}>
                   {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Text List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SkillCategory 
              title="Frontend" 
              skills={['React', 'Next.js', 'Tailwind CSS', 'Redux', 'HTML5/CSS3']} 
            />
            <SkillCategory 
              title="Backend" 
              skills={['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB']} 
            />
            <SkillCategory 
              title="Tools & DevOps" 
              skills={['Git/GitHub', 'Docker', 'AWS', 'VS Code', 'Figma']} 
            />
            <SkillCategory 
              title="Soft Skills" 
              skills={['Problem Solving', 'Team Leadership', 'Communication', 'Agile/Scrum']} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillCategory: React.FC<{ title: string; skills: string[] }> = ({ title, skills }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-secondary p-6 rounded-xl border border-slate-700 hover:border-accent/30 transition-colors"
  >
    <h3 className="text-xl font-bold text-slate-100 mb-4 border-b border-slate-700 pb-2">{title}</h3>
    <ul className="space-y-2">
      {skills.map((skill, index) => (
        <li key={index} className="flex items-center gap-2 text-slate-400">
          <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
          {skill}
        </li>
      ))}
    </ul>
  </motion.div>
);

export default Skills;