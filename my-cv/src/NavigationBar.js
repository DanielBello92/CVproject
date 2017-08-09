/**
 * Created by Daniel Bello16 on 8/9/2017.
 */
import React, { Component } from 'react';
import './NavigationBar.css';
import pic from './danielpic.jpeg'
class NavigationBar extends Component {

    constructor(props){
        super(props);
        this.state = {text: ""};
    }

    render() {

        console.log("NavigationBar in!")

        return (

            <div className="NavigationComponent">
                <div className="Buttons-Layout-Left">
                    <button className="Buttons" onClick={()=>{}}> HOME </button>
                    <button className="Buttons" onClick={()=>{}}> ABOUT </button>
                    <button className="Buttons" onClick={()=>{}}> RESUME </button>
                </div>
                <div className="Buttons-Layout-Middle">
                    <img src={pic} className="profilePic"/>
                </div>
                <div className="Buttons-Layout-Right">
                    <button className="Buttons" onClick={()=>{}}> SKILLS </button>
                    <button className="Buttons" onClick={()=>{}}> HOBBES </button>
                    <button className="Buttons" onClick={()=>{}}> CONTACT </button>
                </div>

            </div>


        )

    }
}

export default NavigationBar;