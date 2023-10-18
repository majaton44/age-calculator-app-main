const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  const inputDay = document.querySelector(".input--day").value;
  const inputMonth = document.querySelector(".input--month").value;
  const inputYear = document.querySelector(".input--year").value;

  console.log(inputDay, inputMonth, inputYear);
});

// Get current date
const date = new Date();

const currentDay = date.getDate();
const currentMonth = date.getMonth() + 1;
const currentYear = date.getFullYear();

console.log(date);
console.log(currentDay, currentMonth, currentYear);
