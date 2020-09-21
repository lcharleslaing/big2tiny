import React from 'react'
import Button from "@material-ui/core/Button";
import Link from 'next/link'

function MenuDrawerBottom() {
    return (
        <div style={{height: 'auto', width: '100%', backgroundColor: "default", padding: '20px'}}>
            <Link href="#"><Button color='default' style={{ borderRadius: 10 }}>Login</Button></Link>
            <Link href="#"><Button color='default' style={{ borderRadius: 10 }}>Register</Button></Link>
            <Link href="#"><Button color='default' style={{ borderRadius: 10 }}>Profile</Button></Link>
        </div>
    )
}

export default MenuDrawerBottom