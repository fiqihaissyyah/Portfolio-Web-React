import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Drawer } from 'antd';
import {MenuOutlined, CloseOutlined} from '@ant-design/icons';
import './index.css'

function Navbar() {
	const [visible, setVisible] = useState(false);

	const showDrawer = () => {
		setVisible(true);
	};

	const onClose = () => {
		setVisible(false);
	};

  return (
	<>
		<ul className="md:flex hidden justify-between h-14 items-center text-base">
			<li>
				<Link to='/'>Home</Link>
			</li>
			<div className='flex'>
				<li className='px-7'>
					<Link to='/about'>About</Link>
				</li>
				<li className='px-7'>
					<Link to='/experience'>Experience</Link>
				</li>
				<li className='px-7'>
					<Link to='/portfolio'>Portfolio</Link>
				</li>
			</div>
			<li>
				<a href="mailto:fiqihaissyyah@gmail.com?subject=Contact - Fiqih Aissyyah" target='_blank'>Contact</a>
			</li>
		</ul>
		<MenuOutlined onClick={showDrawer} style={{fontSize: '24px'}} className='md:hidden mt-4' />
		<Drawer width={200} bodyStyle={{background: '#4C4741'}} headerStyle={{background: '#4C4741'}} placement="right" closeIcon={<CloseOutlined className='text-white' />} onClose={onClose} visible={visible}>
			<ul className="h-14 text-base">
				<li className='mb-2'>
					<Link to='/' className=' active:text-primaryGray'>Home</Link>
				</li>
				<li className='mb-2'>
					<Link to='/about' className=' active:text-primaryGray'>About</Link>
				</li>
				<li className='mb-2'>
					<Link to='/experience' className=' active:text-primaryGray'>Experience</Link>
				</li>
				<li className='mb-2'>
					<Link to='/portfolio' className=' active:text-primaryGray'>Portfolio</Link>
				</li>
				<li>
					<a href="mailto:fiqihaissyyah@gmail.com?subject=Contact - Fiqih Aissyyah">Contact</a>
				</li>
			</ul>
		</Drawer>
	</>
  )
}

export default Navbar