let number1 = prompt("Enter a number")
let number2 = prompt("Enter a second Value")
number1 = +number1;
number2 = +number2;
let sum = number1 + number2
let dif = number1 - number2
let prod = number1 * number2
let quo = number1 / number2
let mod = number1 % number2

document.getElementById("sum").innerHTML += sum
document.getElementById("dif").innerHTML += dif
document.getElementById("prod").innerHTML += prod
document.getElementById("quo").innerHTML += quo
document.getElementById("mod").innerHTML += mod
