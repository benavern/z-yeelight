const lib = require('.')

module.exports = function(bus) {
  bus.on('set:color', (e, args) => {
    console.log('set:color', args)
    lib.setColor(args)
  })

  bus.on('set:name', (e, args) => {
    console.log('set:name', args)
    lib.setName(args)
  })

  bus.on('set:power', (e, args) => {
    console.log('set:power', args)
    lib.setPower(args)
  })

  bus.on('set:bright', (e, args) => {
    console.log('set:bright', args)
    lib.setBright(args)
  })

  bus.on('discover:start', (e) => {
    console.log('discover:start')
    lib.discover()
      .then((found) => {
        e.sender.send('discover:success', found)
      })
      .catch((error) => {
        e.sender.send('discover:error', error)
      })
  })

}
