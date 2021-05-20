import React, {Component} from 'react';

import axios from "axios"

function login() {


  let headers = {
    'Access-Control-Allow-Origin': 'http://localhost:3000'
  }
  axios({
    method: 'post',
    url: '/auth/signin',
    data: {
      email: 'goddoro@naver.com',
      password: 'gusgh0705!'
    },
    headers
  })
  .then((response) => { console.log(response.data); }) 
  .catch((response) => { console.log('Error!')})

}

class Button extends Component {


  
  render() {

    return (

      <button onClick={login}>
        로그인
      </button>
    )
  }
}

export default Button;