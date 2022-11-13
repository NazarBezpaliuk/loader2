const wraper = document.querySelector("#wraper");
const input = document.querySelector("#locker_input");
const button = document.querySelector("#locker_submit");

const unlock = () => {
  if (input.value === "2819") {
    return wraper.classList.add("wraper_unlock");
  }
  wraper.classList.add("wraper_lock");
  input.classList.add("locker_input_lock");
};

button.addEventListener("click", unlock);
