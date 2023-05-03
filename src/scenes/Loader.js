class Loader extends Phaser.Scene {
    constructor() {
        super("loaderScene");
    }
    
    // preload()
    // pre-load game assets
    preload() {

        // add text object for percentage loaded
        let progressText = this.add.text(game.config.width/2, game.config.height/2, '0%', { fontFamily: 'Courier', fontSize: '48px', fill: '#fff' }).setOrigin(0.5);

        // update the loading percentage as assets are loaded
        this.load.on('progress', function (value) {
            let percentage = Math.floor(value * 100) + '%';
            progressText.setText(percentage); 
        });

        // load assets
        this.load.audio('sfx_select', './assets/blip_select12.wav');
        this.load.audio('menuMusic', './assets/galaxyMusic.mp3');
        this.load.audio('sfx_explosion', './assets/explosion38.wav');
        this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
        // MOD: added explosion sounds + menu music and new title screen
        this.load.audio('sfx_explosion2', './assets/wilhelm.wav');
        this.load.audio('sfx_explosion3', './assets/explosion3.wav');
        this.load.audio('sfx_explosion4', './assets/explosion4.wav');
        this.load.image('arrowRight', './assets/arrowRight.png');
        this.load.image('arrowLeft', './assets/arrowLeft.png');
        this.load.image('MenuText', './assets/galaxyPatrolText.png');
        this.load.image('MenuIcon', './assets/galaxyPatrolMenuART.png')
        this.load.image('alien', './assets/alienship.png');
        this.load.image('rocket', './assets/rocket.png');
        this.load.image('redRocket', './assets/redRocket.png');
        this.load.image('spaceship', './assets/spaceship.png');
        this.load.image('starfield', './assets/starfield.png');
        this.load.image('logo', './assets/Logo.png');
        // load spritesheets (MOD: arrow sprite sheet for new title menu)
        this.load.spritesheet('explosion', './assets/explosion.png', {frameWidth: 64, frameHeight: 32, startFrame: 0, endFrame: 9});
        
        // change scene upon completion
        this.load.on('complete', function () {
            this.scene.start('startScene');
        }, this);

    }
}
