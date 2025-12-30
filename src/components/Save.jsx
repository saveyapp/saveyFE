import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import secondTiltDown from "../assets/secondTiltDown.png";

const Save = () => {
  return (
    <section className="container grid lg:grid-cols-2 gap-16 pb-10 pt-16">
      <div className="flex flex-col justify-center order-2 lg:order-1">
        <button className="hidden mb-4 bg-[#F1FF9D] font-mont text-[18px] py-2 rounded-[10px] w-[154px] whitespace-nowrap font-bold lg:flex items-center justify-center md:mb-10 cursor-auto">
          Saving
        </button>

        <h1 className="font-bold text-[#222] text-3xl md:text-[56px] leading-[42px] md:leading-[59px]">
          Manage your money like a pro
        </h1>
        <p className="hidden lg:block my-3 text-[#353535] opacity-[0.6] font-medium">
          By establishing several saving goals, Savey manages your money in a
          way that you won't even notice until you meet your savings objectives
          (fixed and rainy season goals). You may accomplish this using our
          model without going broke.
        </p>
        <p className="hidden mb-5 text-[ #353535] opacity-[0.6] lg:block">
          We came to understand that good money management requires discipline.
          With the help of our AI-enabled platform, we work the magic especially
          for you. We only handle it for you; that is all we do by growing it
          with interest.
        </p>
        <p className="mt-3 mb-8 text-[#353535] opacity-[0.6] font-medium lg:hidden">
          By establishing several saving goals, Savey manages your money in a
          way that you won't even notice until you meet your savings objectives
          (fixed and rainy season goals). You may accomplish this using our
          model without going broke.We came to understand that good money
          management requires discipline. With the help of our AI-enabled
          platform, we work the magic especially for you. We only handle it for
          you; that is all we do by growing it with interest.
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
  );
};

export default Save;
