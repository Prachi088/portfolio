import { SiGithub, SiLeetcode } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Contact() {
  const links = [
    { icon: MdEmail, label: 'Email', val: 'prachirajput44269@gmail.com', href: 'mailto:prachirajput44269@gmail.com', color: 'text-red-500' },
    { icon: SiGithub, label: 'GitHub', val: 'github.com/Prachi088/portfolio', href: 'https://github.com/Prachi088/portfolio', color: 'text-gray-300' },
    { icon: FaLinkedin, label: 'LinkedIn', val: 'linkedin.com/in/prachi-rajput', href: 'https://www.linkedin.com/in/prachi-rajput', color: 'text-blue-500' },
    { icon: SiLeetcode, label: 'LeetCode', val: 'Prachi_Rajput · 100+ solved', href: 'https://leetcode.com/Prachi_Rajput', color: 'text-yellow-600' },
  ];

  return (
    <section id="contact" className="py-28 px-16">
      <div className="font-mono text-xs text-accent tracking-widest uppercase mb-3 flex items-center gap-2">
        <span className="w-6 h-px bg-accent" />
        Contact
      </div>
      <h2 className="font-serif text-5xl font-bold mb-14 text-text">Let's build something</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        <div>
          <p className="text-lg text-muted leading-relaxed mb-10">
            Seeking software engineering internships and early-career roles at product-focused teams. I enjoy building systems that scale and deliver strong user value.
          </p>
          <div className="flex flex-col divide-y divide-border">
            {links.map((link, idx) => {
              const IconComponent = link.icon;
              return (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 py-4 text-text-2 hover:text-accent transition-colors group"
              >
                <div className="w-9 h-9 rounded bg-accent/10 flex items-center justify-center text-lg group-hover:bg-accent/20 transition-colors">
                  <IconComponent className={link.color} />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-muted font-medium">{link.label}</div>
                  <div className="font-mono text-xs font-medium">{link.val}</div>
                </div>
                <span className="text-muted group-hover:text-accent transition-colors">→</span>
              </a>
            );
            })}
          </div>
        </div>

        <div className="bg-card border border-border rounded-2xl p-10 reveal">
          <div className="inline-flex items-center gap-2 bg-green-600/15 border border-green-600/30 text-green-700 px-4 py-2 rounded-full font-mono text-xs tracking-widest uppercase mb-6">
            <div className="w-2 h-2 rounded-full bg-green-600 pulse-dot" />
            Open to work
          </div>
          <h3 className="font-serif text-2xl font-bold text-text mb-3 leading-snug">
            Ready for Product Engineering Roles
          </h3>
          <p className="text-sm text-muted leading-relaxed mb-8">
            Targeting full-stack and backend internship roles with a focus on scalable systems, clean APIs, and high-quality frontend experiences. Flexible for remote, hybrid, or on-site opportunities.
          </p>
          <a href="mailto:prachirajput44269@gmail.com" className="bg-accent text-white px-6 py-3 rounded font-semibold text-sm tracking-wider transition-all hover:bg-accent-light hover:-translate-y-0.5 hover:shadow-lg inline-block">
            Get in Touch →
          </a>
        </div>
      </div>
    </section>
  );
}
