// Saludo inicial //
$(() => {
    localStorage.setItem("bienvenida", "¡Hola! Valida tu edad a continuación para solicitar un turno con el Doctor");
    const mensaje = localStorage.getItem("bienvenida");
    alert(mensaje);
});

// Acceso a input y función para solicitar edad //
$("#inputEdad").val("Validar Edad");

inputEdad.className = "btn btn-dark";

$("#inputEdad").click((validarEdad) => {
    const edad = confirm("Sos mayor de 18 años?");
    if (edad) {
    swal ("Adelante!");
    }
    else {
    swal ("Lo sentimos! El Doctor no atiende a menores de edad.");
    }
    $("#inputEdad").fadeOut()
    $("#inputEdad").val("Gracias!");
    $("#inputEdad").fadeIn();
    $("#inputEdad").fadeOut()
    });

// Evento clickeable en class "categorías" con Jquery // 
$(".categoria1").click(() => {
    swal("Para su cuadro de sed el Dr. cuenta con 3 variedades de cerveza Temple!");
});
$(".categorias").click(() => {
    swal("Para un paladar fino como el suyo encontrará vino Vendimiario o Whisky del tío Jack!");
});

//Llamada JSON y Array de bebidas //
const jsonLocal = './json/data.json';

 $.getJSON(jsonLocal, function(respuesta, estado) {
    const datos = respuesta 
    console.log(respuesta);
    pintarCardsBebidas(datos); 
});

// Función para llamar array de productos-bebidas desde archivo json local //
 function pintarCardsBebidas (Bebidas) {
    for(let element of Bebidas){
    $(".productos").append(`<div class="card text-white bg-dark mb-3">
    <div class="card-body">
    <style="max-width: 18rem;">
    <div><h5 class="card-title">${element.titulo}</h5>      
    <p class="card-text">${element.variedad}</p>
    <p class="card-text">$${(element.precio)}</p>
    <p class="card-text">El precio con envío es de $${costoEnvio(element.precio)}</p>
    <a id="botonCarrito${element.id}" class="btn btn-success">Agregar al carrito</a>
    <button onclick="wsp(${element.id})" class="btn btn-success">Consultar stock</button>
    </div>`);
    // Evento on click para confirmar pedido //
    $(`#botonCarrito${element.id}`).click(() => {
        window.location.assign('/carrito.html')
        swal("Vamos por esa receta!");
    });

    // Local Storage y JSON de Bebidas//
    const guardarArray = (clave, valor) => {localStorage.setItem(clave, valor)};
    for (const Bebida of Bebidas) {
    guardarArray("stockBebidas", JSON.stringify(Bebidas));
} 
} 
} 

// Función calcular costo envío // 
function costoEnvio(precio) {
    return precio + 100;
}  

// API Whatsapp // 
function wsp(string){
    window.open(`https://api.whatsapp.com/send/?phone=3412108143&text= ¡Hola Doc! ¿Tendrías stock de esta bebida? ${string}`, "_blank")
}  

// Animación entrada de imagen del doctor con jQuery //
const entradaDoc = document.querySelector('.fotoDoctor');
entradaDoc.classList.add('animate__animated', 'animate__tada');
