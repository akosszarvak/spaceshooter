function fireBullet(e) {
    console.log("FIRE");

    let bullet = createBullet();
    bullets.push(bullet);
    console.log(bullets);

}

function createBullet() {
    //spawn bullet
    let bullet = new PIXI.Sprite.from("images/bullet.png");
    bullet.anchor.set(0.5);
    bullet.x = player.x;
    bullet.y = player.y;
    bullet.speed = bulletSpeed;
    app.stage.addChild(bullet);

    return bullet;
}

function updateBullets(delta) {
    //moving bullets
    for (let i = 0; i < bullets.length; i++) {


        bullets[i].position.x += bullets[i].speed;

        //check if bullet is off the screen
        if (bullets[i].position.x > 800) {
            bullets[i].dead = true;
        }

        if (bullets[i].dead) {
            app.stage.removeChild(bullets[i]);
            bullets.splice(i, 1);
            console.log(bullets);
        }
    }

}