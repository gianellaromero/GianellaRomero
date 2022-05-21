//verbos http
let ejemplo={
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
      {
        "name": "capitan america",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": [
          "Radiation resistance",
          "Turning tiny",
          "Radiation blast"
        ]
      },
      {
        "name": "iron man",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes"
        ]
      },
      {
        "name": "sub-zero",
        "age": 1000000,
        "secretIdentity": "Unknown",
        "powers": [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel"
        ]
      }
    ]
    
  }
   //console.log(ejemplo.members[1].name)
  //console.log(ejemplo.members[2].powers[1])
  //mostrar los poderes
  //mostrar los poderes de los +35
  //cuando apriete el boton que aparezca el nombre del superheroe +100 años y otro boton quue cuando lo aprieto se borra el nombre
  //for (let i=0; i<ejemplo.members.length; i++)
  //{
      //  if (ejemplo.members[i].age>35){
    //console.log(ejemplo.members[i].powers)}
    // }
 // }
       function superheroe()
       {
         for (let i=0; i<ejemplo.members.length; i++){
          if (ejemplo.members[i].age>100){
         mayor = ejemplo.members[i].name}
         }
       document.getElementById("resul").innerHTML="Nombre: "+ mayor;
      }
      function volver(){
        document.getElementById("resul").innerHTML="";
      }

    
    

