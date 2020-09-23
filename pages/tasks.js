import React from 'react'
import Navbar from "@components/Navbar";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import {Delete, Edit} from "@material-ui/icons";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        backgroundColor: "white"
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 24,
        fontStyle: "italic",
        paddingBottom: "10px"
    },
    pos: {
        marginBottom: 5,
        fontSize: "20px"
    },
    box: {
        backgroundColor: "white",
        // border: "1px dashed black",
        // borderRadius: "10px",
        marginTop: "10px"
    },
    para: {
        textAlign: "justify"
    }
});


function About() {

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <>
            <Navbar/>
            <div className="container" style={{padding: '20px', textAlign: 'center'}}>
                <h1>Tasks</h1>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography variant="h5" className={classes.heading} color="black" gutterBottom>
                            <div className={classes.box}>Buy Milk</div>
                        </Typography>

                        <Typography className={classes.title} color="textSecondary">
                            Groceries
                        </Typography>
                        <Typography className={classes.para}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa eos in iste, iure omnis
                            placeat repellendus voluptatem? Deserunt esse itaque libero minima neque perspiciatis quam
                            quidem reiciendis. Doloremque, earum magnam.
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            Created: Aug-22-2019
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            Updated: Aug-28-2019
                        </Typography>

                    </CardContent>
                    <CardActions>
                        <Button size="small"><Edit/></Button>
                        <Button size="small"><Delete/></Button>
                    </CardActions>
                </Card>

            </div>
        </>
    )
}

export default About
