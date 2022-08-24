import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import {motion} from 'framer-motion';

export default function DefaultLayout(props) {
  return (
    <motion.div
      initial = {{width: 0}}
      animate = {{width: '100%'}}
      exit = {{y: '100%', transition: {duration: 1} }}
    >
        <div className='container'>
            <Navbar/>
            <div className='main-content'>
                <Outlet {...props} />
            </div>
        </div>
        <Footer/>
    </motion.div>
  )
}
