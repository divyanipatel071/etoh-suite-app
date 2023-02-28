import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import Login from '../views/auth/Login';
import Messagemodal from '../shared/messageModal';
import HavingTroubleModal from '../shared/havingTroubleModal';
import PasswordReset from '../shared/passwordReset';
import DownloadModal from '../shared/downloadModal';
export const history = createBrowserHistory(); 

class MainRoutes extends Component {

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/message-modal" element={<Messagemodal />} />
          <Route exact path="/having-trouble" element={<HavingTroubleModal />} />
          <Route exact path="/password-reset" element={<PasswordReset />} />
          <Route exact path="/download-modal" element={<DownloadModal />} />
        </Routes>
      </BrowserRouter>     
    );
  }
}

export default MainRoutes;