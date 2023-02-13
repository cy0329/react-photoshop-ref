import React, {useCallback, useEffect, useRef, useState} from 'react';
import './toolbar.css'
import appear1 from '../../assets/appear1.png'
import appear2 from '../../assets/appear2.png'
import $ from '../../../node_modules/jquery/dist/jquery.min.js';
import Draggable from 'react-draggable';
import 'rc-slider/assets/index.css';
import {useDispatch, useSelector} from "react-redux";
import toggleToolbar, {tbOpen, tbClose, changeTBcoord} from "../../modules/toggleToolbar";
import ImageFilters from "../imgEditor/ImageFiltersToolbar";

function Toolbar() {

  const {toolbarIsOpen, tbCoord, toolbarTransition} = useSelector(state => ({
    toolbarIsOpen: state.toggleToolbar.toolbarIsOpen,
    tbCoord: state.toggleToolbar.tbCoord,
    toolbarTransition: state.toggleToolbar.toolbarTransition,
  }))

  const dispatch = useDispatch();
  const onTBopen = useCallback(() => dispatch(tbOpen()), [dispatch])
  const onTBclose = useCallback(() => dispatch(tbClose()), [dispatch])
  const onChangeTBcoord = useCallback(() => dispatch(changeTBcoord()), [dispatch])
  // const toggleTB = () => dispatch(toggleTB());

  $('#toolbar').css({
    'transition': toolbarTransition
  })


  return (
    <Draggable disabled={!toolbarIsOpen} position={tbCoord} onStop={onChangeTBcoord}>
      <div id="toolbar" onTransitionEnd={() => {
        $('#toolbar').css({'transition': 'none'})
      }}>
        <div className="tbtop">
          <p>옵션</p>
          <img id="toggle-toolbar" src={!toolbarIsOpen ? appear1 : appear2} alt=""
               onClick={toolbarIsOpen ? onTBclose : onTBopen}/>
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
