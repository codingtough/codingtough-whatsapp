import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 
import App from './components/App';

import { StateProvider } from './components/StateProvider';
import reducer, { initialState } from './components/StateProvider/reducer';

ReactDOM.render(
   <React.StrictMode>
      <StateProvider 
         initialState={initialState}
         reducer={reducer}
      >
         <App />
      </StateProvider>
   </React.StrictMode>,
   document.getElementById('root')
);
