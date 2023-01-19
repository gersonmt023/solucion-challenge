function desencriptar() {
    var texto = document.getElementById("text-area").value;
    texto = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
    document.getElementById("mensaje").value = texto;
    document.getElementById("mensaje").style.background = "white";
}

var boton = document.getElementById("btn-desencriptar");
boton.onclick = function () {
    if(document.getElementById("text-area").value.match(/^[a-z ]*$/)) {
        desencriptar();
    } else {
        alert("Solo se permiten letras minusculas, sin caracteres especiales.")
    }
   
};