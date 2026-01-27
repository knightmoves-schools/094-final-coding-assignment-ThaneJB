// Put your code here
const display = getElementById("display-total");

const itemOne = getElementById("add-cost-34");

const itemTwo = getElementById("add-cost-60");

const itemThree = getElementById("add-cost-70");

let total = 0;

function addTotal(value) {
    total += value;

    document.getElementById("total").textContent = total.toLocaleString("en-US");
}
