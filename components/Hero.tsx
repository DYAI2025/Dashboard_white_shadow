import React from 'react';
import { Button } from './ui/Button';
import { Section } from './ui/Section';

export const Hero: React.FC = () => {
  return (
    <Section className="min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-dyai-base perspective-1000">
      {/* Background Technical Grid - Etched Look */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px] opacity-30 mask-image-gradient"></div>
        {/* Decorative Lines - Etched/Engraved Channels */}
        <div className="absolute top-1/4 left-0 w-full h-[1px] bg-dyai-line opacity-50 shadow-[0_1px_0_rgba(255,255,255,1)]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[1px] h-full bg-dyai-line opacity-50 shadow-[1px_0_0_rgba(255,255,255,1)]"></div>
        
        {/* Subtle Glow Orbs */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-dyai-accent/5 rounded-full blur-3xl mix-blend-multiply"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        {/* Badge - Titanium Block Look */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-br from-white to-slate-100 shadow-titan mb-12 animate-fade-in-up border border-white/50 hover:scale-105 transition-transform duration-300 group">
          <div className="w-1.5 h-1.5 rounded-full bg-dyai-accent shadow-[0_0_8px_rgba(6,182,212,0.8),inset_0_1px_2px_rgba(0,0,0,0.2)] animate-pulse"></div>
          <span className="text-[10px] font-mono tracking-widest uppercase text-slate-500 font-semibold drop-shadow-[0_1px_0_rgba(255,255,255,1)] group-hover:text-dyai-accent transition-colors">System Online v2.4</span>
        </div>

        {/* Headline - DESERT SHADOW EFFECT - Wide & Projected */}
        <div className="flex flex-col items-center justify-center gap-2 mb-10 cursor-default">
          <h1 className="sr-only">Design Your Augmented Intelligence</h1>
          
          <span 
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[0.2em] uppercase text-desert-shadow leading-tight"
            data-text="Design Your"
          >
            Design Your
          </span>
          
          <span 
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[0.2em] uppercase text-desert-shadow leading-tight mt-2"
            data-text="Augmented Intelligence"
          >
            Augmented Intelligence
          </span>
        </div>

        {/* Subline - Carbon Polymer Text */}
        <p className="text-sm md:text-lg max-w-2xl mx-auto mb-16 font-medium leading-relaxed border-t border-dyai-line/40 pt-10 text-carbon-polymer tracking-wide">
          ARCHITEKTUR FÜR DIE NÄCHSTE GENERATION MENSCHLICHER KOGNITION.
          <br className="hidden md:block" />
          <span className="text-slate-600 font-bold">PRÄZISE SYSTEME</span> &bull; AGENTISCHE NETZWERKE &bull; NAHTLOSE INTEGRATION
        </p>

        {/* CTA Group - High Depth Titan Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button 
            variant="primary" 
            icon 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} 
            className="!shadow-titan hover:!shadow-plastic-hover hover:-translate-y-0.5 active:translate-y-0.5 transition-all bg-gradient-to-br from-white to-slate-50 border-0 text-xs py-4 px-10 font-bold tracking-[0.1em] uppercase"
          >
            Projekte ansehen
          </Button>
          <Button 
            variant="secondary" 
            onClick={() => document.getElementById('philosophy')?.scrollIntoView({ behavior: 'smooth' })} 
            className="!shadow-titan hover:!shadow-plastic-hover bg-dyai-base/50 backdrop-blur border-0 hover:bg-white text-slate-600 text-xs py-4 px-10 font-bold tracking-[0.1em] uppercase"
          >
            Philosophie
          </Button>
        </div>
      </div>
      
      {/* Decorative HUD Elements - Carbon Polymer Look */}
      <div className="absolute bottom-10 left-6 md:left-12 font-mono text-[9px] tracking-widest text-carbon-polymer hidden md:block border-l border-dyai-line pl-2 opacity-60">
        COORD: 52.5200° N, 13.4050° E<br/>
        STATUS: NOMINAL
      </div>
      <div className="absolute bottom-10 right-6 md:right-12 font-mono text-[9px] tracking-widest text-carbon-polymer hidden md:block text-right border-r border-dyai-line pr-2 opacity-60">
        RENDER: HIGH_FIDELITY<br/>
        MODE: PRESENTATION
      </div>
    </Section>
  );
};