import { Link } from "react-router-dom";
import demo from "../assets/congratulation.png";
import { IoIosClose } from "react-icons/io";
import { PeopleUrl } from "../constants/data";
const Modal = () => {
  return (
    <>
      <div className="fixed top-0 right-0 bottom-0 left-0 bg-[#1C8540] z-[9999] items-center flex justify-center transition-all duration-500">
        <div className="relative rounded-lg w-[317px] md:w-[570px] p-8 text-center border text-[#231f20] bg-white  mx-auto">
          <Link to="/" className="absolute top-6 right-6">
            <IoIosClose className="text-2xl bg-[#F1F1F1] rounded-md cursor-pointer" />
          </Link>
          <div>
            <div className="flex justify-center my-3">
              <img src={demo} alt="Success" className="w-[130px]" />
            </div>
            <h2 className=" text-3xl font-bold md:text-4xl">You have been</h2>
            <h2 className="  text-3xl font-bold md:text-4xl">
              added to our <span className="text-[#1C8540]">waitlist!</span>
            </h2>
            <p className="text-xl pt-4 pb-7">
              Thank you for joining, you'll be the first{" "}
              <br className="hidden md:block" /> to know when we are ready!
            </p>
            <span className="flex -space-x-4 overflow-hidden justify-center">
              {PeopleUrl.map((url) => (
                <img
                  className="h-10 w-10 rounded-full inline-block"
                  src={url}
                  key={url}
                  alt="person"
                  width={52}
                  height={52}
                />
              ))}
            </span>
            <div>
              <p className="text-base">
                You are not alone,{" "}
                <span className="text-[#1C8540]"> 1,500+</span> people joined!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
