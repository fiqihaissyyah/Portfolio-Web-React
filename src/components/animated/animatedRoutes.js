import React from 'react'
import { Routes, Route, useLocation } from 'react-router';
import DefaultLayout from '../../layout/default';
import About from '../../pages/about';
import Detail from '../../pages/detail';
import DetailDesign from '../../pages/detail-design';
import Experience from '../../pages/experience';
import Home from '../../pages/home';
import Portfolio from '../../pages/portfolio';

import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
    const location = useLocation()
  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
			<Route path='/' element= {<Home /> } />
			<Route element={<DefaultLayout/>}>
				<Route path='/about' element={<About />}/>
				<Route path='/experience' element={<Experience />}/>
				<Route path='/portfolio' element={<Portfolio />}/>
				<Route path='/detail/web/:id' element={<Detail/>}/>
				<Route path='/detail/design/:id' element={<DetailDesign/>}/>
			</Route>
		</Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes