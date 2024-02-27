const Colors = ["Red", "Orange", "Yellow", "Green", "Blue", "purple"];
const Car = {Type:"Tesla", engine:"Electric", color:"Black"};

let ColorP = "";
let CarType = "";

for(let x of Colors) {
    ColorP += x + "<br>";
}

for(let x in Car) {
    CarType += Car[x] + "<br>";
}

document.getElementById("Colors").innerHTML = ColorP;
document.getElementById("Car").innerHTML = CarType;