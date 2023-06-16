import React from "react";
const Newsletter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="bg-[#222222] text-center pt-[74px] px-5 md:px-20 text-white pb-[74px]">
      <h2 className="font-bold text-[32px] leading-[38.4px]">
        Let's make moves together
      </h2>
      <p className="pb-[70px] pt-4">
        "Stay up-to-date with our latest news and insights - subscribe to our
        newsletter today!”
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-[10px] w-full md:max-w-[651px] h-[66px]  mx-auto px-2 sm:px-4 gap-4 flex justify-between items-center"
      >
        <input
          type="text"
          className="w-full h-[84px] bg-transparent text-[#353535] font-mont outline-none"
          placeholder="Enter your email"
        />

        <button
          type="submit"
          className="w-[180px] h-[39px] text-[18px] rounded-[10px] bg-[#1C8540] sm:text-xl font-outfit font-bold md:w-[194px] md:h-[50px] whitespace-nowrap"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default Newsletter;
