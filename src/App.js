import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import Home from './components/Home';
import AddTrucker from './components/AddTrucker';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#FFD100' },
    secondary: { main: '#2C2C2C' },
    background: {
      paper: "#EEEEEE",
      default: "#CACACA"
    }
  },
});

class App extends React.Component {

  render (){
    return (
      <>
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Container>
            <BrowserRouter>
              <Route path="/" exact={true} component={Home} />
              <Route path="/addTrucker" component={AddTrucker} />
              <Route path="*" />
            </BrowserRouter>
          </Container>
        </MuiPickersUtilsProvider>
        </ThemeProvider>
      </>
    );
  }
}

export default App;
