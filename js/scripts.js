const text = `Hola wuenas tardes`;

// Configuración de la velocidad de escritura
let index = 0;
const speed = 120; // Milisegundos entre cada letra

function mostrarModal() {
    const myModal = new bootstrap.Modal(document.getElementById('myModal'));
    myModal.show();
}

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typewriter-text").textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(mostrarModal, 1000);
    }
}

// Inicia el efecto de escritura cuando se carga la página
window.onload = typeWriter;


function enviarMensaje() {
    const link = 'https://api.whatsapp.com/send?phone=573103169625&text=%F0%9F%98%8DHola%20picioso,%20claro%20que%20tamo%20muamuamua%F0%9F%98%8D';
    location.href = link;
}






