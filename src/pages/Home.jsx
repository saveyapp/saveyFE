import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Core from "../components/Core";
import Newsletter from "../components/Newsletter";
import appstore from "../assets/appstore.png";
import googleplay from "../assets/googleplay.png";
import triplephone from "../assets/triplephone.png";
import tiltup from "../assets/tiltUp.png";
import tiltdown from "../assets/tiltDown.png";
import secondTiltDown from "../assets/secondTiltDown.png";
import { comingSoon, flexedData } from "../constants/data";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  const texts = [
    "Budgeting",
    "Saving",
    "Spending",
    "Loan",
    "Investment",
    "Insurance",
  ];
  const colors = [
    "#1C8540",
    "#ADD565",
    "#FF3C3C",
    "#C7B7DD",
    "#1F1426",
    "#FFE000",
  ];
  const [text, setText] = useState("Budgeting");
  const [color, setColor] = useState("#ADD565");
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * texts.length);
      setText(texts[randomIndex]);
      setColor(colors[randomIndex]);
    }, 1000);
    return () => clearInterval(interval);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <motion.div exit={{ x: "-100vw" }} transition={{ ease: "easeInOut" }}>
      <Navbar />
      <section>
        <div className="flex flex-col gap-4 text-center pt-40 md:pt-52">
          <h1 className="px-2 sm:px-16 text-[26px] leading-[31px] lg:text-[56px] lg:leading-[64px] font-semibold text-center max-w-[810px] mx-auto lg:px-0">
            Stay accountable while attaining financial freedom
          </h1>
          <p className="px-[0.5rem] text-[14px] max-w-[780px] mx-auto text-center leading-[17px] md:max-w-[684px] lg:px-0 lg:text-[22px] lg:leading-[26px]">
            Savey is designed to help families and individuals build a financial
            freedom through
            <span className="font-semibold pl-1 lg:pl-2" style={{ color }}>
              {text}
            </span>
          </p>
          <div className="px-5 md:px-28 flex gap-4 justify-center lg:mt-6">
            <Link to="/waitlist">
              <img
                src={appstore}
                alt="appstore"
                className="w-[120px] lg:w-[180px] hover:scale-105 ease-in duration-500 shadow-gray-400"
              />
            </Link>
            <Link to="/waitlist">
              <img
                src={googleplay}
                alt="playstore"
                className="w-[120px] lg:w-[180px] hover:scale-105 ease-in duration-500 shadow-gray-400"
              />
            </Link>
          </div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="flex items-center justify-center py-4 px-7 md:px-14 w-full object-cover "
        >
          <img src={triplephone} alt="phone" />
        </motion.div>
      </section>
      <section className="px-5 md:px-28 grid lg:grid-cols-2 gap-16 pt-16 pb-20">
        <div className="flex flex-col justify-center order-2 lg:order-1">
          <button className="hidden mb-4 bg-[#C7B7DD] font-mont text-[18px] py-2 rounded-[10px] w-[191px] whitespace-nowrap font-bold lg:flex items-center justify-center md:mb-6 cursor-auto">
            Budgeting
          </button>

          <h1 className="font-bold text-[#222] text-3xl md:text-[56px] leading-[59px]">
            Budgeting made simple
          </h1>
          <p className="mb-5 md:mt-5 text-[#353535] opacity-[0.6] font-medium">
            With Savey, you can effortlessly plan and allocate money for both
            spending (such as on food and transportation) and saving (such as on
            rent and other expenses). We'll strive to assign the appropriate
            sums into a separate Bills account using our AI-enabled platform.
            You can spend money in this way without second-guessing yourself.
          </p>
          <Link to="/budget">
            <button className="text-white bg-[#1C8540] py-2 rounded-[10px] text-xl flex whitespace-nowrap items-center justify-center w-[189px]">
              Learn More
            </button>
          </Link>
        </div>
        <div className="order-1 lg:order-2">
          <button className="mb-12 bg-[#C7B7DD] font-mont text-[18px] py-2 rounded-[10px] w-[191px] whitespace-nowrap font-bold flex items-center justify-center md:mb-6 cursor-auto lg:hidden">
            Budgeting
          </button>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="w-full flex justify-center"
          >
            <img src={tiltup} alt="/" className="object-cover w-[372px]" />
          </motion.div>
        </div>
      </section>
      <section className="hidden px-5 md:px-28 lg:grid grid-cols-2 gap-16 py-12 bg-gradient bg-cover">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="flex justify-center"
        >
          <img src={tiltdown} alt="phonedesign" className="object-cover" />
        </motion.div>
        <div className="flex flex-col justify-center">
          <button className="bg-[#D9FFE5] font-mont text-[18px] py-2 rounded-[10px] w-[181px] whitespace-nowrap font-bold flex items-center justify-center md:mb-6 cursor-auto">
            Spending
          </button>
          <h1 className="font-bold text-[#222222] text-3xl md:text-[56px] leading-[42px] md:leading-[59px]">
            Smart tools for smart spending
          </h1>
          <div>
            <p className="my-3 text-[#353535] opacity-[0.6] font-medium">
              {flexedData[0].firstfixedData}
            </p>
            <p className="mb-5 text-[#353535] opacity-[0.6]">
              {flexedData[0].secondfixedData}
            </p>
          </div>
          <Link to="/spend">
            <button className="text-white bg-[#1C8540] py-2 rounded-[10px] text-xl flex whitespace-nowrap items-center justify-center w-[195px]">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      <section className="lg:hidden">
        <div className="px-5 md:px-28">
          <button className="mb-12 bg-[#D9FFE5] font-mont text-[18px] py-2 rounded-[10px] w-[181px] whitespace-nowrap font-bold flex items-center justify-center cursor-auto">
            Spending
          </button>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="flex justify-center px-5 md:px-28"
          >
            <img src={tiltdown} alt="phonedesign" className="object-cover" />
          </motion.div>
        </div>
        <div className="bg-gradient bg-cover px-5 md:px-28 py-6 mt-12 md:py-10">
          <h1 className="font-bold text-[#222222] text-3xl md:text-[56px] leading-[42px] md:leading-[59px]">
            Smart tools for smart spending
          </h1>
          <p className="mt-3 mb-8 text-[#353535] opacity-[0.6] font-medium">
            Savey offers several simple bill-paying options, including one that
            is extensively used. Using your wallet account, a QR code, USSD,
            bank transfer, or a card issued. To determine how much should always
            be available for spending, we leverage AI and industry best
            practices. Based on your deposits, what you owe, and long-term
            planning with your budgeting tool.
          </p>
          <Link to="/spend">
            <button className="text-white bg-[#1C8540] py-2 rounded-[10px] text-xl flex whitespace-nowrap items-center justify-center w-[195px]">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      <section className="px-5 md:px-28 grid lg:grid-cols-2 gap-16 pb-10 pt-16">
        <div className="flex flex-col justify-center order-2 lg:order-1">
          <button className="hidden mb-4 bg-[#F1FF9D] font-mont text-[18px] py-2 rounded-[10px] w-[154px] whitespace-nowrap font-bold lg:flex items-center justify-center md:mb-10 cursor-auto">
            Saving
          </button>

          <h1 className="font-bold text-[#222] text-3xl md:text-[56px] leading-[42px] md:leading-[59px]">
            Manage your money like a pro
          </h1>
          <p className="hidden lg:block my-3 text-[#353535] opacity-[0.6] font-medium">
            By establishing several saving goals, Savey manages your money in a
            way that you won't even notice until you meet your savings
            objectives (fixed and rainy season goals). You may accomplish this
            using our model without going broke.
          </p>
          <p className="hidden mb-5 text-[ #353535] opacity-[0.6] lg:block">
            We came to understand that good money management requires
            discipline. With the help of our AI-enabled platform, we work the
            magic especially for you. We only handle it for you; that is all we
            do by growing it with interest.
          </p>
          <p className="mt-3 mb-8 text-[#353535] opacity-[0.6] font-medium lg:hidden">
            By establishing several saving goals, Savey manages your money in a
            way that you won't even notice until you meet your savings
            objectives (fixed and rainy season goals). You may accomplish this
            using our model without going broke.We came to understand that good
            money management requires discipline. With the help of our
            AI-enabled platform, we work the magic especially for you. We only
            handle it for you; that is all we do by growing it with interest.
          </p>
          <Link to="/save">
            <button className="text-white bg-[#1C8540] py-2 rounded-[10px] text-xl flex whitespace-nowrap items-center justify-center w-[195px]">
              Get Started
            </button>
          </Link>
        </div>
        <div className="order-1 lg:order-2">
          <button className="mb-12 bg-[#F1FF9D] font-mont text-[18px] py-2 rounded-[10px] w-[154px] whitespace-nowrap font-bold lg:hidden items-center justify-center cursor-auto">
            Saving
          </button>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="w-full flex justify-center"
          >
            <img src={secondTiltDown} alt="/" className=" object-cover" />
          </motion.div>
        </div>
      </section>
      <section className="px-5 md:px-28 text-center bg-gradient bg-cover py-16">
        <h3 className="font-bold text-[32px]">Coming Soon</h3>
        <p className="text-blurblack lg:text-[#353535] pb-16 font-medium">
          We have made financial goals easy by building your all in one powerful
          tool needed to stay <br /> smart in money management.
        </p>
        <div className="grid lg:grid-cols-3 gap-20">
          {comingSoon.map((item, i) => (
            <div className="flex flex-col" key={i}>
              <div className="w-full flex justify-center ">
                <img
                  src={item.img}
                  alt="/"
                  className="object-cover w-[500px] hover:scale-105 ease-in duration-300"
                />
              </div>
              <h2 className="text-black font-semibold text-[25px]">
                {item.heading}
              </h2>
              <p className="text-[#222] font-medium">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      <Core />
      <Newsletter />
      <Footer />
    </motion.div>
  );
};

export default Home;
