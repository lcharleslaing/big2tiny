import React from 'react'
import {List} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Button from "@material-ui/core/Button";
import Link from 'next/link'

function MenuDrawerLeft() {
    return (
        <div style={{height: '100%', width: 250, backgroundColor: "inherit", padding: '20px'}}>
            <h3>Main Menu</h3>
            <List>
                <Link href="/"><ListItem button>Home</ListItem></Link>
                <Link href="/about"><ListItem button>About</ListItem></Link>
                <Link href="/contact"><ListItem button>Contact</ListItem></Link>
                <Link href="/alro_picks"><ListItem button>Alro MH App</ListItem></Link>
                <Link href="/tasks"><ListItem button>Task App</ListItem></Link>
                <Link href="/study_notes"><ListItem button>Study Notes App</ListItem></Link>
            </List>
        </div>
    )
}

export default MenuDrawerLeft