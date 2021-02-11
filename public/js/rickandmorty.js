// the Rick and Morty API locations
const rmSource = 'rickandmortyapi.com';

const getRMChar = async () => {
  const num = getRandom(671);

  const base = 'https://rickandmortyapi.com/api/';
  const query = `character/${num + 1}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data;
}

const updateRMChar = async (data) => {
  // const { name, image } = data;

  const smallTalk = document.createElement('div');
  smallTalk.classList.add('small-talk', 'my-blue');

  let template = `<span>What do you think, how old is ${data.name}?..</span>`;

  template = template.toLowerCase();
  smallTalk.innerHTML = template;
  content.insertAdjacentElement('afterbegin', smallTalk);

  // add image
  const image = document.createElement('img');
  image.src = data.image;
  smallTalk.insertAdjacentElement('afterend', image);

  // add source
  const source = document.createElement('div');
  source.classList.add('source');
  template = `source: ${rmSource}`;
  source.innerText = template;
  image.insertAdjacentElement('afterend', source);
}
