import React, {useCallback} from 'react';
import $ from '../../../node_modules/jquery/dist/jquery.min.js';

import './topMenu.css';
import appear3 from "../../assets/appear3.png";
import appear4 from "../../assets/appear4.png";
import {useDispatch, useSelector} from "react-redux";
import {tmClose, tmOpen} from "../../modules/toggleToolbar";


function TopMenu() {
  const {topmenuIsOpen} = useSelector(state => ({
    topmenuIsOpen: state.toggleToolbar.topmenuIsOpen
  }))
  const dispatch = useDispatch()
  const onTmOpen = useCallback(() => dispatch(tmOpen()), [dispatch])
  const onTmClose = useCallback(() => dispatch(tmClose()), [dispatch])

  const toggleHandler = () => {
    if (!topmenuIsOpen) {
      $('#top-menu').css({
        'top': 0
      })
      onTmOpen()
    } else {
      $('#top-menu').css({
        'top': -300
      })
      onTmClose()
    }
  }

  console.log(topmenuIsOpen)

  return (
    <div id="top-menu">
      <div className="tmbody">
        <h2>들어갈 내용</h2>
        <p>이전/이후 작업</p>
        <p>라벨 선택 라디오박스</p>
      </div>
      <div className="tmbottom">
        <div className="wrapper" onClick={toggleHandler}>
          <img src={topmenuIsOpen ? appear4 : appear3} alt=""/>
          <p>메뉴</p>
          <img src={topmenuIsOpen ? appear4 : appear3} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default TopMenu;
  