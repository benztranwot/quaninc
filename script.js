const btn = document.querySelector("button");
const hr = document.querySelector("hr");

btn.addEventListener("pointerenter", () => {
  btn.classList.toggle("btn-hover");
  hr.classList.toggle("hr-hover");
});

btn.addEventListener("pointerleave", () => {
  btn.classList.toggle("btn-hover");
  hr.classList.toggle("hr-hover");
});
