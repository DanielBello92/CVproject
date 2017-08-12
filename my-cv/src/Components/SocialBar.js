/**
 * Created by Daniel Bello16 on 8/9/2017.
 */
import React, { Component } from 'react';
import '../Css/SocialBar.css';
import face from '../Images/facebook.png'
import link from '../Images/linkedin.png'
import insta from '../Images/instagram.png'
import you from '../Images/youTube2.png'
import twit from '../Images/twitter.png'

class SocialBar extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="SocialComponent">
                <a href="https://www.facebook.com/Danielbello1992"><img src={face} className="icons"/></a>
                <a href="https://www.linkedin.com/in/daniel-bello-702804127/"><img src={link} className="icons"/></a>
                <a href="https://www.instagram.com/"><img src={insta} className="icons"/></a>
                <a href="https://www.youtube.com/watch?v=xWE7fBgWiT0&feature=youtu.be"  ><img src={you} className="icons"/></a>
                <a href="https://twitter.com/?lang=he"> <img src={twit} className="icons"/></a>
            </div>
        )
    }
}

export default SocialBar;