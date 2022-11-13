const dark = document.querySelector("#dark");
const btn = document.querySelector("#darkbtn");

const addDark = () => {
  if (dark.className.includes("dark")) {
    return dark.classList.remove("dark");
  }
  return dark.classList.add("dark");
};
btn.addEventListener("click", addDark);
