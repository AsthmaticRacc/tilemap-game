 controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    setBlade(true)

    timer.after(100, function () {
        setBlade(false)
    })
})

function populateEnemies(tileImg : Image, spriteImage : Image, scale : number){
    let joshes = tiles.getTilesByType(tileImg)

    for (let i = 0; i < joshes.length; i++) {
        let josh = sprites.create(spriteImage, SpriteKind.Enemy)
        josh.setScale(scale)
        tiles.placeOnTile(josh, joshes[i])
        tiles.setTileAt(joshes[i], img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f 8 f f f f 8 f 
f f 8 f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f 8 f f f f 8 f f f f 
f f f f f f f f f f f f f f f f 
f 8 f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f 8 f f f f f 8 f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f 8 f f f f f f f f f f 8 f f 
f f f f f f f 8 f f f f f f f f 
f f f f f f f f f f f f f f f f 
`)
    }
}

function spawnEnemies(){
    populateEnemies(img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f 2 f f f f 2 f 
f f 2 f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f 2 f f f f 2 f f f f 
f f f f f f f f f f f f f f f f 
f 2 f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f 2 f f f f f 2 f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f 2 f f f f f f f f f f 2 f f 
f f f f f f f 2 f f f f f f f f 
f f f f f f f f f f f f f f f f
`, assets.image`josh`, 1/2)
  



}

namespace SpriteKind {
    export const Ghost = SpriteKind.create()
}

controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (dashCooldown || ghostInWall) {
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
        inDash = false
    })
    timer.after(1000, function () {
        mySprite.setImage(assets.image`Normal`)
        dashCooldown = false
    })
    mySprite.setPosition(ghost.x, ghost.y)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprite.startEffect(effects.disintegrate)
    timer.after(100, function(){
        effects.clearParticles(sprite)
    })
    scene.cameraShake(4, 500)
})
function setBlade(on: boolean) {
    blade.setFlag(SpriteFlag.Ghost, !(on))
    blade.setFlag(SpriteFlag.Invisible, !(on))
}
let inDash = false
let dashCooldown = false
let blade: Sprite = null
let mySprite: Sprite = null
let vectory = 0
let vectorx = 0
let vectory2 = 0
let vectorx2 = 0
let ghostInWall = false 
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
blade = sprites.create(assets.image`bladeLeft`, SpriteKind.Projectile)
let enemy1 = sprites.create(img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, SpriteKind.Enemy)
let ghost = sprites.create(assets.image`Ghost`, SpriteKind.Ghost)

blade.setFlag(SpriteFlag.Invisible, true)
blade.setFlag(SpriteFlag.Ghost, true)
scene.cameraFollowSprite(mySprite)
info.setScore(0)
info.setLife(3)
tiles.setCurrentTilemap(tilemap`Test Arena`)
spawnEnemies()
game.onUpdate(function () {
    vectorx = controller.dx()
    vectory = controller.dy()
    
    let dashx = vectorx
    let dashy = vectory 

    if(dashx > 0){
        dashx = 1
    } else if (dashx < 0) {
        dashx = -1
    }

    if (dashy > 0) {
        dashy = 1
    } else if (dashy < 0) {
        dashy = -1
    }
    
    blade.setPosition(mySprite.x, mySprite.y)
    if (inDash) {
        return;
    }
    if (vectorx != 0 && vectory != 0) {
        vectorx /= 1.41421356
        vectory /= 1.41421356
    }

    if (dashx != 0 && dashy != 0) {
        dashx /= 1.41421356
        dashy /= 1.41421356
    }
    
    mySprite.setVelocity(70 * vectorx * 0.5 + mySprite.vx * 0.5, 70 * vectory * 0.5 + mySprite.vy * 0.5)
    ghost.setPosition(mySprite.x + dashx * 40, mySprite.y + dashy * 40)
    
    if (dashx == 0 && dashy == 0) {
        ghost.setImage(assets.image`Empty`)
    } else if (tiles.tileAtLocationIsWall(tiles.getTileLocation(ghost.tilemapLocation().column, ghost.tilemapLocation().row))) {
        ghost.setImage(assets.image`GhostBlocked`)
        ghostInWall = true
    } else {
        ghost.setImage(assets.image`Ghost`)
        ghostInWall = false 
    }
    
    let dx = controller.dx()
    let dy = controller.dy()
    if (dx == 0 && dy == 0) {
        
    } else if (dx > 0 && dy == 0) {
        blade.setImage(assets.image`bladeRight`)
    } else if (dx < 0 && dy == 0) {
        blade.setImage(assets.image`bladeLeft`)
    } else if (dx == 0 && dy > 0) {
        blade.setImage(assets.image`bladeDown`)
    } else if (dx == 0 && dy < 0) {
        blade.setImage(assets.image`bladeUp`)
    } else if (dx > 0 && dy > 0) {
        blade.setImage(assets.image`bladeDownRight`)
    } else if (dx < 0 && dy > 0) {
        blade.setImage(assets.image`bladeDownLeft`)
    } else if (dx > 0 && dy < 0) {
        blade.setImage(assets.image`bladeUpRight`)
    } else if (dx < 0 && dy < 0) {
        blade.setImage(assets.image`bladeUpLeft`)
    }
})
