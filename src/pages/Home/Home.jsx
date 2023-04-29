import React from "react";
import IntroSection from "./IntroSection";
import Marquee from "react-fast-marquee";
import SkillCard from "./SkillCard";
import Explore from "./Explore";

const Home = () => {
  return (
    <>
      <Marquee speed={70} className="bg-gray-100 py-2">
        English language learning will allow to communicate effectively with
        people from all over the world, making traveling a lot easier and
        helping to learn more about different cultures.
      </Marquee>
      <IntroSection></IntroSection>
      <SkillCard></SkillCard>
      <Explore></Explore>
    </>
  );
};

export default Home;
