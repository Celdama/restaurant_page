import displayNavBarUpper from './navModule';
import displayMainContent from './mainModule';
import displayNavBarDown from './footerModule';
import displayOurReservation from './reservationsModule';

const content = document.getElementById('content');

const displayHomePage = () => {
  const reservation = displayOurReservation();
  const nav = displayNavBarUpper();
  const main = displayMainContent().mainContent.el;
  const footer = displayNavBarDown();

  content.appendChild(reservation);
  content.appendChild(nav);
  content.appendChild(main);
  content.appendChild(footer);
};

export default displayHomePage;
