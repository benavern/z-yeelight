const { ipcRenderer } = window.require('electron')

export function discover () {
  return dispatch => {
    ipcRenderer.send('discover:start')

    dispatch({
      type: 'DISCOVER_START'
    })

    ipcRenderer.once('discover:success', (e, lights) => {
      dispatch({
        type: 'DISCOVER_SUCCESS',
        payload: lights
      })
    })
  }
}
