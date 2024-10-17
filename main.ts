let zahl = 10
for (let index = 0; index < 10; index++) {
    basic.showNumber(zahl, 57)
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    zahl += -1
}
basic.forever(function () {
    zahl = 1
    for (let index = 0; index < 10; index++) {
        basic.showNumber(zahl, 57)
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        zahl += 1
    }
})
