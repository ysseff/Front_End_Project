const deleteBtn1 = document.getElementById("remove-btn1");
const deleteBtn2 = document.getElementById("remove-btn2");
const deleteBtn3 = document.getElementById("remove-btn3");

const price1 = document.getElementById("price1");
const price2 = document.getElementById("price2");
const price3 = document.getElementById("price3");
const qty1 = document.getElementById("qty1");
const qty2 = document.getElementById("qty2");
const qty3 = document.getElementById("qty3");
const subtotal1 = document.getElementById("subtotal1");
const subtotal2 = document.getElementById("subtotal2");
const subtotal3 = document.getElementById("subtotal3");

function getSubtotal(qty, price) {
  return Number(qty.value) * Number(price.textContent.replace("$", ""));
}

qty1.addEventListener("input", function () {
  let subtotal = getSubtotal(qty1, price1);
  subtotal1.innerText = "$" + subtotal;
});
qty2.addEventListener("input", function () {
  let subtotal = getSubtotal(qty2, price2);
  subtotal2.innerText = "$" + subtotal;
});
qty3.addEventListener("input", function () {
  let subtotal = getSubtotal(qty3, price3);
  subtotal3.innerText = "$" + subtotal;
});

function deleteRow() {
  const row = this.closest("tr");
  row.remove();
  console.log(this);
}

deleteBtn1.addEventListener("click", deleteRow);
deleteBtn2.addEventListener("click", deleteRow);
deleteBtn3.addEventListener("click", deleteRow);
