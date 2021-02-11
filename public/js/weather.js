// api request for weather forcast

// get weather information
const getWeather = async (id, aKey) => {

  const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
  const query = `${id}?apikey=${aKey}`;

  const response = await fetch(base + query);
  const data = await response.json();

  console.log('getWeather', data);

  return data[0];
}

// get city information
const getCity = async (city, aKey) => {

  const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  const query = `?apikey=${aKey}&q=${city}`;

  const response = await fetch(base + query);
  const data = await response.json();

  console.log('getCity', data);

  return data[0];
}

const updateCity = async (city, action) => {

  const keys = await getKeys(action);
  const aKey = keys.accuKey;

  const cityDets = await getCity(city, aKey);
  const weather = await getWeather(cityDets.Key, aKey);

  return { cityDets, weather };
};

const updateWeather = data => {
  // display weather
  const { cityDets, weather } = data;
  const smallTalk = document.createElement('div');
  smallTalk.classList.add('small-talk', 'my-blue');

  let template = `<span>it's ${weather.WeatherText} in ${cityDets.EnglishName} today...</span>`;

  template = template.toLowerCase();
  smallTalk.innerHTML = template;
  content.insertAdjacentElement('afterbegin', smallTalk);

  // add source
  const source = document.createElement('div');
  source.classList.add('source');
  template = `source: developer.accuweather.com`;
  source.innerText = template;
  smallTalk.insertAdjacentElement('afterend', source);
};
