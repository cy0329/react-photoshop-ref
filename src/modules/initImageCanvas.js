import {useEffect} from "react";

const initialState = {
  maxCanvasWidth: window.innerWidth,
  maxCanvasHeight: window.innerHeight,
  width: 1600,
  height: 900
}

const SET_MAX_WIDTH = 'imageCanvas/SET_MAX_WIDTH'
const SET_MAX_HEIGHT = 'imageCanvas/SET_MAX_HEIGHT'
const SET_WIDTH = 'imageCanvas/SET_WIDTH'
const SET_HEIGHT = 'imageCanvas/SET_HEIGHT'

export const setMaxWidth = (maxWidth) => ({
  type: SET_MAX_WIDTH,
  maxWidth
})

export const setMaxHeight = (maxHeight) => ({
  type: SET_MAX_HEIGHT,
  maxHeight
})

export const setWidth = (width) => ({
  type: SET_WIDTH,
  width
})

export const setHeight = (height) => ({
  type: SET_HEIGHT,
  height
})


export default function initImageCanvas(state = initialState, action) {
  switch (action.type) {
    case SET_MAX_WIDTH:
      return {...state, maxCanvasWidth: action.maxWidth}
    case SET_MAX_HEIGHT:
      return {...state, maxCanvasHeight: action.maxHeight}
    case SET_WIDTH:
      return {...state, width: action.width}
    case SET_HEIGHT:
      return {...state, height: action.height}
    default:
      return state
  }
}
