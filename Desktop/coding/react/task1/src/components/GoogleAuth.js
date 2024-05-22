// import React from 'react';
// import {GoogleLogin, GoogleOAuthProvider} from "@react-oauth/google";
// import {jwtDecode} from "jwt-decode";
// function GoogleAuth() {
  
//   return (
//     <GoogleOAuthProvider clientId='964051430707-cjeeq00pu8q6ki4uqlqh1chkvkn5ssru.apps.googleusercontent.com'>
//         <GoogleLogin onSuccess={(credentialResponse)=>{
//             const credentialResponseDecoded = jwtDecode(credentialResponse.credential);
//         console.log(credentialResponse);
//     }}
//     onError={()=>{
//         console.log('Login Failed');
//     }}
//     />
//     </GoogleOAuthProvider>
//   );
// }

// export default GoogleAuth;


import React from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import axios from 'axios';

function GoogleAuth({ setUser }) {
  const handleLoginSuccess = async (response) => {
    try {
      const res = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: {
          Authorization: `Bearer ${response.credential}`,
        },
      });
      console.log(res.data);
      const user = {
        email: res.data.email,
        name: res.data.name,
      };
      setUser(user); // Pass the user information to the parent component
    } catch (err) {
      console.error('Error fetching user info:', err);
    }
  };

  const handleLoginFailure = (error) => {
    console.error('Login Failure:', error);
  };

  return (
    <GoogleOAuthProvider clientId="964051430707-cjeeq00pu8q6ki4uqlqh1chkvkn5ssru.apps.googleusercontent.com">
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={handleLoginFailure}
      />
    </GoogleOAuthProvider>
  );
}

export default GoogleAuth;
