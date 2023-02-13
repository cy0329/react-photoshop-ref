import React, {useCallback, Children, Component, useState} from 'react';
import Draggable from 'react-draggable';
import $ from '../../../node_modules/jquery/dist/jquery.min.js';
import {useDispatch, useSelector} from "react-redux";
import {jbOpen, jbClose, changeJBcoord} from "../../modules/toggleToolbar";

import './jobsbar.css'
import appear2 from "../../assets/appear2.png";
import appear1 from "../../assets/appear1.png";


function Jobsbar() {
  const {jobsbarIsOpen, jbCoord, jobsbarTransition} = useSelector(state => ({
    jobsbarIsOpen: state.toggleToolbar.jobsbarIsOpen,
    jbCoord: state.toggleToolbar.jbCoord,
    jobsbarTransition: state.toggleToolbar.jobsbarTransition,
  }))

  const dispatch = useDispatch();
  const onJBopen = useCallback(() => dispatch(jbOpen()), [dispatch])
  const onJBclose = useCallback(() => dispatch(jbClose()), [dispatch])
  const onChangeJBcoord = useCallback(() => dispatch(changeJBcoord()), [dispatch])

  $('#jobsbar').css({
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
      <div id="jobsbar" onTransitionEnd={() => {
        $('#jobsbar').css({'transition': 'none'});
      }}>
        <div className="jbtop">
          <p>작업 현황</p>
          <img id="toggle-toolbar" src={!jobsbarIsOpen ? appear2 : appear1} alt=""
               onClick={jobsbarIsOpen ? onJBclose : onJBopen}/>
        </div>
        <div className="jbbody">
          <h2>들어갈 내용</h2>
          <p>라벨 작업 현황</p>
        </div>
      </div>
    </Draggable>
  );
}

export default Jobsbar;
