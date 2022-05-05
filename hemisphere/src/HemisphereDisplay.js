import React from 'react'
import northernPic from './images/northern.JPG'
import southernPic from './images/southern.JPG'
import "./hemisphere.css"

const hemisphereConfig = {
  northern:{
    text:'You are in northern hemisphere',
    picture:northernPic
  },
  southern:{
    text:'You are in southern hemisphere',
    picture:southernPic
  }
}

const HemisphereDisplay = ({latitude}) => {
const hemisphere = latitude > 0 ? 'northern' : 'southern';
const {text,picture} = hemisphereConfig[hemisphere];

  return (
    <div className={hemisphere}>
      <div className="ui raised text container segment">
        <div className="image">
        <img src={picture}/>
        </div>
      </div>
      <div className="ui teal bottom attached label">
        <h1>{text}</h1>
      </div>
    </div>
  )
}

export default HemisphereDisplay;