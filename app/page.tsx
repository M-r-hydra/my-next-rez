// Next
import { Metadata } from "next";
// Next

// React
import React from "react";
// React

// CSS
import "./index.css";
import styles from "./home.module.css";
// CSS

// Components
import TypeEffect from "./Route_ClientComponents/Home/TypeEffect/TypeEffect";
import { lang } from "./Constants/constants";
import { Fade } from "react-awesome-reveal";
// Components

const page = () => {
  const currLang = "en";
  return (
    <Fade className="w-full h-full" duration={200}>
      <div
        className={`${styles.homeContainer} w-full h-full flex flex-col items-center justify-center`}
      >
        <p className={`${styles.myName}`}>{lang(currLang).name}</p>
        <TypeEffect />
      </div>
    </Fade>
  );
};

export default page;
