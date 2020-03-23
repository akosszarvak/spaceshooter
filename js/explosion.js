function createExplosionSheet() {
    let ssheet = new PIXI.BaseTexture.from(app.loader.resources["explosion"].url);
    let w = 8;
    let h = 8;

    explosionsSheet["explosion"] = [
        new PIXI.Texture(ssheet, new PIXI.Rectangle(0 * w, 0, w, h)),
        new PIXI.Texture(ssheet, new PIXI.Rectangle(1 * w, 0, w, h)),
        new PIXI.Texture(ssheet, new PIXI.Rectangle(2 * w, 0, w, h)),
        new PIXI.Texture(ssheet, new PIXI.Rectangle(3 * w, 0, w, h)),
        new PIXI.Texture(ssheet, new PIXI.Rectangle(4 * w, 0, w, h)),
        new PIXI.Texture(ssheet, new PIXI.Rectangle(5 * w, 0, w, h)),
        new PIXI.Texture(ssheet, new PIXI.Rectangle(6 * w, 0, w, h)),
        new PIXI.Texture(ssheet, new PIXI.Rectangle(7 * w, 0, w, h))
    ];
}


function createExplosion(width, height) {
    explosion = new PIXI.AnimatedSprite(explosionsSheet.explosion);
    explosion.anchor.set(0.5);
    explosion.animationSpeed = .2;
    explosion.loop = true;
    explosion.x = width;
    explosion.y = height;
    explosion.width = 50;
    explosion.height = 50;
}

function playExplosion(width, height, ) {
    createExplosion(width, height);
    gameScreen.addChild(explosion);
    explosion.play();
    explosions.push({
        value: explosion,
        time: Math.round(new Date / 1000)
    });
}

function destroyExplosion() {
    let timeCheck = Math.round(new Date / 1000);
    for (let i = 0; i < explosions.length; i++) {
        if ((timeCheck - explosions[i].time) > 1.3) {
            explosions[i].value.visible = false;
            explosions.splice(i, 1);
            gameScreen.removeChild(explosions[i]);
        }
    }
}