import displayHomePage from './modules/homeModule';
import displayOurMenu from './modules/menuModule';
import displayOurReservation from './modules/reservationsModule';
import displayMainContent from './modules/mainModule';

displayHomePage();

const firstNavLink = document.querySelector('.upper-left');
const secondNavLink = document.querySelector('.upper-center');
const thirdNavLink = document.querySelector('.upper-right');
const mainContent = document.querySelector('.main-content');

const home = displayMainContent().wrapperContent.el;
const reservation = displayOurReservation();
const menu = displayOurMenu();

firstNavLink.addEventListener('click', () => {
  mainContent.textContent = '';
  mainContent.appendChild(home);
});

secondNavLink.addEventListener('click', () => {
  mainContent.textContent = '';
  mainContent.appendChild(reservation);
});

thirdNavLink.addEventListener('click', () => {
  mainContent.textContent = '';
  mainContent.appendChild(menu);
});
