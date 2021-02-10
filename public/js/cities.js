//
// first script: my variables and functions
//

// grab html elements: button & content div
const btn = document.querySelector('button');
const content = document.querySelector('.content');

// my list of cities
const cities = ['SEOUL', 'São Paulo', 'Bombay', 'JAKARTA', 'Karachi',
  'Moscow', 'Istanbul', 'Mexico City', 'Shanghai', 'TOKYO', 'New York',
  'BANGKOK', 'BEIJING', 'Delhi', 'LONDON', 'HongKong', 'CAIRO', 'TEHRAN',
  'BOGOTA', 'Bandung', 'Tianjin', 'LIMA', 'Rio de Janeiro', 'Lahore',
  'Bogor', 'SANTIAGO', 'St Petersburg', 'Shenyang', 'Calcutta'];

// get random number from 0 to number - 1
const getRandom = (number) => {
  return Math.floor(Math.random() * number);
}

// get random city
const getRandomCity = () => {
  return cities[getRandom(28)].toLowerCase();
}
