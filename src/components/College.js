import React from 'react'

import "../Components.css"

const Colleges = (props) => {
  return (
    <div className="college">
          <div className="college-emblem">
            <img src={props.college_emblem} alt=""/>
          </div>
          <h2>{props.name}</h2>
          <h3>{props.description}</h3>
    </div>
  )
}

export default Colleges;