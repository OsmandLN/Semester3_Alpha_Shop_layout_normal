// const form = document.getElementById("a-form");
// const formParts = form.querySelectorAll(".part");
// const stepControl = document.getElementById("step-control");
// const steps = stepControl.querySelectorAll(".step");
// const stepsWrapper = document.querySelector(".steps-wrapper");
// const steps = stepsWrapper.querySelectorAll(".step");
// const btnControl = document.getElementById("btn-control");
// const nextBtn = btnControl.querySelector(".btn-primary");
// const prevBtn = btnControl.querySelector(".btn-outline");
// const stepOne = document.querySelector(".step-one")
// const stepTwo = document.querySelector(".step-two")
// const stepThree = document.querySelector(".step-three");
// // let step = 0;

// function handleBtnControlClicked(event) {
//   event.preventDefault();
//   const nowStep = steps[step];
//   if (
//     event.target.matches(".btn-primary") &&
//     event.target.innerHTML === "下一步"
//   ) {
//     const nextStep = steps[step + 1];
//     nowStep.classList.remove("active");
//     nowStep.classList.add("checked");
//     nextStep.classList.add("active");
//     formParts[step].classList.toggle("d-none");
//     formParts[step + 1].classList.toggle("d-none");
//     step += 1;
//   } else if (event.target.matches(".btn-outline")) {
//     const prevStep = steps[step - 1];
//     nowStep.classList.remove("active");
//     prevStep.classList.remove("checked");
//     prevStep.classList.add("active");
//     formParts[step].classList.toggle("d-none");
//     formParts[step - 1].classList.toggle("d-none");
//     step -= 1;
//   }
//   console.log("Yooooooooooo");
//   setBtnDisabled();
// }

// function setBtnDisabled() {
//   if (step === 0) {
//     prevBtn.setAttribute("disabled", "disabled");
//   } else {
//     prevBtn.removeAttribute("disabled");
//   }
//   if (step === 2) {
//     nextBtn.innerHTML = "完成結帳";
//   } else {
//     nextBtn.innerHTML = "下一步";
//   }
// }

// btnControl.addEventListener("click", handleBtnControlClicked);

// 把包裹三個步驟的表格的大容器選起來
// const form = document.querySelector("#a-form");
// 把三個步驟區塊存成類陣列的形式
const stepAreas = document.querySelectorAll(".step-area");
// 選取包裹按鈕的容器
const btnControl = document.querySelector("#btn-control");
// 選取按鈕，存成變數
const nextBtn = document.querySelector(".btn-primary");
const prevBtn = document.querySelector(".btn-outline");
let step = 0;

// todo: stepper狀態切換(active and checked)

// 表單切換
btnControl.addEventListener("click", function (event) {
  event.preventDefault();
  // 按下一頁
  if (
    event.target.classList.contains("btn-primary") &&
    step >= 0 &&
    (event.target.innerHTML = "下一步")
  ) {
    // console.log("666")
    stepAreas[step].classList.toggle("d-none");
    stepAreas[step + 1].classList.toggle("d-none");
    step += 1;
    // if (step === 2) {
    //   nextBtn.innerHTML = "完成結帳";
    // }
    console.log(`下${step}`);
    // 按上一頁
  } else if (
    event.target.classList.contains("btn-outline") &&
    step > 0 &&
    (event.target.innerHTML = "上一步")
  ) {
    // console.log("777")
    stepAreas[step].classList.toggle("d-none");
    stepAreas[step - 1].classList.toggle("d-none");
    step -= 1;
    // if (step === 0) {
    //   prevBtn.classList.add("d-none")

    // }
    console.log(`上${step}`);
  }

  // 處理按鈕狀態
  if (step === 0) {
    prevBtn.classList.add("d-none");
  } else if (step === 2) {
    nextBtn.innerHTML = "完成結帳";
  }
});
