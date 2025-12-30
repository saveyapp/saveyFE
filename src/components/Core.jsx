import { values } from "../constants/data";
import { motion } from "framer-motion";

const Core = () => {
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
    <section className="container pb-16 pt-20 text-center">
      <h2 className="text-[32px] font-bold text-[#353535]">
        Top Core Values From Savey
      </h2>
      <p className="text-[#353535] pt-4 py-10 max-w-[541px] mx-auto">
        A belief in providing financial services and tools that are accessible
        to everyone, regardless of their financial situation or background.
      </p>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="grid lg:grid-cols-3 gap-16 lg:gap-20 "
      >
        {values.map((item, i) => (
          <motion.div
            variants={itemdisplay}
            className="flex flex-col gap-3 shadow-myshadow px-5 py-10 rounded-[15px] hover:scale-110 ease-out duration-300"
            key={i}
          >
            <div className="w-full flex justify-center ">
              <img src={item.img} alt="/" className="w-[100px]" />
            </div>
            <h3 className="font-bold text-[#3F3D3D] text-[18px]">
              {item.value}
            </h3>
            <p className="text-blurblack pb-4 lg:text-[#353535]">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Core;
