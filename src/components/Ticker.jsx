export default function Ticker() {
  const items = [
    'Java',
    'Spring Boot',
    'React',
    'PostgreSQL',
    'AWS S3',
    'Full-Stack Development',
    'REST APIs',
    'DSA',
    'Spring AI',
    'Tailwind CSS',
  ];

  return (
    <div className="overflow-hidden bg-accent py-3">
      <div className="ticker-track flex whitespace-nowrap w-max">
        {[...items, ...items].map((item, idx) => (
          <span key={idx} className="font-mono text-xs text-white/85 tracking-widest uppercase px-7">
            {item} ·
          </span>
        ))}
      </div>
    </div>
  );
}
