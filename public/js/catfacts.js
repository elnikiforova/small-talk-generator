// cat facts web API

const getCatFact = async () => {
  const base = 'https://cat-fact.herokuapp.com';
  const query = '/facts/random';

  const response = await fetch(base + query);
  const data = await response.json();

  console.log('Cat Facts API:', data);

  return data;
}

const updateCatFact = async (data) => {
  const smallTalk = document.createElement('div');
  smallTalk.classList.add('small-talk', 'my-dark-pink', 'big');

  let template = `<span>${data.text}..</span>`;

  template = template.toLowerCase();
  smallTalk.innerHTML = template;
  content.insertAdjacentElement('afterbegin', smallTalk);

  // add source
  const source = document.createElement('div');
  source.classList.add('source');
  template = `source: alexwohlbruck.github.io/cat-facts/`;
  source.innerText = template;
  smallTalk.insertAdjacentElement('afterend', source);
}
