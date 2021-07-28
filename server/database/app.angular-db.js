//RESERVADO PARA DATOS.HTML
var app = angular.module("app", []); //importacion de modulos

app.controller("base_de_datos", function($scope){ //funcion de nuevo controlador
    var datosRadios = this;
    var n=500;

    datosRadios.emisoras =[
        {id:1, nombre:"Onda Cero", potencia: 500, ubicacion:" Madrid"}
    ];
    datosRadios.ag=[];

    datosRadios.addRadio= function(){
        var nombre=datosRadios.nombre;
        var potencia = datosRadios.potencia;
        var ubicacion = datosRadios.ubicacion;

        if (nombre != " " &&  potencia !="" && ubicacion !=""){

        }
    }
});
