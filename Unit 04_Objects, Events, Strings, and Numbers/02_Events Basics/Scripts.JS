function poke() {
    document.getElementById('DoNot').innerHTML = "OWWW WHYYY"
}

function DoNot() {
    document.getElementById('DoNot').innerHTML = "NO DON'T PLEASE"
}

function Thanks() {
    document.getElementById('DoNot').innerHTML = "Phew, thank you."
}

function Talk() {
    let Message = prompt("Say Hi!")
    if (Message == "Hi") {
        document.getElementById('Words').innerHTML = "How are you?"
    } else {
        document.getElementById('Words').innerHTML = "?????"
    }
}

function Greet() {
    document.getElementById('Words').innerHTML = "Greetings youg Portal Traveler"
}