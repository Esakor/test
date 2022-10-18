function Turn_Right () {
    pins.servoSetPulse(AnalogPin.P8, 0)
    pins.servoSetPulse(AnalogPin.P13, 1700)
    control.waitMicros(20000)
}
function Forward () {
    pins.servoSetPulse(AnalogPin.P8, 1300)
    pins.servoSetPulse(AnalogPin.P13, 1700)
    control.waitMicros(20000)
}
input.onButtonPressed(Button.A, function () {
    Forward()
})
function Turn_Left () {
    pins.servoSetPulse(AnalogPin.P8, 1300)
    pins.servoSetPulse(AnalogPin.P13, 0)
    control.waitMicros(20000)
}
input.onButtonPressed(Button.AB, function () {
    Turn_Right()
})
input.onButtonPressed(Button.B, function () {
    Backward()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Turn_Left()
})
function sensor () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P1, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P1, 0)
    distance = pins.pulseIn(DigitalPin.P2, PulseValue.High) / 58
    if (distance < 8) {
        pins.servoSetPulse(AnalogPin.P8, 0)
        pins.servoSetPulse(AnalogPin.P13, 0)
        control.waitMicros(20000)
    }
}
function Backward () {
    pins.servoSetPulse(AnalogPin.P8, 1700)
    pins.servoSetPulse(AnalogPin.P13, 1300)
    control.waitMicros(20000)
}
let distance = 0
basic.showIcon(IconNames.TShirt)
distance = 0
basic.forever(function () {
    sensor()
    basic.showNumber(distance)
})
