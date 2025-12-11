import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-primary border-t border-slate-800 text-center">
      <p className="text-slate-500 flex items-center justify-center gap-1">
        Made with <Heart size={16} className="text-red-500 fill-red-500" /> by Isbah Mehmood © {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;