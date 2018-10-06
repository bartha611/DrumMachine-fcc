import React, { Component } from 'react';

const sounds = [{
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
  keycode: 81,
  id: 'Heater1',
  letter: 'Q'
},
      {
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
        keycode: 87,
        id: 'Heater2',
        letter: 'W'
      },
      {
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
        keycode: 69,
        id: 'Heater3',
        letter: 'E'
      },
      {
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
        keycode: 65,
        id: 'Heater4',
        letter: 'A'
      },
      {
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
        keycode: 83,
        id: 'Heater6',
        letter: 'S'
      },
      {
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
        keycode: 68,
        id: 'Dsc Oh',
        letter: 'D'
      },
      {
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
        keycode: 90,
        id: 'Kick n Hat',
        letter: 'Z'
      },
      {
        url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
        keycode: 88,
        id: 'RP4 Kick 1',
        letter: 'X'
      },
      {
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
        keycode: 67,
        id: 'Cev H2',
        letter: 'C'
      }];


class ButtonPanel extends Component {
  render() {
    return (
      <div className = 'ButtonPanel'>
        {sounds.map(obj =>{
      return(
        <div id = {obj.id} className = "drum-pad" data-value = {obj.letter} onClick = {this.props.music} onKeyDown = {this.props.keyPress} tabIndex = '0'>
          <p>{obj.letter}
            <audio src = {obj.url} className = "clip" id = {obj.letter} type = "audio/mp3"></audio>
          </p>
        </div>
    )})}
      </div>
    )
  }
}

export default ButtonPanel;