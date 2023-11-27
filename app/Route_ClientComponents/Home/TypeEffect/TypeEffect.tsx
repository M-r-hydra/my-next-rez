"use client";
// React
import React from "react";
// React

// CSS
import styles from "./TypeEffect.module.css";
// CSS

// Components
import Typewriter from "typewriter-effect";
// Components

const TypeEffect = () => {
  return (
    <>
      <Typewriter
        options={{
          strings: [
            "Mid Level FrontEnd Web Developer .",
            "Working Form Home ( Remote )  .",
            "Learning right now Node.Js & Express.Js .",
            "Trying To be MERN Stack Web Developer .",
          ],
          autoStart: true,
          loop: true,
          wrapperClassName: styles.wrapper_x,
          cursorClassName: styles.cursor,
        }}
      />
    </>
  );
};

export default TypeEffect;
