let app;
let player;

// bullets
let bullets = [];
let bulletSpeed = 10;

//enemies
let enemies = [];
let enemySpeed = 4;


//key handling
let keys = {};
let keysDiv;



//containers
let titleScreen;
let mainScreen;
let endScreen;

window.onload = function () {
    app = new PIXI.Application({
        width: 800,
        height: 600,
        backgroundColor: 0xAAAAAA
    });
    c = new Charm(PIXI);
    document.querySelector("#gameDiv").appendChild(app.view);



    app.stage.interactive = true;
    document.querySelector("#gameDiv").addEventListener("pointerdown", fireBullet);
    window.addEventListener("keyup", switchContainer);

    // loadContainers();
    //player object



    addPlayer();
    app.stage.addChild(player);

    // addEnemy()
    // app.stage.addChild(enemy);


    // keyboard event handlers
    window.addEventListener("keydown", keysDown);
    window.addEventListener("keyup", keysUp);


    app.ticker.add(gameLoop);
}



async function gameLoop(delta) {
    c.update();
    await spawnManager()
    updateBullets(delta);
    playerMovement();
    updateEnemies();
}