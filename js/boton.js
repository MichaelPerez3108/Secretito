document.addEventListener('DOMContentLoaded', function() {
    const btnClose = document.getElementById('modalCloseBtn');

    function getRandomPosition() {
        const x = window.innerWidth - btnClose.offsetWidth;
        const y = window.innerHeight - btnClose.offsetHeight;
        const randomX = Math.random() * x;
        const randomY = Math.random() * y;
        return { x: randomX, y: randomY };
    }

    function moveButton() {
        const position = getRandomPosition();
        btnClose.style.position = 'absolute';
        btnClose.style.left = `${position.x}px`;
        btnClose.style.top = `${position.y}px`;
    }

    // Mueve el botón al hacer clic
    btnClose.addEventListener('click', moveButton);

    // Mueve el botón al hacer hover
    btnClose.addEventListener('mouseover', moveButton);
});
