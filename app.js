const stepTitles = document.querySelectorAll(".step-title");
const circleContainers = document.querySelectorAll(".circle-container");
// 把三個步驟區塊存成類陣列的形式
const stepAreas = document.querySelectorAll(".step-area");
// 選取包裹按鈕的容器
const btnControl = document.querySelector("#btn-control");
// 選取按鈕，存成變數
const nextBtn = document.querySelector(".btn-primary");
const prevBtn = document.querySelector(".btn-outline");

let step = 0;

console.log(`now is step ${step}`);
// todo: stepper狀態切換(active and checked)

// 表單切換
btnControl.addEventListener("click", function (event) {
  event.preventDefault();
  // 按下一頁
  if (
    event.target.classList.contains("btn-primary") &&
    step >= 0 &&
    event.target.innerHTML === "下一步"
  ) {
    stepAreas[step].classList.toggle("d-none");
    stepAreas[step + 1].classList.toggle("d-none");
    step += 1;
    console.log(step);

    // 按上一頁
  } else if (
    event.target.classList.contains("btn-outline") &&
    step > 0 &&
    event.target.innerHTML === "上一步"
  ) {
    stepAreas[step].classList.toggle("d-none");
    stepAreas[step - 1].classList.toggle("d-none");
    step -= 1;
    console.log(step);
  }

  setBtnStatus();
  processStepperStatus();
});

// 處理stepper狀態
function processStepperStatus() {
  if (step === 0) {
    circleContainers[1].classList.add("inactive");
    stepTitles[1].classList.add("inactive");
  } else if (step === 1) {
    circleContainers[0].classList.remove("inactive");
    circleContainers[0].classList.add("checked");
    stepTitles[0].classList.remove("inactive");
    circleContainers[1].classList.remove("inactive");
    stepTitles[1].classList.remove("inactive");
    circleContainers[2].classList.add("inactive");
    stepTitles[2].classList.add("inactive");
  } else if (step === 2) {
    circleContainers[0].classList.remove("inactive");
    circleContainers[0].classList.add("checked");
    stepTitles[0].classList.remove("inactive");
    circleContainers[1].classList.remove("inactive");
    circleContainers[1].classList.add("checked");
    stepTitles[1].classList.remove("inactive");
    circleContainers[2].classList.remove("inactive");
    stepTitles[2].classList.remove("inactive");
  }
}

// 處理按鈕狀態
function setBtnStatus() {
  if (step === 0) {
    prevBtn.classList.add("d-none");
    prevBtn.classList.remove("d-block");
  } else if (step === 1) {
    prevBtn.classList.add("d-block");
    nextBtn.innerHTML = "下一步";
  } else if (step === 2) {
    nextBtn.innerHTML = "確認下單";
  }
}
