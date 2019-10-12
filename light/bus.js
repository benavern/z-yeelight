const light = require('.')

module.exports = function(bus) {
    bus.on('set:red', () => {
        light.setRed()
    })

    bus.on('set:green', () => {
        light.setGreen()
    })

    bus.on('set:blue', () => {
        light.setBlue()
    })

    bus.on('set:custom', (e, args) => {
        light.setCustom(args)
    })
}