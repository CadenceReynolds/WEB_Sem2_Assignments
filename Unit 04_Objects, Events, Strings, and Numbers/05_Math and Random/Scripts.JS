function takeSquareRoot(){
    let number = +document.getElementById("input1").value;

    let squareRoot = Math.sqrt(number);
    document.getElementById("result").innerHTML = squareRoot;
}

function RoundDown(){
    let number = +document.getElementById("input1").value;
    let Floor = Math.floor(number);

    document.getElementById("result").innerHTML = Floor;
}

function Power(){
    let firstnumber = +document.getElementById("input1").value;
    let secondnumber = +document.getElementById("input2").value;

    let power = Math.pow(firstnumber, secondnumber)
    document.getElementById("result").innerHTML = power;

}

function Absolute(){
    let number = +document.getElementById("input1").value;

    let Absoval = Math.abs(number)
    document.getElementById("result").innerHTML = Absoval;
}