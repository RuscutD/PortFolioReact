import React from 'react'
import './mentorGoal.scss'


export default function MentorGoal() {

  return (
    <div className="mentorGoal">
      <img src="assets/squircle2.png" alt="" className="s5" />
      <img src="assets/squircle1.png" alt="" className="s6" />
      <img src="assets/waves.png" alt="" className="waves" />
      <div className="left">
        <div className="top">
          <h1>Extension Mentor Goal</h1>
          <p>Mentor Goal propose une solution de suivi de candidature dans le cadre de recrutement d'étudiants en alternance. <br /> <br />Le but était de créer une extension Google Chrome à partir de maquttes Figma qui permettrait la récuperation et l’enregistrement d’informations de manière automatique grâce au Scraping.</p>
        </div>
        <div className="bottom">
          <div className="Content">
            <img src="assets/figma.png" alt="" />
            <h5 id="figma">Figma</h5>
          </div>
          <div className="Content">
            <img src="assets/html.png" alt="" />
            <h5>Html</h5>
          </div>
          <div className="Content">
            <img src="assets/css.png" alt="" />
            <h5>Css</h5>
          </div>
          <div className="Content">
            <img src="assets/js.png" alt="" />
            <h5>Javascript</h5>
          </div>
          <div className="Content">
            <img src="assets/gitlab.png" alt="" />
            <h5>Gitlab</h5>
          </div>
        </div>
      </div>
      <div className="right">
        <img src="assets/Mg1.png" alt="" className="Mg1" />
        <img src="assets/Mg2.png" alt="" className="Mg2" />
        <img src="assets/Mg3.png" alt="" className="Mg3" />
        <img src="assets/Mg4.png" alt="" className="Mg4" />
      </div>
    </div>
  )
}
