var right_value = undefined
var left_value = undefined
var operator = undefined
var output = undefined
var clear = undefined

var numbers = document.getElementsByClassName('numbers')
for (i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function() {
        if (left_value == undefined)
            {left_value = Number(this.innerText)
            document.getElementById("left_value").innerHTML =  left_value}
        else
            {right_value = Number(this.innerText)
            document.getElementById("right_value").innerHTML = right_value}
    }) 
}

var operator = document.getElementsByClassName('operator')
for (i = 0; i < operator.length; i++) {
    operator[i].addEventListener("click", function() {
        operator = this.innerText
        document.getElementById("operator").innerHTML = operator
    })
}

var equals = document.getElementById("equals")
equals.addEventListener("click", function() {
    if (operator == "/")
    {output = left_value / right_value
        document.getElementById("output").innerHTML = "= " + output }


})

var operator = document.getElementById("operator")
equals.addEventListener("click", function() {
    if (operator == "+")
    {output = left_value + right_value
        document.getElementById("output").innerHTML = "= " + output }


})

var operator = document.getElementById("operator")
equals.addEventListener("click", function() {
    if (operator == "-")
    {output = left_value - right_value
        document.getElementById("output").innerHTML = "= " + output }


})

var operator = document.getElementById("operator")
equals.addEventListener("click", function() {
    if (operator == "*")
    {output = left_value * right_value
        document.getElementById("output").innerHTML = "= " + output }


})

var clear = document.getElementById("clear")
clear.addEventListener("click", function() {
  document.getElementById("output").reset();

})