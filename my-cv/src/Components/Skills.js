/**
 * Created by Daniel Bello16 on 8/10/2017.
 */
import React, { Component } from 'react';
import Bars from 'react-bars';
import '../Css/Skills.css'

class Skills extends Component {

    constructor(props) {
        super(props);
        this.state ={
            testData: [
                {label:'Javascript', value:85 , barColor:'deepskyblue', showValue: true, suffix:'%'},
                {label:'React', value:75, barColor:'deepskyblue', showValue: true, suffix:'%'},
                {label:'Node.js', value:70, barColor:'deepskyblue', showValue: true, suffix:'%'},
                {label:'HTML', value:100, barColor:'deepskyblue', showValue: true, suffix:'%'},
                {label:'CSS', value:70, barColor:'deepskyblue', showValue: true, suffix:'%'},
                {label:'JQuery', value:75 , barColor:'deepskyblue', showValue: true, suffix:'%'},
                {label:'Bootstrap', value:60,  barColor:'deepskyblue', showValue: true, suffix:'%'},
                {label:'Python', value:50,  barColor:'deepskyblue', showValue: true, suffix:'%'},
                {label:'PHP', value:45,  barColor:'deepskyblue', showValue: true, suffix:'%' },
            ]
        }
    }

    render() {
        return (
            <div className="SkillsComponent"  >
                <div id="slide-bars">
                    <h1 className="head"> Mad Skills </h1>
                    <div className="Skills-Layout">
                        <Bars className="bars-Component" data={this.state.testData} makeUppercase={true}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills;