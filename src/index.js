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
  return `${count} ${count === 1 ? 'Bet' : 'Hold'}`;
};

console.log(cc(2));
console.log(cc(3));
console.log(cc(7));
console.log(cc('K'));
console.log(cc('A'));
