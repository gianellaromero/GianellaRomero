
    function valor(valor) {
        if (valor == "Comercial") {
            document.getElementById("tipo").innerHTML = 'Comisión: <br> <input type="text" name="comision" style="font-size: 10px;"></input>';
        } else{}
        if (valor == "Repartidor") {
            document.getElementById("tipo").innerHTML= 'Zona: <br> <input type="text" name="zona"style="font-size: 10px;" ></input>';
        } else{}
        if(valor=="Seleccionar"){
         document.getElementById("tipo").innerHTML = ""
    
        
    }}