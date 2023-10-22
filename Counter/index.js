const count = document.querySelector(".count");
const decValue = document.querySelector(".decreaseValue");
const incValue = document.querySelector(".increaseValue");
const resetBtn = document.querySelector(".resetBtn");
const changeValueInput = document.querySelector(".changeValueInput");

incValue.addEventListener("click", () => {
  count.textContent =
    parseInt(count.textContent) + parseInt(changeValueInput.value);
});

decValue.addEventListener("click", () => {
  count.textContent =
    parseInt(count.textContent) - parseInt(changeValueInput.value);
});

resetBtn.addEventListener("click", () => {
  count.textContent = 0;
  changeValueInput.value = 1;
});
