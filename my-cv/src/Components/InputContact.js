/**
 * Created by Daniel Bello16 on 8/11/2017.
 */
import React, { Component } from 'react';
import '../Css/InputContact.css';
import message from '../Images/message.png'
import man from '../Images/man.png'
import phone from '../Images/phone.png'
import pen from '../Images/pen.png'


class InputContact extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="InputContactComponent">
                <h5 className="contact-title">Contact me</h5>
                <div id="form-input" className="jello animated">
                    <div className="content-Layout">
                        <img className="images" src={man}/>
                        <input type="text" id="input" className="name-text" placeholder="Full Name"></input>
                    </div>
                    <div className="content-Layout">
                        <img className="images" src={message}/>
                        <input type="email" id="input" className="email-text"placeholder="Email"></input>
                    </div>
                    <div className="content-Layout">
                        <img className="images" src={phone}/>
                        <input type="email" id="input" className="Phone-text"placeholder="Phone"></input>
                    </div>
                    <div className="content-Layout">
                        <img className="images" src={pen}/>
                        <input type="text" id="input" className="Message-text"placeholder="Message"></input>
                    </div>
                    <div className="content-Layout">
                        <input type="button" className="send-Button" value="Send"></input>
                    </div>
                </div>
            </div>
        )
    }
}

export default InputContact;
