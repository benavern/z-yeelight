const lib = require('.')

module.exports = function(bus) {
  bus.on('set:red', (e, args) => lib.setRed(args))

  bus.on('set:green', (e, args) => lib.setGreen(args))

  bus.on('set:blue', (e, args) => lib.setBlue(args))

  bus.on('set:custom', (e, args) => lib.setCustom(args))

  bus.on('set:name', (e, args) => lib.setName(args))

  bus.on('discover:start', (e) => {
    lib.discover()
      .then((found) => {
        e.sender.send('discover:success', found)
      })
      .catch((error) => {
        e.sender.send('discover:error', error)
      })
  })

}
