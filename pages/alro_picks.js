import React from 'react'
import Navbar from "@components/Navbar";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import {Delete, Details, Edit} from "@material-ui/icons";
import Chip from "@material-ui/core/Chip";
import Badge from "@material-ui/core/Badge";
import MyAccordion from "@components/MyAccordion";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        backgroundColor: "lightgreen"
    },
    chip_not_complete: {
        backgroundColor: "red",
        justifyContent: 'center',
        margin: "5px"
    },
    chip_complete: {
        backgroundColor: "green",
        justifyContent: 'center',
        margin: "5px"
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    box: {
        backgroundColor: "white",
        border: "1px dashed black",
        borderRadius: "10px",
        marginTop: "10px"
    },
    materialColor1: {
        backgroundColor: "black",
        border: "2px solid black",
        width: "50%",
        height: "30px",
        color: "transparent"
    },
    materialColor2: {
        backgroundColor: "white",
        border: "2px solid black",
        width: "50%",
        height: "30px",
        color: "transparent"
    },
    svgIcon: {
        width: "30px"
    }
});


function About() {

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    return (
        <>
            <Navbar/>
            <div className="container" style={{padding: '20px', textAlign: 'center'}}>
                <h1>ALRO MH Picks App</h1>
                <MyAccordion />

            </div>
        </>
    )
}

export default About
