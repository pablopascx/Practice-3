/**
 * Final boss of the game. Inherits from the Opponent class
 * @extends Opponent
 */
class Boss extends Opponent {
    /**
     * @param game {Game} The instance of the game to which the boss belongs
     */
    constructor (game) {
        super(game);
        this.speed = BOSS_SPEED; // Twice as fast as the opponent
        this.myImage = BOSS_PICTURE;
        this.myImageDead = BOSS_PICTURE_DEAD;
        this.image.src = this.myImage;
    }
}
