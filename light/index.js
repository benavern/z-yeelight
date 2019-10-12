const { Discover, Yeelight, Color } = require("yeelight-awesome")

const red = new Color(255, 0, 0)
const green = new Color(0, 255, 0)
const blue = new Color(0, 0, 255)
const white = new Color(255, 255, 255)

const myLight = new Yeelight({ lightIp: '192.168.1.18', lightPort: 55443 })

module.exports = {
  setRed () {
    console.log('New Color :', red)
    return setColor(myLight, red)
  },
  setGreen () {
    console.log('New Color :', green)
    return setColor(myLight, green)
  },
  setBlue () {
    console.log('New Color :', blue)
    return setColor(myLight, blue)
  },
  setWhite () {
    console.log('New Color :', white)
    return setColor(myLight, white)
  },
  setCustom({ r, g, b }) {
    console.log('New Color :', { r, g, b })
    return setColor(myLight, new Color(r, g, b))
  },
  discover() {
    return discover()
  }
}

function setColor(light, color) {
  return new Promise(async (success, fail) => {
    try {
      await light.connect()
      await light.setRGB(color, "sudden")
      await light.disconnect()
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
