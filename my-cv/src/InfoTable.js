/**
 * Created by Daniel Bello16 on 8/9/2017.
 */
import React, { Component } from 'react';
import './InfoTable.css';
import InfoComponent from './InfoComponent'


class InfoTable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("infoTable in!")

        return (
            <div className="TableComponent">
                <div className="Info-Layout-Left">
                    <h3>Who am i?</h3>
                    <div className="whoiam-info">
                        <p>My name is Daniel Bello I am 3rd year student. </p>
                        <p>I am a professional sportsman in the Taekwondo national team.</p>
                        <p> I am a fast and self-learner and a hard worker.
                            In addition, I know to work with a team and individual.</p>
                    </div>
                </div>
                <div className="Info-Layout-Middle">
                    <InfoComponent infoList={this.props.infoList}/>
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