import React from "react";
import "./presentation.scss";

export default function Presentation() {
  return (
    <div className="presentation" id="presentation">
      <img src="assets/bluewaves.png" alt="" className="bluewavesTop" />
      <img src="assets/bluewaves.png" alt="" className="bluewavesBottom" />
      <img src="assets/squircle1.png" alt="" className="s1" />
      <img src="assets/squircle2.png" alt="" className="s2" />
      <img src="assets/squircle1.png" alt="" className="s3" />
      <img src="assets/squircle3.png" alt="" className="s4" />
      <div className="top">
        <h1>Qui suis-je ?</h1>
        <hr />
        <div>
          <h2>
            Je m’appelle <span className="name">Ruscuta David</span> et je suis
            Développeur front End, spécialisé{" "}
            <span className="react">React</span>
          </h2>
          <h6>
            en cours d’apprentissage chez{" "}
            <a href="https://mentorgoal.com/" target="_blank">
              MentorGoal
            </a>
          </h6>
        </div>
        <p>
          Jeune passionné par le Design et le Développement Web, je me tiens à
          votre disposition afin de mettre en place vos projets. 😃
        </p>
      </div>
      <div className="bottom">
        <img src="assets/gap.png" alt="" />
        <div>
          <h1>Année Préparatoire 2021 - 2023</h1>
          <p>Chargé de développement et de mise en oeuvre de projets SI</p>
        </div>
      </div>
      <a href="https://etna.io/">
        <img src="assets/etna-logo.png" alt="" className="etna-logo" />
      </a>
    </div>
  );
}
