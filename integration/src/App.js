import React from 'react';
import logo from './logo.svg';
import './App.css';
import JitsiMeetComponent from './components/JitsiMeetComponent'

function App() {
  return (
//     <body>
//  <div id="root"></div>
//  <script src='https://meet.jit.si/external_api.js'></script>
// </body>

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <script src='https://meet.jit.si/external_api.js'></script>
      </header>
    </div>
  );
}

export default App;
