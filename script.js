let index = 0;
const items = document.querySelectorAll('.carrossel-item');
const totalItems = items.length;

function moveCarrossel() {
    index = (index + 1) % totalItems;
    const offset = -index * 100;  // Desloca o carrossel para a esquerda
    document.querySelector('.carrossel').style.transform = `translateX(${offset}%)`;
}

setInterval(moveCarrossel, 3000);  // Troca de mensagem a cada 3 segundos
