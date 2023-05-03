// Multiplayer Rocket prefab
class MultiplayerRocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, playerNum, frame){
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.isFiring = false;
        this.playerNum = playerNum; // player number (1 or 2)
        this.moveSpeed = 3;         // # of pixels per frame
        this.sfxRocket = scene.sound.add('sfx_rocket');
    }

    update() {
        // rocket fire button for player 1
        if (this.playerNum === 1 && Phaser.Input.Keyboard.JustDown(keyF) && !this.isFiring) {
            this.isFiring = true;
            this.sfxRocket.play(); 
        }
        // rocket fire button for player 2
        if (this.playerNum === 2 && Phaser.Input.Keyboard.JustDown(keyW) && !this.isFiring) {
            this.isFiring = true;
            this.sfxRocket.play(); 
        }
        
        // left/right movement for player 1
        if(this.playerNum === 1 && keyLEFT.isDown && this.x >= borderUISize + this.width){
            this.x -= this.moveSpeed;
        }
        else if (this.playerNum === 1 && keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width){
            this.x += this.moveSpeed;
        }
        
        // left/right movement for player 2
        if(this.playerNum === 2 && keyA.isDown && this.x >= borderUISize + this.width){
            this.x -= this.moveSpeed;
        }
        else if (this.playerNum === 2 && keyD.isDown && this.x <= game.config.width - borderUISize - this.width){
            this.x += this.moveSpeed;
        }

        // if fired, move up!
        if(this.isFiring && this.y >= borderUISize * 3 + borderPadding){
            this.y -= this.moveSpeed;
        }

        // reset on miss
        if(this.y <= borderUISize * 3 + borderPadding) {
            this.reset();
        }
    }

    // reset rocket to starting "ground" position
    reset() {
        this.isFiring = false;
        this.y = game.config.height - borderUISize - borderPadding;
    }
}