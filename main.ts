controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (dashCooldown) {
        return
    }
    dashCooldown = true
    inDash = true
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . . 2 3 2 3 2 . . . . . . 
        . . . . . 3 2 2 2 3 . . . . . . 
        . . . . . 3 3 3 3 3 . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . . 3 . 3 . 3 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    timer.after(100, function () {
        mySprite.setImage(assets.image`Cooldown`)
        mySprite.setVelocity(0, 0)
        inDash = false
    })
    timer.after(1000, function () {
        mySprite.setImage(assets.image`Normal`)
        dashCooldown = false
    })
    vectorx2 = controller.dx()
    vectory2 = controller.dy()
    if (vectorx2 != 0 && vectory2 != 0) {
        vectorx2 /= 1.41421356
vectory2 /= 1.41421356
    }
    mySprite.setVelocity(999999 * vectorx2, 999999 * vectory2)
})
let inDash = false
let dashCooldown = false
let mySprite: Sprite = null
let vectorx2 = 0
let vectory2 = 0
let vectorx = 0
let vectory = 0
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
    if (inDash) {
        return;
    }
    if (vectorx != 0 && vectory != 0) {
        vectorx /= 1.41421356
vectory /= 1.41421356
    }
    mySprite.setVelocity(70 * vectorx * 0.5 + mySprite.vx * 0.5, 70 * vectory * 0.5 + mySprite.vy * 0.5)
})
