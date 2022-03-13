input.onGesture(Gesture.TiltLeft, function () {
    basic.clearScreen()
})
input.onGesture(Gesture.LogoDown, function () {
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    step += 1
})
input.onGesture(Gesture.LogoUp, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    step = 0
})
input.onGesture(Gesture.TiltRight, function () {
    basic.clearScreen()
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showNumber(step)
})
let step = 0
step = 0
basic.forever(function () {
    if (step == 5) {
        basic.showLeds(`
            . . # # .
            . # . . #
            . # . . .
            . # . . #
            . . # # .
            `)
        basic.showIcon(IconNames.Happy)
        music.startMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.OnceInBackground)
    }
    if (step == 10) {
        basic.showIcon(IconNames.Heart)
        music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.OnceInBackground)
    }
})
