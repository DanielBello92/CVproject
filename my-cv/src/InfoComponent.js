/**
 * Created by Daniel Bello16 on 8/9/2017.
 */
import React, { Component } from 'react';
import './InfoComponent.css';


class InfoComponent extends Component {


    render() {
        console.log("InfoComponent in!")

        return (
            <div className="InfoComponent">
                <h3>Personal info</h3>
                    <div className="Info-Layout-Middle">
                        <div className="label" >Date of birth: </div>
                        <div className="info">28/04/92</div>
                    </div>
                    <div className="Info-Layout-Middle">
                        <p className="label" >Place of birth: </p>
                        <p className="info"> Israel</p>
                    </div>
                    <div className="Info-Layout-Middle">
                        <p className="label" >Address: </p>
                        <p className="info"> 8 Ami St, Rehovot</p>
                    </div>
                    <div className="Info-Layout-Middle">
                        <p className="label">Cell Phone:</p>
                        <p className="info"> 054-9989741</p>
                    </div>
                    <div className="Info-Layout-Middle">
                        <p className="label" >Email: </p>
                        <p className="info"> dbello96@gmail.com</p>
                    </div>
            </div>
        )

    }
}

export default InfoComponent;