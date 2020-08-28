import React, { useState, useEffect } from 'react';
import Header from './Component/Header/Header';
import User from './Component/User/User';
import '../node_modules//bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (

    <div>
  <Header></Header>
  <User></User>
    </div>     
  );
}

export default App;
