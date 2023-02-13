import MagicWand from "magic-wand-tool"

const initialState = {
  colorThreshold: 15,
  blurRadius: 5,
  simplifyTolerant: 0,
  simplifyCount: 30,
  hatchLength: 4,
  hatchOffset: 0,
  imageInfo: null,
  cacheInd: null,
  mask: null,
  oldMask: null,
  downPoint: null,
  allowDraw: false,
  addMode: false,
  currentThreshold: this.colorThreshold,
}

const INIT_CANVAS = 'nukki/INIT_CANVAS'
const GET_MOUSE_POSITION = 'nukki/GET_MOUSE_POSITION'
const ON_MOUSE_DOWN = 'nukki/ON_MOUSE_DOWN'
const ON_MOUSE_MOVE = 'nukki/ON_MOUSE_MOVE'
const ON_MOUSE_UP = 'nukki/ON_MOUSE_UP'
const ON_KEY_DOWN = 'nukki/ON_KEY_DOWN'
const ON_KEY_UP = 'nukki/ON_KEY_UP'

const SHOW_THRESHOLD = 'nukki/SHOW_THRESHOLD'

const DRAW_MASK = 'nukki/DRAW_MASK'
const HATCH_TICK = 'nukki/HATCH_TICK'
const DRAW_BORDER = 'nukki/DRAW_BORDER'
const TRACE = 'nukki/TRACE'
const PAINT = 'nukki/PAINT'

const HEX_TO_RGB = 'nukki/HEX_TO_RGB'
const CONCAT_MASKS = 'nukki/CONCAT_MASKS'

export const initCanvas = (img, imgCtx) => ({
  type: INIT_CANVAS,
  img,
  imgCtx
})

export const getMoustPosition = (e) => ({
  type: GET_MOUSE_POSITION,
  mouseEvent: e
})

export default function nukki(state = initialState, action) {
  switch (action.type) {
    case INIT_CANVAS:
      return {
        ...state, imageInfo: {
          width: action.img.width,
          height: action.img.height,
          context: action.imgCtx.getContext("2d"),
          data: action.imgCtx.getImageData(0, 0, this.width, this.height)
        },
        mask: null
      }
    case GET_MOUSE_POSITION:


    default:
      return state
  }
}


// canvas addeventlistner로 추가
// document.onkeydown = onKeyDown;
// document.onkeyup = onKeyUp;
