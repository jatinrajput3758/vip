import React from 'react'
import './Style.css'
import logo from "./img-logo/vip-logo.png"

export default function Footer() {
    return (
        <div>
            <div className="footer-main">
                <div className="item1">
                    <img src={logo} alt="" className="logo" />
                    <p>
                        Learning is not a Product of Schooling but a Lifelong attempt
                        to acquire it .
                    </p>
                    <button><a href="#.">Read More</a></button>
                </div>
                <div className="item2">
                    <h3>Services</h3>
                    <div className='footer-icon'>
                        <p><i class="bi bi-person-rolodex icon"> Contact</i></p>
                        <p><i class="bi bi-ticket-detailed-fill"> Admission</i></p>
                        <p> <i class="bi bi-book-fill"> Teacher</i></p>
                        <p> <i class="bi bi-file-earmark-bar-graph-fill"> Document</i></p>
                    </div>

                </div>

                <div className="item3">
                    <h3>Contact</h3>
                    <div className="contact-footer-icon">
                        <p><i class="bi bi-envelope">    </i> vipharda@gmail.com</p>
                        <p><i class="bi bi-telephone-fill"></i> +91 9826217121</p>
                        <p> <i class="bi bi-geo-alt-fill"></i> Pump Engine Road, Manpura Harda (M.P)</p>
                        <div className="social-media">
                            <p>
                                <a href="#."><i class="bi bi-facebook"></i></a>
                                <a href="#."><i class="bi bi-twitter"></i></a>
                                <a href="#."><i class="bi bi-google"></i></a>
                                <a href="#."><i class="bi bi-instagram"></i></a>
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            <div className="copyright">
                <p> Copyright © Vision Public School 2023.All right reserved.  </p>
            </div>
        </div>
    )
}
