import demo from "../assets/congratulation.png";
const Modal = () => {
  return (
    <>
      <div className="fixed top-0 right-0 bottom-0 left-0 bg-[#1C8540] z-[9999] items-center flex justify-center transition-all duration-500">
        <div className="rounded-lg w-[317px] md:w-[570px] p-8 text-center border text-[#231f20] bg-white  mx-auto">
          <div>
            <div className="flex justify-center">
              <img src={demo} alt="Success" className="w-[200px]" />
            </div>

            <h2 className="text-[16px] md:text-[32px] font-semibold font-mont">
              You have been added to our{" "}
              <span className="text-[#1C8540]">waitlist!</span>
            </h2>
            <p className="sm:text-[14px] text-[12px] font-medium pt-3 pb-1">
              Thank you for joining, you'll be the first to know when we are
              ready!
            </p>
            <div>

              <p>
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
