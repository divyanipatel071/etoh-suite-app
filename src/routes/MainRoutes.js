import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import Login from '../views/auth/Login';
import Messagemodal from '../shared/messageModal';
export const history = createBrowserHistory(); 

class MainRoutes extends Component {

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/message-modal" element={<Messagemodal />} />
        </Routes>
      </BrowserRouter>     
    );
  }
}

export default MainRoutes;