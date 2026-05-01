import { FiExternalLink, FiGithub, FiTarget, FiZap, FiAward } from 'react-icons/fi';
import { BiBarChart } from 'react-icons/bi';
import { FaRocket } from 'react-icons/fa';

export default function Projects() {
  const projects = [
    {
      num: '01',
      title: 'CRM Lite',
      subtitle: 'Enterprise Lead Management System',
      problem: 'Sales teams lose leads without centralized tracking. Need real-time pipeline visibility + AI insights.',
      solution: 'Built full-stack CRM with lead CRUD, per-lead notes, Groq AI integration, JWT security & CSV exports.',
      impact: 'Production-ready. Backend on Render with health checks. Frontend on Vercel. Demonstrates full DevOps maturity.',
      tags: ['Spring Boot', 'React', 'PostgreSQL', 'Groq AI', 'Docker', 'JWT'],
      gradient: 'from-blue-500 to-indigo-600',
      icon: 'chart',
      liveLink: 'https://crm-frontend-drab-eight.vercel.app/',
      githubLink: 'https://github.com/Prachi088',
    },
    {
      num: '02',
      title: 'Job Portal',
      subtitle: 'Full-Stack Recruitment Platform',
      problem: 'Job seekers & recruiters need unified platform. Manual hiring workflows are scattered & slow.',
      solution: 'Role-based system: recruiters post/manage jobs; seekers search & track applications. Clean layered architecture.',
      impact: 'End-to-end platform showing real-world product design & secure API patterns used in production.',
      tags: ['Spring Boot', 'React', 'PostgreSQL', 'Spring Security', 'Hibernate', 'Vercel'],
      gradient: 'from-purple-500 to-pink-600',
      icon: 'rocket',
      liveLink: 'https://job-portal-frontend-three-mauve.vercel.app/',
      githubLink: 'https://github.com/Prachi088',
    },
  ];

  const renderIcon = (iconName) => {
    const iconProps = { size: 40, className: 'text-blue-600' };
    switch(iconName) {
      case 'chart':
        return <BiBarChart {...iconProps} className='text-blue-600' />;
      case 'rocket':
        return <FaRocket {...iconProps} className='text-purple-600' />;
      default:
        return <BiBarChart {...iconProps} />;
    }
  };

  return (
    <section id="projects" className="py-32 px-8 md:px-16 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-4 inline-block px-4 py-2 bg-blue-500/20 rounded-full border border-blue-500/40">
          <span className="text-xs font-bold text-blue-300 tracking-widest uppercase">Featured Projects</span>
        </div>
        <h2 className="text-5xl md:text-6xl font-black mb-4 tracking-tight">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Work I'm Proud Of
          </span>
        </h2>
        <p className="text-xl text-slate-300 mb-16 max-w-2xl">
          Full-stack applications solving real problems with production-grade code and architecture
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative reveal"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl`} />

              <div className="relative bg-slate-700/50 backdrop-blur border border-slate-600/50 rounded-3xl p-8 md:p-10 hover:border-slate-500 transition-all duration-500 hover:shadow-2xl h-full flex flex-col hover:bg-slate-700/70">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="text-5xl mb-3">{renderIcon(project.icon)}</div>
                    <div className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-2">Project {project.num}</div>
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-1">{project.title}</h3>
                    <p className="text-sm text-slate-300 font-medium">{project.subtitle}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4 flex-1 mb-6">
                  <div className="bg-blue-500/10 rounded-xl p-4 border border-blue-500/30">
                    <div className="flex items-center gap-2 text-xs font-bold text-blue-300 uppercase tracking-wider mb-1">
                      <FiTarget size={14} /> Problem
                    </div>
                    <p className="text-sm text-slate-200 leading-relaxed">{project.problem}</p>
                  </div>

                  <div className="bg-purple-500/10 rounded-xl p-4 border border-purple-500/30">
                    <div className="flex items-center gap-2 text-xs font-bold text-purple-300 uppercase tracking-wider mb-1">
                      <FiZap size={14} /> Solution
                    </div>
                    <p className="text-sm text-slate-200 leading-relaxed">{project.solution}</p>
                  </div>

                  <div className="bg-green-500/10 rounded-xl p-4 border border-green-500/30">
                    <div className="flex items-center gap-2 text-xs font-bold text-green-300 uppercase tracking-wider mb-1">
                      <FiAward size={14} /> Impact
                    </div>
                    <p className="text-sm text-slate-200 leading-relaxed">{project.impact}</p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6 pb-6 border-t border-slate-600/50">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-slate-600/40 text-slate-200 rounded-full text-xs font-semibold border border-slate-500/30">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 rounded-xl transition-all hover:shadow-lg hover:shadow-blue-500/50"
                  >
                    <FiExternalLink size={18} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 border-2 border-slate-500 hover:border-blue-500 text-slate-300 hover:text-blue-300 font-semibold py-3 rounded-xl transition-all hover:bg-blue-500/10"
                  >
                    <FiGithub size={18} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
