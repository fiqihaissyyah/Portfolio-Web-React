import React from 'react'

import { GithubOutlined, InstagramOutlined, LinkedinOutlined } from "@ant-design/icons"

function Footer() {
  return (
    <footer>
        <div className=' text-primaryBrown max-h-24 border-t-[1px] border-primaryBrown py-4'>
            <div className='container flex justify-between items-center'>
            <ul className='flex list-none p-0'>
                <li className='mr-6 text-2xl'><a href='https://github.com/fiqihaissyyah' target='_blank'><GithubOutlined /></a></li>
                <li className='mr-6 text-2xl'><a href='https://instagram.com/fiqihaissyyah'target='_blank'><InstagramOutlined /></a></li>
                <li className='mr-6 text-2xl'><a href='https://www.linkedin.com/in/fiqihaissyyah'target='_blank'><LinkedinOutlined /></a></li>
            </ul>
            <p className='text-primaryBrown'> Copyright &copy; {new Date().getFullYear()} Fiqih Aissyyah</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer