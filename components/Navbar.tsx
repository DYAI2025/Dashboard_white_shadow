import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-dyai-base/80 backdrop-blur-md border-dyai-line py-3 shadow-sm' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo - Engraved Look */}
        <a href="#" className="relative group">
          <span className="text-xl font-bold tracking-[0.2em] text-engraved group-hover:text-dyai-accent transition-colors duration-500">
            DYAI
          </span>
          <div className="absolute -bottom-2 left-0 w-0 h-[1px] bg-dyai-accent transition-all duration-300 group-hover:w-full opacity-50"></div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-sm font-medium text-dyai-muted hover:text-dyai-text transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-dyai-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-dyai-text p-2 hover:bg-white rounded-md"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-dyai-base border-b border-dyai-line p-6 md:hidden shadow-lg animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="text-lg font-medium text-dyai-text py-2 border-b border-dyai-line/50"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
