import React from "react";
import { Link } from "react-router-dom";
import Newsletter from "../components/Newsletter";
import budget from "../assets/budget.png";
import lady from "../assets/lady.png";
import small from "../assets/small.png";
import firstLine from "../assets/firstLine.png";
import secondLine from "../assets/secondLine.png";
import thirdLine from "../assets/thirdLine.png";
import { budgetCardData, budgetGoals, budgetPlans } from "../constants/data";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const Budget = () => {
  return (
    <motion.div exit={{ x: "-100vw" }} transition={{ ease: "easeInOut" }}>
      <Navbar />
      {/* SECTION 1 */}
      <section className="px-5 md:px-28 grid lg:grid-cols-2 gap-7 pb-16 pt-40 md:pt-48">
        <div className="flex flex-col justify-center">
          <h1 className="font-bold text-black text-4xl md:text-[52px] leading-[45px] md:leading-[59px]">
            Track and give account of your income & expenses
          </h1>

          <p className="mt-5 mb-8 font-medium text-[#353535] opacity-[0.6]">
            With Savey, you can effortlessly plan and allocate money for both
            spending (such as on food and transportation) and saving (such as on
            rent and other expenses). We'll strive to assign the appropriate
            sums into a separate Bills account using our AI-enabled platform.
            You can spend money in this way without second-guessing yourself.
          </p>

          <Link>
            <button className="text-white bg-[#1C8540] py-2 rounded-[10px] text-xl flex whitespace-nowrap items-center justify-center w-[189px]">
              Get Started
            </button>
          </Link>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="w-full flex justify-center"
        >
          <img src={budget} alt="/" className="object-cover" />
        </motion.div>
      </section>

      {/* SECTION 2 */}
      <section className="bg-gradient bg-cover py-16 px-5 md:px-28">
        <h1 className="text-4xl md:text-[48px] font-bold leading-[40px] lg:leading-[60px] text-center">
          Our goals and mission
        </h1>
        <p className="md:leading-[34px] leading-6 text-[18px] text-[#353535] text-center">
          With Savey, we believe everyone is capable of staying debt-free and
          financially accountable.
        </p>
        <div className="grid lg:grid-cols-2 gap-16 pt-16">
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
            <img src={lady} alt="lady" />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="flex flex-col gap-12 justify-center text-[#353535]"
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="flex items-start gap-4"
            >
              <img src={firstLine} alt="line" />
              <p className="leading-[25px] text-[18px]">
                {budgetGoals[0].goal}
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="flex items-center gap-4"
            >
              <img src={secondLine} alt="line" />
              <p className="leading-[25px] text-[18px] font-normal">
                {budgetGoals[1].goal}
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="flex items-start gap-4"
            >
              <img src={thirdLine} alt="line" />
              <p className="leading-[25px] text-[18px] font-normal">
                {budgetGoals[2].goal}
              </p>
            </motion.div>

            <div className="mt-7">
              <Link to="/budget">
                <button className="bg-[#1C8540] w-[195px] h-[52px] rounded-[10px] text-white text-[18px] whitespace-nowrap">
                  Get started
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="py-24 text-center md:px-28 px-5">
        <p className="md:leading-[60px] leading-10 font-extrabold md:text-5xl text-4xl">
          Our directions and advantages
        </p>
        <p className="text-[#353535] text-[20px] md:text-[24px] md:leading-9 leading-7 pt-5 pb-12">
          With Savey, you can conveniently allocates your income and expenses
          with real time updates that keeps you in check at each time.
        </p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="grid lg:grid-cols-3 gap-16 "
        >
          {budgetCardData.map((item) => (
            <div
              className="flex flex-col gap-3 shadow-myshadow px-5 pt-10 pb-5 rounded-[15px] hover:scale-110 ease-out duration-300"
              key={item.id}
            >
              <div className="w-full flex justify-center">
                <img src={item.img} alt="/" className="w-[100px]" />
              </div>
              <h3 className="font-bold text-[#3F3D3D] text-[18px] pt-3">
                {item.head}
              </h3>
              <p className="pb-4 text-[#737070]">{item.content}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* SECTION 4 */}
      <section className="px-5 md:px-28 grid lg:grid-cols-3 gap-12 md:gap-20 pt-28 pb-12 bg-gradient bg-cover">
        <div>
          <h2 className="text-4xl md:text-[40px] leading-[43px] font-bold text-[#1D2D3F]">
            We make savings easy for you
          </h2>
          <p className="leading-[26px] text-[#848484] pt-4">
            We personalized your finance by using machine learning algorithms to
            provide tailored financial advice and recommendations based on a
            your spending patterns and financial goals.
          </p>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="flex flex-col md:flex-row gap-6 lg:col-start-2 lg:col-span-2 text-[#848484]"
        >
          <div className="flex flex-col gap-8 md:gap-20">
            <div className="flex flex-col">
              <div className="flex items-center gap-4">
                <img src={small} alt="/" />
                <h2 className="text-[#1D2D3F] text-[22px] font-semibold">
                  {budgetPlans[0].title}
                </h2>
              </div>
              <p className="pl-[44px]">{budgetPlans[0].content}</p>
            </div>
            <div className="flex flex-col ">
              <div className="flex gap-4 items-center">
                <img src={small} alt="/" />
                <h2 className="text-[#1D2D3F] text-[22px] font-semibold">
                  {budgetPlans[1].title}
                </h2>
              </div>
              <p className="pl-[44px]">{budgetPlans[1].content}</p>
            </div>
          </div>
          <div className="flex flex-col gap-8 md:gap-20">
            <div className="flex flex-col ">
              <div className="flex gap-4 items-center">
                <img src={small} alt="/" />
                <h2 className="text-[#1D2D3F] text-[22px] font-semibold">
                  {budgetPlans[2].title}
                </h2>
              </div>
              <p className="pl-[44px]">{budgetPlans[2].content}</p>
            </div>
            <div className="flex flex-col ">
              <div className="flex gap-4 items-center">
                <img src={small} alt="/" />
                <h2 className="text-[#1D2D3F] text-[22px] font-semibold">
                  {budgetPlans[3].title}
                </h2>
              </div>
              <p className="pl-[44px]">{budgetPlans[3].content}</p>
            </div>
          </div>
        </motion.div>
      </section>
      <Newsletter />
      <Footer />
    </motion.div>
  );
};

export default Budget;
