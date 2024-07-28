import React from 'react';
import './App.css';
import Normalprops from './Components/Normalprops';
import { Togglebutton } from './Components/Togglebutton';
import { UserForm } from './Components/Userform';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          {/* <Normalprops name={'shravan'}/>
          <Togglebutton/> */}
          <UserForm/>
      </header>
    </div>
  );
}

export default App;
