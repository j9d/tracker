import axios from 'axios';

import logo from './logo.svg';
import './App.css';

import { API_BASE } from './constants';

function hello() {
    axios.get(
        `${API_BASE}/api/hello`
    ).then((response) => {
        console.log(response.data.message);
    });
}

function App() {
    return (
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
                <button onClick={hello}>Say hello</button>
            </header>
        </div>
    );
}

export default App;
