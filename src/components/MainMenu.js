import React, {Component} from 'react';
import {Grid, Paper, Button, withStyles, FormControl, MenuItem, Select, TextField, InputLabel} from '@material-ui/core';
import logo from '../img/logo.png'

const styles = {
    container: {
        margin: 'auto',
        maxWidth: '1280',
    },
    logo: {
        height: 180,
        width: 150,
    },
    menu: {
        marginTop: 50,
        margin: 'auto',
        padding: 80,
        background: '#e0e0e0',
    },
    button: {
        color: '#00cdcd',
        background: '#323537',
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

class MainMenu extends Component {
    state = {
        open: false,
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
                                    // value={values.age}
                                    // onChange={handleChange}
                                    inputProps={{
                                        name: 'difficulty',
                                        id: 'age-simple',
                                    }}
                                >
                                    <MenuItem value={1}>Easy</MenuItem>
                                    <MenuItem value={2}>Normal</MenuItem>
                                    <MenuItem value={3}>Hard</MenuItem>
                                </Select>
                            </FormControl>
                            <Button color="primary" className={classes.button}>
                                Start
                            </Button>
                        </Grid>
                    </Paper>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(MainMenu);