fetch("https://randomuser.me/api")
.then(data=>data.json())
.then(data=>
    console.log(data.results))
function mostrar(){

fetch("https://randomuser.me/api")
.then(data=>data.json())
.then (data=>{

    document.getElementById("n").innerHTML = "Nombre: " + data.results[0].name.first
    document.getElementById("a").innerHTML = "Apellido: " + data.results[0].name.last
    document.getElementById("s").innerHTML = "Sexo: " + data.results[0].gender
    document.getElementById("e").innerHTML = "Edad: " + data.results[0].dob.age
    document.getElementById("m").innerHTML = "Email: " + data.results[0].email
    document.getElementById("i").innerHTML = "Foto: "+ `<img src="${data.results[0].picture.medium}"> `})
}
  



function reset(){
     document.getElementById("n").innerHTML = ""
     document.getElementById("a").innerHTML = ""
     document.getElementById("s").innerHTML = ""
     document.getElementById("e").innerHTML = ""
     document.getElementById("m").innerHTML = ""
                 }