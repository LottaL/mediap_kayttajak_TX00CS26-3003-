import React, { Component } from 'react';
import './App.css';
import Table from './components/Table.js';
import axios from 'axios';

class App extends Component {
  state = {
    picArray: [],
  };

  componentDidMount() {
    let promises = [],
        array = [];
    axios.get('http://media.mw.metropolia.fi/wbma/media')
        .then(res => //this.setState({ picArray: res.data }))
        {
          //console.log(res.data);
          //console.log(res.data[0].file_id);
          res.data.map(a =>
              {
                let imgID = a.file_id;
                //console.log(`http://media.mw.metropolia.fi/wbma/media/${imgID}`);
                promises.push(axios.get(`http://media.mw.metropolia.fi/wbma/media/${imgID}`)
                    .then(res2 => array.push(res2))
                    .catch(err2 => console.log(err2))
                )
              }
          );
          Promise.all(promises).then(() => this.setState({ picArray: array}),
          //console.log(this.state.picArray)
        )
        }
        )
        .catch(err => console.log(err))
  }

  render() {
    //console.log(this.state.picArray);
    return (
            <Table media={this.state.picArray}/>
    );
  }
}

export default App;
