import appendElementToParent from '../appendElementToParent';
import elementFactory from '../elementFactory';

const foods = [
  ['Snacks', 'Sopa Pho', 'Qüorn and curry croquette'],
  ['Starters', 'Sweet potato carpaccio, red onion, feta cheese, fried corn, black olives, yuzu vinaigrette, orange powder and watercress', 'Artichoke heart stuffed with vegan foie gras and hollandaise sauce'],
  ['Principal', 'Green curry rice with coriander and lime', 'Raviolis de borraja rellenos de calabaza con mantequilla de salvia y limón'],
  ['Desserts', 'Black beer and liquorice sponge cake, homemade quince jelly, almond ice cream and white chocolate soup.', 'Spiced mango and passion fruit soup'],
];

const displayOurMenu = () => {
  const wrapperMenu = elementFactory('div', '', 'wrapper-menu');
  const priceMenu = elementFactory('p', '23,00$ per person', 'price-menu');
  const spanMenu = elementFactory('span', 'MENU', 'span-menu');
  const titleMenu = elementFactory('h1', 'Tasting', 'title-menu');
  const imgMenu = elementFactory('div', '', 'img-menu');
  const menu = elementFactory('div', '', 'menu');

  foods.forEach((food) => {
    const menuSection = elementFactory('h2', `${food[0]}`, 'menu-section');
    const menuDescription = elementFactory('ul', '', 'menu-description');
    const firstChoice = elementFactory('li', `${food[1]}`, 'choice-menu');
    const secondChoice = elementFactory('li', `${food[2]}`, 'choice-menu');

    appendElementToParent(menuDescription.el, firstChoice, secondChoice);

    appendElementToParent(menu.el, menuSection, menuDescription);
  });

  appendElementToParent(wrapperMenu.el, priceMenu, spanMenu, titleMenu, imgMenu, menu);

  return wrapperMenu.el;
};

export default displayOurMenu;
