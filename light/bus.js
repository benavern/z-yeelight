const lib = require('.')

module.exports = function(bus) {
  bus.on('set:color', (e, args) => {
    lib.setColor(args)
  })

  bus.on('set:name', (e, args) => {
    lib.setName(args)
  })

  bus.on('set:power', (e, args) => {
    lib.setPower(args)
  })

  bus.on('set:bright', (e, args) => {
    lib.setBright(args)
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
