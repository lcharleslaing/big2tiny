import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function FullWidthGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography
                            variant="h4"
                            className="title">Welcome to your
                            <img width="75px" src="/logo.png" alt="Big2Tiny Logo" className="logo"/>
                            app!</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>xs=12 sm=6</Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>xs=12 sm=6</Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper}>xs=6 sm=3</Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper}>xs=6 sm=3</Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper}>xs=6 sm=3</Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper}>xs=6 sm=3</Paper>
                </Grid>
            </Grid>
        </div>
    );
}