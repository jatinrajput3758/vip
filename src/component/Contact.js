import React from 'react'
import "./Style.css"

export default function Contact() {
    return (
        <div>
            <h1 id='contact-title' >CONTACT-US</h1>
            <div className="contact-div">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form">
                                <h1 className='ms-3 fw-bold' id='contact' >CONTACT</h1>
                                <p className='ms-3'>Sample text. Click to select the text box. <br /> Click again or double click to start editing the text.</p>
                                <table border="0">
                                    <tr>
                                        <td><input type="text" placeholder='Enter Name..' /></td>
                                        <td><input type="text" placeholder='Enter Father Name..' /></td>
                                    </tr>
                                    <tr>
                                        <td><input type="text" placeholder='Enter Number..' /></td>
                                        <td><input type="text" placeholder='Enter Email..' /></td>
                                    </tr>
                                </table>
                                <textarea placeholder='Enter Your Message' ></textarea><br />
                                <button id='contact-submit' >SUBMIT</button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2811.236877500907!2d77.0885560738412!3d22.329094041853928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397d71d1ef0fa05d%3A0x472103b31ca5c033!2sVision%20International%20Public%20School!5e1!3m2!1sen!2sin!4v1702613521973!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"id='map' title='map' ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
