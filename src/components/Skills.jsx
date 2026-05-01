import { SiReact, SiPostgresql, SiSpringboot, SiPython } from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { BiBrain } from 'react-icons/bi';

export default function Skills() {
  const skillsData = [
    {
      icon: SiSpringboot,
      name: 'Backend',
      items: 'Java · Spring Boot · Spring Security · Spring AI · REST APIs · Hibernate · Kafka · Maven',
      color: 'text-green-500',
    },
    {
      icon: SiReact,
      name: 'Frontend',
      items: 'React · Vite · Tailwind CSS · HTML · CSS · JavaScript · Recharts · lucide-react',
      color: 'text-cyan-400',
    },
    {
      icon: SiPostgresql,
      name: 'Database',
      items: 'PostgreSQL · MySQL · JPA / Hibernate ORM · SQL (HackerRank certified)',
      color: 'text-blue-500',
    },
    {
      icon: FaAws,
      name: 'Cloud & DevOps',
      items: 'AWS S3 · Render · Vercel · Docker · Git · GitHub · Linux basics',
      color: 'text-sky-400',
    },
    {
      icon: BiBrain,
      name: 'DSA & Problem Solving',
      items: 'LeetCode 100+ problems · Graphs · DP · Trees · Arrays · Java (HackerRank certified)',
      color: 'text-purple-500',
    },
    {
      icon: SiPython,
      name: 'Additional',
      items: 'Python · Spring AI (Groq, NVIDIA NIM) · Content Writing · Graphic Design · Agile basics · LaTeX',
      color: 'text-green-500',
    },
  ];

  return (
    <section id="skills" className="py-28 px-16">
      <div className="font-mono text-xs text-accent tracking-widest uppercase mb-3 flex items-center gap-2">
        <span className="w-6 h-px bg-accent" />
        Technical Skills
      </div>
      <h2 className="font-serif text-5xl font-bold mb-14 text-text">What I work with</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillsData.map((skill, idx) => {
          const IconComponent = skill.icon;
          return (
          <div
            key={idx}
            className="reveal bg-card border border-border rounded-xl p-7 transition-all hover:border-accent hover:-translate-y-1 hover:shadow-lg group"
          >
            <IconComponent className={`text-4xl mb-3 ${skill.color} group-hover:scale-110 transition-transform`} />
            <div className="font-serif text-lg font-semibold mb-2 text-text">{skill.name}</div>
            <div className="font-mono text-xs text-muted leading-relaxed space-y-1">
              {skill.items.split(' · ').map((item, i) => (
                <div key={i}>{item}</div>
              ))}
            </div>
          </div>
          );
        })}
      </div>
    </section>
  );
}
