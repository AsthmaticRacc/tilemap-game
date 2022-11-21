controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    vectorx2 = controller.dx()
    vectory2 = controller.dy()
    if (vectorx2 != 0 && vectory2 != 0) {
        vectorx2 /= 1.41421356
vectory2 /= 1.41421356
    }
    mySprite.setVelocity(10000 * vectorx * 0.5 + mySprite.vx * 0.5, 10000 * vectory * 0.5 + mySprite.vy * 0.5)
})
let vectory = 0
let vectorx = 0
let vectory2 = 0
let vectorx2 = 0
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
scene.cameraFollowSprite(mySprite)
info.setScore(0)
info.setLife(3)
tiles.setCurrentTilemap(tilemap`Test Arena`)
game.onUpdate(function () {
    vectorx = controller.dx()
    vectory = controller.dy()
    if (vectorx != 0 && vectory != 0) {
        vectorx /= 1.41421356
vectory /= 1.41421356
    }
    mySprite.setVelocity(70 * vectorx * 0.5 + mySprite.vx * 0.5, 70 * vectory * 0.5 + mySprite.vy * 0.5)
})
