import React from 'react'
import {FaTwitter} from 'react-icons/fa'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import templateSaveyLogo from '../assets/templateSaveyLogo.svg'


const MessageTemplateFooter = () => {
  return (
    <div className='w-full h-[239px] bg-templateFooterBg bg-cover'>
      <div className='flex justify-center items-center pt-[64.69px] mb-[19.74px] gap-7'>
        <FaTwitter className='text-[18px]'/>
        <AiFillFacebook className='text-[18px]'/>
        <AiFillLinkedin className='text-[18px]'/>
      </div>
      <img src={templateSaveyLogo} alt="savey logo" className='mx-auto block mb-[10px]'/>
      <p className='font-normal leading-4 text-[12px] text-center'>Copyright &copy; 2023</p>
      <p className='font-normal leading-4 text-[12px] text-center'>Savey gives financial security.</p>
      <p className='font-normal leading-4 text-[12px] text-center'>Your journey into financial freedom and accountability is here.</p>
      
    </div>
  )
}

export default MessageTemplateFooter