/**
 * Created by Daniel Bello16 on 8/11/2017.
 */
import React, { Component } from 'react';
import '../Css/Card.css';
import InfoComponent from './InfoComponent'

class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="CardComponent">
                <div className="my-card" id="slide">
                    <div className="my-card-info">
                        <InfoComponent title={this.props.title} infoList={this.props.infoList}/>
                    </div>
                    <img src={this.props.image} className="my-card-image"/>
                </div>
            </div>
        )
    }
}

export default Card;
