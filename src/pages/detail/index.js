import React, {useEffect} from 'react';
import { Col, Image, Row } from 'antd';
import { useParams } from 'react-router';
import portfolio from '../../portfolio.json'
import bg from '../../assets/images/bg_1.jpg'
import Slider from '../../components/slider';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Pagination, Navigation } from 'swiper';
import { Helmet } from 'react-helmet';

function Detail() {
    const { id } = useParams();
    let detail = portfolio.web.find( x => x.id == id );
   
  return (
    <>
            <Helmet>
				<title>{`${detail ? detail.title : ''} - Fiqih Aissyyah`}</title>
				<meta name='description' content='Helmet application' />
			</Helmet>
            <Row>
                <Col sm={{ span: 24 }} lg={{ span: 12 }}>
                        <Slider item={detail.image} className='md:p-0 px-[10%]'/>
                </Col>
                <Col sm={{ span: 24 }} lg={{ span: 10, offset: 2 }}>
                    <h2 className='md:pt-0 pt-20 pb-2 border-b w-[50%] border-primaryBrown'>Portfolio Information</h2>
                    <div className='mt-6'>
                        <h2>{detail.title}</h2>
                        <ul className='py-6 md:text-base text-sm'>
                            <li><strong>Category:</strong> {detail.category}</li>
                            <li><strong>Link:</strong>
                                <a href={detail.link} target='_blank'> {detail.link}</a>
                            </li>
                            <li><strong>Technologies:</strong> {detail.technologies}</li>
                        </ul>
                        <p className='md:text-base text-sm'>{detail.desc} </p>               
                    </div>
                </Col>
            </Row>
    </>
  )
}

export default Detail