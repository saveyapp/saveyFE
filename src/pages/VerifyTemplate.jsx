import React from 'react'
import MessageTemplateGetApp from '../components/MessageTemplateGetApp'
import MessageTemplateFooter from '../components/MessageTemplateFooter'

const VerifyTemplate = () => {
  return (
    <div>
        <div className='xs:w-[90%] sm:w-[70%] lg:w-[50%] mx-auto'>
          <h1 className='leading-8 xs:text-[18px] sm:text-[24px] font-medium text-start mb-[44px] mt-[15px]'><span className='font-bold'>Subject: </span>Confirm Your Email Address</h1>
          <p className='xs:text-[18px] sm:text-[24px] leading-7 font-normal text-start mb-[63px] '>Hi Joel, </p>
          <h2 className='xs:text-[40px] sm:text-[50px] leading-[62px] font-semibold text-[#333] text-center mx-auto xs:w-[100%] sm:w-[498px] mb-[34px]'>Confirm Your Email Address!</h2>
          <p className='xs:w-[100%] sm:w-[357px] mx-auto text-center mb-[34px]'>Click the button below to confirm your email address. If you did not create an account, You can safely delete this email</p>
          <button className='bg-[#ADD565] text-[#fff] rounded-[32px] py-[10px] xs:w-[100%] sm:w-[357px] mx-auto block mb-[82px]'>Confirm Account</button>
        </div>
        
        <MessageTemplateGetApp />
        <MessageTemplateFooter />
    </div>
  )
}

export default VerifyTemplate