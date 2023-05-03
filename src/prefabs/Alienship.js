// Alienship Prefab
class Alienship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue){
        super(scene, x, y, texture, frame);
        scene.add.existing(this); // add to existing name 
        this.points = pointValue;
        this.moveSpeed = game.settings.spaceshipSpeed + 2; 
    }

    update() {
        // move alien left 
        this.x -= this.moveSpeed;
        
        // wrap around from left to right edge
        if(this.x <= 50 - this.width){
            this.reset();
        }
    }

    // reset alien position 
    reset(){
        this.x = game.config.width-65;
    }
}