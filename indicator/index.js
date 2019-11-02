const { Tray, Menu, shell, ipcMain } = require('electron')
const path = require('path')

module.exports = class Indicator {
  constructor({ bus, db }) {
    this.icon = path.join(__dirname, '../public/logo.png')
    this.bus = bus
    this.db = db
    this.tray = null
    this.menu = null

    this.init()
  }

  init() {
    this.tray = new Tray(this.icon)
    this.updateMenu()
    this.bus.on('update:indicator', (e, lights) => { this.updateMenu(lights) })
  }


  updateMenu(lights = []) {
    if (!this.tray) return

    let lightsMenu = []
    const favorites = this.db.get('favorites', {})

    if (Object.keys(favorites).length && lights.length) {
      const favoritesConnected = Object.keys(favorites)
        .reduce((all, fav) => {
          const light = lights.find(l => l.id === fav)
          if (light) all.push({...light, favData: favorites[fav]})
          return all
        }, [])

      favoritesConnected
        .forEach(light => {
          lightsMenu.push({
            label: light.favData.name,
            submenu: [
              {
                label: 'switch On',
                click() {
                  ipcMain.emit('set:power', { from: 'indicator' }, { light, power: true})
                }
              },
              {
                label: 'switch Off',
                click() {
                  ipcMain.emit('set:power', { from: 'indicator' }, { light, power: false})
                }
              }
            ]
          })
        })
      }

    const menuTemplate = [
      ...lightsMenu,
      { type: 'separator' },
      {
        label: 'Benjamin Caradeuc',
        click() {
          shell.openExternal('https://benjamin.caradeuc.info')
        }
      },
      {
        label: 'Quitter',
        role: 'quit'
      }
    ]

    this.menu = Menu.buildFromTemplate(menuTemplate)
    this.tray.setContextMenu(this.menu)
  }
}
