// Harvard Art Museum API
const harvardSource = 'github.com/harvardartmuseums';

const getHarvardArt = async (action) => {
  const keys = await getKeys(action);
  const hKey = keys.harvardKey;

  const page = getRandom(4633);

  // const base = 'https://api.harvardartmuseums.org/';
  // const query = `object/${number}?apikey=${hKey}`;

  // Find all of the objects that are paintings and have the word "rabbit" in the title
  const apiEndpointBaseURL = 'https://api.harvardartmuseums.org/object';
  const queryString = $.param({
    apikey: hKey,
    title: 'Untitled',
    images: true,
    page: page + 1,
  });

  const response = await fetch(apiEndpointBaseURL + "?" + queryString);
  const data = await response.json();

  let result;

  data.records.forEach((elem) => {
    if (elem.images.length > 0) result = elem;
  })

  console.log('Harvard Art Museum API:', result);

  return result;
}

const updateHarvardArt = async (data) => {
  const smallTalk = document.createElement('div');
  smallTalk.classList.add('small-talk', 'my-blue', 'big');

  let template = `
    <span>this artwork is called "${data.title}"...
    <br> if it was yours, what would you call it?
    </span>
  `;

  template = template.toLowerCase();
  smallTalk.innerHTML = template;
  content.insertAdjacentElement('afterbegin', smallTalk);

  // add image
  const image = document.createElement('img');
  image.classList.add('big-image');
  image.src = data.images[0].baseimageurl;
  smallTalk.insertAdjacentElement('afterend', image);

  // add source
  const source = document.createElement('div');
  source.classList.add('source');
  if (data.copyright) {
    template = `${data.copyright} \n source: ${harvardSource}`;
  } else {
    template = `source: ${harvardSource}`;
  }
  source.innerText = template;
  image.insertAdjacentElement('afterend', source);
}
