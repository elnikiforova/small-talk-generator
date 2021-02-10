// api request for weather forcast
const accuKey = 'CIHP4FMXR1PzQk6lZ0yZsFYBcvcTxS2V';

// get weather information
const getWeather = async (id) => {

  const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
  const query = `${id}?apikey=${accuKey}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];
}

// get city information
const getCity = async (city) => {

  const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  const query = `?apikey=${accuKey}&q=${city}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];
}

const updateCity = async (city) => {

  const cityDets = await getCity(city);
  const weather = await getWeather(cityDets.Key);

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
