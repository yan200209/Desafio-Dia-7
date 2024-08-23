let Valor1="";
let Valor2="";
let Operacion="";
let resultado="";
function suma(Valor1,Valor2){
    return Valor1 + Valor2;
}
function resta(Valor1,Valor2){
    return Valor1 - Valor2;
}
function Multiplicacion(Valor1,Valor2){
    return Valor1 * Valor2;
}
function division(Valor1,Valor2){
    if (Valor2 !== 0) {
        return Valor1 / Valor2;
    } else {
        return "Error: División por cero";
    }
}

while (Operacion !== "Salir" && Operacion !== "5") {
    Operacion = prompt("¿Qué operación desea realizar: \n'1.Suma'\n'2.Resta'\n'3.Multiplicación'\n'4.División'\n'5.Salir'");
    if(Operacion !== "Salir" && Operacion !== "5"){
        Valor1=parseInt(prompt("Ingrese el Primer numero: "));
        Valor2=parseInt(prompt("Ingrese el Segundo numero: "));
    }
    let resultado;
    switch (Operacion) {
        case "1":
        case "Suma":
            resultado = suma(Valor1, Valor2);
            alert("El Resultado de la Suma es: " + resultado);
            break;
        case "2":
        case "Resta":
            resultado = resta(Valor1, Valor2);
            alert("El Resultado de la Resta es: " + resultado);
            break;
        case "3":
        case "Multiplicación":
            resultado = Multiplicacion(Valor1, Valor2);
            alert("El Resultado de la Multiplicación es: " + resultado);
            break;
        case "4":
        case "División":
            resultado = division(Valor1, Valor2);
            alert("El Resultado de la División es: " + resultado);
            break;
        case "5":
        case "Salir":
            alert("¡Hasta la próxima!");
            break;
        default:
            alert("¡Operación no reconocida!");
    }
}