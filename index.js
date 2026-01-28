// Put your code here
const display = getElementById("display-total");

let total = 0;

function addTotal(value) {
    total += value;

    document.getElementById("total").textContent = total.toLocaleString("en-US");
}

