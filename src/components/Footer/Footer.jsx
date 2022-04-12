import React from 'react'
import './footer.scss'


export default function Footer() {
    return (
        <div className="footer">
        <img src="assets/squircle2.png" alt="" className="f1" />
        <img src="assets/squircle1.png" alt="" className="f2" />
        <img src="assets/squircle3.png" alt="" className="f3" />
            <img src="assets/thankYou.png" alt="" className="thankYou" />
            <p>N'hésitez pas à me contacter, je suis à votre disposition pour plus d'informations.</p>
            <a href="mailto:ruscuta.daavid@gmail.com">
                <div className="mail">
                    <h4>ruscuta.daavid@gmail.com</h4>
                </div>
            </a>
            <a href="tel:0619220908">
                <div className="phone">
                    <h4>06 19 22 09 08</h4>
                </div>
            </a>
            <h5>© Copyright All Right Reserved 2022 Ruscuta David</h5>
        </div>
    )
}
