import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';

import Home from './components/Home';
import NewUser from './components/NewUser';
import Register from './components/Register';


class App extends React.Component {

  render (){
    return (
      <>
        <CssBaseline />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Container>
            <BrowserRouter>
              <Route path="/" exact={true} component={Home} />
              <Route path="/register" component={Register} />
              <Route path="*" />
            </BrowserRouter>
          </Container>
        </MuiPickersUtilsProvider>
      </>
    );
  }
}

export default App;
