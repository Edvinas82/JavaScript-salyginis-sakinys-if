let x = +prompt("Įveskite pirmą skaičių");
let y = +prompt("Įveskite anrą skaičių");
skaicius = (x, y);
console.log("mazesnisDidesnisIrlygusSkaicius" + skaicius);

function mazesnisDidesnisIrLygusSkaicius(x, y) {
    if (x > y) {
        return "-1";
    }
    else if (x = y) {
        return "0";
    }

    else if (x < y) {
        return "1";
    }
    
}