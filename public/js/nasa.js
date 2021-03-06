// NASA API
const nasaSource = 'api.nasa.gov';

const getNASAapod = async (action) => {
  const keys = await getKeys(action);
  const nKey = keys.nasaKey;

  const base = 'https://api.nasa.gov/planetary/';
  const query = `apod?api_key=${nKey}&count=1`;

  const response = await fetch(base + query);
  const data = await response.json();

  console.log('NASA API:', data[0]);

  return data[0];
}

const updateNASA = async (data, mode) => {
  const smallTalk = document.createElement('div');
  smallTalk.classList.add('small-talk', 'my-blue', 'big');

  if (mode === 'short') {
    const i = data.explanation.indexOf('.');
    const string = data.explanation.substring(0, i);

    let template = `
    <span class="date">from ${data.date}</span>
    <br>
    <span>${string}...</span>
    `;

    template = template.toLowerCase();
    smallTalk.innerHTML = template;
    content.insertAdjacentElement('afterbegin', smallTalk);
  }
  else if (mode === 'full') {
    let template = `
    <span class="date">from ${data.date}</span>
    <br>
    <span>${data.explanation}..</span>
    `;

    template = template.toLowerCase();
    smallTalk.innerHTML = template;
    content.insertAdjacentElement('afterbegin', smallTalk);
  }

  if (data.media_type === 'image') {
    // add image
    const img = document.createElement('img');
    img.classList.add('big-image');
    img.src = data.url;
    smallTalk.insertAdjacentElement('afterend', img);

    // add source
    const source = document.createElement('div');
    source.classList.add('source');
    template = `source: ${nasaSource}`;
    source.innerText = template;
    img.insertAdjacentElement('afterend', source);
  }
  else {
    // add source
    const source = document.createElement('div');
    source.classList.add('source');
    template = `source: api.nasa.gov`;
    source.innerText = template;
    smallTalk.insertAdjacentElement('afterend', source);
  }

}
