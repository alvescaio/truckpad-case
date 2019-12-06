import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Home from './components/Home';

class App extends React.Component {
  render(){
      return (
        <div className="App">
          <Provider store={store}>
            <Home />
          </Provider>
        </div>
      );
  }
}

export default App;
