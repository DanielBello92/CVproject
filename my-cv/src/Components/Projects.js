/**
 * Created by Daniel Bello16 on 8/10/2017.
 */
import React, { Component } from 'react';
import '../Css/Projects.css'
import front from '../Images/front-end.jpeg'
import android from '../Images/android.jpg'
import reactjs from '../Images/React.jpg'

class Projects extends Component {

    constructor(props) {
        super(props);
        this.state ={
            title:'Project',
            links: [
                {label:'React js:', info:'https://www.linkedin.com/in/daniel-bello-702804127/'},
                {label:'Android:', info:'https://github.com/DanielBello92/RedditGallery'},
                {label:'Internet front-end for mobile:',info:'https://mycellcard.000webhostapp.com/'},
            ]
        }
    }

    render() {
        return (
            <div className="ProjectsComponent">
                <div className="center-Layout">
                    <div className="projects-Layout">
                        <div className="flotingButtons">
                            <button id='button' className="bounce animated"/>
                            <button id='button' className="bounce animated"/>
                            <button id='button' className="bounce animated"/>
                        </div>
                    </div>
                    <div className="project-titles">
                        <div className="project-title" >Android</div>
                        <div className="project-title">front-end mobile</div>
                        <div className="project-title">React Js</div>
                    </div>
                    <div className="projects-links">
                        <a href="https://www.linkedin.com/in/daniel-bello-702804127/"><img className="project-images" src={android}/></a>
                        <a href="https://mycellcard.000webhostapp.com/"><img className="project-images" src={front}/></a>
                        <a href="https://github.com/DanielBello92/RedditGallery"><img className="project-images" src={reactjs}/></a>
                    </div>

                </div>
            </div>
        )
    }
}

export default Projects;
