// React
import React from "react";
// React

// CSS
import styles from "./MyEducation.module.css";
// CSS

// Data
import { myEducation } from "@/app/Data/myEducation";
// Data

// Components
import CardForEducation from "./CardForEducation/CardForEducation";
// Components

// Theme
import { currTheme } from "@/app/Data/currTheme";
// Theme

const page = () => {
  return (
    <div className={`${styles.myEducationContainer} w-full h-full py-4 px-8`}>
      {myEducation.map((item) => {
        return (
          <CardForEducation key={item.id} item={item} themeColor={currTheme} />
        );
      })}
    </div>
  );
};

export default page;
