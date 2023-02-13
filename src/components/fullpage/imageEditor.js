import React, {useEffect, useRef, useCallback} from 'react';
import Toolbar from '../toolbar/toolbar'
import Sidepanel from '../sidepanel/sidepanel'

import './imageEditor.css'
import {useDispatch, useSelector} from "react-redux";
import initImageCanvas, {setMaxHeight, setMaxWidth} from "../../modules/initImageCanvas";
import TopMenu from "../topMenu/topMenu";
import {setFilter} from "../../modules/imageFilter";
import {tbOpen} from "../../modules/toggleToolbar";
// import Nukki from '../imgEditor/Nukki/Nukki'

// const maxCanvasWidth = 1600
// const maxCanvasHeight = 900

const ImageEditor = () => {
  const {contrast, hue, brightness, saturation, maxCanvasWidth, maxCanvasHeight, filter} = useSelector(state => ({
    contrast: state.imageFilter.contrast,
    hue: state.imageFilter.hue,
    brightness: state.imageFilter.brightness,
    saturation: state.imageFilter.saturation,
    maxCanvasWidth: state.initImageCanvas.maxCanvasWidth,
    maxCanvasHeight: state.initImageCanvas.maxCanvasHeight,
    filter: state.imageFilter.filter
  }))
  const dispatch = useDispatch();
  const onSetFilter = useCallback((e) => dispatch(setFilter(e)), [dispatch])

  const canvasRef1 = useRef(null);
  const canvasRef2 = useRef(null);

  // setInterval(function () {
  //   hatchTick();
  // }, 300);

  const image = new Image();
  image.src = 'sample3.jpg'



  // 초기 이미지 세팅
  useEffect(() => {
    const frontCanvas = canvasRef2.current;
    const frtCtx = frontCanvas.getContext('2d')
    const lmgCanvas = canvasRef1.current;
    const imgCtx = lmgCanvas.getContext('2d');

    let width;
    let height;

    // 이미지 스케일링
    image.onload = () => {
      console.log('옴?')
      let imageRatio = image.height / image.width
      // console.log('image.width: ', image.width, 'image.height: ', image.height, 'maxCanvasWidth: ', maxCanvasWidth, 'maxCanvasHeight: ', maxCanvasHeight, 'imageRatio: ', imageRatio)
      if (imageRatio < 1) {
        // 가로가 세로보다 긴 경우
        if (image.width > maxCanvasWidth) {
          let newHeight = image.height * (maxCanvasWidth / image.width)
          if (newHeight > maxCanvasHeight - 21) {
            height = maxCanvasHeight - 21
            width = image.width * ((maxCanvasHeight - 21) / image.height)
          } else {
            width = maxCanvasWidth
            height = newHeight
          }

        } else {
          if (image.height > maxCanvasHeight - 21) {
            width = image.width * ((maxCanvasHeight - 21) / image.height)
            height = maxCanvasHeight - 21
          } else {
            width = image.width
            height = image.height
          }
        }
      } else {
        // 가로가 세로보다 짧은 경우
        if (image.height > maxCanvasHeight - 21) {
          height = maxCanvasHeight - 21
          width = image.width * ((maxCanvasHeight - 21) / image.height)
        }
      }
      imgCtx.canvas.width = width
      imgCtx.canvas.height = height
      frtCtx.canvas.width = width
      frtCtx.canvas.height = height
      imgCtx.filter = filter
      imgCtx.drawImage(image, 0, 0, width, height);
    }
  });


  // 마우스 코디네이터
  useEffect(() => {
    const frontCanvas = canvasRef2.current;
    const frtCtx = frontCanvas.getContext('2d')
    const imageCanvas = canvasRef1.current;
    const imgCtx = imageCanvas.getContext('2d')


    frontCanvas.addEventListener("mousemove", function (e) {
      let cRect = frontCanvas.getBoundingClientRect();
      // canvasX, Y = 마우스 x좌표, y좌표
      let canvasX = Math.round(e.clientX - cRect.left)
      let canvasY = Math.round(e.clientY - cRect.top)
      // 매번 마우스 움직일 때마다 초기화
      frtCtx.clearRect(0, 0, maxCanvasWidth, maxCanvasHeight)

      // 마우스 따라다니는 십자선
      frtCtx.lineWidth = 2
      frtCtx.strokeStyle = 'black'
      frtCtx.beginPath();
      frtCtx.moveTo(canvasX, 0)
      frtCtx.lineTo(canvasX, imgCtx.canvas.height)
      frtCtx.moveTo(0, canvasY)
      frtCtx.lineTo(imgCtx.canvas.width, canvasY)
      frtCtx.stroke()

      // 좌표 표시 배경 박스
      let coordTxt = `x: ${canvasX}, y: ${canvasY}`
      let textWidth = frtCtx.measureText(coordTxt).width
      frtCtx.fillStyle = 'white'
      frtCtx.strokeStyle = 'white'
      frtCtx.roundRect(canvasX > imgCtx.canvas.width - 130 ? canvasX - 15 - textWidth : canvasX + 15, canvasY > imgCtx.canvas.height - 45 ? canvasY - 45 : canvasY + 15, textWidth + 10, 30, 5)
      frtCtx.fill()

      // 좌표 글자 표시
      frtCtx.font = '15px serif'
      frtCtx.fillStyle = 'black'
      frtCtx.fillText(coordTxt, canvasX > imgCtx.canvas.width - 130 ? canvasX - textWidth - 10 : canvasX + 20, canvasY > imgCtx.canvas.height - 45 ? canvasY - 25 : canvasY + 35)
    })
  }, [canvasRef2])



  // 필터
  useEffect(() => {
    const canvas = canvasRef1.current;
    // console.log(canvas)
    const context = canvas.getContext('2d');
    // console.log(context)

    // const rtfImage = context.getImageData(0, 0, maxCanvasWidth, maxCanvasHeight)
    onSetFilter(`contrast(${contrast}%) hue-rotate(${hue}DEG) brightness(${brightness}%) saturate(${saturation}%)`)

    console.log(context.filter)
  }, [contrast, hue, brightness, saturation])


  return (
    <div className="section">
      {/*<TopMenu></TopMenu>*/}
      {/*<PageTab></PageTab>*/}
      <canvas id="image-layer" ref={canvasRef1} width={maxCanvasWidth} height={maxCanvasHeight}/>
      <canvas id="front-layer" ref={canvasRef2} width={maxCanvasWidth} height={maxCanvasHeight}/>
      <Toolbar></Toolbar>
      <Sidepanel></Sidepanel>
    </div>
  );
}

export default ImageEditor;
