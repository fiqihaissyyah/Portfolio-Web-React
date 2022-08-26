import React, {useEffect} from 'react'
import { Col, Row, Form, Input, Button, Alert } from 'antd';
import { Helmet } from 'react-helmet';
import profil3 from '../../assets/images/fiqih_3.png';
import profil4 from '../../assets/images/fiqih_4.png';
import ai from '../../assets/images/ai.svg';
import html from '../../assets/images/html.svg';
import css from '../../assets/images/css.svg';
import js from '../../assets/images/js.svg';
import react from '../../assets/images/react.svg';
import bootstrap from '../../assets/images/bootstrap.svg';
import tailwind from '../../assets/images/tailwind.svg';
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { DownloadOutlined } from "@ant-design/icons"
import {motion} from 'framer-motion';


function About() {
	useEffect(() => {
        AOS.init({duration: 1500});
        AOS.refresh();
      }, []);
  return (
	<>
		<Helmet>
			<title>About - Fiqih Aissyyah</title>
			<meta name="description" content="Helmet application" />
		</Helmet>
		<div
			className='h-full'
		>
			<Row className='md:mb-40 mb-10'>
				<Col sm={{ span: 24 }} lg={{ span: 10 }} className='flex justify-start'>
					<img src={profil3} width={400} data-aos="fade-down-right" className='z-0 md:w-[400px] w-[60%] ' />
					<img src={profil4} width={400}  className='z-10 absolute md:-right-40 md:-bottom-32 md:w-[400px] w-[60%] right-0 -bottom-16' />
				</Col>
				<Col sm={{ span: 24 }} lg={{ span: 14 }}>
					<h1 className='md:pt-6 pt-20 md:text-[70px] text-[40px]'>I’m Fiqih Aissyyah</h1>
					<div className='md:ml-48 md:mt-[70px] mt-10'>
						<h5 className='md:text-[40px] text-[20px] mb-3'>I have lots of things to prove to myself. One is i can live my life fearlessly</h5>
						<a href='Cv_FiqihAissyyah_WebDev.pdf'
						download='CV Fiqih Aissyyah WebDev.pdf'>
							<motion.button
								whileHover={{ scale: 1.1 }}
								transition={{ type: "spring", stiffness: 400, damping: 10 }}
								className='btn-about md:text-base text-xs mt-5 py-3 px-4 border border-solid border-primaryBrown rounded-full hover:bg-primaryBrown'
							>
								<DownloadOutlined className='pr-2' />
								Download CV </motion.button>
						</a>
					</div>
				</Col>
			</Row>
			<div>
				<h6>Bit About Me</h6>
				<p className='text-justify md:text-xl mt-4'>
					Self-motivated and creative Graphic Designer and Frontend Developer. During my experience as a frontend developer, i was involved in designing web pages and landing as well. I’m enthusiastic about interfeces, from their creation to development. I like to learn more and more, challenges myself that take me out of my comfort zone is the best.
				</p>
				<p className='text-2xl mt-16'>Here are software and technologies i’ve been working recently</p>
				<div className='mt-20'>
					<Row justify="space-between" className='md:mb-10 mb-0'>
						<Col sm={{ span: 12 }} lg={{ span: 4 }} className='flex justify-center items-center text-center md:mb-0 mb-5'>
							<div>
								<div className='circle flex justify-center items-center mb-2'>
									<img src={ai} alt='adobe illustrator' />
								</div>
								<span>Adobe Illustrator</span>
							</div>
						</Col>
						<Col sm={{ span: 12 }} lg={{ span: 4 }} className='flex justify-center items-center text-center md:mb-0 mb-5'>
							<div>
								<div className='circle flex justify-center items-center mb-2'>
									<img src={html} alt='html' />
								</div>
								<span>HTML 5</span>
							</div>
						</Col>
						<Col sm={{ span: 12 }} lg={{ span: 4 }} className='flex justify-center items-center text-center md:mb-0 mb-5'>
							<div>
								<div className='circle flex justify-center items-center mb-2'>
									<img src={css} alt='Css' />
								</div>
								<span>CSS</span>
							</div>
						</Col>
						<Col sm={{ span: 12 }} lg={{ span: 4 }} className='flex justify-center items-center text-center md:mb-0 mb-5'>
							<div>
								<div className='circle flex justify-center items-center mb-2'>
									<img src={js} alt='Java Script' />
								</div>
								<span>Java Script</span>
							</div>
						</Col>
					</Row>
					<Row justify="space-between">
						<Col sm={{ span: 12 }} lg={{ span: 4 }} className='flex justify-center items-center text-center md:mb-0 mb-5'>
							<div>
								<div className='circle flex justify-center items-center mb-2'>
									<img src={react} alt='react.js' />
								</div>
								<span>React.js</span>
							</div>
						</Col>
						<Col sm={{ span: 12 }} lg={{ span: 4 }} className='flex justify-center items-center text-center md:mb-0 mb-5'>
							<div>
								<div className='circle flex justify-center items-center mb-2'>
									<img src={bootstrap} alt='bootstrap' />
								</div>
								<span>Bootstrap</span>
							</div>
						</Col>
						<Col sm={{ span: 12 }} lg={{ span: 4 }} className='flex justify-center items-center text-center'>
							<div>
								<div className='circle flex justify-center items-center mb-2'>
									<img src={tailwind} alt='tailwind' />
								</div>
								<span>Tailwind</span>
							</div>
						</Col>
						<Col sm={{ span: 12 }} lg={{ span: 4 }} className='flex justify-center items-center text-center'>
						</Col>
					</Row>
				</div>
			</div>
		</div>

		
		
	</>
  )
}

export default About