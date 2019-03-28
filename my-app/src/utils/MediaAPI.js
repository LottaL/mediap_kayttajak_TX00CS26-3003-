"use strict";
import axios from 'axios';

function getAllMedia() {
  let array = [];
  return axios.get('http://media.mw.metropolia.fi/wbma/media')
  .then(res => //this.setState({ picArray: res.data }))
      {
        //console.log(res.data);
        //console.log(res.data[0].file_id);
        console.log(res);
        return Promise.all(res.data.map(a =>
            {
              let imgID = a.file_id;
              //console.log(`http://media.mw.metropolia.fi/wbma/media/${imgID}`);
              return axios.get(`http://media.mw.metropolia.fi/wbma/media/${imgID}`)
                  .then(res2 => {array.push(res2)})
                  .catch(err2 => console.log(err2))
            })
        ).then(res => {return res.data = array});
      }
  )
  .catch(err => console.log(err))
}

export {getAllMedia}