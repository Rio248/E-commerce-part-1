let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

cartIcon.onclick = () => {
  cart.classList.add("active");
};
closeCart.onclick = () => {
  cart.classList.remove("active");
};

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  let removeCartButtons = document.getElementById("cart-remove");
  console.log(removeCartButtons);
  for (let i = 0; i < removeCartButtons.length; i++) {
    let button = removeCartButtons[i];
    button.addEventListener("click", removeCartItem);
  }
  let quantityInputs = document.getElementsByClassName('cart-quantity');
  for (var i = 0; i < quantityInputs.length; i++) {
    let input = quantityInputs[i]
    input.addEventListener("change", quantityChanged);
  }
}


function removeCartItem(event) {
  let buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updateTotal();
}

function quantityChanged(event) {
  let input = event.target
  if  (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateTotal();
}

function updateTotal() {
  const cartContent = document.getElementsByClassName("cart-content")[0];
  const cartBoxes = cartContent.getElementsByClassName("cart-box");
  const total = 0;
  for (let i = 0; i < cartBoxes.length; i++) {
    const cartBox = cartBox[i];
    const priceElement = cartBox.getElementsByClassName("cart-price")[0];
    const quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
    const price = parseFloat(priceElement.innerText.replace("$", ""));
    const quantity = quantityElement.value;
    total = total + (price * quantity);

    document.getElementsByClassName('total-price')[0].innerText = '$' + total;
  }
}
