// ----- CONTAINER SELECTOR SECTION ------
function loadContainers() {


    titleScreen = new PIXI.Container();
    menuScreen = new PIXI.Container();
    gameScreen = new PIXI.Container();

    titleScreen.visible = true;
    menuScreen.visible = false;
    gameScreen.visible = false;

    app.stage.addChild(titleScreen);
    app.stage.addChild(menuScreen);
    app.stage.addChild(gameScreen);

    populateTitleScreen();
}

// TODO: bg animation
async function populateMenuScreen() {

    console.log("menu screen yay")
    titleScreen.visible = false;
    menuScreen.visible = true;
    gameScreen.visible = false;

    let redRect = new PIXI.Graphics();
    redRect.beginFill(0xFF0000);
    redRect.drawRect(0, 0, app.view.width, app.view.height);
    menuScreen.addChild(redRect);
    buttonSetup();
    exitButtonSetup();
    addLogo();

}

function populateGameScreen() {
    titleScreen.visible = false;
    menuScreen.visible = false;
    gameScreen.visible = true;

    let greenRect = new PIXI.Graphics();
    greenRect.beginFill(0xFF00FF);
    greenRect.drawRect(0, 0, app.view.width, app.view.height);
    gameScreen.addChild(greenRect);

    setup();
}

// TODO: fade into next screen
async function populateTitleScreen() {
    titleScreen.visible = true;
    menuScreen.visible = false;
    gameScreen.visible = false;

    let blueRect = new PIXI.Graphics();
    blueRect.beginFill(0xFFFF00);
    blueRect.drawRect(0, 0, app.view.width, app.view.height);
    titleScreen.addChild(blueRect);

    await sleep(2000);
    populateMenuScreen();
}

function addLogo() {
    let logo = new PIXI.Sprite.from("images/logo.png");

    logo.anchor.set(0.5);
    logo.x = 400;
    logo.y = 90;
    logo.height = 150;
    logo.width = 150;
    menuScreen.addChild(logo);
}