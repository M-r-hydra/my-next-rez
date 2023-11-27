// React
import React, { useCallback, useEffect, useState } from "react";
// React

// CSS
import styles from "./ChangeLinksColor.module.css";
// CSS

// Modules
import { usePathname } from "next/navigation";
// Modules

const ChangeLinksColor = () => {
  const [themeColor, setThemeColor] = useState<string>("rgb(238, 97, 146)");
  const currPath = usePathname();

  const colorOfSvgChanger = useCallback(() => {
    const all_A_tags = document.getElementsByTagName("a");
    if (all_A_tags.length === 0) return;
    for (let i = 0; i <= all_A_tags.length - 1; i++) {
      if (all_A_tags[i].getAttribute("data-href") === currPath) {
        all_A_tags[i].classList.add(styles.activeLink);
      } else {
        all_A_tags[i].classList.remove(styles.activeLink);
      }
    }
  }, [currPath]);

  const changeBackgroundColorOfThemeEffectElements = () => {
    const allEments = document.getElementsByTagName("p");
    if (allEments.length === 0) return;
    for (let i = 0; i <= allEments.length - 1; i++) {
      if (allEments[i].getAttribute("data-theme-effect") === "true") {
        allEments[i].classList.add(styles.elementTheme);
      }
    }
  };

  // const changeBorderColorByThemeChange = () => {
  //   const allEments = document.querySelectorAll(
  //     "[data-theme-effect-property='border']"
  //   );
  //   console.log(allEments);
  //   if (allEments.length === 0) return;
  //   for (let i = 0; i <= allEments.length - 1; i++) {
  //     allEments.forEach((item) => {
  //       const _i: any = item;
  //       _i.addEventListener("mouseenter", () => {
  //         _i.style.border = `1px solid ${themeColor} !important`;
  //       });
  //       _i.addEventListener("mouseout", () => {
  //         _i.style.border = `1px solid transparent !important`;
  //       });
  //     });
  //   }
  // };

  useEffect(() => {
    colorOfSvgChanger();
    changeBackgroundColorOfThemeEffectElements();
    // changeBorderColorByThemeChange();
  });
  return <div></div>;
};

export default ChangeLinksColor;
