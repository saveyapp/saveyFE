import React from 'react'
import MessageTemplateFooter from '../components/MessageTemplateFooter'
import MessageTemplateGetApp from '../components/MessageTemplateGetApp'

const NewDeviceTemplate = () => {
  return (
    <div>
        <div className='xs:w-[90%] sm:w-[70%] lg:w-[50%] mx-auto'>
          <h1 className='leading-8 xs:text-[18px] sm:text-[24px] font-medium text-start mb-[44px] mt-[15px]'><span className='font-bold'>Subject: </span>Login Attempted from a New Device</h1>
          <p className='xs:text-[18px] sm:text-[24px] leading-7 font-normal text-start mb-[63px] text-[#333]'>Hi Joel, </p>
          <h2 className='xs:text-[40px] sm:text-[50px] leading-[62px] font-semibold text-[#333] text-center mx-auto xs:w-[100%] sm:w-[600px] mb-[34px]'>Did you login from a New Device or Location?</h2>
          <div className='xs:w-100% sm:w-[500px] mx-auto'>
            <p className='xs:w-[100%] sm:w-[357px] text-center mb-[34px] text-[#333]'>We noticed your Savey account was accessed from a new IP address.</p>
            <p className='text-[20px] leading-6 font-normal text-[#979797] mb-[1px]'>Device</p>
            <p className='text-[20px] leading-6 font-normal mb-[30px]'>Iphone 13 Pro Max</p>
            <p className='text-[20px] leading-6 font-normal text-[#979797] mb-[1px]'>Approximate Location</p>
            <p className='text-[20px] leading-6 font-normal mb-[30px]'>Lagos, Nigeria</p>
            <p className='text-[20px] leading-6 font-normal text-[#979797] mb-[1px]'>Time</p>
            <p className='text-[20px] leading-6 font-normal mb-[49px]'>May 2nd, 14:03 GMT</p>
            <p className='xs:w-[100%] sm:w-[445px] mb-[67px] text-[#333]'>If you didn't try to login recently, we recommend you change your password ASAP to protect your account. <span className='text-[#ADD565]'>By changing your password,</span> all device logged into your account will be logged out</p>
          </div>
          
        </div>
        <MessageTemplateGetApp />
        <MessageTemplateFooter />
    </div>
  )
}

export default NewDeviceTemplate