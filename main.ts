input.onButtonPressed(Button.A, function () {
    basic.showNumber(distance_val)
    k_Bit.carStop()
    car_mode = 1
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Skull)
    car_mode = 0
    basic.showIcon(IconNames.Happy)
})
function car_follow () {
    distance_val = k_Bit.ultra()
    if (distance_val > 9 && distance_val <= 30) {
        k_Bit.run(DIR.RunForward, 60)
    } else if (distance_val > 6 && distance_val <= 9) {
        k_Bit.carStop()
    } else if (distance_val <= 6) {
        k_Bit.run(DIR.RunBack, 60)
    } else if (distance_val > 30) {
        k_Bit.run(DIR.RunForward, 60)
    }
}
let distance_val = 0
let car_mode = 0
car_mode = 1
k_Bit.LED_brightness(19)
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # # # # #
    . . . . .
    `)
basic.forever(function () {
    if (car_mode == 0) {
        car_follow()
    }
})
