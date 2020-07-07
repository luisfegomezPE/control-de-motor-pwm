let velocidad = 10
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, velocidad)
    basic.pause(5000)
    led.plotBarGraph(
    pins.digitalReadPin(DigitalPin.P0),
    255
    )
    velocidad += velocidad + 20
})
