const closeX = document.getElementById('closeX');
const hamburguer = document.getElementById('ham');
const menuBackground = document.getElementById('menuBackground');
const menu = document.getElementById('menu');
const link1 = document.getElementById('link1');
const link2 = document.getElementById('link2');
const link3 = document.getElementById('link3');

[closeX, link1, link2, link3, hamburguer].forEach((elements) => {
  elements.addEventListener('click', () => {
    closeX.classList.toggle('hidden');
    menuBackground.classList.toggle('hidden');
    menu.classList.toggle('hidden');
  });
});
