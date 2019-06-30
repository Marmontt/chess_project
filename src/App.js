import React, {Component} from 'react';
import MainMenu from "./components/MainMenu";
import {Route, Switch} from 'react-router-dom';
import {withStyles} from '@material-ui/core/styles';
import ChessGame, {getMoves, turn} from './components/ChessGame';
import Chessboard from 'chessboardjsx';
import SimpleModal from './components/GameOver';
import Button from "@material-ui/core/Button/Button";


const styles = {
    color: '#00FFFF',
    MovesTable: {
        border: '2px solid #00ffff',
        width: 300,
        height: 530,
        marginLeft: 50,
        background: '#606060',
        opacity: .9,
        textAlign: 'left',
        overflowX: 'hidden',
        overflowY: 'scroll',
        padding: '10px 15px',
    },
    Move: {
        textAlign: 'center',
        color: '#00FFFF',
        fontSize: 25,
    },
    movesHistory: {
        color: '#000000',
        width: 290,
        position: 'relative',
        zIndex: 1,
        wordBreak: 'normal',
    },
    button: {
        color: '#00ffff',
        display: 'inline-block',
        marginLeft: 507,
        marginTop: 10,
    },
};


class App extends Component {
    state = {
        difficultyValue: 2,
        name: 'Player',
        checkedW: true,
        checkedB: false,
        isGameOver: false,
        turn: 'w',
        gameStatus: true,
    };

    myTurn = () => {
        let currentTurn = turn();
        this.setState({turn: currentTurn});
        return currentTurn;
    };

    handleGameOver = (val) => {
        this.setState({isGameOver: val})
    };

    GameOverRetry = () => {
        document.location.reload(true);
    };

    GameOverReturn = () => {
        document.location.replace('/');
    };

    handleChange = (e) => {
        this.setState({difficultyValue: e.target.value});
    };

    handleUserNameChange = (e) => {
        this.setState({name: e.target.value});
    };

    movesIndexing = () => {
        let moves = '';
        let k = 1;
        let history = getMoves();
        for (let i = 0; i < getMoves().length; ++i) {
            if (i % 2 !== 0) k++;
            let move = history[i];
            moves += (i % 2 !== 0) ? ' ' + move : ' ' + k + '.' + move;
        }
        return moves;
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
        const {classes} = this.props;
        return (
            <Switch>
                <Route path='/' exact render={() =>
                    <div className="App">
                        <MainMenu handleChange={this.handleChange} handleUserNameChange={this.handleUserNameChange}
                                  handleCheck={this.handleCheck}
                                  difficultyValue={this.state.difficultyValue} name={this.state.name}
                                  checkedW={this.state.checkedW} checkedB={this.state.checkedB}/>
                    </div>
                }/>
                <Route path='/game' exact render={() =>
                    <div>
                        <div
                            style={styles}>Computer: {this.state.difficultyValue === 1 ? 'Easy' : this.state.difficultyValue === 2 ? 'Normal' : this.state.difficultyValue === 3 ? 'Hard' : 'Wrong Value'}</div>
                        <div style={boardsContainer}>
                            <ChessGame difficultyValue={this.state.difficultyValue} handleGameOver={this.handleGameOver} checkedW={this.state.checkedW}
                                       myTurn={this.myTurn}>
                                {({position, onDrop}) => (
                                    <Chessboard
                                        width={550}
                                        darkSquareStyle={{background: '#555555'}}
                                        lightSquareStyle={{background: '#00e1e1'}}
                                        position={position}
                                        onDrop={onDrop}
                                        boardStyle={boardStyle}
                                        orientation={(this.state.checkedW) ? 'white' : 'black'}
                                    />
                                )}
                            </ChessGame>
                            <div className={classes.MovesTable}>
                                <div className={classes.Move}>{(this.state.turn === 'w') ? 'White' : 'Black'} to Move
                                </div>
                                <div className={classes.movesHistory}>{this.movesIndexing()}</div>
                            </div>
                            <SimpleModal GameOverReturn={this.GameOverReturn} GameOverRetry={this.GameOverRetry}
                                         isGameOver={this.state.isGameOver}/>
                        </div>
                        <div style={styles}>Username: {this.state.name}
                            <div className={classes.button}>
                                <Button style={{
                                    color: '#00ffff',
                                    marginRight: 80,
                                    border: '1px solid #00ffff',
                                    background: '#414141',
                                    opacity: 0.9,
                                    width: 110,
                                }} onClick={this.GameOverReturn}>Main menu</Button>
                                <Button style={{
                                    color: '#00ffff',
                                    border: '1px solid #00ffff',
                                    background: '#414141',
                                    opacity: 0.9,
                                    width: 110,
                                }} onClick={this.GameOverRetry}>Retry</Button>
                            </div>
                        </div>
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
