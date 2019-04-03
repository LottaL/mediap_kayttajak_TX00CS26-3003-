import React from 'react';
import {getUserInfo} from '../utils/MediaAPI';
import PropTypes from 'prop-types';
import Home from './Home';

const Profile = (props) => {
  console.log(props);
  let id = localStorage.getItem('id'),
      token = localStorage.getItem('token');
  //getUserInfo(id, token).then(res => console.log(res));

  return (
      <React.Fragment>
        <h1>Profile</h1>
      </React.Fragment>
  );
};

Profile.propTypes = {
  user: PropTypes.string,
};

export default Profile;