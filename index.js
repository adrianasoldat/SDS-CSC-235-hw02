const hypothesisBtn = document.getElementById("hypothesisBtn");
const hypothesesSection = document.getElementById("hypotheses");

const hypoColors = ["#fff9c4", "#c8e6c9", "#bbdefb", "#ffcdd2"];
let hypoIndex = 0;

// Change H section background color on click
hypothesisBtn.addEventListener("click", () => {
  hypothesesSection.style.backgroundColor = hypoColors[hypoIndex];
  hypoIndex = (hypoIndex + 1) % hypoColors.length;
});