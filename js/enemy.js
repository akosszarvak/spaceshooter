function spawnEnemy() {
    let enemy = createEnemy();
    enemies.push(enemy);
    console.log(enemies);
}

function createEnemy() {
    let enemy = new PIXI.Sprite.from("images/enemy.png");
    enemy.anchor.set(0.5);
    enemy.x = app.view.width + 4;
    enemy.y = getRndInteger(2, 600);
    enemy.angle = 90;
    enemy.speed = enemySpeed;
    app.stage.addChild(enemy);

    return enemy;
}


function updateEnemies(delta) {
    //moving bullets
    for (let i = 0; i < enemies.length; i++) {


        enemies[i].position.x -= enemies[i].speed;

        //check if bullet is off the screen
        if (enemies[i].position.x < 0) {
            enemies[i].dead = true;
        }

        if (enemies[i].dead) {
            app.stage.removeChild(enemies[i]);
            enemies.splice(i, 1);
            console.log(enemies);
        }
    }

}

async function spawnManager(delta) {
    // let now = PIXI.deltaMS;
    spawnEnemy();

    await sleep(2000 * PIXI.ticker.deltaTime);
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}






function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}