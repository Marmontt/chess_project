import React, {Component} from 'react';
import {Grid, Paper, Button, withStyles, FormControl, MenuItem, Select, TextField, InputLabel} from '@material-ui/core';
import logo from '../img/logo.png';
import {withRouter, Link} from 'react-router-dom';

const styles = {
    logo: {
        height: 170,
        width: 140,
    },
    menu: {
        marginTop: 40,
        margin: 'auto',
        padding: 80,
        background: '#d7d7d7',
        border: '1px solid #00cdcd',
    },
    button: {
        color: '#00ffff',
        background: '#505355',
        width: 200,
        margin: 'auto',
        marginTop: 50,
        marginBottom: -20,
    },
    textField: {
        width: 200,
    },
    formControl: {
        minWidth: 120,
        marginTop: 10,
    },
};

// document.body.style.backgroundImage;

class MainMenu extends Component {
    state = {
        difficultyValue: 2,
        start: false,
    };

    handleClick = () => {

    };

    handleChange = (e) => {
        this.setState({difficultyValue: e.target.value});
    };

    render() {
        const {classes} = this.props;

        return (
            <div>
                <Grid container>
                    <Grid item xs={12}>
                        <Grid container justify={"center"}>
                            <img src={logo} alt="logo" className={classes.logo}/>
                        </Grid>
                    </Grid>
                    <Paper className={classes.menu}>
                        <Grid container direction={"column"}>
                            <TextField
                                id="standard-name"
                                label="Name"
                                className={classes.textField}
                                // value={values.name}
                                // onChange={handleChange('name')}
                                margin="normal"
                            />
                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="age-simple">Computer Difficulty</InputLabel>
                                <Select
                                    value={this.state.difficultyValue}
                                    onChange={this.handleChange}
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
                            <Link to={'/game'} style={{textDecoration: 'none'}}>
                                <Button className={classes.button}>
                                    Start
                                </Button>
                            </Link>
                        </Grid>
                    </Paper>
                </Grid>
            </div>
        );
    }
}

export default withRouter(withStyles(styles)(MainMenu));