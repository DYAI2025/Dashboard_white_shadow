import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-dyai-base border-t border-dyai-line py-12 md:py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-dyai-accent/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <span className="text-xl font-bold tracking-[0.2em] text-engraved block mb-2">DYAI</span>
          <p className="text-xs text-dyai-muted font-mono">
            &copy; {new Date().getFullYear()} Design Your Augmented Intelligence
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a href="#" className="text-sm text-dyai-muted hover:text-dyai-text transition-colors">Twitter / X</a>
          <a href="https://github.com/DYAI2025" className="text-sm text-dyai-muted hover:text-dyai-text transition-colors">GitHub</a>
          <a href="mailto:contact@dyai.com" className="text-sm text-dyai-accent hover:text-dyai-accent/80 transition-colors font-medium">Get in Touch</a>
        </div>
      </div>
      
      <div className="absolute bottom-4 left-0 w-full text-center">
         <span className="text-[10px] text-dyai-muted/20 font-mono">SYS.READY // END_OF_LINE</span>
      </div>
    </footer>
  );
};
