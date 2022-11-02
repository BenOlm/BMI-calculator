document
  .querySelector(`.calculate-button`)
  .addEventListener("click", function () {
    console.log(`test`);
    // Code to execute goes here
    const height = Number(document.querySelector(`.height-input`).value);
    console.log(`The height is ${height} cm`);

    const weight = Number(document.querySelector(`.weight-input`).value);
    console.log(`The weight is ${weight} kg`);

    const BMI = (weight / height ** 2).toFixed(2);
    console.log(BMI);

    document.querySelector(`.BMI`).textContent = `${BMI} kg/m2`;
  });
