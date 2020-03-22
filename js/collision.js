function bulletEnemyCollision() {

    for (let i = 0; i < enemies.length; i++) {
        for (let j = 0; j < bullets.length; j++) {

            if (b.hitTestRectangle(enemies[i], bullets[j])) {
                console.log("hit");
                playExplosion(enemies[i].position.x, enemies[i].position.y);
                gameScreen.removeChild(enemies[i]);
                gameScreen.removeChild(bullets[j]);
                bullets.splice(j, 1);
                enemies.splice(i, 1);
            }
        }
    }
}


function playerEnemyCollision() {

    for (let i = 0; i < enemies.length; i++) {
        if (b.hitTestRectangle(enemies[i], player)) {
            playExplosion(enemies[i].position.x, enemies[i].position.y);
            console.log("hit");
            gameScreen.removeChild(enemies[i]);
            playExplosion(player.position.x, player.position.y);
            gameScreen.removeChild(player);
            playerLives--;
            checkState();
            app.ticker.remove(gameLoop);
        }
    }
}

function checkCollisions() {
    bulletEnemyCollision();
    playerEnemyCollision();
}