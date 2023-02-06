import React, {Component, useEffect, useRef} from 'react';
import Menu from '../menu/menu'
import PageTab from '../pagetab/pagetab'
import Toolbar from '../toolbar/toolbar'
import Sidepanel from '../sidepanel/sidepanel'

import {$, jQuery} from '../../../node_modules/jquery/dist/jquery.min.js';
import ReactFullpage from '@fullpage/react-fullpage';
import './imageEditor.css'
import {useSelector} from "react-redux";


const MAX_CANVAS_WIDTH = 1600;
const MAX_CANVAS_HEIGHT = 900;

const ImageEditor = () => {
  const {contrast, hue, brightness, saturation} = useSelector(state => ({
    contrast: state.filterImage.contrast,
    hue: state.filterImage.hue,
    brightness: state.filterImage.brightness,
    saturation: state.filterImage.saturation,
  }))
  console.log(contrast, hue)

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const image = new Image();
    image.src = 'sample2.jpg'
    image.onload = () => {
      const width = image.width > image.height ? MAX_CANVAS_WIDTH
        : (image.width * MAX_CANVAS_HEIGHT) / image.height;

      const height = image.width > image.height
        ? (image.height * MAX_CANVAS_WIDTH) / image.width
        : MAX_CANVAS_HEIGHT;
      context.drawImage(image, 50, 50, width, height);
    }
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // const rtfImage = context.getImageData(0, 0, MAX_CANVAS_WIDTH, MAX_CANVAS_HEIGHT)
    context.filter = `contrast(${contrast}%) hue-rotate(${hue}DEG) brightness(${brightness}%) saturate(${saturation}%)`
    console.log("탐", contrast)
  }, [contrast, hue, brightness, saturation])

  return (
    <div className="section">
      {/*<Menu></Menu>*/}
      {/*<PageTab></PageTab>*/}
      <canvas ref={canvasRef} width={MAX_CANVAS_WIDTH} height={MAX_CANVAS_HEIGHT}/>
      <Toolbar></Toolbar>
      <Sidepanel></Sidepanel>
    </div>
  );
}

export default ImageEditor;
