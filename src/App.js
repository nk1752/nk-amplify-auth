
import './App.css';

import { withAuthenticator } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';

import { useState } from 'react';

async function Signout() {

    try {
      await Auth.signOut();
      console.log('signing out...')
    } catch (error) {
      console.log('error signing out: ', error);
    }
}

function getSession() {
  
  const userData = Auth.currentSession()
  .then( (data) => console.log(data) )
  
  .catch((err) => console.log(err));

  return userData
}




function App() {

  const [username, setUsername] = useState('ned')
  const [email, setEmail] = useState('ned')

  
  function getUserData() {
    
    Auth.currentAuthenticatedUser()
     .then( (user2) => setUsername(user2.username));

     Auth.currentAuthenticatedUser()
     .then( (user2) => setEmail(user2.attributes.email));

     Auth.currentAuthenticatedUser()
     .then( (user2) => console.log(user2));
    
    alert(username);
     
  }
     
    
  return (
    
    <div className="App">

      <button type='button' onClick={

        getUserData
           
        }>Get Session</button><br />

      
      <button type='button' onClick={Signout}>Sign Out</button><br />

      <h1>Hello {username}</h1>
      <h1>Your email: {email}</h1>
    
    </div>
  );
}

export default withAuthenticator(App);
