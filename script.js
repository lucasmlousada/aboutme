const actionButton = document.getElementById('actionButton');
const actionResult = document.getElementById('actionResult');

actionButton.addEventListener('click', () => {
  actionResult.textContent = 'Great choice! This site is ready to host for free.';
  actionResult.style.color = '#1d4ed8';
});

window.addEventListener('DOMContentLoaded', () => {
  const year = new Date().getFullYear();
  const footer = document.querySelector('footer p');
  footer.textContent = `Project1 • Static website starter • ${year}`;
});
