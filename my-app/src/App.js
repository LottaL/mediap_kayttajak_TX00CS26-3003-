import React, { Component } from 'react';
import './App.css';
import Table from './components/Table.js';
import axios from 'axios';

class App extends Component {
  state = {
    picArray: [],
  };

  componentDidMount() {
    axios.get('test.json')
        .then(res => this.setState({ picArray: res.data }))
        .catch(err => console.log(err))
  }

  render() {
    //console.log(this.state.picArray);
    return (
            <Table catcards={this.state.picArray}/>
    );
  }
}

export default App;
