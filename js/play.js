function setUp() {
    initLevel();
    createExplosionSheet();
    playerLives = 1;
    enemySpeed = 4;
    state = "game";
    addPlayer();
    gameScreen.addChild(player);
    document
        .querySelector("#gameDiv")
        .addEventListener("pointerdown", fireBullet);


    spawnManager();

    // keyboard event handlers
    window.addEventListener("keydown", keysDown);
    window.addEventListener("keyup", keysUp);



    app.ticker.add(gameLoop);
}


function gameOver() {
    if (playerLives = 0) {
        let text1 = new PIXI.Text("Game Over");
        text1.anchor.set(0.5);
        text1.x = app.view.width / 2;
        text1.y = app.view.height / 2;
        text1.style = new PIXI.TextStyle({
            fill: 0x00000,
            fontSize: 40,
            fontFamily: "Arial",
            fontStyle: "bold",
            stroke: 0xFFFFFF,
            strokeThickness: 3
        });
        gameScreen.addChild(text1);
    }
}

async function checkState() {
    if (playerLives <= 0) {
        gameOver();
        enemies.splice(0, enemies.length);
    }
    await sleep(2000);
    populateMenuScreen();

}