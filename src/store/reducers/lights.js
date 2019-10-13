const defaultState = {
  list: [],
  loading: false
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'DISCOVER_START':
      return { list: [], loading: true }

    case 'DISCOVER_SUCCESS':
      const list = action.payload.reduce((lights, curr) => {
        return { ...lights, [curr.id]: curr }
      }, {});
      return { list, loading: false }

    default:
      return state;
  }
}
