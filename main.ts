 controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    setBlade(true)

    timer.after(100, function () {
        setBlade(false)
    })
})

function populateEnemies(tileImg : Image, spriteImage : Image, scale : number, kind : number){
    let joshes = tiles.getTilesByType(tileImg)

    for (let i = 0; i < joshes.length; i++) {
        let josh = sprites.create(spriteImage, kind)
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
`, assets.image`josh`, 1/2, SpriteKind.josh)
  
    populateEnemies(img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f 7 f f f f 7 f 
f f 7 f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f 7 f f f f 7 f f f f 
f f f f f f f f f f f f f f f f 
f 7 f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f 7 f f f f f 7 f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f 7 f f f f f f f f f f 7 f f 
f f f f f f f 7 f f f f f f f f 
f f f f f f f f f f f f f f f f 
`, assets.image`Jamie`, 1, SpriteKind.jamie)

    populateEnemies(img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f 5 f f f f 5 f 
f f 5 f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f 5 f f f f 5 f f f f 
f f f f f f f f f f f f f f f f 
f 5 f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f 5 f f f f f 5 f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f 5 f f f f f f f f f f 5 f f 
f f f f f f f 5 f f f f f f f f 
f f f f f f f f f f f f f f f f 
`, assets.image`Gronk`, 1, SpriteKind.gronk)
}
scene.onOverlapTile(SpriteKind.Player, img`
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
`, function(sprite: Sprite, location: tiles.Location) {
    hurtPlayer(null)
})
namespace SpriteKind {
    export const Ghost = SpriteKind.create()
    export const jamie = SpriteKind.create()
    export const gronk = SpriteKind.create()
    export const josh = SpriteKind.create()
    export const Blade = SpriteKind.create()

}

controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (dashCooldown || ghostInWall) {
        return
    }
    dashCooldown = true


        mySprite.setImage(assets.image`Cooldown`)
    timer.after(500, function () {
        mySprite.setImage(assets.image`Normal`)
        dashCooldown = false
    })
    mySprite.setPosition(ghost.x, ghost.y)
})

let invincible = false 
function hurtPlayer(enemy:Sprite){
    if(!invincible){
        info.changeLifeBy(-1)
        invincible = true 
        mySprite.startEffect(effects.fire)
        timer.after(500, function(){
            effects.clearParticles(mySprite)
            invincible = false
        })
    }
}

sprites.onOverlap(SpriteKind.gronk, SpriteKind.Player, function (sprite, otherSprite) {
    hurtPlayer(sprite)
})

sprites.onOverlap(SpriteKind.josh, SpriteKind.Player, function (sprite, otherSprite) {
    hurtPlayer(sprite)
})

sprites.onOverlap(SpriteKind.jamie, SpriteKind.Player, function (sprite, otherSprite) {
    hurtPlayer(sprite)
})

sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    hurtPlayer(sprite)
})

function setBlade(on: boolean) {
    blade.setFlag(SpriteFlag.Ghost, !(on))
    blade.setFlag(SpriteFlag.Invisible, !(on))
}

function killEnemy(enemye:Sprite){
    enemye.setVelocity((mySprite.x - enemye.x) * -10, (mySprite.y - enemye.y) * -10)

    scene.cameraShake(4, 313)
    enemye.startEffect(effects.disintegrate )
    timer.after(213, function(){
        enemye.destroy()
        enemye.setScale(0)
    })
}

sprites.onOverlap(SpriteKind.Blade, SpriteKind.gronk, function(sprite: Sprite, otherSprite: Sprite) {
    killEnemy(otherSprite)
})

sprites.onOverlap(SpriteKind.Blade, SpriteKind.josh, function (sprite: Sprite, otherSprite: Sprite) {
    killEnemy(otherSprite)
})

let dashCooldown = false
let blade: Sprite = null
let mySprite: Sprite = null
let vectory = 0
let vectorx = 0
let vectory2 = 0
let vectorx2 = 0
let ghostInWall = false 
mySprite = sprites.create(assets.image`Normal`, SpriteKind.Player)
blade = sprites.create(assets.image`bladeCircle`, SpriteKind.Blade)
let ghost = sprites.create(assets.image`Ghost`, SpriteKind.Ghost)

blade.setFlag(SpriteFlag.Invisible, true)
blade.setFlag(SpriteFlag.Ghost, true)
scene.cameraFollowSprite(mySprite)
info.setScore(0)
info.setLife(3)
blade.setScale(1.1)


let levels = [
    tilemap`level0`,
    tilemap`level1`,
    tilemap`level2`,
    tilemap`level3`,
    tilemap`level4`,
    tilemap`level5`,
]

setLevel(0)
let joshes = sprites.allOfKind(SpriteKind.josh)

function postponeProjectile(josh: Sprite){
    timer.after(1000, function () {
        if(josh.scale !=  0){
            let projectile = sprites.createProjectileFromSprite(assets.image`Orange`, josh, mySprite.x - josh.x, mySprite.y - josh.y)
            
            projectile.setScale(1/2)
            postponeProjectile(josh)
        }
    })
}

for (let i = 0; i < joshes.length; i++) {
    postponeProjectile(joshes[i])
}


function setLevel(level : number){
    tiles.setCurrentTilemap(levels[level])
    spawnEnemies(); 
    tiles.placeOnRandomTile(mySprite, img`
f f f f f f f f f f f f f f f f 
f f f f f 8 8 8 8 8 8 8 f f 8 f 
f f 8 f 8 f f f f f f f 8 f f f 
f f f 8 f f f f f f f f f 8 f f 
f f 8 f f f f f f f f f f f 8 f 
f f 8 f f f 8 f f f f 8 f f 8 f 
f f 8 f f f f f f f f f f f 8 f 
f 8 8 f f f f f f f f f f f 8 f 
f f 8 f f f f f f f f f f f 8 f 
f f 8 f f 8 f f f f f 8 f f 8 f 
f f 8 f f f f f f f f f f f 8 f 
f f f 8 f f f f f f f f f 8 f f 
f f f f 8 f f f f f f f 8 f f f 
f f 8 f f 8 8 8 8 8 8 8 f 8 f f 
f f f f f f f 8 f f f f f f f f 
f f f f f f f f f f f f f f f f 
`)
    let gronks = sprites.allOfKind(SpriteKind.gronk)
    for (let i = 0; i < gronks.length; i++) {
        gronks[i].follow(mySprite, 50)
    }

}


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
        
    let joshes = sprites.allOfKind(SpriteKind.josh)
    for (let i = 0; i < joshes.length; i++) {
        if (Math.abs(joshes[i].x - mySprite.x) + Math.abs(joshes[i].y - mySprite.y) > 50)
            joshes[i].follow(mySprite, 50)
        else {
            joshes[i].follow(mySprite, 0)

        }
    }
})
