const text = `🥰😍Hola menos días cosita con ojos🥰😍 hoy es un día muy picioso porque hoy hace 20 añitos nació la personita mas linda que he conocido🐼🐼 espero que hoy la pases muy bonito, que te diviertas que veas lo bonito que eres y entiendas el porque te amo tanto🐼😍 pero no solo hoy, quiero que sea cada dia, eres una personita increíble😎🤩 con capacidades increíbles y con unos sentimientos muy lindos🥺🥰 tanto yo como todos quienes te conocen saben lo valioso que eres para nuestras vidas 👸🏽👸🏽eres una personita que no se encuentra fácilmente 👩🏽‍❤️‍👨🏼 pienso siempre en el como nos conocimos 🐣🐣como al principio eras alguien que no esperaba que fuera a ser tan importante para mi🙈🙈eres mi tesorito, 🎆🎆eres la personita a la que quiero ver cumplir sus metas, sus sueños, sus logros,🏆🏅pero aparte de todo lo bueno 🐱🐱quiero ser quien este a tu lado en los malos momentos 😢🥺 quisiera poder expresar todo lo que siento por ti pero es difícil explicártelo con palabras😖quiero compartir contigo 👫🏻 y quiero ser yo a quien permitas tenerte a tu lado😍🥰Quiero que en este día tan significativo sientas todo el amor y la admiración que tengo por ti. 👸🏽👸🏽No solo por lo que eres conmigo, 🥰🥰sino por la persona increíble que sigues siendo en tu vida y en la de los demás. Que este año nuevo te traiga solo cosas maravillosas, que sigas brillando con esa luz tan tuya☀️☀️, y que sigamos construyendo recuerdos juntos y aprendiendo uno de otro.🥳🥳🤩 ESPERO QUE LA PASES HERMOSO HOY Y SIEMPRE, Y QUE CADA DIA VEAS LO INCREIBLE QUE ERES Y LO QUE PUEDES LLEGAR A SER, QUE CUMPLAS MUCHOS AÑITOS MAS.... 🥰💍👑TE AMO CON TODO MI CORAZON, CON TODAS MIS FUERCITAS Y CON TODO MI SER😍😘🥰💍💍`;

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






