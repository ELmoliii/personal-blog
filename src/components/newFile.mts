import { themeToggleButton, bodyElement } from "./Header.astro.0.mts";

themeToggleButton.addEventListener('click', () => {
bodyElement.classList.toggle('dark-mode');
// Cambia el ícono del botón dependiendo del modo
if (bodyElement.classList.contains('dark-mode')) {
themeToggleButton.textContent = '🌜';
} else {
themeToggleButton.textContent = '🌞';
}
});
