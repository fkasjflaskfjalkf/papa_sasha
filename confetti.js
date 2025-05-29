// Простая анимация конфетти
function randomColor() {
    const colors = ['#4f8cff', '#ffb347', '#ff4f81', '#7dffb3', '#ffe156', '#a685e2'];
    return colors[Math.floor(Math.random() * colors.length)];
}
function createConfettiPiece() {
    const confetti = document.createElement('div');
    confetti.className = 'confetti-piece';
    confetti.style.background = randomColor();
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDuration = (2 + Math.random() * 3) + 's';
    confetti.style.opacity = 0.7 + Math.random() * 0.3;
    confetti.style.width = 8 + Math.random() * 8 + 'px';
    confetti.style.height = 8 + Math.random() * 16 + 'px';
    confetti.style.borderRadius = '3px';
    document.querySelector('.confetti').appendChild(confetti);
    setTimeout(() => confetti.remove(), 5000);
}
setInterval(createConfettiPiece, 180);

// Стили для конфетти
const style = document.createElement('style');
style.innerHTML = `
.confetti-piece {
    position: absolute;
    top: -20px;
    will-change: transform;
    animation: confetti-fall linear forwards;
}
@keyframes confetti-fall {
    to {
        transform: translateY(110vh) rotateZ(360deg);
    }
}`;
document.head.appendChild(style); 
