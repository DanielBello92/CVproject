/**
 * Created by Daniel Bello16 on 8/9/2017.
 */
import React, { Component } from 'react';
import './NavigationBar.css';
import pic from './daniel.jpeg'
class NavigationBar extends Component {

    constructor(props){
        super(props);
        this.state = {text: "",buttonName : "HOME"};

    }

    renderButtonName(passed){
        return((passed === this.state.buttonName)?"active":"Buttons")
    }

    render() {

        console.log("NavigationBar in!")

        return (

            <div className="NavigationComponent">
                <div className="Buttons-Layout-Left">
                    <button className={this.renderButtonName('HOME')} onClick={()=>{this.setState({buttonName:'HOME'})}} > HOME </button>
                    <button className={this.renderButtonName('ABOUT')} onClick={()=>{this.setState({buttonName:'ABOUT'})}}> ABOUT </button>
                    <button className={this.renderButtonName('RESUME')} onClick={()=>{this.setState({buttonName:'RESUME'})}}> RESUME </button>
                </div>
                <div className="Buttons-Layout-Middle">
                    <img src={pic} className="profilePic"/>
                </div>
                <div className="Buttons-Layout-Right">
                    <button className={this.renderButtonName('SKILLS')} onClick={()=>{this.setState({buttonName:'SKILLS'})}}> SKILLS </button>
                    <button className={this.renderButtonName('HOBBES')} onClick={()=>{this.setState({buttonName:'HOBBES'})}}> HOBBES </button>
                    <button className={this.renderButtonName('CONTACT')} onClick={()=>{this.setState({buttonName:'CONTACT'})}}> CONTACT </button>
                </div>
            </div>


        )

    }
}

export default NavigationBar;