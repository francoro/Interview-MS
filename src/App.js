import React from 'react';
import './App.css';
import  Listing  from './components/listing';
import configureStore from './configureStore';
import { Provider } from 'react-redux';
let store = configureStore();
function App() {
  return (
    <Provider store={store}>
      <Listing />
    </Provider>
  );
}

export default App;
