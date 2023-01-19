function copiar() {
    navigator.clipboard.writeText(
        document.getElementById("mensaje").value
    );
}
document.querySelector("#boton-copiar").addEventListener("click", copiar);