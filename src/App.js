import React from 'react';
import './App.css';
import MainRoutes from './routes';

class App extends React.Component {
  render() {
    return (
      <div className="App">        
        <MainRoutes {...this.props} />
      </div>
    )
  }
}

export default App;
