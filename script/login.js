var verificar = function() {
    var dni = document.getElementById("dni").value;
    var contrasenia = document.getElementById("contrasenia").value;

    if(dni === "" || contrasenia === "") {
        alert("Todos los campos son obligatorios");
        return false;
    } else if (isNaN(dni)) {
        alert("El DNI es solo números");
        return false;
    } else if (dni.length != 8) {
        alert("El DNI debe contener ocho digitos");
        return false;
    } else if(contrasenia.length < 4) {
        alert("La contraseña debe contener al menos cuatro caracteres");
        return false;
    } else if(!validarNumeros(contrasenia)) {
        alert("La contraseña debe tener al menos un numero");
        return false;
    } else if(!validarCaracteresValidos(contrasenia)) {
        alert("La contraseña no debe contener caracteres especiales")
        return false;
    } else if(!validarLetras(contrasenia)) {
        alert("La contraseña debe contener almenos una letra")
        return false;
    }
    
    window.open("paginaPrincipal.html", `_self`);
};


function validarNumeros(contraseniaAValidar) {
    return contraseniaAValidar.search(/[0-9]/) != -1;
} 

function validarCaracteresValidos(contraseniaAValidar) {
    return contraseniaAValidar.search( /^[0-9a-zA-Z]+$/) != -1;
}

function validarLetras(contraseniaAValidar) {
    return contraseniaAValidar.search(/[a-zA-Z]/) != -1;
}

document.getElementById("ingresar").addEventListener("click", verificar);
