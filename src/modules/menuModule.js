import elementFactory from '../elementFactory';

const displayOurMenu = () => {
  const titleMenu = elementFactory('h1', 'Menu', 'title');

  return titleMenu.el;
};

export default displayOurMenu;
