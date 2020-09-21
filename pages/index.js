import Head from 'next/head'
import Navbar from "@components/Navbar";
import React from "react";

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Big2Tiny Starter!</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Navbar/>
            <main>
            </main>


        </div>
    )
}
