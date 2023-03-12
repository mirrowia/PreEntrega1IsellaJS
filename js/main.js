function askNumber() {
    let number
    do{
        number = prompt("Vamos a jugar a adivinar el numero, elige una de las siguientes opciones: \n 1. Numero de una cifra del 0 al 9 \n 2. Numero de dos cifras del 0 al 99 \n 3. Numero de tres cifras del 0 al 999")
        if (number < 0 || number > 3 || isNaN(number)) {
            alert("Los datos ingresados no son las opciones mencionadas anteriormente, favor de elegir una de las opciones previas.")
        }
    }while (number < 0 || number > 3 || isNaN(number))
    return number
}

let userChoise = askNumber()

let tries
let number 
if (userChoise == 1) {
    tries = 3
    number = Math.floor(Math.random() * 9);
} else if (userChoise == 2) {
    tries = 6
    number = Math.floor(Math.random() * 99);
} else {
    tries = 10
    number = Math.floor(Math.random() * 999);
}

alert("Tienes " + tries + " intentos")

do{
    
    let userNumber = prompt("Ingresa un numero")
    if (userNumber == number) {
        alert("Adivinaste! El numero era " + number)
        break
    } else if(userNumber > number) {
        tries --
        alert("El numero a buscar es mas chico, te restan " + tries + " intentos.")
    } else if(userNumber < number) {
        tries --
        alert("El numero a buscar es mas grande, te restan " + tries + " intentos.")
    } else{
        alert("No entiendo tu respuesta, intentemoslo nuevamente.")
    }
    
    if(tries == 0){
        alert("No pudiste encontrar el numero. El numero que buscabas era: " + (number))
    }

}while(tries > 0 )

alert("Gracias por jugar. Puedes volver a intentarlo recargando la pagina.")

