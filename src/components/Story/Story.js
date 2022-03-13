import { Avatar } from '@material-ui/core'
import React from 'react'
import './Story.css'

function Story({image, profileImage, name}) {
  return (
    <div style={{ backgroundImage: `url(${image})`}} className="story">
        <Avatar className="story_avatar" src={profileImage}/>
        <h5>{name}</h5>
    </div>
  )
}

export default Story