import elementFactory from '../elementFactory';
import appendElementToParent from '../appendElementToParent';

const displayOurReservation = () => {
  const wrapperReservation = elementFactory('div', '', 'wrapper-reservation');
  const titleReservation = elementFactory('h1', 'Reservations pages', 'title-reservation');
  const closeBtn = elementFactory('button', 'Close me', 'close-reservation-btn');

  appendElementToParent(wrapperReservation.el, titleReservation, closeBtn);

  return wrapperReservation.el;
};

export default displayOurReservation;
