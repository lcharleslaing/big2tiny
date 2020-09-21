import React, {useState} from 'react'
import {AppBar, Drawer, Toolbar} from '@material-ui/core'
import {AccountCircle, Menu} from '@material-ui/icons'
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import MenuDrawerLeft from "@components/MenuDrawerLeft";
import MenuDrawerBottom from "@components/MenuDrawerBottom";


function Navbar() {
    const [open, setOpen] = useState(false)
    const [anchor, setAnchor] = useState('left')

    const handleDrawer = () => {
        setAnchor('left')
        setOpen(true)
    }

    const handleAccount = () => {
        setAnchor('bottom')
        setOpen(true)
    }

    const useStyles = makeStyles({
        list: {
            width: 250,
        },
        fullList: {
            width: 'auto',
        },
    });

    return (
        <>
            <AppBar position="static" color="default">
                <Toolbar>
                    <IconButton onClick={handleDrawer} color='inherit' edge='start' aria-label="Menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6" style={{flexGrow: 1}}>
                        Big2Tiny
                    </Typography>
                    <IconButton onClick={handleAccount} color='inherit'>
                        <AccountCircle/>
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Drawer
                anchor={anchor}
                open={open}
                onClose={() => setOpen(false)}

            >
                {anchor === "left" ? <MenuDrawerLeft/> : <MenuDrawerBottom/> }
            </Drawer>
        </>
    )
}

export default Navbar