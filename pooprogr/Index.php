<?php
require_once("Repartidor.php");
require_once("Comercial.php");

$repartidor = new Repartidor("Gianella","Romero","20 ","10000");
$comercial = new Comercial("Lionel","Messi","35","5000");
$comercial->setComision("400");
$comercial->Plus();
$repartidor->setZona("A");
$repartidor->Plus();


/*echo $repartidor->getName();
echo $repartidor->getApellido();
echo $repartidor->getEdad();
echo $repartidor->getSalario();
echo "<br>";*/

/*echo $comercial->getName();
echo $comercial->getApellido();
echo $comercial->getEdad();
echo $comercial->getSalario();*/

?>