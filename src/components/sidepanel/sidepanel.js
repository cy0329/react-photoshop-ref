import React, {useCallback, Children, Component, useState} from 'react';
import Draggable from 'react-draggable';
import './sidepanel.css'
import $ from '../../../node_modules/jquery/dist/jquery.min.js';
import appear2 from "../../assets/appear2.png";
import appear1 from "../../assets/appear1.png";
import {useDispatch, useSelector} from "react-redux";
import {changeJBcoord, jbClose, jbOpen} from "../../modules/toggleToolbar";


function Sidepanel() {
  const {jobsbarIsOpen, jbCoord, jobsbarTransition} = useSelector(state => ({
    jobsbarIsOpen: state.toggleToolbar.jobsbarIsOpen,
    jbCoord: state.toggleToolbar.jbCoord,
    jobsbarTransition: state.toggleToolbar.jobsbarTransition,
  }))

  const dispatch = useDispatch();
  const onJBopen = useCallback(() => dispatch(jbOpen()), [dispatch])
  const onJBclose = useCallback(() => dispatch(jbClose()), [dispatch])
  const onChangeJBcoord = useCallback(() => dispatch(changeJBcoord()), [dispatch])

  $('#sidepanel').css({
    'transition': jobsbarTransition
  })

  function handleDragPosition(e) {
    if (e.x < 0 || e.x > window.innerWidth || e.y < 0 || e.y > window.innerHeight) {
      onJBclose()
    } else {
      onChangeJBcoord()
    }
  }

  return (
    <Draggable disabled={!jobsbarIsOpen} position={jbCoord} onStop={(e) => handleDragPosition(e)}>

      <div id="sidepanel" onTransitionEnd={() => {
        $('#sidepanel').css({'transition': 'none'});
      }}>
        <div className="paneltop">
          <p>작업 현황</p>
          <img id="toggle-toolbar" src={!jobsbarIsOpen ? appear2 : appear1} alt=""
               onClick={jobsbarIsOpen ? onJBclose : onJBopen}/>
        </div>
        <div className="panelbody">
        </div>
      </div>
    </Draggable>
  );
}

export default Sidepanel;
