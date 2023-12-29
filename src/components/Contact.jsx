import React, { useState, useEffect, useRef } from "react";
import { Reveal } from "./Reveal";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [reloadKey, setReloadKey] = useState(0);
  const getScreenWidth = () => window.innerWidth;

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setReloadKey((prevKey) => prevKey + 1);
      console.log("resized");
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const lineAnimation = {
    hidden: { scaleX: 0, transformOrigin: "left" },
    visible: { scaleX: 10, transformOrigin: "left" },
  };

  const gradientStyle = {
    background:
      "radial-gradient(circle at 80% 80%, rgba(50, 50, 50, 1) 0%, rgba(20, 20, 20, 1) 100%)",
    height: "100vh",
  };
  const numElements = screenWidth < 600 ? 5 : 10;

  return (
    <div
      id="contact"
      style={gradientStyle}
      className="relative font-MSLight uppercase text-[0.6rem] text-gray-200 "
    >
      <div className="pt-[20vh] sm:pt-[5vh] ml-[2.5rem] sm:ml-[10rem] text-[4rem] ">
        <Reveal>
          <h1 className="text-[2.5rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[6rem]  text-gray-200">
            Let's talk!
          </h1>
        </Reveal>
        <div className="pl-[2rem] mt-[1rem] text-[1.5rem] sm:text-[2rem] xl:text-[2rem]">
          <Reveal>
            <motion.a
              className="block pb-4"
              href="https://www.linkedin.com/in/sonja-künzl-879aba172/"
              target="_blank"
              rel="noopener noreferrer"
              initial="hidden"
              whileHover="visible"
              animate="hidden"
            >
              <span>LinkedIn</span>
              <motion.div
                className="border-b-[0.01rem] -mt-[0.2rem]"
                variants={lineAnimation}
                transition={{ duration: 0.5 }}
              />
            </motion.a>
          </Reveal>
          <Reveal>
            <motion.a
              className="block pb-4"
              href="https://github.com/sonjaknzl"
              target="_blank"
              rel="noopener noreferrer"
              initial="hidden"
              whileHover="visible"
              animate="hidden"
            >
              <span>GitHub</span>
              <motion.div
                className="border-b-[0.01rem] -mt-[0.2rem]"
                variants={lineAnimation}
                transition={{ duration: 0.5 }}
              />
            </motion.a>
          </Reveal>
          <Reveal>
            <motion.a
              className="block pb-4"
              href="mailto:sonjakuenzl@aol.com"
              target="_blank"
              rel="noopener noreferrer"
              initial="hidden"
              whileHover="visible"
              animate="hidden"
            >
              <span>Mail</span>
              <motion.div
                className="border-b-[0.01rem] -mt-[0.2rem]"
                variants={lineAnimation}
                transition={{ duration: 0.5 }}
              />
            </motion.a>
          </Reveal>
        </div>
      </div>
      <div
        key={reloadKey}
        className=" absolute border-gray-400 bottom-[5vh] flex justify-around w-[200vw] transform -translate-x-[100vw] p-2 border-t-[0.01rem] border-b-[0.01rem] "
      >
        <AnimatePresence>
          {Array.from({ length: numElements }, (_, index) => (
            <motion.div
              key={index}
              animate={{ x: getScreenWidth() }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
              className="whitespace-nowrap"
            >
              <p className="w-fit">Contact me!</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Contact;
