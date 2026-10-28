const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  menuToggle.textContent = isOpen ? '×' : '☰';
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.textContent = '☰';
}));

const filters = document.querySelectorAll('.filter');
const projects = document.querySelectorAll('.project-card');
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(item => item.classList.toggle('active', item === button));
  const filter = button.dataset.filter;
  projects.forEach(project => {
    project.hidden = filter !== 'all' && project.dataset.category !== filter;
  });
}));

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contactForm').addEventListener('submit', event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const subject = encodeURIComponent(`Project inquiry: ${form.get('service')}`);
  const body = encodeURIComponent(
    `Hello Asif,\n\nMy name: ${form.get('name')}\nMy email: ${form.get('email')}\nService: ${form.get('service')}\n\nProject details:\n${form.get('details') || 'I would like to discuss a project.'}\n\nThank you.`
  );
  window.location.href = `mailto:md.asif172@gmail.com?subject=${subject}&body=${body}`;
});
