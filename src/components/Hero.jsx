import { FiArrowRight, FiGithub } from 'react-icons/fi';
import { FaGraduationCap, FaLaptopCode, FaRocket, FaCalendarAlt } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center px-8 md:px-16 pt-32 pb-20 relative gap-16 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Animated background elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -left-32 w-64 h-64 bg-indigo-100/20 rounded-full blur-3xl" />

      {/* Left */}
      <div className="relative z-10 opacity-0 fade-up">
        <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-full">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-xs font-semibold text-blue-900 tracking-wide">SUMMER 2026 INTERNSHIP-READY</span>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tight">
          <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent">
            Hi, I’m Prachi Rajput
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-lg mb-6 font-medium">
          Building reliable, scalable product experiences with strong backend architecture and polished frontend design.
        </p>
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-lg mb-8">
          <span className="inline-block px-3 py-1 bg-slate-100 text-slate-900 rounded-full font-semibold">Java</span>
          <span className="mx-2 text-slate-400">•</span>
          <span className="inline-block px-3 py-1 bg-slate-100 text-slate-900 rounded-full font-semibold">Spring Boot</span>
          <span className="mx-2 text-slate-400">•</span>
          <span className="inline-block px-3 py-1 bg-slate-100 text-slate-900 rounded-full font-semibold">React</span>
        </p>

        <p className="text-slate-600 leading-relaxed max-w-lg mb-10 text-base">
          Pre-final year CSE student at SATI Vidisha | Targeting product and platform teams | 100+ algorithms solved across arrays, graphs, and DP.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#projects" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-2xl hover:-translate-y-1 group">
            View My Work
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="https://github.com/Prachi088/portfolio" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border-2 border-slate-300 hover:border-blue-600 text-slate-700 hover:text-blue-600 px-8 py-4 rounded-xl font-semibold transition-all hover:bg-blue-50">
            <FiGithub size={20} />
            GitHub
          </a>
        </div>
      </div>

      {/* Right - Premium Card */}
      <div className="relative z-10 opacity-0 fade-left">
        <div className="bg-white shadow-xl rounded-[2rem] p-8 md:p-12 border border-slate-200 transition-all hover:-translate-y-1 hover:shadow-2xl">
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { num: '8.5', label: 'CGPA', icon: FaGraduationCap, color: 'text-indigo-600' },
                { num: '100+', label: 'LeetCode', icon: FaLaptopCode, color: 'text-cyan-600' },
                { num: '2+', label: 'Projects', icon: FaRocket, color: 'text-violet-600' },
                { num: '2027', label: 'Graduating', icon: FaCalendarAlt, color: 'text-emerald-600' },
              ].map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className="bg-slate-100 rounded-3xl p-5 border border-slate-200 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                    <div className={`inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-white shadow-sm mb-4 ${stat.color}`}>
                      <Icon className={`w-5 h-5 ${stat.color}`} />
                    </div>
                    <div className="text-3xl font-black text-slate-900">{stat.num}</div>
                    <div className="text-xs text-slate-500 font-medium tracking-wide mt-1">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Skills */}
            <div className="border-t border-slate-200 pt-6">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">Key Stack</div>
              <div className="flex flex-wrap gap-2">
                {['Java', 'Spring Boot', 'React', 'PostgreSQL', 'AWS', 'Docker'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-semibold border border-slate-200 shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Status */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4 flex items-center gap-3">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-600"></span>
              </div>
              <span className="text-sm font-semibold text-green-900">Open to product-focused internships and early-career engineering roles</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
