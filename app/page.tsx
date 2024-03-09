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
import { useRouter } from "next/router";
import { lang } from "./Constants/constants";
// Components

export const metadata: Metadata = {
  title: "Ali Goodarzi Online CV",
  description: "Im Ali Goodarzi , Im Mid-Level FrontEnd Web Developer",
};

const page = (ctx: any) => {
  const currLang = ctx?.searchParams?.lang || "en";
  return (
    <div
      className={`${styles.homeContainer} w-full h-full flex flex-col items-center justify-center`}
    >
      <p className={`${styles.myName}`}>{lang(currLang).name}</p>
      <TypeEffect />
    </div>
  );
};

export default page;
