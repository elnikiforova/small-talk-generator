// web api for space flight news

const spaceFlightNews = async () => {
  const response = await fetch('https://test.spaceflightnewsapi.net/api/v2/blogs');
  const data = await response.json();
  return data;
}

const updateSpaceNews = async (data) => {
  const num = getRandom(data.length);
  const mydata = data[num];

  const smallTalk = document.createElement('div');
  smallTalk.classList.add('small-talk', 'my-dark-blue');

  let template = `<span>apparently, ${mydata.summary}..</span>`;

  template = template.toLowerCase();
  smallTalk.innerHTML = template;
  content.insertAdjacentElement('afterbegin', smallTalk);

  // add source
  const source = document.createElement('div');
  source.classList.add('source');
  template = `source: spaceflightnewsapi.net`;
  source.innerText = template;
  smallTalk.insertAdjacentElement('afterend', source);
}
