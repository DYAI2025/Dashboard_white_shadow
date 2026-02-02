import React from 'react';
import { Section } from './ui/Section';
import { PHILOSOPHY_TEXT } from '../constants';
import { Cpu, Layers, Radio } from 'lucide-react';

const principles = [
  {
    icon: <Cpu className="w-5 h-5" />,
    title: 'Präzision',
    desc: 'Code als Handwerk. Jedes Modul erfüllt einen klaren Zweck ohne überflüssigen Ballast.'
  },
  {
    icon: <Layers className="w-5 h-5" />,
    title: 'Symbiose',
    desc: 'Technologie, die den Menschen erweitert, statt ihn zu ersetzen. Nahtlose Schnittstellen.'
  },
  {
    icon: <Radio className="w-5 h-5" />,
    title: 'Autonomie',
    desc: 'Systeme, die verstehen, lernen und agieren. Agentische Intelligenz für reale Probleme.'
  }
];

export const Philosophy: React.FC = () => {
  return (
    <Section id="philosophy" className="bg-dyai-base">
      <div className="grid md:grid-cols-12 gap-12 items-start">
        {/* Section Label */}
        <div className="md:col-span-3 sticky top-32">
          <h2 className="text-xs font-mono tracking-widest text-dyai-muted uppercase mb-4 flex items-center gap-2">
            <span className="w-6 h-[1px] bg-dyai-accent"></span>
            01. Philosophie
          </h2>
        </div>

        {/* Content */}
        <div className="md:col-span-9 space-y-16">
          <div className="prose prose-lg prose-slate max-w-none">
            <p className="text-lg md:text-2xl font-light text-dyai-text leading-relaxed tracking-wide">
              {PHILOSOPHY_TEXT}
            </p>
          </div>

          {/* Principle Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {principles.map((p, idx) => (
              <div 
                key={idx}
                className="group relative bg-dyai-surface rounded-xl p-6 border border-dyai-line shadow-plastic hover:shadow-plastic-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-4 text-dyai-muted group-hover:text-dyai-accent transition-colors">
                  {p.icon}
                </div>
                <h3 className="text-base font-semibold text-dyai-text mb-2 tracking-tight">{p.title}</h3>
                <p className="text-sm text-dyai-muted leading-relaxed">
                  {p.desc}
                </p>
                {/* Decorative corner accent */}
                <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-dyai-line group-hover:bg-dyai-accent transition-colors"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};