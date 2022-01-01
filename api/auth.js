import React from 'react';

import axios from 'axios';

const handleLogin = (credential) =>{
    
    const url = 'https://server-app-food.herokuapp.com/auth/login'
  
 
    axios.post(url,credential).then((response)=> {    
          const result = response.data
          const{success,message,token} =result
          setMessage(message)
          if (success == true ){
              navigation.navigate('Home')
              console.log(result)
          }else{
              console.log("fail login")
          }
      })
      .catch(error => {
      console.log(error.JSON)
  })
}
export default handleLogin