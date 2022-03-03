let step = 0
const stepTitles = document.querySelectorAll(".step-title")
const circleContainers = document.querySelectorAll(".circle-container")
const connectLines = document.querySelectorAll(".connect-line")
const stepAreas = document.querySelectorAll(".step-area")
const btnControl = document.querySelector("#btn-control")
const nextBtn = document.querySelector(".btn-primary")
const prevBtn = document.querySelector(".btn-outline")
const thingsToBuy = document.querySelector(".toBuy")
const deliveryWrapper = document.querySelector(".delivery-wrapper")
const deliveryFee = document.querySelector(".delivery-fee")
const productsInCart = [
  {
    id: 1,
    name: "破壞補丁修身牛仔褲",
    image: "product-images/Block.png",
    unitPrice: 3999,
    quantity: 1,
  },
  {
    id: 2,
    name: "刷色直筒牛仔褲",
    image: "product-images/Block2.png",
    unitPrice: 1299,
    quantity: 1,
  },
]

// 表單頁面切換
function onPageChangingBtnClicked(event) {
  event.preventDefault()

  // 按下一頁
  if (
    event.target.classList.contains("btn-primary") &&
    step >= 0 &&
    event.target.innerHTML === "下一步"
  ) {
    stepAreas[step].classList.toggle("d-none")
    stepAreas[step + 1].classList.toggle("d-none")
    step += 1

    // 按上一頁
  } else if (
    event.target.classList.contains("btn-outline") &&
    step > 0 &&
    event.target.innerHTML === "上一步"
  ) {
    stepAreas[step].classList.toggle("d-none")
    stepAreas[step - 1].classList.toggle("d-none")
    step -= 1
  }

  setBtnStatus()
  processStepperStatus()
}

btnControl.addEventListener("click", onPageChangingBtnClicked)

// 處理stepper狀態
function processStepperStatus() {
  if (step === 0) {
    circleContainers[0].classList.remove("checked")
    circleContainers[1].classList.add("inactive")
    stepTitles[1].classList.add("inactive")
    connectLines[1].classList.toggle("inactive")
  } else if (step === 1) {
    circleContainers[0].classList.remove("inactive")
    circleContainers[0].classList.add("checked")
    stepTitles[0].classList.remove("inactive")
    connectLines[0].classList.remove("inactive")
    connectLines[1].classList.remove("inactive")
    circleContainers[1].classList.remove("inactive")
    circleContainers[1].classList.remove("checked")
    stepTitles[1].classList.remove("inactive")
    circleContainers[2].classList.add("inactive")
    stepTitles[2].classList.add("inactive")
  } else if (step === 2) {
    circleContainers[0].classList.remove("inactive")
    circleContainers[0].classList.add("checked")
    stepTitles[0].classList.remove("inactive")
    circleContainers[1].classList.remove("inactive")
    circleContainers[1].classList.add("checked")
    stepTitles[1].classList.remove("inactive")
    connectLines[0].classList.remove("inactive")
    connectLines[1].classList.remove("inactive")
    circleContainers[2].classList.remove("inactive")
    stepTitles[2].classList.remove("inactive")
  }
}

// 處理按鈕狀態
function setBtnStatus() {
  if (step === 0) {
    prevBtn.classList.add("d-none")
    prevBtn.classList.remove("d-block")
  } else if (step === 1) {
    prevBtn.classList.add("d-block")
    nextBtn.innerHTML = "下一步"
  } else if (step === 2) {
    nextBtn.innerHTML = "確認下單"
  }
}

// 動態產生購物車內容
function renderPurchasingCart(productsInCart) {
  let htmlContent = ""

  productsInCart.forEach((product) => {
    if (product.quantity) {
      htmlContent += ` 
            <div class="product-wrapper">
              <img src="${product.image}" alt="product-image" />
              <div class="name-quantity-wrapper">
                <h4>${product.name}</h4>
                <div class="quantity-wrapper">
                  <div class="quantity-circle">
                    <img class="minus-icon" src="icons/minus.svg" alt="minus-symbol" data-id="${product.id
        }"/>
                  </div>
                  <span>${product.quantity}</span>
                  <div class="quantity-circle">
                    <img class="plus-icon" src="icons/plus.svg" alt="plus-symbol" data-id="${product.id
        }"/>
                  </div>
                </div>
              </div>
              <span>$${(
          product.unitPrice * product.quantity
        ).toLocaleString()}</span>
            </div>`
    }
  })
  return htmlContent
}
thingsToBuy.innerHTML = renderPurchasingCart(productsInCart)

// 處理購買數量增減及分項金額變化
function onQuantityBtnClicked(event) {
  const productId = Number(event.target.dataset.id)
  const itemToAdd = productsInCart.find((product) => product.id === productId)

  if (
    event.target.className !== "plus-icon" &&
    event.target.className !== "minus-icon"
  ) {
    return
  }

  if (event.target.className === "plus-icon") {
    itemToAdd.quantity += 1
    console.log(itemToAdd.quantity)
  } else if (event.target.className === "minus-icon") {
    if (itemToAdd.quantity <= 0) {
      return
    }
    itemToAdd.quantity -= 1
    console.log(itemToAdd.quantity)
  }
  renderPurchasingCart(productsInCart)
}

thingsToBuy.addEventListener("click", onQuantityBtnClicked)
// todo: 目前無法成功渲染更改過後的數量至畫面上

// 處理運費的顯示內容
function processDeliveryFee(event) {
  if (event.target.tagName.toLowerCase() !== "input") {
    return
  } else if (
    event.target.nextElementSibling.children[0].className ===
    "standard-delivery"
  ) {
    deliveryFee.innerHTML = "免費"
  } else if (
    event.target.nextElementSibling.children[0].className === "dhl-delivery"
  ) {
    deliveryFee.innerHTML = "$500"
  }
}
deliveryWrapper.addEventListener("click", processDeliveryFee)

// 處理總花費金額
function processTotalAmount() {
  const sum = document.querySelector(".sum")
  // sum.innerHTML = "0"
  // todo 各產品小計加總
  // todo 運費
  // todo total amount
  let totalAmount = 0
  productsInCart.forEach((product) => {
    totalAmount += product.unitPrice * product.quantity
    // return totalAmount
  });

  if ((deliveryFee.innerHTML = "$500")) {
    totalAmount += 500
  } else if ((deliveryFee.innerHTML = "免費")) {
    totalAmount += 0
  }
  return totalAmount
  sum.innerHTML = totalAmount.toLocaleString()
}
