import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Chip from "@material-ui/core/Chip";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {Delete, Details, Edit} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        backgroundColor: "lightgreen"
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
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
    },
    wave1: {
        backgroundColor: "lightgreen"
    },
    wave2: {
        backgroundColor: "yellow"
    },
    wave3: {
        backgroundColor: "blue"
    },
    wave4: {
        backgroundColor: "pink"
    },
}))


export default function SimpleAccordion() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Accordion>
                <AccordionSummary
                    className={classes.wave1}
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>CT 819048 - RT 09783451</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography variant="h5" className={classes.heading} color="black" gutterBottom>
                                <div className={classes.box}>Monday, the 30th</div>
                                <div className={classes.box}>CT 223423</div>
                                <div className={classes.box}>RT 09675432</div>
                            </Typography>
                            <Typography variant="h5" component="h3">

                                <div>
                                    <div>D-2</div>
                                    <span className={classes.materialColor1}>Material</span>
                                    <span className={classes.materialColor2}>Material</span>
                                </div>
                            </Typography>
                            <Typography variant="h5" component="h3">
                                1.00 x 21.25 x 144.00
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                <Chip clickable label="Pulled from Stock" className={classes.chip_complete}/>
                                <Chip clickable label="Delivered to Saw" className={classes.chip_not_complete}/>
                                <Chip clickable label="Delivered to Bar Saws" className={classes.chip_not_complete}/>
                                <Chip clickable label="Delivered to Shipping" className={classes.chip_not_complete}/>
                                <Chip clickable label="Put Away Stock" className={classes.chip_not_complete}/>
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small"><Details/></Button>
                            <Button size="small"><Edit/></Button>
                            <Button size="small"><Delete/></Button>
                            <Button size="small"><img className={classes.svgIcon} src="../static/barcode.svg"/></Button>
                        </CardActions>
                    </Card>

                </AccordionDetails>
            </Accordion>
        </div>
    );
}