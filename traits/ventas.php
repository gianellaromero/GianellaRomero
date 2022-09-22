<?php
require_once("Tienda.php");

$producto = $_POST["producto"];
$precio = $_POST["precio"];
$stock = $_POST["stock"];
$cantidad = $_POST["cantidad"];

$objProducto = new Tienda();
$objProducto->setProducto($producto, $precio, $stock);
$objProducto->setCarrito($producto, $cantidad);

//echo $objProducto->intStock;
if ($cantidad<=($objProducto->intStock) && $cantidad>0){
    $objProducto->setStock($cantidad);
    echo $objProducto->getProducto();
    echo $objProducto->getCarrito();
}else{
    echo "error stock no disponible";
}

//realizar una pantalla donde arriba muestre el producto,
// la despcripcion y precio del mismo. Y abajo
// El usuario pueda elegir la cantidad.

//Un boton de enviar y cuando elijo la cantidad me tiene que aparecer
//como quedaria.  Alfajor y valor van a tener que ir en producto:

//validar si tengo stock, si la cantidad pedida excede el stock que avise.




?>


