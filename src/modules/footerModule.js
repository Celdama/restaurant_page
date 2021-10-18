import elementFactory from '../elementFactory';
import appendElementToParent from '../appendElementToParent';

const displayNavBarDown = () => {
  const daysFromNow = () => {
    const d = new Date();
    const day = d.getDate();
    const month = d.getMonth();
    const year = d.getFullYear();
    return `${month + 1}/${day}/${year}`;
  };

  const footer = elementFactory('footer', '', 'footer');
  const navDownHome = elementFactory('nav', '', 'menu-down-home');
  const ulNavDownHome = elementFactory('ul', '', '');
  const firstLi = elementFactory('li', '', '');
  const secondLi = elementFactory('li', '', '');
  const firstLink = elementFactory('a', 'Social Media', 'down-left');
  const secondLink = elementFactory('a', daysFromNow(), 'down-right');

  appendElementToParent(firstLi.el, firstLink);
  appendElementToParent(secondLi.el, secondLink);

  appendElementToParent(ulNavDownHome.el, firstLi, secondLi);
  appendElementToParent(navDownHome.el, ulNavDownHome);
  appendElementToParent(footer.el, navDownHome);

  return footer.el;
};

export default displayNavBarDown;
