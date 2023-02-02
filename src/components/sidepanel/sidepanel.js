import React, {Children, Component, useState} from 'react';
import Draggable from 'react-draggable';
import './sidepanel.css'
import cross from '../../assets/cross.png';
import $ from '../../../node_modules/jquery/dist/jquery.min.js';
import {Tabs, Tab, Col, Nav, NavItem,} from '../../../node_modules/react-bootstrap/dist/react-bootstrap'
import appear2 from "../../assets/appear2.png";
import appear1 from "../../assets/appear1.png";


function Sidepanel() {
  const [isOpen, setIsOpen] = useState(true)
  const [coord, setCoord] = useState({x: 0, y: 0})
  const [transition, setTransition] = useState('')
  $('#sidepanel').css({
    'transition': transition
  })

  function handleClose() {
    setTransition('all ease .5s')
    setIsOpen(false)
    setCoord({x: 320, y: 0})
  }

  function handleOpen() {
    setCoord({x: 0, y: 0})
    setIsOpen((isOpen) => !isOpen)
  }

  return (
    <Draggable disabled={!isOpen} position={coord} onStop={(e, data) => {setCoord({x: data.x, y: data.y}); setTransition('none')}}>

      <div id="sidepanel" onTransitionEnd={() => {$('#sidepanel').css({'transition': 'none'})}}>
        <div className="paneltop">
          <p>작업 현황</p>
          {isOpen ? <img id="close" src={appear1} alt="" onClick={handleClose}/> :
            <img id="open" src={appear2} alt="" onClick={() => handleOpen()}/>}
        </div>
        <div className="panelbody">
        </div>
      </div>
    </Draggable>
  );
}

export default Sidepanel;
