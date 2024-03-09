"use client";
// React
import React from "react";
// React

// CSS
import styles from "./TypeEffect.module.css";
// CSS

// Components
import Typewriter from "typewriter-effect";
import { lang } from "@/app/Constants/constants";
import { useSearchParams } from "next/navigation";
// Components

const TypeEffect = (ctx: any) => {
  const searchParams = useSearchParams();
  const currLang = searchParams.get("lang") || "en";

  return (
    <>
      <Typewriter
        options={{
          strings: lang(currLang).skills as string[],
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
