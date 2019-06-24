import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ThemeProvider} from '@material-ui/styles';
import {BrowserRouter as Router} from 'react-router-dom'
import {createMuiTheme} from '@material-ui/core/styles';
import Chess from "chess.js";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#00ffff',
            // dark: '#ee00ff',
        },
    },
});

var body = document.getElementsByTagName("body")[0];
body.style.background = "url(https://wallpapercave.com/wp/aniTxU8.jpg) no-repeat fixed center center";
body.style.backgroundSize = 'cover';

ReactDOM.render(
    <Router>
        <ThemeProvider theme={theme}>
            <App/>
        </ThemeProvider>
    </Router>
    , document.getElementById('root'));
