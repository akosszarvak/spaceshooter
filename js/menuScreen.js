//setup main screen
let greenRect = new PIXI.Graphics();
greenRect.beginFill(0x00FF00);
greenRect.drawRect(0, 0, app.view.width, app.view.height);
mainScreen.addChild(greenRect);

let text2 = new PIXI.Text("Main Screen");
text2.anchor.set(0.5);
text2.x = app.view.width / 2;
text2.y = app.view.height / 2;
text2.style = new PIXI.TextStyle({
    fill: 0x00000,
    fontSize: 40,
    fontFamily: "Arial",
    fontStyle: "bold",
    stroke: 0xFFFFFF,
    strokeThickness: 3
});
mainScreen.addChild(text2);