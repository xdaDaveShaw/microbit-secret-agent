input.onButtonPressed(Button.A, function () {
    if (EnteringPass == 0) {
        EnteringPass = 1
        basic.showString(" password?")
    } else if (PassSoFar == 2) {
        PassSoFar = 0
        EnteringPass = 0
        Unlocked = 1
        basic.showString(" OK - Welcome agent Viloet!")
        basic.showLeds(`
            . . # # .
            . . . # .
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        EnteringPass = 0
        PassSoFar = 0
        basic.showString(" Access Denied!")
    }
})
input.onButtonPressed(Button.AB, function () {
    if (EnteringPass == 1) {
        if (PassSoFar == 1) {
            PassSoFar = 2
        } else {
            EnteringPass = 0
            PassSoFar = 0
            basic.showString(" Access Denied!")
        }
    }
    if (Unlocked == 1) {
        basic.showString(" Device Locked")
        Unlocked = 0
    }
})
input.onButtonPressed(Button.B, function () {
    if (EnteringPass == 1) {
        if (PassSoFar == 0) {
            PassSoFar = 1
        } else {
            EnteringPass = 0
            PassSoFar = 0
            basic.showString(" Access Denied!")
        }
    }
})
let PassSoFar = 0
let EnteringPass = 0
let Unlocked = 0
Unlocked = 0
basic.forever(function () {
    if (Unlocked == 0) {
        basic.showLeds(`
            . # # # .
            . # . # .
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            . . . # .
            . . . # .
            . # # # .
            . # # # .
            . # # # .
            `)
    }
})
