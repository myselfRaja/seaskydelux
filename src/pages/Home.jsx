import React from "react";
import HeroSection from "../components/HeroSection";  // path thik karen apne project ke hisaab se
import WhyChooseUs from "../components/WhyChooseUs";
import Rooms from "../components/Rooms";
import AboutSection from "../components/AboutSection";
import Adventure from "../components/Adventure";

const Home = () => {
  return (
    <div>
      <HeroSection />
      {/* Yahan baaki home page ke components aa sakte hain */}
      <WhyChooseUs />

      <Rooms />
      <AboutSection />
      <Adventure />
    </div>
  );
};

export default Home;
