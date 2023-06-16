import React from 'react'
import MessageTemplateFooter from '../components/MessageTemplateFooter'

const WelcomeTemplate = () => {
  return (
    <div>
      <div className='xs:w-[90%] sm:w-[576px] mx-auto'>
        <h1 className='xs:w-[100%] sm:w-[512px] leading-8 xs:text-[18px] sm:text-[24px] font-medium text-start mb-[44px] mt-[15px]'><span className='font-bold'>Subject: </span>Welcome to Savey! Start your journey into becoming a Saver</h1>
        <p className='xs:text-[18px] sm:text-[20px] leading-6 font-normal text-start mb-[30px] '>Hi Joel, </p>
        <p className='xs:text-[18px] sm:text-[20px] text-[#333] mb-[20px] text-start font-normal leading-6'>I want to personally welcome you to our Savey Africa designed to help you achieve financial freedom. Our app is designed to help you manage their finances in a smart and unique way by offering tools for budgeting, investing, saving, spending, loans, and insurance. We believe that financial freedom is achievable for everyone, and our app is here to help you on that journey.</p>
        <p className='xs:text-[18px] sm:text-[20px] text-[#333] mb-[20px] text-start font-normal leading-6'>At Savey, we believe in staying accountable and taking control of your finances. Our app offers personalized recommendations and insights based on your financial data, helping you to make informed decisions about your money. We also offer a virtual account to pay with and cashback rewards to help you save even more.</p>
        <p className='xs:text-[18px] sm:text-[20px] text-[#333] mb-[20px] text-start font-normal leading-6'>Our team has worked tirelessly to create an app that is not only easy to use but also secure. We use advanced encryption and other security measures to protect your financial data and comply with all applicable data privacy and security regulations.</p>
        <p className='xs:text-[18px] sm:text-[20px] text-[#333] mb-[20px] text-start font-normal leading-6'>Thank you for choosing Savey as your financial management partner. We're excited to help you achieve your financial goals and look forward to serving you.</p>
        <p className='xs:text-[18px] sm:text-[20px] text-[#333] mb-[20px] text-start font-normal leading-6'>Best regards,</p>
        <p className='xs:text-[18px] sm:text-[20px] text-[#333] mb-[2px] text-start font-normal leading-6'>John Kent</p>
        <p className='xs:text-[18px] sm:text-[20px] text-[#333] mb-[30px] text-start font-normal leading-6'>Founder, Savey</p>
        <small className='font-normal xs-text-[12px] sm:text-[14px] text-[#999] leading-5 mb-[18px]'>For questions, you can reach out to us at <span className='text-[#2230F6]'>support@getsavey.com</span></small>
      </div>
      <MessageTemplateFooter />  
    </div>
  )
}

export default WelcomeTemplate