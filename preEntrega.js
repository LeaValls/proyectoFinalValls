do {
    let nombre = prompt("Contanos como te llamas")
    if (nombre == "") {
        alert("Ese no es un nombre, contanos como te llamas")
    } else {
        alert("Hola" + " " + nombre)
    }
    let contacto = prompt("Dejanos tu correo")
    alert("Vamos a jugar!")
    let ruleta = parseInt(prompt("Indica un numero del 1 al 10 para ver que premio tenes"))
    while (isNaN (ruleta))
    ruleta = parseInt(prompt("Indica un numero del 1 al 10 para ver que premio tenes"))
    
    if (ruleta > 10 || ruleta < 1) {
        alert("Lastima! te perdiste el regalito por no ingresar un numero correcto")    
    }
    else {
        switch (ruleta) {
            case 1:
            case 4:
            case 8:
            case 10:
                alert("Lastima! la proxima quizas tengas mas suerte")
                break
            case 2:
            case 5:
            case 7:
                alert("Te ganaste un 20% en toda la tienda!")
                break
            case 3:
            case 6:
            case 9:
                alert("Ganaste un 2x1 en toda la tienda!")
                break
        }
    }
} while (ruleta != "0")