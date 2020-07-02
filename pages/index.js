import React, {useEffect} from 'react'
import Head from 'next/head'
import Nav from '../components/nav';
import MainGrid from "../components/grid";
import Pricing from "../components/pricing"

const Home = () => {
    useEffect(()=>{
        gsap.timeline({
            scrollTrigger: {
                trigger: ".test-container",
                start: "top top",
                end: () => innerHeight * 3,
                scrub: true,
                pin: ".second-main-div",
                anticipatePin: 1
            }
        }).from(".inner-chuss", {
                scale: 1,
                ease: "none",
                duration:0
            })
            .to(".inner-chuss", {
                scale: 0.5,
                ease: "none",
                translate:5,
                duration: 5
            })
            .from(".extra-divs", {
            scale: 0,
            ease: "none",
                duration: 5
        })



    })
    return (
        <div>
            <Head>
                <title>Home</title>
                <link rel='icon' href='/favicon.ico'/>
            </Head>
            <Nav/>
            <MainGrid/>
            <Pricing/>

        </div>
    )
}

export default Home
