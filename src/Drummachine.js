import React, { Component } from 'react';
import './App.css';
import Display from './display.js';
import ButtonPanel from './Buttonpanel.js'


function randColor(x) {
  const values = '123456789ABCDEF';
  var color = '#';
  for (var k = 0; k < 6; k++) {
    color += values[Math.floor(Math.random()*15)];
  };
  return color;
}      
      
class DrumMachine extends Component{
  constructor(props) {
    super(props)
    this.handlePress = this.handlePress.bind(this);
    this.handleAudio = this.handleAudio.bind(this);
    this.state = {
      letter: '',
      backColor: 'grey'
    };
  }
  handlePress(e) {
    //console.log(e.keyCode)
    var id = String.fromCharCode(e.keyCode);
    var x = document.getElementById(id);
    var Color = randColor(e);
    console.log(Color);
    x.play();
    this.setState({
      letter: id,
      backColor: Color
    })
  }
  handleAudio(e) {
    var x = e.currentTarget.dataset.value;
    var Sound = document.getElementById(x);
    var Color = randColor(e);
    this.setState({
      letter: x,
      backColor: Color
    })
    Sound.play();
  }
  componentWillMount() {
    document.addEventListener("keydown", this.handlePress.bind(this))
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handlePress.bind(this))
  }
  render() {
    return (
      <div id = "drum-machine" style = {{backgroundColor: this.state.backColor}}>
        <Display letter = {this.state.letter} />
        <ButtonPanel music = {this.handleAudio} keyPress= {this.handlePress}/>
      </div>
    )
  }
}

export default DrumMachine;
