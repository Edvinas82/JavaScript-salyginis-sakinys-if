let  x = +prompt("Įveskite skaičių");
console.log(kartotinis(x));

function kartotinis(x) {
    if (x%5 == 0) {
        return true;
    }
    
    else {
        return false
    }

}