import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <Layout />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
