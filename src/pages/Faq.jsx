import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CiSearch } from "react-icons/ci";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Faqcomp from "../components/Faqcomp";
import Newsletter from "../components/Newsletter";
import { faqData1, faqData2 } from "../constants/data";
import apple from "../assets/appstore.png";
import android from "../assets/googleplay.png";
const Faq = () => {
  const [query, setQuery] = useState("");
  const filteredFaqs = faqData1.filter(
    (faq) =>
      faq.head.toLowerCase().includes(query.toLowerCase()) ||
      faq.content.toLowerCase().includes(query.toLowerCase())
  );
  const filteredFaqsSecond = faqData2.filter(
    (faq) =>
      faq.head.toLowerCase().includes(query.toLowerCase()) ||
      faq.content.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <motion.div exit={{ x: "-100vw" }} transition={{ ease: "easeInOut" }}>
      <Navbar />
      <section className="pt-40 md:pt-48">
        <div className="text-center md:px-28 px-5">
          <h1 className="text-3xl md:text-[56px] leading-[43px] md:leading-[67.2px] font-bold">
            Frequently Asked Questions
          </h1>
          <p className="text-[20px] font-medium leading-6 mt-4">
            Have questions? We’re here to help
          </p>

          <div className="flex border border-[#C9C9C9] rounded-[10px] max-w-[702px] h-[54px] mx-auto mt-7 items-center">
            <div className="pl-8 text-[#BDBDBD]">
              <CiSearch className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]" />
            </div>

            <input
              type="search"
              className="text-[18px] pt-[6px] px-4 w-full bg-transparent text-[#BDBDBD] outline-none" // h-[54px]
              placeholder="Search Keyword..."
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* ACCORDION SECTION */}
      <section className="md:px-28 px-5">
        <div className="lg:flex gap-16 md:mt-20 mt-10">
          <div className="w-full">
            {filteredFaqs.map((item) => (
              <Faqcomp head={item.head} content={item.content} key={item.id} />
            ))}
          </div>
          <div className="w-full">
            {filteredFaqsSecond.map((item) => (
              <Faqcomp
                head={item.head}
                content={item.content}
                key={item.id}
                className="w-full"
              />
            ))}
          </div>
        </div>
      </section>

      {/* APP DOWNLOAD SECTION */}
      <section className="px-5 md:px-28">
        <div className="flex flex-col gap-4 px-5 rounded-[50px] text-center py-16 my-16 bg-faqGradient bg-cover">
          <h3 className="font-bold text-[26px] leading-9 md:text-[30px]">
            Wants to take advantage of the opportunity?
          </h3>
          <p className="text-[#1C8540] text-[18px] font-medium leading-[27px]">
            Download Our Mobile app
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="./">
              <img
                src={apple}
                alt="apple store"
                className="w-[120px] lg:w-[180px] hover:scale-105 ease-in duration-500 shadow-gray-400"
              />
            </Link>
            <Link to="./">
              <img
                src={android}
                alt="google store"
                className="w-[120px] lg:w-[180px] hover:scale-105 ease-in duration-500 shadow-gray-400"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />
      <Footer />
    </motion.div>
  );
};

export default Faq;
