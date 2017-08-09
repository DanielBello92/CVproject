/**
 * Created by Daniel Bello16 on 8/9/2017.
 */
import React, { Component } from 'react';
import './InfoTable.css';


class InfoComponent extends Component {


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
                    <h3>Personal info</h3>
                    <div>
                        <p className="label" >Date of birth: </p>
                        <p className="info">28/04/92</p>
                    </div>
                    <div>
                        <p className="label" >Place of birth: </p>
                        <p className="info"> Israel</p>
                    </div>
                    <div>
                        <p className="label" >Address: </p>
                        <p className="info"> 8 Ami St, Rehovot</p>
                    </div>
                    <div>
                        <p className="label">Cell Phone:</p>
                        <p className="info"> 054-9989741</p>
                    </div>
                    <div>
                        <p className="label" >Email: </p>
                        <p className="info"> dbello96@gmail.com</p>
                    </div>

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

export default InfoComponent;