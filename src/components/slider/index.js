import React from 'react';
import { Skeleton, Image } from 'antd';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Pagination, Navigation } from 'swiper';

import './index.css';


export default function Slider(props) {
	return (
		<div className='slider-product'>
				<Swiper
					slidesPerView={1}
					spaceBetween={30}
					pagination={{
						clickable: true,
					}}
					navigation={true}
					modules={[Pagination, Navigation]}
					className='mySwiper'
				>
					{props.item.map((i, index) => (
							<SwiperSlide key={index}>
								<Image className='w-full h-full md:rounded-2xl object-cover rounded-none' src={i} />
								{/* <img className='md:rounded-2xl rounded-none' src={i} /> */}
							</SwiperSlide>
						 ))}
				</Swiper>
		</div>
	);
}
