def Turn_Right():
    pins.servo_set_pulse(AnalogPin.P8, 0)
    pins.servo_set_pulse(AnalogPin.P13, 1700)
    control.wait_micros(20000)
def Forward():
    pins.servo_set_pulse(AnalogPin.P8, 1300)
    pins.servo_set_pulse(AnalogPin.P13, 1700)
    control.wait_micros(20000)

def on_button_pressed_a():
    Forward()
input.on_button_pressed(Button.A, on_button_pressed_a)

def Turn_Left():
    pins.servo_set_pulse(AnalogPin.P8, 1300)
    pins.servo_set_pulse(AnalogPin.P13, 0)
    control.wait_micros(20000)

def on_button_pressed_ab():
    Turn_Right()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    Backward()
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_logo_pressed():
    Turn_Left()
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

def sensor():
    global distance
    pins.digital_write_pin(DigitalPin.P1, 0)
    control.wait_micros(2)
    pins.digital_write_pin(DigitalPin.P1, 1)
    control.wait_micros(10)
    pins.digital_write_pin(DigitalPin.P1, 0)
    distance = pins.pulse_in(DigitalPin.P2, PulseValue.HIGH) / 58
    if distance < 8:
        pins.servo_set_pulse(AnalogPin.P8, 0)
        pins.servo_set_pulse(AnalogPin.P13, 0)
        control.wait_micros(20000)
def Backward():
    pins.servo_set_pulse(AnalogPin.P8, 1700)
    pins.servo_set_pulse(AnalogPin.P13, 1300)
    control.wait_micros(20000)
distance = 0
basic.show_icon(IconNames.TSHIRT)
distance = 0

def on_forever():
    sensor()
    basic.show_number(distance)
basic.forever(on_forever)
