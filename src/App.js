import React from 'react';
import './normalize.css';
import './App.css';

import FormBuilder from './components/FormBuilder'
import SideBar from './components/SideBar'

function App() {
  return (
    <div className="cflex full-height">
      <SideBar />
      <FormBuilder />
    </div>
  );
}

export default App;
