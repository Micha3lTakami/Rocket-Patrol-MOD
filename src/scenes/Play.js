class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
        this.p1HighScore = 0; // initalize high score variable
    }

    // preload()
    // pre-load image assets/sprites
    preload(){
        /*//load images/titles sprites
        this.load.image('rocket', './assets/rocket.png');
        this.load.image('spaceship', './assets/spaceship.png');
        this.load.image('starfield', './assets/starfield.png');
        this.load.image('logo', './assets/Logo.png');
        // load spritesheet
        this.load.spritesheet('explosion', './assets/explosion.png', {frameWidth: 64, frameHeight: 32, startFrame: 0, endFrame: 9});
        */
    }

    // create()
    // create objects on play scene
    create() {
        // place tile sprite
        this.starfield = this.add.tileSprite(0, 0, 640, 480, 'starfield').setOrigin(0, 0);

        // green UI background
        this.add.rectangle(0, borderUISize + borderPadding, game.config.width, borderUISize * 2, 0x00FF00).setOrigin(0, 0);
        
        // white borders
        this.add.rectangle(0, 0, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(0, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0, 0);

        // MOD: added logo to UI
        var logo = this.add.sprite(game.config.width - (4.23*borderUISize) , borderUISize + 55, 'logo');
        logo.setScale(0.485);
        
        // add rocket
        this.p1Rocket = new Rocket(this, game.config.width/2, game.config.height - borderUISize - borderPadding, 'rocket').setOrigin(0.5, 0);

        // add three spaceships
        this.ship01 = new Spaceship(this, game.config.width + borderUISize*6, borderUISize*4, 'spaceship', 0, 30).setOrigin(0,0);
        this.ship02 = new Spaceship(this, game.config.width + borderUISize*3, borderUISize*5 + borderPadding*2, 'spaceship', 0 ,20).setOrigin(0,0);
        this.ship03 = new Spaceship(this, game.config.width, borderUISize*6 + borderPadding*4, 'spaceship', 0, 10).setOrigin(0,0);
        
        // define keys
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

        // animation configuration
        this.anims.create({
            key: 'explode',
            frames: this.anims.generateFrameNumbers('explosion', { start: 0, end: 9, first: 0}),
            frameRate: 30
        });

        // initialize score
        this.p1Score = 0;

        // display score
        let scoreConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 100
        } 
        this.scoreLeft = this.add.text(borderUISize + borderPadding, borderUISize + borderPadding*2, this.p1Score, scoreConfig);
       
        // MOD: FIRE UI config
        let fireConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 95
        }
        this.fireMiddle = this.add.text(borderUISize + borderPadding*25, borderUISize + borderPadding*2, 'FIRE', fireConfig);
        this.fireMiddle.alpha = 0; // sets alpha to 0 as to not show on start
        
        // MOD: high score UI config
        
        let HighScoreConfig = {
            fontFamily: 'Courier',
            fontSize: '15px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 150
        }
        this.highScoreRight = this.add.text(borderUISize + borderPadding*40, borderUISize + borderPadding*1, 'HIGH SCORE: ' + this.p1HighScore, HighScoreConfig);
        this.highScoreRight.alpha = 1; // sets alpha to 0 as to not show on start

        // initialize GAME OVER state
        this.gameOver = false;

        // MOD: Display time remaining on screen
        this.counter = game.settings.gameTimer / 1000;
        this.startTime = this.time.now;
       
        // Timer configuration and display
        this.timerConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'center',
            padding:{
                top: 5,
                bottom: 5
            },
            fixedWidth: 125
            }
        this.timerLeft = this.add.text(borderUISize + borderPadding * 12, borderUISize + borderPadding * 2, 'TIME:' + this.counter, this.timerConfig);
        this.timerConfig.fixedWidth = 0;
       
        // flag to monitor game over state
        this.gameOver = false;

    }
    

    // update()
    // update object sprites throughout gameplay(can be thought of as constant update loop body)
    update() {
        // update timer
        let Now = this.time.now;
        if(Now > (this.startTime + 1000)){
            this.counter -= 1;
            this.startTime = Now;
            this.timerLeft.text = 'TIME:' + this.counter;
        }
        if(this.counter <= 0){
            this.add.text(game.config.width/2, game.config.height/2, 'GAME OVER', this.scoreConfig).setOrigin(0.5);
            this.add.text(game.config.width/2, game.config.height/2 + 64, 'Press (R) to Restart or ← for menu', this.scoreConfig).setOrigin(0.5);
            this.timerLeft.text = 'TIME:0';
            this.gameOver = true;
        }
        
        // update high score
        if (this.gameOver && this.p1Score > this.p1HighScore) {
            this.p1HighScore = this.p1Score;
            this.highScoreRight.setText('HIGH SCORE: ' + this.p1HighScore);
        }

        // check key input for restart
        if(this.gameOver && Phaser.Input.Keyboard.JustDown(keyR)){
            this.scene.restart();
        }
        
        // check key input for menu
        if (this.gameOver && Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            this.scene.start("menuScene");
        }

        // update background tile sprite
        this.starfield.tilePositionX -= 5;

        // MOD: 'FIRE' UI text
        if(this.p1Rocket.isFiring == true){
            this.fireMiddle.alpha = 1;
        }
        else if(this.p1Rocket.isFiring == false){
            this.fireMiddle.alpha = 0;
        }

        // sprite updates while gameOver is not true(triggered)
        if(!this.gameOver) {
            this.p1Rocket.update();
            this.ship01.update();
            this.ship02.update();
            this.ship03.update();
        }

        // check for collisions
        if(this.checkCollision(this.p1Rocket, this.ship03)){
            this.p1Rocket.reset();
            this.shipExplode(this.ship03);
        }
        if(this.checkCollision(this.p1Rocket, this.ship02)){
            this.p1Rocket.reset();
            this.shipExplode(this.ship02);
        }
        if(this.checkCollision(this.p1Rocket, this.ship01)){
            this.p1Rocket.reset();
            this.shipExplode(this.ship01);
        }
    }

    // checkcollision()
    // check collision between rocket and spaceship
    checkCollision(rocket, ship) {
        // simple AABB(Axis-Aligned Bounding Boxes) collision check
        if(rocket.x < ship.x + ship.width && rocket.x + rocket.width > ship.x && rocket.y < ship.y + ship.height && rocket.height + rocket.y > ship.y){
            return true;
        }
        else{
            return false;
        }
    }

    // shipExplode()
    // handles ship + rocket collision event
    shipExplode(ship){
        // MOD: New ship explosion noises and randomly plays 1/4
        let soundKeys = ['sfx_explosion','sfx_explosion2', 'sfx_explosion3', 'sfx_explosion4'];
        ship.alpha = 0; // make hit ship invisible
        
        // create explosion at ship position
        let boom  = this.add.sprite(ship.x, ship.y, 'explosion').setOrigin(0,0);
        boom.anims.play('explode'); //play exploding animation
        boom.on('animationcomplete', () => {    //callback after animation completes
            ship.reset();   // reser ship position
            ship.alpha = 1; // make ship visible again
            boom.destroy(); // remove explosion sprite
        });

        // increment score and update ui
        this.p1Score += ship.points;
        this.scoreLeft.text = this.p1Score;
        
        // trigger sound on explosion
        let randomSoundKey = Phaser.Utils.Array.GetRandom(soundKeys); // randomly selects sound to play
        this.sound.play(randomSoundKey);

    }
}