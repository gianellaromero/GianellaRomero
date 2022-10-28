
 function mostrar(){
    let id = document.getElementById("dato_id").value;
 console.log (id);
    fetch("https://rickandmortyapi.com/api/character/"+id)
.then(data=>data.json())
.then (data=>{
    let personaje = `
    Id: ${id} <br>
    Nombre:  ${data.name} <br>
    Estado: ${data.status} <br>
    Sexo: ${data.gender} <br>
    Origen: ${data.origin.name} <br>
    Especie: ${data.species} <br>
    Tipo: ${data.type} <br>
    Ubicación: ${data.location.name}<br>
    Foto: <img src="${data.image}">`
    document.getElementById("dato").innerHTML= personaje;
    
        document.getElementById("id").value= id;
        document.getElementById("nombre").value= data.name;
        document.getElementById("estado").value= data.status;
        document.getElementById("sexo").value= data.gender;
        document.getElementById("origen").value= data.origin.name;
        document.getElementById("especie").value= data.species;
        document.getElementById("tipo").value= data.type;
        document.getElementById("ubicacion").value= data.location.name
        document.getElementById("foto").value= data.image;
})
    }