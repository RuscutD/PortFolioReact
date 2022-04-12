import React from 'react'
import './myClickerGame.scss'

export default function MyClickerGAme() {
  return (
    <div className="clickerGame">
      <img src="assets/squircle2.png" alt="" className="s9" />
      <img src="assets/squircle1.png" alt="" className="s10" />
      <div className="left">
        <div className="top">
          <h1>My Clicker Game</h1>
          <p>Pour ce projet, j’ai été amené à créer mon propre "clicker game". Ce style de jeu qui se veut chronophage et addictif est vastement représenté dans les jeux web et mobile. Parmi les plus connus, on peut notamment citer “Cookie Clicker”, “Clicker Heroes” ou encore “AdVenture Capitalist”.<br /> <br />Cliquer sur la pioche rapporte des points qui peuvent être investis dans des moyens de production. Ces moyens de production rapportent des points à chaque seconde, qui pourront ensuite être réinvestis, créant une boucle infinie avec l’auto incrémentation.</p>
        </div>
        <div className="bottom">
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
        <iframe
          src="https://ruscutd.github.io/clickerGame/">
        </iframe>
    </div>
  )
}
