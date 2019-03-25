"use strict";


function getAllMedia() {
  let array = [];
  return fetch('http://media.mw.metropolia.fi/wbma/media')
  .then(res => //this.setState({ picArray: res.data }))
      {
        //console.log(res.data);
        //console.log(res.data[0].file_id);
        return Promise.all(res.data.map(a =>
            {
              let imgID = a.file_id;
              //console.log(`http://media.mw.metropolia.fi/wbma/media/${imgID}`);
              return fetch(`http://media.mw.metropolia.fi/wbma/media/${imgID}`)
                  .then(res2 => array.push(res2))
                  .catch(err2 => console.log(err2))
            })
        );
            //console.log(this.state.picArray)
      }
  )
  .catch(err => console.log(err))
}

export {getAllMedia}