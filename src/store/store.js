import {createStore} from "redux";

const initialState = {
  contrast: 100,
  hue: 0,
  brightness: 100,
  saturation: 100
};


const CONTRAST = 'CONTRAST'
const HUE = 'HUE'
const BRIGHTNESS = 'BRIGHTNESS'
const SATURATION = 'SATURATION'

const changeCont = contrast => ({
  type: CONTRAST,
  contrast
})
const changeHue = hue => ({
  type: HUE,
  hue
})
const changeBrightness = brightness => ({
  type: BRIGHTNESS,
  brightness
})
const changeSaturation = saturation => ({
  type: SATURATION,
  saturation
})

function reducer(state = initialState, action) {
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
    default:
      return state;
  }
}

const store = createStore(reducer);

console.log(store.getState())

const listener = () => {
  const state = store.getState();
  console.log(state);
};

const unsubscribe = store.subscribe(listener);