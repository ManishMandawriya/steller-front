import React from 'react'
import Blogs from './Home/Blogs'
import Contact from './Home/Contact'
import HireMe from './Home/HireMe'
import Home from './Home/Home'
import Portfolio from './Home/Portfolio'
import Services from './Home/Services'
import Skills from './Home/Skills'
import Testmonial from './Home/Testmonial'

const Index = () => {
    return (
        <>
            <Home />
            <Services />
            <Skills />
            <Portfolio />
            <Testmonial />
            <Blogs />
            <HireMe />
            <Contact />
        </>
    )
}

export default Index