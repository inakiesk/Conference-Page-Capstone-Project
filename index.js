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
    status: 'Winner of NYO 2021',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quo ad voluptas',
  },
  {
    img: 'images/speaker02.jpg',
    name: 'Amin Piotr',
    status: 'Winner of NYO 2020',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quo ad voluptas',
  },
  {
    img: 'images/speaker03.png',
    name: 'Tami Charisse',
    status: 'Upcoming talent of 2022',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quo ad voluptas',
  },
  {
    img: 'images/speaker04.jpg',
    name: 'Jake Whitaker',
    status: 'Finalist of NYO 2020',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quo ad voluptas',
  },
  {
    img: 'images/speaker05.jpg',
    name: 'Nataly Smith',
    status: 'Finalist of NYO 2021',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quo ad voluptas',
  },
  {
    img: 'images/speaker06.jpeg',
    name: 'Jake Turner',
    status: 'Upcoming talent of 2022',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quo ad voluptas',
  },
];

const speakersSection = document.getElementById('speakers');
const speakersWrapper = document.getElementById('speakers-wrapper');

function speakerSection() {
  /*-----------------Parent Elements--------------*/
  const speakerHeader = document.createElement('h2');
  const speakerLine = document.createElement('div');
  const speakerBox = document.createElement('div');
  const speakerButton = document.createElement('button');

  speakerHeader.classList.add('speaker-header');
  speakerHeader.innerHTML = 'Featured Artists';
  speakerLine.classList.add('program-line');
  speakerBox.classList.add('speaker-box');
  speakerButton.classList.add('speaker-button');

  speakersWrapper.appendChild(speakerHeader);
  speakersWrapper.appendChild(speakerLine);
  speakersWrapper.appendChild(speakerBox);
  speakersWrapper.appendChild(speakerButton);

  /*-------------------------speakerBox-----------------------------*/
  var speakersArr = [];
  var speakersDisplayArr = [];
  var speakersInfoArr = [];
  var speakersImgArr = [];
  var speakersNameArr = [];
  var speakersStatusArr = [];
  var lineArr = [];
  var speakersTextArr = [];

  for (let i = 0; i < speakersData.length; i++) {
    /*-----------------PARENT ELEMENT-----------------*/
    speakersArr[i] = document.createElement('div');
    speakersArr[i].classList.add('speaker-tab');
    speakerBox.appendChild(speakersArr[i]);
    if (i > 1) {
      speakersArr[i].classList.add('desktop');
      speakersArr[i].classList.add('more');
    }
    /*----------------SUBPARENT ELEMENTS---------------*/
    speakersDisplayArr[i] = document.createElement('div');
    speakersDisplayArr[i].classList.add('speaker-display');
    speakersArr[i].appendChild(speakersDisplayArr[i]);

    speakersInfoArr[i] = document.createElement('div');
    speakersInfoArr[i].classList.add('speaker-info');
    speakersArr[i].appendChild(speakersInfoArr[i]);

    /*-------------------SPEAKER-DISPLAY-------------------*/
    speakersImgArr[i] = document.createElement('img');
    speakersImgArr[i].src = speakersData[i].img;
    speakersDisplayArr[i].appendChild(speakersImgArr[i]);

    /*-------------------SPEAKER-INFO---------------------*/
    speakersNameArr[i] = document.createElement('h3');
    speakersNameArr[i].classList.add('speaker-name');
    speakersNameArr[i].innerHTML = speakersData[i].name;
    speakersInfoArr[i].appendChild(speakersNameArr[i]);

    speakersStatusArr[i] = document.createElement('p');
    speakersStatusArr[i].classList.add('speaker-status');
    speakersStatusArr[i].innerHTML = speakersData[i].status;
    speakersInfoArr[i].appendChild(speakersStatusArr[i]);

    lineArr[i] = document.createElement('div');
    lineArr[i].classList.add('speaker-line');
    speakersInfoArr[i].appendChild(lineArr[i]);

    speakersTextArr[i] = document.createElement('p');
    speakersTextArr[i].classList.add('speaker-text');
    speakersTextArr[i].innerHTML = speakersData[i].text;
    speakersInfoArr[i].appendChild(speakersTextArr[i]);
  };
/*-----------------------------BUTTON------------------------------*/
const buttonText = document.createElement('p');
buttonText.innerHTML = 'MORE';
speakerButton.appendChild(buttonText);

const buttonChevron = document.createElement('img');
buttonChevron.src = 'images/chevrondown.png';
speakerButton.appendChild(buttonChevron);

};

speakerSection();

/*---------------------------SEE-MORE-EVENT---------------------------*/

const moreSpeakers = document.querySelectorAll('.more');
const speakerButton2 = document.createElement('button');
speakerButton2.classList.add('speaker-button2');
speakerButton2.classList.add('hidden');
speakersWrapper.appendChild(speakerButton2);
const buttonText2 = document.createElement('p');
buttonText2.innerHTML = 'SEE LESS';
speakerButton2.appendChild(buttonText2);
const buttonChevron2 = document.createElement('img');
buttonChevron2.src = 'images/chevrondown.png';
speakerButton2.appendChild(buttonChevron2);

const speakerButtonSelector = document.querySelector('.speaker-button');
speakerButtonSelector.addEventListener('click', seeMore);
speakerButton2.addEventListener('click', seeLess);

function seeMore() {
  
  moreSpeakers.forEach(x => x.classList.toggle('desktop'));

  const speakerButton = document.querySelector('.speaker-button');
  speakerButton.classList.toggle('hidden');

  speakerButton2.classList.toggle('hidden');
};


/*---------------------------SEE-LESS-EVENT------------------------*/

function seeLess() {
  const moreSpeakers = document.querySelectorAll('.more');
  moreSpeakers.forEach(x => x.classList.toggle('desktop'));

  const speakerButton = document.querySelector('.speaker-button');
  speakerButton.classList.toggle('hidden');

  speakerButton2.classList.toggle('hidden');
};

