"use client";
import { motion } from "framer-motion";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
import { TitleText, TypingText } from "../components";
import { WorldCards } from "../components/WorldCards";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex  flex-col `}
    >
      <TypingText title="| People on the  World" textSytles="text-center" />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn("up", "tween,0.3,1")}
        className="relative mt-[69px] flex w-full h-[500px]"
      >
        <img src="/map.png" alit="map" className="w-full h-full object-cover" />
        <div className="rounded-full absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] bg-[#5d6680]">
          <img src="people-01.png" alt="people" className="w-full h-full" />
        </div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="absolute hidden md:block bottom-15 right-24 p-[6px] bg-[#5d6680] rounded-[24px] "
        >
          <WorldCards img="planet-03.png" worldName="Hawkins Labs" />
        </motion.div>
        <motion.div  initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}  className="absolute hidden md:block bottom-12 left-15 p-[6px] bg-[#5d6680] rounded-[24px]">
          <WorldCards img="planet-02.png" worldName="The Upside Down" />
        </motion.div>
        <div className="rounded-full absolute top-10 left-20 w-[70px] h-[70px] p-[6px] bg-[#5d6680]">
          <img src="people-02.png" alt="people" className="w-full h-full" />
        </div>
        <div className="rounded-full absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] bg-[#5d6680]">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
