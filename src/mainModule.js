import elementFactory from './elementFactory';
import appendElementToParent from './appendElementToParent';

const displayMainContent = () => {
  const mainContent = elementFactory('main', '', '');
  const contentLogo = elementFactory('div', '', 'main-logo');
  const contentSlogan = elementFactory('div', '', 'main-slogan');
  const contentImage = elementFactory('div', '', 'main-image');

  const logo = elementFactory('h2', 'HEBE', '');

  const slogan = elementFactory('h3', 'Vegetarian cuisine without', '');

  const landscapeImage = elementFactory('div', '', 'landscape-img');
  const portraitImage = elementFactory('div', '', 'portrait-img');

  appendElementToParent(contentLogo.el, logo);
  appendElementToParent(contentSlogan.el, slogan);
  appendElementToParent(contentImage.el, landscapeImage, portraitImage);

  appendElementToParent(mainContent.el, contentLogo, contentSlogan, contentImage);

  return mainContent.el;
};

export default displayMainContent;
