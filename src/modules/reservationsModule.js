import elementFactory from '../elementFactory';

const displayOurReservation = () => {
  const titleReservation = elementFactory('h1', 'Reservations pages', 'title');

  return titleReservation.el;
};

export default displayOurReservation;
