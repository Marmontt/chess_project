import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        border: '2px solid #00ffff',
        borderRadius: 10,
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(4),
        outline: 'none',
    },
}));

export default function SimpleModal(props) {
    const [modalStyle] = React.useState(getModalStyle);


    const classes = useStyles();

    return (
        <div>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={props.isGameOver}

            >
                <div style={modalStyle} className={classes.paper}>
                    <Typography variant="h6" id="modal-title">
                        Game is over!
                    </Typography>
                    <Typography style={{paddingTop: 20,paddingBottom: 20,}} variant="subtitle1" id="simple-modal-description">
                        Thank you for playing!
                    </Typography>
                    <Button style={{border: '1px solid #00ffff'}} onClick={props.GameOverReturn}>Main menu</Button>
                    <Button style={{border: '1px solid #00ffff',marginLeft: 20,}} onClick={props.GameOverRetry}>Retry</Button>
                    <SimpleModal/>
                </div>
            </Modal>
        </div>
    );
}