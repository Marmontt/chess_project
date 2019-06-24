import React, {Component} from 'react';
import MainMenu from "./components/MainMenu";
import {Route, Switch} from 'react-router-dom';
import {withStyles} from '@material-ui/core/styles';
import ChessGame from './components/ChessGame';
import Chessboard from 'chessboardjsx';


const styles = {
    color: '#00FFFF',
};


class App extends Component {
    state = {
        difficultyValue: 2,
        name: 'Player',
        checkedW: true,
        checkedB: false,
    };

    handleUserNameChange = (e) => {
        this.setState({name: e.target.value});
        console.log(this.state.name);
        console.log(e.target.value);
    };

    handleCheck = (e) => {
        if (e.target.checked === true) {
            this.setState({
                checkedW: !this.state.checkedW,
                checkedB: !this.state.checkedB,
            });
        }
    };

    render() {
        return (
            <Switch>
                <Route path='/' exact render={() =>
                    <div className="App">
                        <MainMenu handleUserNameChange={this.handleUserNameChange} handleCheck={this.handleCheck}
                                  difficultyValue={this.state.difficultyValue} name={this.state.name}
                                  checkedW={this.state.checkedW} checkedB={this.state.checkedB}/>
                    </div>
                }/>
                <Route path='/game' exact render={() =>
                    <div>
                        <div style={styles}>Computer: {this.state.difficultyValue}</div>
                        <div style={boardsContainer}>
                            <ChessGame checkedW={this.state.checkedW}>
                                {({position, onDrop}) => (
                                    <Chessboard
                                        width={550}
                                        darkSquareStyle={{background: '#555555'}}
                                        lightSquareStyle={{background: '#00e1e1'}}
                                        position={position}
                                        onDrop={onDrop}
                                        boardStyle={boardStyle}
                                        orientation={(this.state.checkedW)? 'white':'black'}
                                    />
                                )}
                            </ChessGame>
                        </div>
                        <div style={styles}>Username: {this.state.name}</div>
                    </div>
                }/>
            </Switch>
        );
    }
}

export default withStyles(styles)(App);

const boardsContainer = {
    display: "flex",
    // justifyContent: "space-around",
    // alignItems: "center",
};

const boardStyle = {
    border: '2px solid #00ffff',
    color: '#000000',
};
