// Michael Takami
// Galaxy Patrol
// Time Spent: 20 hours

// Mods(5):
// - allow player to control rocket after firing 
// - 'FIRE' UI text appears when rocket firing
// - High score added to UI
// - background music(added to menu instead of play scene so play scene to feel more arcade-like)

// Mods(10):
// - four new sounds added which randomly trigger on explosion
// - display time remaining on screen
// - new title screen with art and menu music

// Mods(15):
// - new enemy spaceship
// - multiplayer mode
// - time increase when hitting ships

// Other Mods - I did not realize these had to be approved so if they don't count its all good :) 
// added a web icon(.ico)
// added a loading percent to track asset loading
// added a UI logo for more arcade feel when playing 1P

// Sources:
// Phaser API documentation
// royalty free galaxy music from pixabay

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [Loader, Start, Menu, Play, Play2 ]
  }
// main game
let game = new Phaser.Game(config);

// reserve keyboard variables
let keyF, keyR, keyLEFT, keyRIGHT, keyW, keyA, keyD, key1, key2;

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;
