// Theme switcher: choice is saved in the browser
const root = document.documentElement;
const dots = document.querySelectorAll('.dot');

function setTheme(t) {
  root.setAttribute('data-theme', t);
  dots.forEach(d => d.classList.toggle('active', d.dataset.t === t));
  try { localStorage.setItem('theme', t); } catch (e) {}
}

let saved = 'ocean';
try { saved = localStorage.getItem('theme') || 'ocean'; } catch (e) {}
setTheme(saved);

dots.forEach(d => d.addEventListener('click', () => setTheme(d.dataset.t)));
document.getElementById('year').textContent = new Date().getFullYear();