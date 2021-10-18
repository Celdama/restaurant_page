import elementFactory from '../elementFactory';
import appendElementToParent from '../appendElementToParent';

const displayMainContent = () => {
  const mainContent = elementFactory('main', '', 'main-content');
  const wrapperContent = elementFactory('div', '', 'wrapper-content');
  const contentLogo = elementFactory('div', '', 'main-logo');
  const contentSlogan = elementFactory('div', '', 'main-slogan');
  const contentImage = elementFactory('div', '', 'main-image');

  const logo = elementFactory('h2', 'HEBE', '');

  const slogan = elementFactory('h3', 'Vegetarian cuisine without dogmas or complexes', '');

  const landscapeImage = elementFactory('div', '', 'landscape-img');
  const portraitImage = elementFactory('div', '', 'portrait-img');

  appendElementToParent(contentLogo.el, logo);
  appendElementToParent(contentSlogan.el, slogan);
  appendElementToParent(contentImage.el, landscapeImage, portraitImage);

  appendElementToParent(wrapperContent.el, contentLogo, contentSlogan, contentImage);
  appendElementToParent(mainContent.el, wrapperContent);

  return {
    mainContent,
    wrapperContent,
  };
};

export default displayMainContent;
