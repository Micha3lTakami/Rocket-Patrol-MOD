// Michael Takami
// Galaxy Patrol
// Time Spent:
// Mods(5):
// 
// Mods(10):
//
// Mods(15):
//
// Sources:
//
let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
  }
// main game
let game = new Phaser.Game(config);

// reserve keyboard variables
let keyF, keyR, keyLEFT, keyRIGHT;

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;
