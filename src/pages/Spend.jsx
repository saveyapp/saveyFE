import React from "react";
import { Link } from "react-router-dom";
import Flexed from "../components/Flexed";
import { flexedData } from "../constants/data";
import spend1 from "../assets/spend1.png";
import spend2 from "../assets/spend2.png";
import spend3 from "../assets/spend3.png";
import spendimg from "../assets/spendin.png";
import Newsletter from "../components/Newsletter";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Spend = () => {
  return (
    <div exit={{ x: "-100vw" }} transition={{ ease: "easeInOut" }}>
      <Navbar />
      {/* SECTION 1 */}

      <Flexed
        heading="Keep track of your spending"
        firstContent={flexedData[0].firstfixedData}
        secondContent={flexedData[0].secondfixedData}
        image={spend1}
        width="496px"
      />

      {/* SECTION 2 */}
      <section className="px-5 md:px-28 grid py-16 lg:grid-cols-2 gap-20 bg-gradient bg-cover">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="order-2 lg:order-1 flex justify-center"
        >
          <img
            src={spend2}
            alt="phonedesign"
            className="object-cover w-[500px]"
          />
        </motion.div>

        <div className="flex flex-col justify-center order-1 lg:order-2">
          <p className="text-[#1C8540] font-bold md:text-[32px] text-sm pb-[15px]">
            How it works
          </p>
          <h1 className="text-[#353535] text-3xl md:text-5xl font-bold">
            Determine how much money you can safely spend.
          </h1>
          <p className="my-3 text-[#353535] opacity-[0.6] font-medium">
            {flexedData[1].firstfixedData}
          </p>

          <Link
            to="/spend"
            className="text-white bg-[#1C8540] py-2 rounded-[10px] text-xl flex whitespace-nowrap items-center justify-center w-[195px]"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="px-5 md:px-28 grid py-16 lg:grid-cols-2 gap-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="order-2 lg:order-2 flex justify-center"
        >
          <img
            src={spend3}
            alt="phonedesign"
            className="object-cover w-[500px]"
          />
        </motion.div>
        <div className="flex flex-col justify-center order-1 lg:order-1">
          {/* <p className='text-[#353535] font-bold text-[15px]'>Create an account in minute</p> */}
          <h1 className="text-[#353535] text-3xl md:text-5xl font-bold">
            Pay anywhere, <br /> Spend carefully!
          </h1>
          <p className="my-3 text-[#353535] opacity-[0.6] font-medium">
            {flexedData[2].firstfixedData}
          </p>
          <p className="mb-5 text-[#353535] opacity-[0.6] font-medium">
            {flexedData[2].secondfixedData}
          </p>

          <Link
            to="/spend"
            className="text-white bg-[#1C8540] py-2 rounded-[10px] text-xl flex whitespace-nowrap items-center justify-center w-[195px]"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* SECTION 4 */}

      <section className="px-5 md:px-28 grid py-16 lg:grid-cols-2 md:gap-20 bg-gradient bg-cover items-center">
        <div className="">
          <h1 className="text-[#000000] text-3xl md:text-5xl font-bold">
            Track your spending
          </h1>
          <p className="my-3 text-[#000000] font-medium">
            {flexedData[2].firstfixedData}
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="pt-6"
        >
          <img src={spendimg} alt="phonedesign" className="object-cover" />
        </motion.div>
      </section>

      {/* NEWSLETTER SECTION */}
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Spend;
