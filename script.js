function scrollToActions() {
  const actionsSection = document.getElementById('actions');
  actionsSection.scrollIntoView({ behavior: 'smooth' });
}

function scrollCarousel(direction) {
  const carousel = document.querySelector('.carousel');
  const cardWidth = document.querySelector('.species-card').offsetWidth + 24; // gap
  carousel.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
// script.js
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if(window.scrollY > 50) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});}