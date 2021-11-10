/* eslint-disable no-unused-expressions */
import './style.css';

const count = 0;

const cc = (card) => {
  // eslint-disable-next-line default-case
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count + 1;
      break;

    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count - 1;
      break;
  }

/* if (count > 0) {
    return `${count} Bet`;
   }
 return `${count} Hold`;
*/

  return count > 0 ? `${count} Bet` : `${count} Hold`;
};

cc(2); cc(3); cc(7); cc('K'); cc('A');