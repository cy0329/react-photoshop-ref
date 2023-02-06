import React, {Component, useCallback, useEffect, useLayoutEffect, useRef, useState} from 'react';
import './toolbar.css'
import appear1 from '../../assets/appear1.png'
import appear2 from '../../assets/appear2.png'
import $ from '../../../node_modules/jquery/dist/jquery.min.js';
import Draggable from 'react-draggable';
import Slider, {Range} from 'rc-slider';
import 'rc-slider/assets/index.css';

import {fabric} from 'fabric';
import {FabricJSCanvas, useFabricJSEditor} from 'fabricjs-react'
import {useDispatch, useSelector} from "react-redux";
import toggleToolbar, {tbOpen, tbClose, changeTBcoord} from "../../modules/openToolbar";
import ImageFilters from "../imgEditor/ImageFiltersToolbar";

function Toolbar() {

  const {toolbarIsOpen, tbCoord, toolbarTransition } = useSelector(state => ({
    toolbarIsOpen: state.toggleToolbar.toolbarIsOpen,
    tbCoord: state.toggleToolbar.tbCoord,
    toolbarTransition: state.toggleToolbar.toolbarTransition,
  }))
  // console.log(toolbarIsOpen, tbCoord, contrast, hue, brightness, saturation, toolbarTransition);

  const dispatch = useDispatch();
  const onTBopen = useCallback(() => dispatch(tbOpen()), [dispatch])
  const onTBclose = useCallback(() => dispatch(tbClose()), [dispatch])
  const onChangeTBcoord = useCallback(() => dispatch(changeTBcoord()), [dispatch])
  // const toggleTB = () => dispatch(toggleTB());

  $('#toolbar').css({
    'transition': toolbarTransition
  })


  // ============== fabricjs react =============
  // const [contrast, setContrast] = useState(0)
  //
  // let canvas = new fabric.Canvas('canvas', {
  //   width: 1600,
  //   height: 900
  // });
  //
  // fabric.Image.fromURL('sample2.jpg', function(img) {
  //   img.scale(0.7)
  //   img.filters.push(new fabric.Image.filters.Brightness({brightness : contrast}))
  //   console.log('img : ', img)
  //   canvas.add(img);
  //   canvas.renderAll()
  // });

  // ======= 미룸 =======


  return (
    <Draggable disabled={!toolbarIsOpen} position={tbCoord} onStop={onChangeTBcoord}>
      <div id="toolbar" onTransitionEnd={() => {
        $('#toolbar').css({'transition': 'none'})
      }}>
        <div className="tbtop">
          <p>옵션</p>
          <img id="close" src={!toolbarIsOpen ? appear1 : appear2} alt="" onClick={toolbarIsOpen ? onTBclose : onTBopen}/>
        </div>
        <div className="tbbody">
          <div className="datasetname"><p>[VQA] BBOX 데이터셋</p></div>
          <div>
            <ImageFilters/>
          </div>
        </div>
      </div>
    </Draggable>
  )
}

export default Toolbar;
