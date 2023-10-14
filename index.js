document.addEventListener("DOMContentLoaded", function() {
    const ball = document.getElementById("ball");

    // Initialize ball position
    const maxX = window.innerWidth - ball.offsetWidth;
    const maxY = window.innerHeight - ball.offsetHeight;
    const initialX = Math.random() * maxX;
    const initialY = Math.random() * maxY;

    ball.style.left = initialX + "px";
    ball.style.top = initialY + "px";

    // Set ball speed
    const speed = 10;

    // Listen for key events
    document.addEventListener("keydown", function(event) {
        const key = event.key.toLowerCase();
        moveBall(key);
    });

    function moveBall(key) {
        const currentX = parseInt(ball.style.left, 10);
        const currentY = parseInt(ball.style.top, 10);

        if (key === "w") {
            ball.style.top = Math.max(0, currentY - speed) + "px";
        } else if (key === "a") {
            ball.style.left = Math.max(0, currentX - speed) + "px";
        } else if (key === "s") {
            ball.style.top = Math.min(maxY, currentY + speed) + "px";
        } else if (key === "d") {
            ball.style.left = Math.min(maxX, currentX + speed) + "px";
        }
    }
});