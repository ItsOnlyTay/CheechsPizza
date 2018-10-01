window.addEventListener("load", pageSetUp);

var pizzas = ["Cheese","Pepperoni", "Meat Lovers", "Vegetarian", "Buffalo Chicken"];

function pageSetUp(){
    for (i=1; i<11; i++){
    document.getElementById("1-10").innerHTML += `<option value="${i}">${i}</option>`;
    };
    for (j=0; j<pizzas.length; j++){
        document.getElementById("Type").innerHTML += `<option value="${pizzas[j]}">${pizzas[j]}</option>`;
    }
}

function order(){
    var name = document.getElementById("Name").value;
    var phone = document.getElementById("Phone").value;
    var numPizza = document.getElementById("1-10").value;
    var pizzaType = document.getElementById("Type").value;
    var cost =  (parseInt(numPizza) * 10.00);
    var tax = (cost* .076)
    cost = tax + cost;
    document.getElementById("OrderConf").innerHTML = `${name}</br>${phone}</br>${numPizza}</br>${pizzaType}</br>${cost}`;
}