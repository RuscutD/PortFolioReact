import React from 'react'
import './accueil.scss'

export default function Accueil() {


  return (
    <div className="accueil">
      <img src="assets/reactLogo.png" alt="" className="accueilReact"/>
      <a href="#presentation">
        <img src="assets/down-arrow.png" className="down-arrow" alt="" />
      </a>
      <div className="bluewavesBottom"></div>
      <div className="container">
        <div className="content">
          <h1><em><span>D</span><span>a</span><span>v</span><span>i</span><span>d</span><span>.</span></em></h1>
          <h2>Intégrateur et Developpeur Web - <span>ReactJs</span></h2>
          <h3>Alternant chez <a href="https://mentorgoal.com/" target="_blank" className="mentor"><span>MentorGoal</span></a></h3>
          <a href="https://www.linkedin.com/in/david-ruscuta-b63908227/" target="_blank" className="linkedin">
            <h3><em>@DavidRuscuta</em></h3>
          </a>
        </div>
      </div>
    </div>
  )
}
