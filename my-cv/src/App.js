import React, { Component } from 'react';
import NavigationBar from '././NavigationBar';
import InfoTable from './InfoTable'
import './App.css';

class App extends Component {

  constructor(props){
      super(props);
      this.state = {
          searchText : '',
          numOfImageBoxs : 0,
          infoList : [],
          pageNumber : 0,
          numOfImagesPerPage : 5
      }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Daniel Bello</h2>
          <button className='rezume-button'>Download My Resume</button>
        </div>
        <div>
          <NavigationBar/>
        </div>
        <div>
          <InfoTable/>
        </div>
      </div>

    );
  }
}

export default App;
