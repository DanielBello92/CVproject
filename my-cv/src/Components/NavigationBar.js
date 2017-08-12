/**
 * Created by Daniel Bello16 on 8/9/2017.
 */
import React, { Component } from 'react';
import '../Css/NavigationBar.css';
import pic from '../Images/daniel.jpeg'
class NavigationBar extends Component {

    constructor(props){
        super(props);
    }

    renderButtonName(passed){
        return((passed === this.props.buttonName)?"Buttons-selected":"Buttons")
    }

    render() {
        return (
            <div className="NavigationComponent">
                <div className="Buttons-Layout-Left">
                    <button className={this.renderButtonName('HOME')} onClick={()=>{this.props.chosePage('HOME')}} > HOME </button>
                    <button className={this.renderButtonName('EDUCATION')} onClick={()=>{this.props.chosePage('EDUCATION')}}> EDUCATION </button>
                    <button className={this.renderButtonName('PROJECTS')} onClick={()=>{this.props.chosePage('PROJECTS')}}> PROJECTS </button>
                </div>
                <div className="Buttons-Layout-Middle">
                    <img src={pic} className="profilePic"/>
                </div>
                <div className="Buttons-Layout-Right">
                    <button className={this.renderButtonName('SKILLS')} onClick={()=>{this.props.chosePage('SKILLS')}}> SKILLS </button>
                    <button className={this.renderButtonName('HOBBES')} onClick={()=>{this.props.chosePage('HOBBES')}}> HOBBES </button>
                    <button className={this.renderButtonName('CONTACT')} onClick={()=>{this.props.chosePage('CONTACT')}}> CONTACT </button>
                </div>
            </div>
        )
    }
}

export default NavigationBar;