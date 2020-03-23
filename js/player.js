function addPlayer() {


    player = new PIXI.Sprite.from("images/player.png");
    player.anchor.set(0.5);
    player.x = app.view.width / 4;
    player.y = app.view.height / 2;
    player.angle = 90;

    return player;
}

function keysDown(e) {

    keys[e.keyCode] = true;
}

function keysUp(e) {

    keys[e.keyCode] = false;
}





function playerMovement() {

    // W
    if (keys["87"]) {
        return player.y -= playerSpeed;
    }
    // S
    if (keys["83"]) {
        return player.y += playerSpeed;
    }
    // A
    if (keys["65"]) {
        return player.x -= playerSpeed;
    }
    // D
    if (keys["68"]) {
        return player.x += playerSpeed;
    }

}