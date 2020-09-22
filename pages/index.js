import Head from 'next/head'
import Navbar from "@components/Navbar";
import React from "react";


export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Big2Tiny</title>
                <link rel="icon" href="../public/favicon.ico"/>
            </Head>

            <Navbar/>
            <main>
                <img
                    className="home-image"
                    src="../static/tinyhouse.jpg"
                />

            </main>



        </div>
    )
}
