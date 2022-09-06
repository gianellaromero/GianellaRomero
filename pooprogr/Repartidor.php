<?php
require_once("Empleado.php");
class Repartidor extends Empleado {
    public $zona;
    public function setZona($zona){
        $this->zona=$zona;
        }
        public function Plus(){

            if ($this->edad<25 && ($this->zona =="A" or $this->zona=="a")){
                $this->salario=$this->salario+self::PLUS;
            }
            echo'<br>';
            echo '<br>Empleado Repartidor';
            echo '<br>Nombre : '.$this->nombre; 
            echo '<br>Apellido: '.$this->apellido;
            echo '<br>Edad: '.$this->edad;
            echo '<br>Salario: $'.$this->salario;
            echo '<br>Zona: '.$this->zona;
        }
}
?>