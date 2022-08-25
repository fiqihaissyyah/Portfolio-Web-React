import React, {useEffect} from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar';
import { Row, Col, Button } from 'antd';
import './index.css';
import bg from '../../assets/images/bg_1.jpg';
import profil1 from '../../assets/images/fiqih_1.png';
import profil2 from '../../assets/images/fiqih_2.png';
import {motion} from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Home() {
    useEffect(() => {
        AOS.init({ duration : 1500 });
        AOS.refresh();
      }, []);
  return (
	<>
	  <Helmet>
	  		<title>Home - Fiqih Aissyyah</title>
			<meta name="description" content="Helmet application" />
	  </Helmet>
	    <motion.div className='container h-screen'
            initial = {{width: 0}}
            animate = {{width: '100%'}}
            exit = {{y: '100%', transition: {duration: 1} }}
        >
			<Navbar/>
            <Row className='content-center md:pt-4 pt-6 md:pb-4 pb-10 '>
                <Col sm={{ span: 24 }} lg={{ span: 12 }}>
                    <div className='relative text-center' >
                        <img  src={profil1} data-aos="fade-right"  className='z-10 absolute md:-left-1 -left-[5%] -bottom-7 md:w-[187px] w-[130px]'  />
                        <img src={bg} width={350} height={550} className='z-0 relative md:mx-auto ml-[5%] md:w-[350px] w-[300px]' />
                        <img src={profil2} data-aos="fade-left" className='z-10 absolute md:w-[187px] w-[130px] top-[30%] md:right-[2%] -right-[10%]'  />
                    </div>
                </Col>
                <Col sm={{ span: 24 }} lg={{ span: 12 }} className='text-center flex items-center md:justify-end md:pt-0 pt-10'>
                    <div>
                        <h1 className='md:text-[70px] text-[60px]'>Hello, I’m <br/>
                        Fiqih Aissyyah</h1>
                        <h2 className='my-4'>Graphic Designer and Web Developer</h2>
                        <Link to='/about'>
                            <motion.button
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                className='btn-home mt-2 py-2 border border-solid border-primaryBrown rounded-full w-1/3 hover:bg-primaryBrown'
                            > About Me </motion.button>
                        </Link>
                        
                    </div>
                </Col>
            </Row>
	    </motion.div>
	</>
  )
}

export default Home