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
                    <div>
                        <Slider item={detail.image}/>
                    </div>
                </Col>
                <Col sm={{ span: 24 }} lg={{ span: 10, offset: 2 }}>
                    <h2 className='md:pt-0 pt-20 pb-2 border-b w-[50%] border-primaryBrown'>Portfolio Information</h2>
                    <div className='mt-6'>
                        <h2>{detail.title}</h2>
                        <div className='py-6 whitespace-pre'>
                            <p>Category:        {detail.category}</p>
                            <p>Link:
                                <a href={detail.link} target='_blank'> {detail.link}</a>
                            </p>
                            <p>Technologies:    {detail.technologies}</p>
                        </div>
                        <p>{detail.desc} </p>               
                    </div>
                </Col>
            </Row>
    </>
  )
}

export default Detail