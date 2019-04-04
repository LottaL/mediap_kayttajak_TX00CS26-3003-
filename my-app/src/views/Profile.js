import React from 'react';
import PropTypes from 'prop-types';
import {getProfileIMG} from '../util/MediaAPI';

const Profile = (props) => {
  const {username, email, full_name} = props.user;
  console.log(getProfileIMG(localStorage.getItem('token')));
  return (
      <React.Fragment>
        <h1>Profile</h1>
        <p>Username: {username}</p>
        <p>email: {email}</p>
        <p>Full name: {full_name}</p>
      </React.Fragment>
  );
};

Profile.propTypes = {
  user: PropTypes.object,
};

export default Profile;