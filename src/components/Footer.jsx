import React from "react";
import { Link } from "react-router-dom";
import FooterAccordion from "./FooterAccordion";
import { footerData } from "../constants/data";
import Savey from "../assets/savey.svg";
import Facebook from "../assets/facebook.png";
import Instagram from "../assets/instagram.png";
import Linkedin from "../assets/linkedin.png";
import Twitter from "../assets/twitter.png";

const Footer = () => {
  return (
    <div className="md:pt-14 pt-6">
      <div className="md:flex gap-4 md:px-28 px-5 justify-between hidden">
        <div>
          <img src={Savey} alt="Savey Logo" />
          <p className="pt-6">
            Budgeting made simple, <br /> saving made easy
          </p>

          <div className="flex gap-3 pt-4 mb-6">
            <Link to="/">
              <img src={Facebook} alt="Facebook Logo" />
            </Link>
            <Link
              target="_blank"
              to="https://www.linkedin.com/company/getsavey/"
            >
              <img className="pr-4" src={Linkedin} alt="Linkedin Logo" />
            </Link>
            <Link target="_blank" to="https://twitter.com/getsavey">
              <img className="pr-4" src={Twitter} alt="Twitter Logo" />
            </Link>
            <Link target="_blank" to="https://www.instagram.com/getsavey/">
              <img className="pr-4" src={Instagram} alt="Instagram Logo" />
            </Link>
          </div>
        </div>

        <div>
          <p className="text-lg font-bold text-[#353535]">Services</p>
          <p className="pt-4">
            <Link to="/save">Savings</Link>
          </p>
          <p className="pt-4">
            <Link to="/budget">Budgetting</Link>
          </p>
          <p className="pt-4">
            <Link to="/spend">Spending</Link>
          </p>
        </div>

        <div className="pl-[10px]">
          <p className="text-lg font-bold text-[#353535]">Company</p>
          <p className="pt-4">
            <Link to="/faq">Help Centre</Link>
          </p>
          <p className="pt-4">
            <Link to="https://savey-africa.canny.io/" target="_blank">
              Feature Request
            </Link>
          </p>
          <p className="pt-4 pb-3">
            <Link to="./">Careers</Link>
          </p>
        </div>
        <ul className="pl-[10px]">
          <li className="text-lg font-bold text-[#353535]">Legal</li>
          <li className="pt-4">
            <Link to="/legal">Terms & conditions</Link>
          </li>
          <li className="pt-4">
            <Link to="/legal">Privacy Policy</Link>
          </li>
          <li className="pt-4">
            <Link to="/legal" className="pb-3">
              Non-disclosure Agreement
            </Link>
          </li>
        </ul>
        <div className="pl-[10px]">
          <p className="text-lg font-bold text-[#353535]">New Release</p>
          <p className="pt-4">
            <Link to="/coming">Loan Application</Link>
          </p>
          <p className="pt-4">
            <Link to="/coming">Investment</Link>
          </p>
          <p className="pt-4 pb-3">
            <Link to="/coming">Insurance</Link>
          </p>
        </div>
      </div>

      <div className="hidden md:flex flex-col">
        <p className="text-center text-lg pt-8">
          Copyright &copy; 2023 Savey Technologies. All Rights Reserved.
        </p>

        <p className=" pt-12 pb-7 md:pb-36 px-5 md:px-28">
          Savey is a fintech company that provides saving, budgeting, and
          spending tools to help individuals and businesses manage their
          finances. All information, content, and materials provided on our
          website and through our services are protected by copyright and other
          applicable laws. Any use of our content or materials, including but
          not limited to reproduction, distribution, modification, or
          transmission, without prior written consent from Savey is strictly
          prohibited.
          <br />
          <br />
          All trademarks, service marks, logos, and trade names displayed on our
          website or in connection with our services are the property of Savey
          or their respective owners. You may not use any of these marks without
          the prior written consent of Savey or the respective owner. At Savey,
          we respect the intellectual property rights of others and expect our
          users to do the same. If you believe that any content on our website
          or in connection with our services infringes your copyright or other
          intellectual property rights, please contact us immediately at
          support@getsavey.com.
          <br />
          <br />
          Thank you for choosing Savey for your financial management needs.
        </p>
      </div>

      {/* FOOTER MOBILE VIEW */}
      <section className="md:hidden">
        <div className="px-5">
          {footerData.map((item) => (
            <FooterAccordion
              head={item.head}
              content={item.content}
              content1={item.content1}
              content2={item.content2}
              content3={item.content3}
              content4={item.content4}
              link1={item.link1}
              link2={item.link2}
              link3={item.link3}
              link4={item.link4}
              link5={item.link5}
              key={item.key}
            />
          ))}
        </div>
        <div className="flex gap-4 py-4 justify-center">
          <Link to="./">
            <img className="pr-4" src={Facebook} alt="Facebook Logo" />
          </Link>
          <Link target="_blank" to="https://www.linkedin.com/company/getsavey/">
            <img className="pr-4" src={Linkedin} alt="Linkedin Logo" />
          </Link>
          <Link target="_blank" to="https://twitter.com/getsavey">
            <img className="pr-4" src={Twitter} alt="Twitter Logo" />
          </Link>
          <Link target="_blank" to="https://www.instagram.com/getsavey/">
            <img className="pr-4" src={Instagram} alt="Instagram Logo" />
          </Link>
        </div>

        <p className="pt-[14px] leading-[18.12px] text-center text-lg text-[13px] px-5">
          Copyright &copy; 2023 Savey Technologies. All Rights Reserved.
        </p>

        <p className=" pt-[35px] pb-[18px] px-5 text-[10px] leading-[13.64px]">
          Savey is a fintech company that provides saving, budgeting, and
          spending tools to help individuals and businesses manage their
          finances. All information, content, and materials provided on our
          website and through our services are protected by copyright and other
          applicable laws. Any use of our content or materials, including but
          not limited to reproduction, distribution, modification, or
          transmission, without prior written consent from Savey is strictly
          prohibited.
          <br />
          <br />
          All trademarks, service marks, logos, and trade names displayed on our
          website or in connection with our services are the property of Savey
          or their respective owners. You may not use any of these marks without
          the prior written consent of Savey or the respective owner. At Savey,
          we respect the intellectual property rights of others and expect our
          users to do the same. If you believe that any content on our website
          or in connection with our services infringes your copyright or other
          intellectual property rights, please contact us immediately at
          support@getsavey.com.
          <br />
          <br />
          Thank you for choosing Savey for your financial management needs.
        </p>
      </section>
    </div>
  );
};

export default Footer;
