import { FiMail, FiGithub, FiMapPin, FiAward, FiCalendar, FiBookOpen, FiCheckCircle } from 'react-icons/fi';

export default function About() {
  const details = [
    { icon: FiMail, label: 'Email', value: 'rprachi518@gmail.com', link: 'mailto:rprachi518@gmail.com' },
    { icon: FiGithub, label: 'GitHub', value: 'github.com/Prachi088', link: 'https://github.com/Prachi088' },
    { icon: FiBookOpen, label: 'LeetCode', value: 'Prachi_Rajput', link: 'https://leetcode.com/Prachi_Rajput' },
    { icon: FiAward, label: 'College', value: 'SATI, Vidisha' },
    { icon: FiCalendar, label: 'Batch', value: '2023 – 2027' },
    { icon: FiCheckCircle, label: 'Status', value: 'Open to Internships', badge: true },
    { icon: FiMapPin, label: 'Location', value: 'Madhya Pradesh, India' },
  ];

  return (
    <section id="about" className="bg-surface py-28 px-6 md:px-16">
      <div className="font-mono text-xs text-accent tracking-widest uppercase mb-3 flex items-center gap-2">
        <span className="w-6 h-px bg-accent" />
        About Me
      </div>
      <h2 className="font-serif text-5xl font-bold mb-14 text-text">
        Engineer by code,
        <br /> creator by heart
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-[1.7fr_1fr] gap-16 items-start">
        <div className="reveal space-y-6">
          <p className="text-lg text-muted leading-relaxed max-w-3xl">
            I'm Prachi Rajput, a <strong className="text-text-2 font-semibold">pre-final year Computer Science student</strong> at Samrat Ashok Technological Institute, Vidisha (graduating 2027). I build full-stack applications that are clean, scalable, and solve real-world problems.
          </p>
          <p className="text-lg text-muted leading-relaxed max-w-3xl">
            My core stack is <strong className="text-text-2 font-semibold">Java + Spring Boot on the backend</strong> and <strong className="font-semibold">React on the frontend</strong>, with PostgreSQL for data persistence and deployments on Render, Vercel, and AWS. I'm currently diving deeper into distributed systems and Spring AI integration.
          </p>
          <p className="text-lg text-muted leading-relaxed max-w-3xl">
            Beyond code, I serve as a <strong className="text-text-2 font-semibold">Content Writer at E-Cell SATI</strong> and enjoy graphic design — I believe great products are built at the intersection of solid engineering and thoughtful communication.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-[2rem] shadow-lg overflow-hidden reveal">
          <div className="p-8 space-y-4">
            <div className="text-sm uppercase tracking-[0.3em] text-slate-500 font-bold">Professional profile</div>
            <div className="rounded-3xl bg-slate-50 p-6 border border-slate-100 text-sm text-slate-600 space-y-4">
              <p>Focused on delivery-quality software, strong problem solving, and clean system design. Key strengths: backend architecture, product-led frontend design, and deployment automation.</p>
            </div>
          </div>

          <div className="divide-y divide-slate-100">
            {details.map((detail, idx) => {
              const Icon = detail.icon;
              return (
                <div
                  key={detail.label}
                  className={`flex items-center gap-4 px-6 py-5 ${idx !== details.length - 1 ? 'border-b border-slate-100' : ''}`}
                >
                  <div className="w-11 h-11 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-[0.24em] mb-1">{detail.label}</div>
                    {detail.link ? (
                      <a href={detail.link} target="_blank" rel="noopener noreferrer" className="text-slate-900 font-medium hover:text-blue-600 transition-colors">
                        {detail.value}
                      </a>
                    ) : detail.badge ? (
                      <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 text-emerald-700 px-3 py-1 text-sm font-semibold">
                        <FiCheckCircle className="w-4 h-4" /> {detail.value}
                      </span>
                    ) : (
                      <span className="text-slate-900 font-medium">{detail.value}</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
