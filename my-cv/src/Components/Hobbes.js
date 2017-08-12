/**
 * Created by Daniel Bello16 on 8/10/2017.
 */
import React, { Component } from 'react';
import '../Css/Hobbes.css';
import tkd from '../Images/TKD2.png'
import code from '../Images/code.png'
import gameOfThrones from '../Images/gameOfThrones.png'
import Card from './Card'

class Hobbes extends Component {
    constructor(props) {
        super(props);
        this.state ={
            titleTeakwondo:'Teakwondo',
            infoListTeakwondo : [
                {labal:'Teakwondo:' ,info:'A professional sportsman in the Taekwondo national team.'},
                {labal:'1997 - 2017:' ,info:'Since i was five!'}
            ],
            titleCodeing:'Codeing',
            infoListCodeing : [
                {labal:'Codeing :' ,info:'Yes its a Hobbe as you know'},
                {labal:'2007 - 2017:' ,info:'I learn in my spear Time. '}
            ],
            titleShows:'TV shows/Movies',
            infoListShows : [
                {labal:'TV shows/Movies :' ,info:'I watching right now Game Of Thrones, The Black List , Friends Yes I need to complete Episodes and more'},
                {labal:'1992 - Today:' ,info:'When i need to clean my head! '}
            ],
        }
    }

    render() {

        return (
            <div className="hobbiesComponent">
                <div className="hobbies-container">
                    <div className="circle-top">
                        <div className="text-top">
                            Taekwondo
                        </div>
                    </div>
                    <div>

                    </div>
                    <div className="circle-left">
                        <div className="text-left">
                            Series And Movies
                        </div>
                    </div>

                    <div className="circle-right">
                        <div className="text-right">
                            Coding
                        </div>
                    </div>
                </div>
                {/*<Card title={this.state.titleTeakwondo} infoList={this.state.infoListTeakwondo} image={tkd}/>*/}
                {/*<Card title={this.state.titleCodeing} infoList={this.state.infoListCodeing} image={code}/>*/}
                {/*<Card title={this.state.titleShows} infoList={this.state.infoListShows} image={gameOfThrones}/>*/}
            </div>
        )

    }
}

export default Hobbes;