import { motion } from "framer-motion";
import { comingSoon } from "../constants/data";

const Soon = () => {
     const container = {
       hidden: { opacity: 1 },
       visible: {
         opacity: 1,
         scale: 1,
         transition: {
           delayChildren: 0.2,
           staggerChildren: 0.4,
           duration: 0.3,
           type: "spring",
         },
       },
     };

     const itemdisplay = {
       hidden: { y: 60, opacity: 0 },
       visible: {
         y: 0,
         opacity: 1,
         duration: 2,
         type: "spring",
       },
     };
  return (
    <section className="bg-gradient bg-cover py-16">
      <div className="container text-center">
        <h3 className="font-bold text-[32px]">Coming Soon</h3>
        <p className="text-blurblack lg:text-[#353535] pb-16 font-medium">
          We have made financial goals easy by building your all in one powerful
          tool needed to stay <br /> smart in money management.
        </p>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="grid lg:grid-cols-3 gap-20"
        >
          {comingSoon.map((item, i) => (
            <motion.div
              variants={itemdisplay}
              className="flex flex-col"
              key={i}
            >
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}; 

export default Soon;
