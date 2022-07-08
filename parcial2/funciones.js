let libro1 = {
    id: 1,
    autor: "Mark Twain",
    titulo: "El principito",
    stock: 30,
    valor: 100,
    editorial: "LA FLOR"
}
let libro2 = {
    id: 2,
    autor: "Jorge Luis Borges",
    titulo: "El naufrago",
    stock: 5,
    valor: 10,
    editorial: "CASA EDIT"
}
let libro3 = {
    id: 3,
    autor: "Gabriel Garcia Marquez",
    titulo: "Estudio en escarlata",
    stock: 50,
    valor: 30,
    editorial: "EL CABILDO"
}
let libro4 = {
    id: 4,
    autor: "Julio Cortazar",
    titulo: "Muerte de una cronica anunciada",
    stock: 2,
    valor: 90,
    editorial: "LA FLOR"
}
let libro5 = {
    id: 5,
    autor: "William Shakespeare",
    titulo: "Titanic",
    stock: 1,
    valor: 190,
    editorial: "LIBRERIA"
}
const libros = [libro1, libro2, libro3, libro4, libro5]

function existe() {
    let aux_id = document.getElementById("dato").value;
    var libro_existe = Boolean()
    var autor;
    var titulo;
    var stock;
    var valor;
    var valor_total;
    var colores;
    //console.log(x)
    for (i = 0; i < libros.length; i++) { //recorro el array socios para saber si el id ingresado está o no
        //console.log(socios[i].dni);
        if (libros[i].id == aux_id) {   //verifico si el dni en la posicion del momento es igual al valor que ingrese 
            //(si es true, asigno variables para despues mostrar por pantalla)
            libro_existe = Boolean(true);
            autor = libros[i].autor
            titulo = libros[i].titulo
            stock = libros[i].stock
            valor = libros[i].valor
            editorial = libros[i].editorial


            var aux = valor * 0.20
            var aux2 = valor * 0.05
            if (stock <= 5) {
                colores = "red"
            }
            if (stock > 5) {
                colores = "green"
            }
            if (valor >= 100) {
                valor_total = valor - aux
            }
            else {
                valor_total = valor
            }

            if (editorial == "LA FLOR") {
                valor_total = valor_total - aux2
            }
            else {
                valor_total = valor_total
            }
        }
    }
    console.log("libro_existe " + libro_existe);
    if (libro_existe) {
        `<p>`
        document.getElementById("libros").innerHTML = " Autor: " + autor + `<br>` + "Titulo: " + titulo + `<br>` + "Valor: $" + valor_total
        document.getElementById("stock_c").innerHTML = "Stock: " + stock
        document.getElementById("stock_c").style.background = colores;
    }
    else {
        document.getElementById("libros").innerHTML = "Libro no encontrado o no disponible";
        document.getElementById("stock_c").innerHTML = "";


    }
}




    //si  existe autor titulo stock