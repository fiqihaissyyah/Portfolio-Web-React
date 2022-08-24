import React, { useEffect, useState } from 'react';
import {Row, Col, Image} from 'antd';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './index.css';
import portfolio from '../../portfolio.json';
import { PlusOutlined, GithubOutlined } from '@ant-design/icons';

function Portfolio() {
    const [categoryActive, setActive] = useState('All');

    const categoryHandler = (category) => {
		setActive(category);
	};

  return (
    <>
        <Helmet>
			<title>Portfolio - Fiqih Aissyyah</title>
			<meta name="description" content="Helmet application" />
		</Helmet>
        <div>
            <h2 className='text-center'>Portfolio as a Frontend Developer and Graphic Designer</h2>
            <div className='flex flex-wrap w-full justify-center gap-3 p-10'>
                <button
                    className={`${
                        categoryActive == 'All' ? 'btn-active' : ''
                    } py-2 border border-solid border-primaryBrown rounded-full md:w-1/6 px-4 hover:bg-primaryBrown`}
                    onClick={()=>{
                        setActive('All')
                    }}
                > All </button>
                <button
                    className={`${
                        categoryActive == 'Website' ? 'btn-active' : ''
                    } py-2 border border-solid border-primaryBrown rounded-full md:w-1/6 px-4 hover:bg-primaryBrown`}
                    onClick={() => categoryHandler('Website')}
                > Website </button>
                <button
                    className={`${
                        categoryActive == 'Design' ? 'btn-active' : ''
                    } py-2 border border-solid border-primaryBrown rounded-full md:w-1/6 px-4 hover:bg-primaryBrown`}
                    onClick={() => categoryHandler('Design') }
                > Design </button>
            </div>
                <Row gutter={[48, 32]}>
                    {categoryActive != 'Design' && portfolio && 
                    portfolio.web.length > 0 && portfolio.web.map((i) => (
                        <Col sm={{ span: 24 }} lg={{ span: 12 }}>
                            <div className='card w-full rounded-xl bg-[#B9AB91]' key={i.id}>
                                <div className='px-4 pt-4 '>
                                <Image src={i.image} height={'250px'} width={'100%'} className='object-cover'/>
                                </div>
                                <div className='p-4 flex justify-between items-center'>
                                    <h4>{i.title}</h4>
                                    <div className='icon'>
                                        <Link to={{ pathname: `/detail/web/${i.id}` }}>
                                            <PlusOutlined className='pr-4' />
                                        </Link>
                                        <a href={i.github} target='_blank'>
                                            <GithubOutlined />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                      ))}
                    {categoryActive != 'Website' && portfolio && 
                    portfolio.design.length > 0 && portfolio.design.map((i) => (
                        <Col sm={{ span: 24 }} lg={{ span: 12 }}>
                            
                                <div className='card w-full rounded-xl bg-[#B9AB91]'>
                                    <div className='px-4 pt-4 '>
                                        <Image src={i.image[0]} height={'250px'} width={'100%'} className='object-cover'/>
                                    </div>
                                    <Link to={{ pathname: `/detail/design/${i.id}` }}>
                                    <div className='p-4 flex justify-between h-[69.5px]'>
                                        <h4>{i.title}</h4>
                                    </div>
                                    </Link>
                                </div>
                            
                        </Col>
                      ))}
                </Row>
            
        </div>
    </>
  )
}

export default Portfolio