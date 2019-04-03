"use strict";
import axios from 'axios';

function getAllMedia() {
  let array = [];
  return axios.get('http://media.mw.metropolia.fi/wbma/media')
  .then(res => //this.setState({ picArray: res.data }))
      {
        return Promise.all(res.data.map(a =>
            {
              let imgID = a.file_id;
              return axios.get(`http://media.mw.metropolia.fi/wbma/media/${imgID}`)
                  .then(res2 => {array.push(res2)})
                  .catch(err2 => console.log(err2))
            })
        ).then(res => {return res.data = array});
      }
  )
  .catch(err => console.log(err))
}

const getSingleMedia = (id) => {
  return axios.get(`http://media.mw.metropolia.fi/wbma/media/${id}`)
};

const login = (usr, passwd) => {
  console.log('login func');
  return axios.post('http://media.mw.metropolia.fi/wbma/login', {
    username: usr,
    password: passwd
  })
};

const register = (obj) => {
  let newUser = {
    username: obj.username,
    password: obj.password,
    email: obj.email,
    full_name: obj.full_name
  };
  console.log('register func');
  return axios.post('http://media.mw.metropolia.fi/wbma/users', newUser)
};

const checkIfUserExists = (usr) => {
  console.log('check if func');
  return axios.get(`http://media.mw.metropolia.fi/wbma/users/username/${usr}`);
};

const getCurrUserInfo = (token) => {
  //token = 800; //TEST
  console.log('get current user info');
  return axios.get('http://media.mw.metropolia.fi/wbma/users/user', {headers: {"x-access-token": token}})
  //.then(res => console.log(res))
  //.catch(err => console.log(err.response))
};

const getUserInfo = (id, token) => {
  console.log('get user info');
  return axios.get(`http://media.mw.metropolia.fi/wbma/users/${id}`, {headers: {"x-access-token": token}})
      //.then(res => console.log(res))
      //.catch(err => err.response);
};

export {getSingleMedia}
export {getAllMedia}
export {login}
export {register}
export {checkIfUserExists}
export {getCurrUserInfo}
export {getUserInfo}