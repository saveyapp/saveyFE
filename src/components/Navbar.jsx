import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import Savey from "../assets/savey.svg";
import budget from "../assets/budgetIcon.png";
import save from "../assets/saveIcon.png";
import spend from "../assets/spendIcon.png";
import loan from "../assets/loanIcon.png";
import invest from "../assets/investIcon.png";
import insure from "../assets/insuranceIcon.png";
import aboutIcon from "../assets/aboutIcon.png";
import faqIcon from "../assets/faqIcon.png";
import contactIcon from "../assets/contactIcon.png";
const  Navbar = () => {
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const handleNav = () => {
    setNav(!nav);
  };
  function handleLinkClick(link) {
    setActiveLink(activeLink === link ? null : link);
  }
  function handleLinkHover(link) {
    if (window.innerWidth >= 768) {
      setActiveLink(link);
    }
  }
  function handleDropdownBlur() {
    if (window.innerWidth >= 768) {
      setActiveLink(null);
    }
  }
  function handleLinkLeave() {
    setActiveLink(null);
  }

  return (
    <header className={`w-full fixed z-[1000] bg-white shadow-myshadow`}>
      <div className="flex py-7 items-center justify-between container">
        <Link to="/">
          <img src={Savey} alt="Savey Logo" />
        </Link>

        {/* Menu list */}
        <ul className="hidden lg:flex items-center list-none">
          <li onMouseLeave={handleLinkLeave}>
            <Link
              to="/"
              className="flex items-center gap-2 text-[18px] font-medium text-[#353535] hover:text-[#ADD565]"
              onClick={() => handleLinkClick(1)}
              onMouseOver={() => handleLinkHover(1)}
              onBlur={handleDropdownBlur}
            >
              Features
              <MdArrowDropDown size={25} />
            </Link>
            {activeLink === 1 && (
              <div className="font-mont font-medium text-[18px] block absolute bg-white shadow-myshadow rounded-[10px] p-10">
                <div className="flex gap-6">
                  <div className="flex flex-col gap-7">
                    <div className="flex gap-3 items-center">
                      <img src={budget} alt="icon" />

                      <NavLink
                        to="/budget"
                        className="hover:text-[#ADD565] pt-2"
                      >
                        Budget
                      </NavLink>
                    </div>
                    <div className="flex gap-3 items-center">
                      <img src={loan} alt="icon" />
                      <NavLink
                        to="/coming"
                        className="hover:text-[#ADD565] pt-2"
                      >
                        Loan
                      </NavLink>
                    </div>
                  </div>
                  <div className="flex flex-col gap-7">
                    <div className="flex gap-3 items-center">
                      <img src={save} alt="icon" />
                      <NavLink to="/save" className="hover:text-[#ADD565] pt-2">
                        Save
                      </NavLink>
                    </div>
                    <div className="flex gap-3 items-center">
                      <img src={invest} alt="icon" />
                      <NavLink
                        to="/coming"
                        className="hover:text-[#ADD565] pt-2"
                      >
                        Invest
                      </NavLink>
                    </div>
                  </div>
                  <div className="flex flex-col gap-7">
                    <div className="flex gap-3 items-center">
                      <img src={spend} alt="icon" />
                      <NavLink
                        to="/spend"
                        className="hover:text-[#ADD565] pt-2"
                      >
                        Spend
                      </NavLink>
                    </div>

                    <div className="flex gap-3 items-center">
                      <img src={insure} alt="icon" />
                      <Link to="/coming" className="hover:text-[#ADD565] pt-2">
                        Insurance
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </li>
          <li onMouseLeave={handleLinkLeave}>
            <NavLink
              to="/about"
              className="flex items-center gap-2 font-medium text-[18px] hover:text-[#ADD565]"
              onClick={() => handleLinkClick(2)}
              onMouseOver={() => handleLinkHover(2)}
              onBlur={handleDropdownBlur}
            >
              About Us
              <MdArrowDropDown size={25} />
            </NavLink>
            {activeLink === 2 && (
              <div className="font-mont font-medium text-[18px] block absolute bg-white shadow-myshadow rounded-[10px] px-6 py-8">
                <ul className="flex flex-col gap-3">
                  <li className="flex gap-1 items-center">
                    <img src={aboutIcon} alt="icon" />
                    <NavLink to="/about" className="hover:text-[#ADD565] pt-2">
                      About Savey
                    </NavLink>
                  </li>
                  <li className="flex gap-1 items-center">
                    <img src={faqIcon} alt="icon" />
                    <NavLink to="/faq" className="hover:text-[#ADD565] pt-2">
                      FAQ
                    </NavLink>
                  </li>
                  <li className="flex gap-1 items-center">
                    <img src={contactIcon} alt="icon" />
                    <NavLink
                      to="http://blog.getsavey.com/"
                      className="hover:text-[#ADD565] pt-2"
                    >
                      Blog
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
          </li>

          <li className="font-medium text-[18px]">
            <NavLink to="/coming" className="hover:text-[#ADD565]">
              Careers
            </NavLink>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <div onClick={handleNav} className="lg:hidden cursor-pointer">
          {nav ? <IoMdClose size={30} /> : <FaBars size={25} />}
        </div>

        {/* Mobile menu dropdown */}

        <div
          className={`transition-transform ${
            nav
              ? "absolute left-0 top-[85px] w-full px-4 md:px-28 py-2 flex flex-col text-xl h-screen text-black z-1 bg-white transform translate-x-0"
              : "transform translate-x-full absolute left-[-100%]"
          }`}
        >
          <ul className="pt-10">
            <li className="mb-4">
              <h2
                className="flex items-start gap-2 pb-2 font-medium"
                onClick={() => handleLinkClick(1)}
                onMouseOver={() => handleLinkHover(1)}
                onBlur={handleDropdownBlur}
              >
                Features
                {activeLink === 1 ? (
                  <MdArrowDropUp size={25} />
                ) : (
                  <MdArrowDropDown size={25} />
                )}
              </h2>
              {activeLink === 1 && (
                <div className="font-mont text-xl flex flex-col gap-4 pl-2">
                  <div className="flex gap-3 items-center">
                    <img src={budget} alt="icon" />
                    <NavLink to="/budget" onClick={handleNav} className="pt-2">
                      Budget
                    </NavLink>
                  </div>
                  <div className="flex gap-3 items-center">
                    <img src={spend} alt="icon" />
                    <NavLink to="/spend" onClick={handleNav} className="pt-2">
                      Spend
                    </NavLink>
                  </div>
                  <div className="flex gap-3 items-center">
                    <img src={save} alt="icon" />
                    <NavLink to="/save" onClick={handleNav} className="pt-2">
                      Save
                    </NavLink>
                  </div>
                  <div className="flex gap-3 items-center">
                    <img src={loan} alt="icon" />
                    <NavLink to="/coming" onClick={handleNav} className="pt-2">
                      Loan
                    </NavLink>
                  </div>
                  <div className="flex gap-3 items-center">
                    <img src={invest} alt="icon" />
                    <NavLink to="/coming" onClick={handleNav} className="pt-2">
                      Investment
                    </NavLink>
                  </div>
                  <div className="flex gap-3 items-center">
                    <img src={insure} alt="icon" />
                    <NavLink to="/coming" onClick={handleNav} className="pt-2">
                      Insurance
                    </NavLink>
                  </div>
                </div>
              )}
            </li>
            <li className="mb-4">
              <h2
                onClick={() => handleLinkClick(2)}
                onMouseOver={() => handleLinkHover(2)}
                onBlur={handleDropdownBlur}
                className="flex items-start gap-2 pb-2 font-medium"
              >
                About Us
                {activeLink === 2 ? (
                  <MdArrowDropUp size={25} />
                ) : (
                  <MdArrowDropDown size={25} />
                )}
              </h2>
              {activeLink === 2 && (
                <div className="font-mont text-xl flex flex-col gap-3 pl-2">
                  <div className="flex gap-3 items-center">
                    <img src={aboutIcon} alt="icon" />
                    <NavLink to="/about" onClick={handleNav} className="pt-2">
                      About Savey
                    </NavLink>
                  </div>
                  <div className="flex gap-3 items-center">
                    <img src={faqIcon} alt="icon" />
                    <NavLink to="/faq" onClick={handleNav} className="pt-2">
                      FAQ
                    </NavLink>
                  </div>
                  <div className="flex gap-3 items-center">
                    <img src={contactIcon} alt="icon" />
                    <NavLink
                      to="http://blog.getsavey.com/"
                      onClick={handleNav}
                      className="pt-2"
                    >
                      Blog
                    </NavLink>
                  </div>
                </div>
              )}
            </li>
            <li className="font-medium">
              <NavLink to="/coming" onClick={handleNav}>
                Careers
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
