// Michael Takami
// Galaxy Patrol
// Time Spent:

// Mods(5):
// - allow player to control rocket after firing 
// - 'FIRE' UI text appears when rocket firing
// - High score added to UI

// Mods(10):
// - four new sounds added which randomly trigger on explosion
// -

// Mods(15):
//

// Other Mods:
// added a web icon(.ico)
// added a loading bar to track asset loading

// Sources:
// Phaser API documentation

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [Loader, Start, Menu, Play ]
  }
// main game
let game = new Phaser.Game(config);

// reserve keyboard variables
let keyF, keyR, keyLEFT, keyRIGHT, keyW, keyA, keyD, key1, key2;

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;
