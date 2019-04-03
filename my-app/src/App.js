import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav.js'
import {getAllMedia} from './utils/MediaAPI.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './views/Home.js';
import Profile from './views/Profile.js'
import Single from './views/Single.js';
import Login from './views/Login.js';
import {getCurrUserInfo} from './utils/MediaAPI';
import {getUserInfo} from './utils/MediaAPI';


//getAllMedia().then(res => console.log(res));

class App extends Component {
  state = {
    picArray: [],
  };

  componentDidMount() {
    let userdata;
    getAllMedia().then(res => {this.setState({ picArray: res });
     // console.log(this.state.picArray);
    });
    getCurrUserInfo(localStorage.getItem('token'))
    .then(res => console.log(res))
    .catch(err => {
      console.log(err.response);
      alert(err.response.statusText);
    });
    getUserInfo(localStorage.getItem('id'), localStorage.getItem('token')).then(
        res => {
          userdata = res.data;
          console.log(userdata);
        }
    )
  }

  render() {
    //console.log(this.state.picArray);
    //router basename="/~lottalau/FOLDERNAME"
    return (
        <Router basename="/~lottalau/AJAX2">
          <div id="container">
            <Nav/>
            <Route exact path="/" component={Login}/>
            <Route path="/home" render={props => (
                <React.Fragment>
                  <Home media={this.state.picArray}/>
                </React.Fragment>
            )}/>
            <Route path="/profile" render={props => (
                <React.Fragment>
                  <Profile user={}/>
                </React.Fragment>
                )}
            />
            <Route path="/single" component={Single}/>
          </div>
        </Router>
    );
  }
}

export default App;
