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
  const firstLink = elementFactory('a', '', 'down-left');
  const instagramIcon = elementFactory('i', '', 'social-icon');
  const facebookIcon = elementFactory('i', '', 'social-icon');
  const mapIcon = elementFactory('i', '', 'social-icon');
  const secondLink = elementFactory('a', daysFromNow(), 'down-right');

  instagramIcon.el.innerHTML = '<i class="fab fa-instagram"></i>';
  facebookIcon.el.innerHTML = '<i class="fab fa-facebook-square"></i>';
  mapIcon.el.innerHTML = '<i class="fas fa-map-marker-alt"></i>';

  appendElementToParent(firstLink.el, instagramIcon, facebookIcon, mapIcon);
  appendElementToParent(firstLi.el, firstLink);
  appendElementToParent(secondLi.el, secondLink);

  appendElementToParent(ulNavDownHome.el, firstLi, secondLi);
  appendElementToParent(navDownHome.el, ulNavDownHome);
  appendElementToParent(footer.el, navDownHome);

  return footer.el;
};

export default displayNavBarDown;
