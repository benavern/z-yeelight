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

    case 'SET_POWER':
      return {
        list: {
          ...state.list,
          [action.payload.light.id]: setPower(action.payload.light, action.payload.power)
        },
        loading: state.loading
      }

    case 'SET_COLOR':
      return {
        list: {
          ...state.list,
          [action.payload.light.id]: setColor(action.payload.light, action.payload.color)
        },
        loading: state.loading
      }

    case 'SET_BRIGHT':
      return {
        list: {
          ...state.list,
          [action.payload.light.id]: setBright(action.payload.light, action.payload.color)
        },
        loading: state.loading
      }

    default:
      return state;
  }
}

function setPower(light, value) {
  const status = value ? 'on' : 'off'
  light.status = status
  return light
}

function setColor (light, value) {
  const rgb = value.r * 65536 + value.g * 256 + value.b;
  light.rgb = rgb
  return light
}

function setBright (light, value) {
  light.bright = value
  return light
}
