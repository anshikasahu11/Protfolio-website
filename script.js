const projectsBtn = document.querySelector('.btn-17');
const skillsBtn = document.querySelector('.btn-18');
const backBtn = document.querySelector('.btn-back');

const projectsSection = document.getElementById('projects');
const skillsSection = document.getElementById('skills');

projectsBtn.addEventListener('click', () => {
  projectsSection.classList.remove('hidden');
  skillsSection.classList.add('hidden');
  projectsSection.scrollIntoView({ behavior: 'smooth' });
});

skillsBtn.addEventListener('click', () => {
  skillsSection.classList.remove('hidden');
  projectsSection.classList.add('hidden');
  skillsSection.scrollIntoView({ behavior: 'smooth' });

  // Animate each skill card
  const cards = skillsSection.querySelectorAll('.skill-card');
  cards.forEach((card, i) => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(10px)';
    setTimeout(() => {
      card.style.transition = 'all 0.3s ease';
      card.style.opacity = 1;
      card.style.transform = 'translateY(0)';
    }, i * 100);
  });
});

backBtn.addEventListener('click', () => {
  projectsSection.classList.add('hidden');
  skillsSection.classList.add('hidden');
});
