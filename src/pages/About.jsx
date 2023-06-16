import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Core from "../components/Core";
import aboutfirst from "../assets/aboutfirst.png";
import aboutsec from "../assets/aboutsec.png";

const About = () => {
  return (
    <motion.div exit={{ x: "-100vw" }} transition={{ ease: "easeInOut" }}>
      <Navbar />
      <div className="relative top-[96px]">
        <h3 className="text-3xl font-bold bg-[#ADD565] text-[#fff] text-center py-6 font-mont">
          About us
        </h3>
        {/* SECTION 1 */}
        <section className="grid lg:grid-cols-2 gap-20 md:px-28 px-5 items-center py-20">
          <div>
            <p className="md:text-5xl text-3xl font-bold">About Savey</p>

            <p className="text-[#1C8540] capitalize text-2xl md:leading-10 font-bold py-5 md:text-[33px]">
              We are highly passionate about helping you save , spend and budget
              your earnings
            </p>

            <p className="text-[#221E1E] capitalize">
              People find it challenging to monitor and manage their spending
              during times like these. Although there is a defined income, there
              are unexplained expenditures. We must take care of our finances
              while we work toward financial freedom. Early couples' desire to
              hold each other accountable for their financial decisions led to
              the creation of Savey.
            </p>
          </div>

          {/* IMAGE DIV */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0 }}
            transition={{ delay: 0.9, duration: 0.9 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className=""
          >
            <img src={aboutfirst} alt="box" className="w-full object-cover" />
          </motion.div>
        </section>

        {/* SECTION 2 */}
        <section className="bg-gradient bg-cover">
          <div className="grid md:gap-24 gap-4 md:px-28 px-5 md:pb-36 pb-6 shadow-[0px 9px 15px rgba(0, 0, 0, 0.09)] lg:grid-cols-2 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="md:mt-[120px] mt-4 order-2 lg:order-1"
            >
              <img src={aboutsec} alt="box" className="w-full h-full" />
            </motion.div>

            <div className="max-w-[666px] order-1 lg:order-2">
              <p className="font-bold md:text-[56px] text-3xl md:pt-48 pt-9 md:leading-[67.2px] leading-9">
                How it started
              </p>
              <p className="text-[18px] font-normal leading-6">
                In the late 2022, intending couples wanted to see a way through
                been accountable in their finances. They wanted to automate the
                movement and budgeting of their money to savings, investments,
                bills, and spending accounts because they needed a shared
                overview of all their finances, but neither was possible with
                the way their bank was set up. <br />
                They began developing a collection of smart money tools that put
                users' goals back at the center of how they handle their money.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <Core />
        {/* Newsletter */}
        <section className="mb-[96px]">
          <Newsletter />
        </section>
      </div>
      <Footer />
    </motion.div>
  );
};

export default About;
