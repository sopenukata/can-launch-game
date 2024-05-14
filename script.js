document.addEventListener('DOMContentLoaded', () => {
    const can = document.getElementById('can');
    const gameContainer = document.getElementById('game-container');
    let isFlying = false;
    let velocity = 0;
    const gravity = 0.5;
    
    can.addEventListener('click', () => {
        if (!isFlying) {
            velocity = -15;
            isFlying = true;
        }
    });

    function update() {
        if (isFlying) {
            const canBottom = parseInt(getComputedStyle(can).bottom);
            const newBottom = canBottom + velocity;
            
            if (newBottom <= 0) {
                can.style.bottom = '0px';
                isFlying = false;
                velocity = 0;
            } else {
                can.style.bottom = newBottom + 'px';
                velocity += gravity;
            }
        }

        requestAnimationFrame(update);
    }

    update();
});
