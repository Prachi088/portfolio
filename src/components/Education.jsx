export default function Education() {
  return (
    <section id="education" className="bg-surface py-28 px-16">
      <div className="font-mono text-xs text-accent tracking-widest uppercase mb-3 flex items-center gap-2">
        <span className="w-6 h-px bg-accent" />
        Education
      </div>
      <h2 className="font-serif text-5xl font-bold mb-14 text-text">Academic background</h2>

      <div className="bg-card border border-border rounded-2xl p-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-3xl reveal">
        <div className="md:col-span-2">
          <div className="font-serif text-2xl font-bold text-text mb-2">B.Tech Computer Science & Engineering</div>
          <div className="text-base text-accent font-semibold mb-2">Samrat Ashok Technological Institute (SATI), Vidisha</div>
          <div className="font-mono text-xs text-muted tracking-widest uppercase">
            2023 – 2027 · Madhya Pradesh, India · Full-time
          </div>
        </div>
        <div className="text-center">
          <span className="font-serif text-5xl font-black text-accent block leading-none">8.5</span>
          <span className="font-mono text-xs text-muted tracking-widest uppercase mt-2 block">CGPA / 10</span>
        </div>
      </div>
    </section>
  );
}
