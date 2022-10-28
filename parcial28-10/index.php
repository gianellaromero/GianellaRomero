<?php
require_once("Persona.php");
require_once("Tarjeta.php");

$persona = new Persona("Javier","19","1111111","222222222");
$tarjeta = new Tarjeta("Banco Nacion","28/04/2023");


echo $persona->mostrar();
echo "<br>";
echo $tarjeta->plan($persona->edad);

?>
