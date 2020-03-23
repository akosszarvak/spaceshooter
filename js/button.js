function buttonSetup() {

    let buttonSprites = [app.loader.resources["game1Button"].texture, app.loader.resources["game2Button"].texture, app.loader.resources["game3Button"].texture]

    let buttonPositions = [400, 200, 400, 300, 400, 400, ];
    let button;
    for (let i = 0; i < 3; i++) {
        button = new PIXI.Sprite(buttonSprites[i]);
        button.interactive = true;
        button.buttonMode = true;

        button.anchor.set(0.5);

        button.position.x = buttonPositions[i * 2];
        button.position.y = buttonPositions[i * 2 + 1];

        button.interactive = true;

        button
            .on("mousedown", onButtonDown)
            .on("mouseup", onButtonUp)
            .on("mouseupoutside", onButtonUp)
            .on('pointerdown', onClick);
        menuScreen.addChild(button);
        buttons.push(button);
    }


    function onButtonDown() {}

    function onButtonUp() {}

    function onClick() {
        populateGameScreen();
    }
}

function exitButtonSetup() {

    let buttonDown = app.loader.resources["exitButton"].texture;
    let exitButton = new PIXI.Sprite(buttonDown);
    exitButton.interactive = true;
    exitButton.buttonMode = true;

    exitButton.anchor.set(0.5);

    exitButton.position.x = 400;
    exitButton.position.y = 500;

    exitButton.interactive = true;

    exitButton
        .on("mousedown", onButtonDown)
        .on("mouseup", onButtonUp)
        .on("mouseupoutside", onButtonUp)
        .on('pointerdown', onClickExit);
    menuScreen.addChild(exitButton);
    buttons.push(exitButton);

    function onButtonDown() {}

    function onButtonUp() {}

    function onClickExit() {
        // window.location.replace('https://en.wikipedia.org/wiki/Rhina_ancylostoma');
        window.location.href = 'https://en.wikipedia.org/wiki/Rhina_ancylostoma';
    }

}