import displayNavBarUpper from './navModule';

const content = document.getElementById('content');

const displayHomePage = () => {
  const nav = displayNavBarUpper();

  content.insertBefore(nav, content.firstChild);
};

export default displayHomePage;
