var app = angular.module("app", []);
//RESERVADO PARA form.HTML
app.controller("controlador", function($scope){
    var lista = this;
    var n=3;

    lista.alumnos = [
        {id :1, nombre: " Lionel" , comentario: "HOLA MUNDO, Comentario de prueba con AngularJS 8"}         
    ];
    lista.agenda = [];
    
    lista.addAlumno = function(){
        var nombre = lista.nombre;
        var comentario = lista.comentario;
    
        if (nombre != " " &&  comentario !=""){
            n++;
            lista.alumnos.push({id: n, nombre:nombre,comentario:comentario});
            lista.nombre='';
            lista.comentario = '';          
        }
    }
    
    lista.addAlumnoAgenda = function(){
        var n=1;
        var id = lista.alumnoSeleccionado;
    }
});
