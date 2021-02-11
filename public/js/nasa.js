// NASA API

const nasaKey = 'syqhLGlbJ7qMZ88zdzZHktz8fFI5uGocxS20an4m';

const getNASAapod = async () => {
  const base = 'https://api.nasa.gov/planetary/';
  const query = `apod?api_key=${nasaKey}&count=1`;

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
    // add image as link
    const anchor = document.createElement('div');
    anchor.innerHTML = `<a target="_blank" rel="noopener noreferrer" href="${data.hdurl}"></a>`;
    const image = `<img src="${data.url}" class="big-image"></img>`;
    anchor.innerHTML = image;
    smallTalk.insertAdjacentElement('afterend', anchor);

    // add source
    const source = document.createElement('div');
    source.classList.add('source');
    template = `source: api.nasa.gov`;
    source.innerText = template;
    anchor.insertAdjacentElement('afterend', source);
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
