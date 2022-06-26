let socio1 = {
    apellido: "Parra",
    nombre: "Javier",
    edad: 41,
    facturas: 1,
    dni: 28358603
}
let socio2 = {
    apellido: "Gallardo",
    nombre: "Marcelo",
    edad: 44,
    facturas: 5,
    dni: 25673894
}
let socio3 = {
    apellido: "Di Maria",
    nombre: "Angelito",
    edad: 34,
    facturas: 3,
    dni: 29058604
}
let socio4 = {
    apellido: "Tevez",
    nombre: "Carlitos",
    edad: 39,
    facturas: 20,
    dni: 34567912
}
let socio5 = {
    apellido: "Messi",
    nombre: "Lionel",
    edad: 34,
    facturas: 7,
    dni: 26788603
}
const socios = [socio1, socio2, socio3, socio4, socio5]

function existe() {
    let aux = document.getElementById("dato").value; //obtengo el valor ingresado en la casilla dni del html y lo asigno a aux

    var x = Boolean() //variable booleana que identifica si el dni ingresado existe o no existe(true si existe, false si no existe)
    var aux1; //variable que va a contener el nombre del socio
    var aux2; ////variable que va a contener la factura del socio
    //console.log(x)
    for (i = 0; i < socios.length; i++) { //recorro el array socios para saber si el dni ingresado está o no
        //console.log(socios[i].dni);
        if (socios[i].dni == aux) {   //verifico si el dni en la posicion del momento es igual al valor que ingrese 
            //(si es true, asigno variables para despues mostrar por pantalla)
            x = Boolean(true);
            aux1 = socios[i].nombre
            aux2 = socios[i].facturas
        }
    }
    if (x) {
        if (aux2 < 4) {
            document.getElementById("color").innerHTML = " Nombre: " + aux1 + `<br>` + "Cant. Facturas: " + aux2
            document.getElementById("color").style.background = "green";
        }
        if (aux2 > 3 && aux2 < 6) {
            document.getElementById("color").innerHTML = " Nombre: " + aux1 + `<br>` + "Cant. Facturas: " + aux2
            document.getElementById("color").style.background = "yellow"
        }
        if (aux2 > 6) {
            document.getElementById("color").innerHTML = " Nombre: " + aux1 + `<br>` + "Cant. Facturas: " + aux2
            document.getElementById("color").style.background = "red"
        }
    }
    else { //si es false, que el dni ingresado no lo tiene ninguno de los socios muestro cartel "no existe"
        document.getElementById("color").innerHTML = "No Existe"
        document.getElementById("color").style.background = "red"
    }
}

/*
Buscar por el dni si el socio existe, en caso de no existir mostrar en rojo "no existe"
Si existe evaluar lo siguiente:
1- si tiene -3 facturas mostrar en verde 
2- si tiene +3 y -6 facturas mostrar en amarillo
3- si tiene +6 facturas mostrar en rojo
4- En todos los casos nombre y cantidad de facturas del socio.
*/