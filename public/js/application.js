const btn = document.querySelector('button');
const content = document.querySelector('.content');

const updateCity = async (city) => {

  const cityDets = await getCity(city);
  const weather = await getWeather(cityDets.Key);

  return { cityDets, weather };
};

const updateUI = data => {
  // destructure properties
  const { cityDets, weather } = data;

  const template = `Have you heard that today it's ${weather.WeatherText} in ${cityDets.EnglishName}?`

  // update details template
  content.innerHTML += `
  <div class="small-talk">
    <p>
      ${template.toLowerCase()}
    </p>
  </div>
  `;
};

btn.addEventListener('click', e => {
  updateCity(getRandomCity())
    .then(data => updateUI(data))
    .catch(err => console.log(err));
});

