/**
 * Created by Daniel Bello16 on 8/9/2017.
 */
import React, { Component } from 'react';
import './InfoTable.css';
import InfoComponent from './InfoComponent'


class InfoTable extends Component {


    render() {
        console.log("infoTable in!")

        return (
            <div className="TableComponent">
                <div className="Info-Layout-Left">
                    <h3>Who am i?</h3>
                    <p>My name is Daniel Bello I am 3rd year student. </p>
                    <p>My name is Daniel Bello I am 3rd year student. </p>
                </div>
                <div className="Info-Layout-Middle">
                    <InfoComponent/>
                </div>
                <div className="Info-Layout-Right">
                    <h3>Community Involvement</h3>
                    <ul>
                        <li>
                            Coach assistant for the youth team of the Taekwondo Club.
                        </li>
                    </ul>
                    <ul>
                        <li>
                            Mentor for youth at risk in "Yedidim" organization.
                        </li>
                    </ul>
                </div>
            </div>
        )

    }
}

export default InfoTable;