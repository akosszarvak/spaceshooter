   //setup title screen
   let redRect = new PIXI.Graphics();
   redRect.beginFill(0xFF0000);
   redRect.drawRect(0, 0, app.view.width, app.view.height);
   titleScreen.addChild(redRect);

   // adding text to title screen
   let text1 = new PIXI.Text("Title Screen");
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
   titleScreen.addChild(text1);