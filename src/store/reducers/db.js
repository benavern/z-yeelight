const defaultState = {
  favorites: {}
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_FAVORITES_SUCCESS':
      return { favorites: action.payload, settings: state.settings }

    case 'ADD_TO_FAVORITES':
      return {
        favorites: {
          ...state.favorites,
          [action.payload.light.id]: action.payload.favData
        }
      }

    default:
      return state;
  }
}
