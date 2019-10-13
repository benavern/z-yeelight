const { Discover, Yeelight, Color } = require("yeelight-awesome")

module.exports = {
  setColor({ light, color }) {
    console.log('New Color :', color)
    return setColor(light, new Color(color.r, color.g, color.b))
  },

  setName({ light, name }) {
    console.log('New Name : ', name)
    return setName(light, name)
  },

  setPower({ light, power }) {
    console.log('New power : ', power)
    return setPower(light, power)
  },

  setBright({ light, bright }) {
    console.log('New bright : ', bright)
    return setBright(light, bright)
  },

  discover() {
    return discover()
  }
}

function setColor(light, color) {
  const device = new Yeelight({ lightIp: light.host, lightPort: light.port })
  return new Promise(async (success, fail) => {
    try {
      await device.connect()
      await device.setRGB(color, "sudden")
      await device.disconnect()
      success()
    } catch (error) {
      fail(error)
    }
  })
}

function setName(light, name) {
  const device = new Yeelight({ lightIp: light.host, lightPort: light.port })
  return new Promise(async (success, fail) => {
    try {
      await device.connect()
      await device.setName(name)
      await device.disconnect()
      success()
    } catch (error) {
      fail(error)
    }
  })
}

function setPower(light, power) {
  const device = new Yeelight({ lightIp: light.host, lightPort: light.port })
  return new Promise(async (success, fail) => {
    try {
      await device.connect()
      await device.setPower(power)
      await device.disconnect()
      success()
    } catch (error) {
      fail(error)
    }
  })
}

function setBright(light, bright) {
  const device = new Yeelight({ lightIp: light.host, lightPort: light.port })
  return new Promise(async (success, fail) => {
    try {
      await device.connect()
      await device.setBright(bright).catch(e => console.log(e))
      await device.disconnect()
      success()
    } catch (error) {
      fail(error)
    }
  })
}

function discover () {
  return new Promise(async (success, fail) => {
    let discover
    discover = new Discover({ debug: true, timeout: 5000 })
    try {
      const lights = await discover.start()
      await discover.destroy()
      success(lights)
    } catch(e) {
      if (discover.destroy) await discover.destroy()
      fail(e)
    }
  })
}
