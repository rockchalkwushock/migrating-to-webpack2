import React from 'react';
import { render } from 'react-dom';
import '../public/styles.css';

const App = () => (
  <div>
    <h1>Hello world!</h1>
  </div>
);

render(<App />, document.getElementById('root'));
