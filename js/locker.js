const wraper = document.querySelector("#wraper");
const input = document.querySelector("#locker_input");
const button = document.querySelector("#locker_submit");

const PASSWORD = "2819";

const unlock = () => {
  if (input.value === PASSWORD) {
    return wraper.classList.add("wraper_unlock");
  }
  wraper.classList.add("wraper_lock");
  input.classList.add("locker_input_lock");
};

button.addEventListener("click", unlock);
