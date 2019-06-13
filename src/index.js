import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ThemeProvider} from '@material-ui/styles';
import {BrowserRouter as Router} from 'react-router-dom'
import {createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#00ffff',
        },
    },
});

var body = document.getElementsByTagName("body")[0];
body.style.backgroundImage = "url(https://wallpapercave.com/wp/aniTxU8.jpg)";
body.style.backgroundRepeat = 'no-repeat';
body.style.backgroundAttachment = 'fixed';
body.style.backgroundSize = 'cover';
body.style.backgroundPosition = 'center center';

ReactDOM.render(
    <Router>
        <ThemeProvider theme={theme}>
            <App/>
        </ThemeProvider>
    </Router>
    , document.getElementById('root'));
