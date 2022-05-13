import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DeviceStore from './store/DeviceStore';
import UserStore from './store/UserStore';
// const express = require ('express')
// const sequelize = require ('./db.js')


// const start = async () => {
//   try{
//     await sequelize.authenticate()
//     await sequelize.sync()
//   }
//   catch (e){
//     console.log(e)
//   }
// }
console.log(process.env.REACT_APP_API_URL)
export const Context = createContext(null)

ReactDOM.render(
  <Context.Provider value={{
    user: new UserStore(),
    device: new DeviceStore(),
  }}>
    <App />
    </Context.Provider>,
  document.getElementById('root')
  
);


