const toggleButton = document.querySelector('[data-toggle-button]');
const menu = document.querySelector('[data-menu]');

toggleButton.addEventListener('click', () => {
  menu.classList.toggle('open');
  toggleButton.classList.toggle('humburger-x');
});
