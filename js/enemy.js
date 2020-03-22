function spawnEnemy() {
  let enemy = createEnemy();
  enemies.push(enemy);
}

function createEnemy() {
  let enemy = new PIXI.Sprite.from("images/enemy.png");
  enemy.anchor.set(0.5);
  enemy.x = app.view.width + 4;
  enemy.y = getRndInteger(2, 600);
  enemy.angle = 90;
  enemy.speed = enemySpeed;
  gameScreen.addChild(enemy);

  return enemy;
}

function updateEnemies(delta) {
  //moving enemies
  for (let i = 0; i < enemies.length; i++) {
    enemies[i].position.x -= enemies[i].speed;

    //check if enemy is off the screen
    if (enemies[i].position.x < -5) {
      enemies[i].dead = true;
    }

    if (enemies[i].dead) {
      gameScreen.removeChild(enemies[i]);
      enemies.splice(i, 1);
    }
  }
}

async function spawnManager() {
  await sleep(2000);
  if (playerLives > 0) {
    spawnEnemy();
    spawnManager();
  } else {
    spawnManager
  }

}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}