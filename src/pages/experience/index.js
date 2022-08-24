import React from 'react';
import { Helmet } from 'react-helmet';
import './index.css';
import {motion} from 'framer-motion';


function Experience() {
  return (
    <>
      <Helmet>
        <title>Experience - Fiqih Aissyyah</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div>
        <div className='pb-14 pl-5 border-l-2 border-[#1C1C17] -mt-1 relative resume'>
            <h2>Frontend Developer</h2>
            <h3>June 2022 - July 2022</h3>
            <p className='text-lg text-justify'>Being frontend developer at Binar Academy’s Final project. Work as a team with two member frontend and four member backend developer. Finished project in six weeks with completed MVP.</p>
        </div>
        <div className='pb-14 pl-5 border-l-2 border-[#1C1C17] -mt-1 relative resume before:top-2'>
            <h2>Graphic Designer</h2>
            <h3>March 2021 - December 2021</h3>
            <p className='text-lg text-justify'>Staff of Media and Information at Himpunan Mahasiswa Fisika (Himasika) ITS. Created logos for each department in kabinet Parayuga. Responsible to managed social media Himasika ITS and created visual design for Himasika Social Media's daily content in collaboration with copywriters and content creators.</p>
        </div>
        <div className='pb-5 pl-5 border-l-2 border-[#1C1C17] -mt-1 relative resume before:top-2'>
            <h2>Graphic Designer</h2>
            <h3>December 2021 - May 2022</h3>
            <p className='text-lg text-justify'>Staff of Official division at Indo Instrument Technology. Created logo for that startup. Responsible to created visual design for Indo Instrument’s project, for example poster, logo, e-certificate, etc.</p>
        </div>
      </div>
    </>
  )
}

export default Experience