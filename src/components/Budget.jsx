import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import tiltup from "../assets/tiltUp.png";

const Budget = () => {
  return (
      <section className="container grid lg:grid-cols-2 gap-16 pt-16 pb-20">
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
  )
}

export default Budget