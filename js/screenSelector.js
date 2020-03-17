// ----- CONTAINER SELECTOR SECTION ------
function loadContainers() {

    titleScreen = new PIXI.Container();
    mainScreen = new PIXI.Container();
    endScreen = new PIXI.Container();

    app.stage.addChild(titleScreen);
    app.stage.addChild(mainScreen);
    app.stage.addChild(endScreen);
}

function switchContainer(e) {
    switch (e.key) {
        case "1":
            titleScreen.visible = true;
            mainScreen.visible = false;
            endScreen.visible = false;
            break;
        case "2":
            titleScreen.visible = false;
            mainScreen.visible = true;
            endScreen.visible = false;
            break;
        case "3":
            titleScreen.visible = false;
            mainScreen.visible = false;
            endScreen.visible = true;
            break;
    }
}