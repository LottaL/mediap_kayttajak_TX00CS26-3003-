import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav.js'
import {getAllMedia} from './utils/MediaAPI.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './views/Home.js';
import Profile from './views/Profile.js'
import Single from './views/Single.js';



//getAllMedia().then(res => console.log(res));

class App extends Component {
  state = {
    picArray: [],
  };

  componentDidMount() {
    getAllMedia().then(res => {this.setState({ picArray: res });
     // console.log(this.state.picArray);
    });
  }

  render() {
    //console.log(this.state.picArray);
    //router basename="/~lottalau/FOLDERNAME"
    return (
        <Router>
          <div id="container">
            <Nav/>
            <Route exact path="/" render={props => (
                <React.Fragment>
                  <Home media={this.state.picArray}/>
                </React.Fragment>
            )}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/single" component={Single}/>
          </div>
        </Router>
    );
  }
}

export default App;
