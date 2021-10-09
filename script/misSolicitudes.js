var botonSolicitudes = document.querySelector(".botonSolicitudes");

botonSolicitudes.addEventListener("click", function(){
    window.open(`solicitudes.html`, `_self`);
})

var salir = document.querySelector(".volver");

salir.addEventListener("click", function() {
    window.open(`paginaPrincipal.html`, `_self`)
})