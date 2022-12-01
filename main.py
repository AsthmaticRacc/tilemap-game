def on_a_pressed():
    setBlade(True)
    
    def on_after():
        setBlade(False)
    timer.after(100, on_after)
    
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_b_pressed():
    global dashCooldown, inDash
    if dashCooldown or ghostInWall:
        return
    dashCooldown = True
    inDash = True
    mySprite.set_image(img("""
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
    """))
    
    def on_after2():
        global inDash
        mySprite.set_image(assets.image("""
            Cooldown
        """))
        inDash = False
    timer.after(100, on_after2)
    
    
    def on_after3():
        global dashCooldown
        mySprite.set_image(assets.image("""
            Normal
        """))
        dashCooldown = False
    timer.after(1000, on_after3)
    
    mySprite.set_position(ghost.x, ghost.y)
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

def on_on_overlap(sprite, otherSprite):
    scene.camera_shake(4, 500)
sprites.on_overlap(SpriteKind.enemy, SpriteKind.projectile, on_on_overlap)

def setBlade(on: bool):
    blade.set_flag(SpriteFlag.GHOST, not (on))
    blade.set_flag(SpriteFlag.INVISIBLE, not (on))
inDash = False
dashCooldown = False
blade: Sprite = None
mySprite: Sprite = None
vectory = 0
vectorx = 0
vectory2 = 0
vectorx2 = 0
ghostInWall = False
mySprite = sprites.create(img("""
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
    """),
    SpriteKind.player)
blade = sprites.create(assets.image("""
    bladeLeft
"""), SpriteKind.projectile)
enemy1 = sprites.create(img("""
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
    """),
    SpriteKind.enemy)
ghost = sprites.create(assets.image("""
    Ghost
"""), SpriteKind.projectile)
blade.set_flag(SpriteFlag.INVISIBLE, True)
blade.set_flag(SpriteFlag.GHOST, True)
scene.camera_follow_sprite(mySprite)
info.set_score(0)
info.set_life(3)
tiles.set_current_tilemap(tilemap("""
    Test Arena
"""))

def on_on_update():
    global vectorx, vectory, ghostInWall
    vectorx = controller.dx()
    vectory = controller.dy()
    dashx = vectorx
    dashy = vectory
    if dashx > 0:
        dashx = 1
    elif dashx < 0:
        dashx = -1
    if dashy > 0:
        dashy = 1
    elif dashy < 0:
        dashy = -1
    blade.set_position(mySprite.x, mySprite.y)
    if inDash:
        return
    if vectorx != 0 and vectory != 0:
        vectorx /= 1.41421356
        vectory /= 1.41421356
    if dashx != 0 and dashy != 0:
        dashx /= 1.41421356
        dashy /= 1.41421356
    mySprite.set_velocity(70 * vectorx * 0.5 + mySprite.vx * 0.5,
        70 * vectory * 0.5 + mySprite.vy * 0.5)
    ghost.set_position(mySprite.x + dashx * 40, mySprite.y + dashy * 40)
    if tiles.tile_at_location_is_wall(tiles.get_tile_location(ghost.tilemap_location().column,
            ghost.tilemap_location().row)):
        ghost.set_image(assets.image("""
            GhostBlocked
        """))
        ghostInWall = True
    else:
        ghost.set_image(assets.image("""
            Ghost
        """))
        ghostInWall = False
    dx = controller.dx()
    dy = controller.dy()
    if dx == 0 and dy == 0:
        pass
    elif dx > 0 and dy == 0:
        blade.set_image(assets.image("""
            bladeRight
        """))
    elif dx < 0 and dy == 0:
        blade.set_image(assets.image("""
            bladeLeft
        """))
    elif dx == 0 and dy > 0:
        blade.set_image(assets.image("""
            bladeDown
        """))
    elif dx == 0 and dy < 0:
        blade.set_image(assets.image("""
            bladeUp
        """))
    elif dx > 0 and dy > 0:
        blade.set_image(assets.image("""
            bladeDownRight
        """))
    elif dx < 0 and dy > 0:
        blade.set_image(assets.image("""
            bladeDownLeft
        """))
    elif dx > 0 and dy < 0:
        blade.set_image(assets.image("""
            bladeUpRight
        """))
    elif dx < 0 and dy < 0:
        blade.set_image(assets.image("""
            bladeUpLeft
        """))
game.on_update(on_on_update)
