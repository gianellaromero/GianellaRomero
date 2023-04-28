<?php
require_once("Empleado.php");

class Comercial extends Empleado
{
    public $comision;
    public function setComision($comision)
    {
        $this->comision=$comision;
    }
        public function Plus()
        {
            if ($this->edad>30 && $this->comision>200)
            {
                $this->salario=$this->salario+self::PLUS;
            }
            echo 'Empleado Comercial';
            echo '<br>Nombre : '.$this->nombre; 
            echo '<br>Apellido: '.$this->apellido;
            echo '<br>Edad: '.$this->edad;
            echo '<br>Salario: $'.$this->salario;
            echo '<br>Comision: '.$this->comision;
        }

}
?>