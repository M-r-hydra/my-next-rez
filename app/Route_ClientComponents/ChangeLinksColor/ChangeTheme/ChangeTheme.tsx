"use client";
// React
import React from "react";
// React

// CSS
import styles from "./ChangeTheme.module.css";
// CSS

type ChangeThemeProps = {
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  setIsThemeSelectorInScreen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ChangeTheme: React.FunctionComponent<ChangeThemeProps> = ({
  setIsThemeSelectorInScreen,
  setTheme,
}) => {
  const themes = [
    {
      id: "c-1",
      colorCode: "rgb(90, 194, 78)",
    },
    {
      id: "c-2",
      colorCode: "rgb(101, 180, 243)",
    },
    {
      id: "c-3",
      colorCode: "rgb(245, 166, 64)",
    },
    {
      id: "c-4",
      colorCode: "rgb(238, 97, 146)",
    },
    {
      id: "c-5",
      colorCode: "rgb(187, 104, 200)",
    },
    {
      id: "c-6",
      colorCode: "rgb(238, 83, 79)",
    },
    {
      id: "c-7",
      colorCode: "rgb(0, 100, 20)",
    },
    {
      id: "c-8",
      colorCode: "rgb(125, 125, 125)",
    },
  ];
  return (
    <div
      className={`${styles.themeContainer} flex flex-col items-center fixed right-0 top-10 bg-slate-200 p-4 rounded-lg z-50`}
    >
      <p>select one of thease</p>
      <div className={`${styles.themesColorsContainer} `}>
        {themes.map((item) => (
          <span
            key={item.id}
            style={{
              background: item.colorCode,
            }}
            className="rounded-full"
            onClick={() => {
              setTheme(item.colorCode);
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ChangeTheme;
