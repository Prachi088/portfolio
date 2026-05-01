export default function Experience() {
  const experiences = [
    {
      meta: '2024 – Present · Part-time',
      role: 'Content Writer',
      company: 'E-Cell SATI, Vidisha',
      desc: 'Creating content for the Entrepreneurship Cell at SATI — writing articles, social media posts, event communication, and promotional materials that connect student entrepreneurs with the wider startup ecosystem.',
      tags: ['Content Strategy', 'Writing', 'Design'],
    },
    {
      meta: '2024 · Virtual Internship',
      role: 'Software Engineering Virtual Experience',
      company: 'J.P. Morgan Chase & Co. (Forage)',
      desc: "Completed J.P. Morgan's software engineering virtual internship on Forage, focusing on interface flow, data feed architecture, and financial data visualization.",
      tags: ['Web App', 'Data Visualization'],
    },
    {
      meta: '2023 · Internship',
      role: 'Software Developer Intern',
      company: 'Ambao Krishi Kutumb LLP',
      desc: 'Built and maintained web-based solutions for an agri-tech company, enhancing frontend and backend workflows, automated data capture, and business reporting features.',
      tags: ['JavaScript', 'Python', 'PostgreSQL'],
    },
  ];

  return (
    <section id="experience" className="py-28 px-6 md:px-16">
      <div className="font-mono text-xs text-accent tracking-widest uppercase mb-3 flex items-center gap-2">
        <span className="w-6 h-px bg-accent" />
        Experience
      </div>
      <h2 className="font-serif text-5xl font-bold mb-14 text-text">Where I've worked</h2>

      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <div key={idx} className="group relative rounded-[2rem] border border-slate-200 bg-white shadow-lg p-8 transition-all hover:-translate-y-1 hover:shadow-2xl">
            <div className="absolute left-6 top-8 h-10 w-10 rounded-2xl bg-blue-600/10 border border-blue-200" />
            <div className="ml-14 space-y-4">
              <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-slate-400 font-semibold">
                <span className="h-2 w-2 rounded-full bg-blue-600" />
                {exp.meta}
              </div>
              <div className="font-serif text-2xl font-black text-slate-900">{exp.role}</div>
              <div className="text-sm text-blue-700 font-semibold">{exp.company}</div>
              <p className="text-sm text-slate-600 leading-relaxed">{exp.desc}</p>
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span key={tag} className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 bg-slate-100 px-3 py-2 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
