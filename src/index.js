import './style.css';

let count = 0;

const cc = (card) => {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count += 1;
      break;

    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count -= 1;
      break;

    default:
      break;
  }
  return `${count} ${count > 0 ? 'Bet' : 'Hold'}`;
};

console.log(cc(2));
console.log(cc(3));
console.log(cc(7));
console.log(cc('K'));
console.log(cc('A'));

//Cards Sequence 2, 3, 4, 5, 6 should return 5 Bet
(cc(2)); (cc(3)); (cc(4)); (cc(5)); console.log(cc(6));