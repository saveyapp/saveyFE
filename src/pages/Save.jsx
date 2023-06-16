import React from "react";
import { Link } from "react-router-dom";
import Flexed from "../components/Flexed";
import Newsletter from "../components/Newsletter";
import saveImage from "../assets/saveImage.png";
import appstore from "../assets/appstore.png";
import googleplay from "../assets/googleplay.png";
import flex from "../assets/saveyFinance.png";
import tiltup from "../assets/saveTiltUp.png";
import saveGraph from "../assets/saveGraph.png";
import { flexedData, savingBenefits } from "../constants/data";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Save = () => {
  return (
    <motion.div exit={{ x: "-100vw" }} transition={{ ease: "easeInOut" }}>
      <Navbar />
      <Flexed
        heading="Start saving now on savey"
        firstContent={flexedData[0].firstfixedData}
        secondContent={flexedData[0].secondfixedData}
        image={saveImage}
        width="496px"
      />
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
            src={tiltup}
            alt="phonedesign"
            className="object-cover w-[380px]"
          />
        </motion.div>
        <div className="flex flex-col justify-center order-1 lg:order-2">
          <h1 className="text-[#353535] text-3xl md:text-5xl font-bold">
            Don’t be caught on rainy days
          </h1>
          <p className="my-3 text-[#353535] opacity-[0.6] font-medium leading-[19px]">
            saving for a rainy day is an important financial habit that can
            provide financial security and peace of mind in uncertain times.
          </p>
          <p className="mb-5 text-[#353535] opacity-[0.6] font-medium leading-[19px]">
            Our feature helps it helps individuals and families prepare for
            unexpected financial challenges. Having a savings cushion can
            provide peace of mind and reduce the stress associated with
            financial uncertainty.
          </p>
          <div className="flex gap-4 mt-6">
            <Link>
              <img
                src={appstore}
                alt="appstore"
                className="hover:scale-105 ease-in duration-500 shadow-gray-400"
              />
            </Link>
            <Link>
              <img
                src={googleplay}
                alt="playstore"
                className="hover:scale-105 ease-in duration-500 shadow-gray-400"
              />
            </Link>
          </div>
        </div>
      </section>
      <section className="px-5 md:px-28 pt-12 pb-24">
        <h1 className="text-center font-bold text-4xl leading-[40px] md:leading-[76px] md:text-[50px] text-[#353535]">
          Save on the go with Savey
        </h1>
        <div className="grid pt-16 lg:grid-cols-2 gap-20">
          <div className="flex flex-col justify-center gap-6">
            <h1 className="font-bold text-3xl md:text-[35px] text-[#353535]">
              Stay ahead of your finances
            </h1>
            {savingBenefits.map((item, i) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="flex items-center gap-3"
                key={i}
              >
                <img src={item.image} alt="/" />
                <p className="leading-[19px] text-[#353535]">{item.text}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="w-full flex justify-center"
          >
            <img src={flex} alt="/" />
          </motion.div>
        </div>
      </section>
      <section className="px-5 md:px-28 grid py-16 lg:grid-cols-2 gap-16 lg:gap-20 bg-gradient bg-cover">
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
          <img src={saveGraph} alt="phonedesign" className="object-cover" />
        </motion.div>
        <div className="flex flex-col justify-center order-1 lg:order-2">
          <h1 className="font-bold text-[#353535] text-[32px] leading-[38px]">
            Enjoy saving money in different ways
          </h1>
          <p className="my-3 text-[#353535] opacity-[0.6] font-medium">
            You won't even realize how Savey is saving money. Little by little,
            here and there, until suddenly you've accomplished your objective.
            It gives you good gratification. Also, you are free to establish as
            many goals as you like, and we will support you in achieving all of
            them (really, go crazy).
          </p>
        </div>
      </section>
      <Newsletter />
      <Footer />
    </motion.div>
  );
};

export default Save;
