import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
  icon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  icon,
  className = '',
  ...props 
}) => {
  const baseStyles = "group relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-dyai-accent/50";
  
  const variants = {
    primary: "bg-dyai-surface text-dyai-text border border-dyai-line shadow-plastic hover:shadow-plastic-hover hover:border-dyai-accent/30 hover:text-dyai-accent",
    secondary: "bg-transparent text-dyai-muted border border-transparent hover:bg-dyai-surface hover:shadow-plastic hover:text-dyai-text border hover:border-dyai-line",
    ghost: "text-dyai-muted hover:text-dyai-accent uppercase tracking-wider text-xs",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {icon && (
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      )}
    </button>
  );
};
