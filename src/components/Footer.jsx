export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border py-9 px-16 flex flex-col md:flex-row justify-between items-center gap-4">
      <span className="font-mono text-xs text-muted">© 2025 Prachi Rajput. Designed for product engineering teams.</span>
      <ul className="flex gap-6 list-none">
        {[
          { label: 'GitHub', href: 'https://github.com/Prachi088/portfolio' },
          { label: 'LinkedIn', href: 'https://www.linkedin.com/in/prachi-rajput' },
          { label: 'LeetCode', href: 'https://leetcode.com/Prachi_Rajput' },
        ].map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-muted hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
