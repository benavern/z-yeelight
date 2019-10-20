const electron = require('electron')
const path = require('path')
const fs = require('fs')
const { get, set } = require('lodash')

class DB {
  constructor(opts) {
    const userDataPath = (electron.app || electron.remote.app).getPath('userData')
    this.path = path.join(userDataPath, opts.name + '.json')
    this.data = this._parseDataFile()
    this._initBus(opts.bus)
  }

  _parseDataFile() {
    try {
      if (fs.existsSync(this.path)) {
        return JSON.parse(fs.readFileSync(this.path))
      } else {
        this._writeDataFile({})
        return {}
      }
    } catch(err) {
      console.error(err)
      return {}
    }
  }

  _writeDataFile(data) {
    try {
      fs.writeFileSync(this.path, JSON.stringify(data || this.data))
      console.log('DB written at ', this.path)
    } catch(error) {
      console.log(error)
    }
  }

  _initBus(bus){
    bus.on('db:write', (e, { path, value }) => {
      this.set(path, value)
    })

    bus.on('db:read', (e, { path, defaultVal }) => {
      e.sender.send('db:data', this.get(path, defaultVal))
    })
  }

  get(path, defaultVal) {
    console.log('db:get', path)
    return get(this.data, path, defaultVal)
  }

  set(path, val) {
    console.log('db:set', path, val)
    set(this.data, path, val)
    this._writeDataFile()
  }
}

module.exports = DB
