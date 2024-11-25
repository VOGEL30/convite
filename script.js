document.getElementById('acceptBtn').addEventListener('click', function() {
    document.getElementById('responseMessage').textContent = "Sabia que iria aceitar KKKKKKK ";
    document.getElementById('responseMessage').style.color = "#ff6b81"; // Rosa suave
});

document.getElementById('declineBtn').addEventListener('mouseenter', function() {
    // Quando o mouse passar sobre o botão "não", ele vai se mover para fugir do cursor
    const btn = document.getElementById('declineBtn');
    const randomX = Math.random() * 300 - 150; // Valor aleatório de movimentação horizontal
    const randomY = Math.random() * 300 - 150; // Valor aleatório de movimentação vertical

    btn.style.transform = `translate(${randomX}px, ${randomY}px)`;
});
