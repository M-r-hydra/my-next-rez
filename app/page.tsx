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
// Components

export const metadata: Metadata = {
  title: "Ali Goodarzi Online CV",
  description: "Im Ali Goodarzi , Im Mid-Level FrontEnd Web Developer",
};

const page = () => {
  return (
    <div
      className={`${styles.homeContainer} w-full h-full flex flex-col items-center justify-center`}
    >
      <p className={`${styles.myName}`}>Ali Goodarzi</p>
      <TypeEffect />
    </div>
  );
};

export default page;
