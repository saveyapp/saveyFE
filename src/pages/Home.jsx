import { motion } from "framer-motion";
import Core from "../components/Core";
import Newsletter from "../components/Newsletter";
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import appstore from "../assets/appstore.png";
// import googleplay from "../assets/googleplay.png";
// import triplephone from "../assets/triplephone.png";
// import tiltup from "../assets/tiltUp.png";
// import tiltdown from "../assets/tiltDown.png";
// import secondTiltDown from "../assets/secondTiltDown.png";
// import { comingSoon, flexedData } from "../constants/data";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Budget from "../components/Budget";
import Spend from "../components/Spend";
import Save from "../components/Save";
import Soon from "../components/Soon";

const Home = () => {
  return (
    <motion.div exit={{ x: "-100vw" }} transition={{ ease: "easeInOut" }}>
      <Navbar />
      <Hero />
      <Budget />
      <Spend />
      <Save />
      <Soon />
      <Core />
      <Newsletter />
      <Footer />
    </motion.div>
  );
};

export default Home;
