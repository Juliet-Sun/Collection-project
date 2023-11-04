import React from 'react'

import "../Components.css"

const Colleges = (props) => {
  return (
    <div className="college">
        <div class="flip-card-inner">
          <div class="flip-card-front" id={props.name.replace(/\s+/g, '')}>
            <div class="emblem-section">
              <img class="college-emblem" src={props.college_emblem} alt="College Crest"/>
            </div>
            <h2>{props.name}</h2>
          </div>
          <div class="flip-card-back" id={props.name.replace(/\s+/g, '')}>
            <p>{props.description}</p>
          </div>
        </div>
        {/*
        <div className="college-emblem">
          <img src={props.college_emblem} alt=""/>
        </div>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        */}
    </div>
  )
}

export default Colleges;