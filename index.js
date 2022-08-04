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

const speakersData = [
  {
    img: 'images/speaker01.jpeg',
    name: 'Lindsie Kallirhoe',
    degree: 'Winner of NYO 2021',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quo ad voluptas',
  },
  {
    img: 'images/speaker02.jpg',
    name: 'Amin Piotr',
    degree: 'Winner of NYO 2020',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quo ad voluptas',
  },
  {
    img: 'images/speaker03.png',
    name: 'Tami Charisse',
    degree: 'Upcoming talent of 2022',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quo ad voluptas',
  },
  {
    img: 'images/speaker04.jpg',
    name: 'Jake Whitaker',
    degree: 'Finalist of NYO 2020',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quo ad voluptas',
  },
  {
    img: 'images/speaker05.jpg',
    name: 'Nataly Smith',
    degree: 'Finalist of NYO 2021',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quo ad voluptas',
  },
  {
    img: 'images/speaker06.jpeg',
    name: 'Jake Turner',
    degree: 'Upcoming talent of 2022',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quo ad voluptas',
  },
];

