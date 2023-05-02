class Start extends Phaser.Scene {
    constructor() {
        super("startScene");
    }
    

    // create()
    // create menu scene
    create() {
        
        // menu text configuration
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            allign: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        // show menu text
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'Press (1) for 1 Player', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, 'Press (2) for 2 Player', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#00FF00';
        menuConfig.color = '#000';
        
        

      // define keys
      key1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE);
      key2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.TWO);
    }

    // update()
    // menu update function
    update() {
        if (Phaser.Input.Keyboard.JustDown(key1)) {
          console.log("one player cuh")
          this.sound.play('sfx_select');
          this.scene.start('menuScene');    
        }
        if (Phaser.Input.Keyboard.JustDown(key2)) {
          console.log("two player cuh");
          this.sound.play('sfx_select');
          this.scene.start('menuScene');    
        }
      }
    
}
