/**
 * Created by Daniel Bello16 on 8/10/2017.
 */
import React, { Component } from 'react';
import '../Css/Hobbies.css';
import InfoComponent from './InfoComponent'

class Hobbies extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hobbiesInfo: {
                taekwondo: [
                    {label: 'Teakwondo:', info: 'A professional sportsman in the Taekwondo national team.'},
                    {label: '1997 - 2017:', info: 'Since I was five!'}
                ],
                coding: [
                    {label: 'Coding :', info: 'Yes, its a Hobby as you know'},
                    {label: '2007 - 2017:', info: 'I learn in my spear Time. '}
                ],
                tv: [
                    {
                        label: 'TV shows/Movies :',
                        info: 'I\'m watching right now Game Of Thrones, Vikings, The Black List , and for the fist time in my history - completing all Friends' +
                        ' seasons'
                    },
                    {label: '1992 - Today:', info: 'When I need to clear my mind! '}
                ]
            },
            hobbyText: <div className="text-message"> Hover the circles </div>
        }
    }

    updateHobby = (infoList) => {
        if (infoList === "message") {
            this.setState({ hobbyText: <div className="text-message"> Hover the circles </div> });
        } else {
            this.setState({ hobbyText: <InfoComponent title="" infoList={infoList}/> });
        }
    };

    renderCircle(position, hobby, hobbyTitle) {
        return (
            <div className={`circle-${position}`} onMouseOver={() => {this.updateHobby(this.state.hobbiesInfo[hobby])}}
                onMouseLeave={() => {this.updateHobby("message")}}>
                <div className={`text-${position}`}>
                    {hobbyTitle}
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="hobbiesComponent">
                <div className="hobby-content">
                    <div className="hobby-text"> {this.state.hobbyText} </div>
                </div>
                <div className="hobbies-container">
                    { this.renderCircle("top", "taekwondo", "Taekwondo") }
                    { this.renderCircle("left", "tv", "TV shows/Movies") }
                    { this.renderCircle("right", "coding", "Coding") }
                </div>
            </div>
        )
    }
}

export default Hobbies;