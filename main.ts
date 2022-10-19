function Turn_Right () {
    pins.servoSetPulse(AnalogPin.P8, 0)
    pins.servoSetPulse(AnalogPin.P13, 1700)
    control.waitMicros(20000)
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        Forward()
    } else if (receivedNumber == 2) {
        Backward()
    } else if (receivedNumber == 3) {
        Turn_Right()
    } else if (receivedNumber == 4) {
        Turn_Left()
    }
})
function Forward () {
    pins.servoSetPulse(AnalogPin.P8, 1300)
    pins.servoSetPulse(AnalogPin.P13, 1700)
    control.waitMicros(20000)
}
input.onButtonPressed(Button.A, function () {
	
})
function Turn_Left () {
    pins.servoSetPulse(AnalogPin.P8, 1300)
    pins.servoSetPulse(AnalogPin.P13, 0)
    control.waitMicros(20000)
}
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
	
})
function sensor () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P1, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P1, 0)
    distance = pins.pulseIn(DigitalPin.P2, PulseValue.High) / 58
    if (distance < 30) {
        Turn_Right()
        control.waitMicros(20000)
        Forward()
        control.waitMicros(20000)
    }
}
function Backward () {
    pins.servoSetPulse(AnalogPin.P8, 1700)
    pins.servoSetPulse(AnalogPin.P13, 1300)
    control.waitMicros(20000)
}
let distance = 0
basic.showIcon(IconNames.Rollerskate)
distance = 0
radio.setGroup(7)
basic.forever(function () {
    sensor()
    basic.showNumber(distance)
})
