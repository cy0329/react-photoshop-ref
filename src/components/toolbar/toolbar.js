import React, {useCallback} from 'react';
import Draggable from 'react-draggable';
import $ from '../../../node_modules/jquery/dist/jquery.min.js';
import {useDispatch, useSelector} from "react-redux";
import {tbOpen, tbClose, changeTBcoord} from "../../modules/toggleToolbar";
import ImageFilters from "../imgTools/Filters/ImageFiltersToolbar";

import './toolbar.css'
import appear1 from '../../assets/appear1.png'
import appear2 from '../../assets/appear2.png'


function Toolbar() {

  const {toolbarIsOpen, tbCoord, toolbarTransition} = useSelector(state => ({
    toolbarIsOpen: state.toggleToolbar.toolbarIsOpen,
    tbCoord: state.toggleToolbar.tbCoord,
    toolbarTransition: state.toggleToolbar.toolbarTransition,
  }))
  console.log(tbCoord)

  const dispatch = useDispatch();
  const onTBopen = useCallback(() => dispatch(tbOpen()), [dispatch])
  const onTBclose = useCallback(() => dispatch(tbClose()), [dispatch])
  const onChangeTBcoord = useCallback(() => dispatch(changeTBcoord()), [dispatch])
  // const toggleTB = () => dispatch(toggleTB());

  $('#toolbar').css({
    'transition': toolbarTransition
  })

  function handleDragPosition(e) {
    if (e.x < 0 || e.x > window.innerWidth || e.y < 0 || e.y > window.innerHeight) {
      onTBclose()
    } else {
      onChangeTBcoord()
    }
  }

  return (
    <Draggable disabled={!toolbarIsOpen} position={tbCoord} onStop={(e) => handleDragPosition(e)} >
      <div id="toolbar" onTransitionEnd={() => {
        $('#toolbar').css({'transition': 'none'});
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
