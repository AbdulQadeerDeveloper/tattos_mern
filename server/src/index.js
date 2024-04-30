import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './store'
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'; // Adjust the path if necessary
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Provider store={store} >
      <App />

    </Provider>

);

