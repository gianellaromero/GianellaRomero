<?php
class Empleado
{
    public $nombre;
    public $apellido;
    public $edad;
    public $salario;
    CONST PLUS=300;
    public function __construct($nombre,$apellido,$edad,$salario){
            $this->nombre=$nombre;
            $this->apellido=$apellido;
            $this->edad=$edad;
            $this->salario=$salario;
            }
           
            public function getName(){
                return $this->nombre;
                }
            public function getApellido(){
                    return $this->apellido;
                }
             public function getEdad(){
                 return $this->edad;
                }
            public function getSalario(){
                 return $this->salario;
                }
             public function setName($nombre){
                $this->nombre=$nombre;
                }
            public function setApellido($apellido){
                 $this->apellido=$apellido;
                }
             public function setEdad($edad){
                  $this->edad=$edad;
                }
            public function setSalario($salario){
                $this->salario=$salario;
                }


}
?>