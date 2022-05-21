function sumar(num1,num2) {
let resultado = num1+num2;
console.log(resultado);
}

function sumar1(){

    let numb1 = document.getElementById("numero_a").value; 
    let numb2 = document.getElementById("numero_b").value;
    console.log(numb1);
    console.log(numb2);
    let resul = Number(numb1) + Number(numb2);
   console.log (resul);

   /*if (numb1>numb2){
     (numb1);
     alert ("a es mayor");
    }
   else if (numb2>numb1){
    (numb2);
     alert ("b es mayor");
   }*/
    document.getElementById("r").innerHTML="Resultado: " + resul;
   
}
