import React from 'react'
import MessageTemplateGetApp from '../components/MessageTemplateGetApp'
import MessageTemplateFooter from '../components/MessageTemplateFooter'

const PasswordChangedTemplate = () => {
  return (
    <div>
        <div className='xs:w-[90%] sm:w-[70%] lg:w-[50%] mx-auto'>
          <h1 className='leading-8 xs:text-[18px] sm:text-[24px] font-medium text-start mb-[44px] mt-[15px]'><span className='font-bold'>Subject: </span>You’ve just changed your password</h1>
          <p className='xs:text-[18px] sm:text-[24px] leading-7 font-normal text-start mb-[63px] '>Hi Joel, </p>
          <h2 className='xs:text-[40px] sm:text-[50px] leading-[62px] font-semibold text-[#333] text-center mx-auto xs:w-[100%] sm:w-[600px] mb-[34px]'>You’ve just changed your password</h2>
          <p className='xs:w-[100%] sm:w-[357px] mx-auto text-center mb-[34px]'>We just wanted to confirm that you’ve changed your password. If you didn't change your password. please <span className='text-[#ADD565]'>contact us</span> right away.</p>
          <p className='xs:w-[100%] sm:w-[357px] mx-auto text-center mb-[44px]'>It’s important that you let us know because it helps us prevent unauthorised persons from accessing your Savey account.</p>
        </div>
        <MessageTemplateGetApp />
        <MessageTemplateFooter />
    </div>
  )
}

export default PasswordChangedTemplate