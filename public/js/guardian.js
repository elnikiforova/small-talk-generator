// the Guardian web API
const guardianKey = '9a699e48-4a82-4d28-bef3-eb3236f17514';

const getGuardian = async (search) => {
  const base = 'https://content.guardianapis.com/';
  const query = `search?q=${search}&api-key=${guardianKey}`;

  const response = await fetch(base + query);
  const data = await response.json();

  console.log('The Guardian API', data);

  const res = data.response;
  return res.results;
}

const updateGuardian = async (data) => {
  const num = getRandom(data.length);
  const mydata = data[num];

  const smallTalk = document.createElement('div');
  smallTalk.classList.add('small-talk', 'my-blue');

  let template = `
    <span>The Guardian: ${mydata.webTitle}...</span> 
    <a target="_blank" rel="noopener noreferrer" href="${mydata.webUrl}">link</a>?
  `;

  template = template.toLowerCase();
  smallTalk.innerHTML = template;
  content.insertAdjacentElement('afterbegin', smallTalk);

  // add source
  const source = document.createElement('div');
  source.classList.add('source');
  template = `source: content.guardianapis.com`;
  source.innerText = template;
  smallTalk.insertAdjacentElement('afterend', source);
}
