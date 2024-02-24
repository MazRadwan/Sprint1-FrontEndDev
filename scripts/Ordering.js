//Prices and quantites of each item
var prices = [9.99, 7.99, 9.99, 8.99, 5.99, 4.99, 6.99, 19.99, 8.99];
var quantities = [0, 0, 0, 0, 0, 0, 0, 0, 0];

//Function to update quantity and total
function update(id, operation) {
  var index = parseInt(id.charAt(id.length - 1)) - 1;

  if (operation === "add") {
    quantities[index]++;
  } else if (operation === "remove" && quantities[index] > 0) {
    quantities[index]--;
  }

  document.getElementById("Quantity" + (index + 1)).innerText =
    quantities[index];
  updateTotal();
}

//Function to update total price
function updateTotal() {
  var total = 0;
  for (var i = 0; i < quantities.length; i++) {
    total += quantities[i] * prices[i];
  }
  document.getElementById("Total").innerText = "Total: $" + total.toFixed(2);
}

//Adding listeners to buttons
for (var i = 1; i <= 9; i++) {
  document.getElementById("Add" + i).addEventListener("click", function () {
    update(this.id, "add");
  });
  document.getElementById("Remove" + i).addEventListener("click", function () {
    update(this.id, "remove");
  });
}

//Logic may be less efficient because brain do python thinking
