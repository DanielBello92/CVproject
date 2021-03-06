/**
 * Created by Daniel Bello16 on 8/9/2017.
 */
import React, { Component } from 'react';
import '../Css/InfoComponent.css';


class InfoComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="InfoComponent">
                <h3>{this.props.title}</h3>
                {
                    this.props.infoList.map((data, index) => {
                        return (
                            <div className="Info-Layout" key={index}>
                                <div className="label">
                                    {data.label}
                                </div>
                                <div className="info" >
                                    {data.info}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )

    }
}

export default InfoComponent;