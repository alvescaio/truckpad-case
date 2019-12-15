import React from 'react';
import { BrowserRouter, Route, HashRouter } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './components/Home';
import AddTrucker from './components/AddTrucker';
import EditTrucker from './components/EditTrucker';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#FFD100' },
    secondary: { main: '#2C2C2C' },
    background: {
      paper: "#EEEEEE",
      default: "#CACACA"
    },
  },
});

class App extends React.Component {
  render (){
    return (
      <>
        <ThemeProvider theme={theme}>
          <CssBaseline />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <HashRouter basename="/">
                  <Header />
                  <Container style={{flex: 1, paddingBottom: 30, display: 'flex', flexDirection: 'column'}}>
                      <Route path="/" exact={true} component={Home} />
                      <Route path="/addTrucker" component={AddTrucker} />
                      <Route path="/editTrucker/:id" component={EditTrucker} />
                      <Route path="*" />
                  </Container>
                  <Footer />
              </HashRouter>
            </MuiPickersUtilsProvider>
        </ThemeProvider>
      </>
    );
  }
}

export default App;
