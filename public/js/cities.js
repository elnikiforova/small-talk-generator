//
// first script: my variables and functions
//

// grab html elements: button & content div
const content = document.querySelector('.content');
const randomBtn = document.querySelector('.random-button');
const randomForm = document.querySelector('.random-form');
const chooseBtn = document.querySelector('.choose-button');
const chooseForm = document.querySelector('.choose-form');

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

// get the keys
const getKeys = async (action) => {
  try {
    response = await fetch(action, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: 'OK' }),
    });
    const keys = await response.json();
    return keys;
  }
  catch (err) {
    console.log(err);
  }
}
