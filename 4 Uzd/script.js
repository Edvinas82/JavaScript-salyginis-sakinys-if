x = +prompt("Įveskite pirmą skaičių");
y = +prompt("Įveskite antrą skaičių");
sandauga = x * y;
suma = x + y;
console.log(arDaugiau(sandauga, suma));



function arDaugiau(sandauga, suma) {
    if (sandauga > suma) {
        return true;
    }
    else (sandauga <= suma)
        return false;
    
}
