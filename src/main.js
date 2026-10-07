// Source PDFs are stored under public/ so relative links work on GitHub Pages.
// Replace these files when distinct final reports and presentations are supplied.
const documents = [
  { title: 'Topic Assessment', file: 'public/documents/topic-assessment.pdf', type: 'Assessment' },
  { title: 'Research Paper', file: 'public/documents/research-paper.pdf', type: 'Paper' },
  { title: 'Individual Report - IT22054340', file: 'public/documents/individual-report-IT22054340.pdf', type: 'Individual report' },
  { title: 'Individual Report - IT22088864', file: 'public/documents/individual-report-IT22088864.pdf', type: 'Individual report' },
  { title: 'Individual Report - IT22215956', file: 'public/documents/individual-report-IT22215956.pdf', type: 'Individual report' },
  { title: 'Individual Report - IT22298058', file: 'public/documents/individual-report-IT22298058.pdf', type: 'Individual report' },
  { title: 'Final Report', file: 'public/documents/final-report.pdf', type: 'Report' },
];

const presentations = [
  { title: 'Proposal Presentation', file: 'public/presentations/proposal-presentation.pdf', type: 'Presentation' },
  { title: 'Progress Presentation I', file: 'public/presentations/progress-presentation-1.pdf', type: 'Presentation' },
  { title: 'Progress Presentation II', file: 'public/presentations/progress-presentation-2.pdf', type: 'Presentation' },
  { title: 'Final Presentation', file: 'public/presentations/final-presentation.pdf', type: 'Presentation' },
];

const milestones = [
  ['Project Proposal', 'Research scope, problem, and planned approach'],
  ['Progress Presentation I', 'Initial research and implementation review'],
  ['Progress Presentation II', 'Further development and evaluation review'],
  ['Research Paper', 'Research writing and submission'],
  ['Final Report', 'Complete project documentation'],
  ['Final Presentation', 'Project demonstration and final review'],
];

const studentIds = ['IT22054340', 'IT22088864', 'IT22215956', 'IT22298058'];

function renderDownloads(targetId, items) {
  const list = document.getElementById(targetId);
  for (const item of items) {
    const card = document.createElement('article');
    card.className = 'download-card';
    const info = document.createElement('div');
    info.className = 'download-card-main';
    const icon = document.createElement('span');
    icon.className = 'file-icon';
    icon.setAttribute('aria-hidden', 'true');
    icon.textContent = targetId === 'presentations-list' ? 'PPT' : 'DOC';
    const detail = document.createElement('div');
    const title = document.createElement('h4');
    title.textContent = item.title;
    const type = document.createElement('p');
    type.textContent = item.type;
    detail.append(title, type);
    info.append(icon, detail);
    const actions = document.createElement('div');
    actions.className = 'file-actions';
    if (item.file) {
      // Relative URLs work at the repository root and under a GitHub Pages subpath.
      const view = document.createElement('a');
      view.className = 'file-button view';
      view.href = item.file;
      view.target = '_blank';
      view.rel = 'noopener noreferrer';
      view.textContent = 'View';
      const download = document.createElement('a');
      download.className = 'file-button download';
      download.href = item.downloadFile || item.file;
      download.download = '';
      download.textContent = 'Download';
      actions.append(view, download);
    } else {
      const pending = document.createElement('span');
      pending.className = 'coming-soon';
      pending.textContent = 'Coming Soon';
      actions.append(pending);
    }
    card.append(info, actions);
    list.append(card);
  }
}

renderDownloads('documents-list', documents);
renderDownloads('presentations-list', presentations);

document.getElementById('timeline').innerHTML = milestones.map(([title, description], index) => `
  <article class="timeline-item reveal"><span class="timeline-dot"></span><div class="timeline-card"><div class="timeline-meta"><span>Milestone ${String(index + 1).padStart(2, '0')}</span><span class="status-pill">Date to be confirmed</span></div><h3>${title}</h3><p>${description}. Add the verified assessment date when available.</p></div></article>
`).join('');

document.getElementById('team-list').innerHTML = studentIds.map((id, index) => `
  <article class="team-card reveal"><div class="avatar">${String(index + 1).padStart(2, '0')}</div><span class="role-tag">Student researcher</span><h3>Name to be confirmed</h3><strong class="student-id">${id}</strong><p>Research component and role to be confirmed from ShareMate documents.</p></article>
`).join('');

const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav-links');
const mobileQuery = window.matchMedia('(max-width: 820px)');
const updateNavbar = () => navbar.classList.toggle('scrolled', window.scrollY > 20);
updateNavbar();
window.addEventListener('scroll', updateNavbar, { passive: true });

function closeMenu() {
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.innerHTML = '☰ <span>Menu</span>';
  document.querySelectorAll('.nav-group.open').forEach(group => {
    group.classList.remove('open');
    group.querySelector('.submenu-toggle').setAttribute('aria-expanded', 'false');
  });
}
menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.innerHTML = open ? '× <span>Close</span>' : '☰ <span>Menu</span>';
});
document.querySelectorAll('.submenu-toggle').forEach(button =>
  button.addEventListener('click', () => {
    const open = button.closest('.nav-group').classList.toggle('open');
    button.setAttribute('aria-expanded', String(open));
  })
);
nav.querySelectorAll('a').forEach(link =>
  link.addEventListener('click', () => {
    if (mobileQuery.matches) closeMenu();
  })
);
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeMenu();
});
document.addEventListener('click', event => {
  if (mobileQuery.matches && nav.classList.contains('open') && !navbar.contains(event.target)) closeMenu();
});
mobileQuery.addEventListener('change', closeMenu);

const form = document.getElementById('contact-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const body = `Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`;
  const subject = `ShareMate inquiry: ${data.get('subject')}`;
  // Recipient remains blank until the actual team email is supplied.
  window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  document.getElementById('form-note').textContent = 'Your email app will open with the message prepared. Please choose the recipient.';
});

document.getElementById('year').textContent = new Date().getFullYear();
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  }), { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
} else {
  document.querySelectorAll('.reveal').forEach(element => element.classList.add('visible'));
}
