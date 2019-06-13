import React, {Component} from 'react';
import MainMenu from "./components/MainMenu";
import {Route, Switch} from 'react-router-dom';
import {withStyles} from '@material-ui/core/styles';

const styles = {
    root: {
        margin: 'auto',
        maxWidth: 1280,
    },
};


class App extends Component {
    state = {};


    render() {
        const {classes: {root}} = this.props;
        return (
            <Switch>
                <Route path='/' exact render={() =>
                    <div className="App">
                        <MainMenu/>
                    </div>
                }/>
                <Route path='/game' exact render={() =>
                    <div>
                        asd
                    </div>
                }/>
            </Switch>
        );
    }
}

export default withStyles(styles)(App);
