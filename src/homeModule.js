import displayNavBarUpper from './navModule';
import displayMainContent from './mainModule';
import displayNavBarDown from './footerModule';

const content = document.getElementById('content');

const displayHomePage = () => {
  const nav = displayNavBarUpper();
  const main = displayMainContent();
  const footer = displayNavBarDown();

  content.appendChild(nav);
  content.appendChild(main);
  content.appendChild(footer);
};

export default displayHomePage;
