import React from 'react'
import './restaurantAdvisor.scss'

export default function RestaurantAdvisor() {

  return (
    <div className="restaurantAdvisor">
      <img src="assets/squircle2.png" alt="" className="s5" />
      <img src="assets/squircle1.png" alt="" className="s6" />
      <div className="left">
        <div className="top">
          <h1>Restaurant Advisor</h1>
          <p>Le but du projet était de créer une application mobile permettant de gérer des restaurants. <br /> <br /> Cette application permettra d’afficher les restaurants, de voir leurs ratings, avis, etc. <br /> La mise en place des Web Services assureront donc la sauvegarde, la récupération et la mise à jour des informations sur les restaurants.</p>
        </div>
        <div className="bottom">
          <div className="Content">
            <img src="assets/figma.png" alt="" />
            <h5 id="figma">Figma</h5>
          </div>
          <div className="Content">
            <img src="assets/php.png" alt="" />
            <h5>Php</h5>
          </div>
          <div className="Content">
            <img src="assets/java.png" alt="" />
            <h5>Java</h5>
          </div>
          <div className="Content">
            <img src="assets/xml.png" alt="" />
            <h5>Xml</h5>
          </div>
          <div className="Content">
            <img src="assets/gitlab.png" alt="" />
            <h5>Gitlab</h5>
          </div>
          <div className="Content">
            <img src="assets/laravel.png" alt="" />
            <h5>Laravel</h5>
          </div>
          <div className="Content">
            <img src="assets/postman.png" alt="" />
            <h5>Postman</h5>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="left-s">
          <img src="assets/Ra2.png" alt="" className="" />
          <img src="assets/Ra5.png" alt="" className="" />
          <img src="assets/Ra9.png" alt="" className="" />
        </div>
        <div className="middle-l">
          <img src="assets/Ra1.png" alt="" className="" />
          <img src="assets/Ra3.png" alt="" className="" />
          <img src="assets/Ra4.png" alt="" className="" />
        </div>
        <div className="middle-r">
          <img src="assets/Ra6.png" alt="" className="" />
          <img src="assets/Ra7.png" alt="" className="" />
          <img src="assets/Ra8.png" alt="" className="" />
        </div>
        <div className="right-s">
          <img src="assets/Ra10.png" alt="" className="" />
          <img src="assets/Ra11.png" alt="" className="" />
        </div>
      </div>
    </div>
  )
}
