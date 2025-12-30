import { Link } from "react-router-dom";
import { flexedData } from "../constants/data";
import tiltdown from "../assets/tiltDown.png";
import { motion } from "framer-motion";
const Spend = () => {
  return (
    <section className="bg-gradient bg-cover">
      <div className="hidden container lg:grid grid-cols-2 gap-16 py-12">
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
      </div>
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
    </section>
  );
};

export default Spend;
