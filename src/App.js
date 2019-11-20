import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import {store} from './redux';
import Form from './form';
function App() {
  return (
    <Provider store={store}>
        <div className='outer'>
          <div className="form">
            <h1>Form</h1>
            <Form/>
          </div>

        </div>
    </Provider>
  
    );
}

export default App;
