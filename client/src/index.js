import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import CombineRoute from './routes/index';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bs5-lightbox';
import { store, persistor } from './store'; 
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}> 
        <CombineRoute />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
