// presenting data on page: city, weather

btn.addEventListener('click', async (e) => {
  try {
    const data = await getCatFact();
    updateCatFact(data);
  }
  catch (err) {
    console.log(err);
  }
});

// const num = getRandom(3);

// switch (num) {
//   case 0:
//     try {
//       const data = await spaceFlightNews();
//       updateSpaceNews(data);
//     }
//     catch (err) {
//       console.log(err);
//     }
//     break;
//   case 1:
//     try {
//       const data = await randomQuote();
//       updateQuote(data);
//     }
//     catch (err) {
//       console.log(err);
//     }
//     break;
//   case 2:
//     try {
//       const data = await getGuardian();
//       updateGuardian(data);
//     }
//     catch (err) {
//       console.log(err);
//     }
//     break;
  // case 3:
  //   try {
  //     const data = await getRMChar();
  //     updateRMChar(data);
  //   }
  //   catch (err) {
  //     console.log(err);
  //   }
  //   break;
// }

// try {
//   const data = await updateCity(getRandomCity());
//   updateWeather(data);
// }
// catch (err) {
//   console.log(err);
// }
