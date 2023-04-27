// Rocket prefab
class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);

        // add object to existing scene 
        scene.add.existing(this);
        this.isFiring = false; // rocket firing status
        this.moveSpeed = 2;    // # of pixels per frame

        // add rocket sfx on spawn
        this.sfxRocket = scene.sound.add('sfx_rocket');
    }

    update() {

        // rocket fire button
        if (Phaser.Input.Keyboard.JustDown(keyF) && !this.isFiring) {
            this.isFiring = true;
            this.sfxRocket.play(); 
          }
        // MOD: left/right movement allowed after firing
        if(keyLEFT.isDown && this.x >= borderUISize + this.width){
            this.x -= this.moveSpeed;
        }
        else if (keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width){
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