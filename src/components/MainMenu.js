import React, {Component} from 'react';
import {Grid, Paper, Button, withStyles, FormControl, MenuItem, Select, TextField, InputLabel} from '@material-ui/core';
import logo from '../img/logo.png';
import {withRouter, Link} from 'react-router-dom';
import Checkbox from '@material-ui/core/Checkbox';


const styles = {
    logo: {
        height: 160,
        width: 130,
    },
    menu: {
        marginTop: 40,
        margin: 'auto',
        padding: 40,
        background: '#d7d7d7',
        border: '2px solid #00ffff',
        opacity: 0.9,
        height: 'auto',
    },
    button: {
        color: '#00ffff',
        background: '#505355',
        width: 150,
        margin: 'auto',
        marginTop: 10,
        border: '1px solid #00ffff',
    },
    textField: {
        width: 200,
    },
    formControl: {
        minWidth: 120,
        marginTop: 10,
    },
    colorCheck: {
        marginTop: 30,
    },
    body: {
        fontFamily: 'Montserrat',
    },
};

const CustomCheckbox = withStyles({
    root: {
        color: '#00ffff',
        '&$checked': {
            color: '#505355',
        },
    },
    checked: {},
})(props => <Checkbox color="default" {...props} />);

class MainMenu extends Component {
    state = {
        start: false,
    };


    render() {
        const {classes} = this.props;

        return (
            <div>
                <Grid container>
                    <Grid item xs={12}>
                        <Grid container>
                            <div style={{margin: 'auto',}}>
                                <img src={logo} alt="logo" className={classes.logo}/>
                            </div>
                        </Grid>
                    </Grid>
                    <Paper className={classes.menu}>
                        <Grid container direction={"column"}>
                            <TextField
                                id="standard-name"
                                label="Name"
                                className={classes.textField}
                                value={this.props.name}
                                onChange={this.props.handleUserNameChange}
                                margin="normal"
                            />
                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="age-simple">Computer Difficulty</InputLabel>
                                <Select
                                    value={this.props.difficultyValue}
                                    onChange={this.props.handleChange}
                                    onClick={this.handleClick}
                                    inputProps={{
                                        name: 'difficulty',
                                        id: 'difficulty',
                                    }}
                                >
                                    <MenuItem value={1}>Easy</MenuItem>
                                    <MenuItem value={2}>Normal</MenuItem>
                                    <MenuItem value={3}>Hard</MenuItem>
                                </Select>
                            </FormControl>
                            <div className={classes.colorCheck}>
                                <div>Chose your color</div>
                                White
                                <CustomCheckbox
                                    checked={this.props.checkedW}
                                    onChange={this.props.handleCheck}
                                    value='checkedW'
                                />
                                Black
                                <CustomCheckbox
                                    checked={this.props.checkedB}
                                    onChange={this.props.handleCheck}
                                    value='checkedB'
                                />
                            </div>
                            <Button onClick={this.props.handleRetry} component={Link} to={'/game'}
                                    className={classes.button}>
                                Start
                            </Button>
                        </Grid>
                    </Paper>
                </Grid>
            </div>
        );
    }
}

export default withRouter(withStyles(styles)(MainMenu));