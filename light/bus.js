const lib = require('.')

module.exports = function(bus) {
  bus.on('set:red', (e, l) => {
    lib.setRed()
  })

  bus.on('set:green', (e, l) => {
    lib.setGreen()
  })

  bus.on('set:blue', (e, l) => {
    lib.setBlue()
  })

  bus.on('set:custom', (e, args) => {
    lib.setCustom(args)
  })

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
