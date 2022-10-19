let x = +prompt("Įveskite pirmą skaičių");
let y = +prompt("Įveskite anrą skaičių");
console.log(mazesnisDidesnisIrLygusSkaicius(x, y));

function mazesnisDidesnisIrLygusSkaicius(x, y) {
    if (x > y) {
        return -1;
    }
    else if (x == y) {
        return 0;
    }

    else {
        return 1;
    }
    
}