// web api for famous quotes
const quoteSource = '	api.quotable.io';

async function randomQuote() {
  const response = await fetch('https://api.quotable.io/random?maxLength=50');
  const data = await response.json();
  return data;
}

const updateQuote = data => {
  // display quote
  const smallTalk = document.createElement('div');
  smallTalk.classList.add('small-talk', 'my-dark-pink');

  let template = `<span>"${data.content}.."<br>was it ${data.author} who said that?</span>`;

  template = template.toLowerCase();
  smallTalk.innerHTML = template;
  content.insertAdjacentElement('afterbegin', smallTalk);

  // add source
  const source = document.createElement('div');
  source.classList.add('source');
  template = `source: ${quoteSource}`;
  source.innerText = template;
  smallTalk.insertAdjacentElement('afterend', source);
}
