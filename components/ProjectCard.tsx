import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import { Github, ExternalLink, Loader2, Pencil, Check, X, ImageIcon } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onUpdate?: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onUpdate }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState<Project>(project);

  // Reset form when project prop updates
  useEffect(() => {
    setEditForm(project);
  }, [project]);

  const handleSave = () => {
    if (onUpdate) {
      onUpdate(editForm);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditForm(project);
    setIsEditing(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEditForm(prev => ({ ...prev, [name]: value }));
  };

  const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tags = e.target.value.split(',').map(tag => tag.trim()).filter(tag => tag !== '');
    setEditForm(prev => ({ ...prev, tags }));
  };

  return (
    <div className={`group relative bg-dyai-surface rounded-2xl border transition-all duration-300 flex flex-col h-full ${
      isEditing 
        ? 'border-dyai-accent ring-1 ring-dyai-accent/30 shadow-plastic scale-[1.01] z-10' 
        : 'border-dyai-line shadow-plastic hover:shadow-plastic-hover hover:border-dyai-accent/50 hover:scale-[1.02]'
    }`}>
      
      {/* Edit Toggle Button (Top Right) */}
      {!isEditing && onUpdate && (
        <button 
          onClick={() => setIsEditing(true)}
          className="absolute top-3 right-3 z-30 p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:text-dyai-accent shadow-lg"
          title="Edit Project"
        >
          <Pencil size={14} />
        </button>
      )}

      {/* Image Area with Overlay */}
      <div className="relative h-48 sm:h-56 overflow-hidden bg-slate-100 border-b border-dyai-line shrink-0">
        
        {isEditing ? (
           <div className="absolute inset-0 bg-slate-50 flex flex-col items-center justify-center p-6 gap-3">
              <div className="w-full max-w-xs">
                <label className="text-[10px] font-mono text-dyai-muted uppercase tracking-wider mb-1 block">Image URL</label>
                <div className="flex gap-2">
                  <div className="relative flex-grow">
                     <input 
                      type="text" 
                      name="imageUrl"
                      value={editForm.imageUrl}
                      onChange={handleChange}
                      className="w-full bg-white border border-dyai-line rounded px-2 py-1 text-xs font-mono text-dyai-text focus:outline-none focus:border-dyai-accent"
                    />
                  </div>
                  <div className="w-8 h-8 rounded border border-dyai-line overflow-hidden flex-shrink-0">
                    <img src={editForm.imageUrl} alt="Preview" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
           </div>
        ) : (
          <>
            {/* Skeleton / Loading State Overlay */}
            {isLoading && (
              <div className="absolute inset-0 z-10 bg-slate-50 flex items-center justify-center animate-pulse">
                <div className="absolute inset-0 bg-grid-pattern bg-[length:16px_16px] opacity-[0.05]"></div>
                <div className="relative z-20 flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/60 backdrop-blur-sm border border-slate-200 shadow-sm">
                   <Loader2 className="w-3.5 h-3.5 text-dyai-accent animate-spin" />
                   <span className="text-[10px] font-mono text-slate-400 tracking-widest">LOADING_ASSET</span>
                </div>
              </div>
            )}

            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className={`w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 ${isLoading ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
              onLoad={() => setIsLoading(false)}
            />
            
            <div className={`absolute inset-0 bg-gradient-to-t from-dyai-surface/90 to-transparent opacity-60 transition-opacity duration-500 pointer-events-none ${isLoading ? 'opacity-0' : 'opacity-60'}`}></div>
          </>
        )}
        
        {/* Floating Status Badge */}
        {!isEditing && (
          <div className="absolute top-4 left-4 z-20 transition-opacity duration-300 group-hover:opacity-0 pointer-events-none">
             <span className={`
              inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-medium border backdrop-blur-md shadow-sm
              ${project.status === 'Released' 
                ? 'bg-emerald-50/90 text-emerald-700 border-emerald-200' 
                : project.status === 'In Development'
                  ? 'bg-amber-50/90 text-amber-700 border-amber-200'
                  : 'bg-slate-50/90 text-slate-600 border-slate-200'}
             `}>
               <span className={`w-1.5 h-1.5 rounded-full ${
                 project.status === 'Released' ? 'bg-emerald-500' : 
                 project.status === 'In Development' ? 'bg-amber-500' : 'bg-slate-400'
               }`}></span>
               {project.status.toUpperCase()}
             </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        
        {isEditing ? (
          /* EDIT MODE FORM */
          <div className="space-y-4 animate-in fade-in duration-200">
            <div className="flex justify-between items-start gap-4">
              <div className="flex-grow space-y-3">
                 <div>
                    <label className="text-[10px] font-mono text-dyai-muted/60 uppercase tracking-wider block mb-1">Title</label>
                    <input 
                      type="text" 
                      name="title" 
                      value={editForm.title} 
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-dyai-line focus:border-dyai-accent focus:outline-none font-bold text-lg text-dyai-text pb-1"
                    />
                 </div>
                 <div>
                    <label className="text-[10px] font-mono text-dyai-muted/60 uppercase tracking-wider block mb-1">Status</label>
                    <select 
                      name="status" 
                      value={editForm.status} 
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-dyai-line focus:border-dyai-accent focus:outline-none text-xs font-mono text-dyai-text pb-1"
                    >
                      <option value="Released">Released</option>
                      <option value="In Development">In Development</option>
                      <option value="Concept">Concept</option>
                    </select>
                 </div>
              </div>
            </div>

            <div>
              <label className="text-[10px] font-mono text-dyai-muted/60 uppercase tracking-wider block mb-1">Description</label>
              <textarea 
                name="description" 
                value={editForm.description} 
                onChange={handleChange}
                rows={3}
                className="w-full bg-slate-50/50 rounded p-2 border border-dyai-line focus:border-dyai-accent focus:outline-none text-sm text-dyai-muted resize-none"
              />
            </div>

             <div className="grid grid-cols-2 gap-4">
               <div>
                  <label className="text-[10px] font-mono text-dyai-muted/60 uppercase tracking-wider block mb-1">Repo URL</label>
                  <input 
                    type="text" 
                    name="repoUrl" 
                    value={editForm.repoUrl || ''} 
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-dyai-line focus:border-dyai-accent focus:outline-none text-xs font-mono text-dyai-muted pb-1"
                  />
               </div>
               <div>
                  <label className="text-[10px] font-mono text-dyai-muted/60 uppercase tracking-wider block mb-1">Details URL</label>
                  <input 
                    type="text" 
                    name="detailUrl" 
                    value={editForm.detailUrl || ''} 
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-dyai-line focus:border-dyai-accent focus:outline-none text-xs font-mono text-dyai-muted pb-1"
                  />
               </div>
            </div>

            <div>
               <label className="text-[10px] font-mono text-dyai-muted/60 uppercase tracking-wider block mb-1">Tags (comma separated)</label>
               <input 
                type="text" 
                value={editForm.tags.join(', ')} 
                onChange={handleTagsChange}
                className="w-full bg-transparent border-b border-dyai-line focus:border-dyai-accent focus:outline-none text-xs font-mono text-dyai-muted pb-1"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 pt-2 border-t border-dyai-line/50">
               <button 
                 onClick={handleSave}
                 className="flex-1 flex items-center justify-center gap-2 bg-dyai-accent text-white py-2 rounded text-xs font-bold uppercase tracking-wider hover:bg-cyan-600 transition-colors"
               >
                 <Check size={14} /> Save
               </button>
               <button 
                 onClick={handleCancel}
                 className="flex-1 flex items-center justify-center gap-2 bg-slate-100 text-slate-500 py-2 rounded text-xs font-bold uppercase tracking-wider hover:bg-slate-200 transition-colors"
               >
                 <X size={14} /> Cancel
               </button>
            </div>
          </div>
        ) : (
          /* VIEW MODE CONTENT */
          <>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-dyai-text group-hover:text-dyai-accent transition-colors duration-300 tracking-tight">
                {project.title}
              </h3>
              <div className="flex items-center gap-2">
                {project.repoUrl && (
                  <a 
                    href={project.repoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-1.5 text-dyai-muted hover:text-dyai-text hover:bg-slate-100 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-dyai-accent/50"
                    title="View Repository"
                  >
                    <Github size={16} />
                  </a>
                )}
                {project.detailUrl && (
                  <a 
                    href={project.detailUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium bg-dyai-surface text-dyai-text border border-dyai-line shadow-plastic hover:shadow-plastic-hover hover:border-dyai-accent/30 hover:text-dyai-accent rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-dyai-accent/50"
                    title="View Live Site"
                  >
                    <span>View Details</span>
                    <ExternalLink size={10} />
                  </a>
                )}
              </div>
            </div>

            <p className="text-sm text-dyai-muted mb-6 leading-relaxed flex-grow">
              {project.description}
            </p>

            {/* Technical Footer */}
            <div className="pt-4 border-t border-dyai-line/50 flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span key={`${tag}-${idx}`} className="text-[10px] font-mono text-dyai-muted/80 bg-slate-50 border border-dyai-line px-2 py-0.5 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};