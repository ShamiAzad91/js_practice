const form = document.querySelector("#addForm");
console.log("hi",form);


form.addEventListener("submit", function (e) {
  e.preventDefault();
  const num1 = parseInt(document.querySelector("#num1").value);
  const num2 = parseInt(document.querySelector("#num2").value);
  const result = document.querySelector("#result");

  if (num1 === " " || num1 < 0 || isNaN(num1)) {
    result.innerHTML = `num is not valid ${num1}`;
  } else if (num2 === " " || num2 < 0 || isNaN(num2)) {
    result.innerHTML = `num is not valid ${num2}`;
  } else {
    const add = num1 + num2;
    result.innerHTML = `<h3> sum of two no is ${add}</h3>`
  }
});
