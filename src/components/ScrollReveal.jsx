export default function ScrollReveal() {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e, idx) => {
        if (e.isIntersecting) {
          setTimeout(() => {
            e.target.classList.add('visible');
          }, idx * 80);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
  document.querySelectorAll('.exp-item').forEach((el) => io.observe(el));
}
