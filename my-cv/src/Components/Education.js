/**
 * Created by Daniel Bello16 on 8/10/2017.
 */
import React, { Component } from 'react';
import '../Css/Education.css';
import study from '../Images/study.png'
import Card from './Card'

class Education extends Component {
    constructor(props) {
        super(props);
        this.state ={
            title:'My Education',
            infoList : [
                {labal:'2014 - today:' ,info:' A software engineering undergraduate student at The Afeka Academic College for Engineering in Tel Aviv. Grade AVG: 85.Expected graduation date: August 2018.'},
                {labal:'2007 - 2010:' ,info:'Graduation from Amos De-Shalit High School in Rehovot.Majors in mathematics, chemistry, computer science and english.'}
            ],
        }
    }

    render() {

        return (
            <div className="EducationComponent" >
                <Card title={this.state.title} infoList={this.state.infoList} image={study}/>
            </div>
        )

    }
}

export default Education;