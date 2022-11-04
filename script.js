document
  .querySelector(`.calculate-button`)
  .addEventListener("click", function () {
    // Grabs height and weight variables from the two input fields
    const height = Number(document.querySelector(`.height-input`).value);

    const weight = Number(document.querySelector(`.weight-input`).value);

    // Calculates the BMI from the two vaiables
    // Fixed the length of the result to 2 decimal places
    const BMI = (weight / height ** 2).toFixed(2);

    // Inserts the result onto the page
    document.querySelector(`.BMI`).textContent = `${BMI} kg/m2`;
  });
