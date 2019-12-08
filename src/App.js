import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Home from './components/Home';
import NewUser from './components/NewUser';


class App extends React.Component {

  render (){
    return (
      <>
        <CssBaseline />
        <Container>
          <BrowserRouter>
            <Route path="/" exact={true} component={Home} />
            <Route path="/NewUser" component={NewUser} />
            <Route path="*" />
          </BrowserRouter>
        </Container>
      </>
    );
  }
}

export default App;
