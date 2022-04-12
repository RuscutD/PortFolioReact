import React from 'react'
import './learningGame.scss'

export default function LearningGame() {
  return (
    <div className="learningGame">
      <img src="assets/squircle2.png" alt="" className="s11" />
      <img src="assets/squircle1.png" alt="" className="s12" />
      <div className="left">
        <div className="top">
          <h1>Learning Game</h1>
          <p>The name of the game is “Dr. Hike’s investigation”. You will meet Dr. Hike in Dover and he’s going to propose you to help him with his investigation through England. You will be confronted with different decors in which some hints were left by the criminal. Your job will be to find them.</p>
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
        <img src="assets/Lg10.png" alt="" className="Lg1" />
        <img src="assets/Lg2.png" alt="" className="Lg2" />
        <img src="assets/Lg3.png" alt="" className="Lg3" />
        <img src="assets/Lg4.png" alt="" className="Lg4" />
        <img src="assets/Lg5.png" alt="" className="Lg5" />
        <img src="assets/Lg6.png" alt="" className="Lg6" />
        <img src="assets/Lg7.png" alt="" className="Lg7" />
        <img src="assets/Lg8.png" alt="" className="Lg8" />
        <img src="assets/Lg9.png" alt="" className="Lg9" />
      </div>
    </div>
  )
}
