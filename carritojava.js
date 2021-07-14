// Función para almacenar datos del pedido //
$("#pedido").change(() => {
    const nombreYApellido = document.querySelector("#formGroupExampleInput1").value;
    const direccion = document.querySelector("#formGroupExampleInput2").value;
    const celular = document.querySelector("#formGroupExampleInput3").value;

    sessionStorage.setItem("Nombre", nombreYApellido);
    sessionStorage.setItem("Direccion", direccion);
    sessionStorage.setItem("Celular", celular);
});

// Evento para confirmar pedido y notificar al usuario //
$("#confirmarPedido").click(() => {
        swal("Listo!");
        $("#pedido").trigger("reset");
});

// Input para volver a inicio // 
$("#inputInicio").val("Ir a inicio para otra cita");

inputInicio.className = "btn btn-dark"

$("#inputInicio").click(() => {
    window.location.assign("https://ivanliserre.github.io/doctorfeelgood/")
});

// Estilos CSS mediante jQuery //
$("#confirmarPedido").css({
    "font-size": "120%",
    "letter-spacing": "2px",
    "text-indent": "12px"
}); 

$("#inputInicio").css({
    "color": "whitesmoke",
    "font-size": "120%",
    "letter-spacing": "1px"
});