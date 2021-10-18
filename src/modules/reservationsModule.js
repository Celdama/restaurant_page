import elementFactory from '../elementFactory';
import appendElementToParent from '../appendElementToParent';

const reservations = [
  ['Reservations', 'Book your table online or by calling 976 35 90 11 from 10:00h to 15:30h.'],
  ['Take me away', 'Order your meal at Zámpate and receive it wherever you want (midday Mon-Sat, evenings Thu-Sat). Or order it on 976 35 90 11 and come and pick it up at our restaurant.'],
];

const displayOurReservation = () => {
  const wrapperReservation = elementFactory('header', '', 'wrapper-reservation');
  const contentReservation = elementFactory('div', '', 'content-reservation');
  // const titleReservation = elementFactory('h1', 'Reservations', 'title-reservation');
  const closeBtn = elementFactory('button', 'X', 'close-reservation-btn');

  reservations.forEach((reservation) => {
    const titleReservation = elementFactory('h2', `${reservation[0]}`, 'title-reservation');
    const describeReservation = elementFactory('p', `${reservation[1]}`, 'describe-reservation');

    appendElementToParent(contentReservation.el, titleReservation, describeReservation);
  });

  appendElementToParent(contentReservation.el, closeBtn);
  appendElementToParent(wrapperReservation.el, contentReservation);

  return wrapperReservation.el;
};

export default displayOurReservation;
