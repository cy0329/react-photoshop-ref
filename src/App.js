import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/popper.js/dist/popper.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import {PlainDraggable} from '../node_modules/plain-draggable/plain-draggable.min.js';
import './App.css';
import ImageEditor from "./components/imageEditor/imageEditor";

class App extends Component {
  render() {
    return (
      
      <ImageEditor>
      </ImageEditor>
      
    );
  }
}

export default App;
