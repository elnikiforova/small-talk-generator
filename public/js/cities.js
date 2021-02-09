const cities = ['SEOUL', 'São Paulo', 'Bombay', 'JAKARTA', 'Karachi',
  'Moscow', 'Istanbul', 'Mexico City', 'Shanghai', 'TOKYO', 'New York',
  'BANGKOK', 'BEIJING', 'Delhi', 'LONDON', 'HongKong', 'CAIRO', 'TEHRAN',
  'BOGOTA', 'Bandung', 'Tianjin', 'LIMA', 'Rio de Janeiro', 'Lahore',
  'Bogor', 'SANTIAGO', 'St Petersburg', 'Shenyang', 'Calcutta'];

// get random number from 0 to 28
const getRandom = () => {
  return Math.floor(Math.random() * 28);
}

// get random city
const getRandomCity = () => {
  return cities[getRandom()].toLowerCase();
}
