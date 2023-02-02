import React, {Component, useCallback, useEffect, useState} from 'react';
import './toolbar.css'
import appear1 from '../../assets/appear1.png'
import appear2 from '../../assets/appear2.png'
import $ from '../../../node_modules/jquery/dist/jquery.min.js';
import Draggable from 'react-draggable';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';


function Toolbar() {

    const [isOpen, setIsOpen] = useState(true)
    const [coord, setCoord] = useState({x: 0, y: 0})
    const [transition, setTransition] = useState('none')
    $('#toolbar').css({
        'transition': transition
    })

    function handleClose() {
        setTransition('all ease .5s')
        setIsOpen(false)
        setCoord({x: -220, y: 0})
    }

    function handleOpen() {
        setCoord({x: 0, y: 0})
        setIsOpen((isOpen) => !isOpen)
    }

    console.log(isOpen, coord, transition)

    return (
      <Draggable disabled={!isOpen} position={coord} onStop={(e, data) => {setCoord({x: data.x, y: data.y}); setTransition('none')}}>
          <div id="toolbar" onTransitionEnd={() => {
              $('#toolbar').css({'transition': 'none'})
          }}>
              <div className="tbtop">
                  <p>옵션</p>
                  {isOpen ? <img id="close" src={appear2} alt="" onClick={handleClose}/> :
                    <img id="open" src={appear1} alt="" onClick={() => handleOpen()}/>}
              </div>
              <div className="tbbody">
                  <div className="datasetname"><p>[VQA] BBOX 데이터셋</p></div>
                  <div>
                      <p>contrast</p>
                      <Slider min={-100} max={100} startPoint={0} defaultValue={0} onChange={(e) => console.log(e)}/>
                  </div>
              </div>
          </div>
      </Draggable>
    )
}

export default Toolbar;
