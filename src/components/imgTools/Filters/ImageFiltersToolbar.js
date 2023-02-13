import React, {useCallback} from 'react'
import Slider from "rc-slider";
import {useDispatch, useSelector} from "react-redux";
import {changeBright, changeCont, changeH, changeSaturate, resetFilter} from "../../../modules/imageFilter";
import './ImageFiltersToolbar.css'
import 'rc-slider/assets/index.css';

function ImageFiltersToolbar() {
  const {toolbarIsOpen, contrast, hue, brightness, saturation} = useSelector(state => ({
    toolbarIsOpen: state.toggleToolbar.toolbarIsOpen,
    contrast: state.imageFilter.contrast,
    hue: state.imageFilter.hue,
    brightness: state.imageFilter.brightness,
    saturation: state.imageFilter.saturation,
  }))

  const dispatch = useDispatch();
  const changeContrast = useCallback((e) => dispatch(changeCont(e)), [dispatch])
  const changeHue = useCallback((e) => dispatch(changeH(e)), [dispatch])
  const changeBrightness = useCallback((e) => dispatch(changeBright(e)), [dispatch])
  const changeSaturation = useCallback((e) => dispatch(changeSaturate(e)), [dispatch])
  const reset = useCallback(() => dispatch(resetFilter()), [dispatch])

  return (
    <div id="image-filter">
      <label htmlFor="contrast">대비 {contrast}%</label>
      <Slider id="contrast" min={0} max={200} startPoint={100} defaultValue={100} value={contrast}
              disabled={!toolbarIsOpen}
              onChange={e => changeContrast(e)}/>
      <label htmlFor="hue">색상 {hue}º</label>
      <Slider id="hue" min={0} max={360} startPoint={0} defaultValue={0} value={hue}
              disabled={!toolbarIsOpen}
              onChange={e => changeHue(e)}/>
      <label htmlFor="brightness">밝기 {brightness}%</label>
      <Slider id="brightness" min={0} max={200} startPoint={100} defaultValue={100} value={brightness}
              disabled={!toolbarIsOpen}
              onChange={e => changeBrightness(e)}/>
      <label htmlFor="saturation">채도 {saturation}%</label>
      <Slider id="saturation" min={0} max={100} startPoint={100} defaultValue={100} value={saturation}
              disabled={!toolbarIsOpen}
              onChange={e => changeSaturation(e)}/>
      <button onClick={reset}>resetFilter</button>
    </div>
  )
}

export default ImageFiltersToolbar