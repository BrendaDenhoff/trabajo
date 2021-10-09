var calendarioAcademico = document.querySelector(".calendario");

calendarioAcademico.addEventListener("click", function(){
    window.open(`http://www.unahur.edu.ar/es/calendario-academico`);
});

var siuGuarani = document.querySelector(".siu");

siuGuarani.addEventListener("click", function(){
    window.open(`https://servicios.unahur.edu.ar/unahur3w/acceso`)
});

var turno = document.querySelector(".turnos");

turno.addEventListener("click", function(){
    window.open(`https://turnos.unahur.edu.ar/login`)
});

var solicitudes = document.querySelector(".solicitudes");

solicitudes.addEventListener("click", function() {
    window.open(`misSolicitudes.html`, `_self`);    
})