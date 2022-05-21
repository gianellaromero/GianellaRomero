//leer como ejecutar paginas php , my sql ,apache , nginx

function mostrar(){
fetch("https://randomuser.me/api")
.then(data=>data.json())
.then (data=>{
    let nombre = data.results[0].name.first
    let apellido = data.results[0].name.last
    let sexo = data.results[0].gender
    let edad = data.results[0].dob.age
    let email = data.results[0].email
    let foto = data.results[0].picture.medium
    let latitud = data.results[0].location.coordinates.latitude
    let longitud= data.results[0].location.coordinates.longitude


   
    if (sexo=="female" && edad>=20 && edad<=100){
        var map = L.map('map').setView([latitud,longitud], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    }).addTo(map);

    var marker = L.marker([latitud,longitud]).addTo(map);

    let html= `Nombre: ${nombre} <br>
    Apellido: ${apellido} <br>
    Sexo: ${sexo} <br>
    Edad: ${edad} <br>
    Email: ${email} <br>
    Foto: <img src="${foto}"> <br>
    Latitud: ${latitud} <br>
    Longitud: ${longitud}`
    document.getElementById("html").innerHTML= html}
else{
    alert("Este usuario NO cumple los requisitos")}
    
            })
}
