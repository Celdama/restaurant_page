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
