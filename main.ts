radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 2) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    } else if (receivedNumber == 5) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 72)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 72)
    } else if (receivedNumber == 7) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 72)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 72)
    } else {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
radio.setGroup(7)
music.playMelody("C5 E A D B F G C ", 120)
maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
basic.pause(100)
maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
basic.pause(100)
maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
basic.pause(100)
maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
basic.pause(100)
maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
basic.pause(100)
maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
basic.pause(100)
maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
basic.pause(100)
maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) == 8) {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
