import React, { Component } from 'react';
import './App.css';
import Table from './components/Table.js';
import Nav from './components/Nav.js'
import {getAllMedia} from './utils/MediaAPI.js';
import Home from './views/Home.js';


//getAllMedia().then(res => console.log(res));

class App extends Component {
  state = {
    picArray: [],
  };

  componentDidMount() {
    getAllMedia().then(res => {this.setState({ picArray: res });
      console.log(this.state.picArray);
    });
  }

  render() {
    //console.log(this.state.picArray);
    return (
        <div id="container">
          <Nav/>
          <Table media={this.state.picArray}/>
        </div>
    );
  }
}

export default App;
