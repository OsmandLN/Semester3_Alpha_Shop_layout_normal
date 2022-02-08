const form = document.getElementById("a-form");
const formParts = form.querySelectorAll(".part");
// const stepControl = document.getElementById("step-control");
// const steps = stepControl.querySelectorAll(".step");
const stepsWrapper = document.querySelector(".steps-wrapper");
const steps = stepsWrapper.querySelectorAll(".step");
const btnControl = document.getElementById("btn-control");
const nextBtn = btnControl.querySelector(".btn-primary");
const prevBtn = btnControl.querySelector(".btn-outline");
let step = 0;

function handleBtnControlClicked(event) {
  event.preventDefault();
  const nowStep = steps[step];
  if (
    event.target.matches(".btn-primary") &&
    event.target.innerHTML === "下一步"
  ) {
    const nextStep = steps[step + 1];
    nowStep.classList.remove("active");
    nowStep.classList.add("checked");
    nextStep.classList.add("active");
    formParts[step].classList.toggle("d-none");
    formParts[step + 1].classList.toggle("d-none");
    step += 1;
  } else if (event.target.matches(".btn-outline")) {
    const prepStep = steps[step - 1];
    nowStep.classList.remove("active");
    prepStep.classList.remove("checked");
    prepStep.classList.add("active");
    formParts[step].classList.toggle("d-none");
    formParts[step - 1].classList.toggle("d-none");
    step -= 1;
  }
  console.log("Yooooooooooo");
  setBtnDisabled();
}

function setBtnDisabled() {
  if (step === 0) {
    prevBtn.setAttribute("disabled", "disabled");
  } else {
    prevBtn.removeAttribute("disabled");
  }
  if (step === 2) {
    nextBtn.innerHTML = "完成結帳";
  } else {
    nextBtn.innerHTML = "下一步";
  }
}

btnControl.addEventListener("click", handleBtnControlClicked);
