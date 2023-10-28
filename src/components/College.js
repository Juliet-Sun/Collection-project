import React from 'react'

import "../Components.css"

const Colleges = (props) => {
  return (
    <div className="Colleges">
          <div className="College-emblem">
            <img src={props.college_emblem}/>
          </div>
          <h2>{props.name}</h2>
          <h3>{props.description}</h3>
    </div>
  )
}

export default Colleges;