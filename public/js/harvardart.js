// Harvard Art Museum API

const harvardKey = '67b03a3f-9fa6-4604-b243-b82a5ae38d2e';

const getHarvardArt = async () => {
  const base = 'https://api.harvardartmuseums.org/';
  const query = `object?q=totalpageviews:0&size=10?api_key=${harvardKey}`;

  const response = await fetch(base + query);
  const data = await response.json();

  console.log('Harvard Art Museum API:', data);

  // return data;
}
