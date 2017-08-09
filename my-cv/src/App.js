import React, { Component } from 'react';
import NavigationBar from '././NavigationBar';
import InfoTable from './InfoTable'
import './App.css';

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
  componentActive(){

      return(<InfoTable infoList={this.state.infoList}/>)
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Daniel Bello</h2>
            <h4>Software Engineer</h4>
          <button className='resume-button'>Download My Resume</button>
        </div>
        <div>
          <NavigationBar/>
        </div>
        <div>
          <InfoTable infoList={this.state.infoList} buttonName={this.state.buttonName}/>
        </div>
      </div>

    );
  }
}

export default App;
