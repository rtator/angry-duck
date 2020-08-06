scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    myDart.stopDart()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    myDart.throwDart()
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Enemy, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(sprite, myTiles.tile1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    destroyed += 1
})
let myDart: Dart = null
let mySprite: Sprite = null
tiles.setTilemap(tiles.createTilemap(hex`0a0008000000000000000002020200000000000000020202000000000000000202020000000000000002020200000000000000020202000000000000000202020000000000000002020201010101010101010101`, img`
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16,sprites.castle.tilePath5,myTiles.tile1], TileScale.Sixteen))
for (let index = 0; index < 21; index++) {
    mySprite = sprites.create(img`
        f f f f f f f f f f f f f f f f 
        f e e e e e e e e e e e e e e f 
        f e f f f f f f f f f f f f e f 
        f e f f e e e e e e e e f f e f 
        f e f e f e e e e e e f e f e f 
        f e f e e f e e e e f e e f e f 
        f e f e e e f e e f e e e f e f 
        f e f e e e e f f e e e e f e f 
        f e f e e e e f f e e e e f e f 
        f e f e e e f e e f e e e f e f 
        f e f e e f e e e e f e e f e f 
        f e f e f e e e e e e f e f e f 
        f e f f e e e e e e e e f f e f 
        f e f f f f f f f f f f f f e f 
        f e e e e e e e e e e e e e e f 
        f f f f f f f f f f f f f f f f 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(mySprite, myTiles.tile1)
}
let destroyed = 0
myDart = darts.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . . . f b c . f . . . 
    . . . . . . b b b f b f . . . . 
    . . . . . b b 5 5 5 f 5 b . . . 
    . . . . b b 5 d 1 f 5 5 d f . . 
    . . . . b 5 5 1 f f 5 d 4 c . . 
    . . . . b 5 5 d f b d d 4 4 . . 
    b d d d b b d 5 5 5 4 4 4 4 4 b 
    b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
    b d c 5 5 5 5 d 5 5 5 5 5 b . . 
    c d d c d 5 5 b 5 5 5 5 5 5 b . 
    c b d d c c b 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player, 10, 100)
myDart.setTrace(true)
myDart.pow = 50
forever(function () {
    if (controller.up.isPressed()) {
        myDart.angle += 1
    }
})
forever(function () {
    if (controller.down.isPressed()) {
        myDart.angle += -1
    }
})
forever(function () {
    if (destroyed == 21) {
        pause(100)
        game.over(true)
    }
})
