import displayHomePage from './modules/homeModule';
import displayOurMenu from './modules/menuModule';
import displayMainContent from './modules/mainModule';

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
  'https://images.unsplash.com/photo-1581375321224-79da6fd32f6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  'https://images.unsplash.com/photo-1581375279144-bb3b381c7046?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
  'https://images.unsplash.com/photo-1581375221876-8f287f7cd2cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
  'https://images.unsplash.com/photo-1581375383680-7101dc5cb5f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
  'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1539&q=80',
];

const portraitURLs = [
  'https://images.unsplash.com/photo-1528825871115-3581a5387919?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80',
  'https://images.unsplash.com/photo-1517355806904-a4458978d6d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=813&q=80',
  'https://images.unsplash.com/photo-1531171421955-98c62fcd562f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=704&q=80',
  'https://images.unsplash.com/photo-1531171491537-435164f3d486?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
  'https://images.unsplash.com/photo-1622219770326-d72a22862986?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
];

const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

window.setInterval(() => {
  const random = randomIntegerInRange(0, 4);
  landscapeImg.style.background = `url("${landscapeURLs[random]}") no-repeat center`;
}, 5000);

window.setInterval(() => {
  const random = randomIntegerInRange(0, 4);
  portraitImg.style.background = `url("${portraitURLs[random]}") no-repeat center`;
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
  reservationContent.style.top = '-46%';
});

thirdNavLink.addEventListener('click', () => {
  mainContent.textContent = '';
  mainContent.appendChild(menu);
});
