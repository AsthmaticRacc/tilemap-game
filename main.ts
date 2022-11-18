let mySprite = sprites.create(img`
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
//controller.moveSprite(mySprite)
info.setScore(0)
info.setLife(3)
tiles.setCurrentTilemap(tilemap`Test Arena`)
game.onUpdate(function () {
    let vectorx= controller.dx()
    let vectory = controller.dy()

    if(vectorx != 0 && vectory != 0){
        vectorx /= 1.41421356
        vectory /= 1.41421356

    }
	mySprite.setVelocity(70 * vectorx * 0.5 + mySprite.vx * 0.5, 70 * vectory * 0.5 + mySprite.vy * 0.5)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function() {
    let vectorx = controller.dx()
    let vectory = controller.dy()

    if (vectorx != 0 && vectory != 0) {
        vectorx /= 1.41421356
        vectory /= 1.41421356

    }

})