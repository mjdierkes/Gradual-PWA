import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './routes/HomeScreen/HomeScreen';
import LoginScreen from "./routes/loginScreen/LoginScreen"
import Dashboard from "./routes/Dashboard/Dashboard"

import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/login" element={<LoginScreen />}/>
      <Route path="/dashboard" element={<Dashboard />}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();