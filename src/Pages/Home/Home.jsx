import React from 'react'
import About from '../../Components/About/About'
import Blog from '../../Components/Blog/Blog'
import Logo from '../../Components/ClientLogos/Logo'
import Counter from '../../Components/Counter/Counter'
import FaQ from '../../Components/FaQ/FaQ'
import { NewsLetter } from '../../Components/NewsLetter/NewsLetter'
import Service from '../../Components/Services/Service'
import Slider from '../../Components/Slider/Slider'
import Video from '../../Components/VideoSection/Video'

export default function Home() {
    return (
        <div>
            <Slider />
            <Logo />
            <Service />
            <About />
            <Blog />
            <Counter />
            <FaQ />
            <Video />
            <NewsLetter />
        </div>
    )
}
