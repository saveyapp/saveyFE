import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Savey from "../assets/savey.svg";
import err from "../assets/404.png";
import back from "../assets/back.svg";

const NotFound = () => {
  return (
    <motion.div exit={{ x: "-100vw" }} transition={{ ease: "easeInOut" }}>
      <div className="px-5 md:px-28 pt-10">
        <Link to="/">
          <img src={Savey} alt="logo" />
        </Link>
      </div>
      <div className="pt-7 pb-7 w-full h-full m-auto flex flex-col justify-center items-center">
        <h3 className="text-[#ADD565] text-center text-[115px] md:text-[150px] font-pacifico">
          hey
        </h3>
        <p className="text-[24px] font-semibold text-black py-16">
          What are you doing here?!
        </p>

        <div className="px-5">
          <img src={err} alt="404" />
        </div>

        <Link to="/">
          <div className="flex w-[210px] h-[52px] bg-[#1C8540] rounded-lg mt-[78px] gap-[12.2px] items-center justify-center">
            <img src={back} alt="" className="h-[25px] w-[25px]" />
            <p className="text-white font-medium text-base">Go back home</p>
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default NotFound;
