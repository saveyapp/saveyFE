import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { colors, texts } from "../constants/data";
import appstore from "../assets/appstore.png";
import googleplay from "../assets/googleplay.png";
import triplephone from "../assets/triplephone.png";
const Hero = () => {
  const [text, setText] = useState("Budgeting");
  const [color, setColor] = useState("#ADD565");
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * texts.length);
      setText(texts[randomIndex]);
      setColor(colors[randomIndex]);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="container">
      <div className="flex flex-col gap-4 text-center pt-40 md:pt-52">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          viewport={{ once: true }}
          className="px-2 sm:px-16 text-[26px] leading-[31px] lg:text-[56px] lg:leading-[64px] font-semibold text-center max-w-[810px] mx-auto lg:px-0"
        >
          Stay accountable while attaining financial freedom
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 0.8 }}
          viewport={{ once: true }}
          className="px-[0.5rem] text-[14px] max-w-[780px] mx-auto text-center leading-[17px] md:max-w-[684px] lg:px-0 lg:text-[22px] lg:leading-[26px]"
        >
          Savey is designed to help families and individuals build a financial
          freedom through
          <span className="font-semibold pl-1 lg:pl-2" style={{ color }}>
            {text}
          </span>
        </motion.p>
        <div className="flex gap-4 justify-center lg:mt-6">
          <Link to="https://app.savey.africa/">
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", duration: 0.5 }}
              viewport={{ once: true }}
              src={appstore}
              alt="appstore"
              className="w-[120px] lg:w-[180px] hover:scale-105 ease-in duration-500 shadow-gray-400"
            />
          </Link>
          <Link to="https://app.savey.africa/">
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", duration: 0.5 }}
              viewport={{ once: true }}
              src={googleplay}
              alt="playstore"
              className="w-[120px] lg:w-[180px] hover:scale-105 ease-in duration-500 shadow-gray-400"
            />
          </Link>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex items-center justify-center py-4 px-7 md:px-14 w-full object-cover "
      >
        <img src={triplephone} alt="phone" />
      </motion.div>
    </section>
  );
};

export default Hero;
