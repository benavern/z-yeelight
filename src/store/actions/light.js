const { ipcRenderer } = window.require('electron')

export function setPower (light, power) {
  return dispatch => {
    ipcRenderer.send('set:power', { light, power })

    dispatch({
      type: 'SET_POWER',
      payload: { light, power }
    })
  }
}

export function setColor (light, color) {
  return dispatch => {
    ipcRenderer.send('set:color', { light, color })

    dispatch({
      type: 'SET_COLOR',
      payload: { light, color }
    })
  }
}

export function setBright (light, bright) {
  return dispatch => {
    ipcRenderer.send('set:bright', { light, bright })

    dispatch({
      type: 'SET_BRIGHT',
      payload: { light, bright }
    })
  }
}
