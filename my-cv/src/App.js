import React, { Component } from 'react';
import NavigationBar from './Components/NavigationBar';
import InfoTable from './Components/InfoTable'
import Skills from './Components/Skills'
import Education from './Components/Education'
import Projects from './Components/Projects'
import Hobbes from './Components/Hobbes'
import Contact from './Components/Contact'
import SocialBar from './Components/SocialBar'
import './Css/App.css';

class App extends Component {

  constructor(props){
      super(props);
      this.state = {
          infoList : [
              {labal:'Date of birth:' ,info:'28/04/92'},
              {labal:'Place of birth:' ,info:'Israel'},
              {labal:'Address:' ,info:'8 Ami St., Rehovot'},
              {labal:'Cell Phone:' ,info:'054-9989741'},
              {labal:'Email:' ,info:'dbello96@gmail.com'},
          ],
          buttonName : "HOME"
      }
  }
  chosePage = (passed) => {
      this.setState({buttonName : passed})
  }
  componentActive = ()=> {
    if(this.state.buttonName === "HOME"){
        return(<InfoTable infoList={this.state.infoList} buttonName={this.state.buttonName}/>)
    }
    else if(this.state.buttonName === "EDUCATION"){
        return(<Education/>)
    }
    else if(this.state.buttonName === "PROJECTS"){
        return(<Projects/>)
    }
    else if(this.state.buttonName === "SKILLS"){
        return(<Skills/>)
    }
    else if(this.state.buttonName === "HOBBES"){
        return(<Hobbes/>)
    }
    else if(this.state.buttonName === "CONTACT"){
        return(<Contact/>)
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2 class>Daniel Bello</h2>
            <h4>Software Engineer</h4>
          <button className='resume-button'>Download My Resume</button>
        </div>
        <div>
          <NavigationBar chosePage={this.chosePage} buttonName={this.state.buttonName}/>
        </div>
        <div>
            {this.componentActive()}
        </div>
        <div>
            <SocialBar/>
        </div>
      </div>

    );
  }
}

export default App;
