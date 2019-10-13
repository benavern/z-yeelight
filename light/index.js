const { Discover, Yeelight, Color } = require("yeelight-awesome")

const red = new Color(255, 0, 0)
const green = new Color(0, 255, 0)
const blue = new Color(0, 0, 255)
const white = new Color(255, 255, 255)

module.exports = {
  setRed ({ light }) {
    console.log('New Color :', red)
    return setColor(light, red)
  },
  setGreen ({ light }) {
    console.log('New Color :', green)
    return setColor(light, green)
  },
  setBlue ({ light }) {
    console.log('New Color :', blue)
    return setColor(light, blue)
  },
  setWhite ({ light }) {
    console.log('New Color :', white)
    return setColor(light, white)
  },
  setCustom({ light, rgb: { r, g, b } }) {
    console.log('New Color :', { r, g, b })
    return setColor(light, new Color(r, g, b))
  },
  setName({ light, name }) {
    console.log('New Name : ', name)
    return setName(light, name)
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

function discover () {
  return new Promise(async (success, fail) => {
    let discover
    discover = new Discover()
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
