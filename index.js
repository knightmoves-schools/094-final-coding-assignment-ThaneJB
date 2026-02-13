// Put your code here
const display = document.getElementById("display-sum");

let total = 0;

function addTotal(value) {
    total += value;

    document.getElementById("total").textContent = total.toLocaleString("en-US");
}
