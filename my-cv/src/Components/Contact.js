/**
 * Created by Daniel Bello16 on 8/10/2017.
 */
import React, { Component } from 'react';
import '../Css/Contact.css';
import InputContact from './InputContact'

class Contact extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="ContactComponent">
                <div className="contact-container">
                    <InputContact/>
                </div>
            </div>
        )

    }
}

export default Contact;