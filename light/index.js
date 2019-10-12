const { Yeelight, Color } = require("yeelight-awesome")

const red = new Color(255, 0, 0)
const green = new Color(0, 255, 0)
const blue = new Color(0, 0, 255)
const white = new Color(255, 255, 255)

const myLight = new Yeelight({ lightIp: '192.168.1.18', lightPort: 55443 })

module.exports = {
    setRed () {
        return setColor(myLight, red);
    },
    setGreen () {
        return setColor(myLight, green);
    },
    setBlue () {
        return setColor(myLight, blue);
    },
    setWhite () {
        return setColor(myLight, white);
    },
}

async function setColor(l, c) {
    return new Promise(async (success, fail) => {
        try {
            await l.connect()
            await l.setRGB(c, "smooth", 500)
            await l.disconnect()
            success()
        } catch (e) {
            fail(e)
        }
    })
}