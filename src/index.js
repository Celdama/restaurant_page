import './style.css';
import displayHomePage from './modules/homeModule';
import displayOurMenu from './modules/menuModule';
import displayMainContent from './modules/mainModule';

import landscape1 from './images/landscape/landscape1.png';
import landscape2 from './images/landscape/landscape2.png';
import landscape3 from './images/landscape/landscape3.png';
import landscape4 from './images/landscape/landscape4.png';
import landscape5 from './images/landscape/landscape5.png';

import portrait1 from './images/portrait/portrait1.png';
import portrait2 from './images/portrait/portrait2.png';
import portrait3 from './images/portrait/portrait3.png';
import portrait4 from './images/portrait/portrait4.png';
import portrait5 from './images/portrait/portrait5.png';

displayHomePage();

const firstNavLink = document.querySelector('.upper-left');
const secondNavLink = document.querySelector('.upper-center');
const thirdNavLink = document.querySelector('.upper-right');
const mainContent = document.querySelector('.main-content');
const reservationContent = document.querySelector('.wrapper-reservation');
const closeReservationContent = document.querySelector('.close-reservation-btn');
const landscapeImg = document.querySelector('.landscape-img');
const portraitImg = document.querySelector('.portrait-img');

const landscapeURLs = [
  landscape1,
  landscape2,
  landscape3,
  landscape4,
  landscape5,
];

const portraitURLs = [
  portrait1,
  portrait2,
  portrait3,
  portrait4,
  portrait5,
];

const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

window.setInterval(() => {
  const random = randomIntegerInRange(0, 4);
  landscapeImg.style.background = `url("${landscapeURLs[random]}") no-repeat center`;
  landscapeImg.style.transition = 'all .6s ease-in-out';
}, 5000);

window.setInterval(() => {
  const random = randomIntegerInRange(0, 4);
  portraitImg.style.background = `url("${portraitURLs[random]}") no-repeat center`;
  portraitImg.style.transition = 'all .6s ease-in-out';
}, 6000);

const home = displayMainContent().wrapperContent.el;
const menu = displayOurMenu();

firstNavLink.addEventListener('click', () => {
  mainContent.textContent = '';
  mainContent.appendChild(home);
});

secondNavLink.addEventListener('click', () => {
  reservationContent.style.top = '0%';
});

closeReservationContent.addEventListener('click', () => {
  reservationContent.style.top = '-50%';
});

thirdNavLink.addEventListener('click', () => {
  mainContent.textContent = '';
  mainContent.appendChild(menu);
});
