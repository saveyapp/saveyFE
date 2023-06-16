import React from 'react'
import MessageTemplateGetApp from '../components/MessageTemplateGetApp'
import MessageTemplateFooter from '../components/MessageTemplateFooter'

const ResetPasswordTemplate = () => {
  return (
    <div>
        <div className='xs:w-[90%] sm:w-[70%] lg:w-[50%] mx-auto'>
          <h1 className='leading-8 xs:text-[18px] sm:text-[24px] font-medium text-start mb-[44px] mt-[15px]'><span className='font-bold'>Subject: </span>Reset Your Password</h1>
          <p className='xs:text-[18px] sm:text-[24px] leading-7 font-normal text-start mb-[63px] '>Hi Joel, </p>
          <h2 className='xs:text-[40px] sm:text-[50px] leading-[62px] font-semibold text-[#333] text-center mx-auto xs:w-[100%] sm:w-[489px] mb-[34px]'>Reset Your Password</h2>
          <p className='xs:w-[100%] sm:w-[357px] mx-auto text-center mb-[34px]'>You’re receiving this email because you’ve requested to reset your password. Click the button below to reset your password. If you did not send this request, You can safely delete this email</p>
          <button className='bg-[#ADD565] text-[#fff] rounded-[32px] py-[10px] xs:w-[100%] sm:w-[357px] mx-auto block mb-[82px] cursor-pointer'>Reset Password</button>
        </div>
        <MessageTemplateGetApp />
        <MessageTemplateFooter />
    </div>
  )
}

export default ResetPasswordTemplate