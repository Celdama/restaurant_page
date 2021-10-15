import elementFactory from '../elementFactory';
import appendElementToParent from '../appendElementToParent';

const displayNavBarUpper = () => {
  const navUpperHome = elementFactory('nav', '', 'menu-upper-home');
  const ulNavUpperHome = elementFactory('ul', '', '');
  const firstLi = elementFactory('li', '', 'first-li');
  const secondLi = elementFactory('li', '', 'second-li');
  const thirdLi = elementFactory('li', '', 'third-li');
  const firstLink = elementFactory('a', 'Home', 'upper-left');
  const secondLink = elementFactory('a', 'Reservations and orders', 'upper-center');
  const thirdLink = elementFactory('a', 'Tasting menu', 'upper-right');

  appendElementToParent(firstLi.el, firstLink);
  appendElementToParent(secondLi.el, secondLink);
  appendElementToParent(thirdLi.el, thirdLink);

  appendElementToParent(ulNavUpperHome.el, firstLi, secondLi, thirdLi);

  appendElementToParent(navUpperHome.el, ulNavUpperHome);

  return navUpperHome.el;
};

export default displayNavBarUpper;
