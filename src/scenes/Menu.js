class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }
    

    // create()
    // create menu scene
    create() {
        this.sound.play('menuMusic');

        // menu text configuration
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '24px',
            backgroundColor: '#000',
            color: '#FFF',
            allign: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        
        let menuIC  = this.add.image(game.config.width/2, game.config.height/2 + borderUISize + borderPadding - 5, 'MenuIcon').setOrigin(0.5);
        menuIC.setScale(0.4);

        let menuTXT  = this.add.image(game.config.width/2, game.config.height/2 - 190 , 'MenuText').setOrigin(0.5);
        menuTXT.setScale(0.4);

        let menuRight = this.add.image(game.config.width/2 + 225, game.config.height/2 + borderUISize + borderPadding + 80 , 'arrowRight').setOrigin(0.5);
        menuRight.setScale(3.0);
        
        let menuLeft = this.add.image(game.config.width/2 - 225, game.config.height/2 + borderUISize + borderPadding + 80 , 'arrowLeft').setOrigin(0.5);
        menuLeft.setScale(3.0);

        this.add.text(game.config.width/2 + 225, game.config.height/2 + borderUISize + borderPadding + 125, 'EXPERT', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2 - 225, game.config.height/2 + borderUISize + borderPadding + 125, 'NOVICE', menuConfig).setOrigin(0.5);

        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    // update()
    // menu update function
    update() {
        if(game.settings.multiplayer == false){
          if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            // easy mode
            game.settings = {
              spaceshipSpeed: 3,
              gameTimer: 60000    
            }
            this.sound.play('sfx_select');
            setTimeout(() => { this.sound.pauseAll(); }, 250);
            this.scene.start('playScene');    
          }
          if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            // hard mode
            game.settings = {
              spaceshipSpeed: 4,
              gameTimer: 45000    
            }
            this.sound.play('sfx_select');
            setTimeout(() => { this.sound.pauseAll(); }, 250);
            this.scene.start('playScene');    
          }
        }
      
      else if(game.settings.multiplayer == true){
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
          // easy mode
          game.settings = {
            spaceshipSpeed: 3,
            gameTimer: 60000    
          }
          this.sound.play('sfx_select');
          setTimeout(() => { this.sound.pauseAll(); }, 250);
          this.scene.start('playScene2');    
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
          // hard mode
          game.settings = {
            spaceshipSpeed: 4,
            gameTimer: 45000    
          }
          this.sound.play('sfx_select');
          setTimeout(() => { this.sound.pauseAll(); }, 250);
          this.scene.start('playScene2');    
        }
      } 
    }
}
