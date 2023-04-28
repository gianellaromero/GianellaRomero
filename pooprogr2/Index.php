<?php
require_once("Repartidor.php");
require_once("Comercial.php");
$nombre = $_POST["nombre"];
$apellido = $_POST["apellido"];
$edad = $_POST["edad"];
$salario = $_POST["salario"];
$empleado = $_POST["empleado"];

if ($empleado == "Repartidor")
{
    $zona = $_POST["zona"]; 
    $repartidor = new Repartidor($nombre,$apellido,$edad,$salario);
    $repartidor->setZona($zona);
    $repartidor->Plus();
}
        if ($empleado == "Comercial")
        {
            $comision = $_POST["comision"];
            $comercial = new Comercial($nombre,$apellido,$edad,$salario);
            $comercial->setComision($comision);
            $comercial->Plus();

        }







?>