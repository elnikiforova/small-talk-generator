// Harvard Art Museum API

const getHarvardArt = async (action) => {
  const keys = await getKeys(action);
  const hKey = keys.harvardKey;

  const number = getRandom(235878);

  const base = 'https://api.harvardartmuseums.org/';
  const query = `object/${number}?apikey=${hKey}`;

  const response = await fetch(base + query);
  const data = await response.json();

  console.log('Harvard Art Museum API:', data);

  return data;
}

const updateHarvardArt = async (data) => {
  const smallTalk = document.createElement('div');
  smallTalk.classList.add('small-talk', 'my-blue');

  let template = `
    <span>${data.title}..</span>
  `;

  template = template.toLowerCase();
  smallTalk.innerHTML = template;
  content.insertAdjacentElement('afterbegin', smallTalk);

  // add image
  const image = document.createElement('img');
  image.src = data.images[0].baseimageurl;
  smallTalk.insertAdjacentElement('afterend', image);

  // add source
  const source = document.createElement('div');
  source.classList.add('source');
  template = `source: api.harvardartmuseums.org`;
  source.innerText = template;
  image.insertAdjacentElement('afterend', source);
}
