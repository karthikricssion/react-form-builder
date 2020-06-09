import React from 'react';
import './normalize.css';
import './App.css';

import FormBuilder from './formbuilder/FormBuilder'
import SideBar from './sideBar/SideBar'

function App() {
  return (
    <div className="cflex full-height">
      <SideBar />
      <FormBuilder />
    </div>
  );
}

export default App;
