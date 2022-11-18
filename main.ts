controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controller.dy() > 0) {
        mySprite.sayText("down")
    } else if (controller.dy() < 0) {
        mySprite.sayText("up")
    } else if (controller.dx() > 0) {
        mySprite.sayText("right")
    } else if (controller.dx() < 0) {
        mySprite.sayText("left")
    } else if (controller.dx() < 0 && controller.dy() < 0) {
        mySprite.sayText("left-up")
    } else if (controller.dx() < 0 && controller.dy() > 0) {
        mySprite.sayText("left-down")
    } else if (controller.dx() > (controller.dy() < 0)) {
        mySprite.sayText("right-up")
    } else if (controller.dx() > 0 && controller.dy() > 0) {
        mySprite.sayText("right-down")
    } else {
    	
    }
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . . 1 3 1 3 1 . . . . . . 
    . . . . . 3 1 1 1 3 . . . . . . 
    . . . . . 3 3 3 3 3 . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . . 3 . 3 . 3 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setVelocity(50, 50)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
info.setScore(0)
info.setLife(3)
tiles.setCurrentTilemap(tilemap`Test Arena`)
game.onUpdate(function () {
	
})
