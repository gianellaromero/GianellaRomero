/*const persona ={
    nombre:"Gianella",
    apellido:"Romero",
    dni:222333,
    edad: 20,
    estudios: ["primarios" , "secundarios"],
    extranjero: false
}
const persona1={
    nombre: "yane",
    apellido: "r",
    dni: 44133,
    edad: 23,
    estudios: ["terciarios"],
    extranjero: true
}
console.log(persona);
console.log("mostrar apellido " ,persona.apellido);
persona.domicilio="25 de mayo 3377";
console.log(persona);
console.log(persona1);
console.log("la suma de las edades es: ",persona.edad+persona1.edad);
const iva=1.21;
const iva_general=1.43;

const item1 ={
   precio: 1900,
   cantidad: 35,
   impuesto: iva,
   calculartotal:function(){
       return this.precio*this.cantidad*this.impuesto
   }
}
const item2 ={
    precio: 2580,
    cantidad: 8,
    impuesto: iva_general,
    calculartotal:function(){
        return this.precio*this.cantidad*this.impuesto
    }
}
 const factura={
     item1: item1,
     item2:item2,
     calculartotal:function(){
        return this.item1.calculartotal()+this.item2.calculartotal()
}
}
 //console.log(factura)
/*console.log(factura.item1.precio*factura.item1.cantidad*factura.item1.impuesto+factura.item2.precio*factura.item2.cantidad*factura.item2.impuesto);*/
//console.log(item1.calculartotal());
//console.log(factura.calculartotal());

//tres objetos que se llamen persona

//cuarto objeto que se llame mostrarpersona
//en cada persona una funcion que devuelva apellido,nombre
//funcion que devuelva el nombre completo
//todas las personas +18

const persona1 = {
  nombre: "pablo",
  apellido: "diaz",
  edad: 33,
  sexo: "masculino",
};
const persona2 = {
  nombre: "violeta",
  apellido: "robles",
  edad: 12,
  sexo: "femenino",
};
const persona3 = {
  nombre: "marta",
  apellido: "reyes",
  edad: 94,
  sexo: "femenino",
};
const mostrarpersona = {
  persona1: persona1,
  persona2: persona2,
  persona3: persona3,
  mostrar: function () {
    return (
      "Apellido y Nombre ordenados: " +
      this.persona1.apellido +
      "," +
      this.persona1.nombre +
      " - " +
      this.persona2.apellido +
      "," + 
      this.persona2.nombre +
      " - " +
      this.persona3.apellido +
      "," +
      this.persona3.nombre
    );
  },
};
console.log(mostrarpersona.mostrar());
if (persona1.edad > 18) {
  console.log(persona1.nombre + " Es mayor a +18");
}
if (persona2.edad > 18) {
  console.log(persona2.nombre + " Es mayor a +18");
}
if (persona3.edad > 18) {
  console.log(persona3.nombre + " Es mayor a +18");
}
