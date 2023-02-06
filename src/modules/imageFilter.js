const CONTRAST = 'filter/CONTRAST'
const HUE = 'filter/HUE'
const BRIGHTNESS = 'filter/BRIGHTNESS'
const SATURATION = 'filter/SATURATION'
const RESET_FILTER = 'filter/RESET_FILTER'

export const changeCont = contrast => ({
  type: CONTRAST,
  contrast
})
export const changeH = hue => ({
  type: HUE,
  hue
})
export const changeBright = brightness => ({
  type: BRIGHTNESS,
  brightness
})
export const changeSaturate = saturation => ({
  type: SATURATION,
  saturation
})
export const resetFilter = () => ({
  type: RESET_FILTER
})

const initialState = {
  contrast: 100,
  hue: 0,
  brightness: 100,
  saturation: 100
};

export default function filterImage(state = initialState, action) {
  switch (action.type) {
    case CONTRAST:
      return {
        ...state,
        contrast: action.contrast
      }
    case HUE:
      return {
        ...state,
        hue: action.hue
      }
    case BRIGHTNESS:
      return {
        ...state,
        brightness: action.brightness
      }
    case SATURATION:
      return {
        ...state,
        saturation: action.saturation
      }
    case RESET_FILTER:
      return initialState

    default:
      return state;
  }
}