let app;
let player;
let playerLives;
let state;

// bullets
let bullets = [];
let bulletSpeed = 10;

//enemies
let enemies = [];
let enemySpeed;

//key handling
let keys = {};
let keysDiv;

//background
let bgBack;
let bgMiddle;
let bgFront;
let bgX = 0;
let bgSpeed = 1;

// explode sheet
let explosionsSheet = {};
let explosions = []

// collision detection lib
let b = new Bump(PIXI);

// particle system lib
let d = new Dust(PIXI);

let buttons = [];

//containers
let titleScreen;
let menuScreen;
let gameScreen;

window.onload = function () {
    app = new PIXI.Application({
        width: 800,
        height: 600,
        backgroundColor: 0xaaaaaa,
    });
    // c = new Charm(PIXI);
    document.querySelector("#gameDiv").appendChild(app.view);

    app.stage.interactive = true;

    app.loader.add("explosion", "images/fire.png")
        .add("bgBack", "images/galaxy.png")
        .add("bgMiddle", "images/stars1.png")
        .add("bgFront", "images/stars2.png")
        .add("logo", "images/logo.png")
        .add("game1Button", "images/GAME1.png")
        .add("game2Button", "images/GAME2.png")
        .add("game3Button", "images/GAME3.png")
        .add("exitButton", "images/EXIT.png");
    app.loader.load();





    loadContainers();


};


function gameLoop(delta) {

    playerMovement();
    updateBullets(delta);
    updateEnemies();
    checkCollisions();
    destroyExplosion();
    updateBg(delta);
}