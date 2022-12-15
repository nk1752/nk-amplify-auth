import logo from './logo.svg';
import './App.css';

import { withAuthenticator } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';

async function Signout() {

    try {
      await Auth.signOut();
    } catch (error) {
      console.log('error signing out: ', error);
    }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Signout</h1>
      </header>
      <button onClick={Signout}>Sign Out</button>
    </div>
  );
}

export default withAuthenticator(App);
