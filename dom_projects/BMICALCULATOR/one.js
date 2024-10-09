const form = document.querySelector("body");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");
  const tagLine = document.querySelector("#weightDetails");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    result.innerHTML = `<span>${bmi}</span>`;
    switch (bmi) {
      case bmi < 18.6:
        tagLine.innerHTML = `<br/><h3> your are under weight</h3>`;

        break;
      case bmi > 18.6 && bmi < 24.6:
        tagLine.innerHTML = `<br/><h3> your are noraml weight</h3>`;

        break;

      default:
        tagLine.innerHTML = `<br/><h3> your are over weight</h3>`;

        break;
    }
  }
});
