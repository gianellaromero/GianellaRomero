function arreglo() {
  let miarreglo = [99, 4, 34, 93, 1];

  /*ordenar 
mostrar por consola los numeros mayores a 50
*/
  Number = miarreglo;
  console.log("mi arreglo: " + miarreglo);
  console.log(
    "arreglo ordenado: " +
      miarreglo.sort(function (a, b) {
        return a - b;
      })
  );

  for (let i = 0; i < miarreglo.length; i++) {
    if (miarreglo[i] > 50) {
      console.log("mayor a 50: " + miarreglo[i]);
    }
    if (miarreglo[i] % 2 == 0) {
      console.log("numero par: " + miarreglo[i]);
    }
  }
}
