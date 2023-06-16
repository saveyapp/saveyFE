import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Flexed = (props) => {
  return (
    <section className="px-5 md:px-28 grid lg:grid-cols-2 gap-20 pb-20 pt-40 md:pt-48">
      <div className="flex flex-col justify-center">
        <h1 className="font-bold text-[#222222] text-3xl md:text-[56px] leading-[42px] md:leading-[59px]">
          {props.heading}
        </h1>
        <p className="my-3 text-[#353535] opacity-[0.6] font-medium">
          {props.firstContent}
        </p>
        <p className="mb-5 text-[#353535] opacity-[0.6] font-medium">
          {props.secondContent}
        </p>
        <Link
          to="/"
          className="text-white bg-[#1C8540] py-2 rounded-[10px] text-xl flex whitespace-nowrap items-center justify-center w-[195px]"
        >
          Get Started
        </Link>
      </div>
      <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{once:false, amount: 0}}
      transition={{ delay: 0.5, duration:0.5}}
       variants={{
       hidden: {opacity:0 , x:-50},
       visible: {opacity:1, x:0},
       }}
       className="w-full flex justify-center">
        <img
          src={props.image}
          alt="/"
          className=" object-cover"
          width={props.width}
        />
      </motion.div>
    </section>
  );
};

export default Flexed;
