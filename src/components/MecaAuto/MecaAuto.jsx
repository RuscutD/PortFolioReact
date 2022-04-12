import React from 'react'
import './mecaAuto.scss'

export default function MecaAuto() {
  return (
    <div className="mecaAuto">
      <img src="assets/squircle2.png" alt="" className="s7" />
      <img src="assets/squircle1.png" alt="" className="s8" />
      <div className="left">
        <div className="top">
          <h1>Garage Meca Auto</h1>
          <p>Site vitrine pour le Garage de Mécanique Automobile de Rebais 77510. <br /><br /> Le souhait du client était de mettre en avant ses services avec des Sliders et permettre au grand publique de le contacter via un formulaire d’envoi de message, numèro de téléphone ou bien mail. </p>
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
            <img src="assets/github.png" alt="" />
            <h5>GitHub</h5>
          </div>
          <div className="Content">
            <img src="assets/react.png" alt="" />
            <h5>ReactJs</h5>
          </div>
          <div className="Content">
            <img src="assets/sass.png" alt="" />
            <h5>Sass</h5>
          </div>
        </div>
      </div>
      <div className="right">
        <img src="assets/Ma1.png" alt="" />
        <img src="assets/Ma2.png" alt="" />
        <img src="assets/Ma3.png" alt="" />
        <img src="assets/Ma4.png" alt="" />
      </div>
    </div>
  )
}
