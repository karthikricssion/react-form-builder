import React from 'react';
import './normalize.css';
import './App.css';

import FormBuilder from './contentarea/FormBuilder'
import SideBar from './sidebar/SideBar'

function App() {
  return (
    <div className="cflex full-height">
      <SideBar />
      <FormBuilder />
    </div>
  );
}

export default App;
