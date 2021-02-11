// presenting data on page

if (randomForm) {
  console.log('random small talk page');

  randomForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const num = getRandom(4);

    switch (num) {
      case 0:
        try {
          const data = await spaceFlightNews();
          updateSpaceNews(data);
        }
        catch (err) {
          console.log(err);
        }
        break;
      case 1:
        try {
          const data = await randomQuote();
          updateQuote(data);
        }
        catch (err) {
          console.log(err);
        }
        break;
      case 2:
        try {
          const data = await getCatFact();
          updateCatFact(data);
        }
        catch (err) {
          console.log(err);
        }
        break;
      case 3:
        try {
          const data = await getNASAapod('/');
          updateNASA(data, 'short');
        }
        catch (err) {
          console.log(err);
        }
        break;
      case 4:
        try {
          const data = await getHarvardArt('/');
          updateHarvardArt(data);
        }
        catch (err) {
          console.log(err);
        }
        break;
    }
  });
}

if (chooseForm) {
  console.log('choose your fighter');
  const APIs = document.getElementById('APIs');

  chooseForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const selection = APIs.value;

    switch (selection) {
      case 'cat-facts':
        try {
          const data = await getCatFact();
          updateCatFact(data);
        }
        catch (err) {
          console.log(err);
        }
        break;
      case 'rick-and-morty':
        try {
          const data = await getRMChar();
          updateRMChar(data);
        }
        catch (err) {
          console.log(err);
        }
        break;
      case 'the-guardian-cinema':
        try {
          const data = await getGuardian('cinema', '/choose');
          updateGuardian(data);
        }
        catch (err) {
          console.log(err);
        }
        break;
      case 'the-guardian-sport':
        try {
          const data = await getGuardian('sport', '/choose');
          updateGuardian(data);
        }
        catch (err) {
          console.log(err);
        }
        break;
      case 'the-guardian-food':
        try {
          const data = await getGuardian('food', '/choose');
          updateGuardian(data);
        }
        catch (err) {
          console.log(err);
        }
        break;
      case 'space-flight-news':
        try {
          const data = await spaceFlightNews();
          updateSpaceNews(data);
        }
        catch (err) {
          console.log(err);
        }
        break;
      case 'nasa-short':
        try {
          const data = await getNASAapod('/choose');
          updateNASA(data, 'short');
        }
        catch (err) {
          console.log(err);
        }
        break;
      case 'nasa-full':
        try {
          const data = await getNASAapod('/choose');
          updateNASA(data, 'full');
        }
        catch (err) {
          console.log(err);
        }
        break;
      case 'harvard-art':
        try {
          const data = await getHarvardArt('/choose');
          updateHarvardArt(data);
        }
        catch (err) {
          console.log(err);
        }
        break;
      case 'famous-quotes':
        try {
          const data = await randomQuote();
          updateQuote(data);
        }
        catch (err) {
          console.log(err);
        }
        break;
      case 'weather':
        try {
          const data = await updateCity(getRandomCity(), '/choose');
          updateWeather(data);
        }
        catch (err) {
          console.log(err);
        }
        break;
    }
  })
}