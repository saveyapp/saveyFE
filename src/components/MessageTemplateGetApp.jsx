import React from 'react'
import applestore from '../assets/applestore.png'
import googleplay from '../assets/googleplay.png'

const MessageTemplateGetApp = () => {
  return (
    <section>
        <hr className='w-[125px] mx-auto border-[1px] border-solid border-[rgba(0,0,0,0.24)] mb-[16px]'/>
        <h3 className='font-normal text-[24px] leading-8 mb-4 text-center'>Get the Savey app!</h3>
        <p className='text-[#666] xs:w-[90%] sm:w-[512px] mx-auto mb-[17px] text-center'>Get the most of Savey by installing the mobile app. You can log in by using your existing emails address and password.</p>
        {/* <p className='text-[#666] xs:w-[90%] sm:w-[70%] lg:w-[50%] mx-auto mb-[17px] text-center'>Get the most of Savey by installing the mobile app. You can log in by using your existing emails address and password.</p> */}
        <div className='flex xs:flex-col sm:flex-row justify-center items-center gap-6 mb-[72px]'>
            <img src={applestore} alt='app store logo' className='block cursor-pointer' />
            <img src={googleplay} alt='app store logo' className='block cursor-pointer'/>
        </div>
    </section>
  )
}

export default MessageTemplateGetApp