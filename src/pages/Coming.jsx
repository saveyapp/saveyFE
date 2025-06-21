import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Savey from "../assets/savey.svg";
import soon from "../assets/cominglater.png";
import appstore from "../assets/appstore.png";
import googleplay from "../assets/googleplay.png";

const Coming = () => {
  return (
    <motion.div exit={{ x: "-100vw" }} transition={{ ease: "easeInOut" }}>
      <section className="grid lg:grid-cols-[60%_40%] items-center h-screen">
        <div className="px-5 lg:px-10">
          <Link to="/">
            <img src={Savey} alt="logo" className="pt-8 lg:pt-0" />
          </Link>
          <div className="flex flex-col gap-1 justify-center">
            <button className="bg-[#1C8540] cursor-default rounded-[100px] w-[154px] h-[31px] text-white pt-[5px] mt-20 mb-5">
              COMING SOON
            </button>
            <h1 className="text-[#ADD565] text-[38px] font-bold leading-[37px] lg:text-[44px] lg:leading-[53px]">
              Hello Humans of Savey
            </h1>
            <p className="font-medium">
              Our team is putting in round-the-clock efforts to bring this
              feature to the forefront, exclusively for your benefit. Meanwhile,
              we encourage you to make the most of our existing features while
              we work on delivering this to you.
            </p>
            <div className="flex items-center mt-6 gap-3">
              <Link
                to="/"
                className="hidden text-[16px] text-white sm:flex items-center justify-center bg-[#1C8540] rounded-[8px] w-[153px] h-[43px] lg:h-[50px] hover:scale-105 ease-in duration-500 shadow-gray-400"
              >
                Go back home
              </Link>
              <Link to="/waitlist">
                <img
                  src={appstore}
                  alt="appstore"
                  className="h-[43px] w-[142px] lg:h-[50px] lg:w-[180px] hover:scale-105 ease-in duration-500 shadow-gray-400"
                />
              </Link>
              <Link to="/waitlist">
                <img
                  src={googleplay}
                  alt="googleplay"
                  className="h-[43px] w-[142px] lg:h-[50px] lg:w-[180px] hover:scale-105 ease-in duration-500 shadow-gray-400"
                />
              </Link>
            </div>
            <Link
              to="/"
              className="mt-8 mb-2 w-[142px] text-[16px] bg-[#1C8540] rounded-[8px] text-white flex items-center justify-center h-[43px] sm:hidden"
            >
              Go back home
            </Link>
          </div>
        </div>
        <div>
          <img
            src={soon}
            alt="/"
            className="hidden lg:block w-full object-cover h-screen"
          />
        </div>
      </section>
    </motion.div>
  );
};

export default Coming;
