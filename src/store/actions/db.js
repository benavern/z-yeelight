const { ipcRenderer } = window.require('electron')

export function getFavorites () {
  return dispatch => {
    ipcRenderer.send('db:read', { path: 'favorites', defaultVal: {} })

    ipcRenderer.once('db:data', (e, data) => {
      dispatch({
        type: 'GET_FAVORITES_SUCCESS',
        payload: data
      })
    })
  }
}

export function addToFavorites (light, favData) {
  return dispatch => {
    ipcRenderer.send('db:write', { path: `favorites[${light.id}]`, value: favData })

    dispatch({
      type: 'ADD_TO_FAVORITES',
      payload: { light, favData }
    })
  }
}
