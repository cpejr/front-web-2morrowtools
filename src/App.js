import logo from './logo.svg';
import './App.css';
import SignIn from './components/sign-in.component';
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState()

  const logOut = async () => {
    sessionStorage.clear()
    window.location.reload(false);
}

  useEffect(() => {
    setUser(sessionStorage.getItem("user"))
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <SignIn></SignIn>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{user}</p>
        <div>
            <button onClick={logOut}>Sign out</button>
        </div>
      </header>
    </div>
  );
}

export default App;
