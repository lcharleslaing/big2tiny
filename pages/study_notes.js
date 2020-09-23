import React from 'react'
import Navbar from "@components/Navbar";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";

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
        fontSize: 40,
    },
    pos: {
        marginBottom: 12,
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
                <h1 className={classes.title}>Study Notes</h1>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography variant="h5" className={classes.heading} color="black" gutterBottom>
                            <div className={classes.box}>Study for Test</div>
                        </Typography>

                        <Typography className={classes.pos} color="textSecondary">
                            Math
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            (Ms. Wilson)
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            Due: Sep-24-2020
                        </Typography>
                        <Typography variant="body2" component="p">
                            <p className={classes.para}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus adipisci aliquam
                                amet animi aperiam asperiores blanditiis commodi cupiditate dolore dolorum eius eligendi
                                et eum facere facilis inventore ipsum mollitia nam nemo nisi officia quae quas quasi,
                                quis quo repudiandae tempore tenetur, velit veniam. A aliquam beatae commodi
                                consequuntur cum cumque dicta dolore doloribus eligendi eum excepturi fuga harum maxime
                                molestiae nostrum, omnis, optio perferendis provident quasi quos, ratione recusandae
                                reprehenderit saepe soluta tempora temporibus ullam veritatis vero voluptate voluptatem?
                                Aliquam consequuntur, delectus doloremque ducimus ea et impedit inventore ipsam nobis
                                odit officia quisquam quos sed suscipit, totam unde vero.</p>
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Edit</Button>
                        <Button size="small">Delete</Button>
                    </CardActions>
                </Card>

            </div>
        </>
    )
}

export default About
