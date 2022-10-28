<?php
require_once("conexion.php");
$id = $_POST["id"];
$nombre = $_POST["nombre"];
$estado = $_POST["estado"];
$sexo = $_POST["sexo"];
$origen = $_POST["origen"];
$especie = $_POST["especie"];
$tipo = $_POST["tipo"];
$ubicacion = $_POST["ubicacion"];
$foto = $_POST["foto"];


$consulta = "SELECT * from personajes where id_personaje=".$id;
$resultado = mysqli_query($conexion,$consulta);
//var_dump($resultado)."<br>";
$array = $resultado->num_rows; //array me muestra el numero de filas iguales que hay al registro ingresado
//print $array;
if ($array > 0) {
       echo "El personaje ya fue ingresado";
}
else {
$insertar = "INSERT INTO personajes (id_personaje, nombre, estado, sexo, origen, especie, tipo, ubicacion, foto) VALUES (?,?,?,?,?,?,?,?,?)";
$stmt= $conexion->prepare($insertar);
$stmt->bind_param('issssssss',$id, $nombre, $estado, $sexo, $origen, $especie, $tipo, $ubicacion, $foto);
$stmt->execute();
print "Registro ingresado con éxito";}


?>
